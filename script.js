// Shared JavaScript across all pages
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to major cards
    const majorCards = document.querySelectorAll('.major-card');
    
    majorCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('animate__pulse');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('animate__pulse');
        });
        
        // Click handler for major cards
        card.addEventListener('click', function() {
            const major = this.getAttribute('data-major');
            window.location.href = `about.html#${major}`;
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }
    });
});