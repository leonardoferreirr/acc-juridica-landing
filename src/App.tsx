import heroJustice from "./assets/hero-justice.jpg";
import areaEmpregados from "./assets/area-empregados.jpg";
import areaEmpresas from "./assets/area-empresas.jpg";
import areaAmbas from "./assets/area-ambas.jpg";
import areaInventario from "./assets/area-inventario.jpg";
import areaPatrimonial from "./assets/area-patrimonial.jpg";
import draAna from "./assets/dra-ana.jpg";
import {
  Landmark,
  Gavel,
  Building2,
  ShieldCheck,
  Briefcase,
  Scale,
  MapPin,
  Phone,
  Mail,
  Instagram,
  MessageCircle,
} from "lucide-react";

const WHATSAPP = "https://wa.me/5512981019614";

function CTAButton({ variant = "light", className = "" }: { variant?: "light" | "dark"; className?: string }) {
  const cls = variant === "light" ? "btn-green" : "btn-green-solid";
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-md px-10 py-5 text-sm font-semibold tracking-widest uppercase ${cls} ${className}`}
    >
      Agendar Reunião
    </a>
  );
}

export default function App() {
  return (
    <main className="bg-cream text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroJustice} alt="Estátua da Justiça" className="h-full w-full object-cover" width={1600} height={900} />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <div className="max-w-2xl">
            <h1 className="font-serif small-caps text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-semibold">
              Especialista em Direito do Trabalho, Inventário e Planejamento Patrimonial
            </h1>
            <p className="mt-6 max-w-md text-white/90 text-lg leading-relaxed">
              Soluções jurídicas personalizadas para proteger seus direitos e seu patrimônio.
            </p>
            <div className="mt-10">
              <CTAButton variant="light" className="w-full max-w-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats + services card overlap */}
      <section className="relative bg-cream pt-16 pb-0">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center pb-20">
            <Stat icon={<Landmark className="h-10 w-10" strokeWidth={1.5} />} label={<><b>20 anos</b> de experiência</>} />
            <Stat icon={<Gavel className="h-10 w-10" strokeWidth={1.5} />} label={<><b>+5000 processos</b> atendidos</>} />
            <Stat icon={<Building2 className="h-10 w-10" strokeWidth={1.5} />} label={<><b>Atendimento</b> Online e Presencial</>} />
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 -mb-24 relative z-10">
          <div className="bg-brown rounded-md text-white px-8 py-12 md:px-16 md:py-16 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <Service icon={<ShieldCheck className="h-14 w-14" strokeWidth={1.5} />} title={<>Direito do<br/>Trabalho</>} desc="Defesa de direitos e prevenção de conflitos no ambiente profissional." />
              <Service icon={<Briefcase className="h-14 w-14" strokeWidth={1.5} />} title={<>Inventário</>} desc="Facilitando o processo sucessório com respeito e agilidade." />
              <Service icon={<Scale className="h-14 w-14" strokeWidth={1.5} />} title={<>Planejamento<br/>Patrimonial</>} desc="Estruturando o futuro da sua família com segurança." />
            </div>
          </div>
        </div>
      </section>

      {/* Áreas em que atuamos */}
      <section className="bg-brown pt-44 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-serif small-caps text-white text-3xl md:text-5xl mb-16 font-semibold">
            Áreas em que atuamos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AreaCard
              img={areaEmpregados}
              title="Para Empregados:"
              items={[
                "Rescisões trabalhistas.",
                "Reclamações trabalhistas.",
                "Assessoria em demissões por justa causa.",
                "Ações relacionadas à estabilidade no emprego.",
                "Acompanhamento em audiências e processos.",
              ]}
            />
            <AreaCard
              img={areaEmpresas}
              title="Para Empresas:"
              items={[
                "Elaboração de contratos de trabalho.",
                "Consultoria preventiva.",
                "Representação em ações trabalhistas.",
                "Conformidade com a CLT e defesa em fiscalizações.",
              ]}
            />
            <AreaCard
              img={areaAmbas}
              title="Para Ambas as Partes:"
              items={[
                "Negociação e mediação de conflitos.",
                "Acordos extrajudiciais.",
                "Revisão de políticas de compliance trabalhista.",
              ]}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:max-w-3xl md:mx-auto">
            <AreaCard
              img={areaInventario}
              title="Inventário:"
              items={[
                "Inventários judiciais e extrajudiciais.",
                "Mediação de conflitos familiares.",
                "Regularização de bens.",
                "Orientação na realização de testamentos.",
                "Requerimento de alvarás.",
                "Consultoria sobre herança de bens no exterior.",
              ]}
            />
            <AreaCard
              img={areaPatrimonial}
              title={<>Planejamento<br/>Patrimonial Familiar</>}
              items={[
                "Estruturação de holdings familiares.",
                "Testamentos e doações planejadas.",
                "Consultoria sobre regimes de casamento.",
                "Proteção patrimonial contra riscos e disputas.",
                "Planejamento sucessório para redução de impostos.",
                "Reorganização e formalização de bens.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* About Dra. Ana Carolina */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="rounded-md overflow-hidden shadow-lg bg-brown">
            <img src={draAna} alt="Dra. Ana Carolina" className="w-full aspect-[4/5] object-cover" loading="lazy" />
            <div className="px-6 py-6 text-center text-white">
              <h3 className="text-2xl font-semibold">Dra. Ana Carolina</h3>
              <p className="mt-1 italic text-white/90 text-sm">
                Especialista em Direito do Trabalho e Planejamento Sucessório
              </p>
            </div>
          </div>

          <div className="space-y-5 text-ink/85 leading-relaxed text-[15px]">
            <p>Especialista em Direito do Trabalho e Planejamento Sucessório</p>
            <p>
              Com mais de 20 anos de experiência, a Dra. Ana Carolina Duarte é uma referência em
              Direito do Trabalho e Planejamento Sucessório. Sua trajetória combina profundo
              conhecimento jurídico com uma abordagem personalizada, voltada a oferecer segurança
              e tranquilidade aos seus clientes em momentos decisivos.
            </p>
            <p>
              Ao longo de sua carreira, ela se destacou por sua atuação estratégica em questões
              trabalhistas, representando tanto colaboradores quanto empresas, e no planejamento
              sucessório, ajudando famílias a proteger seus patrimônios e planejar o futuro com
              inteligência e cuidado.
            </p>
            <p>
              Seja na resolução de conflitos, na estruturação de holdings familiares ou na condução
              de inventários, a Dra. Ana Carolina traz excelência técnica, ética e comprometimento,
              garantindo soluções eficazes e alinhadas às necessidades de cada cliente.
            </p>
            <p className="italic">
              “Acredito que o Direito é uma ferramenta para transformar desafios em segurança,
              proporcionando clareza e confiança para decisões importantes.”
            </p>
          </div>
        </div>
      </section>

      {/* CTA + Footer */}
      <section className="bg-ink pt-16 pb-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="bg-cream rounded-md px-8 py-16 text-center">
            <h2 className="text-ink text-2xl md:text-4xl font-bold leading-snug max-w-3xl mx-auto">
              Entre em contato para conhecer a solução ideal para a sua necessidade.
            </h2>
            <div className="mt-10">
              <CTAButton variant="dark" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90 text-sm mt-16 px-2">
            <ContactItem
              icon={<MapPin className="h-6 w-6 text-brown" />}
              title="Nossa Localização:"
              body="R. Tiradentes, nº.299, sala 2109, 21º andar - Jacareí/SP"
            />
            <ContactItem
              icon={<Phone className="h-6 w-6 text-brown" />}
              title="Telefones para contato:"
              body="(12) 98101-9614"
            />
            <ContactItem
              icon={<Mail className="h-6 w-6 text-brown" />}
              title="E-mail"
              body="carol@acconsultoriajuridica.com.br"
            />
          </div>

          <div className="mt-16 flex flex-col items-center gap-3 text-white/70 text-xs">
            <a href="#" aria-label="Instagram" className="text-white hover:text-white/80">
              <Instagram className="h-7 w-7" strokeWidth={1.5} />
            </a>
            <p>Copyright © 2025 - Todos os direitos reservados.</p>
            <p className="text-white/60">Termos de Uso | Políticas de Privacidade | Políticas de Cookies</p>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg"
        style={{ background: "oklch(0.7 0.18 150)" }}
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </main>
  );
}

function Stat({ icon, label }: { icon: React.ReactNode; label: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-3 text-ink">
      <div className="text-brown-dark">{icon}</div>
      <p className="text-base leading-snug">{label}</p>
    </div>
  );
}

function Service({ icon, title, desc }: { icon: React.ReactNode; title: React.ReactNode; desc: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-white/95">{icon}</div>
      <h3 className="font-serif text-2xl md:text-3xl font-semibold leading-tight">{title}</h3>
      <p className="text-sm text-white/90 max-w-[18ch]">{desc}</p>
    </div>
  );
}

function AreaCard({
  img,
  title,
  items,
}: {
  img: string;
  title: React.ReactNode;
  items: string[];
}) {
  return (
    <div className="flex flex-col">
      <img src={img} alt="" className="w-full aspect-[4/5] object-cover rounded-t-lg" loading="lazy" />
      <div className="bg-cream rounded-b-lg px-7 py-7 -mt-6 mx-3 rounded-lg shadow-md relative">
        <h3 className="text-center text-lg font-bold text-ink mb-4">{title}</h3>
        <ul className="space-y-2 text-[14px] text-ink/80 list-disc pl-5">
          {items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ContactItem({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="flex items-start gap-3 justify-center md:justify-start">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-white/80 mt-1">{body}</p>
      </div>
    </div>
  );
}
