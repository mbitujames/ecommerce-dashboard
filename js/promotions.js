// Promotions-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Sample promotions data
    const promotions = [
        { 
            id: 1, 
            name: 'Summer Sale', 
            status: 'active', 
            discount: '20% off all items', 
            validFrom: 'Jun 1, 2023', 
            validTo: 'Aug 31, 2023', 
            usage: '342/500 redemptions',
            type: 'percentage'
        },
        { 
            id: 2, 
            name: 'Back to School', 
            status: 'scheduled', 
            discount: '15% off school supplies', 
            validFrom: 'Aug 15, 2023', 
            validTo: 'Sep 15, 2023', 
            usage: '0/1000 redemptions',
            type: 'category'
        },
        { 
            id: 3, 
            name: 'Spring Clearance', 
            status: 'expired', 
            discount: 'Up to 50% off', 
            validFrom: 'Mar 1, 2023', 
            validTo: 'May 31, 2023', 
            usage: '892 redemptions',
            type: 'sitewide'
        },
        { 
            id: 4, 
            name: 'New Customer Discount', 
            status: 'active', 
            discount: '10% off first order', 
            validFrom: 'Jan 1, 2023', 
            validTo: 'Dec 31, 2023', 
            usage: '215/∞ redemptions',
            type: 'targeted'
        },
        { 
            id: 5, 
            name: 'Black Friday', 
            status: 'scheduled', 
            discount: '30% off everything', 
            validFrom: 'Nov 24, 2023', 
            validTo: 'Nov 27, 2023', 
            usage: '0/∞ redemptions',
            type: 'sitewide'
        }
    ];

    // Load more promotions button
    const loadMoreBtn = document.querySelector('.btn-load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // In a real app, this would fetch more promotions from an API
            console.log('Loading more promotions...');
            this.textContent = 'No more promotions to load';
            this.disabled = true;
        });
    }

    // Promotion action buttons
    document.querySelectorAll('.promotion-actions button').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.classList.contains('btn-edit') ? 'edit' :
                          this.classList.contains('btn-deactivate') ? 'deactivate' :
                          this.classList.contains('btn-cancel') ? 'cancel' :
                          this.classList.contains('btn-clone') ? 'clone' :
                          this.classList.contains('btn-delete') ? 'delete' : '';
            
            if (action) {
                console.log(`${action} promotion clicked`);
                // In a real app, this would trigger the appropriate action
            }
        });
    });

    // Create new promotion
    const createPromotionBtn = document.querySelector('.section-actions .btn-primary');
    if (createPromotionBtn) {
        createPromotionBtn.addEventListener('click', function() {
            // In a real app, this would open a modal or navigate to a form
            console.log('Create new promotion');
        });
    }
});