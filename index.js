// abrir modal quando o botão "Entrar" é clicado
document.getElementById('abrirModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
  });
  
  // fechar modal quando clicar no botão de fechar
  document.getElementsByClassName('fechar')[0].addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });
  
  // fechar modal quando clicar fora do modal
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
      document.getElementById('modal').style.display = 'none';
    }
  });


  // entrar na página de próximos eventos
  document.getElementById('entrarModal').addEventListener('click', function(event) {
    event.preventDefault(); 
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === '' || password === '') {
      alert('Por favor, preencha todos os campos.');
    } else {
      window.location.href = 'assets/html/ProximosEventos.html';
    }
  });
  