# Front-end Móvel

[Inclua uma breve descrição do projeto e seus objetivos.]

## Tecnologias Utilizadas

* API Firebase Realtime Database;
* Kodular - Plataforma de desenvolvimento mobile.  

## Arquitetura

[Descrição da arquitetura das aplicação móvel, incluindo os componentes e suas interações.]

## Modelagem da Aplicação
[Descreva a modelagem da aplicação, incluindo a estrutura de dados, diagramas de classes ou entidades, e outras representações visuais relevantes.]

## Projeto da Interface
[Descreva o projeto da interface móvel da aplicação, incluindo o design visual, layout das páginas, interações do usuário e outros aspectos relevantes.]

### Wireframes
[Inclua os wireframes das páginas principais da interface, mostrando a disposição dos elementos na página.]

### Design Visual
Segue primeiramente os design de todas as telas que foram desenvolvidas no App.

![Página_Login](/src/IMAGE/Telas.png)

### Paletas de cores

Para o plano de fundo, foi utilizado o seguinte Hexadecimal:

* #FFFFFF.

Já para os botões de navegação, os seguinte Hexadecimais foram utilizado:

* #656565;
* #B4CF12;

### Tela 1 - Tela de Carregamento

Assim que o usuário abrir a aplicação em seu smartphone, essa tela irá aparecer.

### Tela 2 - Tela de Login

Após o carregamento da página, o usuário vai colocar as suas credenciais de acesso para utilizar as funcionalidades da aplicação.

Caso ele não lembre a sua senha, basta ele clicar em "Esqueci a minha senha" para iniciar o procedimento de recuperação de senha.

### Tela 3 - Tela Para Escolher Funcionalidade

Com o login efetuado, o usuário escolherá qual funcionalidade ele deseja acessar, ou seja, registrar um novo gasto ou consultar o que ele cadastrou.

### Tela 4 - Cadastrar Novo Custo

Para que o custo seja enviado para o painel, basta o usuário preencher os campos listados, ou seja: 
* Data de despesa;
* Valor do gasto;
* Tipo de despesa;
* Estado e cidade onde foi gasto a quantia em questão.

### Tela 5 - Tela de Consulta de Gastos

Basicamente é o local onde os usuários conseguem consultar os seus gastos.

### Layout Responsivo
[Discuta como a interface será adaptada para diferentes tamanhos de tela e dispositivos.]

### Interações do Usuário
[Descreva as interações do usuário na interface, como animações, transições entre páginas e outras interações.]

## Fluxo de Dados

[Diagrama ou descrição do fluxo de dados na aplicação.]

## Requisitos Funcionais

| ID | Descrição do Requisito | Prioridade |
| --- | --- | --- |
| RF-001 | Os usuários devem ser capazes de autenticar-se utilizando credenciais válidas, inserindo e-mail e senha. | Alta |
| RF-002 | Haverá opção para recuperação de senha caso o usuário esqueça. | Média |
| RF-003 | O sistema deve mostrar todo detalhamento para se registrar um novo gasto, como do tipo de despesa e foto do comprovante| Alta |
| RF-004 | Os usuários devem ser direcionados para a tela principal do aplicativo após a autenticação.  | Alta |
| RF-005 | Os usuários devem ser capazes de inserir informações sobre uma despesa, incluindo data, valor, categoria, cidade e estado .  | Alta |
| RF-006 | Deve ser fornecida uma opção para anexar comprovantes ou recibos de despesas.  | Alta |
| RF-007 | Os usuários devem poder visualizar todas as despesas cadastradas.  | Alta |
| RF-008 | O menu deve conter opções para acessar as funcionalidades principais do aplicativo, ou seja, cadastrar despesa ou visualizar despesas.  | Alta |
| RF-009 |  Deve ser fácil de acessar a partir de qualquer tela do aplicativo, oferecendo uma navegação intuitiva.  | Alta |
| RF-010 | Após a autenticação bem-sucedida, os usuários devem ser direcionados para a tela principal do aplicativo.  | Média |
| RF-011 | Após a autenticação bem-sucedida, os usuários devem ser direcionados para a tela principal do aplicativo.  | Média |


## Requisitos Não Funcionais

| ID | Descrição do Requisito | Prioridade |
| --- | --- | --- |
| RF-001 | O aplicativo deve implementar medidas de segurança para proteger os dados sensíveis dos usuários. | Alta |
| RF-002 | Deve haver políticas claras de privacidade e conformidade com regulamentações de proteção de dados como LGPD. | Alta |
| RF-003 |O aplicativo deve ter um desempenho rápido e responsivo, mesmo em condições de rede variáveis ou dispositivos móveis com recursos limitados.| Alta |
| RF-004 | Os tempos de carregamento de telas e operações devem ser mínimos, garantindo uma experiência de usuário fluida e sem interrupções.  | Alta |
| RF-005 | Deve ser testado em diferentes dispositivos e plataformas para garantir sua funcionalidade e usabilidade em cenários diversos.  | Alta |
| RF-006 | A interface do usuário deve ser intuitiva e fácil de usar, seguindo as diretrizes de design de interface móvel.  | Alta |


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

## Teste 1: Integração Entre Tela de Login e Tela de Visualização de Despesas

### Objetivo

Verificar se o usuário autenticado pode acessar a tela de cadastro de despesa após o login.

### Passos: 
* 1 - Realizar o login com credenciais válidas;
* 2 - Verificar se a tela do Menu é exibida após o login.

### Resultado Esperado

O menu autenticado é redirecionado com sucesso para a tela de Menu.


## Teste 2: Integração Entre Tela de Cadastro de Despesa e Tela de Visualização de Despesas

### Objetivo

Verificar se as despesas cadastradas são exibidas corretamente na tela de visualização.

### Passos: 
* 1 - Adicionar uma nova despesa;
* 2 - Navegar para a tela de visualização de despesas;
* 3 - Verificar se a despesa cadastrada é exibida na tela de despesas.

### Resultado Esperado

A nova despesa é exibida na lista de despesas, na tela de visualização de despesas.


## Teste 3: Integração Entre Tela de Login e Tela de Visualização de Despesas

### Objetivo

Verificar se o usuário autenticado pode acessar diretamente a tela de visualização de despesas após o login, passando para o Menu.

### Passos: 
* 1 - Realizar o login com credenciais inválidas.

### Resultado Esperado

Essa mensagem deve aparecer para o usuário: “Dados inseridos estão incorretos”.



# Referências


* Kodular Docs: Introduction. **Kodular**, [s.d.]. Disponível em: https://docs.kodular.io/. Acesso em 1 de junho de 2024.

* Documentação do Firebase - Google. **Firebase**, [s.d.]. Disponível em: https://firebase.google.com/docs?hl=pt-br. Axcesso em 1 de junho de 2024.