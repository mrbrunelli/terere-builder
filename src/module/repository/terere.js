import { createTerereModel } from "../factory/terere.js"

export class TerereRepository {
  constructor({ terereModel }) {
    this.terereModel = terereModel
  }

  find() {
   return this.terereModel.steps
  }

  save(step) {
    this.terereModel.steps.push(step)
  }
}