# 📦 API de Produtos (Node.js + JSON) IDE: VS Code

Projeto simples de uma API RESTful para cadastro de produtos. O objetivo é demonstrar uma arquitetura organizada (MVC) sem uso de banco de dados externo, persistindo os dados em um arquivo `JSON` local.

## 💻 Tecnologias

*   **Node.js**
*   **Javascript**
*   **File System (fs)** para salvar os dados

## 🚀 Como rodar o projeto

1.  Instale as dependências:
    ```bash
    npm install
    ```

2.  Inicie o servidor:
    ```bash
    npm start
    ```
    > O servidor rodará em `http://localhost:3010` (A porta que você pode colocar) .

## 🔌 Rotas da API

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | **/produtos** | Lista todos os produtos cadastrados. |
| `POST` | **/produtos** | Cadastra um novo produto (enviar JSON no corpo). |

## Utilize softwares para testar as rotas HTTP
| Exemplo: Insomnia, Postman etc.|

### Exemplo de JSON para cadastro:
```json
{
  "nome": "Mouse Gamer",
  "preco": 80.00,
  "descricao": "Mouse com 2400 DPI"
} 
