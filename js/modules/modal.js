export default function initModal() {
  const abrirModal = document.querySelector('[data-modal="abrir"]');
  const fecharModal = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  if (abrirModal && fecharModal && containerModal) {
    const toggleModal = (event) => {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    };

    function clickForaSection(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    abrirModal.addEventListener("click", toggleModal);
    fecharModal.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickForaSection);
  }
}
