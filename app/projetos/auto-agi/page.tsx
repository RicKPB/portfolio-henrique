import Image from "next/image";
import Link from "next/link";

export default function AutoAgiPage() {
  return (
    <main className="min-h-screen text-white">
      <section className="px-6 pb-24 pt-32">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-10">
            <Link
              href="/"
              className="font-mono text-sm text-zinc-500 transition hover:text-white"
            >
              ← VOLTAR AO PORTFÓLIO
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.3em] text-blue-400">
                Case Study / 001
              </p>

              <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                AUTO AGI
                <span className="text-zinc-600"> 2.1</span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
                Aplicação desktop desenvolvida para automatizar processos
                documentais repetitivos em ambiente corporativo, integrando
                processamento de arquivos, validações e automação web.
              </p>
            </div>

            <div className="border border-white/10 bg-white/[0.02] font-mono text-sm">
              <div className="border-b border-white/10 px-5 py-3 text-zinc-500">
                project.info
              </div>

              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between gap-6">
                  <span className="text-zinc-600">CLIENT</span>
                  <span className="text-right text-zinc-300">
                    Quântico Digital
                  </span>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <span className="text-zinc-600">TYPE</span>
                  <span className="text-right text-zinc-300">
                    Desktop Automation
                  </span>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <span className="text-zinc-600">PLATFORM</span>
                  <span className="text-right text-zinc-300">Windows</span>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <span className="text-zinc-600">YEAR</span>
                  <span className="text-right text-zinc-300">2026</span>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <span className="text-zinc-600">STATUS</span>

                  <span className="flex items-center gap-2 text-green-400">
                    <span className="h-2 w-2 rounded-full bg-green-400"></span>
                    Stable / Validated
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 overflow-hidden border border-white/10 bg-white/[0.02] p-2">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src="/projects/auto-agi/auto-agi-interface.png"
                alt="Interface principal do AUTO AGI"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.3em] text-blue-400">
              01 / Visão geral
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Automação construída para um processo real.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              O AUTO AGI é uma aplicação Windows desenvolvida para a Quântico
              Digital com o objetivo de apoiar a automação de processos
              relacionados ao tratamento e processamento de documentos.
            </p>

            <p>
              A solução centraliza o controle da execução em uma interface
              desktop, realiza validações antes de operações importantes,
              acompanha o progresso do processamento e registra informações de
              execução para diagnóstico e acompanhamento.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-blue-400">
            02 / Problema & Solução
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="border border-white/10 bg-white/[0.02] p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                Problema
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Processos manuais e repetitivos
              </h3>

              <p className="mt-5 leading-7 text-zinc-400">
                O fluxo operacional envolvia etapas repetitivas de organização,
                validação, processamento e envio de documentos, aumentando a
                quantidade de operações manuais necessárias durante a rotina.
              </p>
            </div>

            <div className="border border-white/10 bg-white/[0.02] p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
                Solução
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Uma aplicação desktop dedicada
              </h3>

              <p className="mt-5 leading-7 text-zinc-400">
                Foi desenvolvida uma aplicação capaz de coordenar o
                processamento dos arquivos, executar validações, automatizar
                etapas web e registrar os resultados de cada execução.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-blue-400">
            03 / Tecnologias
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Stack utilizada
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Python",
              "Tkinter",
              "Selenium",
              "WebDriver Manager",
              "Pandas",
              "OpenPyXL",
              "Pillow",
              "PyInstaller",
            ].map((technology) => (
              <span
                key={technology}
                className="border border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-sm text-zinc-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-blue-400">
            04 / Confiabilidade
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
            A automação precisava ser previsível, controlável e segura.
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {[
              "Validações antes de operações críticas.",
              "Interrupção controlada da execução.",
              "Registro de logs e diagnósticos.",
              "Configuração independente por computador.",
              "Acompanhamento visual do processamento.",
              "Tratamento de falhas durante a execução.",
            ].map((item) => (
              <div
                key={item}
                className="bg-[#050505] p-6 text-zinc-400"
              >
                <span className="mr-3 font-mono text-blue-400">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-blue-400">
            05 / Evolução
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Evolução do AUTO AGI
          </h2>

          <div className="mt-12 border-l border-white/10 pl-8">
            {[
              {
                title: "Automação inicial",
                text: "Estruturação do fluxo principal de processamento de documentos.",
              },
              {
                title: "Interface desktop",
                text: "Criação de uma interface para controle e acompanhamento da automação.",
              },
              {
                title: "Confiabilidade operacional",
                text: "Inclusão de validações, tratamento de erros e mecanismos de parada controlada.",
              },
              {
                title: "Configuração por computador",
                text: "Adaptação da aplicação para diferentes ambientes e configurações de diretórios.",
              },
              {
                title: "AUTO AGI 2.1",
                text: "Versão estável, validada e preparada para utilização em ambiente profissional.",
              },
            ].map((stage, index) => (
              <div
                key={stage.title}
                className="relative pb-12 last:pb-0"
              >
                <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full border border-blue-400 bg-[#050505]"></span>

                <p className="font-mono text-xs text-zinc-600">
                  0{index + 1}
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {stage.title}
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
                  {stage.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-sm text-zinc-600">
              end_of_case_study
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              AUTO AGI 2.1
            </h2>
          </div>

          <Link
            href="/#projetos"
            className="inline-flex w-fit border border-zinc-700 px-6 py-3 font-mono text-sm uppercase tracking-wider transition hover:border-white hover:bg-white hover:text-black"
          >
            ← Voltar aos projetos
          </Link>
        </div>
      </section>
    </main>
  );
}