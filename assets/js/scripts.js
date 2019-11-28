const contactForm = document.getElementById('contactForm');
const submitButton = document.getElementById('submit');
let userName = document.getElementById('username');
let email = document.getElementById('email');
let message = document.getElementById('message');
let isNamed;
let isEmailed;
let isMessaged;



submitButton.addEventListener('click', function () {
    if (userName.value !== '') {
        isNamed = true;
    } else {
        isNamed = false;
        alert('Please enter your name');
        userName.focus();
    }
    if (email.value !== '') {
        if (email.value.indexOf('@') !== -1) {
            isEmailed = true;
        } else {
            isisEmailed = false;
            alert('Please make sure you enter a valid email address');
            email.focus();
        }
    } else {
        isEmailed = false;
        alert('Please enter your email');
        email.focus();
    }
    if (message.value !== '') {
        isMessaged = true;
    } else {
        isMessaged = false;
        alert('Please enter a message');
        message.focus();
    }
    if (isNamed === true && isEmailed === true && isMessaged === true) {
        contactForm.submit();
    }
});