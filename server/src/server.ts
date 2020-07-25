import express from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";

// Rota: Endereço completo da requisição.
// Recurso: Qual entidade estamos acessando do sistema.

// Request Params: Parâmetros que vêm na própria rota que identificam um recurso.
// Query Params: Parâmetros que vêm na própria rota e que são geralmente opcionais para tratar de filtros, paginação e tudo mais.
// Request Body: Parâmetros para criação/atualização dos dados.

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(3333);
