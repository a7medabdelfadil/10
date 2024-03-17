function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (name === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!validatePass(password)) {
        alert('the password should have Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long.');
        return;
    }

    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset();
}

function validateEmail(email) {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10})*$/;
    return emailRegex.test(email);
}

function validatePass(pass) {
    const passRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
    return passRegex.test(pass)
}
