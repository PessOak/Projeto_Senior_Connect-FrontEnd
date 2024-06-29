document.addEventListener("DOMContentLoaded", () => {
    var formSignin = document.querySelector('#signin');
    var formSignup = document.querySelector('#signup');
    var btnColor = document.querySelector('.btnColor');
    var btnLogout = document.querySelector('#btnLogout');

    document.querySelector('#btnSignin')
        .addEventListener('click', () => {
            formSignin.style.left = "25px";
            formSignup.style.left = "450px";
            btnColor.style.left = "0px";
        });

    document.querySelector('#btnSignup')
        .addEventListener('click', () => {
            formSignin.style.left = "-450px";
            formSignup.style.left = "25px";
            btnColor.style.left = "110px";
        });

    btnLogout.addEventListener('click', () => {
        localStorage.removeItem('loginData');
        alert('Logout realizado com sucesso!');
    });

    // Função para salvar dados no local storage
    function saveToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    // Função para recuperar dados do local storage
    function getFromLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    // Função para validar email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Evento de envio do formulário de login
    formSignin.addEventListener('submit', (event) => {
        event.preventDefault();
        let email = formSignin.querySelector('input[type="text"]').value;
        let password = formSignin.querySelector('input[type="password"]').value;
        let rememberMe = formSignin.querySelector('input[type="checkbox"]').checked;

        if (!isValidEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        let loginData = { email, password, rememberMe };
        saveToLocalStorage('loginData', loginData);
        alert('Dados de login salvos com sucesso!');
    });

    // Evento de envio do formulário de cadastro
    formSignup.addEventListener('submit', (event) => {
        event.preventDefault();
        let email = formSignup.querySelector('input[type="text"]').value;
        let password = formSignup.querySelectorAll('input[type="password"]')[0].value;
        let password2 = formSignup.querySelectorAll('input[type="password"]')[1].value;

        if (!isValidEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        if (password !== password2) {
            alert('As senhas não coincidem!');
            return;
        }

        let signupData = { email, password };
        saveToLocalStorage('signupData', signupData);
        alert('Dados de cadastro salvos com sucesso!');
    });

    // Carregar dados de login ao iniciar a página
    let savedLoginData = getFromLocalStorage('loginData');
    if (savedLoginData) {
        formSignin.querySelector('input[type="text"]').value = savedLoginData.email;
        formSignin.querySelector('input[type="password"]').value = savedLoginData.password;
        formSignin.querySelector('input[type="checkbox"]').checked = savedLoginData.rememberMe;
    }
});
