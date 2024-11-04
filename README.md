# Random Quote Machine

Este projeto é uma máquina de citação aleatória desenvolvida com React, seguindo as especificações de funcionalidade e design fornecidas pela freeCodeCamp. A aplicação busca citações aleatórias e permite que o usuário compartilhe a citação atual no Twitter.

## Índice

- [Demo](#demo)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Instruções para Rodar o Projeto](#instruções-para-rodar-o-projeto)
- [User Stories](#user-stories)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Demo

Você pode acessar o projeto funcionando no CodePen [aqui](https://random-quote-machine.freecodecamp.rocks/).

## Tecnologias

- React
- JavaScript
- CSS
- HTML
- API pública de citações
- (Opcional) Bootstrap ou SASS para estilo adicional

## Funcionalidades

- Exibir uma citação aleatória ao carregar a página.
- Botão "Nova Citação" para buscar e exibir outra citação aleatória.
- Exibir o autor da citação.
- Botão de compartilhamento no Twitter para tweetar a citação atual.
- Estilização personalizada com CSS.

## Instruções para Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/random-quote-machine.git
   cd random-quote-machine
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

4. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).

## User Stories

1. Eu consigo ver um elemento wrapper com o id `quote-box`.
2. Dentro de `#quote-box`, há um elemento `#text` que exibe a citação.
3. Dentro de `#quote-box`, há um elemento `#author` que exibe o autor.
4. Dentro de `#quote-box`, há um botão `#new-quote` para gerar uma nova citação.
5. Um botão `#tweet-quote` permite compartilhar a citação no Twitter.
6. Ao carregar a página, uma citação aleatória é exibida.
7. Clicar em `#new-quote` exibe uma nova citação e autor.
8. O botão `#tweet-quote` leva à página do Twitter com a citação atual.
9. O elemento `#quote-box` é centralizado horizontalmente.

## Contribuição

Contribuições são bem-vindas! Para contribuir, faça um fork do repositório, crie uma branch para suas alterações, e envie um pull request.
