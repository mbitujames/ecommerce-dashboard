// Settings-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelector('.tab-btn.active').classList.remove('active');
            document.querySelector('.tab-content.active').classList.remove('active');
            
            this.classList.add('active');
            document.getElementById(`${this.dataset.tab}-tab`).classList.add('active');
        });
    });

    // File upload preview
    const logoUpload = document.getElementById('logo-upload');
    if (logoUpload) {
        logoUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    document.querySelector('.logo-preview').src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    // Save settings form
    const settingsForm = document.querySelector('.settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real app, this would save the settings to a server
            console.log('Settings saved');
            alert('Settings saved successfully!');
        });
    }

    // Payment method toggles
    document.querySelectorAll('.method-card .switch input').forEach(toggle => {
        toggle.addEventListener('change', function() {
            const method = this.closest('.method-card').querySelector('img').alt;
            console.log(`${method} payment method ${this.checked ? 'enabled' : 'disabled'}`);
        });
    });

    // Configure payment methods
    document.querySelectorAll('.btn-configure').forEach(btn => {
        btn.addEventListener('click', function() {
            const method = this.closest('.method-card').querySelector('img').alt;
            console.log(`Configuring ${method} payment method`);
            // In a real app, this would open a configuration modal
        });
    });
});