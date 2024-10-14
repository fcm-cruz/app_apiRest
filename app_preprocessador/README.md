# Aplicação de Gerenciamento de Promoções

Este projeto é uma aplicação de gerenciamento de promoções que utiliza Express.js no backend e SASS para o gerenciamento de estilos. O Gulp é usado para automatizar tarefas, como a compilação do SASS e a atualização automática de CSS.

## Como Executar

Siga os passos abaixo para instalar as dependências e iniciar os serviços da aplicação.

### 1. Instalar Dependências
No terminal, execute o seguinte comando para instalar todas as dependências necessárias:

npm install

###2. Iniciar o Servidor Express
Para iniciar o servidor Express na porta 4000 e monitorar automaticamente os serviços:

nodemon server.js

### 3. Executar o Gulp

Para iniciar o Gulp e monitorar as alterações nos arquivos SASS e compilar o CSS automaticamente:

gulp

O Gulp ficará monitorando e atualizando o CSS gerado a partir dos arquivos SASS sempre que houver modificações.

### Tecnologias Utilizadas

    - Node.js e Express.js para o backend.
    - Nodemon para reiniciar automaticamente o servidor durante o desenvolvimento.
    - Gulp para automatizar tarefas de desenvolvimento, como a compilação de SASS.
    - SASS para a criação e gerenciamento de estilos CSS.

Certifique-se de ter o Node.js instalado para rodar a aplicação corretamente.


