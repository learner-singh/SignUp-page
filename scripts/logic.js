console.log("Logic.js called")

window.addEventListener('load', bindEvents);

let input;
let firstName;
let surname;
let email;
let password;
let confPassword;
let submit;
let strength;

function bindEvents() {
    console.log('bindEvents called')
    input = document.getElementsByTagName('input');
    for(let i of input) {
        i.addEventListener('blur', blurEvent)
    }

    firstName = document.getElementById('first-name')
    surname = document.getElementById('surname')

    email = document.getElementById('email');
    email.addEventListener('change', emailCheck);

    password = document.getElementById('password');
    // password.addEventListener('keyup', checkPasswordStrength)
    // password.addEventListener('change', checkPasswordStrength)

    confPassword = document.getElementById('confirm-password');
    confPassword.addEventListener('blur', matchPassword)

    submit = document.getElementById('submit');
    submit.addEventListener('click', submitData)

}

function blurEvent() {
    console.log("blur event called");
    if(this.value == "") {
        this.style.border = '2px solid red';
        // alert('Dont leave empty cell..!!')
    }
    else {
        this.style.border = '1px solid grey';
    }
}

function emailCheck() {
    console.log('Email Check called')
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        alert("Invalid email. Please fill your genuine E-mail id..!!")
        // email.focus();
        email.removeEventListener('blur')
    }
}

function checkPasswordStrength() {
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
    if(strongPassword.test(password.value)) {
        password.style.border = '1px solid green';
        // console.log('Password Strength is Strong...');
        alert(` Password Matched
        Password Strength is Strong...`);
        strength = "Strong";
    }
    else if(mediumPassword.test(password.value)) {
        password.style.border = '1px solid yellow';
        alert(` Password Matched
        Password Strength is Medium...`);
        // console.log('Password Strength is Medium...');
        strength = "Medium";

    }
    else {
        password.style.border = '1px solid orangee';
        alert(` Password Matched
        Password Strength is Weak...`)
        // console.log('Password Strength is Weak...');
        strength = "Weak";
    }
}

function matchPassword() {
    if(password.value === confPassword.value) {
        // alert('Password Match');
    // /password.addEventListener('change', checkPasswordStrength)
    checkPasswordStrength();

        
    }
    else {
        alert("Password Does not match");
    }
}

function submitData() {
    alert(` Name: ${firstName.value}  ${surname.value}
    E-mail: ${email.value}
    Password Strength: ${strength} `)
}

