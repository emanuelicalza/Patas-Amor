import { useState } from "react";
import Cabecalho from "./components/cabecalho";
import Rodape from "./components/rodape";
import CartaoDica from "./components/cartaoDica";
import CartaoAnimal from "./components/cartaoAnimal";
import FiltroAnimais from "./components/filtroAnimais";
import { dicas } from "./data/dicas";
import { animais } from "./data/animais";
import type { Filtro } from "./data/tipos";

function App() {
  const [filtro, setFiltro] = useState<Filtro>("todos");

  const animaisVisiveis =
    filtro === "todos"
      ? animais
      : animais.filter((animal) => animal.especie === filtro);

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
          <FiltroAnimais
            filtroAtual={filtro}
            aoMudar={setFiltro}
            quantidade={animaisVisiveis.length}
          />
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {animaisVisiveis.map((animal) => (
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
