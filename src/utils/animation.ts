
// Animation utility for handling scroll animations

export const setupScrollAnimations = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1, // Lower threshold to trigger earlier
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the animated class and ensure it stays
        entry.target.classList.add('animated');
        
        // Once animation is complete, we can stop observing to prevent repeated animations
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  // Pre-initialize elements that might already be in view
  elements.forEach(el => {
    // Start with base opacity but make sure it's visible
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
