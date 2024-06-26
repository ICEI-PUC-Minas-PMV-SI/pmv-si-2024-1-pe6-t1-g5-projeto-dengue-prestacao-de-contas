## Introdução

O projeto atual, denominado Travel Payback, tem como objetivo principal mitigar as dificuldades enfrentadas pelos colaboradores que viajam e precisam apresentar notas fiscais para reembolso de despesas de viagem. Atualmente, este processo é manual e demorado, pois os colaboradores precisam guardar todas as notas fiscais e informações adicionais para apresentá-las às lideranças após o retorno, iniciando assim um longo processo de negócios para efetuar o reembolso. Com isso, preten-se disponibilizar aos colaboradores um sistema onde eles possam realizar o processo de apresentação de notas fiscais remotamente, proporcionando maior agilidade em todo o processo e, aos gestores, uma forma mais ágil de conferir documentações de despesa e realizar aprovações de processos financeiros de reembolso.

## Problema
No mundo corporativo é muito comum que funcionários dos mais variados níveis de hierarquia façam viagens de trabalho, atendendo a clientes em nome da empresa para a qual trabalham. Tais viagens geram diversos tipos de gastos como deslocamento, alimentação, hospedagem, entre outros. 

De acordo com o artigo 2° da CLT, quando o trabalhador está viajando em nome da empresa, ela deve custear as despesas acarretadas pela viagem. Tais despesas podem ser pagas de três formas diferentes: diárias de viagem, adiantamento de despesas e reembolso de despesas. 

As diárias de viagem geralmente são pagas antes do início da viagem ou em parcelas ao longo do período de deslocamento. O valor das diárias pode variar dependendo de diversos fatores, como o destino da viagem, a política da empresa, a duração da viagem e as despesas esperadas durante o período de estadia fora da sede. Ela não exige prestação de contas das despesas por parte do empregado, sendo de responsabilidade dele a administração do valor repassado pela empresa.

No adiantamento de despesas, o funcionário recebe antecipadamente uma quantia para cobrir despesas relacionadas a uma viagem a trabalho. Esse adiantamento é concedido pela empresa para que o colaborador tenha fundos disponíveis para custear suas despesas e normalmente é calculado de maneira estimada, podendo ser maior ou menor do que os gastos que o trabalhador terá. Caso o valor seja estimado para mais, o colaborador deverá devolver o remanescente. Caso seja estimado para menos, um complemento deverá ser solicitado. Independente do caso, deve haver um processo de prestação de contas.

Por fim, temos o reembolso de despesas. Neste caso, o funcionário paga por todas as despesas relacionadas à viagem e solicita à empresa o reembolso do valor. O pagamento é realizado mediante prestação de contas.

O reembolso de despesas é uma prática comum, pois permite que os funcionários sejam reembolsados de forma justa pelos custos incorridos durante o desempenho de suas funções, ao mesmo tempo em que ajuda a manter um controle eficaz sobre os gastos corporativos.

Porém, infelizmente, não existe uma forma oficial para comprovação de gastos e prestação de contas. Algumas empresas utilizam relatórios em planilhas, o que pode trazer diversos problemas, tais como:

Erros e Omissões: Funcionários podem cometer erros ao registrar despesas ou podem omitir informações importantes, resultando em relatórios imprecisos.

Fraude e Abuso: Em alguns casos, funcionários podem deliberadamente inflar despesas ou incluir despesas não relacionadas ao trabalho para obter reembolsos injustificados.

Conformidade e Auditoria: Relatórios de despesas mal preenchidos podem levar a problemas de conformidade com políticas internas da empresa ou regulamentações externas. Isso pode resultar em auditorias e potenciais penalidades.

Aprovação Atrasada: Se os relatórios não forem preenchidos corretamente ou faltarem informações, pode haver atrasos na aprovação e no reembolso das despesas, o que pode causar insatisfação entre os funcionários.

Falta de Padronização: Sem diretrizes claras e padronizadas para preenchimento de relatórios de despesas, pode haver inconsistências nos formatos e nas informações fornecidas, dificultando a análise e o gerenciamento eficazes.

Despesas não Autorizadas: Funcionários podem inadvertidamente ou intencionalmente solicitar reembolsos por despesas não autorizadas pela empresa, como itens de luxo ou entretenimento pessoal.

Dificuldades de Rastreamento: Sem um sistema eficiente de rastreamento de despesas, pode ser difícil para os departamentos financeiros ou gerentes monitorar gastos e identificar padrões de despesas.

Custos Administrativos: O processamento manual de relatórios de despesas pode ser demorado e custoso em termos de recursos humanos e financeiros, especialmente para empresas com muitos funcionários que viajam com frequência.

Desta forma, é natural que, para mitigar esses problemas, as empresas procurem soluções de software de gestão de despesas que automatizam o processo, forneçam diretrizes claras aos funcionários e facilitem a auditoria e o monitoramento das despesas.

## Objetivos

O objetivo é desenvolver uma aplicação que possa dar mais agilidade, transparência e notação assertiva de gastos provenientes das viagens corporativas, facilitando o controle tanto por parte do empregador (a) quanto do colaborador (a).

Como objetivos específicos para o projeto temos:

- Proporcionar às organizações um acompanhamento dos recursos aplicados em viagens corporativas;
- Fazer otimizações na aplicação desses recursos, podendo gerar economia na organização e ganho de agilidade nos processos e projetos em andamento, mediante análise de roteiros e deslocamento de pessoal; 
- Gerar um recurso confiável e prático aos colaboradores para apontamento e verificação da disponibilidade financeira durante viagens, facilitando a prestação de contas;
 

## Justificativa

 A prática de viagens de trabalho é uma realidade no ambiente corporativo, sendo essencial para o bom andamento dos negócios, especialmente quando se trata do atendimento a clientes e representação da empresa em diversos locais. Diante dessa necessidade, é crucial estabelecer políticas claras de custeio de despesas relacionadas a essas viagens realizadas pelos empregados. 
 
 De acordo com os resultados mais recentes do Business Travel Outlook, a indústria global de viagens corporativas superou os impactos da pandemia e está experimentando um impulso significativo no início de 2023. Prevê-se que essa tendência de crescimento anual persista, sendo notável o compromisso contínuo das organizações em priorizar viagens sustentáveis em suas operações.
 
 Sendo assim, a implementação de políticas claras e transparentes quanto ao custeio de despesas de viagens corporativas não apenas atende às exigências legais, mas também promove a eficiência operacional, o equilíbrio financeiro e a responsabilidade dos colaboradores, elementos essenciais para o sucesso e a integridade das operações empresariais.

Fonte: CEDEÑO, Karina. **Gastos e volume de viagens corporativas aumentarão neste ano, diz GBTA.**. 2024. Disponível em: https://www.panrotas.com.br/viagens-corporativas/pesquisas-e-estatisticas/2024/01/gastos-e-volume-de-viagens-corporativas-aumentarao-neste-ano-diz-gbta_202792.html. Acesso em: 26, abril de 2024.


## Público-Alvo

A solução de software desenvolvida tem como o objetivo de atingir os trabalhadores que possuem a necessidade de justificar os seus gastos para a organização, assim como os gestores que precisam aprovar o reebolso das despesas e o setor financeiro, que precisa analisar o resultado final pagar ao funcinário o valor a ser reembolsado.

Seguem algumas ocasiões em que o aplicativo pode se implementado para as justificativas de gastos:

* Hospedagem em hotéis;
* Gasto com refeições;
* Consumo de combustível;
* Compra de materias para consumo;
* Passagens aéres e rodoviárias;
* Aluguel de veículos.

# Especificações do Projeto

O projeto visa mitigar as dificuldades dos colaboradores que viajam e necessitam apresentar notas fiscais para reembolso de despesas de viagem, assim como seus gestores imediatos e setor financeiro. Com esse objetivo em mente, foi proposto o desenvolvimento de uma solução **_web_** e **_mobile_** que inclua um backend para realizar chamadas de API e executar consultas ao banco de dados para coletar informações.

Além disso, também será apresentada uma interface onde os gestores poderão acompanhar tanto as porcentagens de erros quanto de sucesso da aplicação, bem como os dados dos próprios colaboradores.
 
## Personas

Marcos Silva, possui 30 anos de idade, é um consultor de software que trabalha em uma empresa multinacional há aproximadamente 10 anos. Em sua rotina profissional, Marcos faz constantes viagens dentro e fora do Brasil, sendo deslocado frequentemente de forma urgente para diversos tipos de clientes. A empresa oferece soluções em tecnologia da informação. Todo o gasto com deslocamento, alimentação, hospedagem e demais despesas é desembolsado primeiramente por ele. Posteriormente, precisa apresentar tais despesas à empresa que presta serviços para que ela possa reembolsar o dinheiro aplicado durante a estadia nos clientes. Marcos necessita de uma aplicação prática, eficiente e seguro para registrar e manter o controle financeiro em relação aos gastos que ocorrem em suas viagens, podendo assim apresentar de forma prática as informações das despesas que a empresa necessita para reembolso.

Ana Oliveira, possui 35 anos de idade, sua profissão é Engenheira de Projetos. Sendo assim, trabalha como engenheira em uma empresa nacional há 12 anos.
Ela desloca-se regularmente para diferentes estados para liderar projetos de engenharia. Sua presença em locais variados é essencial para coordenar equipes e garantir o sucesso dos projetos. A empresa em que trabalha é especializada em desenvolvimento de soluções inovadoras em engenharia. Todos os custos relacionados a viagens, incluindo deslocamento, alimentação, hospedagem e outras despesas, são inicialmente cobertos por Ana, que, posteriormente, precisa apresentar essas despesas para reembolso pela empresa.

Assim como Marcos, Ana necessita de um software eficiente para registrar e controlar os gastos relacionados às suas viagens. Um sistema prático e seguro seria crucial para simplificar o processo de registro e permitir uma apresentação clara das informações contábeis necessárias para o reembolso pela empresa. 

João Alves, possui 43 anos de idade, sua profissão é Contador. Trabalha como Gestor de Custos numa empresa de auditoria há 8 anos. Em sua rotina de trabalho ele recebe diversos dados dos colaboradores para realizar os devidos lançamentos contábeis de entrada e saída de recursos, entre eles despesas de viagens realizadas por colaboradores desta organização, e uma das dificuldades é o controle e correção de inconsistências vistas na gestão desses recursos, podendo gerar gastos extras e dificultar inclusive reembolsos quando necessário.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:


## Histórias de Usuários

Com base nas necessidades dos usuários para com o produto identificamos as seguintes histórias:
 
| COMO | DESEJO | PARA |
| --------|-----------|--------|
|Colaborador | Realizar meu cadastro no sistema | Informar os gestores sobre gastos em viagens comerciais|   
|Colaborador | Alterar meus dados cadastrados | Não haver conflito com os gestores|
|Colaborador | Apontar gastos de viagens comerciais | Receber o reembolso dos gastos da viagem|
|Colaborador | Visualizar as notas fiscais que já cadastrei | Conferir valores|
|Colaborador | Alterar o conteúdo de um cadastro de nota fiscal | Informar o real valor|
|Gestor| Ter um visão dos dados cadastrados na aplicação | Melhor gerir a equipe|

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais 

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que os funcionários devem poder registrar diferentes tipos de despesas incorridas durante a viagem | ALTA | 
|RF-002| Permitir que os funcionários capturem imagens ou façam upload de recibos e comprovantes de despesas para cada transação   | ALTA |
|RF-003| Permitir que gerentes ou departamentos responsáveis aprovem ou rejeitem despesas submetidas pelos funcionários  | ALTA |
|RF-004| Permitir que os funcionários adicionem notas ou comentários adicionais a cada despesa registrada, fornecendo contextos ou detalhes relevantes para facilitar a compreensão e aprovação por parte dos gestores  | ALTA |
|RF-005| Permitir a implementação de políticas de despesas que automatizem a conformidade com as diretrizes da empresa, como limites de gastos por categoria ou regras específicas para aprovação   | MÉDIA |
|RF-006| Gerar relatórios detalhados de despesas por funcionário, equipe ou período específico, exibindo informações como total gasto, categorias de despesas mais comuns, etc   | MÉDIA |
|RF-007| Implementar backups regulares e sistemas de recuperação de dados para evitar a perda de informações importantes   | MÉDIA |
|RF-008| Implementar medidas robustas de segurança e privacidade para proteger os dados sensíveis dos funcionários e da empresa durante todo o processo de prestação de contas   | MÉDIA |
|RF-009| Possuir suporte para converter despesas em diferentes moedas para a moeda padrão da empresa, com taxas de câmbio atualizadas   | MÉDIA |
|RF-010| Enviar notificações e lembretes automáticos para funcionários sobre despesas pendentes ou prazos de prestação de contas   | MÉDIA |
|RF-011| Processar automaticamente o reembolso das despesas aprovadas para os funcionários, integrando-se ao sistema de folha de pagamento ou realizando transferências diretas para as contas bancárias designadas   | BAIXA |
|RF-012| Categorizar automaticamente as despesas com base nas informações fornecidas ou por meio de reconhecimento de texto em comprovantes   | BAIXA |


### Requisitos não Funcionais 

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve funcionar em computadores e em dispositivos móveis | ALTA | 
|RNF-002| A aplicação deve possuir boa usabilidae para o usuário |  ALTA | 
|RNF-003| A aplicação Mobile deve funcionar no sistema Android|  MÉDIA | 
|RNF-004| A aplicação Web precisa funcionar nos Sistemas Operacionais Linux, Windows e macOS|  MÉDIA | 

## Restrições 

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre. |
|02| O software deve ser compatível com as versões mais recentes dos sistemas sistemas Android e IOS.       |
|03| A equipe de desenvolvimento não terá um orçamento para a implementação do projeto. |

# Catálogo de Serviços

Lista de Serviços mapeados para um MVP:

* Cadastro de usuários
* Edição de dados pessoais
* Cadastro de Notas Fiscais
* Histórico das Notas Fiscais cadastradas
* Atualização de dados nas Notas Fiscais Cadastradas
* Visão de Dados para o StakeHolder (Incerteza)

**Importante lembrar que esse é um levantamento inicial, podendo sofrer alterações.**

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Este é o fluxograma com as tarefas necessárias para a realilação do projeto:

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g5-projeto-dengue-prestacao-de-contas/assets/90010232/bf3f1789-28fc-4382-bff6-f948f1ee881b)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g5-projeto-dengue-prestacao-de-contas/assets/90010232/501997a6-6875-4fe0-a05c-8b77dd2b703b)

**Planejamento superficial, com o início da 2° etapa iremos expandir essa visão para todos os serviços e telas que devem ser desenvolvidos para melhor acompanhamento.**

Link para modelo Gantt do projeto: 
https://sgapucminasbr-my.sharepoint.com/:x:/g/personal/1304979_sga_pucminas_br/EcvZ9hZfJYBKq7cgNpZf-TABWSopGeqml9pebIShaMpG7w?e=jL8Ok2

## Gerenciamento de Equipe

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g5-projeto-dengue-prestacao-de-contas/assets/90010232/8eea1b6c-6e2d-4f76-8eeb-27113c67067c)



A partir da **2° etapa** cada integrante do grupo terá suas metas expecíficas que serão trackeadas a partir de nosso board.

# Arquitetura da Solução

![image](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe6-t1-g5-projeto-dengue-prestacao-de-contas/assets/90010232/ae292127-7318-4d69-8beb-68d7d961ee3f)

Processo de Comunicação entre os componentes:

 * O front end faz requisições HTTP ao back end para solicitar dados ou realizar operações.
 * O back end consome a API externa para obter dados adicionais, processa esses dados e os armazena no banco de dados.
 * O back end também fornece endpoints para o front end acessar os dados armazenados no banco de dados.
 * O frontend exibe os dados aos usuários e permite que eles interajam com a aplicação.

## Tecnologias Utilizadas

**Importante:** As escolhas podem sofrer possíveis alterações com o decorrer do projeto

IDE's de desenvolvimento:

* Visual Studio Code;
* Expo.

Será utilizado o Expo para o desenvolvimento da aplicação móvel, pois esta é uma solução que funciona via Web e não requer uma máquina com grande poder de processamento.

Na arquitetura Front-End, essas serão as tecnologias utilizadas:

* HTML5;
* CSS;
* JavaScript;
* BootStrap5 (incerteza).

Na arquitetura Back-End, as tecnologias utilizadas serão: 

* Python;
* SQL;

Para a API, as tecnologias utilizadas foram:

* Python;
* Lib: **reportlab**, usada para a criação de arquivos PDF a partir de uma imagem;
* SQL.

Banco de dados:

* MySQL.

Dentro da Aplicação Mobile, nós usaremos as seguintes soluções:

* React-Native;
* Biblioteca de Design React Native Paper.


Nós utilizaremos a linguagem de programação React-Native, pois esta é uma linguagem que podemos utilizar em ambientes IOS e Android. Conforme o Portal Statista, esses sistemas operacionais são os mais utilizados no mundo.

Fonte: ALMENARA, Igor. **Qual o sistema operacional de celular mais usado do mundo?**. 2022. Disponível em: <https://canaltech.com.br/software/qual-o-sistema-operacional-de-celular-mais-usado-do-mundo-223862/> Acesso em: 14 mar. 2024.

## Hospedagem

Em primeiro momento, o projeto será hospedado de forma local, e assim que a aplicação estiver funcional, será escolhido um serviço para manter o projeto  ativo, como por exemplo o Heroku ou Hostinger.
