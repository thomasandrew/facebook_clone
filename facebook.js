function sign_now() {
    var nome = document.form2.nome;
    var sobrenome = document.form2.sobrenome;
    var email = document.form2.email;
    var senha = document.form2.senha;
    var Day = document.getElementById("date-birth");
    var month = document.getElementById("month-birth");
    var year = document.getElementById("year-birth");
    var gender = document.getElementById("gender_type");
    var person1 = document.getElementById('person1');
    var person2 = document.getElementById('person2');

    if (nome.value == "") {
        document.getElementById("nome").style.borderColor = 'red';
        document.form2.nome.placeholder = "Esqueceu o nome";
    }

    if (sobrenome.value == "") {
        document.getElementById("sobrenome").style.borderColor = 'red';
        document.form2.sobrenome.placeholder = "Esqueceu o sobrenome";
    }

    if (email.value == "") {
        document.getElementById("email").style.borderColor = 'red';
        document.form2.email.placeholder = "Esqueceu o email";
    }

    if (senha.value == "") {
        document.getElementById("senha").style.borderColor = 'red';
        document.form2.senha.placeholder = "Esqueceu a senha";
    }

    switch (Day.value) {
        case "Day":
            document.getElementById("date-birth").style.borderColor = 'red';
            break;    
    }

    switch (month.value) {
        case "Month":
            document.getElementById("month-birth").style.borderColor = 'red';
            break;
    }

    switch (year.value) {
        case "Year": 
            document.getElementById("year-birth").style.borderColor = 'red';
            break;
    }
    
    if (person1.checked == false && person2.checked == false) {
        document.getElementById("gender_type").style.borderColor = 'red';
    } 
   
}

document.getElementById('more_ling').addEventListener('click', function() {
  document.querySelector('.bg_modal').style.display = 'flex';
});

var modal_close = document.querySelector('.bg_modal');

window.onclick = function(event) {
    if (event.target == modal_close) {
        modal_close.style.display = 'none';
    }
}

 

