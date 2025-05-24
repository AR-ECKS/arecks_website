import { 
  Code, 
  Monitor, 
  Server, 
  Megaphone, 
  Settings, 
  BarChart2, 
  Video, 
  Truck, 
  Users, 
  CalendarCheck, 
  GraduationCap, 
  Globe 
} from "lucide-react";

const skillGroups = [
  {
    groupName: "Desarrollo de Software y Web",
    groupColor: "text-blue-500",
    icon: <Code className="h-6 w-6" />,
    skills: [
      "Sistemas y aplicaciones web a medida.",
      "Desarrollo de apps móviles (iOS/Android).",
      "Diseño de sitios modernos y responsivos.",
      "ERP, CRM, ecommerce y sistemas internos.",
    ],
  },
  {
    groupName: "Soporte y Mantenimiento",
    groupColor: "text-gray-600",
    icon: <Settings className="h-6 w-6" />,
    skills: [
      "Soporte técnico y asistencia permanente.",
      "Actualizaciones, backups y seguridad.",
      "Correo corporativo, dominios y hosting.",
      "Mantenimiento de sistemas y optimización.",
    ],
  },
  {
    groupName: "Marketing Digital y Branding",
    groupColor: "text-red-500",
    icon: <Megaphone className="h-6 w-6" />,
    skills: [
      "Campañas publicitarias (Meta y Google).",
      "Branding e identidad de marca profesional.",
      "Gestión de redes sociales y contenidos.",
      "Automatización de marketing omnicanal.",
    ],
  },
  {
    groupName: "Analítica y Datos",
    groupColor: "text-green-600",
    icon: <BarChart2 className="h-6 w-6" />,
    skills: [
      "Tableros, métricas y KPIs interactivos.",
      "Auditorías y análisis de rendimiento.",
      "Optimización con base en datos reales.",
      "Integración de herramientas de analítica.",
    ],
  },
  {
    groupName: "Ventas y Sistemas Comerciales", 
    groupColor: "text-orange-500",
    icon: <Monitor className="h-6 w-6" />,
    skills: [
      "Sistemas de punto de venta para tiendas, restaurantes y farmacias.",
      "Gestión de stock, compras, ventas y reportes diarios.",
      "Implementación de sistemas CRM para leads y oportunidades.",
      "Automatización desde cotizaciones hasta la facturación.",
    ],
  },

  {
    groupName: "Recursos Humanos y Gestión",
    groupColor: "text-pink-600",
    icon: <Users className="h-6 w-6" />,
    skills: [
      "Sistemas para gestión de personal.",
      "Evaluaciones, asistencias y turnos.",
      "Control de vacaciones y documentos.",
      "Automatización de procesos internos.",
    ],
  },
  {
    groupName: "Capacitación y Asesorías",
    groupColor: "text-purple-600",
    icon: <GraduationCap className="h-6 w-6" />,
    skills: [
      "Cursos de tecnología para empresas.",
      "Capacitación en software y marketing.",
      "Talleres presenciales y virtuales.",
      "Asesoría personalizada y consultoría.",
    ],
  },
  {
    groupName: "Gestión de Proyectos y Clientes",
    groupColor: "text-cyan-600",
    icon: <CalendarCheck className="h-6 w-6" />,
    skills: [
      "Planificación de proyectos con seguimiento.",
      "Agendas, citas y atención al cliente.",
      "Gestión de tickets y soporte técnico.",
      "Colaboración fluida entre equipos.",
    ],
  },
];

export const SkillsSection = () => {
  return (
    <section 
      id="skills" 
      className="py-20 px-6 bg-secondary/20 font-sans"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-once="false"
    >
      <div className="container mx-auto max-w-7xl text-center">
        <h2 
          className="text-4xl font-bold mb-16 font-lost-title"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          ¿Qué podemos hacer por <span className="text-primary">usted?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.03] group cursor-pointer flex flex-col items-center"
              title={`Servicios de ${group.groupName}`}
              data-aos="fade-down"
              data-aos-duration="1200"
              data-aos-delay={idx * 150}
            >
              <div
                className={`flex items-center justify-center gap-4 mb-4 ${group.groupColor} bg-primary/20 p-4 rounded-full`}
              >
                {group.icon}
              </div>

              <h3 
                className="text-2xl font-bold text-foreground font-lost-title mb-4"
              >
                {group.groupName}
              </h3>

              <ul className="list-none p-0 m-0 space-y-2 max-w-xs text-left">
                {group.skills.map((skillText, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground text-sm font-normal leading-snug"
                  >
                    {skillText}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .group:hover div > svg {
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
