# Desafio Frontend Júnior

Bem-vindo(a) ao desafio técnico da **Direito Ágil**! 
Este repositório contém a base do teste para a vaga de **Frontend Júnior (Angular)**.
---

## Objetivo

O objetivo deste desafio é avaliar sua capacidade de:

- Ler e entender um projeto Angular já iniciado  
- Implementar novas funcionalidades de forma organizada e funcional  
- Aplicar boas práticas básicas de código, HTML e CSS  
- Demonstrar atenção a detalhes visuais e lógicos  

---

## O que você deve fazer

Implemente as seguintes melhorias no projeto:

1. **Filtrar produtos**  
   - Permitir buscar produtos por nome e/ou categoria.

2. **Detalhamento de produto**  
   - Ao clicar em um item na lista, o usuário deve ser levado para uma página de detalhes que exibe informações completas do produto.

3. **Criar um formulário para adicionar novos produtos.**   
   - Crie um novo componente, contendo o formulário para adicionar novos produtos a uma lista. Neste caso, não precisa se preocupar com a persistência dos sites, apenas salve a nova informação em tempo de execução.

---

## Estrutura do Projeto

A base já vem configurada com:
- Angular 15+  
- Estrutura de componentes e serviços (pasta `src/app/`)  
- Rotas já configuradas (`app-routing.module.ts`)  
- Um mock de produtos em memória (`product.service.ts`)

Você **não precisa** criar backend, banco de dados ou autenticação.  
A ideia é focar apenas no **frontend e na lógica da interface**.

---

## Como executar o projeto

```bash
git clone https://github.com/direito-agil/direito-agil-frontend-test-case.git
cd direito-agil-frontend-test-case
```

Instale as dependências e rode o servidor de desenvolvimento:

```bash
npm install
npm start
# ou
ng serve
```

---

## Entrega

1. **Crie um fork** deste repositório em sua conta do GitHub;
2. Crie uma **nova branch**;
3. Faça as alterações solicitadas;
4. **Suba o código** para o seu fork; 
5. Crie uma **Pull Request (PR)** para o repositório original.
---

## O que será avaliado

| Critério | Descrição |
|-----------|------------|
| **Organização** | Estrutura de pastas, nomeação de variáveis e componentes |
| **Boas práticas Angular** | Uso correto de `@Component`, `@Service`, `Router`, `ngFor`, `ngIf`, etc. |
| **HTML e CSS** | Clareza, semântica, uso adequado de classes e responsividade básica |
| **Funcionalidade** | Filtros e navegação funcionando conforme o esperado |
| **Git e commits** | Commits claros, PR bem descrita |
| **(Bônus)** | Uso de Reactive Forms, responsividade, validações e testes simples |

---

## Dicas para quem está começando

- Use o comando `ng generate component` e `ng generate service` para criar novos arquivos, mantendo o padrão Angular CLI.  
- Teste suas alterações rodando `ng serve` e verificando no navegador.  
- Se algo der erro, o console do navegador e o terminal vão te ajudar a entender o que está faltando.  
- Não se preocupe em fazer um layout perfeito — o foco é a **lógica e a clareza do código**.  
- Faça commits pequenos e descritivos (ex.: `feat: cria filtro por categoria`).

---