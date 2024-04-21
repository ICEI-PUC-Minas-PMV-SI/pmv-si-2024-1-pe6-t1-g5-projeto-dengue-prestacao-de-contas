# APIs e Web Services

O planejamento de uma aplicação de APIS Web é uma etapa fundamental para o sucesso do projeto. Ao planejar adequadamente, você pode evitar muitos problemas e garantir que a sua API seja segura, escalável e eficiente.

Aqui estão algumas etapas importantes que devem ser consideradas no planejamento de uma aplicação de APIS Web.

[Inclua uma breve descrição do projeto.]

## Objetivos da API

A API deve permitir cadastro, listagem e atualização de usuários, incluindo operações de upload e recuperação de fotos associadas, com documentação interativa e esquema OpenAPI disponíveis, utilizando validação de dados e tratamento de exceções.

## Arquitetura
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g5-projeto-dengue-prestacao-de-contas/assets/90010232/c9b7a652-675e-4425-9b15-d23b8ab1e022)

A arquitetura da API construída consiste em um servidor FastAPI que interage com um banco de dados PostgreSQL para gerenciar operações CRUD (Create, Read, Update, Delete) relacionadas aos usuários e suas fotos associadas. Os principais componentes e suas interações são:

- **FastAPI Server:**
  - Utiliza o framework FastAPI para gerenciar os endpoints e rotas da API.
  - Lida com requisições HTTP, valida dados de entrada e retorna respostas HTTP.

- **Endpoints:**
  - Define endpoints para operações como adicionar, listar e atualizar usuários, além de manipular fotos associadas a usuários.
  - Cada endpoint possui um método HTTP associado (POST, GET, PUT) e uma função handler para processar a requisição.

- **Pydantic Models:**
  - Define modelos Pydantic, como `UserCreate`, para validar e estruturar os dados recebidos nos endpoints.

- **Asyncpg (PostgreSQL Client):**
  - Utiliza o Asyncpg para realizar operações assíncronas de conexão e consulta ao banco de dados PostgreSQL.
  - Executa consultas SQL para inserir, atualizar e recuperar dados de usuários e suas fotos.

- **Banco de Dados PostgreSQL:**
  - Armazena informações dos usuários, incluindo ID, nome, data de nascimento, e-mail, telefone, empresa e foto em formato de bytes.

- **Interações:**
  - Quando um endpoint é acessado, a API se conecta ao banco de dados utilizando Asyncpg.
  - As operações CRUD são realizadas no banco de dados, como inserção de novos usuários, atualização de informações e recuperação de dados existentes.
  - Para fotos de usuários, a API permite o upload e download de fotos associadas aos usuários.

- **Tratamento de Exceções:**
  - Implementa tratamento de exceções para lidar com erros como dados inválidos, usuários não encontrados e falhas de conexão com o banco de dados.

- **Documentação e Esquema OpenAPI:**
  - Fornece documentação interativa (Swagger UI) e um esquema OpenAPI (JSON) para facilitar o entendimento e integração da API.

Essa arquitetura permite uma separação clara de responsabilidades entre os diferentes componentes da API, garantindo uma operação eficiente e escalável para gerenciamento de usuários e suas imagens associadas.

## Modelagem da Aplicação

### Modelos de Dados:

1. **UserCreate (Pydantic Model):**
   - Modelo Pydantic que representa os dados necessários para criar um novo usuário.
   - Campos incluem `id` (identificador único), `nome`, `data_de_nascimento`, `email`, `telefone` e `empresa`.
    ![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g5-projeto-dengue-prestacao-de-contas/assets/90010232/32bef0eb-2ea2-4dac-a0fc-49bb2005934d)

### Operações CRUD:

1. **Cadastro de Usuários:**
   - Endpoint: `POST /users/`
   - Recebe dados de um novo usuário (usando o modelo `UserCreate`) e insere esses dados no banco de dados PostgreSQL.
   - Realiza validação automática dos dados usando o Pydantic.

2. **Listagem de Usuários:**
   - Endpoint: `GET /users/`
   - Recupera todos os usuários cadastrados no sistema a partir do banco de dados PostgreSQL.
   - Retorna uma lista de objetos `UserCreate` representando os dados dos usuários.

3. **Atualização de Dados de Usuário:**
   - Endpoint: `PUT /users/{user_id}`
   - Permite a atualização das informações de um usuário existente com base no seu ID.
   - Verifica a existência do usuário no banco de dados antes de realizar a atualização.

4. **Upload e Recuperação de Fotos dos Usuários:**
   - Endpoint (Upload): `POST /users/{user_id}/photo`
     - Permite o upload de uma foto para um usuário específico.
     - A foto é armazenada como bytes no banco de dados PostgreSQL, associada ao usuário pelo ID.
   - Endpoint (Recuperação): `GET /users/{user_id}/photo`
     - Recupera a foto de um usuário específico a partir do banco de dados.

### Conexão com o Banco de Dados:

- Utiliza o `asyncpg` para estabelecer uma conexão assíncrona com o banco de dados PostgreSQL.
- Realiza consultas SQL assíncronas para inserir, atualizar, recuperar e manipular os dados dos usuários e suas fotos.

### Tratamento de Exceções e Erros:

- Implementa tratamento de exceções para lidar com situações como dados inválidos, usuários não encontrados e falhas na conexão com o banco de dados.
- Retorna respostas HTTP adequadas com códigos de status e detalhes específicos de erro.

### Documentação e Esquema OpenAPI:

- Fornece uma documentação interativa da API utilizando o Swagger (OpenAPI) com o endpoint `/docs`.
- Disponibiliza o esquema OpenAPI (JSON) da API para facilitar a integração e o consumo por parte dos clientes com o endpoint `/openapi.json`.

### Considerações Adicionais:

- A modelagem da API segue os princípios de separação de responsabilidades, utilizando modelos de dados estruturados e operações CRUD bem definidas para gerenciar os dados dos usuários de forma eficiente e escalável.
- Utiliza o Pydantic para garantir a integridade dos dados de entrada e o `asyncpg` para operações assíncronas com o banco de dados, garantindo uma operação suave e eficiente da API.

## Fluxo de Dados por End-Point

1. **Cadastro de Usuário (POST /users/ - Cadastro de Usuário):**
   - Um cliente faz uma requisição POST para o endpoint `/users/` com os dados de um novo usuário no corpo da requisição.
   - Os dados são validados pelo modelo Pydantic `UserCreate` para garantir sua integridade.

2. **Conexão com o Banco de Dados:**
   - A API estabelece uma conexão assíncrona com o banco de dados PostgreSQL utilizando `asyncpg`.
   - A função `connect_to_database()` é chamada para criar a conexão com o banco de dados.

3. **Inserção de Dados no Banco de Dados:**
   - A função `create_user(user: UserCreate)` é executada para inserir os dados do novo usuário na tabela `users` do banco de dados.
   - A consulta SQL `INSERT INTO users (...) VALUES (...)` é utilizada para adicionar o novo registro no banco de dados.

4. **Resposta da API (Retorno do Novo Usuário):**
   - Após a inserção bem-sucedida, a API retorna os dados do novo usuário no formato JSON com os campos especificados no modelo `UserCreate`.

---

1. **Consulta de usuários (GET /users/ - Listagem de Usuários):**
   - Um cliente faz uma requisição GET para o endpoint `/users/` para obter a lista de todos os usuários cadastrados.

2. **Conexão com o Banco de Dados:**
   - A API estabelece uma conexão assíncrona com o banco de dados PostgreSQL utilizando `asyncpg`.
   - A função `connect_to_database()` é chamada para criar a conexão com o banco de dados.

3. **Recuperação de Dados do Banco de Dados:**
   - A função `get_users()` é executada para recuperar os dados de todos os usuários da tabela `users`.
   - A consulta SQL `SELECT id, nome, data_de_nascimento, email, telefone, empresa FROM users` é utilizada para obter os registros do banco de dados.

4. **Resposta da API (Lista de Usuários):**
   - Os dados dos usuários são retornados no formato JSON como uma lista de objetos `UserCreate`, contendo os detalhes de cada usuário.

---

1. **Atualização de usuário por ID (PUT /users/{user_id} - Atualização de Usuário):**
   - Um cliente faz uma requisição PUT para o endpoint `/users/{user_id}` para atualizar as informações de um usuário existente identificado pelo `{user_id}`.

2. **Conexão com o Banco de Dados:**
   - A API estabelece uma conexão assíncrona com o banco de dados PostgreSQL utilizando `asyncpg`.
   - A função `connect_to_database()` é chamada para criar a conexão com o banco de dados.

3. **Verificação da Existência do Usuário:**
   - A API verifica se o usuário com o `{user_id}` especificado existe no banco de dados antes de realizar a atualização.
   - A consulta SQL `SELECT EXISTS(SELECT 1 FROM users WHERE id = $1)` é utilizada para verificar a existência do usuário.

4. **Atualização de Dados no Banco de Dados:**
   - A função `update_user(user_id: int, user_data: UserCreate)` é executada para atualizar os dados do usuário na tabela `users`.
   - A consulta SQL `UPDATE users SET ... WHERE id = $1` é utilizada para modificar os dados do usuário no banco de dados.

5. **Resposta da API (Dados Atualizados do Usuário):**
   - Após a atualização bem-sucedida, a API retorna os dados atualizados do usuário no formato JSON com os campos especificados no modelo `UserCreate`.

---

1. **Adição de Imagem por ID (POST /users/{user_id}/photo - Upload de Foto):**
   - Um cliente faz uma requisição POST para o endpoint `/users/{user_id}/photo` para fazer o upload de uma foto para um usuário específico identificado pelo `{user_id}`.
   - A foto é enviada no corpo da requisição como parte de um objeto `UploadFile`.

2. **Conexão com o Banco de Dados:**
   - A API estabelece uma conexão assíncrona com o banco de dados PostgreSQL utilizando `asyncpg`.
   - A função `connect_to_database()` é chamada para criar a conexão com o banco de dados.

3. **Verificação da Existência do Usuário:**
   - A API verifica se o usuário com o `{user_id}` especificado existe no banco de dados antes de realizar o upload da foto.
   - A consulta SQL `SELECT EXISTS(SELECT 1 FROM users WHERE id = $1)` é utilizada para verificar a existência do usuário.

4. **Leitura e Armazenamento da Foto:**
   - A foto é lida como bytes a partir do objeto `UploadFile`.
   - Os bytes da foto são armazenados na coluna `photo` da linha correspondente ao usuário no banco de dados.

5. **Resposta da API (Confirmação de Upload):**
   - Após o armazenamento bem-sucedido da foto no banco de dados, a API retorna uma resposta HTTP com uma mensagem de sucesso.

---

1. **Consulta de Imagens por ID (GET /users/{user_id}/photo - Recuperação de Foto):**
   - Um cliente faz uma requisição GET para o endpoint `/users/{user_id}/photo` para recuperar a foto de um usuário específico identificado pelo `{user_id}`.

2. **Conexão com o Banco de Dados:**
   - A API estabelece uma conexão assíncrona com o banco de dados PostgreSQL utilizando `asyncpg`.
   - A função `connect_to_database()` é chamada para criar a conexão com o banco de dados.

3. **Recuperação da Foto do Banco de Dados:**
   - A API realiza uma consulta SQL para obter os bytes da foto associada ao usuário com o `{user_id}` especificado.
   - A consulta SQL `SELECT photo FROM users WHERE id = $1` é utilizada para recuperar a foto do banco de dados.

4. **Verificação da Existência da Foto:**
   - A API verifica se a foto foi encontrada para o usuário especificado.
   - Se a foto não for encontrada (valor `None`), a API retorna uma resposta HTTP com um código de status 404 (Not Found).

5. **Resposta da API (Retorno da Foto):**
   - Se a foto for encontrada, a API retorna os bytes da foto como conteúdo da resposta HTTP, permitindo que o cliente visualize ou baixe a foto.

## Requisitos Funcionais

[Liste os principais requisitos funcionais da aplicação.]

## Requisitos Não Funcionais

[Liste os principais requisitos não funcionais da aplicação, como desempenho, segurança, escalabilidade, etc.]

## Tecnologias Utilizadas

Existem muitas tecnologias diferentes que podem ser usadas para desenvolver APIs Web. A tecnologia certa para o seu projeto dependerá dos seus objetivos, dos seus clientes e dos recursos que a API deve fornecer.

[Lista das tecnologias principais que serão utilizadas no projeto.]

## API Endpoints

[Liste os principais endpoints da API, incluindo as operações disponíveis, os parâmetros esperados e as respostas retornadas.]

### Endpoint 1
- Método: GET
- URL: /endpoint1
- Parâmetros:
  - param1: [descrição]
- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Success",
      "data": {
        ...
      }
    }
    ```
  - Erro (4XX, 5XX)
    ```
    {
      "message": "Error",
      "error": {
        ...
      }
    }
    ```


## Considerações de Segurança

[Discuta as considerações de segurança relevantes para a aplicação distribuída, como autenticação, autorização, proteção contra ataques, etc.]

## Implantação

[Instruções para implantar a aplicação distribuída em um ambiente de produção.]

1. Defina os requisitos de hardware e software necessários para implantar a aplicação em um ambiente de produção.
2. Escolha uma plataforma de hospedagem adequada, como um provedor de nuvem ou um servidor dedicado.
3. Configure o ambiente de implantação, incluindo a instalação de dependências e configuração de variáveis de ambiente.
4. Faça o deploy da aplicação no ambiente escolhido, seguindo as instruções específicas da plataforma de hospedagem.
5. Realize testes para garantir que a aplicação esteja funcionando corretamente no ambiente de produção.

## Testes

[Descreva a estratégia de teste, incluindo os tipos de teste a serem realizados (unitários, integração, carga, etc.) e as ferramentas a serem utilizadas.]

1. Crie casos de teste para cobrir todos os requisitos funcionais e não funcionais da aplicação.
2. Implemente testes unitários para testar unidades individuais de código, como funções e classes.
3. Realize testes de integração para verificar a interação correta entre os componentes da aplicação.
4. Execute testes de carga para avaliar o desempenho da aplicação sob carga significativa.
5. Utilize ferramentas de teste adequadas, como frameworks de teste e ferramentas de automação de teste, para agilizar o processo de teste.

# Referências

Inclua todas as referências (livros, artigos, sites, etc) utilizados no desenvolvimento do trabalho.
