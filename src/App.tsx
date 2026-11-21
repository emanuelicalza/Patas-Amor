import { useState } from 'react'
import Cabecalho from './components/cabecalho'
import Rodape from './components/rodape'
import CartaoDica from './components/cartaoDica'
import CartaoAnimal from './components/cartaoAnimal'
import FiltroAnimais from './components/filtroAnimais'
import ModalAdocao from './components/modalAdocao'
import { dicas } from './data/dicas'
import { useAnimais } from './hooks/useAnimais'
import type { Animal, Filtro } from './data/tipos'

function App() {
  const [filtro, setFiltro] = useState<Filtro>('todos')
  const [escuro, setEscuro] = useState(false)
  const [animalSelecionado, setAnimalSelecionado] = useState<Animal | null>(null)
  const { animais, carregando, erro } = useAnimais()

  const animaisVisiveis =
    filtro === 'todos'
      ? animais
      : animais.filter((animal) => animal.especie === filtro)

  return (
    <div
      className={`min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 ${
        escuro ? 'dark' : ''
      }`}
    >
      <Cabecalho escuro={escuro} aoAlternar={() => setEscuro(!escuro)} />

      <main className="mx-auto max-w-5xl px-4 pb-16">
        <section className="mt-6">
          <h2 className="text-xl font-semibold">• Dicas de Cuidados Diários</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            {dicas.map((dica) => (
              <CartaoDica key={dica.id} dica={dica} />
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">• Conheça os Nossos Amigos</h2>
          <FiltroAnimais
            filtroAtual={filtro}
            aoMudar={setFiltro}
            quantidade={animaisVisiveis.length}
          />

          {carregando && (
            <p className="mt-6 rounded-lg border border-purple-200 bg-purple-50 p-4 text-center text-sm dark:border-purple-800 dark:bg-purple-950">
              Carregando animais...
            </p>
          )}

          {erro && (
            <p
              role="alert"
              className="mt-6 rounded-lg border border-red-300 bg-red-50 p-4 text-center text-sm text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200"
            >
              {erro}
            </p>
          )}

          {!carregando && !erro && (
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {animaisVisiveis.map((animal) => (
                <CartaoAnimal
                  key={animal.id}
                  animal={animal}
                  aoAdotar={setAnimalSelecionado}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {animalSelecionado && (
        <ModalAdocao
          animal={animalSelecionado}
          aoFechar={() => setAnimalSelecionado(null)}
        />
      )}

      <Rodape />
    </div>
  )
}

export default App