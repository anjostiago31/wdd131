
const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

menuButton.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");

    menuButton.setAttribute("aria-expanded", aberto);
    menuButton.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});

const anoAtual = document.querySelector("#ano-atual");
const ultimaModificacao = document.querySelector("#ultima-modificacao");

anoAtual.textContent = new Date().getFullYear();

ultimaModificacao.textContent =
    document.lastModified;


/* IMAGENS DO SLIDESHOW */

const imagensHero = [
    "imagens/imagem_aerea.jpeg",
    "imagens/imagem_fundo.jpg",
    "imagens/estatua.jpg",
];    

const slides = document.querySelectorAll(".hero-slide");

let indiceImagem = 1;
let slideAtual = 0;

function mostrarImagemHero() {
    const proximoSlide = 1 - slideAtual;

    slides[proximoSlide].style.backgroundImage =
        `url('${imagensHero[indiceImagem]}')`;

    slides[proximoSlide].classList.add("ativo");
    slides[slideAtual].classList.remove("ativo");

    slideAtual = proximoSlide;
    indiceImagem = (indiceImagem + 1) % imagensHero.length;
}

function iniciarSlideshow() {
    if (slides.length !== 2 || imagensHero.length === 0) {
        return;
    }

    slides[0].style.backgroundImage =
        `url('${imagensHero[0]}')`;

    const reduzirMovimento = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    if (!reduzirMovimento.matches && imagensHero.length > 1) {
        setInterval(mostrarImagemHero, 5000);
    }
}

iniciarSlideshow();


/* FORMULÁRIO - SUGIRA UM LOCAL */

const formularioSugestao = document.querySelector("#form-sugestao");
const listaSugestoes = document.querySelector("#lista-sugestoes");
const contadorSugestoes = document.querySelector("#contador-sugestoes");
const mensagemSugestao = document.querySelector("#mensagem-sugestao");

const chaveSugestoes = "garcaSugestoes";

function carregarSugestoes() {
    try {
        const dados = localStorage.getItem(chaveSugestoes);
        const sugestoes = dados ? JSON.parse(dados) : [];

        return Array.isArray(sugestoes) ? sugestoes : [];
    } catch (erro) {
        console.error("Erro ao carregar sugestões:", erro);
        return [];
    }
}

function salvarSugestoes(sugestoes) {
    localStorage.setItem(chaveSugestoes, JSON.stringify(sugestoes));
}

function criarElementoTexto(tag, texto) {
    const elemento = document.createElement(tag);
    elemento.textContent = texto;
    return elemento;
}

function exibirSugestoes() {
    if (!listaSugestoes || !contadorSugestoes) {
        return;
    }

    const sugestoes = carregarSugestoes();

    listaSugestoes.replaceChildren();

    contadorSugestoes.textContent =
        `Total de sugestões: ${sugestoes.length}`;

    if (sugestoes.length === 0) {
        listaSugestoes.appendChild(
            criarElementoTexto(
                "p",
                "Nenhuma sugestão cadastrada ainda."
            )
        );
        return;
    }

    sugestoes.forEach((sugestao) => {
        const card = document.createElement("article");
        card.classList.add("sugestao-card");

        const titulo = criarElementoTexto("h3", sugestao.local);
        const categoria = criarElementoTexto(
            "p",
            `Categoria: ${sugestao.categoria}`
        );
        const descricao = criarElementoTexto(
            "p",
            sugestao.descricao
        );
        const autor = criarElementoTexto(
            "p",
            `Sugerido por: ${sugestao.nome}`
        );

        card.append(titulo, categoria, descricao, autor);
        listaSugestoes.appendChild(card);
    });
}

function enviarSugestao(evento) {
    evento.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const local = document.querySelector("#local").value.trim();
    const categoria = document.querySelector("#categoria").value;
    const descricao = document.querySelector("#descricao").value.trim();

    if (!nome || !local || !categoria || !descricao) {
        mensagemSugestao.textContent =
            "Preencha todos os campos obrigatórios.";
        return;
    }

    const novaSugestao = {
        nome: nome,
        local: local,
        categoria: categoria,
        descricao: descricao
    };

    const sugestoes = carregarSugestoes();
    sugestoes.push(novaSugestao);

    try {
        salvarSugestoes(sugestoes);

        mensagemSugestao.textContent =
            "Sugestão salva com sucesso neste navegador!";

        formularioSugestao.reset();
        exibirSugestoes();
    } catch (erro) {
        console.error("Erro ao salvar sugestão:", erro);
        mensagemSugestao.textContent =
            "Não foi possível salvar a sugestão neste navegador.";
    }
}

if (formularioSugestao) {
    formularioSugestao.addEventListener("submit", enviarSugestao);
    exibirSugestoes();
}
