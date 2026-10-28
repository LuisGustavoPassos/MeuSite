# Contexto do portfólio — Luis Gustavo dos Passos

Este documento é a fonte de contexto para construir o portfólio no repositório aberto no VS Code. Ele consolida as decisões já tomadas nesta conversa e os fatos que vieram do README do GitHub do Luis. Use-o como orientação para as próximas etapas.

## Objetivo

Construir do zero um portfólio pessoal de Engenharia de Software, com apresentação, experiência, links profissionais, projetos e contato. O site deve ter versões em português e inglês e oferecer tema claro e escuro.

## Perfil profissional fornecido

Luis Gustavo dos Passos é estudante de Engenharia de Software no 7º período e atua como desenvolvedor fullstack.

Resumo profissional do README:

> Engenheiro de Software em formação (7º período) com atuação Fullstack no ecossistema .NET (C#, ASP.NET Core) e TypeScript (React). Experiência prática na arquitetura, planejamento e refatoração de plataformas legadas para soluções modulares e escaláveis. Foco em design de sistemas, modelagem de banco de dados relacional e criação de componentes reutilizáveis para otimização do ciclo de desenvolvimento.

### Tecnologias declaradas no README

- **Frontend:** HTML5, CSS3, JavaScript, TypeScript, React, Tailwind CSS, Vite.
- **Backend e frameworks:** C#, .NET Core, ASP.NET Core, Node.js.
- **Bancos de dados:** PostgreSQL, MySQL, SQL Server.
- **Ferramentas:** Git, GitHub, Visual Studio, VS Code.

Use essas informações como conteúdo de partida. Não converta uma tecnologia em experiência profissional comprovada além do que o README afirma.

## Direção de design aprovada

- O portfólio será inspirado na estrutura da referência [wojtek.im](https://wojtek.im/), sem tentar copiar detalhes visuais que não foram confirmados.
- A paleta escolhida é a da imagem enviada pelo usuário:
  - **Navy:** `#2F4156`
  - **Teal:** `#567C8D`
  - **Sky Blue:** `#C8D9E6`
  - **Beige:** `#F5EFEB`
  - **White:** `#FFFFFF`
- **Space Grotesk** é a tipografia aprovada para o site.
- IBM Plex Sans + IBM Plex Mono e Lora foram opções de comparação. Não são a escolha aprovada para a versão final, mas o seletor delas pode permanecer na prancha de demonstração.
- O site deve oferecer alternância entre tema claro e tema escuro, e entre português e inglês.
- A prancha criada em `outputs/design-system.html` é uma demonstração do sistema visual, não o site final.
- O site criado antes da decisão desta direção foi descartado como base de implementação. Começar o site final do zero usando este documento.

### Papéis de cor acordados

| Papel | Tema claro | Tema escuro |
|---|---|---|
| Fundo da página | Beige `#F5EFEB` | Navy `#2F4156` |
| Superfície/cartão | White `#FFFFFF` | Teal `#567C8D` |
| Texto principal | Navy `#2F4156` | White `#FFFFFF` |
| Texto secundário | Teal `#567C8D` | Sky Blue `#C8D9E6` |
| Realce | Teal `#567C8D` | Beige `#F5EFEB` |
| Superfície suave | Sky Blue `#C8D9E6` | Teal `#567C8D` |

## Estrutura aprovada

Seguir as seções úteis da referência, omitindo artigos e newsletter conforme decisão do usuário:

1. **Apresentação** — nome, resumo curto e contexto atual.
2. **Experiência** — histórico profissional, quando os dados forem fornecidos.
3. **Elsewhere / outros canais** — links para perfis profissionais externos.
4. **Projetos** — projetos selecionados, com contexto e links conforme os dados disponíveis.
5. **Contato** — e-mail ou outro meio direto definido pelo usuário.

Não criar seções de artigos/journal nem newsletter.

### O que colocar em “Elsewhere”

Usar somente perfis profissionais reais e ativos do Luis, por exemplo GitHub e LinkedIn, caso ele forneça/ confirme esses links. Cada item pode conter o nome da plataforma e a URL. Não é necessário adicionar redes que ele não usa. O e-mail deve ficar em Contato, não em Elsewhere.

## Requisitos funcionais

- Disponibilizar o conteúdo em português e inglês.
- Disponibilizar tema claro e escuro usando a paleta aprovada.
- Usar Space Grotesk na versão final.
- Manter responsividade para telas menores como requisito de implementação; definir os detalhes visuais durante a construção.
- Não inventar fatos biográficos, empregadores, cargos, resultados, métricas, nomes de projetos, depoimentos ou links.
- Não preencher com texto fictício. Se uma informação necessária estiver ausente, perguntar ao usuário ou deixar o espaço claramente pendente.

## Informações ainda necessárias para preencher o site

- URL do GitHub e URL do LinkedIn (se quiser exibi-los).
- Histórico de experiência: empresa, cargo, período e descrição que possa ser publicada.
- Projetos: nome, problema/objetivo, contribuição pessoal, tecnologias, links e resultados que possam ser comprovados.
- E-mail ou outro canal de contato público.
- Traduções para inglês dos textos finais; podem ser preparadas quando o usuário aprovar os textos em português.

## Tecnologias de implementação

Ainda não foi escolhida uma stack para construir o site. Não assumir React, Vite, Tailwind ou outro framework com base apenas no README pessoal. Confirmar ou propor opções quando essa etapa começar. O README descreve tecnologias do perfil, não uma decisão técnica para o portfólio.

## Limite conhecido da referência

O conteúdo textual de wojtek.im foi consultado, mas o acesso visual ao site encontrou uma verificação de segurança. Portanto, este portfólio deve seguir a estrutura de conteúdo aprovada e as escolhas visuais explícitas do usuário; não afirmar correspondência exata com fontes, grid, espaçamentos ou animações da referência.
