const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const Confirmpassword = document.querySelector('#Confirmpassword');

form.addEventListener('submit', (e) => {
    if (validateInputs()) {
        e.preventDefault()
    }
})
function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const ConfirmpasswordVal = Confirmpassword.value.trim();
    let sucess = true;

    if (usernameVal === '') {
        sucess = false;
        setError(username, 'Username is required')
    }
    else {
        setSucess(username);
    }

    if (emailVal === '') {
        sucess = false;
        setError(email, 'eamil is required')
    }
    else if (!validateEmail(emailVal)) {
        sucess = false;
        setError(email, 'please enter the vaid email')
    }
    else {
        setSucess(email)
    }
    if (passwordVal === '') {
        sucess = false;
        setError(password, 'password is required')
    }
    else if (passwordVal.length < 8) {
        sucess = false;
        setError(password, 'Passowrd must be atleste 8 charater')
    }
    else {
        setSucess(password)
    }
    if (ConfirmpasswordVal === '') {
        sucess = false;
        setError(Confirmpassword, 'Confirm pasword is required')
    }
    else if (ConfirmpasswordVal !== passwordVal) {
        sucess = false;
        setError(Confirmpassword, 'pasword does not matched')
    } else {
        setSucess(Confirmpassword)
    }
    return true;
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('sucess')
}


function setSucess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = '';
    inputGroup.classList.add('sucess')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};