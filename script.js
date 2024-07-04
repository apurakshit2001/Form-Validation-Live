const checkIcon = '✔️';
const crossIcon = '❌';

let nameInput = '';
let nameValidationMessage = document.getElementById('nameValidationMessage');
let nameValidation = document.getElementById('ValidationMessage');
let nameValidation1 = document.getElementById('ValidationMessage1');

let emailInput = '';
let emailValidationMessage1 = document.getElementById('emailValidationMessage1');
let emailValidationMessage2 = document.getElementById('emailValidationMessage2');
let emailValidationMessage3 = document.getElementById('emailValidationMessage3');
let emailValidationMessage4 = document.getElementById('emailValidationMessage4');
let emailValidationMessage5 = document.getElementById('emailValidationMessage5');

let enteredPassword = '';
let PasswordValidationMessage1 = document.getElementById('PasswordValidationMessage1');
let PasswordValidationMessage2 = document.getElementById('PasswordValidationMessage2');
let PasswordValidationMessage3 = document.getElementById('PasswordValidationMessage3');
let PasswordValidationMessage4 = document.getElementById('PasswordValidationMessage4');
let PasswordValidationMessage5 = document.getElementById('PasswordValidationMessage5');

let CPassword = '';
let CPasswordValidationMessage1 = document.getElementById('CPasswordValidationMessage1');

function validateName() {
    nameInput = document.getElementById('iName').value;

    clearNameValidationMessages();

    for (let i = 0; i < nameInput.length; i++) {
        let lowerCase = nameInput[i].toLowerCase();
        if (lowerCase >= 'a' && lowerCase <= 'z' || lowerCase === ' ') {
            nameValidation1.innerHTML = `${checkIcon} All characters of Name are alphabetical.`;
        } else {
            nameValidation1.innerHTML = `${crossIcon} Name should be alphabetical.`;
            return;
        }
    }

    if (nameInput.trim() === '') {
        nameValidationMessage.innerHTML = `${crossIcon} Please enter a name.`;
        nameValidation1.innerHTML = `${crossIcon} Name should be alphabetical.`;
        return;
    }

    if (nameInput.length < 3) {
        nameValidation.innerHTML = `${crossIcon} Name length should be minimum 3.`;
        nameValidationMessage.innerHTML = `${crossIcon} Please enter a valid name.`;
        return;
    }

    nameValidationMessage.innerHTML = `${checkIcon} Name is entered correctly.`;
    nameValidation.innerHTML = `${checkIcon} Name length is more than 2.`;

    return true;
}

function validateEmail() {
    emailInput = document.getElementById('iEmail').value;

    clearEmailValidationMessages();

    let indexOfAt = emailInput.indexOf('@');
    let indexOfDot = emailInput.lastIndexOf('.');

    if (!emailInput) {
        emailValidationMessage1.innerHTML = `${crossIcon} Please enter a valid email.`;
        return false;
    }

    if (indexOfAt < 3) {
        emailValidationMessage1.innerHTML = `${crossIcon} Please enter a valid email.`;
        emailValidationMessage2.innerHTML = `${crossIcon} Username length should be more than 2.`;
        return false;
    } else {
        emailValidationMessage2.innerHTML = `${checkIcon} Username length is more than 2.`;
    }

    if ((emailInput.length - indexOfDot) <= 2) {
        emailValidationMessage3.innerHTML = `${crossIcon} Dot position is invalid.`;
        return false;
    } else {
        emailValidationMessage3.innerHTML = `${checkIcon} Dot position is entered correctly.`;
    }

    if (indexOfDot - indexOfAt < 2) {
        emailValidationMessage4.innerHTML = `${crossIcon} Domain is invalid.`;
        return false;
    } else {
        emailValidationMessage4.innerHTML = `${checkIcon} Domain is valid.`;
    }

    if (indexOfAt !== emailInput.lastIndexOf('@')) {
        emailValidationMessage5.innerHTML = `${crossIcon} @ shouldn't be more than 1.`;
        return false;
    } else {
        emailValidationMessage5.innerHTML = `${checkIcon} @ is valid.`;
    }

    emailValidationMessage1.innerHTML = `${checkIcon} Email is entered correctly.`;
    return true;
}

function validatePassword() {
    enteredPassword = document.getElementById('iPassword').value;

    clearPasswordValidationMessages();

    let hasLowerCase = /[a-z]/.test(enteredPassword);
    let hasUpperCase = /[A-Z]/.test(enteredPassword);
    let hasNumber = /[0-9]/.test(enteredPassword);
    let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(enteredPassword);
    let minLength = enteredPassword.length >= 8;

    if (!hasLowerCase) {
        PasswordValidationMessage1.innerHTML = `${crossIcon} Password must contain at least one lowercase letter.`;
    } else {
        PasswordValidationMessage1.innerHTML = `${checkIcon} Contains a lowercase letter.`;
    }

    if (!hasUpperCase) {
        PasswordValidationMessage2.innerHTML = `${crossIcon} Password must contain at least one uppercase letter.`;
    } else {
        PasswordValidationMessage2.innerHTML = `${checkIcon} Contains an uppercase letter.`;
    }

    if (!hasNumber) {
        PasswordValidationMessage3.innerHTML = `${crossIcon} Password must contain at least one number.`;
    } else {
        PasswordValidationMessage3.innerHTML = `${checkIcon} Contains a number.`;
    }

    if (!hasSpecialChar) {
        PasswordValidationMessage4.innerHTML = `${crossIcon} Password must contain at least one special character.`;
    } else {
        PasswordValidationMessage4.innerHTML = `${checkIcon} Contains a special character.`;
    }

    if (!minLength) {
        PasswordValidationMessage5.innerHTML = `${crossIcon} Password must be at least 8 characters long.`;
    } else {
        PasswordValidationMessage5.innerHTML = `${checkIcon} Meets the minimum length requirement.`;
    }
}

function validateCPassword() {
    validatePassword();

    CPassword = document.getElementById('iCPassword').value;

    if (CPassword !== enteredPassword) {
        CPasswordValidationMessage1.innerHTML = `${crossIcon} Passwords do not match.`;
    } else {
        CPasswordValidationMessage1.innerHTML = `${checkIcon} Passwords match.`;
    }
}

function clearNameValidationMessages() {
    nameValidationMessage.innerHTML = '';
    nameValidation.innerHTML = '';
    nameValidation1.innerHTML = '';
}

function clearEmailValidationMessages() {
    emailValidationMessage1.innerHTML = '';
    emailValidationMessage2.innerHTML = '';
    emailValidationMessage3.innerHTML = '';
    emailValidationMessage4.innerHTML = '';
    emailValidationMessage5.innerHTML = '';
}

function clearPasswordValidationMessages() {
    PasswordValidationMessage1.innerHTML = '';
    PasswordValidationMessage2.innerHTML = '';
    PasswordValidationMessage3.innerHTML = '';
    PasswordValidationMessage4.innerHTML = '';
    PasswordValidationMessage5.innerHTML = '';
}
