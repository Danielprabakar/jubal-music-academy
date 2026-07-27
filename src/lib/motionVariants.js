// Shared, deliberately varied scroll-entrance variants — used across pages
// so different sections/photos don't all animate in with the same fade-up.

export const swipeLeft = {
  hidden: { opacity: 0, x: -70 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const swipeRight = {
  hidden: { opacity: 0, x: 70 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const swipeUpPop = {
  hidden: { opacity: 0, y: 70, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const swirlIn = {
  hidden: { opacity: 0, scale: 0.6, rotate: -10 },
  show: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.9, ease: [0.34, 1.56, 0.64, 1] } },
};

export const rotateSwipe = {
  hidden: { opacity: 0, rotateY: 55, x: 60 },
  show: { opacity: 1, rotateY: 0, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const staggerParent = (stagger = 0.12) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
});
