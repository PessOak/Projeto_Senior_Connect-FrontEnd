# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

- Site publicado na internet;
- Navegador da internet: Chrome, Firefox ou Edge.

Os testes funcionais a serem realizados na aplicação são descritos a seguir.
|Caso de Teste    | CT-01 - Verificar links e formulário da Homepage |
|:---|:---|
| Requisitos Associados | RF-02 e RF-11|
| Objetivo do Teste | Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente e se o formulário de contato está corretamente configurado |
| Passos | 1- Acessar o navegador / 2- Informar o endereço do site / 3- Visualizar a Homepage / 4- Clicar em todos links da Homepage / 5- Verificar se os campos do formulário estão corretamente configurados |
| Critérios de êxito | Todos os links da página Home devem encaminhar os usuários para alguma das sessões do site e o formulário de contato deve estar funcionando.  |
| Responsável pelo caso de Teste | Rafael |

|Caso de Teste    | CT-02 - Verificar login e cadastro |
|:---|:---|
| Requisitos Associados | RF-01 e RF-03|
| Objetivo do Teste | Verificar se o login e cadastro estão funcionando corretamente |
| Passos | 1- Acessar o navegador / 2- Informar o endereço do site / 3- Clicar em "Entrar" na barra de navegação / 4- Preencher dados de cadastro e login / 5- Verificar se os campos do formulário estão corretamente configurados / 6- Cadastrar e fazer o login / 7- Ser direcionado para a Página de Perfil|
| Critérios de êxito | Após o cadastro o usuário deve ser direcionado para a aba de login e após o login ser direcionado para a página de perfil. Obs.: as informações devem ficar registradas no Local Storage. |
| Responsável pelo caso de Teste | Rafael |
 
|Caso de Teste    | CT-03 - Verificar página de perfil e funcionalidade do botão de logout |
|:---|:---|
| Requisitos Associados | RF-04|
| Objetivo do Teste | Verificar se os links da página de perfil e o botão de logout estão funcionando corretamente e se os dados do usuário estão corretos. |
| Passos | 1- Acessar o navegador / 2- Informar o endereço do site / 3- Verificar se dados do usuário na página de perfil estão corretos / 4- Verificar se links na barra de navegação estão funcionando / 5- Retornar à página de perfil / 6- Pressionar o botão de logout / 7- Ser redirecionado para página de login e cadastro.|
| Critérios de êxito | Links devem estar funcionando e após o logout o usuario deve ser redirecionado para página de login e cadastro Obs.: informações do usuário logado devem ter desaparecido do local storage. |
| Responsável pelo caso de Teste | Rafael |

|Caso de teste	|  CT-04 - Verificar página de cursos |
|:---|:---|
|Requisitos Associados |RF-07
|Objetivo do Teste	| Verifique se os links dos cursos estão encaminhando para as respectivas páginas corretamente e se o formulário de contato está configurado corretamente |
| Passos	| 1- Acessar o navegador / 2- Informar o endereço do site / 3- Visualizar a Pagína de cursos/ 4- Clicar em todos os links da Pagína de cursos / 5- Verificar se os campos do formulário estão configurados corretamente |
| Critérios de sucesso | 	Todos os botoes da pagína de cursos devem encaminhar os usuários para algumas sessões de estudo especificas. | 
| Responsável pelo caso de teste	| Arthur |

|Caso de teste	|  CT-05 - Verificar página de cursos |
|:---|:---|
|Requisitos Associados |RF- 08
|Objetivo do Teste	| O sistema deve oferecer a possibilidade de integração com redes sociais, permitindo que os usuários compartilhem seu progresso, realizações ou atividades da plataforma em suas redes. |
| Passos	| 1- Acessar o navegador / 2- Informar o endereço do site / 3- Visualizar a Pagína de comunidade/ 4- Fazer postagens e interagir com outros usuarios  / 5- Verificar se os campos do formulário estão configurados corretamente |
| Critérios de sucesso | 	Interacões entre os usuarios nos campos de Conteúdo da Postagem | 
| Responsável pelo caso de teste	| Arthur |

|Caso de teste	|  CT-06 - Verificar página de comunidade |
|:---|:---|
|Requisitos Associados |RF- 08
|Objetivo do Teste	| O sistema deve oferecer a comunicação dos alunos atraves de comentarios na pagina comunidade, permitindo que os usuários compartilhem seus depoimentos ou quaisquer coentarios de interação. |
| Passos	| 1- Acessar o navegador / 2- Informar o endereço do site / 3- Visualizar a Pagína de comunidade/ 4- Fazer postagens e interagir com outros usuarios.
| Critérios de sucesso | 	Interacões entre os usuarios nos campos de Conteúdo da Postagem | 
| Responsável pelo caso de teste	| Barbara |

|Caso de teste	|  CT-07- Verificar página desafio|
|:---|:---|
|Requisitos Associados |RF- 08
|Objetivo do Teste	| O sistema deve oferecer a possibilidade de interação com jogos que o proprio site oferece.
| Passos	| 1- Acessar o navegador / 2- Informar o endereço do site / 3- Visualizar a Pagína de desafios/ 4- Escolher o jogo. / 5- Usuário ser capaz de entender os desafios e fazer pontos corretamente.
| Critérios de sucesso | 	Interacões do usuário com os desafios facilitado | 
| Responsável pelo caso de teste	| Hideki|

|Caso de teste	|  CT-08- Verificar página Tecnologia|
|:---|:---|
|Requisitos Associados |RF- 08
|Objetivo do Teste	| O sistema deve oferecer a possibilidade de interação com os botões e redirecionamento de novas abas com o conteúdo desejado.
| Passos	| 1- Acessar o navegador / 2- Informar o endereço do site / 3- Visualizar a Pagína de Tecnologia/ 4- Escolher o assunto. / 5- Abrir nova aba com o conteúdo desejado.
| Critérios de sucesso | 	Interacões com os botões sem fechar o site principal | 
| Responsável pelo caso de teste	| Hideki|