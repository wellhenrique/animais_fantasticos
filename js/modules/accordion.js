export default class Accordion {
  constructor(links) {
    this.activeClass = "ativo";
    this.accordionList = document.querySelectorAll(links);
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // Add eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => {
        this.toggleAccordion(item);
      });
    });
  }

  // inicia funcao
  init() {
    if (this.accordionList.length) {
      // ativa o primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
