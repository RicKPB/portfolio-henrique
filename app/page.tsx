"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-wider"
          >
            <span className="text-zinc-500 transition group-hover:text-white">
              &lt;
            </span>

            <span>
              H<span className="text-blue-400">.</span>DEV
            </span>

            <span className="text-zinc-500 transition group-hover:text-white">
              /&gt;
            </span>
          </a>

          <nav className="hidden items-center gap-8 font-mono text-xs md:flex">
            <a
              href="#home"
              className="text-zinc-400 transition hover:text-white"
            >
              01. HOME
            </a>

            <a
              href="#projetos"
              className="text-zinc-500 transition hover:text-white"
            >
              02. PROJETOS
            </a>

            <a
              href="#sobre"
              className="text-zinc-500 transition hover:text-white"
            >
              03. SOBRE
            </a>

            <a
              href="#tecnologias"
              className="text-zinc-500 transition hover:text-white"
            >
              04. TECNOLOGIAS
            </a>

            <a
              href="#contato"
              className="text-zinc-500 transition hover:text-white"
            >
              05. CONTATO
            </a>
          </nav>

          <div className="hidden items-center gap-3 font-mono text-xs text-zinc-400 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50"></span>

              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
            </span>

            <span>SYSTEM ONLINE</span>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center border border-white/10 font-mono text-lg text-zinc-300 transition hover:border-white/30 hover:text-white md:hidden"
            aria-label="Abrir menu"
          >
            {menuOpen ? "×" : "≡"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-black/90 px-6 py-6 backdrop-blur-xl md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col gap-5 font-mono text-sm">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-400 transition hover:text-white"
              >
                01. HOME
              </a>

              <a
                href="#projetos"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-500 transition hover:text-white"
              >
                02. PROJETOS
              </a>

              <a
                href="#sobre"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-500 transition hover:text-white"
              >
                03. SOBRE
              </a>

              <a
                href="#tecnologias"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-500 transition hover:text-white"
              >
                04. TECNOLOGIAS
              </a>

              <a
                href="#contato"
                onClick={() => setMenuOpen(false)}
                className="text-zinc-500 transition hover:text-white"
              >
                05. CONTATO
              </a>

              <div className="mt-2 flex items-center gap-3 border-t border-white/10 pt-5 text-xs text-zinc-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
                </span>

                SYSTEM ONLINE
              </div>
            </nav>
          </div>
        )}
      </header>

      <section
        id="home"
        className="flex min-h-screen items-center justify-center px-6"
      >
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