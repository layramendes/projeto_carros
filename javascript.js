// Lista de carros
let listaCarros = [
    {
        "nome": "Drako GTE",
        "img": "img/drako-gte.webp",
        "descricao": "O Drako GTE é um carro elétrico de alto desempenho, projetado para oferecer potência incrível com sua tração nas quatro rodas e um motor que gera mais de 1.200 cavalos de potência. Ele foi desenvolvido para combinar velocidade, estabilidade e luxo."
    },
    {
        "nome": "De Tomaso P72",
        "img": "img/de-tomaso.webp",
        "descricao": " Inspirado no design clássico dos anos 60, o De Tomaso P72 é um supercarro moderno que mistura beleza, elegância e desempenho. Equipado com um motor V8 supercharged, ele é uma fusão de tradição e tecnologia de ponta."
    },
    {
        "nome": "Ferrari LaFerrari",
        "img": "img/ferrari-laferrari.webp",
        "descricao": "A Ferrari LaFerrari é uma obra-prima da engenharia automotiva. Combinando um motor V12 e tecnologia híbrida, ela oferece mais de 950 cavalos de potência. É o ápice do desempenho e inovação da Ferrari, oferecendo velocidade e controle incomparáveis."
    },
    {
        "nome": "Pagani Huayra",
        "img": "img/pagani-huayara.webp",
        "descricao": "O Pagani Huayra é um hipercarro italiano com design exótico e um motor V12 biturbo de 6.0 litros da AMG. Com um foco na aerodinâmica ativa, ele proporciona um equilíbrio perfeito entre velocidade e luxo."
    },
    {
        "nome": "McLaren Elva",
        "img": "img/mclaren-elva.webp",
        "descricao": "O McLaren Elva é um roadster ultraleve sem para-brisa, projetado para proporcionar a sensação de liberdade total na estrada. Equipado com um motor V8 twin-turbo, ele oferece uma experiência de condução pura e emocionante."
    },
    {
        "nome": "Czinger 21C",
        "img": "img/czinger-21c.webp",
        "descricao": "O Czinger 21C é um hipercarro americano que utiliza tecnologia híbrida avançada para entregar mais de 1.200 cavalos de potência. Com um design futurista e produzido usando manufatura aditiva (impressão 3D), ele é uma obra de arte da engenharia moderna."
    }
];

// Função para criar os cards dos carros
listaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById('cards');
    cardCarro.innerHTML += `
        <div class="col-md-4">
            <div class="card">
                <img src="${carro.img}" class="card-img-top" alt="${carro.nome}">
                <div class="card-body">
                    <h5 class="card-title">${carro.nome}</h5>
                    <a href="#" class="btn btn-secondary" onClick="zoomImg(${posicao})"><i class="bi bi-zoom-in"></i></a>
                </div>
            </div>
        </div>
    `;
});

// Função para exibir a imagem e detalhes no modal
function zoomImg(posicao) {
    let carroSelecionado = listaCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    let zoomImgModal = new bootstrap.Modal(document.getElementById('zoomImg'));
    zoomImgModal.show();
}

// Função para alternar entre o modo claro e escuro
function toggleTheme() {
    let body = document.body;
    let themeIcon = document.getElementById("themeIcon");

    // Alterna a classe 'dark-theme'
    body.classList.toggle("dark-theme");

    // Salva a preferência no localStorage
    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        themeIcon.classList.replace("bi-brightness-high", "bi-moon");
    } else {
        localStorage.setItem("theme", "light");
        themeIcon.classList.replace("bi-moon", "bi-brightness-high");
    }
}

// Função para carregar o tema baseado no localStorage
function loadTheme() {
    let theme = localStorage.getItem("theme");
    let body = document.body;
    let themeIcon = document.getElementById("themeIcon");

    if (theme === "dark") {
        body.classList.add("dark-theme");
        themeIcon.classList.replace("bi-brightness-high", "bi-moon");
    } else {
        body.classList.remove("dark-theme");
        themeIcon.classList.replace("bi-moon", "bi-brightness-high");
    }
}

// Carrega o tema quando a página é carregada
document.addEventListener("DOMContentLoaded", function () {
    loadTheme();

    // Adiciona o evento ao botão de alternância de tema
    document.getElementById("toggleThemeBtn").addEventListener("click", toggleTheme);
});
