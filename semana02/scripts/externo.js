const input = document.querySelector('#capfav');
const botao = document.querySelector('button');
const lista = document.querySelector('ul');

const li = document.createElement('li');

const botaoExcluir = document.createElement('button');

li.textContent = input.value;

botaoExcluir.textContent = '❌';
botaoExcluir.setAttribute('aria-label', 'Excluir capítulo');

li.append(botaoExcluir);

lista.append(li);