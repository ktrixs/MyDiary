document.addEventListener('DOMContentLoaded', function(e) {
    let rules = [];
    let forEach = Array.prototype.forEach;

    let rulesElement = document.querySelectorAll('span[data-rule]');

    forEach.call(rulesElement, function(element) {
        let rule = element.getAttribute('data-rule');
        if(rules.indexOf(rules) < 0) {
            rules.push(rule);
        }
    });

    const validate = () => {
        let messages = document.querySelectorAll(".validation-messages span");
        forEach.call(messages, function(message) {
            console.log(message);
            message.classList.add('hide');
        });

        document.getElementById('form').checkValidity();
    };

    const validationFail = (e) => {
        let element, validity;

        element = e.currentTarget;
        validity = element.validity;

        if(!validity.valid) {
            rules.forEach(function(rule) {
                checkRule(validity, rule, element);
            });
            e.preventDefault();
        }
    }

    const checkRule = (state, rule, element) => {
        if(state[rule]) {
            let container = element
                            .nextElementSibling
                            .querySelectorAll('[data-rule="' + rule + '"]');

            forEach.call(container, function(rule) {
                rule.classList.remove('hide');
            });
        }
    }

    let inputElements = document.querySelectorAll('input:not(button)');

    forEach.call(inputElements, function(input) {
        input.oninvalid = validationFail;
        input.onblur = validate;
    });

    document.getElementById('login-button').addEventListener('click', validate, false);
});








    // const email = document.getElementById('email');
// const secret = document.getElementById('password');
// const form = document.getElementById('form');
// const errorElement = document.getElementById('error');
// const regex = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/";
// console.log(secret.value.length); 

// form.addEventListener('submit', (e) => {
//     let message = [];
//     if(email.value === '' || email.value === null) {
//         message.push('Email is required');
//     }

//     if(secret.value !== regex) {
//         message.push('Password should contain atleast one digit, one lower case, one upper case, ');
//     }
    
//     if(message.length > 0) {
//         e.preventDefault();
//         errorElement.innerText = message.join(', ');
//     }
// });
