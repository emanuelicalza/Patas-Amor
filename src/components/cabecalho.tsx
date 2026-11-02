type Props = {
  escuro: boolean
  aoAlternar: () => void
}

function Cabecalho({ escuro, aoAlternar }: Props) {
  return (
    <header className="border-b border-purple-300 bg-purple-200 py-2 shadow-sm">
      <div className="relative mx-auto max-w-5xl px-4">
        <h1 className="text-center text-lg font-semibold">
          🐾 Patas &amp; Amor - Adoção de Animais
        </h1>

        <div className="mt-1 flex justify-end md:absolute md:right-4 md:top-1/2 md:mt-0 md:-translate-y-1/2">
          <button
            type="button"
            role="switch"
            aria-checked={escuro}
            aria-label="Modo escuro"
            onClick={aoAlternar}
            className={`relative h-8 w-16 rounded-full border border-purple-400 transition-colors duration-300 ${
              escuro ? 'bg-purple-700' : 'bg-purple-300'
            }`}
          >
            <span
              className={`absolute top-1/2 -translate-y-1/2 text-sm ${
                escuro ? 'left-2' : 'right-2'
              }`}
            >
              {escuro ? '🌙' : '☀️'}
            </span>
            <span
              className={`absolute left-[3px] top-[3px] h-6 w-6 rounded-full bg-white shadow transition-transform duration-300 ${
                escuro ? 'translate-x-8' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Cabecalho