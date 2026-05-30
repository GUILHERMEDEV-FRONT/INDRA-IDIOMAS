# 🌍 Indra Idiomas

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
</p>

<p align="center">
  <strong>Uma Single Page Application (SPA) moderna, responsiva e otimizada para uma escola de aprendizagem de idiomas.</strong>
</p>

---

## 📋 Sobre o Projeto

O **Indra Idiomas** é um projeto frontend desenvolvido com **React** e **TypeScript**, utilizando o **Vite** como ferramenta de build para garantir a máxima performance e rapidez durante o desenvolvimento.

A aplicação foi estruturada seguindo o conceito de componentes modulares reutilizáveis, onde cada secção da página principal (Landing Page) foi isolada para facilitar a manutenção e garantir uma arquitetura de código limpa. O projeto conta com secções explicativas sobre cursos, livros digitais (Ebooks), galeria de estudantes, tradução e formulários de contacto de clientes.

## 🚀 Funcionalidades da Interface

* **Secção Hero Prémio (`Hero.tsx`):** Apresentação de impacto da escola de idiomas com chamadas para ação (CTA).
* **Apresentação Institucional (`AboutUs.tsx`):** História e propósito da marca Indra Idiomas.
* **Vitrine de Cursos (`Courses.tsx`):** Listagem dinâmica dos idiomas e modalidades oferecidas.
* **Módulo de Ebooks (`Ebooks.tsx`):** Divulgação de materiais didáticos e livros digitais exclusivos.
* **Galeria de Alunos (`StudentGallery.tsx`):** Espaço visual dedicado à comunidade e experiências dos estudantes.
* **Área de Tradução (`Translation.tsx`):** Informações sobre serviços de tradução e proficiência.
* **Formulário de Contacto (`ContactForm.tsx`):** Interface intuitiva para captação de leads e novos estudantes.
* **Central de Dúvidas (`Faq.tsx`):** Secção de perguntas frequentes para melhorar a experiência do utilizador (UX).

## 🛠️ Tecnologias Utilizadas

* **React.js (v18+):** Biblioteca principal para a construção da interface baseada em componentes.
* **TypeScript:** Adição de tipagem estática rigorosa para evitar erros em tempo de execução e melhorar o autocomplete no editor.
* **Vite:** Bundler ultra-rápido substituto do Create React App, focado em performance.
* **CSS Dinâmico (`index.css`):** Estilização customizada aplicada de forma global e local nos componentes.

---

## ⚙️ Arquitetura e Organização de Pastas

O projeto está organizado da seguinte forma dentro do diretório principal:

```bash
├── public/              # Recursos estáticos globais
├── src/
│   ├── assets/
│   │   └── images/      # Imagens e ilustrações locais da plataforma
│   ├── components/      # Componentes modulares da Landing Page
│   │   ├── AboutUs.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Courses.tsx
│   │   ├── Ebooks.tsx
│   │   ├── Faq.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── StudentGallery.tsx
│   │   └── Translation.tsx
│   ├── App.tsx          # Componente raiz que orquestra as secções
│   ├── custom.d.ts      # Definições de tipos personalizadas para TypeScript
│   ├── data.ts          # Arquivo de dados estáticos (informações de cursos, faq, etc.)
│   ├── index.css        # Estilos globais e configurações de layout da aplicação
│   └── main.tsx         # Ponto de entrada que renderiza a aplicação no DOM
├── .gitignore           # Ficheiros ignorados pelo Git
├── index.html           # Página HTML principal (entry point do Vite)
├── package.json         # Dependências do projeto e scripts de execução
├── tsconfig.json        # Configurações do compilador TypeScript
└── vite.config.ts       # Configurações de plugins e build do Vite
