
// Animation utility for handling scroll animations

export const setupScrollAnimations = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the animated class but don't remove it on exit
        // This prevents the element from disappearing when hovering
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  // Pre-initialize elements that might already be in view
  elements.forEach(el => {
    // Add a base opacity to ensure elements are at least partially visible
    // even before animation is triggered
    el.classList.add('opacity-30');
    observer.observe(el);
  });

  return {
    cleanup: () => {
      elements.forEach(el => observer.unobserve(el));
    }
  };
};

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });
  }
};
