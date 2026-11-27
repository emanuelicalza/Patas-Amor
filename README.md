# Patas & Amor

**Patas & Amor** é uma página de divulgação de animais para adoção, criada como projeto da disciplina de Desenvolvimento de Aplicações Web. A listagem principal apresenta os animais disponíveis, com foto, nome, descrição, idade e um botão para adotar, e pode ser filtrada por categoria (cachorros, gatos e outros). A listagem secundária reúne dicas de cuidados diários, como alimentação, higiene e brincadeiras, para ajudar quem pensa em adotar. A página é responsiva, com abordagem mobile first, e foi desenvolvida com React, TypeScript e Tailwind CSS.

## Aplicação publicada

https://emanuelicalza.github.io/Patas-Amor/

## Autor

Emanueli Calza

## Como executar

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal.

## Fonte dos dados

- **Listagem principal (animais):** API criada no Mockaroo a partir de um dataset (`docs/animais.csv`), carregada com `fetch` dentro de `useEffect` (`src/services/animalService.ts` e `src/hooks/useAnimais.ts`). Enquanto os dados chegam, a página mostra "Carregando animais...", e se a requisição falhar mostra uma mensagem de erro.
- **Listagem secundária (dicas):** vetor de objetos declarado em `src/data/dicas.ts`.

## Fases

### Fase 1

Entrega dos wireframes mobile, tablet e desktop, na pasta `docs/`.

### Fase 2

Construção da página inteira no `App.tsx`, fiel aos wireframes e responsiva, com cabeçalho, dicas de cuidados, filtros, 12 animais e rodapé, em estrutura semântica.

### Fase 3

Reorganização em componentes (`src/components/`), types e vetores de objetos (`src/data/`), listagens com `map` e `key`, props tipadas e filtro por espécie com `useState`, com contador de animais exibidos.

Desafios bonificados:

- **Modo escuro:** chave no cabeçalho que alterna o tema, controlada por estado.
- **Publicação:** aplicação publicada no GitHub Pages com GitHub Actions (`.github/workflows/deploy.yml`).

### Fase 4

Dados externos:

- Listagem principal carregada da API do Mockaroo com `fetch` em `useEffect`, com o estado dos dados tipado (`useState<Animal[]>`).
- Estados de **carregando** e de **erro** exibidos na interface.
- Acesso aos dados separado em `src/services/` e `src/hooks/`.
- Modal ao clicar em **Adotar**, controlado por estado (`animalSelecionado`).