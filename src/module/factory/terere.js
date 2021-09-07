import { Terere } from "../model/terere.js"
import { TerereRepository } from "../repository/terere.js"
import { TerereBuilder } from "../service/terere.js";

export function createTerereModel() {
  return new Terere()
}

export function createTerereRepository() {
  const terereModel = createTerereModel()
  return new TerereRepository({ terereModel })
}

export function createTerereBuilder() {
  const terereRepository = createTerereRepository()
  return new TerereBuilder({ terereRepository });
}