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
        className="flex min-h-screen items-center justify-center px-6 pt-24"
      >
        <div className="grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
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

          <div className="hidden lg:block">
            <div className="border border-white/10 bg-white/[0.02] font-mono text-sm backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <span className="text-zinc-500">
                  system.profile
                </span>

                <span className="text-xs text-zinc-600">
                  v1.0
                </span>
              </div>

              <div className="space-y-5 p-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-600">
                    Developer
                  </p>

                  <p className="mt-1 text-zinc-300">
                    Henrique
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-600">
                    Focus
                  </p>

                  <p className="mt-1 text-zinc-300">
                    Systems & Automation
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-600">
                    Environment
                  </p>

                  <p className="mt-1 text-zinc-300">
                    Building real solutions
                  </p>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <div className="flex items-center gap-3 text-xs text-zinc-500">
                    <span className="h-2 w-2 rounded-full bg-blue-400"></span>

                    WORKSPACE ACTIVE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projetos"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-16">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-blue-400">
              02 / Projetos
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Projetos em destaque
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Soluções desenvolvidas para automatizar processos, reduzir tarefas
              repetitivas e transformar necessidades reais em sistemas
              funcionais.
            </p>
          </div>

          <article className="overflow-hidden border border-white/10 bg-white/[0.02]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Case Study / 001
                  </span>

                  <span className="font-mono text-xs text-blue-400">
                    ACTIVE
                  </span>
                </div>

                <h3 className="mt-10 text-4xl font-bold tracking-tight">
                  AUTO AGI
                </h3>

                <p className="mt-3 font-mono text-xs uppercase tracking-wider text-zinc-600">
                  Projeto profissional · Quântico Digital
                </p>

                <p className="mt-5 leading-7 text-zinc-400">
                  Aplicação desktop criada para automatizar processos de
                  documentos, integrando leitura de arquivos, tratamento de
                  dados e automação de tarefas em sistema web.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">
                    Python
                  </span>

                  <span className="border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">
                    Selenium
                  </span>

                  <span className="border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">
                    Tkinter
                  </span>

                  <span className="border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">
                    Pandas
                  </span>

                  <span className="border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400">
                    OpenPyXL
                  </span>
                </div>

                <div className="mt-10">
                  <a
                    href="/projetos/auto-agi"
                    className="inline-flex items-center border border-zinc-700 px-5 py-3 font-mono text-xs uppercase tracking-wider transition hover:border-blue-400 hover:bg-blue-400 hover:text-black"
                  >
                    Ver Case Study →
                  </a>
                </div>
              </div>

              <div className="p-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                      Problema
                    </p>

                    <p className="mt-3 leading-7 text-zinc-400">
                      Processos manuais e repetitivos envolvendo organização,
                      validação e envio de documentos.
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                      Solução
                    </p>

                    <p className="mt-3 leading-7 text-zinc-400">
                      Desenvolvimento de uma automação desktop capaz de executar
                      o fluxo de documentos com maior padronização e controle.
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                      Interface
                    </p>

                    <p className="mt-3 leading-7 text-zinc-400">
                      Aplicação com interface gráfica para iniciar, acompanhar e
                      controlar a execução da automação.
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                      Objetivo
                    </p>

                    <p className="mt-3 leading-7 text-zinc-400">
                      Reduzir trabalho manual, minimizar erros operacionais e
                      tornar o processo mais eficiente.
                    </p>
                  </div>
                </div>

                <div className="mt-10 border-t border-white/10 pt-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="font-mono text-xs text-zinc-500">
                      status:// stable_validated
                    </span>

                    <span className="flex items-center gap-2 font-mono text-xs text-green-400">
                      <span className="h-2 w-2 rounded-full bg-green-400"></span>

                      VERSION 2.1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}