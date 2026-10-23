import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState, type ReactNode } from "react";
import { z } from "zod";
import {
  Building2, Home, Store, Hammer, Route as RouteIcon, ClipboardCheck, ShieldCheck, Clock,
  BarChart3, HardHat, Wallet, CalendarCheck, Wrench, Star, Phone, Mail, MapPin, AtSign as Instagram,
  ArrowRight, MessageCircle, Menu, X, Check, Quote,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import commercial from "@/assets/commercial.jpg";
import reforma from "@/assets/reforma.jpg";
import infra from "@/assets/infra.jpg";
import { estimate, brl, type ObraTipo, type Padrao } from "@/lib/budget";

const WA_NUMBER = "5513999999999";
const wa = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
const WA_DEFAULT = wa("Olá, Engenheiro! Gostaria de conversar sobre um projeto com a Pedicini Construtora.");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pedicini Construtora & Engenharia | Obras de Alto Padrão em Santos/SP" },
      { name: "description", content: "Construção residencial e comercial de alto padrão, reformas, infraestrutura e gestão completa de obras com previsibilidade de prazos e custos." },
      { property: "og:title", content: "Pedicini Construtora & Engenharia" },
      { property: "og:description", content: "Excelência construtiva, rigor técnico e gestão completa para sua obra. Santos/SP." },
    ],
  }),
  component: Index,
});

const ease = [0.22, 1, 0.36, 1] as const;
const Reveal = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay, ease }}>
    {children}
  </motion.div>
);

const NAV = [
  ["Início", "#inicio"], ["Especialidades", "#especialidades"], ["Portfólio de Obras", "#portfolio"],
  ["Diferenciais", "#diferenciais"], ["Orçamento", "#orcamento"], ["Contato", "#contato"],
] as const;

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#inicio" className="flex items-center gap-2.5" aria-label="Pedicini Construtora & Engenharia">
      <span className="grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground">
        <Building2 className="h-5 w-5" />
      </span>
      <span className="leading-none">
        <span className={`block font-display text-lg font-extrabold tracking-[0.12em] ${dark ? "text-on-dark" : "text-foreground"}`}>PEDICINI</span>
        <span className={`block font-mono text-[0.6rem] uppercase tracking-[0.2em] ${dark ? "text-on-dark-muted" : "text-muted-foreground"}`}>Construtora & Engenharia</span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line-dark bg-slate-deep/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Logo dark />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="text-sm text-on-dark-muted transition-colors hover:text-primary">{l}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href={WA_DEFAULT} target="_blank" rel="noreferrer" aria-label="WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-md border border-line-dark text-whatsapp transition hover:bg-on-dark/5">
            <MessageCircle className="h-5 w-5" />
          </a>
          <a href="#orcamento" className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-accent">
            Solicitar Orçamento
          </a>
        </div>
        <button className="text-on-dark lg:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className="border-t border-line-dark bg-slate-deep px-4 pb-6 lg:hidden">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b border-line-dark py-3 text-on-dark">{l}</a>
            ))}
            <a href="#orcamento" onClick={() => setOpen(false)} className="mt-4 block rounded-md bg-primary py-3 text-center font-semibold text-primary-foreground">Solicitar Orçamento</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const badges = [
    [Clock, "Obras Entregues no Prazo"], [ShieldCheck, "Engenharia Certificada CREA"], [BarChart3, "Gestão Inteligente de Materiais & Custos"],
  ] as const;
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-slate-deep pt-28 pb-20 lg:pt-40 lg:pb-32">
      <img src={hero} alt="Residência de alto padrão em construção pela Pedicini" width={1600} height={1008}
        className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 hero-overlay" />
      <div className="absolute inset-0 -z-10 blueprint opacity-60" />
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="max-w-3xl">
          <p className="eyebrow mb-5">// Construtora & Engenharia · Santos/SP</p>
          <h1 className="text-4xl font-extrabold leading-[1.05] text-on-dark sm:text-5xl lg:text-6xl">
            Excelência Construtiva, <span className="text-primary">Rigor Técnico</span> e Gestão Completa para sua Obra
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-on-dark-muted">
            Previsibilidade real de prazos e custos, relatórios transparentes a cada semana e padrão arquitetônico
            elevado — do alvará à entrega das chaves.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#orcamento" className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 font-semibold text-primary-foreground shadow-glow transition hover:bg-accent">
              Simular Orçamento da Obra <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href={WA_DEFAULT} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-on-dark/25 px-6 py-4 font-semibold text-on-dark transition hover:border-whatsapp hover:text-whatsapp">
              <MessageCircle className="h-5 w-5" /> Falar com Engenheiro no WhatsApp
            </a>
          </div>
        </motion.div>
        <div className="mt-14 grid gap-3 sm:grid-cols-3 lg:max-w-4xl">
          {badges.map(([Icon, t], i) => (
            <motion.div key={t} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1, ease }}
              className="flex items-center gap-3 rounded-md border border-line-dark bg-slate-deep/60 p-4 backdrop-blur">
              <Icon className="h-5 w-5 shrink-0 text-gold" />
              <span className="text-sm font-medium text-on-dark">{t}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const items = [
    ["+15", "Anos de experiência técnica"], ["+50.000 m²", "Construídos e reformados"],
    ["100%", "Previsibilidade de custos com relatórios semanais"], ["0", "Acidentes graves · rigor absoluto com normas de segurança"],
  ];
  return (
    <section className="border-y border-line-dark bg-slate-mid">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {items.map(([n, l], i) => (
          <Reveal key={l} delay={i * 0.08} className="border-line-dark p-6 lg:p-10 [&:not(:last-child)]:border-r">
            <div className="font-display text-3xl font-extrabold text-primary lg:text-5xl">{n}</div>
            <div className="mt-2 text-sm text-on-dark-muted">{l}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub, dark = false }: { eyebrow: string; title: string; sub?: string; dark?: boolean }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className={`text-3xl font-extrabold sm:text-4xl ${dark ? "text-on-dark" : "text-foreground"}`}>{title}</h2>
      {sub && <p className={`mt-4 ${dark ? "text-on-dark-muted" : "text-muted-foreground"}`}>{sub}</p>}
    </Reveal>
  );
}

function Specialties() {
  const items = [
    [Home, "Construção Residencial de Alto Padrão", "Mansões, condomínios fechados e acabamento fino com controle milimétrico."],
    [Store, "Construção e Retrofit Comercial", "Lojas, galpões e escritórios corporativos entregues para operar."],
    [Hammer, "Reformas Estruturais e Interiores", "Modernização, laudos periciais e reforço estrutural."],
    [RouteIcon, "Pavimentação & Infraestrutura", "Piso intertravado, drenagem e contenções."],
    [ClipboardCheck, "Gerenciamento Integral de Obras", "Turnkey / chave na mão: do alvará à entrega das chaves."],
  ] as const;
  return (
    <section id="especialidades" className="blueprint-light py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHead eyebrow="01 · Especialidades" title="Soluções completas de engenharia civil" sub="Uma única equipe técnica para projetar, executar e gerenciar cada etapa da sua obra." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={i * 0.06} className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
              <motion.article whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-lg border bg-card p-7 shadow-card">
                <span className="absolute right-5 top-5 font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <span className="grid h-12 w-12 place-items-center rounded-md bg-slate-deep text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const TIPOS: [ObraTipo, string][] = [["residencial", "Residencial"], ["comercial", "Comercial"], ["reforma", "Reforma Corporativa"], ["pavimentacao", "Pavimentação"]];
const PADROES: [Padrao, string][] = [["economico", "Econômico"], ["medio", "Médio Padrão"], ["alto", "Alto Padrão / Luxo"]];

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={active}
      className={`rounded-md border px-4 py-3 text-sm font-medium transition ${active ? "border-primary bg-primary text-primary-foreground" : "border-line-dark text-on-dark hover:border-primary"}`}>
      {children}
    </button>
  );
}

function Calculator() {
  const [tipo, setTipo] = useState<ObraTipo>("residencial");
  const [area, setArea] = useState(250);
  const [padrao, setPadrao] = useState<Padrao>("medio");
  const { min, max } = estimate(tipo, area, padrao);
  const tipoL = TIPOS.find((t) => t[0] === tipo)![1];
  const padL = PADROES.find((p) => p[0] === padrao)![1];
  const msg = `Olá! Simulei um orçamento no site da Pedicini:\n• Tipo: ${tipoL}\n• Área: ${area}${area >= 1000 ? "+" : ""} m²\n• Padrão: ${padL}\n• Estimativa: ${brl(min)} – ${brl(max)}\nGostaria de receber uma proposta personalizada.`;
  return (
    <section id="orcamento" className="relative bg-slate-deep py-24">
      <div className="absolute inset-0 blueprint" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHead dark eyebrow="02 · Orçamento Rápido" title="Simule a viabilidade da sua obra" sub="Selecione as características do projeto e veja uma estimativa em tempo real." />
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-8 rounded-lg border border-line-dark bg-slate-mid/60 p-6 lg:p-8">
            <fieldset>
              <legend className="mb-3 font-mono text-xs uppercase tracking-widest text-on-dark-muted">1. Tipo de Obra</legend>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {TIPOS.map(([v, l]) => <Chip key={v} active={tipo === v} onClick={() => setTipo(v)}>{l}</Chip>)}
              </div>
            </fieldset>
            <div>
              <label htmlFor="area" className="mb-3 flex items-baseline justify-between font-mono text-xs uppercase tracking-widest text-on-dark-muted">
                <span>2. Metragem estimada</span>
                <span className="font-display text-2xl font-bold normal-case tracking-normal text-on-dark">{area}{area >= 1000 ? "+" : ""} m²</span>
              </label>
              <input id="area" type="range" min={50} max={1000} step={10} value={area} onChange={(e) => setArea(+e.target.value)}
                className="w-full accent-primary" />
              <div className="mt-3 flex flex-wrap gap-2">
                {[50, 150, 300, 500, 1000].map((v) => (
                  <button key={v} type="button" onClick={() => setArea(v)} className="rounded border border-line-dark px-3 py-1 font-mono text-xs text-on-dark-muted hover:border-primary hover:text-primary">
                    {v}{v === 1000 ? "+" : ""} m²
                  </button>
                ))}
              </div>
            </div>
            <fieldset>
              <legend className="mb-3 font-mono text-xs uppercase tracking-widest text-on-dark-muted">3. Padrão de Acabamento</legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {PADROES.map(([v, l]) => <Chip key={v} active={padrao === v} onClick={() => setPadrao(v)}>{l}</Chip>)}
              </div>
            </fieldset>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-between rounded-lg border border-primary/40 bg-slate-mid p-6 lg:p-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-gold">Estimativa aproximada</p>
              <div aria-live="polite" className="mt-4">
                <motion.p key={`${min}`} initial={{ opacity: 0.4, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  className="font-display text-3xl font-extrabold text-on-dark lg:text-4xl">{brl(min)}</motion.p>
                <p className="text-on-dark-muted">até <span className="font-semibold text-on-dark">{brl(max)}</span></p>
              </div>
              <dl className="mt-6 space-y-2 border-t border-line-dark pt-5 text-sm">
                {[["Tipo", tipoL], ["Área", `${area} m²`], ["Padrão", padL]].map(([k, v]) => (
                  <div key={k} className="flex justify-between"><dt className="text-on-dark-muted">{k}</dt><dd className="text-on-dark">{v}</dd></div>
                ))}
              </dl>
              <p className="mt-5 text-xs text-on-dark-muted">Valores de referência. A proposta final depende de projeto, terreno e especificações.</p>
            </div>
            <a href={wa(msg)} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-5 py-4 text-center font-semibold text-slate-deep transition hover:brightness-110">
              <MessageCircle className="h-5 w-5" /> Enviar proposta personalizada para meu WhatsApp
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Method() {
  const items = [
    [Wallet, "Gestão Financeira Transparente", "Prestação de contas periódica, sem surpresas no orçamento."],
    [CalendarCheck, "Cronograma Físico-Financeiro", "Acompanhamento rigoroso por aplicativo e painel online."],
    [HardHat, "Engenheiros no Canteiro", "Responsáveis técnicos presentes em todas as etapas."],
    [Wrench, "Garantia Pós-Obra", "Assistência técnica garantida após a entrega."],
  ] as const;
  return (
    <section id="diferenciais" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <div>
          <SectionHead eyebrow="03 · Diferenciais" title="O Método Pedicini" sub="Processos de engenharia que transformam obra em projeto previsível — com dados, prazos e responsabilidade técnica." />
          <Reveal className="rounded-lg bg-slate-deep p-6 text-on-dark">
            <p className="font-mono text-xs uppercase tracking-widest text-gold">Relatório semanal · Semana 18</p>
            {[["Avanço físico", 72], ["Orçamento executado", 68], ["Prazo consumido", 70]].map(([k, v]) => (
              <div key={k} className="mt-4">
                <div className="mb-1 flex justify-between text-sm"><span className="text-on-dark-muted">{k}</span><span>{v}%</span></div>
                <div className="h-1.5 rounded bg-line-dark">
                  <motion.div className="h-full rounded bg-primary" initial={{ width: 0 }} whileInView={{ width: `${v}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease }} />
                </div>
              </div>
            ))}
          </Reveal>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <motion.div whileHover={{ y: -4 }} className="h-full rounded-lg border bg-card p-7 shadow-card transition-colors hover:border-primary">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-5 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const OBRAS = [
  { cat: "Residencial", img: hero, title: "Residência Alto Padrão · Morro Santa Terezinha", area: "620 m²", status: "Em Execução" },
  { cat: "Comercial", img: commercial, title: "Centro Corporativo · Zona Noroeste", area: "3.400 m²", status: "Concluído" },
  { cat: "Reformas", img: reforma, title: "Retrofit de Escritório · Gonzaga", area: "480 m²", status: "Entrega Antecipada" },
  { cat: "Infraestrutura", img: infra, title: "Pavimentação e Drenagem · Condomínio Fechado", area: "8.200 m²", status: "Concluído" },
];
const CATS = ["Todos", "Residencial", "Comercial", "Reformas", "Infraestrutura"];

function Portfolio() {
  const [cat, setCat] = useState("Todos");
  const list = OBRAS.filter((o) => cat === "Todos" || o.cat === cat);
  return (
    <section id="portfolio" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHead eyebrow="04 · Portfólio de Obras" title="Obras recentes" />
        <div role="tablist" className="mb-8 flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition ${cat === c ? "bg-slate-deep text-on-dark" : "bg-card text-foreground hover:text-primary"}`}>
              {c}
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {list.map((o) => (
              <motion.article key={o.title} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-deep">
                <img src={o.img} alt={o.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-deep via-slate-deep/20 to-transparent" />
                <span className={`absolute left-4 top-4 rounded px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wider ${o.status === "Em Execução" ? "bg-primary text-primary-foreground" : o.status === "Entrega Antecipada" ? "bg-gold text-slate-deep" : "bg-on-dark text-slate-deep"}`}>{o.status}</span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">{o.cat} · {o.area}</p>
                  <h3 className="mt-1 text-xl font-bold text-on-dark">{o.title}</h3>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    ["Mariana Albuquerque", "Proprietária · Residência em Santos", "Recebemos a casa uma semana antes do prazo e exatamente no orçamento aprovado. Os relatórios semanais nos deram total tranquilidade."],
    ["Ricardo Toledo", "Diretor de Operações · Rede Varejista", "Canteiro sempre limpo e organizado, equipe técnica presente. O retrofit da loja não atrapalhou nossa operação."],
    ["Fernanda Lins", "Gerente Administrativa · Escritório Corporativo", "A precisão do orçamento impressionou. Nenhum aditivo inesperado — tudo documentado e transparente."],
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHead eyebrow="05 · Depoimentos" title="Quem constrói com a Pedicini recomenda" />
        <div className="grid gap-5 md:grid-cols-3">
          {items.map(([n, r, t], i) => (
            <Reveal key={n} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-lg border bg-card p-7 shadow-card">
                <Quote className="h-7 w-7 text-primary" />
                <div className="mt-3 flex gap-0.5 text-gold" aria-label="5 estrelas">{[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
                <blockquote className="mt-4 flex-1 text-foreground">“{t}”</blockquote>
                <figcaption className="mt-6 border-t pt-4"><p className="font-semibold">{n}</p><p className="text-sm text-muted-foreground">{r}</p></figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  telefone: z.string().trim().regex(/^[\d\s()+-]{10,20}$/, "Telefone inválido"),
  email: z.string().trim().email("E-mail inválido").max(255),
  tipo: z.string().min(1, "Selecione o tipo"),
  mensagem: z.string().trim().max(1000).optional(),
});

function ContactCTA() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      setErrors(Object.fromEntries(r.error.issues.map((i) => [String(i.path[0]), i.message])));
      return;
    }
    setErrors({});
    const d = r.data;
    window.open(wa(`Olá! Sou ${d.nome}.\nTelefone: ${d.telefone}\nE-mail: ${d.email}\nProjeto: ${d.tipo}\n${d.mensagem ?? ""}`), "_blank");
    setSent(true);
  };
  const field = "w-full rounded-md border border-input bg-card px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";
  const Err = ({ k }: { k: string }) => errors[k] ? <p id={`${k}-err`} className="mt-1 text-xs text-destructive">{errors[k]}</p> : null;
  return (
    <section id="contato" className="relative overflow-hidden bg-slate-deep py-24">
      <div className="absolute inset-0 blueprint" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHead dark eyebrow="06 · Contato" title="Vamos tirar seu projeto do papel" sub="Envie seus dados e um engenheiro retorna em até 24h úteis com os próximos passos." />
          <Reveal>
            <a href={wa("Olá, Engenheiro-Chefe! Gostaria de agendar uma conversa técnica sobre minha obra.")} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-md bg-whatsapp px-6 py-4 font-semibold text-slate-deep transition hover:brightness-110">
              <MessageCircle className="h-5 w-5" /> Conversar com o Engenheiro-Chefe
            </a>
            <ul className="mt-8 space-y-3 text-on-dark-muted">
              {["Visita técnica sem compromisso", "Proposta detalhada com cronograma", "ART emitida por engenheiro CREA"].map((t) => (
                <li key={t} className="flex items-center gap-3"><Check className="h-4 w-4 text-primary" />{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-lg bg-background p-6 shadow-card lg:p-8">
            {sent && <p role="status" className="rounded-md bg-muted p-3 text-sm">Obrigado! Abrimos o WhatsApp com sua mensagem.</p>}
            <div>
              <label htmlFor="nome" className="mb-1 block text-sm font-medium">Nome</label>
              <input id="nome" name="nome" className={field} aria-invalid={!!errors["nome"]} aria-describedby="nome-err" maxLength={100} />
              <Err k="nome" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="telefone" className="mb-1 block text-sm font-medium">Telefone/WhatsApp</label>
                <input id="telefone" name="telefone" type="tel" inputMode="tel" className={field} aria-invalid={!!errors["telefone"]} aria-describedby="telefone-err" />
                <Err k="telefone" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">E-mail</label>
                <input id="email" name="email" type="email" className={field} aria-invalid={!!errors["email"]} aria-describedby="email-err" />
                <Err k="email" />
              </div>
            </div>
            <div>
              <label htmlFor="tipo" className="mb-1 block text-sm font-medium">Tipo de Projeto</label>
              <select id="tipo" name="tipo" defaultValue="" className={field} aria-invalid={!!errors["tipo"]} aria-describedby="tipo-err">
                <option value="" disabled>Selecione…</option>
                {["Residencial Alto Padrão", "Comercial / Retrofit", "Reforma Estrutural / Interiores", "Pavimentação & Infraestrutura", "Gerenciamento de Obra"].map((o) => <option key={o}>{o}</option>)}
              </select>
              <Err k="tipo" />
            </div>
            <div>
              <label htmlFor="mensagem" className="mb-1 block text-sm font-medium">Mensagem</label>
              <textarea id="mensagem" name="mensagem" rows={4} maxLength={1000} className={field} />
            </div>
            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-md bg-primary py-4 font-semibold text-primary-foreground shadow-glow transition hover:bg-accent active:scale-[0.99]">
              Solicitar Orçamento <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line-dark bg-slate-deep text-on-dark-muted">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <Logo dark />
          <p className="mt-4 text-sm">Construção civil, reformas e gestão integral de obras com rigor técnico.</p>
          <span className="mt-4 inline-flex items-center gap-2 rounded border border-gold/40 px-3 py-1.5 font-mono text-xs text-gold">
            <ShieldCheck className="h-4 w-4" /> CREA-SP Nº 0000000000
          </span>
        </div>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3"><MapPin className="h-4 w-4 text-primary" />Santos · São Paulo · Brasil</li>
          <li className="flex gap-3"><Phone className="h-4 w-4 text-primary" /><a href="tel:+5513999999999" className="hover:text-on-dark">(13) 99999-9999</a></li>
          <li className="flex gap-3"><Mail className="h-4 w-4 text-primary" /><a href="mailto:contato@pedicini.com.br" className="hover:text-on-dark">contato@pedicini.com.br</a></li>
          <li className="flex gap-3"><Instagram className="h-4 w-4 text-primary" /><a href="https://instagram.com/pediciniconstrutora" target="_blank" rel="noreferrer" className="hover:text-on-dark">@pediciniconstrutora</a></li>
        </ul>
        <nav className="grid grid-cols-2 gap-2 text-sm" aria-label="Rodapé">
          {NAV.map(([l, h]) => <a key={h} href={h} className="hover:text-primary">{l}</a>)}
        </nav>
      </div>
      <p className="border-t border-line-dark py-5 text-center font-mono text-xs">© {new Date().getFullYear()} Pedicini Construtora & Engenharia</p>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero /><Metrics /><Specialties /><Calculator /><Method /><Portfolio /><Testimonials /><ContactCTA />
      </main>
      <Footer />
      <motion.a href={WA_DEFAULT} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }} whileHover={{ scale: 1.08 }}
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-slate-deep shadow-card">
        <MessageCircle className="h-7 w-7" />
      </motion.a>
    </div>
  );
}
