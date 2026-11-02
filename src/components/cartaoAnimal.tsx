import type { Animal } from '../data/tipos'

type Props = {
  animal: Animal
}

function CartaoAnimal({ animal }: Props) {
  return (
    <article className="flex flex-col rounded-xl border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-950">
      <img
        src={animal.imagem}
        alt={`Foto de ${animal.nome}`}
        className="aspect-[3/2] w-full rounded-lg object-cover"
      />
      <h3 className="mt-3 font-semibold">{animal.nome}</h3>
      <p className="flex-1 text-sm text-gray-700 dark:text-gray-300">{animal.descricao}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm">{animal.idade}</span>
        <button className="rounded-full border border-purple-400 px-4 py-1 text-sm transition-colors duration-200 hover:bg-purple-200 dark:hover:bg-purple-800">
          Adotar
        </button>
      </div>
    </article>
  )
}

export default CartaoAnimal