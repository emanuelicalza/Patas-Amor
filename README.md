# Patas & Amor

**Patas & Amor** é uma página de divulgação de animais para adoção, criada como projeto da disciplina de Desenvolvimento de Aplicações Web. A listagem principal apresenta os animais disponíveis, com foto, nome, descrição, idade e um botão para adotar, e pode ser filtrada por categoria (cachorros, gatos e outros). A listagem secundária reúne dicas de cuidados diários, como alimentação, higiene e brincadeiras, para ajudar quem pensa em adotar. A página é responsiva, com abordagem mobile first, e será desenvolvida com React, TypeScript e Tailwind CSS.

## Aplicação publicada
https://emanuelicalza.github.io/Patas-Amor/

## Autor
Emanueli Calza

## Fase 1 
Netrega dos wireframe mobile, tablet e desktop.

## Fase 2

Construção da página inteira no `App.tsx`, fiel aos wireframes e responsiva (mobile first, com adaptações para tablet e desktop):

- Cabeçalho, seção de dicas de cuidados diários, filtros, listagem de 12 animais e rodapé.
- Estrutura semântica com `header`, `main`, `section`, `article` e `footer`.
- Estilização com Tailwind CSS, na paleta lilás.
- Os cards das duas listagens foram escritos à mão no JSX.

## Fase 3

Reorganização da página em componentes, dados e estado:

- Componentes em `src/components/`: `Cabecalho`, `Rodape`, `CartaoDica`, `CartaoAnimal` e `FiltroAnimais`.
- Types `Animal`, `Dica`, `Especie` e `Filtro` em `src/data/tipos.ts`, e vetores de objetos em `src/data/animais.ts` e `src/data/dicas.ts`.
- As duas listagens são renderizadas com `map` e `key`, e as props de todos os componentes são tipadas.
- Interação com `useState`: filtro de animais por espécie, com contador de animais exibidos.
- O `App.tsx` guarda o estado e compõe os componentes.

### Desafios bonificados

- **Modo escuro:** chave no cabeçalho para alternar entre tema claro e escuro, controlada por estado e pelo `dark:` do Tailwind.
- **Publicação:** aplicação publicada no GitHub Pages com GitHub Actions (link acima).
