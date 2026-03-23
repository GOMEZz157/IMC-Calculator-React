# 🧮 IMC Calculator

Calculadora de **Índice de Massa Corporal (IMC)** desenvolvida com React, Vite e Tailwind CSS.

## 📋 Sobre o Projeto

Esta aplicação permite calcular o IMC de forma rápida e simples, informando a classificação do resultado de acordo com os padrões da Organização Mundial da Saúde (OMS).

## 🚀 Tecnologias

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## ⚙️ Como rodar localmente

**Pré-requisitos:** Node.js instalado na máquina.

```bash
# Clone o repositório
git clone https://github.com/GOMEZz157/IMC-Calculator-React.git

# Acesse a pasta do projeto
cd IMC-Calculator-React

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

## 📦 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run preview` | Pré-visualiza o build de produção |
| `npm run lint` | Executa o ESLint no projeto |

## 📊 Tabela de Classificação do IMC

| IMC | Classificação |
|---|---|
| Abaixo de 18,5 | Abaixo do peso |
| 18,5 – 24,9 | Peso normal |
| 25,0 – 29,9 | Sobrepeso |
| 30,0 – 34,9 | Obesidade grau I |
| 35,0 – 39,9 | Obesidade grau II |
| Acima de 40,0 | Obesidade grau III |

> **Fórmula:** IMC = peso (kg) ÷ altura² (m)

## 📁 Estrutura do Projeto

```
IMC-Calculator-React/
├── src/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## 👨‍💻 Autor

Feito por [GOMEZz157](https://github.com/GOMEZz157)
