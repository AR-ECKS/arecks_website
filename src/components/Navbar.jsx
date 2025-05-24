import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Inicio", href: "#hero" },
  { name: "Acerca de", href: "#about" },
  { name: "Servicios", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Detectar sección activa según scroll
      const scrollPos = window.scrollY + window.innerHeight / 3;

      let current = "hero";
      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY;
          if (scrollPos >= top) {
            current = item.href.replace("#", "");
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    // Ejecutar al cargar para detectar la sección inicial
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center space-x-3"
          href="#hero"
        >
          <img src="https://iili.io/3D2D0EG.md.png" alt="Logo de Arecks" className="w-10 h-10" />
          <span className="relative z-10">
            <span className="text-glow text-foreground">Arecks</span> Software & Marketing
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "relative text-foreground/80 hover:text-primary transition-colors duration-300",
                  isActive && "text-orange-500 font-semibold",
                )}
              >
                {item.name}

                {/* Subrayado animado solo si está activo */}
                {isActive && (
                  <span
                    className="absolute left-0 -bottom-1 h-0.5 w-full bg-orange-500
                      animate-underline"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes underline {
          0% {
            width: 0;
            left: 50%;
          }
          50% {
            width: 100%;
            left: 0;
          }
          100% {
            width: 0;
            left: 50%;
          }
        }
        .animate-underline {
          animation: underline 2s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
};
