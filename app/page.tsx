"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen text-white">
      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* LOGO */}
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

          {/* MENU DESKTOP */}
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

          {/* STATUS */}
          <div className="hidden items-center gap-3 font-mono text-xs text-zinc-400 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>

            <span>SYSTEM ONLINE</span>
          </div>

          {/* BOTÃO MOBILE */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center border border-white/10 font-mono text-lg text-zinc-300 transition hover:border-white/30 hover:text-white md:hidden"
            aria-label="Abrir menu"
          >
            {menuOpen ? "×" : "≡"}
          </button>
        </div>

        {/* MENU MOBILE */}
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
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>

                SYSTEM ONLINE
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* =========================================================
          01 / HOME
      ========================================================= */}
      <section
        id="home"
        className="flex min-h-screen items-center justify-center px-6 pt-24"
      >
        <div className="grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.4fr_0.6fr]">
          {/* APRESENTAÇÃO */}
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

          {/* SYSTEM PROFILE */}
          <div className="hidden lg:block">
            <div className="border border-white/10 bg-white/[0.02] font-mono text-sm backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <span className="text-zinc-500">system.profile</span>
                <span className="text-xs text-zinc-600">v1.0</span>
              </div>

              <div className="space-y-5 p-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-600">
                    Developer
                  </p>
                  <p className="mt-1 text-zinc-300">Henrique</p>
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
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    WORKSPACE ACTIVE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          02 / PROJETOS
      ========================================================= */}
      <section
        id="projetos"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto w-full max-w-6xl">
          {/* CABEÇALHO */}
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

          {/* AUTO AGI */}
          <article className="overflow-hidden border border-white/10 bg-white/[0.02]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              {/* INFORMAÇÕES PRINCIPAIS */}
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
                  {["Python", "Selenium", "Tkinter", "Pandas", "OpenPyXL"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="border border-white/10 px-3 py-1 font-mono text-xs text-zinc-400"
                      >
                        {tech}
                      </span>
                    ),
                  )}
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

              {/* DETALHES */}
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
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                      VERSION 2.1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =========================================================
          03 / SOBRE
      ========================================================= */}
      <section
        id="sobre"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            {/* APRESENTAÇÃO */}
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-blue-400">
                03 / Sobre
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                Programação começou como estudo.
                <span className="block text-zinc-500">
                  Automação transformou isso em propósito.
                </span>
              </h2>

              <div className="mt-8 space-y-5 leading-7 text-zinc-400">
                <p>
                  Iniciei minha trajetória em tecnologia em 2023, quando
                  comecei a graduação em Análise e Desenvolvimento de Sistemas
                  e tive meu primeiro contato mais estruturado com
                  desenvolvimento de software.
                </p>

                <p>
                  Depois de explorar diferentes áreas da programação, encontrei
                  na automação uma forma de unir desenvolvimento de software à
                  resolução de problemas reais.
                </p>

                <p>
                  Hoje, meu foco está na criação de sistemas e automações que
                  reduzam processos repetitivos, aumentem a confiabilidade das
                  operações e transformem necessidades do dia a dia em soluções
                  funcionais.
                </p>
              </div>

              {/* DEVELOPER PROFILE */}
              <div className="mt-10 border border-white/10 bg-white/[0.02] font-mono text-sm">
                <div className="border-b border-white/10 px-5 py-3 text-zinc-500">
                  developer.profile
                </div>

                <div className="space-y-4 p-5">
                  <div className="flex items-center justify-between gap-6">
                    <span className="text-zinc-600">FOCUS</span>
                    <span className="text-right text-zinc-300">
                      Systems & Automation
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-6">
                    <span className="text-zinc-600">LANGUAGE</span>
                    <span className="text-right text-zinc-300">Python</span>
                  </div>

                  <div className="flex items-center justify-between gap-6">
                    <span className="text-zinc-600">APPROACH</span>
                    <span className="text-right text-zinc-300">
                      Learning by Building
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-6">
                    <span className="text-zinc-600">STATUS</span>

                    <span className="flex items-center gap-2 text-green-400">
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                      KEEP LEARNING
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* TIMELINE */}
            <div>
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
                <span className="text-zinc-500">journey.log</span>
                <span className="text-zinc-600">2023 — PRESENT</span>
              </div>

              <div className="border-l border-white/10 pl-8">
                {/* 2023 */}
                <div className="relative pb-12">
                  <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border border-blue-400 bg-[#050505]" />

                  <p className="font-mono text-sm text-blue-400">2023</p>

                  <h3 className="mt-2 text-xl font-semibold">
                    Primeiros passos em desenvolvimento
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    Início da graduação em Análise e Desenvolvimento de
                    Sistemas, contato com backend, banco de dados e descoberta
                    do Python.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Backend", "Database", "Python"].map((item) => (
                      <span
                        key={item}
                        className="border border-white/10 px-3 py-1 font-mono text-xs text-zinc-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2024 - EXPLORAÇÃO */}
                <div className="relative pb-12">
                  <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border border-zinc-600 bg-[#050505]" />

                  <p className="font-mono text-sm text-zinc-500">2024</p>

                  <h3 className="mt-2 text-xl font-semibold">
                    Explorando diferentes caminhos
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    Período de experimentação com desenvolvimento de jogos e
                    Godot, buscando entender diferentes possibilidades dentro
                    da programação.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Godot", "Game Development"].map((item) => (
                      <span
                        key={item}
                        className="border border-white/10 px-3 py-1 font-mono text-xs text-zinc-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2024 - AUTOMAÇÃO */}
                <div className="relative pb-12">
                  <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border border-blue-400 bg-[#050505]" />

                  <p className="font-mono text-sm text-blue-400">2024</p>

                  <h3 className="mt-2 text-xl font-semibold">
                    Descoberta da automação
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    Durante minha experiência na Quântico Digital, identifiquei
                    processos repetitivos que poderiam ser automatizados. Foi
                    nesse momento que comecei a estudar automação com Python e
                    PyAutoGUI e desenvolvi a primeira versão do AUTO AGI.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Python", "PyAutoGUI", "Automation"].map((item) => (
                      <span
                        key={item}
                        className="border border-white/10 px-3 py-1 font-mono text-xs text-zinc-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2025 */}
                <div className="relative pb-12">
                  <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border border-blue-400 bg-[#050505]" />

                  <p className="font-mono text-sm text-blue-400">2025</p>

                  <h3 className="mt-2 text-xl font-semibold">
                    Evolução técnica
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    A evolução do AUTO AGI trouxe novos desafios e levou à
                    migração da automação para Selenium, tornando o projeto mais
                    robusto e menos dependente da interface geral do
                    computador.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Selenium", "Pandas", "Web Automation"].map((item) => (
                      <span
                        key={item}
                        className="border border-white/10 px-3 py-1 font-mono text-xs text-zinc-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2026 */}
                <div className="relative">
                  <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border border-green-400 bg-[#050505]" />

                  <p className="font-mono text-sm text-green-400">
                    2026 / NOW
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    Construindo sistemas
                  </h3>

                  <p className="mt-3 leading-7 text-zinc-400">
                    Continuidade dos estudos através da prática, evolução do
                    AUTO AGI para uma aplicação desktop mais completa e
                    desenvolvimento de novos sistemas que serão incorporados ao
                    portfólio conforme forem finalizados.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="border border-white/10 px-3 py-1 font-mono text-xs text-zinc-500">
                      Desktop Apps
                    </span>

                    <span className="border border-white/10 px-3 py-1 font-mono text-xs text-zinc-500">
                      Software Development
                    </span>

                    <span className="border border-white/10 px-3 py-1 font-mono text-xs text-green-400">
                      NEXT_
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 / TECNOLOGIAS
      ========================================================= */}
      <section
        id="tecnologias"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto w-full max-w-6xl">
          {/* CABEÇALHO */}
          <div className="mb-16">
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-blue-400">
              04 / Tecnologias
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Ferramentas da minha trajetória
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
              Tecnologias que fazem parte da minha trajetória de
              desenvolvimento, separadas entre ferramentas utilizadas na
              prática, tecnologias em aprendizado e áreas que explorei durante
              meus estudos.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            {/* CORE STACK */}
            <div className="border border-white/10 bg-white/[0.02]">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400">
                    Core Stack
                  </p>

                  <p className="mt-1 font-mono text-xs text-zinc-600">
                    tech.stack / in_use
                  </p>
                </div>

                <span className="flex items-center gap-2 font-mono text-xs text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  IN USE
                </span>
              </div>

              <div className="grid sm:grid-cols-2">
                {/* PYTHON */}
                <div className="border-b border-white/10 p-6 sm:border-r">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs text-zinc-600">01</p>
                      <h3 className="mt-2 text-xl font-semibold">Python</h3>
                    </div>

                    <span className="font-mono text-xs text-blue-400">
                      CORE
                    </span>
                  </div>

                  <p className="mt-4 leading-7 text-zinc-400">
                    Linguagem principal utilizada no desenvolvimento de
                    automações, aplicações desktop e processamento de dados.
                  </p>
                </div>

                {/* SELENIUM */}
                <div className="border-b border-white/10 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs text-zinc-600">02</p>
                      <h3 className="mt-2 text-xl font-semibold">Selenium</h3>
                    </div>

                    <span className="font-mono text-xs text-blue-400">
                      AUTOMATION
                    </span>
                  </div>

                  <p className="mt-4 leading-7 text-zinc-400">
                    Automação de sistemas web, interação com navegadores e
                    construção de fluxos automatizados.
                  </p>
                </div>

                {/* TKINTER */}
                <div className="border-b border-white/10 p-6 sm:border-r">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs text-zinc-600">03</p>
                      <h3 className="mt-2 text-xl font-semibold">Tkinter</h3>
                    </div>

                    <span className="font-mono text-xs text-zinc-500">
                      DESKTOP
                    </span>
                  </div>

                  <p className="mt-4 leading-7 text-zinc-400">
                    Desenvolvimento de interfaces gráficas para aplicações
                    desktop e ferramentas de automação.
                  </p>
                </div>

                {/* PANDAS */}
                <div className="border-b border-white/10 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs text-zinc-600">04</p>
                      <h3 className="mt-2 text-xl font-semibold">Pandas</h3>
                    </div>

                    <span className="font-mono text-xs text-zinc-500">
                      DATA
                    </span>
                  </div>

                  <p className="mt-4 leading-7 text-zinc-400">
                    Manipulação de dados, geração de relatórios e processamento
                    de informações estruturadas.
                  </p>
                </div>

                {/* OPENPYXL */}
                <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs text-zinc-600">05</p>
                      <h3 className="mt-2 text-xl font-semibold">OpenPyXL</h3>
                    </div>

                    <span className="font-mono text-xs text-zinc-500">
                      EXCEL
                    </span>
                  </div>

                  <p className="mt-4 leading-7 text-zinc-400">
                    Leitura, criação e manipulação de planilhas Excel dentro de
                    soluções desenvolvidas em Python.
                  </p>
                </div>

                {/* PYAUTOGUI */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs text-zinc-600">06</p>
                      <h3 className="mt-2 text-xl font-semibold">PyAutoGUI</h3>
                    </div>

                    <span className="font-mono text-xs text-zinc-500">
                      RPA
                    </span>
                  </div>

                  <p className="mt-4 leading-7 text-zinc-400">
                    Automação de interações com interfaces desktop e parte
                    importante dos meus primeiros projetos de automação.
                  </p>
                </div>
              </div>

              {/* VERSIONAMENTO */}
              <div className="border-t border-white/10 px-6 py-5">
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-zinc-600">
                  Version Control
                </p>

                <div className="flex flex-wrap gap-3">
                  <span className="border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-sm text-zinc-300">
                    Git
                  </span>

                  <span className="border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-sm text-zinc-300">
                    GitHub
                  </span>
                </div>
              </div>
            </div>

            {/* PAINEL LATERAL */}
            <div className="space-y-6">
              {/* LEARNING */}
              <div className="border border-white/10 bg-white/[0.02]">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400">
                      Learning
                    </p>

                    <p className="mt-1 font-mono text-xs text-zinc-600">
                      current.process
                    </p>
                  </div>

                  <span className="font-mono text-xs text-blue-400">
                    ACTIVE
                  </span>
                </div>

                <div className="space-y-3 p-5">
                  {["Next.js", "React", "TypeScript", "Tailwind CSS"].map(
                    (tech, index, array) => (
                      <div
                        key={tech}
                        className={`flex items-center justify-between ${
                          index !== array.length - 1
                            ? "border-b border-white/10 pb-3"
                            : ""
                        }`}
                      >
                        <span className="text-zinc-300">{tech}</span>

                        <span className="font-mono text-xs text-zinc-600">
                          LEARNING
                        </span>
                      </div>
                    ),
                  )}
                </div>

                <div className="border-t border-white/10 px-5 py-4">
                  <p className="font-mono text-xs leading-6 text-zinc-600">
                    // tecnologias utilizadas atualmente na construção deste
                    portfólio
                  </p>
                </div>
              </div>

              {/* EXPLORED */}
              <div className="border border-white/10 bg-white/[0.02]">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                      Explored
                    </p>

                    <p className="mt-1 font-mono text-xs text-zinc-600">
                      journey.history
                    </p>
                  </div>

                  <span className="font-mono text-xs text-zinc-600">
                    HISTORY
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 p-5">
                  {[
                    "Godot",
                    "Backend",
                    "Banco de Dados",
                    "Data Science",
                  ].map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 px-3 py-2 font-mono text-xs text-zinc-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="border-t border-white/10 px-5 py-4">
                  <p className="text-sm leading-6 text-zinc-500">
                    Áreas que fizeram parte da minha exploração inicial em
                    desenvolvimento e ajudaram na descoberta do caminho que
                    sigo atualmente.
                  </p>
                </div>
              </div>

              {/* LEARNING STATUS */}
              <div className="border border-white/10 bg-white/[0.02] p-5 font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-600">
                    learning.status
                  </span>

                  <span className="flex items-center gap-2 text-xs text-green-400">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    RUNNING
                  </span>
                </div>

                <p className="mt-5 text-sm leading-6 text-zinc-400">
                  &gt; aprendizado contínuo através de projetos reais_
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}