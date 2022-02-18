import AnimaNumeros from "./anima-numeros.js";

export default function fecthAnimais(url, target) {
  const numerosGrid = document.querySelector(target);
  // cria a div contendo informacoes dos animais
  function createAnimal(animal) {
    const element = document.createElement("div");
    element.classList.add("numero-animal");
    element.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

    return element;
  }

  // preenche cada animal do DOM
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros(
      "[data-numero]",
      "ativo",
      ".numeros",
    );
    animaNumeros.init();
  }

  // puxa os animais em json
  async function criarAnimais() {
    try {
      const animaisResp = await fetch(url);
      const animaisJSON = await animaisResp.json();
      animaisJSON.forEach((animal) => {
        preencherAnimais(animal);
      });
      animaAnimaisNumeros()
    } catch (err) {
      console.log(Error(err));
    }
  }
  return criarAnimais();
}
