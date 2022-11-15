import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';

type Props = {
  children: React.ReactNode,
};

const transition = {
  duration: 1,
  delay: 0.1,
  ease: [0.04, 0.62, 0.23, 0.98],
};

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 30 },
};

type State = (
  | 'INITIAL_VISIBLE'
  | 'HIDDEN'
  | 'VISIBLE'
);

type Action = (
  | 'REDUCE_MOTION'
  | 'APPEAR'
  | 'DISAPPEAR'
);

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (state) {
    case 'INITIAL_VISIBLE': {
      switch (action) {
        case 'REDUCE_MOTION': return 'VISIBLE';
        case 'DISAPPEAR': return 'HIDDEN';
      }
      break;
    }
    case 'HIDDEN': {
      switch (action) {
        case 'APPEAR': return 'VISIBLE';
      }
      break;
    }
  }
  return state;
};

const FadeInWhenVisible: React.FC<Props> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(reducer, 'INITIAL_VISIBLE');

  const controls = useAnimation();
  const shouldReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({ initialInView: true, triggerOnce: true });

  React.useEffect(() => {
    if (shouldReducedMotion) {
      dispatch('REDUCE_MOTION');
    }
  }, [shouldReducedMotion]);

  React.useEffect(() => {
    if (inView) {
      dispatch('APPEAR');
    } else {
      dispatch('DISAPPEAR');
    }
  }, [inView]);

  React.useEffect(() => {
    switch (state) {
      case 'HIDDEN':
        controls.set('hidden');
        break;
      case 'VISIBLE':
        controls.start('visible');
        break;
    }
  }, [controls, state]);

  return (
    <motion.div
      ref={ref}
      initial="visible"
      animate={controls}
      transition={transition}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
