// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const shapes = document.querySelectorAll('.shape');
    const scrolled = window.pageYOffset;
    
    shapes.forEach(shape => {
        const speed = shape.getAttribute('data-speed') || 0.5;
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Random color changes for shapes
setInterval(() => {
    document.querySelectorAll('.shape').forEach(shape => {
        const randomColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`;
        shape.style.background = randomColor;
    });
}, 3000); 