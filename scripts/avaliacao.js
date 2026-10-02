let numeroAvaliacoes = Number(localStorage.getItem("numeroAvaliacoes")) || 0;

numeroAvaliacoes++;

localStorage.setItem("numeroAvaliacoes", numeroAvaliacoes);

document.querySelector("#contador").textContent = numeroAvaliacoes;

document.querySelector("#anoAtual").textContent =
    new Date().getFullYear();

document.querySelector("#ultimaModificacao").textContent =
    `Última modificação: ${document.lastModified}`;