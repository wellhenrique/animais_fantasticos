import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuLista = document.querySelector('[data-menu="list"]');
  const eventos = [("touchstart", "click")];

  function openMenu() {
    menuButton.classList.add("active");
    menuLista.classList.add("active");

    outsideClick(menuLista, eventos, () => {
      menuLista.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }

  if (menuButton && menuLista) {
    eventos.forEach((eventUser) => {
      menuButton.addEventListener(eventUser, openMenu);
    });
  }
}
