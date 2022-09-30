export const polyVariant = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      stiffness: 1000,
      velocity: -1000,
    },
  },
  hidden: {
    y: 25,
    opacity: 0,
    transition: {},
  },
}

export const staggerItems = {
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}
