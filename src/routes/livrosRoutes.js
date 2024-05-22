import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.get);
routes.get("/livros/:id", LivroController.getById);
routes.put("/livros/:id", LivroController.put);
routes.post("/livros", LivroController.post);
routes.delete("/livros/:id", LivroController.delete);

export default routes;
