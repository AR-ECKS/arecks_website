import {
  Code,
  Database,
  Globe,
  Smartphone,
  Rocket,
  Video,
} from "lucide-react";
import { useEffect } from "react";

const features = [
  {
    icon: <Code className="h-6 w-6 text-blue-500 transition-transform" />,
    title: "Sitios Web Premium",
  },
  {
    icon: <Database className="h-6 w-6 text-green-500 transition-transform" />,
    title: "Sistemas a Medida",
  },
  {
    icon: <Globe className="h-6 w-6 text-purple-500 transition-transform" />,
    title: "Marketing en la Web",
  },
  {
    icon: (
      <Smartphone className="h-6 w-6 text-pink-500 transition-transform" />
    ),
    title: "Responsive Design & Mobile Apps",
  },
  {
    icon: <Rocket className="h-6 w-6 text-red-500 transition-transform" />,
    title: "Identidad Digital y Branding",
  },
  {
    icon: <Video className="h-6 w-6 text-yellow-500 transition-transform" />,
    title: "Edición y Creación de Contenido Audiovisual",
  },
];

export const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false, // para que se vea cada vez que haces scroll hacia la sección
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative bg-transparent" data-aos="fade-up" data-aos-duration="1200">
      <div className="container mx-auto max-w-6xl">
        {/* Título */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-lost-title"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <span className="text-primary">Sobre</span> nosotros
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Texto explicativo - Izquierda */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <p
              className="text-muted-foreground mb-6 text-lg md:text-xl leading-relaxed"
              data-aos="fade-right"
            >
              En ARECKS, somos un equipo apasionado por la tecnología y el
              marketing digital. Nuestra misión es ayudar a empresas a crecer
              y transformarse con soluciones digitales innovadoras y
              personalizadas.
            </p>
            <p
              className="text-muted-foreground text-lg md:text-xl leading-relaxed"
              data-aos="fade-left"
            >
              Transformamos ideas en soluciones digitales efectivas.
              Desarrollamos desde sitios web hasta sistemas a medida, con
              identidad profesional y crecimiento sostenible.
            </p>
          </div>

          {/* Tarjetas resumen - Derecha */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer flex items-center gap-4"
              >
                <div
                  className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-transform duration-500 inline-flex"
                >
                  {feature.icon}
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-foreground transition-all duration-300">
                  {feature.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        div.group:hover div > svg {
          animation: spin 0.6s linear forwards;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};
