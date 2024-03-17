function validateForm(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!validateUsername(username)) {
        alert('the password should have Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long.');
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

function validateUsername(username) {
    const usernameRegex = /^[a-z0-9_-]{3,16}$/;
    return usernameRegex.test(username)
}

function validateEmail(email) {
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10})*$/;
    return emailRegex.test(email);
}

function validatePass(pass) {
    const passRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
    return passRegex.test(pass)
}