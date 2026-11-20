import type { Filtro } from '../data/tipos'

type Props = {
  filtroAtual: Filtro
  aoMudar: (filtro: Filtro) => void
  quantidade: number
}

const opcoes: { valor: Filtro; rotulo: string }[] = [
  { valor: 'todos', rotulo: 'Todos' },
  { valor: 'cachorro', rotulo: 'Cachorros' },
  { valor: 'gato', rotulo: 'Gatos' },
  { valor: 'outro', rotulo: 'Outros' },
]

const nomes: Record<Filtro, [string, string]> = {
  todos: ['animal', 'animais'],
  cachorro: ['cachorro', 'cachorros'],
  gato: ['gato', 'gatos'],
  outro: ['outro animal', 'outros animais'],
}

function FiltroAnimais({ filtroAtual, aoMudar, quantidade }: Props) {
  const [singular, plural] = nomes[filtroAtual]

  return (
    <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
      <div className="flex flex-wrap gap-2">
        {opcoes.map((opcao) => (
          <button
            key={opcao.valor}
            onClick={() => aoMudar(opcao.valor)}
            className={`rounded-full border border-purple-300 px-3 py-1 text-sm transition-colors duration-200 hover:bg-purple-200 dark:border-purple-700 dark:hover:bg-purple-800 ${
              filtroAtual === opcao.valor ? 'bg-purple-200 dark:bg-purple-800' : ''
            }`}
          >
            {opcao.rotulo}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-700 dark:text-gray-300" aria-live="polite">
        {quantidade} {quantidade === 1 ? singular : plural}
      </p>
    </div>
  )
}

export default FiltroAnimais