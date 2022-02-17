import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const element = document.createElement("div");
    element.classList.add("numero-animal");
    element.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

    return element;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResp = await fetch(url);
      const animaisJSON = await animaisResp.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });

      const animaNumeros = new AnimaNumeros(
        "[data-numero]",
        "ativo",
        ".numeros",
      );
      // console.log(animaNumeros);
      animaNumeros.init();
    } catch (err) {
      console.log(Error(err));
    }
  }

  fetchAnimais("/animaisapi.json");
}
