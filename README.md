# Chat Online

Este é um projeto de chat online simples que permite aos usuários se conectarem e trocarem mensagens em tempo real. Ele consiste em um frontend construído com HTML, CSS e JavaScript, e um backend em Node.js utilizando WebSockets. A aplicação foi implantada e está disponível para demonstração.

## Funcionalidades

- Login: Os usuários podem entrar com um nome para se identificar no chat.

- Mensagens em Tempo Real: Envio e recebimento de mensagens instantâneas entre usuários conectados.

- Identificação de Usuário: Cada mensagem mostra o nome do usuário e uma cor aleatória atribuída a ele para facilitar a identificação visual.

## Tecnologias Utilizadas
### Frontend
- HTML5
- CSS3
- JavaScript
- WebSocket para comunicação em tempo real

### Backend
- Node.js
- WebSocketServer
- Dotenv para configuração de variáveis de ambiente


chat-online/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   └── 1download.png
├── .env
├── package.json
├── server.js
└── index.html

## Arquivos Principais

### index.html
Este arquivo contém a estrutura básica do frontend, incluindo os elementos de login e chat.

### css/style.css
Este arquivo contém o estilo do frontend, incluindo a aparência do formulário de login e da interface de chat.

### js/script.js
Este arquivo contém a lógica do frontend, incluindo a manipulação do formulário de login, a conexão WebSocket e a exibição das mensagens.

### server.js
Este arquivo contém o código do backend, responsável por gerenciar as conexões WebSocket e retransmitir as mensagens para todos os clientes conectados.

## Instalação e Execução
### Pré-requisitos
- Node.js instalado

  ## Passos

- Clone o repositório:

 git clone https://github.com/KaueMtaheus/chat-online.git

- Navegue até o diretório do projeto:

 cd chat-online

- Instale as dependências:

 npm install

- Crie um arquivo .env na raiz do projeto e defina a porta (opcional):

 PORT=4000

- Inicie o servidor:

 node server.js

Abra o arquivo index.html no seu navegador para visualizar o frontend.

## Contribuição

- Faça um fork do projeto.
- Crie uma nova branch (git checkout -b feature/nova-feature).
- Commit suas mudanças (git commit -m 'Adiciona nova feature').
- Faça um push para a branch (git push origin feature/nova-feature).
- Abra um Pull Request.

Este README fornece uma visão geral do projeto de Chat Online, explicando suas funcionalidades, tecnologias utilizadas, estrutura do projeto, instruções de instalação e contribuição. Sinta-se à vontade para explorar, contribuir e entrar em contato se tiver alguma dúvida ou sugestão.
