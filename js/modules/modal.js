export default function initModal() {}

function abrirModal(event) {
  event.preventDefault();
  container.classList.add("ativo");
}

function fecharModal(event) {
  event.preventDefault();
  container.classList.remove("ativo");
}

function containerModal(event) {
  event.preventDefault();
}

function cliqueForaModal(event) {
  if (event.target === this) fecharModal(event);
}

const abrir = document.querySelector('[data-modal="abrir"]');
const fechar = document.querySelector('[data-modal="fechar"]');
const container = document.querySelector('[data-modal="container"]');

abrir.addEventListener("click", abrirModal);
fechar.addEventListener("click", fecharModal);
container.addEventListener("click", cliqueForaModal);
