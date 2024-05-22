import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores", AutorController.get);
routes.get("/autores/:id", AutorController.getById);
routes.put("/autores/:id", AutorController.put);
routes.post("/autores", AutorController.post);
routes.delete("/autores/:id", AutorController.delete);

export default routes;
