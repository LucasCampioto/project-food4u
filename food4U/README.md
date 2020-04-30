# Food4U

## Stack
Esse é um projeto de Backend feito utilizando NodeJS, Express, Typescript e MySQL. Além disso, ele segue uma arquitetura em camadas simples:
1. Presentation: responsável pela comunicação com agentes externos (como o Frontend)
1. Data: responsável pela comunicação direta com o banco de dados
1. Business: responsável pela lógica de negócio
Por fim, ressalta-se que a comunicação da camada `Data` e a `Business` é feita através de interfaces denominadas `Gateway`, para possibilitar os testes unitários desta última camada (inversão de dependências)

## Sobre
Esse é um projeto que simula uma rede social. Nele você pode criar um novo usuário, efetuar login e seguir um novo usuário. Além disso você pode criar novas receitas que seram exebidas em um feed para os usuários que te seguem.

## Instruções para rodar
As instruções são:
1. `npm install` para instalar todas as dependências;
1. `npm run start` para rodar localmente o projeto
1. `npm run build` para gerar uma versão possível de ser deployada com os arquivos transpilados para Javascript

## Contato (opcional)
Lucas Campioto Constantino
l_campioto@hotmail.com
(011) 94783-7190