import {
  Code,
  Database,
  Globe,
  Smartphone,
  Rocket,
  Video,
  ArrowDown,
  Settings,
  Server,
  Lock,
  Cloud,
} from "lucide-react";
import { useEffect, useState } from "react";

const phrases = [
  "Efectividad y Resultados Garantizados",
  "Desarrollo 100% Personalizado",
  "Meticulosa Atención a los Detalles",
  "Compromiso y Responsabilidad",
  "Respuestas Ágiles y Precisas",
  "Innovación con Tecnologías de Punta",
  "Experiencia que Marca la Diferencia",
];

const features = [
  { icon: Code, color: "text-blue-500" },
  { icon: Database, color: "text-green-500" },
  { icon: Globe, color: "text-purple-500" },
  { icon: Smartphone, color: "text-pink-500" },
  { icon: Rocket, color: "text-red-500" },
  { icon: Video, color: "text-yellow-500" },
  { icon: Settings, color: "text-indigo-500" },
  { icon: Server, color: "text-cyan-500" },
  { icon: Lock, color: "text-emerald-500" },
  { icon: Cloud, color: "text-gray-400" },
];

export const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Texto principal - Izquierda */}
        <div className="md:w-1/2 text-center md:text-left">
<h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-28 md:mt-6">
            <span className="opacity-0 animate-fade-in">Somos</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              ARECKS
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              ¿Qué podemos hacer por ti?
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3 mt-6">
            Informatización Integral, Optimización de esquemas de Trabajo, Sitios
            Web, Sistemas a medida y Publicidad en Internet. Te ayudamos a
            digitalizar, automatizar y crecer.
          </p>
          <br />
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Conoce Nuestro Trabajo
            </a>
          </div>
        </div>

        {/* Derecha: carrusel arriba, iconos abajo */}
        <div className="md:w-1/2 relative flex flex-col items-end gap-12">
          {/* Carrusel de frases arriba, pegado a la derecha */}
          <div
            className="overflow-hidden"
            style={{ width: "280px", height: "4rem" }}
          >
            <div
              className="transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateY(-${index * 4}rem)`,
              }}
            >
              {phrases.map((phrase, i) => (
                <div
                  key={i}
                  className="h-16 flex items-center justify-end text-xl md:text-2xl font-bold text-primary"
                >
                  {phrase}
                </div>
              ))}
              {/* Frases duplicadas invisibles para smooth loop */}
              {phrases.map((phrase, i) => (
                <div
                  key={"dup-" + i}
                  className="h-16 flex items-center justify-end text-xl md:text-2xl font-bold text-primary opacity-0"
                  aria-hidden="true"
                >
                  {phrase}
                </div>
              ))}
            </div>
          </div>

          {/* Iconos en círculo con animación suave sin orbitar */}
          <div className="relative w-[320px] h-[320px]">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const angle = (360 / features.length) * i;
              const radius = 140;
              const radian = (angle * Math.PI) / 180;
              const x = 160 + radius * Math.cos(radian) - 28; // Centrado
              const y = 160 + radius * Math.sin(radian) - 28;

              return (
                <div
                  key={i}
                  className={`absolute w-14 h-14 rounded-full bg-white/10 flex items-center justify-center ${feature.color} shadow-lg animate-icon-fade`}
                  style={{
                    top: y,
                    left: x,
                  }}
                >
                  <Icon className="w-8 h-8" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FLECHA SCROLL */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-muted-foreground mb-2"> Seguir </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

      {/* Animación suave para los iconos */}
      <style jsx>{`
        @keyframes iconFade {
          0% {
            transform: scale(0.9);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(0.9);
            opacity: 0.5;
          }
        }
        .animate-icon-fade {
          animation: iconFade 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
