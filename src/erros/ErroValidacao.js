import ErroBase from "./ErroBase.js";

class ErroValidacao extends ErroBase {
  constructor(erro) {
    const mensagemErro = Object.values(erro.errors)
      .map((erro) => erro.message)
      .join("; ");
    super(`Os seguintes erros foram encontrados: ${mensagemErro}`, 400);
  }
}

export default ErroValidacao;
