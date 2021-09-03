class TerereBuilder {
  #terere;

  constructor() {
    this.reset();
  }

  reset() {
    this.#terere = new Terere();
  }

  addErvaMate() {
    this.#terere.steps.push("adicione 1/3 de erva mate");
    return this;
  }

  inclinarCuia() {
    this.#terere.steps.push("incline a cuia em 120 graus");
    return this;
  }

  posicionarBomba() {
    this.#terere.steps.push("posicione a bomba na diagonal no fundo da cuida");
    return this;
  }

  addFatiaDeLimao() {
    this.#terere.steps.push("adicione 1x fatia de limão");
    return this;
  }

  addAguaGelada() {
    this.#terere.steps.push("complete com água bem gelada");
    return this;
  }

  addAguaGeladaComLimao() {
    this.#terere.steps.push("complete com água bem gelada com limão");
    return this;
  }

  listarPassosRealizados() {
    console.log(this.#terere.listSteps());
    return this;
  }

  build() {
    const terere = this.#terere;
    this.reset();
    return terere;
  }
}

class Terere {
  steps = ["pegue uma cuia"];

  listSteps() {
    return `\nPassos realizados:\n${this.steps.join("\n")}`;
  }
}

function main() {
  const builder = new TerereBuilder();
  builder
    .addErvaMate()
    .inclinarCuia()
    .posicionarBomba()
    .addErvaMate()
    .addFatiaDeLimao()
    .addFatiaDeLimao()
    .addAguaGelada()
    .listarPassosRealizados()
    .build();
}

main();
