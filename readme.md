VAMO PRA ONDE?

O programa conta com 4 páginas html principais até o momento, cada uma com um arquivo css e javascript referenciados no código html (.css no <head> e .js imediatamente antes do fechamento da tag <body>).

JORNADA:
1- O usário começa sua jornada no index.html  

2- Clicando no botão 'começar' - <button id="abrirModal">começar</button> o modal de login será exibido na tela. 

3- Caso o usuário não tenha cadastro ainda, clicando no 'cadastrar'-<a href="cadastro.html">Cadastre-se</a>- dentro do modal, será encaminhado para a página de cadastro (cadastro.html)

4- Depois do cadastro ou do login, o usuário será direcionado para a página ProximosEventos. (código js-  window.location.href = 'ProximosEventos.html';)html que será a página voltada para as compras de ingressos dos eventos que nossos clientes estão promovendo. 

5- Dentro da página de próximos eventos, o usuário se depara com eventos podendo clicar nos mesmos para efetuar a compra (processo em construção)

6- Ainda na página ProximosEventos.html, o menu lateral ( <div class="sidebar">) conta com algumas funcionalidades:
    - Ingressos adquiridos pelo usuário (processo em construção)
    - Perfil (processo em construção)
    - Cadastrar Evento - rediciona para promover.html
    - Sair - redireciona para index.html
     <div class="sidebar">
            <a href="#">
                <img src="images/Ticket.png" alt="">
                <span class="text">Meus Ingressos</span>
            </a>
            <a href="#">
                <img src="images/User.png" alt="">
                <span class="text">Perfil</span>
            </a>
            <a href="promover.html">
                <img src="images/Add.png" alt="">
                <span class="text">Cadastrar evento</span>
            </a>
            <a href="index.html">
                <img src="images/Logout.png" alt="">
                <span class="text">Sair</span>
            </a>
        </div>

7- Ao clicar em Cadastrar Evento, o usuário logado, poderá cadastrar seu evento para divulgação. 

8- A página promover.html contém um menu suspenso com dropdown ( <div class="dropdown">) que conta com funcionalidades: Ajuda, Sair e Perfil. 

9- No canto inferior direito há o icone de cadastro de eventos:
    <div class="add-evento" id="add-evento">
        <span class="icon">+</span>
    </div>
Quando clicado, abrirá o modal de cadastro de Eventos que contém o formulário  
    <form id="formulario-evento">

10- Após o cadastro, o evento será exibido na página html se tornando um objeto clicável.

11- Após clicar em um evento cadastrado, o modal de informações do evento será exibido e dois botões poderão ser clicados: editar evento e excluir evento:
     <button id="editar-evento">Editar</button>
     <button id="excluir-evento">Excluir</button>

12- Caso clique em editar evento, o modal de edição de evento será exibido e já preenchido com as informações do evento em questão, o usuário poderá modificar os campos das informações do evento.

13- Clicando no botão de salvar alterações, 
 <button id="editar" type="submit">Salvar</button>, o evento aparecerá modificado na página html.

 14- Clicando em Excluir, o evento deixará de ser exibido na página html.

 15- Centralizada horizontalmente, na parte superior da página, logo abaixo do menu suspenso, temos a barra de pesquisa de eventos, onde o usuário poderá procurar pelo nome do evento.

16- No menu suspenso, clicando em 'Sair', o usuário será redirecionado à página index.html


FUNCIONALIDADES:
(algumas em desenvolvimento ainda)
- Login e cadastro de usuários
- Visualização de informações de eventos
- Commpra de ingressos de eventos
- Criação, edição, exclusão e pesquisa de eventos 

Todos os documentos .html, .css e .js tem suas partes separadas e identificadas por comentários do tipo '//', '/* */' ou '<!-- -->'


