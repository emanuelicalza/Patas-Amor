import { useEffect } from 'react'
import type { Animal } from '../data/tipos'

type Props = {
  animal: Animal
  aoFechar: () => void
}

function ModalAdocao({ animal, aoFechar }: Props) {
  useEffect(() => {
    function aoApertarTecla(evento: KeyboardEvent) {
      if (evento.key === 'Escape') aoFechar()
    }

    window.addEventListener('keydown', aoApertarTecla)
    return () => window.removeEventListener('keydown', aoApertarTecla)
  }, [aoFechar])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={aoFechar}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-modal"
        className="w-full max-w-sm rounded-xl border border-purple-200 bg-white p-6 text-center text-gray-900 shadow-lg dark:border-purple-800 dark:bg-gray-900 dark:text-gray-100"
        onClick={(evento) => evento.stopPropagation()}
      >
        <h2 id="titulo-modal" className="text-lg font-semibold">
          Que bom que você quer adotar {animal.nome}! 🐾
        </h2>
        <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
          O pedido de adoção online ainda não está disponível. Para adotar,
          ligue para (00) 0000-0000.
        </p>
        <button
          onClick={aoFechar}
          className="mt-5 rounded-full border border-purple-400 px-5 py-1 text-sm transition-colors duration-200 hover:bg-purple-200 dark:hover:bg-purple-800"
        >
          Fechar
        </button>
      </div>
    </div>
  )
}

export default ModalAdocao