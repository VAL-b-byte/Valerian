// Example of basic interactivity (optional)
document.addEventListener('DOMContentLoaded', () => {
  // Here you can add functionality for user interaction, like a contact form or popups
  console.log("FinPulse website loaded successfully.");
  document.addEventListener('DOMContentLoaded', () => {
    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent page reload on form submit

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulate sending the form (you can integrate it with an API or backend service here)
        console.log("Contact Form Submitted:", { name, email, message });

        // Display success message
        formStatus.textContent = "Thank you for contacting us, " + name + ". We'll get back to you soon!";
        formStatus.style.color = "green";

        // Optionally, clear form fields
        contactForm.reset();
    });
});

});
