const email = document.getElementById('email');
const secret = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const regex = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/";
console.log(secret.value.length);

form.addEventListener('submit', (e) => {
    let message = [];
    if(email.value === '' || email.value === null) {
        message.push('Email is required');
    }

    if(secret.value !== regex) {
        message.push('Password should contain atleast one digit, one lower case, one upper case, ');
    }
    
    if(message.length > 0) {
        e.preventDefault();
        errorElement.innerText = message.join(', ');
    }
});
