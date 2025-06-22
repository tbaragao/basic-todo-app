# 📋 ToDo App

🇧🇷 Um pequeno projeto de aprendizado desenvolvido com **ReactJS**, **TypeScript**, **Tailwind CSS**, **CVA (Class Variance Authority)**, **Vite**, **vite-plugin-svgr** e **React Router**.  
🇺🇸 A small learning project built with **ReactJS**, **TypeScript**, **Tailwind CSS**, **CVA (Class Variance Authority)**, **Vite**, **vite-plugin-svgr**, and **React Router**.

🇧🇷 Este ToDo App tem como objetivo praticar conceitos fundamentais de front-end moderno, como componentização, tipagem estática, estilização utilitária e boas práticas de organização de código.  
🇺🇸 This ToDo App aims to practice fundamental concepts of modern front-end development such as componentization, static typing, utility-first styling, and clean code organization.

---

## 🛠️ Tecnologias Utilizadas · Technologies Used

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [CVA (Class Variance Authority)](https://cva.style/)
- [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr)
- [React Router](https://reactrouter.com/)

---

## 📦 Instalação e Uso · Installation & Usage

```bash
# 🇧🇷 Clone o repositório
# 🇺🇸 Clone the repository
git clone https://github.com/seu-usuario/nome-do-repositorio.git

# 🇧🇷 Acesse a pasta do projeto
# 🇺🇸 Navigate to the project folder
cd nome-do-repositorio

# 🇧🇷 Instale as dependências
# 🇺🇸 Install dependencies
npm install

# 🇧🇷 Inicie o servidor de desenvolvimento
# 🇺🇸 Start the development server
npm run dev
```

---

## ✅ Funcionalidades · Features

- ✅ 🇧🇷 Adicionar novas tarefas | 🇺🇸 Add new tasks  
- ✅ 🇧🇷 Marcar tarefas como concluídas | 🇺🇸 Mark tasks as completed  
- ✅ 🇧🇷 Remover tarefas da lista | 🇺🇸 Remove tasks from the list  
- ✅ 🇧🇷 Interface responsiva e moderna | 🇺🇸 Responsive and modern interface  

---

## 📁 Estrutura do Projeto · Project Structure

```
src/
├── components/       → 🇧🇷 Componentes reutilizáveis | 🇺🇸 Reusable components
├── hooks/            → 🇧🇷 Hooks personalizados | 🇺🇸 Custom hooks
├── pages/            → 🇧🇷 Páginas principais (se houver) | 🇺🇸 Main pages (if any)
├── styles/           → 🇧🇷 Configurações do Tailwind | 🇺🇸 Tailwind configuration
├── types/            → 🇧🇷 Tipagens TypeScript | 🇺🇸 TypeScript typings
└── main.tsx          → 🇧🇷 Ponto de entrada da aplicação | 🇺🇸 Entry point
```

---

## 🧭 Navegação · Routing

🇧🇷 A aplicação utiliza o **React Router** no **modo declarativo**. As rotas são definidas diretamente em JSX dentro do componente **`App`**, integrado à árvore de componentes do React.  
🇺🇸 The app uses **React Router** in **declarative mode**. Routes are defined directly in JSX inside the **`App`** component, integrated into the React component tree.

Exemplo:

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          ...
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

✅ 🇧🇷 Nesse padrão, não são utilizados APIs como `createBrowserRouter`; toda a configuração permanece declarativa.  
✅ 🇺🇸 In this pattern, APIs such as `createBrowserRouter` are not used; the entire configuration remains declarative.

---

## 🎯 Objetivo · Purpose

- 🇧🇷 Desenvolvimento com React utilizando TypeScript  
- 🇺🇸 React development with TypeScript  

- 🇧🇷 Organização de código com componentes reutilizáveis  
- 🇺🇸 Clean code with reusable components  

- 🇧🇷 Estilização com utilitários do Tailwind CSS  
- 🇺🇸 Styling using Tailwind utility classes  

- 🇧🇷 Composição dinâmica de classes com CVA  
- 🇺🇸 Dynamic class composition using CVA  

- 🇧🇷 Uso de SVGs como componentes com vite-plugin-svgr  
- 🇺🇸 Using SVGs as components with vite-plugin-svgr  

- 🇧🇷 Gerenciamento de rotas com React Router (modo declarativo)  
- 🇺🇸 Route management with React Router (declarative mode)  

- 🇧🇷 Aplicação de boas práticas em projetos front-end modernos  
- 🇺🇸 Best practices in modern front-end projects  

---

> 🇧🇷 Feito com 💙 para fins de estudo e evolução no ecossistema React moderno.  
> 🇺🇸 Built with 💙 as a hands-on learning project in the modern React ecosystem.