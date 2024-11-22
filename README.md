<p align="center"><h1 align="center">STARTER KIT TEMPLATE</h1></p>
<p align="center">
	<em>Nextjs Starter Kit - Nextjs 14, Prisma, Clerk, Shadcn/ui & Dark mode</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/last-commit/pauloaraujo028/starter-template-nextjs?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/pauloaraujo028/starter-template-nextjs?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/pauloaraujo028/starter-template-nextjs?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

## Índice

- [Índice](#índice)
- [Sobre o Projeto](#sobre-o-projeto)
- [Stack Tecnológica](#stack-tecnológica)
- [Características](#características)
- [Construído com](#construído-com)
- [Começando](#começando)
  - [Pré-requisito](#pré-requisito)
  - [Instalação](#instalação)
  - [Uso](#uso)
- [Contribuição](#contribuição)
- [Contato](#contato)

## Sobre o Projeto

Este projeto é um template completo e moderno desenvolvido com as tecnologias mais avançadas da atualidade. Ele foi projetado para ser escalável, fácil de personalizar e pronto para atender a uma variedade de aplicações web.

<!-- <img width="100%" alt="nextjs-portfolio" src="https://github.com/pauloaraujo028/icasei-frontend-test/assets/105018299/221adaf5-b708-468c-a392-b2c6f07ca574">
<img width="50%" alt="nextjs-portfolio" src="https://github.com/pauloaraujo028/icasei-frontend-test/assets/105018299/3efe141f-4d99-4dd4-a98b-12c3f6103ae9"><img width="50%" alt="nextjs-portfolio" src="https://github.com/pauloaraujo028/icasei-frontend-test/assets/105018299/3efe141f-4d99-4dd4-a98b-12c3f6103ae9"> -->

## Stack Tecnológica

- **[Next.js](https://nextjs.org/):** Framework React de última geração com renderização híbrida (SSR e SSG), App Router e otimizações avançadas para performance.
- **[Clerk](https://clerk.com/):** Gerenciamento de autenticação e usuários simplificado, oferecendo suporte para login, registro, autenticação social e muito mais.
- **[Prisma](https://www.prisma.io/):** ORM (Object-Relational Mapping) de banco de dados robusto para consultas rápidas e intuitivas, suporte a bancos de dados relacionais e migrações fáceis.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework CSS utilitário de estilos que permite construir layouts responsivos e altamente customizáveis.
- **[Shadcn/ui](https://ui.shadcn.com/):** Biblioteca de componentes pré-construídos e acessíveis baseados no Tailwind CSS, otimizados para consistência e experiência de usuário.

## Características

**Funcionalidades principais:**

1. **Autenticação com Clerk:**

- Integração com Clerk para login e registro de usuários com suporte para:
  - [x] Autenticação via e-mail
  - [x] Login social (Google, Facebook, GitHub, etc.)
  - [x] Gerenciamento de sessão seguro

2. **Banco de dados com Prisma:**

   - [x] Configuração pronta para conexão com banco de dados relacional (ex: PostgreSQL, MySQL, SQLite, etc.)
   - [x] Suporte para migrações, seeders e queries simplificadas

3. **Estilização com Tailwind CSS e Shadcn/ui:**

   - [x] Estilos prontos e responsivos para desenvolvimento rápido
   - [x] Componentes aceessíveis e reutilizáveis, como botões, formulários, modais, etc.

4. **Dark Mode:**

   - [x] Suporte nativo para dark mode, proporcionando uma experiência de usuário mais confortável à noite

5. **Estrutura Modular:**

   - [x] Organização clara das pastas e arquivos, facilitando a manutenção e escalabilidade do projeto

6. **Extensibilidade:**
   - [x] Fácil de personalizar e estender com novas funcionalidades
   - [x] Pronto para integração com outras bibliotecas adicionais

## Construído com

**Principais tecnologias:**

- ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
- ![Shadcn](https://img.shields.io/badge/shadcn/ui-black?style=for-the-badge&logo=&logoColor=white)
- ![Clerk](https://img.shields.io/badge/clerk-%23009639.svg?style=for-the-badge&logo=&logoColor=white)

## Começando

### Pré-requisito

Antes de começar a usar o Starter Kit, certifique-se de que seu ambiente de execução atenda aos seguintes requisitos:

- **Node.js** (versão 18 ou superior)
  - Baixe e instale o Node.js em **[nodejs.org](https://nodejs.org/)**.
- **Git** (para clonar o repositório)
  - Baixe e instale o Git em **[git-scm.com](https://git-scm.com/)**.
- **Banco de Dados Relacional** (como PostgreSQL, MySQL ou SQLite)
  - Recomenda-se o uso do PostgreSQL.
  - Para SQLite, não é necessário configurar um servidor de banco de dados.
- **Gerenciador de Pacotes**
  - npm (já incluído no Node.js)
  - yarn (opcional, pode ser instalado com `npm install -g yarn`)
- **Configurações Necessárias**
  1. Conta no Clerk
     - Crie uma conta no **[Clerk.dev](https://clerk.com/)** e obtenha as chaves da API necesssárias para autenticação.
  2. Banco de Dados Configurado
     - Configure seu banco de dados e obtenha a URL de conexão.
  - Exemplo de URL para PostgreSQL:

```sh
 DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
```

Com todos os pré-requisitos atendidos, você estará pronto para rodar o projeto e começar a desenvolvê-lo! 🚀

### Instalação

Instale o Starter Kit usando o seguinte método:

**Constua a partir do codigo fonte:**

1. Clone o repositório Starter Kit:

```sh
 git clone https://github.com/pauloaraujo028/starter-template-nextjs
```

1. Navegue até o diretório do projeto:

```sh
 cd starter-template-nextjs
```

3. Instale as dependências:

```sh
 npm install
  # ou
 yarn install
```

4. Configure as variáveis de ambiente:

   - Crie um arquivo `.env.local` na raiz do projeto.
   - Copie as variáveis de ambiente do arquivo `.env.example` para o arquivo `.env.local`.
   - Personalize as variáveis de acordo com suas necessidades.

5. Configure o Prisma:

```sh
 npx prisma generate
 npx prisma migrate dev
```

### Uso

Para iniciar o projeto, execute o seguinte comando:

```sh
 npm run dev
  # ou
 yarn dev
```

## Contribuição

- **💬 [Participe das discussões](https://github.com/pauloaraujo028/starter-template-nextjs/discussions)**: Compartilhe suas ideias, forneça feedback ou faça perguntas.
- **🐛 [Relatar problemas](https://github.com/pauloaraujo028/starter-template-nextjs/issues)**: Envie bugs encontrados ou registre solicitações de recursos para o projeto `starter-template-nextjs`.
- **💡 [Enviar Pull Requests](https://github.com/pauloaraujo028/starter-template-nextjs/blob/main/CONTRIBUTING.md)**: Revise os PRs abertos e envie seus próprios PRs.

<details open>
<summary>Diretrizes de contribuição</summary>

1. **Faça o Fork do Repositório**: Comece fazendo o fork do repositório do projeto para sua conta do github.
2. **Clonar Localmente**: Clone o repositório em sua máquina local usando um cliente git.
   ```sh
   git clone https://github.com/pauloaraujo028/starter-template-nextjs
   ```
3. **Criar uma Nova Branch**: Sempre trabalhe em um novo branch, dando-lhe um nome descritivo.
   ```sh
   git checkout -b novo recurso-x
   ```
4. **Faça suas alterações**: desenvolva e teste suas alterações localmente.
5. **Faça commit de suas Alterações**: Confirme com uma mensagem clara descrevendo suas atualizações.
   ```sh
   git commit -m 'Novo recurso implementado x.'
   ```
6. **Envie para o Github**: Envie as alterações para seu repositório.
   ```sh
   git push origin novo recurso-x
   ```
7. **Enviar um Pull Request**: Crie um PR no repositório original do projeto. Descreva claramente as mudanças e suas motivações.
8. **Revisão**: Depois que seu PR for revisado e aprovado, ele será incorporado ao ramo principal. Parabéns pela sua contribuição!
</details>

<details open>
<summary>Gráfico do Contribuidor</summary>
<br>
<p align="left">
   <a href="https://github.com{/pauloaraujo028/starter-template-nextjs/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=pauloaraujo028/starter-template-nextjs">
   </a>
</p>
</details>

## Contato

**Paulo Araújo Dev**

[![Portfolio](https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=firefox&logoColor=#FF7139)](https://pauloaraujo-portfolio.netlify.app/)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pauloaraujo028/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/pauloaraujo028)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:pauloaraujo.phz@gmail.com)
