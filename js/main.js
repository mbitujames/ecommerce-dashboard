// Shared functionality across all pages
document.addEventListener('DOMContentLoaded', function() {
    // Update current date and time
    function updateDateTime() {
        const now = new Date();
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        
        const currentDate = document.getElementById('current-date');
        const currentTime = document.getElementById('current-time');
        
        if (currentDate) currentDate.textContent = now.toLocaleDateString('en-US', dateOptions);
        if (currentTime) currentTime.textContent = now.toLocaleTimeString('en-US', timeOptions);
    }
    
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    // Set active nav item based on current page
    function setActiveNavItem() {
        const navLinks = document.querySelectorAll('.nav-menu a');
        const currentPage = window.location.pathname.split('/').pop();
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage || 
                (currentPage === '' && linkPage === 'index.html') ||
                (currentPage === undefined && linkPage === 'index.html')) {
                link.parentElement.classList.add('active');
            } else {
                link.parentElement.classList.remove('active');
            }
        });
    }
    
    setActiveNavItem();
    
    // Add animation to cards on hover
    document.querySelectorAll('.metric-card, .product-card, .promotion-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
});