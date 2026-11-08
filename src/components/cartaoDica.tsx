import type { Dica } from '../data/tipos'

type Props = {
  dica: Dica
}

function CartaoDica({ dica }: Props) {
  return (
    <article className="rounded-xl border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950">
      <h3 className="flex items-center gap-2 font-semibold">
        <span className="text-xl">{dica.emoji}</span>
        {dica.titulo}
      </h3>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{dica.texto}</p>
    </article>
  )
}

export default CartaoDica