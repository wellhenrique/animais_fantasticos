export default class Modal {
  constructor(abrirModal, fecharModal, containerModal) {
    this.abrirModal = document.querySelector(abrirModal);
    this.fecharModal = document.querySelector(fecharModal);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para
    // fazer referencia ao objeto
    // da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickForaSection = this.clickForaSection.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    console.log(event);
    event.preventDefault();
    this.toggleModal();
  }

  clickForaSection(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  addModalEvents() {
    this.abrirModal.addEventListener("click", this.eventToggleModal);
    this.fecharModal.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickForaSection);
  }

  init() {
    if (this.abrirModal && this.fecharModal && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
