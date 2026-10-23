# 🏗️ Pedicini Construtora & Engenharia

[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)
[![Status: Production Ready](https://img.shields.io/badge/Status-Deploy%20Live-brightgreen.svg)](https://pedicini-builds-trust.lovable.app)
[![Framework: TanStack Start + React](https://img.shields.io/badge/Framework-React%20%7C%20TanStack-blue.svg)](https://tanstack.com)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-CSS%20v4-38bdf8.svg)](https://tailwindcss.com)

Landing page corporativa de alta conversão para a **Pedicini Construtora & Engenharia** ([@pediciniconstrutora](https://www.instagram.com/pediciniconstrutora)), projetada com estética moderna de engenharia corporativa (inspirada nos padrões de rigor e precisão do ecossistema Sienge).

---

## 🌐 Deploy & Demonstração ao Vivo

- **🚀 Site em Produção (Live):** [https://pedicini-builds-trust.lovable.app](https://pedicini-builds-trust.lovable.app)
- **🔍 Preview Sandbox Interativo:** [https://id-preview--227c2b6c-07f7-4811-863c-98b2dbe81430.lovable.app](https://id-preview--227c2b6c-07f7-4811-863c-98b2dbe81430.lovable.app)
- **🛠️ Lovable Project Editor:** [https://lovable.dev/projects/227c2b6c-07f7-4811-863c-98b2dbe81430](https://lovable.dev/projects/227c2b6c-07f7-4811-863c-98b2dbe81430)

---

## 🎯 Proposta & Soluções Apresentadas

1. **Construção Residencial de Alto Padrão:** Mansões, casas em condomínios fechados e acabamento de alto padrão na Baixada Santista e SP.
2. **Construção e Retrofit Comercial:** Soluções corporativas, lojas, lajes e galpões.
3. **Reformas Estruturais e Interiores:** Laudos periciais, reforço de estruturas e modernização completa.
4. **Pavimentação & Infraestrutura:** Pisos intertravados, concregrama, drenagem pluvial e obras viárias.
5. **Gerenciamento Turnkey (Chave na mão):** Da aprovação de projetos e alvarás até a entrega definitiva das chaves.

---

## ✨ Funcionalidades Principais

- 📐 **Calculadora de Estimativa de Obra (Tempo Real):** Permite simular custos baseados no CUB/SP por tipo de obra (residencial, comercial, reforma, pavimentação), área em $m^2$ e padrão de acabamento.
- 💬 **Funil de Conversão Integrado:** Botões com geração automática de mensagem contextualizada para atendimento no WhatsApp.
- 📊 **Métricas de Credibilidade Corporativa:** Contadores de m² construídos, selos CREA e política de zero acidentes de trabalho.
- 🎨 **Identidade Visual Técnica:** Slate profundo (`#0F172A`), detalhes em laranja construção/âmbar e microinterações fluidas via Framer Motion.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
| :--- | :--- |
| **Runtime & Core** | React 19, TypeScript, TanStack Start / Router |
| **Estilização** | Tailwind CSS v4, shadcn/ui, PostCSS |
| **Animações** | Framer Motion (`motion/react`) |
| **Ícones** | Lucide React |
| **Deploy & Cloud** | Lovable Cloud Sandbox / Nitro Engine |

---

## 📁 Estrutura do Repositório

```text
Pediccini-Engenharia/
├── src/
│   ├── assets/             # Imagens e materiais visuais das obras
│   ├── components/ui/      # Componentes de interface shadcn/ui
│   ├── lib/
│   │   └── budget.ts       # Algoritmo de cálculo de estimativa por m²
│   ├── routes/
│   │   └── index.tsx       # Landing page completa (Hero, Serviços, Calculadora, Prova Social)
│   └── styles.css          # Design tokens, temas oklch e classes utilitárias
├── .gitignore              # Padrão ouro de exclusão de binários e segredos
├── LICENSE                 # Licença MIT 2026 Henrique Bezerra Dos Santos
└── README.md               # Documentação técnica oficial
```

---

## 👤 Autor & Licença

Desenvolvido por **Henrique Bezerra Dos Santos**.  
Distribuído sob os termos da licença [MIT](LICENSE).
