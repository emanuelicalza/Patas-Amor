import type { Filtro } from '../data/tipos'

type Props = {
  filtroAtual: Filtro
  aoMudar: (filtro: Filtro) => void
}

const opcoes: { valor: Filtro; rotulo: string }[] = [
  { valor: 'todos', rotulo: 'Todos' },
  { valor: 'cachorro', rotulo: 'Cachorros' },
  { valor: 'gato', rotulo: 'Gatos' },
  { valor: 'outro', rotulo: 'Outros' },
]

function FiltroAnimais({ filtroAtual, aoMudar }: Props) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {opcoes.map((opcao) => (
        <button
          key={opcao.valor}
          onClick={() => aoMudar(opcao.valor)}
          className={`rounded-full border border-purple-300 px-3 py-1 text-sm ${
            filtroAtual === opcao.valor ? 'bg-purple-200' : ''
          }`}
        >
          {opcao.rotulo}
        </button>
      ))}
    </div>
  )
}

export default FiltroAnimais