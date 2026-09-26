console.log("JavaScript funcionando!");
const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
    nomeDoTemplo: "São Paulo Brasil",
    localizacao: "São Paulo, Brasil",
    consagracao: "1978, 30 de outubro",
    area: 59246,
    urlDaImagem: 
    "https://www.churchofjesuschrist.org/imgs/940f3e201364433a3d5d3dc14b0cacee38d41d1d/full/500%2C/0/default"
  },
  {
    nomeDoTemplo: "Campinas Brasil",
    localizacao: "Campinas, São Paulo, Brasil",
    consagracao: "2002, 17 de maio",
    area: 49459,
    urlDaImagem: 
    "https://www.churchofjesuschrist.org/imgs/c9a81a6f86750d7d9ade3499d3df52e2f7f726a7/full/500%2C/0/default"
  },
  {
    nomeDoTemplo: "Curitiba Brasil",
    localizacao: "Curitiba, Paraná, Brasil",
    consagracao: "2008, 1 de junho",
    area: 27850,
    urlDaImagem: 
    "https://www.churchofjesuschrist.org/imgs/ea7e0f39c8e26d163a4dfedfcb1ce5c41d650b5b/full/500%2C/0/default"
  },  
];
const gallery = document.querySelector(".gallery");

function exibirTemplos(listaTemplos) {

  gallery.innerHTML = "";

  listaTemplos.forEach((templo) => {

    const card = document.createElement("figure");

    const nome = document.createElement("h2");
    nome.textContent = templo.nomeDoTemplo;

    const localizacao = document.createElement("p");
    localizacao.textContent = `Localização: ${templo.localizacao}`;

    const consagracao = document.createElement("p");
    consagracao.textContent = `Consagração: ${templo.consagracao}`;

    const area = document.createElement("p");
    area.textContent = `Área: ${templo.area} pés²`;

    const imagem = document.createElement("img");
    imagem.src = templo.urlDaImagem;
    imagem.alt = templo.nomeDoTemplo;
    imagem.loading = "lazy";

    card.appendChild(nome);
    card.appendChild(localizacao);
    card.appendChild(consagracao);
    card.appendChild(area);
    card.appendChild(imagem);

    gallery.appendChild(card);
  });
}

exibirTemplos(templos);

const titulo = document.querySelector("h1");

const home = document.querySelector("#home");
const old = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");

home.addEventListener("click", (event) => {
  event.preventDefault();

  titulo.textContent = "Página Inicial";
  exibirTemplos(templos);
});

old.addEventListener("click", (event) => {
  event.preventDefault();

  const templosAntigos = templos.filter((templo) =>
    parseInt(templo.consagracao) < 1900
  );

  titulo.textContent = "Templos Antigos";
  exibirTemplos(templosAntigos);
});

newTemples.addEventListener("click", (event) => {
  event.preventDefault();

  const templosNovos = templos.filter((templo) =>
    parseInt(templo.consagracao) > 2000
  );

  titulo.textContent = "Templos Novos";
  exibirTemplos(templosNovos);
});

large.addEventListener("click", (event) => {
  event.preventDefault();

  const templosGrandes = templos.filter((templo) =>
    templo.area > 90000
  );

  titulo.textContent = "Templos Grandes";
  exibirTemplos(templosGrandes);
});

small.addEventListener("click", (event) => {
  event.preventDefault();

  const templosPequenos = templos.filter((templo) =>
    templo.area < 10000
  );

  titulo.textContent = "Templos Pequenos";
  exibirTemplos(templosPequenos);
});

const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.toggle("open");

  const aberto = nav.classList.contains("open");

  menu.setAttribute("aria-expanded", aberto);

  menu.textContent = aberto ? "✕" : "☰";
});

const anoAtual = document.querySelector("#currentyear");
anoAtual.textContent = new Date().getFullYear();

const ultimaModificacao = document.querySelector("#lastModified");
ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;
