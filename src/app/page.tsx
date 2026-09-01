"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CoverFlowCarousel, type CarouselItem } from "@/components/ui/3-d-coverflow-carousel";

const CASES: CarouselItem[] = [
  {
    tag: "#BrandingEMotion",
    titleLine1: "FERRA CAFÉ",
    titleLine2: "– IDENTIDADE COMPLETA",
    desc: "Reposicionamento de marca com motion system pra redes sociais e loja física",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80",
    ctaText: "Ver case",
    ctaUrl: "#",
  },
  {
    tag: "#ProdutoDigital",
    titleLine1: "ÓRBITA FIT",
    titleLine2: "– APP + BRANDING",
    desc: "Identidade e interface pra um app de treino que não parece mais um clone",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    ctaText: "Ver case",
    ctaUrl: "#",
  },
  {
    tag: "#IdentidadeVisual",
    titleLine1: "NÔMADE STUDIO",
    titleLine2: "– SISTEMA GRÁFICO",
    desc: "Um sistema de marca que se adapta a cada cliente sem perder a raiz",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
    ctaText: "Ver case",
    ctaUrl: "#",
  },
  {
    tag: "#SiteMaisCms",
    titleLine1: "CINZA ATELIÊ",
    titleLine2: "– SITE AUTORAL",
    desc: "Site editorial com CMS pra um ateliê que queria parar de depender de agência",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=80",
    ctaText: "Ver case",
    ctaUrl: "#",
  },
];

const PROCESS = [
  { n: "01", title: "Diagnóstico", body: "Entrevistamos seu time e olhamos o que a concorrência não teve coragem de fazer." },
  { n: "02", title: "Direção", body: "Uma única ideia central, defendida com tipografia, cor e movimento — não três opções mornas." },
  { n: "03", title: "Produção", body: "Identidade, motion e site entregues juntos, prontos pra rodar em produção." },
];

const WORK = [
  { name: "Ferra Café", tag: "Branding + Motion", color: "var(--color-primary)" },
  { name: "Órbita Fit", tag: "Produto Digital", color: "var(--color-accent)" },
  { name: "Nômade Studio", tag: "Identidade Visual", color: "var(--color-secondary)" },
  { name: "Cinza Ateliê", tag: "Site + CMS", color: "var(--color-primary)" },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "0px 0px -10% 0px" },
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
  };
}

function TiltCard({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800, ...style }}
      className={`brutal-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-[family-name:var(--font-display)] text-xl font-extrabold uppercase tracking-tight">
          Vértice
        </span>
        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide sm:flex">
          <a href="#trabalho" className="hover:text-[var(--color-primary)]">Trabalho</a>
          <a href="#processo" className="hover:text-[var(--color-primary)]">Processo</a>
        </nav>
        <a
          href="#contato"
          className="brutal-block cursor-pointer bg-[var(--color-primary)] px-5 py-2 text-sm font-bold uppercase text-[var(--color-ink)]"
        >
          Fale com a gente
        </a>
      </header>

      <main>
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-8 sm:pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-display)] text-[15vw] font-extrabold uppercase leading-[0.85] tracking-tighter sm:text-[7.5rem]"
        >
          Design
          <br />
          <span className="text-[var(--color-primary)]">que incomoda.</span>
        </motion.h1>
        <motion.p {...fadeUp(0.2)} className="mt-8 max-w-md text-lg font-medium">
          Marca fraca ninguém lembra. A gente faz o oposto: branding, motion e
          produto pra empresa que quer ser impossível de ignorar.
        </motion.p>
      </section>

      <div
        className="overflow-hidden border-y-3 border-[var(--color-ink)] bg-[var(--color-ink)] py-3"
        style={{
          borderTopWidth: 3,
          borderBottomWidth: 3,
          maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap font-[family-name:var(--font-display)] text-2xl font-extrabold uppercase text-[var(--color-background)]">
          {Array.from({ length: 2 }).map((_, rep) => (
            <span key={rep} className="flex gap-8">
              {["Branding", "Motion", "Produto", "Estratégia", "Identidade"].map((w) => (
                <span key={w} className="flex items-center gap-8">
                  {w} <span className="text-[var(--color-primary)]">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section id="processo" className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2 {...fadeUp(0)} className="font-[family-name:var(--font-display)] text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
          Como o processo funciona
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PROCESS.map((step, i) => (
            <motion.div key={step.n} {...fadeUp(i * 0.12)}>
              <TiltCard className="bg-[var(--color-card)] p-6">
                <div className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-[var(--color-primary)]">
                  {step.n}
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-bold uppercase">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed">{step.body}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="trabalho" className="mx-auto max-w-6xl px-6 pb-20">
        <motion.h2 {...fadeUp(0)} className="font-[family-name:var(--font-display)] text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
          Trabalho recente
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {WORK.map((w, i) => (
            <motion.div key={w.name} {...fadeUp(i * 0.1)}>
              <TiltCard
                className="flex aspect-[4/3] flex-col justify-end p-6"
                style={{ backgroundColor: w.color }}
              >
                <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-ink)]/70">
                  {w.tag}
                </span>
                <span className="font-[family-name:var(--font-display)] text-2xl font-extrabold uppercase text-[var(--color-ink)]">
                  {w.name}
                </span>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      <CoverFlowCarousel items={CASES} sectionLabel="CASES EM DESTAQUE" />

      <section id="contato" className="mx-auto max-w-6xl px-6 pb-24">
        <motion.div {...fadeUp(0)} className="brutal-block bg-[var(--color-ink)] px-8 py-16 text-center sm:px-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold uppercase text-[var(--color-background)] sm:text-5xl">
            Bora fazer barulho?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[var(--color-background)]/70">
            Conta o que sua marca precisa. Respondemos em até 1 dia útil.
          </p>
          <a
            href="mailto:oi@vertice.studio"
            className="brutal-block mt-8 inline-block cursor-pointer bg-[var(--color-primary)] px-7 py-3 text-sm font-bold uppercase text-[var(--color-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-background)]"
          >
            oi@vertice.studio
          </a>
        </motion.div>
      </section>

      <div className="border-t-3 border-[var(--color-ink)] py-16 text-center" style={{ borderTopWidth: 3 }}>
        <a
          href="mailto:oi@vertice.studio"
          className="font-[family-name:var(--font-display)] text-[14vw] font-extrabold uppercase leading-none tracking-tighter transition-colors hover:text-[var(--color-primary)] sm:text-8xl"
        >
          VAMOS?
        </a>
      </div>
      </main>

      <footer className="border-t-3 border-[var(--color-ink)] bg-[var(--color-card)] pt-12 pb-8" style={{ borderTopWidth: 3 }}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-sm sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <span className="font-[family-name:var(--font-display)] text-lg font-extrabold uppercase tracking-tight">
              Vértice
            </span>
            <p className="mt-3 font-medium">Design que incomoda, marca que fica.</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-[#be185d]">Estúdio</h3>
            <ul className="mt-3 space-y-2 font-medium">
              <li><a href="#trabalho" className="hover:text-[var(--color-primary)]">Trabalho</a></li>
              <li><a href="#processo" className="hover:text-[var(--color-primary)]">Processo</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-[#be185d]">Legal</h3>
            <ul className="mt-3 space-y-2 font-medium">
              <li><a href="/termos" className="hover:text-[var(--color-primary)]">Termos de uso</a></li>
              <li><a href="/privacidade" className="hover:text-[var(--color-primary)]">Privacidade</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-[#be185d]">Contato</h3>
            <ul className="mt-3 space-y-2 font-medium">
              <li>oi@vertice.studio</li>
              <li><a href="https://wa.me/5511999999999" className="hover:text-[var(--color-primary)]">WhatsApp</a></li>
              <li><a href="https://instagram.com" className="hover:text-[var(--color-primary)]">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-[var(--color-ink)]/10 px-6 pt-6 text-center text-xs font-semibold uppercase tracking-wide sm:text-left">
          © {new Date().getFullYear()} Estúdio Vértice Design Ltda. · CNPJ 00.000.000/0001-00 · São Paulo, SP
        </div>
      </footer>
    </div>
  );
}
