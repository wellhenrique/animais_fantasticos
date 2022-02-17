export default class TabNav {
  constructor(linkMenu, linkContent) {
    this.tabMenu = document.querySelectorAll(linkMenu);
    this.tabContent = document.querySelectorAll(linkContent);
  }

  // Ativa a tab de acordo com o index passado
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add("ativo", direcao);
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativar o primeiro item
      this.activeTab(0);

      this.tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener("click", () => this.activeTab(index));
      });
    }
  }
}
