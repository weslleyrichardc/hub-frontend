# Hub Frontend

Frontend do projeto **Hub**, responsável por exibir informações agregadas de diferentes plataformas, como músicas, filmes e outros tipos de mídia.

Ele se conecta à API do backend para apresentar dados unificados e personalizados para cada usuário.

## Visão Geral
O Hub Frontend é desenvolvido com **Angular**, comunicando-se com o **Hub Backend** via API REST.

O objetivo é permitir que os usuários acessem seus agregadores (Spotify, YouTube Music, TMDb, etc.) e visualizem listas unificadas, como:
- Músicas salvas ou ouvidas recentemente
- Filmes assistidos e sugestões para assistir
- Itens agregados de outras fontes futuras (livros, séries, etc.)

## Tecnologias Principais
- **Angular 20**
- **TypeScript**
- **TailwindCSS**

## Instalação e Execução
```bash
# Clone o repositório
git clone https://github.com/weslleyrichardc/hub-frontend.git
cd hub-frontend

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run start

# Acesse em
http://localhost:4200
```

## Autenticação
O frontend utiliza autenticação via **Bearer Token** (Sanctum) obtido no backend. Após o login, o token é armazenado localmente e usado nas requisições subsequentes.


## Roadmap
- [x] Estrutura inicial do projeto Angular
- [x] Integração com o backend para login e registro
- [ ] Implementar listagens de mídia agregada
- [ ] Criar sistema de filtros e recomendações
- [ ] Adicionar suporte a múltiplos agregadores (Spotify, TMDb, etc.)
- [ ] Tema escuro e responsividade total
