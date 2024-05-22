import { autor } from "../models/Autor.js";

class AutorController {
  static async get(req, res) {
    try {
      const autores = await autor.find({});
      res.status(200).json(autores);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisição` });
    }
  }

  static async post(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res
        .status(201)
        .json({ message: "autor cadastrado com sucesso.", autor: novoAutor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar autor` });
    }
  }

  static async getById(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao encontrar autor` });
    }
  }

  static async put(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ mesage: "autor atualizado com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao atualizar autor` });
    }
  }

  static async delete(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "autor deletado" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao deletar autor` });
    }
  }
}

export default AutorController;
