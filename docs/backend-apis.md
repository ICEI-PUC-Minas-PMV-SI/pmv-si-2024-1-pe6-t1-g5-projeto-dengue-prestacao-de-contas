# APIs e Web Services

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

## Cadastro de Usuário
1. **Requisição do usuário (POST /users/ - Cadastro de Usuário):**
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
## Consulta de usuário
1. **Requisição do usuário (GET /users/ - Listagem de Usuários):**
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
## Atualização de Usuário por ID
1. **Requisição do usuário (PUT /users/{user_id} - Atualização de Usuário):**
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
## Adição de Imagem por ID
1. **Requisição do usuário (POST /users/{user_id}/photo - Upload de Foto):**
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
## Consulta de Imagem por ID
1. **Requisição do usuário(GET /users/{user_id}/photo - Recuperação de Foto):**
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
Os requisitos funcionais descrevem as principais funcionalidades e comportamentos esperados da API em relação às operações que ela deve realizar. Abaixo estão os requisitos funcionais da API construída:

### Requisitos Funcionais da API:

1. **Cadastro de Usuários:**
   - Permitir o cadastro de novos usuários fornecendo informações como nome, data de nascimento, e-mail, telefone e empresa.
   - Endpoint: `POST /users/`

2. **Listagem de Usuários:**
   - Obter a lista de todos os usuários cadastrados no sistema, incluindo suas informações básicas.
   - Endpoint: `GET /users/`

3. **Atualização de Dados de Usuário:**
   - Permitir a atualização das informações de um usuário existente com base no seu ID, incluindo nome, data de nascimento, e-mail, telefone e empresa.
   - Endpoint: `PUT /users/{user_id}`

4. **Upload e Recuperação de Fotos dos Usuários:**
   - Permitir o upload de uma foto para um usuário específico.
   - Recuperar a foto de um usuário pelo seu ID.
   - Endpoints:
     - Upload: `POST /users/{user_id}/photo`
     - Recuperação: `GET /users/{user_id}/photo`

5. **Documentação Interativa (Swagger/OpenAPI):**
   - Fornecer uma documentação interativa da API utilizando o Swagger (OpenAPI) para facilitar o entendimento e uso por parte dos desenvolvedores.
   - Endpoint: `GET /docs`

6. **Esquema OpenAPI (JSON):**
   - Disponibilizar o esquema OpenAPI (JSON) da API para permitir a integração e consumo por parte de clientes e serviços externos.
   - Endpoint: `GET /openapi.json`

## Requisitos Não Funcionais

1. **Desempenho:**
   - A API deve ser eficiente e responsiva, suportando um grande volume de requisições simultâneas.
   - Utiliza operações assíncronas (`async/await`) para melhorar o desempenho e escalabilidade, permitindo o processamento paralelo de requisições.

2. **Segurança:**
   - Implementa camadas de segurança para proteger os dados e endpoints sensíveis.
   - Pode incluir autenticação por token (JWT) para validar e autorizar requisições de clientes autenticados.*(Debito Técnico)*

3. **Confiabilidade:**
   - A API deve ser robusta e tolerante a falhas, lidando adequadamente com exceções e erros.
   - Utiliza tratamento de exceções para garantir que erros sejam capturados e tratados de forma apropriada, mantendo a disponibilidade do serviço.

4. **Escalabilidade:**
   - A arquitetura da API é projetada para ser escalável, permitindo o aumento da carga de trabalho conforme necessário.
   - Utiliza banco de dados PostgreSQL, que é escalável e pode lidar com um grande número de transações e consultas.

5. **Documentação e Usabilidade:**
   - Fornece uma documentação interativa (Swagger UI) e um esquema OpenAPI (JSON) para facilitar o entendimento e a integração da API por parte dos desenvolvedores.
   - Os endpoints são descritos de forma clara e concisa na documentação, indicando os parâmetros esperados e os tipos de retorno.

6. **Manutenibilidade:**
   - O código da API é estruturado de forma modular e organizada, facilitando a manutenção e evolução futura.
   - Utiliza princípios de boas práticas de programação e design para garantir a legibilidade e extensibilidade do código.

7. **Padrões e Conformidade:**
   - A API adere a padrões e convenções da web, como RESTful, para garantir interoperabilidade com outras aplicações e serviços.

## Tecnologias Utilizadas

1. **FastAPI:**
   - Um framework web assíncrono para construção de APIs rápidas em Python, conhecido por sua performance e simplicidade.

2. **asyncpg:**
   - Uma biblioteca de acesso assíncrono ao PostgreSQL para interagir de forma eficiente com o banco de dados PostgreSQL utilizando operações assíncronas.

3. **Pydantic:**
   - Uma biblioteca para validação de dados e serialização de modelos em Python, usada para definir e validar os modelos de dados da API.

4. **PIL (Pillow):**
   - Uma biblioteca Python para processamento de imagens, utilizada para trabalhar com imagens no contexto do upload e armazenamento de fotos de usuários.

5. **Swagger UI/OpenAPI:**
   - Ferramentas utilizadas para documentação interativa da API, permitindo que os desenvolvedores visualizem e interajam com a especificação da API.

## API Endpoints

### Cadastro de Usuários
- Método: POST 
- URL: /users/
- Parâmetros:
  - `id`: ID numérico do usuário (int).
  - `nome`: Nome do usuário (str).
  - `data_de_nascimento`: Data de nascimento do usuário (str).
  - `email`: E-mail do usuário (str).
  - `telefone`: Número de telefone do usuário (str).
  - `empresa`: Nome da empresa do usuário (str).
- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Success",
      "data": {
          "id": 2,
          "nome": "user teste",
          "data_de_nascimento": "10/02/1990",
          "email": "userteste@email.com",
          "telefone": "37940028922",
          "empresa": "empresa teste"
}
    }
    ```
  - Erro (400)
    ```
    {
      "message": "Falha ao criar usuário"
    }
    ```
    - Erro (500)
    ```
    {
      "message": "Internal Server Error"
    }
    ```

### Consulta de Usuários
- Método: GET  
- URL: /users/
- Parâmetros:
  None
- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Success",
      "data": {
          "id": 2,
          "nome": "user teste",
          "data_de_nascimento": "10/02/1990",
          "email": "userteste@email.com",
          "telefone": "37940028922",
          "empresa": "empresa teste"
}
    }
    ```
  - Erro (400)
    ```
    {
      "message": "Falha ao recuperar usuários"
    }
    ```
    - Erro (500)
    ```
    {
      "message": "Internal Server Error"
    }
    ```

### Consulta de Usuários
- Método: PUT   
- URL: /users/{user_id}
- Parâmetros:
   - `user_id`: ID numérico do usuário a ser atualizado (int) - passado como parte da URL.
   - `user_data`: Dados atualizados do usuário (corpo da requisição no formato JSON).
- Resposta:
  - Sucesso (200 OK)
    ```
    {
      "message": "Success",
      "data": {
          "id": 2,
          "nome": "user teste",
          "data_de_nascimento": "10/02/1990",
          "email": "userteste@email.com",
          "telefone": "37940028922",
          "empresa": "empresa teste"
}
    }
    ```
  - Erro (400)
    ```
    {
      "message": "Falha ao atualizar dados do usuário"
    }
    ```
    - Erro (500)
    ```
    {
      "message": "Internal Server Error"
    }
    ```
### Upload de Imagem
- Método: POST   
- URL: /users/{user_id}/photo
- Parâmetros:
    - `user_id`: ID numérico do usuário para o qual a foto será associada (int) - passado como parte da URL.
     - `photo`: Arquivo da foto a ser enviada (parte do corpo da requisição como um `multipart/form-data`).
- Resposta:
  - Sucesso (200 OK)
    ```
    {
  "message": "Foto adicionada com sucesso"
}
    }
    ```
  - Erro (400)
    ```
    {
      "message": "Falha no upload de imagem"
    }
    ```
    - Erro (500)
    ```
    {
      "message": "Internal Server Error"
    }
    ```

### Upload de Imagem
- Método: GET   
- URL: /users/{user_id}/photo
- Parâmetros:
    - `user_id`: ID numérico do usuário para o qual a foto será associada (int) - passado como parte da URL.
- Resposta:
  - Sucesso (200 OK)
    ```
     {
      "message": "Success",
      "data": {{Imagem}}
    }
    ```
  - Erro (400)
    ```
    {
      "message": "Imgaem não encontrada"
    }
    ```
    - Erro (500)
    ```
    {
      "message": "Internal Server Error"
    }
    ```

## Considerações de Segurança

Quanto aos requisitos de segurança, os mesmos foram tratados como débitos técnicos e serão implementados nas entregas futuras.

## Implantação
Para esta primeira etapa a API desenvolvida está sendo executada localmente até termos um front/back que possa se conectar e consumir os serviços desenvolvidos.

## Testes

Até o momento foram realizados apenas testes unitários visando garantir o MVP do projeto. 

Como próximos passos temos os testes de caso de uso para assegurar a cobertura de todos os cenários possíveis pela aplicação.

# Referências
- Documentação oficial das tecnologias utilizadas na API, como FastAPI, Pydantic, asyncpg.
- Exemplos e tutoriais disponíveis nos sites oficiais e repositórios de código.
