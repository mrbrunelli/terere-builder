export class TerereRepository {
  #terereModel;

  constructor({ terereModel }) {
    this.#terereModel = terereModel;
  }

  find() {
    return this.#terereModel.steps;
  }

  save(step) {
    this.#terereModel.steps.push(step);
  }

  removeLast() {
    this.#terereModel.steps.pop();
  }
}
