export default function initDropdownMenu() {}

const dropdownMenu = document.querySelectorAll("[data-dropdown]");

dropdownMenu.forEach((menu) => {
  ["touchstart", "click"].forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
    // menu.addEventListener(menu, clickForaDropdown);
  });
});

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle('active')
}

// function clickForaDropdown(element) {
//   if(element)
// }
