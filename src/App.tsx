function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-purple-300 bg-purple-200 py-2 text-center text-lg font-semibold shadow-sm">
        🐾 Patas &amp; Amor - Adoção de Animais
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-16">
        <section className="mt-6">
          <h2 className="text-xl font-semibold">• Dicas de Cuidados Diários</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Alimentação */}
            <article className="rounded-xl border border-purple-200 bg-purple-50 p-4">
              <h3 className="flex items-center gap-2 font-semibold">
                <span className="text-xl">❤️</span>
                Alimentação
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                Proporcionar uma alimentação balanceada e adequada para a espécie e idade do animal é fundamental para sua saúde e bem-estar.
              </p>
            </article>

            {/* Higiene */}
            <article className="rounded-xl border border-purple-200 bg-purple-50 p-4">
              <h3 className="flex items-center gap-2 font-semibold">
                <span className="text-xl">🐾</span>
                Higiene
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                Manter o animal limpo e saudável é essencial para prevenir doenças e promover seu bem-estar.
              </p>
            </article>

            {/* Brincadeiras */}
            <article className="rounded-xl border border-purple-200 bg-purple-50 p-4">
              <h3 className="flex items-center gap-2 font-semibold">
                <span className="text-xl">⚽</span>
                Brincadeiras
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                Proporcionar brincadeiras e atividades físicas é importante para o bem-estar emocional e físico do animal.
              </p>
            </article>
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
            {/* Neguinho - cachorro */}
            <article className="flex flex-col rounded-xl border border-purple-200 bg-purple-50 p-4">
              <img
                src="/animais/neguinho.png"
                alt="Foto do Neguinho"
                className="aspect-[3/2] w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-semibold">Neguinho</h3>
              <p className="flex-1 text-sm text-gray-700">
                Extremamente leal e companheiro, adora receber carinho e se dá muito bem com crianças.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm">3 anos</span>
                <button className="rounded-full border border-purple-400 px-4 py-1 text-sm hover:bg-purple-200">
                  Adotar
                </button>
              </div>
            </article>

            {/* Luna - gato */}
            <article className="flex flex-col rounded-xl border border-purple-200 bg-purple-50 p-4">
              <img
                src="/animais/luna.png"
                alt="Foto da Luna"
                className="aspect-[3/2] w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-semibold">Luna</h3>
              <p className="flex-1 text-sm text-gray-700">
                Elegante, silenciosa e muito afetuosa, prefere ambientes calmos e rotina tranquila.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm">1 ano</span>
                <button className="rounded-full border border-purple-400 px-4 py-1 text-sm hover:bg-purple-200">
                  Adotar
                </button>
              </div>
            </article>

            {/* Piu-Piu - passarinho */}
            <article className="flex flex-col rounded-xl border border-purple-200 bg-purple-50 p-4">
              <img
                src="/animais/piu-piu.png"
                alt="Foto da Piu-Piu"
                className="aspect-[3/2] w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-semibold">Piu-Piu</h3>
              <p className="flex-1 text-sm text-gray-700">
                Muito mansa, alegre e interativa, adora assobiar músicas e ficar no ombro das pessoas.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm">1 ano</span>
                <button className="rounded-full border border-purple-400 px-4 py-1 text-sm hover:bg-purple-200">
                  Adotar
                </button>
              </div>
            </article>

            {/* Paçoca - cachorro */}
            <article className="flex flex-col rounded-xl border border-purple-200 bg-purple-50 p-4">
              <img
                src="/animais/paçoca.png"
                alt="Foto da Paçoca"
                className="aspect-[3/2] w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-semibold">Paçoca</h3>
              <p className="flex-1 text-sm text-gray-700">
                O clássico vira-lata caramelo cheio de energia, brincalhão e muito sociável com todos.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm">1 ano e 6 meses</span>
                <button className="rounded-full border border-purple-400 px-4 py-1 text-sm hover:bg-purple-200">
                  Adotar
                </button>
              </div>
            </article>

            {/* Simba - gato */}
            <article className="flex flex-col rounded-xl border border-purple-200 bg-purple-50 p-4">
              <img
                src="/animais/simba.png"
                alt="Foto do Simba"
                className="aspect-[3/2] w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-semibold">Simba</h3>
              <p className="flex-1 text-sm text-gray-700">
                Gato laranja extremamente sociável, calmo e que adora pedir carinho com cabeçadas.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm">4 anos</span>
                <button className="rounded-full border border-purple-400 px-4 py-1 text-sm hover:bg-purple-200">
                  Adotar
                </button>
              </div>
            </article>

            {/* Thor - cachorro */}
            <article className="flex flex-col rounded-xl border border-purple-200 bg-purple-50 p-4">
              <img
                src="/animais/thor.png"
                alt="Foto do Thor"
                className="aspect-[3/2] w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-semibold">Thor</h3>
              <p className="flex-1 text-sm text-gray-700">
                Calmo, protetor e obediente, é um gigante gentil que adora sonecas e carinho.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm">5 anos</span>
                <button className="rounded-full border border-purple-400 px-4 py-1 text-sm hover:bg-purple-200">
                  Adotar
                </button>
              </div>
            </article>

            {/* Amora - gato */}
            <article className="flex flex-col rounded-xl border border-purple-200 bg-purple-50 p-4">
              <img
                src="/animais/amora.png"
                alt="Foto da Amora"
                className="aspect-[3/2] w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-semibold">Amora</h3>
              <p className="flex-1 text-sm text-gray-700">
                Filhotinha tricolor super carinhosa, mansa e brincalhona, que ronrona só de chegar perto.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm">3 meses</span>
                <button className="rounded-full border border-purple-400 px-4 py-1 text-sm hover:bg-purple-200">
                  Adotar
                </button>
              </div>
            </article>

            {/* Blue - passarinho */}
            <article className="flex flex-col rounded-xl border border-purple-200 bg-purple-50 p-4">
              <img
                src="/animais/blue.png"
                alt="Foto do Blue"
                className="aspect-[3/2] w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-semibold">Blue</h3>
              <p className="flex-1 text-sm text-gray-700">
                Periquito muito sociável, tagarela e inteligente, que fica super feliz com música.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm">1 ano e 2 meses</span>
                <button className="rounded-full border border-purple-400 px-4 py-1 text-sm hover:bg-purple-200">
                  Adotar
                </button>
              </div>
            </article>

            {/* Bobi - cachorro */}
            <article className="flex flex-col rounded-xl border border-purple-200 bg-purple-50 p-4">
              <img
                src="/animais/bobi.png"
                alt="Foto do Bobi"
                className="aspect-[3/2] w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-semibold">Bobi</h3>
              <p className="flex-1 text-sm text-gray-700">
                Filhote muito dócil, companheiro e esperto, que adora brincar no quintal e pedir colo.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm">6 meses</span>
                <button className="rounded-full border border-purple-400 px-4 py-1 text-sm hover:bg-purple-200">
                  Adotar
                </button>
              </div>
            </article>

            {/* Frajola - gato */}
            <article className="flex flex-col rounded-xl border border-purple-200 bg-purple-50 p-4">
              <img
                src="/animais/frajola.png"
                alt="Foto do Frajola"
                className="aspect-[3/2] w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-semibold">Frajola</h3>
              <p className="flex-1 text-sm text-gray-700">
                Curioso, ágil e muito divertido, adora brincar e dormir encostadinho quando cansa.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm">8 meses</span>
                <button className="rounded-full border border-purple-400 px-4 py-1 text-sm hover:bg-purple-200">
                  Adotar
                </button>
              </div>
            </article>

            {/* Pipoca - cachorro */}
            <article className="flex flex-col rounded-xl border border-purple-200 bg-purple-50 p-4">
              <img
                src="/animais/pipoca.png"
                alt="Foto da Pipoca"
                className="aspect-[3/2] w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-semibold">Pipoca</h3>
              <p className="flex-1 text-sm text-gray-700">
                Filhote curiosa, esperta e carinhosa, perfeita para quem mora em apartamento.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm">4 meses</span>
                <button className="rounded-full border border-purple-400 px-4 py-1 text-sm hover:bg-purple-200">
                  Adotar
                </button>
              </div>
            </article>

            {/* Miminha - gato */}
            <article className="flex flex-col rounded-xl border border-purple-200 bg-purple-50 p-4">
              <img
                src="/animais/miminha.png"
                alt="Foto da Miminha"
                className="aspect-[3/2] w-full rounded-lg object-cover"
              />
              <h3 className="mt-3 font-semibold">Miminha</h3>
              <p className="flex-1 text-sm text-gray-700">
                Muito meiga, tranquila e apegada, adora ronronar no colo e tomar sol na janela.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm">2 anos</span>
                <button className="rounded-full border border-purple-400 px-4 py-1 text-sm hover:bg-purple-200">
                  Adotar
                </button>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;