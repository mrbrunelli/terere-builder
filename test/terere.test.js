import assert from "assert";
import { createTerereBuilder } from "../src/module/factory/terere.js";

describe("Terere Drink Builder", function () {
  it("Should return terere build steps", () => {
    const terereBuilderSvc = createTerereBuilder();

    const terere = terereBuilderSvc
      .addErvaMate()
      .inclinarCuia()
      .posicionarBomba()
      .addErvaMate()
      .addFatiaDeLimao()
      .addFatiaDeLimao()
      .addAguaGelada()
      .build();

    const result = terere.listSteps();

    const expected =
      "\nPassos realizados:\npegue uma cuia" +
      "\nadicione 1/3 de erva mate" +
      "\nincline a cuia em 120 graus" +
      "\nposicione a bomba na diagonal no fundo da cuia" +
      "\nadicione 1/3 de erva mate" +
      "\nadicione 1x fatia de limão" +
      "\nadicione 1x fatia de limão" +
      "\ncomplete com água bem gelada";

    assert.equal(result, expected);
  });
});
