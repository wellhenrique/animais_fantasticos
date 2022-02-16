export default function initModal() {
  const abrirModal = document.querySelector('[data-modal="abrir"]');
  const fecharModal = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function clickForaSection(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (abrirModal && fecharModal && containerModal) {
    abrirModal.addEventListener("click", toggleModal);
    fecharModal.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickForaSection);
  }
}
