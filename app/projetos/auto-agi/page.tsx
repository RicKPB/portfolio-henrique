"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const revealUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const revealLeft = {
  initial: { opacity: 0, x: -24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

const revealRight = {
  initial: { opacity: 0, x: 24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

const technologies = [
  "Python",
  "Selenium",
  "Tkinter",
  "Pandas",
  "OpenPyXL",
  "WebDriver Manager",
  "PyInstaller",
];

const reliabilityItems = [
  {
    title: "Validação antes de operações críticas",
    text: "O fluxo inclui verificações antes de etapas sensíveis, reduzindo o risco de ações indevidas durante o processamento.",
  },
  {
    title: "Interrupção controlada",
    text: "Quando uma parada é solicitada, a aplicação conclui o documento em processamento antes de encerrar o lote.",
  },
  {
    title: "Logs e diagnóstico",
    text: "A execução registra informações suficientes para acompanhar resultados, pendências e falhas e facilitar análises posteriores.",
  },
  {
    title: "Configuração por computador",
    text: "Os diretórios utilizados pela aplicação podem ser configurados de acordo com o ambiente de cada máquina.",
  },
];

const challenges = [
  {
    code: "01",
    title: "Automação de interface web dinâmica",
    text: "Construir um fluxo confiável em uma aplicação web com estados, carregamentos e elementos que mudam durante a execução.",
  },
  {
    code: "02",
    title: "Controle do estado da execução",
    text: "Manter a interface, os contadores, o processamento e as solicitações de parada sincronizados durante todo o lote.",
  },
  {
    code: "03",
    title: "Compatibilidade entre computadores",
    text: "Adaptar a aplicação a diferentes ambientes Windows, principalmente em relação a diretórios e recursos disponíveis em cada máquina.",
  },
  {
    code: "04",
    title: "Tratamento seguro de documentos",
    text: "Garantir validações antes de etapas críticas e manter rastreabilidade suficiente para identificar sucessos, pendências e falhas.",
  },
];

export default function AutoAgiPage() {
  return (
    <main className="min-h-screen text-white">
      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <header className="border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/#projetos"
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
          </Link>

          <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-zinc-600 sm:block">
            Case Study / 001
          </span>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="mx-auto w-full max-w-6xl">
          <Link
            href="/#projetos"
            className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 transition hover:text-blue-400"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Voltar para projetos
          </Link>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]">
                <span className="text-blue-400">AUTO AGI 2.1</span>
                <span className="text-zinc-700">/</span>
                <span className="text-zinc-500">Automação Desktop</span>
                <span className="text-zinc-700">/</span>
                <span className="text-zinc-500">2026</span>
              </div>

              <h1 className="mt-7 text-5xl font-bold tracking-[-0.04em] sm:text-6xl md:text-7xl">
                AUTO AGI
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl md:leading-9">
                O AUTO AGI é uma aplicação desktop desenvolvida para a
                Quântico Digital com o objetivo de automatizar processos
                relacionados ao tratamento e processamento de documentos em um
                ambiente corporativo de gestão documental.
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Python", "Selenium", "Tkinter", "Pandas", "OpenPyXL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-zinc-400"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.35, ease: "easeOut" }}
              className="border border-white/10 bg-white/[0.02] font-mono text-xs"
            >
              <div className="border-b border-white/10 px-5 py-3 text-zinc-600">
                project.meta
              </div>

              <div className="divide-y divide-white/10">
                {[
                  ["PROJETO PARA", "Quântico Digital"],
                  ["STATUS", "Stable / Validated"],
                  ["PLATFORM", "Windows"],
                  ["CATEGORY", "Process Automation"],
                  ["INTEGRATION", "Document Management Platform"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-zinc-600">{label}</span>
                    <span
                      className={
                        label === "STATUS"
                          ? "text-green-400"
                          : "text-zinc-300 sm:text-right"
                      }
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SCREENSHOT
      ========================================================= */}
      <section className="border-y border-white/10 px-6 py-16 md:py-20">
        <motion.div
          {...revealUp}
          className="mx-auto w-full max-w-6xl"
        >
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400">
                Interface
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Aplicação desktop
              </h2>
            </div>

            <span className="font-mono text-xs text-zinc-600">
              interface.preview
            </span>
          </div>

          <div className="overflow-hidden border border-white/10 bg-black/40 p-2 sm:p-3">
            <Image
              src="/projects/auto-agi/auto-agi-interface.png"
              alt="Interface do AUTO AGI 2.1"
              width={1648}
              height={896}
              priority
              className="h-auto w-full"
            />
          </div>

          <p className="mt-4 max-w-3xl font-mono text-xs leading-6 text-zinc-600">
            Imagem preparada para apresentação pública, sem credenciais,
            caminhos internos ou informações operacionais sensíveis.
          </p>
        </motion.div>
      </section>

      {/* =========================================================
          VISÃO GERAL
      ========================================================= */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.35fr_0.65fr]">
          <motion.div {...revealLeft}>
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-blue-400">
              01 / Visão geral
            </p>
          </motion.div>

          <motion.div {...revealRight}>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Automação construída a partir de uma necessidade real.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-zinc-400 md:text-lg">
              <p>
                O projeto surgiu da necessidade de reduzir atividades manuais e
                repetitivas relacionadas ao processamento de documentos. A
                solução evoluiu para uma aplicação desktop capaz de centralizar
                configuração, processamento, acompanhamento da execução e
                registro dos resultados.
              </p>

              <p>
                A versão 2.1 representa uma etapa estável e validada do
                projeto, preparada para execução em ambiente Windows e
                distribuída como aplicação desktop.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          PROBLEMA + SOLUÇÃO
      ========================================================= */}
      <section className="border-y border-white/10 px-6 py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-6xl gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#050505] p-7 sm:p-9"
          >
            <span className="font-mono text-xs text-zinc-600">problem.log</span>

            <h2 className="mt-8 text-2xl font-semibold">O problema</h2>

            <p className="mt-5 leading-8 text-zinc-400">
              O fluxo exigia tarefas repetitivas de conferência,
              processamento e interação com um sistema web. Além do tempo
              operacional, a repetição aumentava a possibilidade de erros e
              tornava a execução cansativa.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className="bg-[#050505] p-7 sm:p-9"
          >
            <span className="font-mono text-xs text-blue-400">
              solution.output
            </span>

            <h2 className="mt-8 text-2xl font-semibold">A solução</h2>

            <p className="mt-5 leading-8 text-zinc-400">
              O AUTO AGI concentra o fluxo em uma interface desktop e combina
              processamento de dados com automação web. O operador consegue
              configurar o ambiente, iniciar a execução e acompanhar o
              andamento sem precisar executar manualmente cada etapa do
              processo.
            </p>
          </motion.article>
        </div>
      </section>

      {/* =========================================================
          FUNCIONAMENTO
      ========================================================= */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
            <motion.div {...revealLeft}>
              <p className="font-mono text-sm uppercase tracking-[0.25em] text-blue-400">
                02 / Funcionamento
              </p>
            </motion.div>

            <motion.div {...revealRight}>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Um fluxo único para organizar e executar a automação.
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
                Em alto nível, a aplicação recebe as configurações do ambiente,
                prepara os dados necessários, executa validações e conduz a
                automação web enquanto registra o resultado da operação.
              </p>
            </motion.div>
          </div>

          <div className="mt-14 grid overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-px">
            {[
              ["01", "Interface Desktop"],
              ["02", "Processamento"],
              ["03", "Validações"],
              ["04", "Automação Web"],
              ["05", "Resultados"],
            ].map(([number, title], index) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="relative border-b border-white/10 bg-[#050505] p-6 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <span className="font-mono text-xs text-blue-400">{number}</span>
                <p className="mt-8 text-sm font-medium text-zinc-300">{title}</p>

                {index < 4 && (
                  <span className="absolute right-4 top-5 hidden font-mono text-zinc-800 lg:block">
                    →
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TECNOLOGIAS
      ========================================================= */}
      <section className="border-y border-white/10 px-6 py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.35fr_0.65fr]">
          <motion.div {...revealLeft}>
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-blue-400">
              03 / Tecnologias
            </p>
          </motion.div>

          <motion.div {...revealRight}>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Stack utilizada no desenvolvimento.
            </h2>

            <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {technologies.map((technology, index) => (
                <motion.div
                  key={technology}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  className="bg-[#050505] px-5 py-4 font-mono text-sm text-zinc-300 transition-colors duration-300 hover:bg-white/[0.035]"
                >
                  <span className="mr-3 text-blue-400">&gt;</span>
                  {technology}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CONFIABILIDADE
      ========================================================= */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
            <motion.div {...revealLeft}>
              <p className="font-mono text-sm uppercase tracking-[0.25em] text-blue-400">
                04 / Confiabilidade
              </p>
            </motion.div>

            <motion.div {...revealRight}>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Automação não é apenas executar rápido. É saber como o sistema
                se comporta quando algo sai do esperado.
              </h2>
            </motion.div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {reliabilityItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -3 }}
                className="border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.035]"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-xs text-zinc-600">
                    reliability.{String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                </div>

                <h3 className="mt-8 text-lg font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-zinc-400">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          DESAFIOS
      ========================================================= */}
      <section className="border-y border-white/10 px-6 py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
            <motion.div {...revealLeft}>
              <p className="font-mono text-sm uppercase tracking-[0.25em] text-blue-400">
                05 / Desafios técnicos
              </p>
            </motion.div>

            <motion.div {...revealRight}>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Os principais pontos que exigiram evolução técnica do projeto.
              </h2>
            </motion.div>
          </div>

          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {challenges.map((challenge, index) => (
              <motion.article
                key={challenge.code}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                className="grid gap-5 py-8 sm:grid-cols-[70px_0.9fr_1.1fr] sm:items-start"
              >
                <span className="font-mono text-xs text-blue-400">
                  {challenge.code}
                </span>

                <h3 className="text-lg font-semibold">{challenge.title}</h3>

                <p className="leading-7 text-zinc-400">{challenge.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          EVOLUÇÃO
      ========================================================= */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
            <motion.div {...revealLeft}>
              <p className="font-mono text-sm uppercase tracking-[0.25em] text-blue-400">
                06 / Evolução
              </p>
            </motion.div>

            <motion.div {...revealRight}>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                De uma automação inicial a uma aplicação desktop validada.
              </h2>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.14,
                      delayChildren: 0.12,
                    },
                  },
                }}
                className="mt-10 border-l border-white/10 pl-7"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                  }}
                  className="relative pb-10"
                >
                  <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full border border-zinc-500 bg-[#050505]" />
                  <p className="font-mono text-xs text-zinc-500">
                    PRIMEIRAS VERSÕES
                  </p>
                  <p className="mt-3 leading-7 text-zinc-400">
                    O projeto começou como uma solução mais simples para
                    reduzir tarefas manuais repetitivas e foi evoluindo
                    conforme novas limitações e necessidades apareceram.
                  </p>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                  }}
                  className="relative pb-10"
                >
                  <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full border border-blue-400 bg-[#050505]" />
                  <p className="font-mono text-xs text-blue-400">
                    EVOLUÇÃO TÉCNICA
                  </p>
                  <p className="mt-3 leading-7 text-zinc-400">
                    A automação passou a utilizar Selenium e ganhou uma
                    estrutura mais robusta, interface desktop, processamento
                    de dados, configurações e mecanismos de acompanhamento.
                  </p>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                  }}
                  className="relative"
                >
                  <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full border border-green-400 bg-[#050505]" />
                  <p className="font-mono text-xs text-green-400">
                    VERSION 2.1 / 2026
                  </p>
                  <p className="mt-3 leading-7 text-zinc-400">
                    A versão 2.1 foi submetida a testes de funcionamento,
                    robustez, infraestrutura e distribuição e passou a ser
                    utilizada como referência estável do projeto.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL
      ========================================================= */}
      <section className="border-t border-white/10 px-6 py-16">
        <motion.div
          {...revealUp}
          className="mx-auto flex w-full max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-mono text-xs text-zinc-600">case.end</p>
            <p className="mt-2 text-zinc-400">
              AUTO AGI 2.1 · Quântico Digital · 2026
            </p>
          </div>

          <Link
            href="/#projetos"
            className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 transition hover:text-blue-400"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Voltar para projetos
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
