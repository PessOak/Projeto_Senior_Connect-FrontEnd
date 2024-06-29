# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01 - Idosos </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Célia, aposentada</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  
  - Interface simplificada;
  
  - Conteúdo relevante como notícias, artigos de interesse, histórias inspiradoras, dicas de saúde, bem-estar e finanças;

  - Saúde emocional;

  - Interação social;

  - Recursos de áudio e multimídia;

  - Entretenimento
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 02 - Cuidador de Idosos </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Carlos, cuidador de idosos</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  
  - Controle dos conteúdos acessados pelos seus pacientes;
  
  - Informações sobre cuidados paliativos e fim de vida;

  - Informações sobre saúde mental;

  - Atividades que estimulem os idosos, sejam elas físicas, cognitivas, sociais ou recreativas.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 03 - Parentes de idosos </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Leonardo, neto de Laura</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  
  - Ter controle sobre os conteúdos acessados pelo idoso;
  
  - Informações sobre cuidados paliativos e fim de vida;
  
  - Informações sobre saúde mental;
  
  - Atividades que estimulem os idosos, sejam elas físicas, cognitivas, sociais ou recreativas.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 04 - Terapêutas </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pedro, psicólogo</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
  
  - Informações sobre cuidados paliativos e de fim de vida;

  - Informações sobre saúde mental;
  
  - Atividades que estimulem os idosos, sejam elas físicas, cognitivas, sociais ou recreativas.
</td>
</tr>
</tbody>
</table>

## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Idosa              | Desejo me cadastrar em cursos e conteúdos educacionais.| Quero aprender novas habilidades e manter a mente ativa durante a aposentadoria.|
| Idoso              | Estou em busca de cursos em sites de fácil navegação.| Tenho interesse em aprender mais sobre eventos históricos e quero encontrar facilmente cursos relevantes.|
| Idosa              | Estou interessada em notícias e atualidades.| Quero ficar atualizada sobre eventos e notícias locais que afetam minha comunidade.|
| Idoso              | Desejo interagir em um fórum de discussões.| Quero compartilhar minhas experiências e aprender com outros membros da comunidade.|
| Idoso              | Quero acessar vídeos educacionais.| Prefiro aprender através de vídeos e quero acessar conteúdo em um formato visualmente envolvente.| 
| Idosa              | Quero fazer atividades desafiadoras e interativas na internet.| Gostaria de participar de atividades interativas que me desafiem cognitivamente e tornam o aprendizado mais divertido.|
| Idoso              | Quero utilizar uma barra de pesquisas para encontrar um conteúdo específico nos sites.| Sei exatamente o que estou procurando e quero acessar o conteúdo rapidamente.|
| Parente de idoso   | Quero um site onde possa encontrar notícias confiáveis e boas orientações para evitar golpes via internet e celular e recomendar para minha avó.| Minha avó caiu em diversos golpes envolvendo celular e e-mails enganosos no último ano.|
| Parente de idoso   | Quero um aplicativo que forneça informação simplificada e de qualidade sobre novas tecnologias para indicar ao meu avô.| Meu avô tem muita resistência às novas tecnologias e não se sente confiante para aprender mais sobre elas.|
| Cuidadora de idosos| Quero um site onde possa encontrar orientações sobre assuntos voltados para idosos.| Quero recomendar boas atividades online para os idosos ocuparem o tempo de forma construtiva.|
| Terapeuta          | Busco um site interativo e fácil de usar com atividades para melhorar o bem estar emocional e cognitivo dos meus pacientes idosos.| A maioria dos meus pacientes são idosos e têm dificuldade de lidar com tecnologias.|

## Requisitos do Projeto

### Requisitos Funcionais


|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF_01 | O sistema deve permitir ao usuário cadastrar uma conta fornecendo informações básicas como nome, e-mail de acesso e senha.| **Alta** | 
| RF-02 | O sistema deve possuir uma funcionalidade de pesquisa para permitir ao usuário localizar com facilidade as sessões da aplicação. | **Alta**   |
| RF-03  | O sistema deve permitir ao usuário fazer o login em sua conta. | **Alta** | 
| RF-04  | O sistema deve permitir ao usuário fazer o logout de sua conta. | **Alta** | 
| RF-05  | O sistema deve permitir ao usuário alterações no seu cadastro. | **Média** |
| RF-06  | A aplicação deve ter uma sessão de Tecnologia intuitiva e de fácil navegação. | **Média** |
| RF-07  | O site deve ter uma funcionalidade que permita a interação entre os usuários da plataforma | **Média** |
| RF-08  | Os usuários devem poder encontrar uma lista de cursos disponíveis sobre diversos temas.   | **Média** |
| RF-09  | Os usuários devem ter à sua disposição uma página de Notícias recentes e atualizadas com informações de fontes confiáveis.   | **Média** |
| RF-10  | A plataforma deve ter uma página com desafios para entreter e auxiliar na manutenção da saúde mental de seus usuários.   | **Média** |
| RF-11  | A plataforma deve oferecer aos usuários uma forma de contato direto com a equipe através de algum formulário.  | **Média** |
| RF-12  | O sistema deve oferecer a possibilidade de integração com redes sociais, permitindo que os usuários compartilhem seu progresso, realizações ou atividades da plataforma em suas redes.  | **Baixa** |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF_01 | O sistema deve ser compatível com os sistemas: Microsoft Windows, Android, IOS, Linux e Apple macOS. | **Alta**    | 
| RNF-02 | O sistema deve ser compatível com os principais navegadores de internet: Google Chrome, Mozilla Firefox e Microsoft Edge.   | **Alta** | 
| RNF-03 | O sistema deve permitir ao usuário completar uma tarefa de cadastro de cliente em até 2 minutos.      | **Alta** |
| RNF-04 | A página principal deve carregar em até 5 segundos.     | **Média** |
| RNF-05 | O sistema deve ser eficiente em termos de consumo de recursos computacionais, como CPU, memória e largura de banda de rede.  | **Média** |
| RNF-06 | O sistema deve oferecer uma navegação clara e intuitiva, com um menu principal visível em todas as páginas permitindo acesso fácil à todas as sessões da aplicação. | **Média** |
| RNF-07 | O sistema deve garantir a segurança dos dados dos usuários com medidas de criptografia de dados e proteção contra ataques de segurança.  | **Média** |
| RNF-08 | O sistema pode oferecer suporte a múltiplos idiomas, permitindo que os usuários escolham seu idioma preferido para interagir com a plataforma.  | **Baixa** |

**Prioridade: Alta / Média / Baixa. 

