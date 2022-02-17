export default class AnimaNumeros {
  constructor(numeros, observerClass, observerTarget) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);

    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe um elemento do DOM
  // com um numero em seu texto
  // incrementa apartir de 0 até o
  // numero passsado
  static incrementarNumero(numero) {
    const total = Number(numero.innerText);
    const incremento = Math.floor(total / 100);
    let start = 0;

    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start >= total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // ativa incrementoNumero para cada numero do array passado
  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumero(numero),
    );
  }

  // Funcao que ocorre quando a mutacao acontecer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona a MutationObserver para verificar
  // quando a classe ativo é adicionado ao elemento
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget && this.observerClass)
      this.addMutationObserver();
    return this;
  }
}
