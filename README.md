# Sistema de Cadastro de Clientes para Teste Prático

Esse projeto foi feito para a realização do teste prático para estágio em desenvolvimento web da NewM.
Ele consiste em uma aplicação web completa incluindo frontend, backend e banco de dados, foi feita utilizando **HTML, CSS e Javascript** para o frontend como solicitado, além do framework **React** e **Bootstrap 5**. para o backend foi utilizado **PHP com PDO** para a comunicação com o banco de dados em **MySQL**.

O projeto possui adição, remoção, atualização e listagem de cadastros, além de pesquisa através de um filtro textural nos campos nome e e-mail.
Como solicitado para o teste:
- Banco de dados feito a mão e não gerado pela IDE.
- Todas as ações são feitas exclusivamente por AJAX(no caso fetch, visto que usei React e não jQuery).
- PHP totalmente separado do frontend, sem manipulação de interface.
- Manipulação de bancos de dados feita puramente por PDO e SQL.
- Código comentado onde necessário.

## Como iniciar o projeto
O projeto utiliza Xampp para rodar um servidor local e o banco de dados MySQL, por isso é necessário instalá-lo primeiro, seguiremos os passos:
1) Instalar o Xampp através de https://www.apachefriends.org/download.html
2) Instalar o Backend em php, para isso é necessário ir na pasta base do Xampp, localizava em C:\xampp, remover tudo que estiver dentro da pasta "htdocs" e colocar lá os arquivos que estão localizados na pasta Backend, no final você deve ter o arquivo index.php dentro da pasta htdocs
3) Configurar a database, para isso é preciso abrir o Xampp Control Panel e inicializar os módulos Apache e MySQL, depois abrir o painel Admin
4) Com o phpMyAdmin aberto, crie um banco de dados novo chamado "cadastros", para isso vá em Novo no menu esquerdo da tela, e depois coloque "cadastros" no campo **Nome do banco de dados** e clique em criar
5) Após isso selecione o banco de dados recem criado e vá em "Importar" no canto superior da tela, clique em selecionar arquivo, selecione o arquivo "cadastros.sql" dentro da pasta Database do projeto e depois clique em **Importar** no canto inferior da tela para importar todas as tabelas.
6) Com isso o Backend e a Database já estão perfeitamente configurados, para iniciar o frontend certifique-se de ter o Node Package Manager instalado na sua máquina, abra a pasta "Frontend" com Visual Studio Code e abre o terminal com ela aberta, ou abra um terminal diretamente dentro da pasta.
7) Com o terminal aberto primeiro execute o comando "npm update" para baixar todos os pacotes necessários para rodar a aplicação
8) Após isso rode "npm start" e a aplicação irá abrir automaticamente no seu navegador, também podendo ser acessada em http://localhost:3000/
