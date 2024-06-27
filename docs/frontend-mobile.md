# Front-end Móvel

A aplicação móvel será útil para o funcionário para registrar seus gastos de formas simples, além de conseguir verificar o histórico dos seus gastos anteriores.

## Tecnologias Utilizadas

* API Firebase Realtime Database;
* Kodular - Plataforma de desenvolvimento mobile em bloco.  

O ambiente utilizado para desenvolvimento da aplicação mobile é feito em blocos, segue um registro da programação utilizada na solução.

![Código em Bloco](/src/IMAGE/Código.png)


Além disso, API utilzada vai enviar as fotos para nuvem, chamada Firebase Realtime.

![Realtime + BD](/src/IMAGE/Realtime%20e%20Banco%20de%20dados.png)

## Geração de APK(Android Application Pack)

Para que o cliente consiga baixa a aplicação em seu dispositivo móvel, basta que o responsável pelo desenvolvimento gere APK através do próprio Kodular, a imagem a baixo mostra o procedimento.

![Gerar APK](/src/IMAGE/Gerar%20APK.png)

## Arquitetura

Segue o modelo o qual indica a comunicação da solução elaborada pelo grupo.

![Arquitetura Mobile](/src/IMAGE/Arquitetura%20Mobile.png)

## Modelagem da Aplicação
Em primeiro momento, o usuário deve registrar um novo gasto em seu aplicativo.

Segue uma lista com os dados que ele deve preencher:

* Data da despesa;
* Valor de gasto;
* Tipo de despesa;
*Estado;
*Cidade;
* Imagem;

Com o uso do Firebase Realtime, os dados serão armazenados conforme a imagem a baixo.

![Estrutura de Dados](/src/IMAGE/Dados%20Mobile.png)


## Projeto da Interface

A aplicação elaborada foi composta por 5 telas.

* 1 - Tela de carregamento ao abrir a aplicação;
* 2 - Tela de login para o acesso do funcionário;
* 3 - Tela de navegação na qual o usuário vai escolher registrar ou verificar gastos;
* 4 - Tela de registro será onde o usuário colocará todo o detalhamento de um gasto específico;
* 5 - Tela de histórico, onde mostrará as justificativas de gasto do funcionário.

A imagens das telas está na seção "Design Visual".


### Wireframes
[Inclua os wireframes das páginas principais da interface, mostrando a disposição dos elementos na página.]

### Design Visual
Segue o design de todas as telas que foram desenvolvidas para o aplicativo.

![Página_Login](/src/IMAGE/Telas.png)

### Paletas de cores

Para o plano de fundo, foi utilizado o seguinte Hexadecimal:

* #FFFFFF.

Já para os botões de navegação, os seguinte Hexadecimais foram utilizado:

* #656565;
* #B4CF12;

### Tela 1 - Tela de Carregamento

Assim que o usuário abrir a aplicação em seu smartphone, essa tela irá aparecer.

Segue o código utilizado.


![Carregamento](/src/IMAGE/Carregamento.jpeg)

### Tela 2 - Tela de Login

Após o carregamento da página, o usuário vai colocar as suas credenciais de acesso para utilizar as funcionalidades da aplicação.

Caso ele não lembre a sua senha, basta ele clicar em "Esqueci a minha senha" para iniciar o procedimento de recuperação de senha.


Segue o código utilizado.


![Código_Login](/src/IMAGE/Código_Login.jpeg)

### Tela 3 - Tela Para Escolher Funcionalidade

Com o login efetuado, o usuário escolherá qual funcionalidade ele deseja acessar, ou seja, registrar um novo gasto ou consultar o que ele cadastrou.



Segue o código utilizado.


![Home](/src/IMAGE/Tela_Home.jpeg)

### Tela 4 - Cadastrar Novo Custo

Para que o custo seja enviado para o painel, basta o usuário preencher os campos listados, ou seja: 
* Data de despesa;
* Valor do gasto;
* Tipo de despesa;
* Estado e cidade onde foi gasto a quantia em questão.

Segue o código utilizado.


![Novo_Gasto](/src/IMAGE/Adicionar%20Despesa.jpeg)

### Tela 5 - Tela de Consulta de Gastos

Basicamente é o local onde os usuários conseguem consultar os seus gastos.


Segue o código utilizado.


![Listar_Depesa](/src/IMAGE/Listar_Despesa.jpeg)


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

Para a segurança da organização que vai utilizar a aplicação no seu dia a dia, somente os usuários autorizados terão acesso ao aplicativo.

Isso acontecerá da seguinte forma:
* Será solicitado ao funcionário baixar a aplicação em seu telefone;
* O supervisor do usuário deve fornecê-lo os seus acessos(Usuário e senha).


Desta forma, caberá a empresa a conferir quais são as pessoas poderão justificar os seus gastos de forma simples e segura.


## Implantação

Para se utilizar a aplicação, é recomendável que o responsável tenha um telefone com o sistema operacional Android e que possua no mínimo 2 GB de RAM e por volta de 25 MB de espaço para instalar a aplicação. 

Como mostrado na terceira imagem desta página, o Kodular permite gerar o APK como mostrado na terceira imagem desta seção.

Com isso, basta que o responsável pela aplicação envie o arquivo que contém o software para os usuários.

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