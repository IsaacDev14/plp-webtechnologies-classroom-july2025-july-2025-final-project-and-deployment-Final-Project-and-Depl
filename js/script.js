document.addEventListener('DOMContentLoaded', () => {
    // --- PART 1: MOBILE MENU TOGGLE ---

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        // Show the hamburger button only on mobile/tablet view
        if (window.innerWidth < 768) {
             menuToggle.style.display = 'block';
             navLinks.classList.add('mobile-hidden'); // Initial state: hidden
        }
        
        menuToggle.addEventListener('click', () => {
            // Toggle visibility of the navigation links
            navLinks.classList.toggle('mobile-hidden'); 
            
            // Toggle aria-expanded attribute for accessibility
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // --- PART 2: CONTACT FORM VALIDATION ---

    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            validateForm();
        });
    }

    function validateForm() {
        let isValid = true;
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');

        // Clear all previous errors
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

        // 1. Validate Name
        if (nameInput.value.trim().length < 2) {
            displayError('nameError', 'Name must be at least 2 characters.');
            isValid = false;
        }

        // 2. Validate Email
        if (emailInput.value.trim() === '') {
            displayError('emailError', 'Email is required.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            displayError('emailError', 'Please enter a valid email format.');
            isValid = false;
        }
        
        // 3. Validate Subject
        if (subjectInput.value.trim().length < 5) {
            displayError('subjectError', 'Subject must be descriptive (at least 5 characters).');
            isValid = false;
        }

        // 4. Validate Message
        if (messageInput.value.trim().length < 10) {
            displayError('messageError', 'Message must be at least 10 characters long.');
            isValid = false;
        }

        // 5. Successful Submission Handler
        if (isValid) {
            // Simulate form processing
            alert('Thank you for your message! It has been successfully validated and is ready to send.');
            form.reset();
        }
    }

    // Email validation using a standard regex pattern
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Function to display error message in the designated element
    function displayError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }
});