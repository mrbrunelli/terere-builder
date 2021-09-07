export class TerereBuilder {
  #terereRepository;

  constructor({ terereRepository }) {
    this.#terereRepository = terereRepository;
  }

  reset() {
    this.#terereRepository = {};
  }

  addErvaMate() {
    this.#terereRepository.save("adicione 1/3 de erva mate");
    return this;
  }

  inclinarCuia() {
    this.#terereRepository.save("incline a cuia em 120 graus");
    return this;
  }

  posicionarBomba() {
    this.#terereRepository.save(
      "posicione a bomba na diagonal no fundo da cuia"
    );
    return this;
  }

  addFatiaDeLimao() {
    this.#terereRepository.save("adicione 1x fatia de limão");
    return this;
  }

  addAguaGelada() {
    this.#terereRepository.save("complete com água bem gelada");
    return this;
  }

  addAguaGeladaComLimao() {
    this.#terereRepository.save("complete com água bem gelada com limão");
    return this;
  }

  removerUltimoPasso() {
    this.#terereRepository.removeLast();
    return this;
  }

  listarPassosRealizados({ isTesting } = { isTesting: false }) {
    const steps = this.#terereRepository.find();
    const formatedSteps = `\nPassos realizados:\n${steps.join("\n")}\n`;

    if (isTesting) {
      return formatedSteps;
    }

    console.log(formatedSteps);
    return this;
  }

  build() {
    const terere = this;
    this.reset();
    return terere;
  }
}
