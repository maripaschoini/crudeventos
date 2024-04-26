// GARANTIR QUE OS CAMPOS SEJAM PREENCHIDOS
var buttons = document.getElementsByClassName('button-link');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (event) {
    event.preventDefault(); // Evita que o link seja seguido

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var campo3 = document.getElementById('confirmpassword').value;

    if (username === '' || password === '' || campo3.trim() === '') {
      alert('Por favor, preencha todos os campos.');
    } else {
      window.location.href = '../html/ProximosEventos.html';
    }
  });
}
