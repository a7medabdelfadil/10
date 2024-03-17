function validateForm(e) {
    e.preventDefault();

    let 
    username = document.getElementById('username').value.trim(),
    email = document.getElementById('email').value.trim(),
    password = document.getElementById('password').value.trim();

    if (!validateUsername(username)) {
        alert('username should have a length of 3 to 16 characters')
        return;
    }
    
    if (!validateEmail(email)) {
        alert('please enter a valid email')
        return;
    }
    
    if (!validatePassword(password)) {
        alert('Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long')
        return;
    }
    alert('form submitted successfully');
    document.getElementById('form').reset();
}

function validateUsername(username) {
    let usernameRegex = /^[a-z0-9_-]{3,16}$/;
    return usernameRegex.test(username)
}

function validateEmail(email) {
    let emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10})*$/;
    return emailRegex.test(email)
}

function validatePassword(password) {
    let passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
    return passwordRegex.test(password)
}