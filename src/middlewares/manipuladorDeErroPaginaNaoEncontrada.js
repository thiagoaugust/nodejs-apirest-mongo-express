import NaoEncontrado from "../erros/NaoEncontrado.js";

function manipuladorDeErroPaginaNaoEncontrada(req, res, next) {
  const erro = new NaoEncontrado();
  next(erro);
}

export default manipuladorDeErroPaginaNaoEncontrada;
