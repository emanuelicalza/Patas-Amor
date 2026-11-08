type Props = {
  escuro: boolean
  aoAlternar: () => void
}

function Cabecalho({ escuro, aoAlternar }: Props) {
  return (
    <header className="border-b border-purple-300 bg-purple-200 py-2 shadow-sm dark:border-purple-800 dark:bg-purple-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-1 px-4 md:grid md:grid-cols-[1fr_auto_1fr]">
        <div className="hidden md:block" />

        <h1 className="text-center text-lg font-semibold">
          🐾 Patas &amp; Amor - Adoção de Animais
        </h1>

        <div className="flex w-full justify-end md:w-auto md:justify-self-end">
          <button
            type="button"
            role="switch"
            aria-checked={escuro}
            aria-label="Modo escuro"
            onClick={aoAlternar}
            className={`relative h-8 w-16 shrink-0 rounded-full border border-purple-400 transition-colors duration-300 ${
              escuro ? 'bg-purple-700' : 'bg-purple-300'
            }`}
          >
            <span
              className={`absolute top-[5px] text-sm leading-5 ${
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