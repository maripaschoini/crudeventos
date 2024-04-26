const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0;
 // CARROSSEL
function showSlide(index) {
    if (index < 0) {
        index = carouselItems.length - 1;
    } else if (index >= carouselItems.length) {
        index = 0;
    }

    currentIndex = index;

    const offset = -index * 1000;
    carouselInner.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000);
// FIM DO CARROSSEL

carouselInner
// seleciona o modal
var modal = document.getElementById("modal-compra");

// seleciona o botão de fechar
var span = document.getElementsByClassName("close")[0];

// fecha o modal
span.onclick = function () {
    modal.style.display = "none";
}

// quando o usuário clicar fora do modal, fecha o modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//  abre o modal de compra quando o usuário clica no evento
var eventos = document.getElementsByClassName("evento");
for (var i = 0; i < eventos.length; i++) {
    eventos[i].addEventListener("click", function () {
        modal.style.display = "block";
    });
}

