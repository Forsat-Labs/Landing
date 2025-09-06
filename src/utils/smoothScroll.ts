// Utility functions for smooth scrolling with Lenis
export const scrollToElement = (elementId: string, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// For use with Lenis instance if needed
export const scrollToElementWithLenis = (lenis: any, elementId: string, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element && lenis) {
    lenis.scrollTo(element, { offset: -offset });
  }
};
