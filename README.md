# PlantCareful 🌱
Um app para você cuidar da sua platinha, além do mais a Terra está precisando dela...

### 🚧 Em Desenvolvimento 

### 📖 Descrição
Um app desenvolvido especialmente para você que com um pouco de cuidado pode ajudar o planeta terra com uma plantinha, com o auxilio do app para se atentar ainda mais e não esquecer de cuidar do que pode cuidar do mundo.

### 🚀 Funcionalidades Implementadas

#### Usuários
- **Cadastro de usuários**: criação de conta com validação de dados.
- **Login**: autenticação usando email e senha.

#### Autenticação
- **JWT** para controle de sessões.
- **Proteção de rotas** por nível de acesso.

#### Plantas 
- **Cadastro de plantas**: criação da planta para fazer o monitoramento e os cuidados.
- **CRUD**: Implementado as operações básicas.

### 🛠️ Tecnologias Utilizadas
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

### 📂 Estrutura de Pastas
```text
backend/
|-src/
| L index.ts
| |-app/
| | |-@types/
| | |-controllers/
| | |-database/
| | |-middlewares/
| | |-routes/
| | |-schemas/
| | |-services
| | L index.ts
```

### ⚙️ Instalação e Execução

```bash
// Instalar o projeto na sua máquina
git clone https://github.com/vicentejuniordev/PlantCareful.git
cd PlantCareful

// Rodar o backend
cd backend
npm start
```
### 🔑 Configurações
```bash
PORT=
JWT_SECRET=
JWT_EXPIRES=
JWT_REFRESH_EXPIRES=
JWT_REFRESH_SECRET=
```
### 👤 Autor
##### Vicente Junior 😼