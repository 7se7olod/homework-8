window.onload = function () {

    const inputFullName = document.getElementById('input-full-name');
    const inputUserName = document.getElementById('input-username');
    const checkbox = document.getElementById('main-checkbox');
    const buttonSignUp = document.getElementById('main-button');
    const inputs = document.getElementsByTagName('input');
    const inputPassword = document.getElementById('input-password');
    const inputRepeatPassword = document.getElementById('input-repeat-password');
    const popup = document.getElementById('popup-success');
    const buttonOk = document.getElementById('button-ok');
    const mainTitle = document.getElementById('main-title');
    const formTerms = document.getElementById('form-terms');
    const mainLink = document.getElementById('main-link');

    inputFullName.addEventListener('keydown', (e) => {
        let num = parseInt(e.key);
        if (!isNaN(num)) {
            e.preventDefault()
        }
    })

    inputUserName.addEventListener('keydown', (e) => {
        let regx = /^[.,]$/;
        if (e.key.match(regx)) {
            e.preventDefault()
        }
    })

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            console.log("Согласен");
        } else {
            console.log("Не согласен");
        }
    })

    buttonSignUp.addEventListener('click', checkFormRegistration);

    buttonOk.addEventListener('click', () => {
        popup.style.display = 'none';

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }

        checkbox.checked = false;
        showLogInForm()
    });

    mainLink.addEventListener('click', showLogInForm);


    function checkFormRegistration() {
        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                alert(`Заполните поле ${inputs[i].dataset.value}`)
                return;
            }
        }

        if (!checkbox.checked) {
            alert('Вы не согласились с правилами!');
            return;
        }

        if (inputPassword.value.length < 8) {
            alert('Пароль должен содержать не менее 8 символов');
            return;
        }

        if (inputPassword.value !== inputRepeatPassword.value) {
            alert('Пароли не совпадают');
            return;
        }

        popup.style.display = 'flex';
    }

    function checkSignInForm() {
        let username;
        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                alert(`Заполните поле ${inputs[i].dataset.value}`)
                return;
            }
            if (inputs[i].name === 'userName') {
                username = inputs[i].value;
            }
        }
        alert(`Добро пожаловать, ${username}!`);
    }

    function showLogInForm() {
        mainTitle.innerText = 'Log in to the system';
        buttonSignUp.innerText = 'Sign In';
        formTerms.remove();
        mainLink.remove();

        for (let i = 0; i < inputs.length; i++) {
            switch (inputs[i].name) {
                case 'fullName':
                    inputs[i].parentNode.remove();
                    break;
                case 'email':
                    inputs[i].parentNode.remove();
                    break;
                case 'repeatPassword':
                    inputs[i].parentNode.remove();
                    break;
            }
        }
        buttonSignUp.removeEventListener('click', checkFormRegistration);
        buttonSignUp.addEventListener('click', checkSignInForm);
    }
}
