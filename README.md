# Avaliação Sprint 2

## Equipe 5

## API - Utilizada
- [Rest Countries API](https://restcountries.com/)
## Preview
![7sen5a](https://github.com/JosueFernandes7/FlappyBird_JS/assets/99553096/4ee068c4-1fb0-4c90-bf13-244d07efe087)
## Objetivo

Criar um sistema de pesquisa de **países**, o qual fornece informações iniciais, como **nome**, **bandeira** e **população**, podendo gerar ao usuário interesse para que ele interaja com a **interface visual** e obtenha mais informações específicas sobre o país selecionado.

## Desenvolvimento
Na página inicial do sistema o usuário visualiza diversos cards com informações básicas sobre cada país, cada card é gerado dinamicamente após a realização da consulta à API utilizada como base para o projeto. Ao selecionar determinado país, será passado o parâmetro para o **backend**, que ficará responsável por realizar a consulta detalhada do referido país e encaminhar as informações para a página `Country`, responsável por mostrar as informações ao usuário. 


Tecnologia| Setor |
|----------|-------|
|Express   | **backend**|
|Express-handlebars   | **backend**|
|Node-fetch   | **backend**|
|Bootstrap| **frontend**|
|CSS| **frontend**|
|Html| **frontend**|
|Javascript| **frontend**|

## Estrutura de pastas
- **src**
  - `app.js`
  - **public**
    - **css**
    - **img**
    - **js**
  - **routes**
  - **views**
    - **layouts**

## Dificuldades conhecidas
1. Configuração no handlebars para as rotas `Home` e `Country`.
2. Configuração de redirecionamento de rota `Page not Found`.
3. Requisição da API pelo `params.id` da rota `Country`.


## Requisitos
Para utilizar o sistema de pesquisa de países, instale o 
[Git](https://git-scm.com/) e o [Node](https://nodejs.org/en/download).

## Instalação
```bash
  git clone https://github.com/Compass-pb-aws-2023-FURG-IFRS-UFFS/sprint-2-pb-aws-furg-ifrs-uffs.git
  cd sprint-2-pb-aws-furg-ifrs-uffs/
  git checkout equipe-5
  cd src/
  npm install 
  npm run start
````