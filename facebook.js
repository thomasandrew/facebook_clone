const nome = document.form2.nome;
const sobrenome = document.form2.sobrenome;
const email = document.form2.email;
const senha = document.form2.senha;
const Day = document.getElementById("date-birth");
const month = document.getElementById("month-birth");
const year = document.getElementById("year-birth");
const gender = document.getElementById("gender_type");
const person1 = document.getElementById('person');
const person2 = document.getElementById('person2');

nome.onclick = () => {
    if (sobrenome.value == "") {
        sobrenome.style.borderColor = 'red';
        document.getElementById('nome').style.borderColor = 'lightblue';
        sobrenome.placeholder = "Esqueceu o sobrenome"
        nome.placeholder = "Nome";
    } else {
        sobrenome.style.borderColor = 'lightblue';
        document.getElementById('nome').style.borderColor = 'lightblue'
        sobrenome.placeholder = "sobrenome"
        nome.placeholder = "Nome";
    }
}

sobrenome.onclick = () => {
    if (nome.value == "") {
        nome.style.borderColor = 'red';
        document.getElementById('sobrenome').style.borderColor = 'lightblue'
        nome.placeholder = 'Esqueceu o nome'
        sobrenome.placeholder = "Sobrenome";
    } else {
        nome.style.borderColor = 'lightblue'
        document.getElementById('sobrenome').style.borderColor = 'lightblue'
        nome.placeholder = 'Nome'
        sobrenome.placeholder = "Sobrenome"
    }
}

email.onclick = () => {
    if (nome.value == "" || sobrenome.value == "") {
        nome.style.borderColor = 'red'
        nome.placeholder = "Esqueceu o nome"
        sobrenome.style.borderColor = 'red'
        sobrenome.placeholder = "Esqueceu o sobrenome"
    }

    if (email.value == "") {
        email.style.borderColor = 'red'
        email.placeholder = 'Esqueceu o email'
    } else {
        email.style.borderColor = 'lightblue'
        email.placeholder = 'Celular ou email'
    }
}

senha.onclick = () => {
    if (email.value == "") {
        email.style.borderColor = 'red'
        email.placeholder = "Esqueceu o email"
    }

    if (nome.value == "") {
        nome.style.borderColor = 'red'
        nome.placeholder = "Esqueceu o nome"
    }

    if (sobrenome.value == "") {
        sobrenome.style.borderColor = 'red'
        sobrenome.placeholder = "Esqueceu o sobrenome"
    }
}

function selected() {
    if (senha.value == "") {
        senha.style.borderColor = 'red'
        senha.placeholder = "Esqueceu a senha"
    } else {
        senha.style.borderColor = 'lightblue'
        senha.placeholder = "Nova senha"
    }

    if (nome.value == "") {
        nome.style.borderColor = 'red'
        nome.placeholder = "Esqueceu o nome"
    } else {
        nome.style.borderColor = 'lightblue'
        nome.placeholder = "Nome"
    }

    if (sobrenome.value == "") {
        sobrenome.style.borderColor = 'red'
        sobrenome.placeholder = "Esqueceu o sobrenome"
    } else {
        sobrenome.style.borderColor = 'lightblue'
        sobrenome.placeholder = "Sobrenome"
    }

    if (email.value == "") {
        email.style.borderColor = 'red'
        email.placeholder = "Esqueceu o email"
    } else {
        email.style.borderColor = 'lightblue'
        email.placeholder = "Celular ou email"
    }
}

function selected2() {
    if (senha.value == "") {
        senha.style.borderColor = 'red'
        senha.placeholder = "Esqueceu a senha"
    } else {
        senha.style.borderColor = 'lightblue'
        senha.placeholder = "Esqueceu a senha"
    }

    if (nome.value == "") {
        nome.style.borderColor = 'red'
        nome.placeholder = "Esqueceu o nome"
    } else {
        nome.style.borderColor = 'lightblue'
        nome.placeholder = "Nome"
    }

    if (sobrenome.value == "") {
        sobrenome.style.borderColor = 'red'
        sobrenome.placeholder = "Esqueceu o sobrenome"
    } else {
        sobrenome.style.borderColor = 'lightblue'
        sobrenome.placeholder = "Sobrenome"
    }

    if (email.value == "") {
        email.style.borderColor = 'red'
        email.placeholder = "Esqueceu o email"
    } else {
        email.style.borderColor = 'lightblue'
        email.placeholder = "Celular ou email"
    }
}

function selected3() {
    if (senha.value == "") {
        senha.style.borderColor = 'red'
        senha.placeholder = "Esqueceu a senha"
    } else {
        senha.style.borderColor = 'lightblue'
        senha.placeholder = "Nova senha"
    }

    if (nome.value == "") {
        nome.style.borderColor = 'red'
        nome.placeholder = "Esqueceu o nome"
    } else {
        nome.style.borderColor = 'lightblue'
        nome.placeholder = "Nome"
    }

    if (sobrenome.value == "") {
        sobrenome.style.borderColor = 'red'
        sobrenome.placeholder = "Esqueceu o sobrenome"
    } else {
        sobrenome.style.borderColor = 'lightblue'
        sobrenome.placeholder = "Sobrenome"
    }

    if (email.value == "") {
        email.style.borderColor = 'red'
        email.placeholder = "Esqueceu o email"
    } else {
        email.style.borderColor = 'lightblue'
        email.placeholder = "Celular ou email"
    }
}

person.addEventListener('click', function () {
    if (senha.value == "") {
        senha.style.borderColor = 'red'
        senha.placeholder = "Esqueceu a senha"
    } else {
        senha.style.borderColor = 'lightblue'
        senha.placeholder = "Nova senha"
    }

    if (nome.value == "") {
        nome.style.borderColor = 'red'
        nome.placeholder = "Esqueceu o nome"
    } else {
        nome.style.borderColor = 'lightblue'
        nome.placeholder = "Nome"
    }

    if (sobrenome.value == "") {
        sobrenome.style.borderColor = 'red'
        sobrenome.placeholder = "Esqueceu o sobrenome"
    } else {
        sobrenome.style.borderColor = 'lightblue'
        sobrenome.placeholder = "Sobrenome"
    }

    if (email.value == "") {
        email.style.borderColor = 'red'
        email.placeholder = "Esqueceu o email"
    } else {
        email.style.borderColor = 'lightblue'
        email.placeholder = "Celular ou email"
    }
})

person2.addEventListener('click', () => {
    if (senha.value == "") {
        senha.style.borderColor = 'red'
        senha.placeholder = "Esqueceu a senha"
    } else {
        senha.style.borderColor = 'lightblue'
        senha.placeholder = "Nova senha"
    }

    if (nome.value == "") {
        nome.style.borderColor = 'red'
        nome.placeholder = "Esqueceu o nome"
    } else {
        nome.style.borderColor = 'lightblue'
        nome.placeholder = "Nome"
    }

    if (sobrenome.value == "") {
        sobrenome.style.borderColor = 'red'
        sobrenome.placeholder = "Esqueceu o sobrenome"
    } else {
        sobrenome.style.borderColor = 'lightblue'
        sobrenome.placeholder = "Sobrenome"
    }

    if (email.value == "") {
        email.style.borderColor = 'red'
        email.placeholder = "Esqueceu o email"
    } else {
        email.style.borderColor = 'lightblue'
        email.placeholder = "Celular ou email"
    }
})

function sign_now() {
    if (senha.value == "") {
        senha.style.borderColor = 'red'
        senha.placeholder = "Esqueceu a senha"
    } else {
        senha.style.borderColor = 'lightblue'
        senha.placeholder = "Nova senha"
    }

    if (nome.value == "") {
        nome.style.borderColor = 'red'
        nome.placeholder = "Esqueceu o nome"
    } else {
        nome.style.borderColor = 'lightblue'
        nome.placeholder = "Nome"
    }
    
    if (sobrenome.value == "") {
        sobrenome.style.borderColor = 'red'
        sobrenome.placeholder = "Esqueceu o sobrenome"
    } else {
        sobrenome.style.borderColor = 'lightblue'
        sobrenome.placeholder = "Sobrenome"
    }
    
    if (email.value == "") {
        email.style.borderColor = 'red'
        email.placeholder = "Esqueceu o email"
    } else {
        email.style.borderColor = 'lightblue'
        email.placeholder = "Celular ou email"
    }

    if (Day.value == "0") {
        Day.style.borderColor = 'red'
    } 

    if (month.value == "0") {
        month.style.borderColor = 'red'
    }

    if (year.value == "0") {
        year.style.borderColor = 'red'
    }
}

// -- Modal -- 

document.getElementById('more_ling').addEventListener('click', function () {
    document.querySelector('.bg_modal').style.display = 'flex';
});

const modal_close = document.querySelector('.bg_modal');

window.onclick = function (event) {
    if (event.target == modal_close) {
        modal_close.style.display = 'none';
    }
}

document.querySelector('.close_modal').addEventListener('click', function () {
    document.querySelector('.bg_modal').style.display = 'none';
});