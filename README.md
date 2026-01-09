# Galeria de Fotos - Esportes

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite" alt="Vite 7">
  <img src="https://img.shields.io/badge/Material--UI-7-007FFF?logo=mui" alt="MUI 7">
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" alt="TypeScript 5">
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel" alt="Vercel">
</p>

Aplicação de galeria moderna focada em performance, acessibilidade e experiência do usuário, apresentando uma coleção de fotografias esportivas.

---

## Funcionalidades

- ** Visualização Imersiva (Lightbox)**: Ao clicar em uma foto, ela abre em tela cheia com suporte a navegação por slides.
- ** Legendas Dinâmicas**: Exibição automática de títulos e descrições (foco em acessibilidade) contextuais dentro do modo de visualização.
- ** Busca Dinâmica**: Filtragem em tempo real utilizando `useMemo` para garantir fluidez mesmo em listas extensas.
- ** Dark Mode**: Suporte a temas claro e escuro com paletas personalizadas via Contexto do Material UI.
- ** Paginação**: Navegação estruturada (8 itens por página) com scroll automático.
- ** Acessibilidade (A11y)**: Navegação por teclado, `aria-labels` descritivos e textos alternativos (`alt`) em todas as imagens.
- ** Responsividade**: Layout adaptável para dispositivos móveis e desktops utilizando o sistema de Grid do MUI 7.

---

## Tecnologias e Boas Práticas

Este projeto foi construído seguindo princípios de **Clean Code** e **SOLID**:

* **React 19**: Uso de Hooks modernos e Strict Mode.
* **TypeScript**: Tipagem estrita de dados e componentes para maior segurança.
* **Material UI 7**: Componentização baseada em Design System.
* **Yet Another React Lightbox**: Biblioteca modular para visualização de mídia.
* **Performance**: Otimização de renderização para evitar re-calculos caros durante a digitação.

---

## Estrutura de Pastas

```text
src/
 ├── components/ # Componentes de UI (Header, Search, etc)
 ├── data/       # Mock de dados e constantes
 ├── styles/     # Configuração unificada de Temas
 ├── types/      # Interfaces e Definições de Tipos
 └── App.tsx     # Lógica principal, Lightbox e Gerenciamento de Estado
```


## Demonstração

<p align="center">
  <img src="https://github.com/user-attachments/assets/e5637a8f-4482-475e-97c7-9f4dad6c9a78" alt="Desktop Dark Mode Preview" width="500" height="1000"/>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="https://github.com/user-attachments/assets/a8578d65-36d8-490b-9a95-3e75e7e8f2b9" alt="Mobile light Mode preview" width="200" />
</p>

## Instalação e Execução

<p>Siga os passos abaixo para rodar o projeto localmente em sua máquina:</p>

<table>
  <thead>
    <tr>
      <th>Passo</th>
      <th>Ação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1. Clonar</strong></td>
      <td>
        <code>git clone https://github.com/seu-usuario/seu-repositorio.git</code>
      </td>
    </tr>
    <tr>
      <td><strong>2. Instalar</strong></td>
      <td>
        <code>npm install</code>
        <br />
        <small>Instala React 19, MUI 7 e Yet Another React Lightbox.</small>
      </td>
    </tr>
    <tr>
      <td><strong>3. Rodar</strong></td>
      <td>
        <code>npm run dev</code>
      </td>
    </tr>
  </tbody>
</table>
