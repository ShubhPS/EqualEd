// Form validation
const form = document.getElementById('signupForm');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Password validation
    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match!');
        return;
    }

    // Password strength validation
    if (password.value.length < 8) {
        alert('Password must be at least 8 characters long!');
        return;
    }

    // If validation passes, you would typically send the data to your server
    console.log('Form submitted successfully!');
    // Add your form submission logic here
});

// Accessibility controls
const highContrastCheckbox = document.getElementById('high-contrast');
const largeTextCheckbox = document.getElementById('large-text');

highContrastCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('high-contrast');
});

largeTextCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('large-text');
});