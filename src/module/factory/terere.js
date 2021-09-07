import { Terere } from "../model/terere.js"
import { TerereRepository } from "../repository/terere.js"
import { TerereBuilder } from "../service/terere.js";

export function createTerereModel() {
  return new Terere()
}

export function createTerereRepository() {
  return new TerereRepository({ terereModel: createTerereModel() })
}

export function createTerereBuilder() {
  return new TerereBuilder({ terereRepository: createTerereRepository() });
}