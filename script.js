document.addEventListener('DOMContentLoaded', function() {
    const subscribeForm = document.getElementById('subscribeForm');
    
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        // Here you would typically send this to a backend server
        // For now, we'll just show an alert
        alert(`Thank you for subscribing with: ${email}`);
        
        // Clear the form
        emailInput.value = '';
    });
});