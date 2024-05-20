# Front-end Web

[Inclua uma breve descrição do projeto e seus objetivos.]

## Tecnologias Utilizadas
[Lista das tecnologias principais que serão utilizadas no projeto.]

Segue as lista de tecnologias utilizadas:

* HTML5 - Linguagem de Marcação Hipertexto utilizada com muita frequência em projeto de páginas Web;
* CSS - Linguagem utilizada para estilização de componentes presentes em páginas Web;
* Bootstrap - Framework para projetos de aplicações Front-End, onde é entregue os usuários vários modelos de funcionalidades que podem ser utilizados;
* JavaScript - Foi utilizado está linguagem para validação de login no lado do cliente (navegador) devido à sua vasta presença na internet. O que permite validar instantaneamente campos de formulário, como, por exemplo: verificação de campos obrigatórios, formato do e-mail, extensão da senha e entre outros.

## Arquitetura

Segue a imagem da arquitetura da aplicação Web.

![Arquitetura Web](/src/IMAGE/Arquitetura%20Web.png)


## Modelagem da Aplicação
[Descreva a modelagem da aplicação, incluindo a estrutura de dados, diagramas de classes ou entidades, e outras representações visuais relevantes.]

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g5-projeto-dengue-prestacao-de-contas/assets/160795375/b680012e-907d-4faa-bdf6-9c0bccc81bec)
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g5-projeto-dengue-prestacao-de-contas/assets/160795375/b2d3cd4c-0410-4ba2-985f-a969dbe3c306)
![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g5-projeto-dengue-prestacao-de-contas/assets/160795375/31291e38-489b-4151-b635-c98d790d82af)

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g5-projeto-dengue-prestacao-de-contas/assets/160795375/63c10cf0-ac01-4a0c-a59a-98c0ebd6ebf2)



## Projeto da Interface Web
[Descreva o projeto da interface Web da aplicação, incluindo o design visual, layout das páginas, interações do usuário e outros aspectos relevantes.]

# Página de Login

![Página_Login](/src/IMAGE/Login.png)

Nesta página será possível o usuário fazer login para verificar os seus gastos, olhar a seção de FAQ(Perguntas Frequentes) para retirar as sua dúvidas sobre o painel e aplicativo da solução.

![Página_Home](/src/IMAGE/Página_Home.png)

Esta página é utilizada para o usuário escolher se ele deseja acessar a seção de funcionários ou gastos.

![Página_Gastos](/src/IMAGE/Página_Gastos.png)

Seção utilizada para consultar ou cadastrar novos gastos. 

![Registrar_Gastos.png](/src/IMAGE/Registrar_Gastos.png)

Página utilizada para cadastrar novos gastos do funcionário.

### Wireframes
[Inclua os wireframes das páginas principais da interface, mostrando a disposição dos elementos na página.]

### Design Visual

## Paleta de Cores

Para a elaboração da página Web do projeto, os componentes escolheram uma combinação de branco e verde para a criação das páginas.

No corpo das páginas, foi utilizado o seguinte Hexadecimal:

* #FFFFFF.

Já para a barra de navegação, títulos e entro outros textos, o verde foi utilizado para combinar junto a cor da logo do projeto.

Segue as variações de Hexadecimais utilizados: 
* #008000;
* #005700;
* #006400;

## Tipografia

A fonte utilizada foi da família:

* 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif

Obs.: Para deixar mais específico, foi utilizado a Calibri, pois alguns artigos indicam que pessoas disléxicas possuem mais facilidade para ler essa fonte.

## Ícones utilizados

Na aplicação Web, foram utilizados duas imagens.

A primeira imagem foi utilizada na página Home, utilizada basicamente para apresentar o nosso projeto. 

Segue o modelo: 

![LogoPrincipal.png](/src/IMAGE/LOGO.png)

Por outro lado, a segunda imagem é utilizada como um botão de navegação para voltar a página principal, onde o usuário pode escolher se ele deseja consultar os seus funcionários ou seus pagamentos.

Segue o modelo: 

![Imagem_Home.png](/src/IMAGE/HOME.png)


# 


### Layout Responsivo
[Discuta como a interface será adaptada para diferentes tamanhos de tela e dispositivos.]

Com o auxílio do Bootstrap, foi possível implementar a responsividade na página, segue um exemplo na prática.

![Página_Responsiva.png](/src/IMAGE/Página_Responsiva.png)

### Interações do Usuário
[Descreva as interações do usuário na interface, como animações, transições entre páginas e outras interações.]

## Fluxo de Dados

[Diagrama ou descrição do fluxo de dados na aplicação.]

## Requisitos Funcionais

| ID | Descrição do Requisito | Prioridade |
| --- | --- | --- |
| RF-001 | O sistema deverá apresentar funções para cadastro e consulta de gastos. | Alta |
| RF-002 | O sistema deverá apresentar uma seção de "Perguntas Frequentes" para auxiliar usuários em caso de dúvidas | Média |
| RF-003 | O sistema deve mostrar todo detalhamento para se registrar um novo gasto, como do tipo de despesa e foto do comprovante| Alta |
| RF-004 | O sistema deve ter funcionalidades adicionar, excluir e consultar funcionários.  | Média |

## Requisitos Não Funcionais


| ID | Descrição do Requisito | Prioridade |
| --- | --- | --- |
| RNF-001 | A aplicação deve funcionar nos navegadores mais utilizados, como o Google Chrome, Microsoft Edge e Mozilla Firefox; | Alta |
| RNF-002 | A aplicação deve ser responsiva, pois assim será possível utilizá-la em dispositivos com telas menores; | Alta |
| RNF-003 | É necessário autenticação de dados para navegação | Alta |
| RNF-004 | Será possível a edição de conteúdos pelo usuário, como adicionar novos gastos de viagem. | Alta |
| RNF-005 | Deverá ser desenvolvido pela linguagens HTML, CSS, JavaScript | Alta |
|RNF-006  | A aplicação deve funcionar em sistemas operacionais famosos como o Microsoft Windows, Linux e Max OS.  | Alta |



## Considerações de Segurança

Para um sistema de prestação de contas onde os funcionários inserem informações sobre gastos, notas fiscais e dados bancários, as considerações de segurança são absolutamente essenciais. A proteção dessas informações sensíveis não só preserva a privacidade dos dados dos funcionários, mas também assegura a integridade e confiabilidade do sistema. Implementar robustas medidas de segurança é fundamental para prevenir acessos não autorizados, ataques cibernéticos e potenciais fraudes. Além disso, garantir a conformidade com regulamentações de proteção de dados é vital para evitar penalidades legais e manter a confiança dos usuários na plataforma.

A seguir estão considerações de ferramentas e políticas que podem ser úteis para a segurança da plataforma, assim como seus objetivos

### 1. Autenticação
Objetivo: Garantir que apenas usuários autorizados possam acessar o sistema.

* Autenticação Multifator (MFA): Implementar MFA para adicionar uma camada extra de segurança além das senhas. Isso pode incluir uma senha secundária, um token ou validação de número de celular ou algo característico do usuário, como sua impressão digital ou reconhecimento facial.
* Política de Senhas Fortes: Exigir senhas complexas que incluam uma combinação de letras maiúsculas, minúsculas, números e caracteres especiais. Também, implementar a expiração periódica das senhas e proibir o reuso de senhas antigas.
* Single Sign-On (SSO): Considerar o uso de SSO (mecanismo de autenticação que permite que um usuário acesse múltiplas aplicações e serviços com uma única credencial de login) para facilitar o gerenciamento de autenticação e reduzir a carga de manter múltiplas credenciais.

### 2. Autorização

* Controle de Acesso Baseado em Funções: Definir funções com permissões específicas e atribuir usuários a essas funções, garantindo acesso apenas ao que é necessário para cada.
* Princípio do Menor Privilégio: Conceder aos usuários o nível mínimo de acesso necessário para realizar suas tarefas.

### 3. Proteção contra Ataques

Firewalls e IDS/IPS: Utilizar firewalls para filtrar tráfego indesejado e sistemas de detecção/prevenção de intrusões (IDS/IPS) para monitorar e bloquear atividades suspeitas.

### 4. Monitoramento e Auditoria

* Logs de Auditoria: Manter logs detalhados de todas as atividades do sistema, incluindo tentativas de login, acessos a dados sensíveis e alterações de configuração.
* Monitoramento Contínuo: Implementar ferramentas de monitoramento para analisar os logs em tempo real e identificar comportamentos anômalos.
* Alertas e Notificações: Configurar alertas automáticos para atividades suspeitas, como múltiplas tentativas de login falhadas ou acesso a dados sensíveis fora do horário normal de trabalho.

### 5. Backup e Recuperação

* Backups Regulares: Realizar backups frequentes dos dados e armazená-los em locais seguros.
* Planos de Recuperação de Desastres: Desenvolver e testar planos de recuperação para restaurar o sistema rapidamente em caso de falhas ou ataques.

### 6. Conformidade e Regulamentações

* Compliance com GDPR, LGPD, etc.: Garantir que o tratamento de dados pessoais esteja em conformidade com regulamentações como a GDPR (General Data Protection Regulation) na Europa e a LGPD (Lei Geral de Proteção de Dados) no Brasil.
* Auditorias de Segurança: Realizar auditorias periódicas para verificar a conformidade e identificar áreas de melhoria na segurança.


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

Nós elaboramos 2 casos de teste da aplicação, onde utilizamos a metodologia de Teste Unitário, onde faremos da seguinte forma:

* O objetivo será definido
* Demonstração do Código
* Teste escrito
* Execução do teste
* Análise do resultado


 ## **Teste 1**: Teste de login para acesso na aplicação

 ### Objetivo

 Esse teste foi executado com o objetivo de verificar se é possível acessar a aplicação sem uma conta de acesso.

 ### Demonstração do Código 

 ![Código_Teste1.png](/src/IMAGE/Código_Teste1.png)

 ### Execução do Teste 

 Basicamente o testador da aplicação vai tentar fazer login na página com os campos de login e senha sem preenchê-los. Para fazer o login, basta o usuário clicar em entrar.

 Felizmente como esperado, a solução manda uma mensagem padrão para o usuário, onde o solicita para preencher o campos obrigatórios para fazer o login.

### Análise de Resultados

Como basicamente o resultado do teste foi um sucesso, não será necessário refazer o código da solução.

## **Teste 2**: Cadastro de uma nova despesa

 ### Objetivo

 O segundo teste foi executado com o fundamento de checar a possibildade de cadastrar um novo gasto sem preencher um novo gasto.

 ### Demonstração do Código 

 ![Código_Teste2.png](/src/IMAGE/Código_Teste2.png)

 ### Execução do Teste 

 Testador da aplicação irá acessar a página de cadastro de nova despesa e tentar preencher os campos de forma incorreta e tentar registrar o gasto.

 No campo de Valor de Despesa, ele irá tentar preencher o campo com letras(A,B,C...) e caracteres especiais(!,@,#...).

 Como esperado

### Análise de Resultados

Como basicamente o resultado do teste foi um sucesso, não será necessário refazer o código da solução.



# Referências

* Bootstrap. The most popular HTML, CSS and JS library in the World. **Bootstrap**, [s.d.]. Disponível em: https://getbootstrap.com/. Acesso em 16 de maio de 2024.

* CASTRO, Bruna. Notação BPMN: um guia completo sobre o assunto! **Zeev**, [s.d.]. Disponível em: https://zeev.it/blog/o-que-significa-bpmn/. Acesso em: 18 de maio de 2024.

* Fontes para pessoas com dislexia. **IFRS**, 02 de maio de 2022. Disponível em: https://cta.ifrs.edu.br/fontes-para-pessoas-com-dislexia/#:~:text=%C3%89%20sempre%20recomendado%20escolher%20fontes,a%20leitura%20ainda%20mais%20dif%C3%ADcil. Acesso em: 19 de maio de 2024.
