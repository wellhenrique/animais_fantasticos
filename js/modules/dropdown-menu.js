import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  const eventos = ["touchstart", "click"];

  dropdownMenus.forEach((menu) => {
    eventos.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, eventos, () => {
      this.classList.remove("active");
    });
  }
}
