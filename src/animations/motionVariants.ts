export const fadeInLeft = {
  initial: { x: -50, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 1, ease: "easeInOut" },
  viewport: { once: true, amount: 0.2 },
};

export const fadeInRight = {
  initial: { x: 50, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 1, ease: "easeInOut" },
  viewport: { once: true, amount: 0.2 },
};

export const fadeInUp = {
  initial: { y: 50, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 1, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

export const heroFadeInLeft = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 1, ease: "easeInOut" },
};

export const heroFadeInRight = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 1, ease: "easeInOut" },
};

export const heroFadeInUp = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1, ease: "easeOut" },
};
