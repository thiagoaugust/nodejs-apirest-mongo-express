import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {
  static async get(req, res) {
    try {
      const livros = await livro.find({});
      res.status(200).json(livros);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha na requisiçãoeae mi` });
    }
  }

  static async post(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroPost = { ...novoLivro, autor: { ...autorEncontrado } };
      const livroCriado = await livro.create(livroPost);
      res
        .status(201)
        .json({ message: "Livro cadastrado com sucesso.", livro: livroCriado });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar livro` });
    }
  }

  static async getById(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao encontrar livro` });
    }
  }

  static async put(req, res) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ mesage: "livro atualizado com sucesso" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao atualizar livro` });
    }
  }

  static async delete(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "livro deletado" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao deletar livro` });
    }
  }
}

export default LivroController;
