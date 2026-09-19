const temperatura = 8;
const velocidadeVento = 10;

const temperaturaElemento = document.querySelector("#temperatura");
const ventoElemento = document.querySelector("#vento");
const sensacaoElemento = document.querySelector("#sensacao");

temperaturaElemento.textContent = temperatura;
ventoElemento.textContent = velocidadeVento;

function calcularSensacaoTermica(temperatura, velocidadeVento) {
    return 13.12 + (0.6215 * temperatura) - (11.37 * Math.pow(velocidadeVento, 0.16)) + (0.3965 * temperatura * Math.pow(velocidadeVento, 0.16));
}

if (temperatura <= 10 && velocidadeVento > 4.8) {
    const sensacao = calcularSensacaoTermica(
        temperatura,
        velocidadeVento
    );

    sensacaoElemento.textContent = `${sensacao.toFixed(1)} °C`;
} else {
    sensacaoElemento.textContent = "N/A";
}

const anoAtual = document.querySelector("#anoAtual");
const ultimaModificacao = document.querySelector("#ultimaModificacao");

anoAtual.textContent = new Date().getFullYear();

ultimaModificacao.textContent =
    `Última modificação: ${document.lastModified}`;