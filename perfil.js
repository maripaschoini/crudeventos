// DECALRAÇÃO DE VARIÁVEIS CONSTANTES
const btnEditarPerfil = document.getElementById('editar');
const btnExcluirPerfil = document.getElementById('excluir');
const modalEditar = document.getElementById('modal-editar');
const modalExcluir = document.getElementById('modal-excluir');
const spanCloseEdit = document.querySelector('#modal-editar .close');
const spanCloseExcluir = document.querySelector('#modal-excluir .close');

modalEditar.style.display = 'none';

// EXIBIR MODAL DE EDIÇÃO QUANDO BOTÃO É CLICADO
btnEditarPerfil.addEventListener('click', function (event) {
    event.preventDefault();
    modalEditar.style.display = 'block';
});
// EXIBIR MODAL DE EXCLUSÃO QUANDO BOTÃO É CLICADO
btnExcluirPerfil.addEventListener('click', function (event) {
    event.preventDefault();
    modalExcluir.style.display = 'block';
});
// FECHAR MODAL DE EDIÇÃO
spanCloseEdit.addEventListener('click', function () {
    modalEditar.style.display = 'none';
});
// FECHAR MODAL DE EXCLUIR
spanCloseExcluir.addEventListener('click', function () {
    modalExcluir.style.display = 'none';
});
// FECHAR MODAL SE CLICAR FORA DELE
window.addEventListener('click', function (event) {
    if (event.target == modalEditar) {
        modalEditar.style.display = 'none';
    } else if (event.target == modalExcluir) {
        modalExcluir.style.display = 'none';
    }
});
