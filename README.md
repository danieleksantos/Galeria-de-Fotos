# 🏅 Galeria de Fotos - Esportes

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite" alt="Vite 7">
  <img src="https://img.shields.io/badge/Material--UI-7-007FFF?logo=mui" alt="MUI 7">
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" alt="TypeScript 5">
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel" alt="Vercel">
</p>

Aplicação de galeria moderna focada em performance, acessibilidade e experiência do usuário, apresentando uma coleção de fotografias esportivas.

---

## 🚀 Funcionalidades

- **🔍 Busca Dinâmica**: Filtragem em tempo real utilizando `useMemo` para garantir fluidez mesmo em listas extensas.
- **🌓 Dark Mode**: Suporte a temas claro e escuro com paletas personalizadas via Contexto do Material UI.
- **📄 Paginação**: Navegação estruturada (8 itens por página) com scroll automático.
- **♿ Acessibilidade (A11y)**: Navegação por teclado, `aria-labels` descritivos e textos alternativos (`alt`) em todas as imagens.
- **📱 Responsividade**: Layout adaptável para dispositivos móveis e desktops utilizando o sistema de Grid do MUI 7.

---

## 🛠️ Tecnologias e Boas Práticas

Este projeto foi construído seguindo princípios de **Clean Code** e **SOLID**:

* **React 19**: Uso de Hooks modernos e Strict Mode.
* **TypeScript**: Tipagem estrita de dados e componentes para maior segurança.
* **Material UI 7**: Componentização baseada em Design System.
* **Performance**: Otimização de renderização para evitar re-calculos caros durante a digitação.

---

## 📂 Estrutura de Pastas

```text
src/
 ├── components/ # Componentes de UI (Header, Search, etc)
 ├── data/       # Mock de dados e constantes
 ├── styles/     # Configuração unificada de Temas
 ├── types/      # Interfaces e Definições de Tipos
 └── App.tsx     # Lógica principal e Gerenciamento de Estado
```


## 📸 Demonstração

<p align="center">
  <img src="https://github.com/user-attachments/assets/081e6c9e-c4bd-4991-a07f-2b9fc20b02f3" alt="Desktop Dark Mode Preview" width="500" height="1000"/>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/a8578d65-36d8-490b-9a95-3e75e7e8f2b9" alt="Mobile light Mode preview" width="200" />
</p>
