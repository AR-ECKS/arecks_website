import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CERMAD PHARMA",
    logo: "https://iili.io/3tc0vyJ.md.png",
    description:
      "Sistema web integral para administración farmacéutica que permite gestionar productos, compras, inventarios, almacenes, ventas, cotizaciones y control detallado de stock. Incluye módulos para reportes financieros y control de caducidades, facilitando la gestión diaria y el cumplimiento normativo del rubro.",
    tags: ["Sistema Web", "Inventario", "Ventas", "Farmacia", "Reportes"],
  },
  {
    id: 2,
    title: "GRUPO CEOQUIM SRL",
    logo: "https://iili.io/3taZRaI.png",
    description:
      "ERP personalizado para empresas comerciales, con módulos de compras, ventas, inventario, devoluciones, kardex y reportes diarios. Permite controlar movimientos, registrar proveedores, y automatizar procesos para mejorar la eficiencia y exactitud en la gestión de productos y finanzas.",
    tags: ["ERP", "Inventario", "Ventas", "Devoluciones", "Reportes"],
  },
  {
    id: 3,
    title: "ALENKAS SRL",
    logo: "https://iili.io/3taidJe.jpg",
    description:
      "Sistema ERP diseñado para procesos industriales, con control de producción, inventarios, compras y salida de productos terminados. Facilita la planificación, seguimiento y control de procesos productivos, optimizando recursos y asegurando trazabilidad desde materia prima hasta producto final.",
    tags: ["ERP", "Producción", "Inventario", "Procesos", "Control"],
  },
  {
    id: 4,
    title: "MIKEYA",
    logo: "https://mikeyatoys.com/wp-content/uploads/2024/10/cropped-Sin_titulo-8-removebg-preview.png",
    description:
      "Desarrollo completo de tienda online para venta de coches eléctricos para niños. Incluye catálogo interactivo, carrito de compras, sistema de pagos seguro y gestión de pedidos. El sitio está optimizado para experiencia de usuario y conversiones, posicionando la marca en el mercado digital.",
    tags: ["E-commerce", "React", "Tienda Online", "Ventas", "UI/UX"],
    demoUrl: "https://mikeyatoys.com/",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-secondary/10"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container mx-auto max-w-7xl">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center font-lost-title"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Proyectos <span className="text-primary">Destacados</span>
        </h2>

        <p
          className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto font-sans"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          A continuación, algunos de los proyectos que he desarrollado para clientes reales. Cada uno pensado y construido para solucionar necesidades específicas y optimizar sus procesos internos y presencia digital.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
              title={`Proyecto: ${project.title}`}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 200}
            >
              {/* Logo con imagen */}
              <div className="mb-4 w-full h-24 flex items-center justify-center">
                <img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className="max-h-20 object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold mb-3 font-lost-title text-foreground">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 flex-grow font-sans">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Solo para MIKEYA mostramos botón "Ver Demo" */}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 mt-auto text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors duration-300"
                  aria-label={`Ver demo de ${project.title}`}
                >
                  Ver Sitio <ExternalLink size={16} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
