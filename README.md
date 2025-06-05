## 📘 **Documentação do App — “Tá Seguro”**

### 🧭 Objetivo

A aplicação **Tá Seguro** é uma plataforma mobile que oferece **informações e recursos de segurança em situações de risco**, como enchentes, golpes e desastres naturais. Com um foco social, educativo e sustentável, o app promove **conscientização, prevenção e doações seguras**.

---

## 🧱 Estrutura do Projeto

### 📁 Backend (API Node.js + MongoDB)

* **Linguagem:** TypeScript (Node.js)
* **Framework:** Express
* **Banco de dados:** MongoDB Atlas
* **Bibliotecas auxiliares:** `uuid`, `milliparsec`, `dotenv`, `cors`

### 📁 Frontend (React Native + Expo)

* **Framework:** Expo Router com navegação por tabs
* **Gerenciamento de estado:** React Context (AuthContext)
* **Vídeo:** expo-av
* **Estilo:** StyleSheet (React Native puro)
* **Componentes reutilizáveis:** `AppHeader`, `LabeledInput`, `ThemedText`

---

## 🔐 Autenticação

* O app utiliza **login via e-mail e senha**, com controle de sessão por contexto.
* Após o login, o usuário é redirecionado automaticamente para a navegação por abas (`(tabs)`).
* Telas como login e splash são acessíveis apenas quando o usuário não está autenticado.

---

## ⚙️ Rotas da API

Base URL: `https://ta-seguro-back.vercel.app`

### `GET /`

* ✅ Health check
* **Resposta:** `{ message: "ta funcionando ʕ·͡ᴥ·ʔ" }`

### `GET /users`

* Lista todos os usuários cadastrados (com senha omitida)
* **Resposta:**

```json
[
  {
    "id": "uuid",
    "nome": "Fulano",
    "email": "fulano@email.com",
    "phone": "1199999999"
  }
]
```

### `POST /users`

* Cria uma nova conta de usuário
* **Body esperado:**

```json
{
  "nome": "Fulano",
  "email": "fulano@email.com",
  "phone": "1199999999",
  "password": "123456"
}
```

* Se o e-mail já estiver em uso, retorna 400.

### `POST /login`

* Autentica o usuário com e-mail e senha
* **Body esperado:**

```json
{
  "email": "fulano@email.com",
  "password": "123456"
}
```

* Sucesso retorna os dados do usuário (sem senha)
* Erro retorna mensagem: `"Usuário ou senha incorretos."`

---

## 🧑‍💻 Funcionalidades do App

### ✅ SplashScreen

* Exibida ao abrir o app com logotipo da plataforma.

### ✅ Login

* Acesso por e-mail e senha.
* Link para registro de novo usuário.
* Botão “Esqueceu a senha” (ainda não funcional).

### ✅ Registro

* Formulário com campos: nome, telefone, e-mail e senha.

### ✅ Navegação por Abas

* **Início**: Cards informativos com dicas e vídeos.
* **Hospitais**: (a implementar)
* **Doações**: Dicas sobre segurança em doações.
* **Menu**: (a implementar)

### ✅ Páginas Especiais

* `/dicas/enchente`: vídeo educativo com som habilitado mesmo no modo silencioso.
* `/dicas/golpes`: orientações para evitar fraudes em doações.

---

## 🎨 Design e Componentes

* **`AppHeader`**: Cabeçalho fixo com logo e avatar do usuário.
* **`LabeledInput`**: Campo com label estilizado e ícone opcional.
* **`ThemedText`**: Componente de texto com peso e cor customizáveis.
* **`TabIcon`**: Ícone, texto e indicador de foco personalizado nas abas.

---

## 🌱 Sustentabilidade

O app contribui diretamente para os **Objetivos de Desenvolvimento Sustentável (ODS)**:

* **ODS 11** – Cidades e comunidades sustentáveis: instruções de segurança urbana.
* **ODS 13** – Ação contra a mudança global do clima: foco em enchentes e educação.
* **ODS 16** – Paz, justiça e instituições eficazes: combate à fraude por meio de informação confiável.

---

## 📂 Estrutura de Pastas (Frontend)

```
app/
├── (tabs)/
│   ├── index.tsx
│   ├── hospitais.tsx
│   ├── doacoes.tsx
│   ├── menu.tsx
│   └── dicas/
│       ├── enchente.tsx
│       └── golpes.tsx
├── login.tsx
├── register.tsx
├── index.tsx
├── +not-found.tsx
components/
├── ui/
│   ├── AppHeader.tsx
│   ├── LabeledInput.tsx
│   └── ThemedText.tsx
context/
├── AuthContext.tsx
assets/
├── images/
├── videos/
hooks/
├── useProtectedRoute.ts
```