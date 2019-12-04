var contactForm = document.getElementById('contactForm');
var submitButton = document.getElementById('submit');
var userName = document.getElementById('username');
var email = document.getElementById('email');
var message = document.getElementById('message');
var isNamed;
var isEmailed;
var isMessaged;

submitButton.addEventListener('click', function () {
    userName.style.border = "";
    email.style.border = "";
    message.style.border = "";
    if (userName.value !== '') {
        isNamed = true;
    } else {
        isNamed = false;
        alert('Please enter your name');
        userName.focus();
        userName.style.border = "2px solid red";
    }
    if (email.value !== '') {
        if (email.value.indexOf('@') !== -1) {
            isEmailed = true;
        } else {
            isisEmailed = false;
            alert('Please make sure you enter a valid email address');
            email.focus();
            email.style.border = "2px solid red";
        }
    } else {
        isEmailed = false;
        alert('Please enter your email');
        email.focus();
        email.style.border = "2px solid red";
    }
    if (message.value !== '') {
        isMessaged = true;
    } else {
        isMessaged = false;
        alert('Please enter a message');
        message.focus();
        message.style.border = "2px solid red";
    }
    if (isNamed && isEmailed && isMessaged) {
        contactForm.submit();
    }
});