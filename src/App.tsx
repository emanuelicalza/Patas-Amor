import Cabecalho from "./components/cabecalho";
import CartaoAnimal from "./components/cartaoAnimal";
import CartaoDica from "./components/cartaoDica";
import Rodape from "./components/rodape";
import { animais } from "./data/animais";
import { dicas } from "./data/dicas";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Cabecalho />

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

          <div className="mt-3 flex flex-wrap gap-2">
            {/* Botão todos */}
            <button className="rounded-full border border-purple-300 bg-purple-200 px-3 py-1 text-sm">
              Todos
            </button>
            {/* Botão cachorros */}
            <button className="rounded-full border border-purple-300 px-3 py-1 text-sm">
              Cachorros
            </button>
            {/* Botão gatos */}
            <button className="rounded-full border border-purple-300 px-3 py-1 text-sm">
              Gatos
            </button>
            {/* Botão outros */}
            <button className="rounded-full border border-purple-300 px-3 py-1 text-sm">
              Outros
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {animais.map((animal) => (
              <CartaoAnimal key={animal.id} animal={animal} />
            ))}
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}

export default App;
