//----- Separando as rotas e os controladores em arquivos diferentes -----

/* O código define uma função de manipulação de requisições HTTP chamada * handleRequest *, que configura o cabeçalho da resposta como JSON e usa uma estrutura switch para gerenciar diferentes rotas de uma API de produtos. Dependendo do método e da URL da requisição, ele chama controladores específicos para listar (getProdutos), criar (createProduto), atualizar (updateProduto) ou deletar (deleteProduto) produtos. Se a rota não corresponder a nenhuma das opções, retorna um código de status 404 com uma mensagem de "Rota não encontrada".*/


const { getProdutos, createProduto , updateProduto, deleteProduto}= require("./Controllers/produtosControllers");

function handleRequest(req, res){
    res.setHeader('Content-Type','application/json')
    const routeKey = `${req.method} ${req.url}`

    switch(true){
        case routeKey == 'GET /api/produtos':
            getProdutos(req, res) // Listar produtos
            break;

        case routeKey == 'POST /api/produtos':
            createProduto(req, res) // Criar produto
            break;    
        
        case req.url.startsWith('/api/produtos') && req.method === 'PUT': 
        updateProduto(req, res); // Atualizar o produto
        break;

           case req.url.startsWith('/api/produtos') && req.method === 'DELETE': 
        deleteProduto(req, res); // Deletar o produto
        break;

        default:
            res.statusCode = 404;
            res.end(JSON.stringify({ message: 'Rota não encontrada' })); // Responde com 404 para rotas não encontradas
            break;
    }
}
module.exports = {handleRequest};