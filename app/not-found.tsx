import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-white">
      <div className="w-full max-w-3xl">
        <div className="border border-white/10 bg-white/[0.02]">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <span className="font-mono text-xs text-zinc-500">
              system.error
            </span>

            <span className="font-mono text-xs text-red-400">
              ERROR 404
            </span>
          </div>

          <div className="px-6 py-14 sm:px-10 sm:py-20">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-blue-400">
              404 / NOT FOUND
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              Página não encontrada.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              O endereço acessado não existe ou pode ter sido removido.
              Retorne ao portfólio para continuar navegando.
            </p>

            <div className="mt-10">
              <Link
                href="/"
                className="inline-flex border border-zinc-700 px-6 py-3 font-mono text-sm uppercase tracking-wider transition-colors hover:border-white hover:bg-white hover:text-black"
              >
                ← Voltar ao portfólio
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 px-6 py-4 font-mono text-xs">
            <span className="text-zinc-600">&lt; H.DEV /&gt;</span>
            <span className="text-zinc-700">PORTFOLIO / 2026</span>
          </div>
        </div>
      </div>
    </main>
  );
}