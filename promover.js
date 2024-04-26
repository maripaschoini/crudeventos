const eventosContainer = document.getElementById('eventos-container');
const modal = document.getElementById('modal');
const modalInfo = document.getElementById('modal-info');
const modalEdit = document.getElementById('modal-edit');
let eventos = []; 
let idCounter = 0; 

// abrir modal de cadastro de evento
document.getElementById('add-evento').addEventListener('click', function () {
    modal.style.display = 'block';
});

// abrir modal de edição
document.getElementById('editar-evento').addEventListener('click', function () {
    modalEdit.style.display = 'block';
});
// fechar modal de evento
document.querySelector('.close').addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// adicionar evento e exibir na tela
document.getElementById('formulario-evento').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const dataHora = document.getElementById('data-hora').value;
    const local = document.getElementById('local').value;
    const valor = document.getElementById('valor').value;
    const sobre = document.getElementById('sobre').value;
    const foto = document.getElementById('foto').files[0];

    const reader = new FileReader();
    reader.onload = function () {
        const evento = document.createElement('div');
        const id = idCounter++; // gera um ID único para o evento
        evento.id = `evento-${id}`; // define o ID
        evento.classList.add('evento');
        evento.innerHTML = `
<img src="${reader.result}" alt="${nome}" width="100" height="100">
<div class="evento-info">
    <h3>${nome}</h3>
    <p class="data-hora">${dataHora}</p>
    <p class="local">${local}</p>
    <p class="valor">R$ ${valor}</p>
    <p class="sobre">${sobre}</p>
</div>
`;
        eventosContainer.appendChild(evento);

        // adiciona o evento na lista de eventos
        eventos.push({
            id: id,
            nome: nome,
            dataHora: dataHora,
            local: local,
            valor: valor,
            sobre: sobre,
            ingressosVendidos: 0, // inicialmente não foram vendidos ingressos
            loteAtual: 0 
        });

        // limpa os campos do formulário após cadastrar o evento
        document.getElementById('formulario-evento').reset();
    };
    reader.readAsDataURL(foto);

    modal.style.display = 'none';
});


// lógica do sistema de lotes
document.getElementById('quantidade-lotes').addEventListener('input', function () {
    const quantidade = parseInt(this.value);
    const lotesContainer = document.getElementById('lotes-container');
    lotesContainer.innerHTML = '';

    for (let i = 1; i <= quantidade; i++) {
        const divLote = document.createElement('div');
        divLote.classList.add('lote-item');
        divLote.innerHTML = `
<label for="data-inicio-lote-${i}">Data de Início do Lote ${i}:</label>
<input type="datetime-local" id="data-inicio-lote-${i}" name="data-inicio-lote-${i}" required><br>
<label for="data-fim-lote-${i}">Data de Fim do Lote ${i}:</label>
<input type="datetime-local" id="data-fim-lote-${i}" name="data-fim-lote-${i}" required><br>
<label for="quantidade-ingressos-lote-${i}">Quantidade de Ingressos do Lote ${i}:</label>
<input type="number" id="quantidade-ingressos-lote-${i}" name="quantidade-ingressos-lote-${i}" required><br>
`;
        lotesContainer.appendChild(divLote);
    }
});

eventosContainer.addEventListener('click', function (event) {
    const evento = event.target.closest('.evento');
    if (evento) {
        const nome = evento.querySelector('h3').innerText;
        const dataHora = evento.querySelector('.data-hora').innerText;
        const local = evento.querySelector('.local').innerText;
        const valor = evento.querySelector('.valor').innerText;
        const sobre = evento.querySelector('.sobre').innerText;
        const ingressosVendidos = '5';
        const loteAtual = '1';

        document.getElementById('evento-info-modal').innerHTML = `
<h3>${nome}</h3>
<p><strong>Data e Hora:</strong> ${dataHora}</p>
<p><strong>Local:</strong> ${local}</p>
<p><strong>Valor do Ingresso:</strong> ${valor}</p>
<p><strong>Sobre o Evento:</strong> ${sobre}</p>
<p><strong>Ingressos Vendidos:</strong> ${ingressosVendidos}</p>
<p><strong>Lote Atual:</strong> ${loteAtual}</p>
`;

        modalInfo.style.display = 'block';
        evento.classList.add('active');
    }
});

/* fechar o modal de exibição de eventos */
document.querySelector('#modal-info .close').addEventListener('click', function () {
    modalInfo.style.display = 'none';
});

/* fechar o modal de exibição de eventos */
window.addEventListener('click', function (event) {
    if (event.target == modalInfo) {
        modalInfo.style.display = 'none';
    }
});
/* fechar modal de edição */
document.querySelector('#modal-edit .close').addEventListener('click', function () {
    modalEdit.style.display = 'none';
});
/* fechar modal de edição */
window.addEventListener('click', function (event) {
    if (event.target == modalInfo) {
        modalEdit.style.display = 'none';
    }
});

/* excluir evento */
document.getElementById('excluir-evento').addEventListener('click', function () {
    const eventoSelecionado = document.querySelector('.evento.active');
    if (eventoSelecionado) {
        eventosContainer.removeChild(eventoSelecionado); // Remove o evento da tela
        modalInfo.style.display = 'none'; // Fecha o modal de exibição de eventos
    }
});

// função de editar o evento
function editarEvento(evento) {
    const nome = evento.querySelector('h3').innerText;
    const dataHora = evento.querySelector('.data-hora').innerText;
    const local = evento.querySelector('.local').innerText;
    const valor = evento.querySelector('.valor').innerText;
    const sobre = evento.querySelector('.sobre').innerText;

    // preencher o formulário do modal com as informações do evento selecionado
    document.getElementById('nome').value = nome;
    document.getElementById('data-hora').value = dataHora;
    document.getElementById('local').value = local;
    document.getElementById('valor').value = valor.replace('R$ ', '');
    document.getElementById('sobre').value = sobre;

    // fechar o modal de edição
    modalEdit.style.display = 'none';

    // adicionar um event listener para o formulário do modal para editar o evento
    document.getElementById('editar').addEventListener('click', function () {
        const eventoSelecionado = document.querySelector('.evento.active');
        if (eventoSelecionado) {
            editarEvento(eventoSelecionado);
        }
    });

    // atualizar as informações do evento com base nos dados do formulário
    evento.querySelector('h3').innerText = document.getElementById('nome').value;
    evento.querySelector('.data-hora').innerText = document.getElementById('data-hora').value;
    evento.querySelector('.local').innerText = document.getElementById('local').value;
    evento.querySelector('.valor').innerText = `R$ ${document.getElementById('valor').value}`;
    evento.querySelector('.sobre').innerText = document.getElementById('sobre').value;

    // atualizar a foto do evento, se uma nova foto foi selecionada
    const fotoInput = document.getElementById('foto');
    if (fotoInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (e) {
            evento.querySelector('img').src = e.target.result;
        };
        reader.readAsDataURL(fotoInput.files[0]);
    }

    const lotes = [];
    document.querySelectorAll('.lote-item').forEach(function (element, index) {
        const dataInicio = document.getElementById(`data-inicio-lote-${index + 1}`).value;
        const dataFim = document.getElementById(`data-fim-lote-${index + 1}`).value;
        const quantidadeIngressos = document.getElementById(`quantidade-ingressos-lote-${index + 1}`).value;
        lotes.push({ dataInicio, dataFim, quantidadeIngressos });
    });

    console.log(nome, dataHora, local, valor, sobre, lotes);
    // limpar os campos do formulário após a atualização do evento
    document.getElementById('formulario-edit').reset();
    modal.style.display = 'none';
};


//  event listener para o botão de editar evento
document.getElementById('editar-evento').addEventListener('click', function () {
    const eventoSelecionado = document.querySelector('.evento.active');
    if (eventoSelecionado) {
        modalInfo.style.display = 'none';

        // Chamar a função editarEvento
        editarEvento(eventoSelecionado);
    }
});

// event listener para o ícone de pesquisa
document.getElementById('pesquisar-evento').addEventListener('click', function () {
    const campoPesquisa = document.getElementById('campo-pesquisa');
    campoPesquisa.style.display = 'block'; // Exibir o campo de pesquisa
    campoPesquisa.focus(); // Dar foco ao campo de pesquisa
});

//  event listener para o campo de pesquisa
document.getElementById('campo-pesquisa').addEventListener('input', function () {
    const termoPesquisa = this.value.toLowerCase();
    const eventos = document.querySelectorAll('.evento');

    eventos.forEach(function (evento) {
        const nomeEvento = evento.querySelector('h3').innerText.toLowerCase();
        if (nomeEvento.includes(termoPesquisa)) {
            evento.style.display = 'block'; // Exibir o evento se o termo de pesquisa estiver contido no nome do evento
        } else {
            evento.style.display = 'none'; // Ocultar o evento caso contrário
        }
    });
});

//  event listener para o botão de editar evento
document.getElementById('editar-evento').addEventListener('click', function () {
    const eventoSelecionado = document.querySelector('.evento.active');
    if (eventoSelecionado) {
        // Preencher os campos do formulário de edição com as informações do evento selecionado
        const nome = eventoSelecionado.querySelector('h3').innerText;
        const dataHora = eventoSelecionado.querySelector('.data-hora').innerText;
        const local = eventoSelecionado.querySelector('.local').innerText;
        const valor = eventoSelecionado.querySelector('.valor').innerText;
        const sobre = eventoSelecionado.querySelector('.sobre').innerText;

        document.getElementById('nome-edit').value = nome;
        document.getElementById('data-hora-edit').value = dataHora;
        document.getElementById('local-edit').value = local;
        document.getElementById('valor-edit').value = valor.replace('R$ ', '');
        document.getElementById('sobre-edit').value = sobre;

        // Exibir o modal de edição
        modalEdit.style.display = 'block';
    }
});

// event listener para o botão de salvar no modal de edição
document.getElementById('salvar-edit').addEventListener('click', function () {
    // Obter o evento selecionado
    const eventoSelecionado = document.querySelector('.evento.active');
    if (eventoSelecionado) {
        // atualizar as informações do evento com base nos dados do formulário de edição
        eventoSelecionado.querySelector('h3').innerText = document.getElementById('nome-edit').value;
        eventoSelecionado.querySelector('.data-hora').innerText = document.getElementById('data-hora-edit').value;
        eventoSelecionado.querySelector('.local').innerText = document.getElementById('local-edit').value;
        eventoSelecionado.querySelector('.valor').innerText = `R$ ${document.getElementById('valor-edit').value}`;
        eventoSelecionado.querySelector('.sobre').innerText = document.getElementById('sobre-edit').value;

        // fechar o modal de edição
        modalEdit.style.display = 'none';
    }
});

