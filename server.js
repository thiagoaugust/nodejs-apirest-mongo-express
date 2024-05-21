import http from "http";

const PORT = 3000;

const rotas = {
  "/": "Teste Express Ok",
};

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end(rotas[request.url]);
});

server.listen(PORT, () => {
  console.log("Servidor escutando!");
});
