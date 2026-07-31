import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/contact";

const links = [
  { href: "#sobre", label: "Sobre o advogado" },
  { href: "#como-funciona", label: "Atendimento" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open
          ? "border-b border-border bg-darker/90 backdrop-blur-xl"
          : "border-b border-transparent"
        }`}
    >
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5">
        <a href="#topo" className="flex min-w-0 items-center gap-4" aria-label="Início">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[3px] bg-foreground font-display text-[15px] tracking-tight text-darker">
            JCA
          </span>
          <span className="min-w-0 border-l border-border pl-4">
            <span className="block truncate font-display text-[17px] leading-tight tracking-wide text-foreground">
              João Carlos Alves
            </span>
            <span className="block text-[9px] tracking-[0.42em] text-muted-foreground">
              ADVOCACIA
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-wide text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-2.5 text-[13px] font-semibold tracking-wide text-foreground transition-colors hover:border-gold hover:text-gold"
          >

            Fale conosco
          </a>

        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="shrink-0 border border-border px-4 py-2.5 text-[12px] tracking-[0.2em] text-foreground uppercase lg:hidden"
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-darker lg:hidden">
          <nav className="container-page flex flex-col py-2" aria-label="Menu">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/70 py-4 font-display text-xl text-foreground last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-5 mb-3 border border-gold px-6 py-4 text-center text-sm font-semibold tracking-wide text-gold"
            >
              Fale conosco
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}
