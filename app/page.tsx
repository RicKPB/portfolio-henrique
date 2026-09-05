export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-6xl">
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.3em] text-zinc-500">
            Portfolio / 2026
          </p>

          <h1 className="text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl">
            HENRIQUE<span className="text-zinc-500">_</span>
          </h1>

          <div className="mt-8 space-y-2 font-mono text-lg text-zinc-400 md:text-xl">
            <p>&gt; Software Developer</p>
            <p>&gt; Automation Developer</p>
          </div>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            Desenvolvendo sistemas, automatizando processos e transformando
            problemas reais em soluções através da tecnologia.
          </p>

          <div className="mt-12">
            <a
              href="#projetos"
              className="inline-flex items-center border border-zinc-700 px-6 py-3 font-mono text-sm uppercase tracking-wider transition hover:border-white hover:bg-white hover:text-black"
            >
              Explorar projetos ↓
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}