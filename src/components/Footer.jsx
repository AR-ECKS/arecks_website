import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-orange-600 border-t border-orange-700 flex flex-col items-center justify-center gap-2">
      <p className="text-xs text-white text-center">
        &copy; {new Date().getFullYear()} ARECKS - Consultoría en Software & Marketing. Todos los derechos reservados.
      </p>
      <a
        href="#hero"
        aria-label="Volver arriba"
        className="p-2 rounded-full bg-orange-400 hover:bg-orange-500 text-white transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
