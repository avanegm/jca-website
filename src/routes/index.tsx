import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import joao from "@/assets/joao.png";
import { ADDRESS, EMAIL, INSTAGRAM_URL, WHATSAPP_LABEL, WHATSAPP_URL } from "@/lib/contact";
import { ArrowRight, ChevronDown, Instagram, Mail, MessageCircle, MapPin, } from "lucide-react";
import { Quote, Star } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Advogado em Sorocaba e Votorantim | João Carlos Alves" },
      {
        name: "description",
        content:
          "Advocacia para pessoas e empresas em Sorocaba e Votorantim/SP. Orientação jurídica clara, atendimento próximo e acompanhamento estratégico de cada caso.",
      },
      { property: "og:title", content: "Advogado em Sorocaba e Votorantim | João Carlos Alves" },
      {
        property: "og:description",
        content:
          "Orientação jurídica clara e estratégica para pessoas e empresas em Sorocaba e Votorantim.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "João Carlos Alves | Advocacia",
          telephone: "+5515998249546",
          email: EMAIL,
          areaServed: ["Sorocaba", "Votorantim", "São Paulo"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Avenida Gisele Constantino, 1850, sala 421 — Iguatemi Business",
            addressLocality: "Votorantim",
            addressRegion: "SP",
            postalCode: "18110-650",
            addressCountry: "BR",
          },
          sameAs: [INSTAGRAM_URL],
        }),
      },
    ],
  }),
});

const credentials = [
  {
    title: "OAB/SP 522.209",
    description: "Registro profissional",
  },
  {
    title: "Formação acadêmica",
    description: "Direito — Universidade [Inserir]",
  },
  {
    title: "Atendimento",
    description: "Presencial e online\nCom agilidade e discrição",
  },
  {
    title: "Região de atuação",
    description: "Sorocaba e Votorantim\nAtendimento regional",
  },
];

const steps = [
  {
    title: "Primeiro contato",
    text: "Você relata o que está acontecendo com suas próprias palavras. Nenhum formulário longo, nenhum juridiquês.",
  },
  {
    title: "Análise e alinhamento",
    text: "Documentos e fatos são estudados com atenção para mapear caminhos possíveis, riscos e prazos reais.",
  },
  {
    title: "Estratégia e atuação",
    text: "Você recebe uma orientação clara sobre os próximos passos e acompanha cada etapa com comunicação direta.",
  },
];

const areas = [
  "Área de atuação 1",
  "Área de atuação 2",
  "Área de atuação 3",
  "Área de atuação 4",
  "Área de atuação 5",
  "Área de atuação 6",
];

const faqs = [
  {
    q: "Como funciona o primeiro atendimento?",
    a: "O contato inicial acontece por mensagem. Você descreve a sua situação e recebe um retorno sobre a viabilidade de análise do caso e sobre os próximos passos.",
  },
  {
    q: "O atendimento é presencial ou online?",
    a: "O escritório fica em Votorantim/SP e também atende Sorocaba e região. Atendimentos online podem ser combinados conforme o caso.",
  },
  {
    q: "Quais são os valores dos honorários?",
    a: "[Placeholder: política de honorários, formas de pagamento e se a primeira conversa é gratuita.]",
  },
  {
    q: "Quanto tempo demora um processo?",
    a: "Cada caso tem um prazo próprio, que depende do tipo de demanda e do andamento no Judiciário. Após a análise, você recebe uma estimativa realista — sem promessas de resultado.",
  },
  {
    q: "O escritório atende empresas?",
    a: "Sim. O atendimento é voltado a pessoas físicas e a empresas que precisam de orientação preventiva ou de acompanhamento de demandas.",
  },
];

const faqItems = [
  {
    q: "Como funciona o primeiro atendimento?",
    a: "No primeiro contato você apresenta sua situação e recebe uma orientação inicial sobre os próximos passos, sem compromisso.",
  },
  {
    q: "O atendimento pode ser online?",
    a: "Sim. O atendimento pode ser realizado presencialmente ou por videoconferência, conforme a sua preferência.",
  },
  {
    q: "Quais documentos devo levar?",
    a: "Depende do caso. Após o primeiro contato, você receberá a relação dos documentos necessários para a análise.",
  },
  {
    q: "Quanto custa a consulta?",
    a: "Os honorários variam conforme a complexidade da demanda. Todas as informações são esclarecidas antes do início do atendimento.",
  },
];

function Stars() {
  return (
    <span className="flex gap-1" aria-hidden>
      {[0, 1, 2, 3, 4].map((s) => (
        <svg key={s} viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-gold">
          <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.35l-5.81 3.05 1.11-6.47L2.6 9.35l6.5-.95L12 2.5z" />
        </svg>
      ))}
    </span>
  );
}

function Index() {
  return (
    <div id="topo" className="min-h-screen bg-deep">
      <Header />

      <main>
        {/* hero — azul profundo */}
        <section className="hero w-full bg-darker py-20 md:py-24">
          <div className="container-page grid items-center gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-20">

            <Reveal>
              <p className="eyebrow">Orientação jurídica personalizada</p>
              <h1 className="mt-7 font-display text-[clamp(2.8rem,5vw,4.8rem)] leading-[1.05] text-foreground">
                Orientação jurídica clara
                <br />
                do <span className="text-gold font-medium">começo ao fim.</span>
              </h1>
              <p className="mt-8 max-w-xl text-[clamp(1rem,1.2vw,1.1rem)] leading-relaxed text-muted-foreground">
                Advocacia para pessoas e empresas que buscam compreender sua situação antes de decidir. Sem termos complicados, sem promessas vazias e com orientação clara em todas as etapas.
              </p>
              <div className="mt-11 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-foreground px-10 py-5 text-sm font-semibold tracking-wide text-darker transition-colors duration-300 hover:bg-gold"
                >
                  FALAR COM O ADVOGADO
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center rounded-xl border border-border px-10 py-5 text-sm font-semibold tracking-wide text-foreground transition-colors duration-300 hover:border-gold hover:text-gold"
                >
                  Como funciona o atendimento
                </a>
              </div>

            </Reveal>

            <Reveal delay={140}>
              <div className="relative mx-auto w-full max-w-[430px]">
                <div
                  className="absolute -top-5 -right-5 bottom-8 left-10 border border-gold/35"
                  aria-hidden
                />
                <img
                  src={joao}
                  alt="João Carlos Alves, advogado em Sorocaba e Votorantim"
                  width={1200}
                  height={1600}
                  className="relative w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* SOBRE — azul índigo */}
        <section id="sobre" className="w-full bg-deep pt-36 pb-20 sm:pt-40 md:pb-24">
          <div className="container-page">
            <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">

              <Reveal className="lg:col-span-5">
                <p className="eyebrow">Sobre o advogado</p>
                <h2 className="mt-5 max-w-[700px] font-display text-[clamp(2.2rem,3.8vw,3.4rem)] leading-[1.08] tracking-[-0.015em]">
                  Experiência, escuta e estratégia
                  <br />
                  para proteger seus direitos.
                </h2>
                <span className="rule-gold mt-9" aria-hidden />

                <div className="mt-9 max-w-[700px] space-y-6 text-[clamp(1rem,1vw,1.08rem)] leading-8 text-muted-foreground">
                  <p>
                    Buscar orientação jurídica costuma acontecer em momentos de incerteza. Por isso, antes de falar sobre leis ou processos, o primeiro passo é compreender a sua história, seus objetivos e o contexto do problema.
                  </p>
                  <p>
                    Somente após essa compreensão é construída a estratégia jurídica mais adequada. Assim, cada decisão é tomada com clareza, transparência e expectativas alinhadas desde o início.
                  </p>
                </div>

                <div className="mt-16">
                  <p className="signature text-[clamp(2rem,3vw,2.8rem)] leading-none text-foreground">
                    João Carlos Alves
                  </p>
                </div>

              </Reveal>

              <Reveal delay={120} className="lg:col-span-6 flex justify-end">
                <div className="w-full max-w-[580px] border border-border bg-deep/50 px-10 py-10">

                  <div className="space-y-8">
                    {credentials.map((item) => (
                      <div
                        key={item.title}
                        className="border-b border-border pb-8 last:border-0 last:pb-0">
                        <h3 className="text-[1.6rem] font-medium text-foreground">
                          {item.title}
                        </h3>

                        {item.description.split("\n").map((line) => (
                          <p
                            key={line}
                            className="mt-2 text-[1.05rem] leading-8 text-muted-foreground"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>


        {/* COMO FUNCIONA + AVALIAÇÕES */}
        <section id="como-funciona" className="w-full bg-darker py-20 md:py-24">
          <div className="container-page">

            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow-center">Atendimento</p>

              <span className="rule-gold mx-auto mt-6 mb-8" />

              <h2 className="font-display text-[clamp(2.2rem,4vw,3.3rem)]">
                Um caminho claro do primeiro
                <br />
                contato ao acompanhamento do caso.
              </h2>
            </Reveal>

            <div className="mt-20">

              {/* Atendimento */}
              <div>

                <p className="eyebrow">
                  Como funciona o atendimento
                </p>

                <h3 className="mt-4 font-display text-3xl">
                  Em três etapas simples, você entende como acontece o atendimento jurídico, desde o primeiro
                  <br />
                  contato até a definição da estratégia para o seu caso.
                </h3>

                <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">

                </p>

                <div className="mt-14 grid gap-8 lg:grid-cols-3">

                  {steps.map((s, i) => (

                    <Reveal key={s.title} delay={i * 110}>

                      <div
                        className="
              h-full
              rounded-xl
              border border-border
              bg-white/[0.02]
              p-8
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-gold
              hover:bg-white/[0.04]
            "
                      >

                        <div className="flex items-center gap-2">

                          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                            ETAPA
                          </span>

                          <span className="text-sm font-medium text-gold">
                            0{i + 1}
                          </span>

                        </div>

                        <h3 className="mt-5 font-display text-3xl">
                          {s.title}
                        </h3>

                        <p className="mt-5 leading-8 text-muted-foreground">
                          {s.text}
                        </p>

                      </div>

                    </Reveal>

                  ))}

                </div>

              </div>

              {/* Avaliações */}

              <div id="avaliacoes" className="mt-28 scroll-mt-24">

                <p className="eyebrow">
                  Avaliações
                </p>

                <h3 className="mt-4 font-display text-3xl">
                  Quem já foi atendido.
                </h3>

                <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">
                  Avaliações públicas publicadas no perfil do escritório no Google.
                </p>

                <div className="mt-14 grid gap-8 lg:grid-cols-3">

                  {[1, 2, 3].map((n) => (

                    <figure
                      key={n}
                      className="
            group
            h-full
            rounded-xl
            border border-border
            bg-white/[0.02]
            p-7
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-gold
            hover:bg-white/[0.04]
          "
                    >

                      <div className="flex items-center justify-between">

                        <Stars />

                        <Quote
                          size={24}
                          className="text-gold"
                        />

                      </div>

                      <blockquote className="mt-5 leading-8 text-foreground">
                        "Profissional atencioso, explicou tudo de forma clara e me passou muita segurança no meu caso."
                      </blockquote>

                      <div className="mt-6 flex items-center justify-between">

                        <figcaption className="text-sm text-muted-foreground">
                          — Nome do cliente
                        </figcaption>

                        <svg
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                        >
                          <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.3h6.45a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.56-5.18 3.56-8.65Z" />
                          <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.9l-3.88-3c-1.08.73-2.45 1.17-4.07 1.17-3.13 0-5.78-2.11-6.72-4.96H1.27v3.12A12 12 0 0 0 12 24Z" />
                          <path fill="#FBBC05" d="M5.28 14.31A7.2 7.2 0 0 1 4.9 12c0-.8.14-1.57.38-2.31V6.57H1.27A12 12 0 0 0 0 12c0 1.94.46 3.77 1.27 5.43l4.01-3.12Z" />
                          <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.61 4.58 1.81l3.43-3.43C17.95 1.15 15.24 0 12 0A12 12 0 0 0 1.27 6.57l4.01 3.12C6.22 6.88 8.87 4.77 12 4.77Z" />
                        </svg>

                      </div>

                    </figure>

                  ))}

                </div>

              </div>

            </div>

          </div>
        </section>




        {/* DÚVIDAS */}
        <section id="faq" className="w-full bg-deep py-14 md:py-16">

          <div className="container-page">


            <div className="mt-16 grid gap-24 lg:grid-cols-[0.42fr_0.58fr] items-start">

              {/* ESQUERDA */}

              <div className="sticky top-28">

                <p className="eyebrow">
                  Perguntas frequentes
                </p>

                <h2 className="mt-6 font-display text-[clamp(2.6rem,3.5vw,3.8rem)] leading-tight">
                  Informações para o primeiro contato.
                </h2>

                <p className="mt-8 max-w-lg text-lg leading-9 text-muted-foreground">
                  Respostas objetivas sobre atendimento,
                  documentos, honorários e contratação.
                  Cada situação exige uma análise jurídica
                  individualizada.
                </p>

                <Button className="mt-12 rounded-full px-8 py-6 text-base">
                  Entrar em contato
                </Button>

              </div>

              {/* DIREITA */}

              <Accordion
                type="single"
                collapsible
                className="space-y-5"
              >

                {faqItems.map((item, i) => (

                  <AccordionItem
                    key={item.q}
                    value={item.q}
                    className="rounded-2xl border border-border px-8"
                  >

                    <AccordionTrigger className="py-8 text-foreground hover:text-foreground no-underline hover:no-underline">

                      <div className="flex items-center gap-6 text-left">

                        <span className="min-w-[35px] font-display text-2xl text-gold">
                          0{i + 1}
                        </span>

                        <span className="font-display text-[1.65rem] leading-snug">
                          {item.q}
                        </span>

                      </div>

                    </AccordionTrigger>

                    <AccordionContent className="pb-8 pl-14 text-lg leading-8 text-muted-foreground">

                      {item.a}

                    </AccordionContent>

                  </AccordionItem>

                ))}

              </Accordion>

            </div>

          </div>

        </section>

        {/* CONTATO */}
        <section id="contato" className="w-full bg-darker py-20 md:py-24">
          <div className="container-page">

            <div className="grid items-center gap-20 lg:grid-cols-[1.15fr_0.85fr]">

              {/* Texto */}
              <Reveal>

                <p className="eyebrow">Contato</p>

                <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.4rem,4vw,3.6rem)] leading-[1.08]">
                  Vamos conversar sobre
                  <br />
                  o seu caso?
                </h2>

                <p className="mt-7 max-w-xl text-[clamp(1rem,1vw,1.08rem)] leading-8 text-muted-foreground">
                  O primeiro contato é reservado e sem compromisso.
                  Conte sua situação com tranquilidade e receba uma
                  orientação inicial clara sobre os próximos passos.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-foreground px-8 py-4 text-sm font-semibold tracking-wide text-darker transition-all duration-300 hover:bg-gold"
                  >
                    Falar pelo WhatsApp
                  </a>

                </div>

              </Reveal>

              {/* Card */}
              <Reveal delay={120}>

                <div className="rounded-3xl border border-border bg-deep px-10 py-10 shadow-2xl">

                  <p className="eyebrow">
                    Atendimento
                  </p>

                  <h3 className="mt-6 font-display text-4xl">
                    Presencial e online
                  </h3>

                  <p className="mt-3 text-muted-foreground">
                    Votorantim • Sorocaba e região
                  </p>

                  <div className="mt-10 space-y-5">

                    <a
                      href={WHATSAPP_URL}
                      className="flex items-center gap-3 text-muted-foreground transition hover:text-gold"
                    >
                      <MessageCircle size={18} />
                      {WHATSAPP_LABEL}
                    </a>

                    <a
                      href={`mailto:${EMAIL}`}
                      className="flex items-center gap-3 text-muted-foreground transition hover:text-gold"
                    >
                      <Mail size={18} />
                      {EMAIL}
                    </a>

                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground transition hover:text-gold"
                    >
                      <Instagram size={18} />
                      @dr.joaocarlosalves
                    </a>


                  </div>

                  <a
                    href="https://maps.google.com/?q=Avenida+Gisele+Constantino+1850+Votorantim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-start gap-3 text-muted-foreground transition-colors hover:text-gold"
                  >
                    <MapPin size={18} className="mt-1 shrink-0" />

                    <div className="leading-7">
                      <p>Avenida Gisele Constantino, nº 1850</p>
                      <p>Sala 421 — Iguatemi Business</p>
                    </div>
                  </a>


                  <div className="mt-10 rounded-xl border border-border bg-darker px-6 py-4">

                    <p className="text-center text-sm leading-7 text-muted-foreground">
                      Atendimento mediante agendamento.
                    </p>

                  </div>

                </div>

              </Reveal>

            </div>

          </div>
        </section>

      </main>

      {/* RODAPÉ — azul escuro */}
      <footer className="border-t border-border bg-abyss">
        <div className="container-page py-6">

          <p className="text-center text-sm text-muted-foreground">
            © 2026 João Carlos Alves Advocacia. Todos os direitos reservados.
          </p>

        </div>
      </footer>


      <FloatingWhatsApp />
    </div>
  );
}

