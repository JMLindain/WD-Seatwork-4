document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('input[name="email"]');
    const subscribeButton = document.querySelector('button[type="submit"]');

    subscribeButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (emailInput.value) {
            alert(`Thank you for subscribing with email: ${emailInput.value}`);
            emailInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a valid email address.');
        }
    });
});
