const form = document.getElementById('registerForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');

function validateRegisterForm(event) {
    let valid = true;


    const nameRegex = /^[A-Za-zА-Яа-яЁё]{3,30}$/;
    if (!nameRegex.test(nameInput.value)) {
        valid = false;
        nameError.textContent = 'Имя должно содержать 3-30 символов и состоять из латинских букв или кириллицы!';
    } else {
        nameError.textContent = '';
    }

    const phoneRegex = /^\+?\d{10,15}$/;
    if (!phoneRegex.test(phoneInput.value)) {
    valid = false;
        phoneError.textContent = 'Телефон должен содержать 10-15 символов и начинаться с +!';
    } else {
        phoneError.textContent = '';
    }


    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password.length < 8 || password.length > 40 || !/\d/.test(password) || !/[A-Z]/.test(password) || password !== confirmPassword) {
        valid = false;
        passwordError.textContent = 'Пароль должен содержать хотя бы одну заглавную букву и цифру, иметь длину 8-40 символов. Пароли должны совпадать.';
    } else {
        passwordError.textContent = '';
    }

    if (!valid) {
        event.preventDefault();
    }
}