document.addEventListener('DOMContentLoaded', function() {
    const subscribeForm = document.getElementById('subscribeForm');
    
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        // Pouze ukazuje alert, normálně by zde byl backend kód
        alert(`Thank you for subscribing with: ${email}`);
        
        // Vyčištění formy
        emailInput.value = '';
    });
});