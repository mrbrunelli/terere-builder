import { createTerereBuilder } from "./src/module/factory/terere.js";

function main() {
  const terereBuilderSvc = createTerereBuilder();

  terereBuilderSvc
    .addErvaMate()
    .inclinarCuia()
    .posicionarBomba()
    .addErvaMate()
    .addFatiaDeLimao()
    .addFatiaDeLimao()
    .addAguaGelada()
    .addAguaGeladaComLimao()
    .removerUltimoPasso()
    .listarPassosRealizados()
    .build();
}

main();
