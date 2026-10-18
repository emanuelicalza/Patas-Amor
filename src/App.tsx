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
      </main>
    </div>
  );
}

export default App;