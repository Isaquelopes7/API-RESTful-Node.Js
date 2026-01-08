const http = require('http');
const { handleRequest } = require("./Routes"); // Importando as rotas configuradas. handleRequest contém a logica de roteamento e resposta
const PORT = 3010;
const server = http.createServer((req, res) => {
    handleRequest(req , res);  // Redirecionando toda as requisões para esta função
});
server.listen(PORT, () => {
    console.log(`O servidor está rodando em http://localhost:${PORT}`)
});