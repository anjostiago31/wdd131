const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('open');

  const isOpen = navigation.classList.contains('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.textContent = isOpen ? '✕' : '☰';
});

document.querySelector('#currentyear').textContent = new Date().getFullYear();

document.querySelector('#lastModified').textContent =
  `Última modificação: ${document.lastModified}`;