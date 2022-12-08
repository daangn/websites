export const chatAnimationInfiteLoop = false;

export const messageMotionOption = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  transition: {
    duration: 0.3,
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
  layout: true,
};
