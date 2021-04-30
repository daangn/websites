import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const transition = {
  duration: 1,
  delay: 0.1,
  ease: [0.04, 0.62, 0.23, 0.98],
};

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 30 },
};

const FadeInWhenVisible: React.FC = ({
  children,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const [isMounted, mount] = React.useReducer(() => true, false);
  React.useEffect(() => {
    mount();
  }, []);

  React.useEffect(() => {
    if (!isMounted && !inView) {
      controls.set('hidden');
    }
  }, [isMounted, inView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="visible"
      exit="hidden"
      transition={transition}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
