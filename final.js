document.addEventListener('DOMContentLoaded', () => {
    // GSAP animations for header and menu
    gsap.from('header', { duration: 1, y: -100, opacity: 0, ease: 'power2.out' });
    
    gsap.from('.hero-content', { duration: 1, opacity: 0, scale: 0.8, ease: 'power2.out', delay: 0.5 });
    
    gsap.from('.feature', {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: 'power2.out',
        delay: 1.2
    });

// Ensure that the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});

    
});
