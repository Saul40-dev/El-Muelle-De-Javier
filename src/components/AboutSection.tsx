import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Anchor, Fish, Heart, Users } from "lucide-react";
import chefImg from "@/assets/chef.jpg";

const highlights = [
  { icon: Fish, label: "Ingredientes frescos del mar" },
  { icon: Heart, label: "Pasión por la cocina" },
  { icon: Users, label: "Ambiente familiar" },
  { icon: Anchor, label: "Conexión con el mar" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-24 bg-sand" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest font-body">
              Nuestra historia
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Sabor, frescura y{" "}
              <span className="italic text-secondary">pasión por el mar</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                El Muelle de Javier nació en Carabayllo con una misión clara:
                ofrecer comida marina fresca, sabrosa y generosa, preparada con
                pasión por el chef Javier y su equipo.
              </p>
              <p>
                Cada plato representa nuestra conexión con el mar, el respeto por
                los ingredientes y el compromiso con nuestros clientes.
              </p>
              <p className="font-medium text-foreground">
                Aquí no solo servimos comida, servimos experiencias.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-card rounded-xl shadow-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-ocean-light flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-foreground font-body">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-ocean">
              <img
                src={chefImg}
                alt="Chef Javier preparando ceviche fresco"
                className="w-full h-[500px] object-cover max-w-full"
                loading="lazy"
                width={800}
                height={800}
              />
            </div>
            <div className="absolute -bottom-6 left-4 md:-left-6 bg-card p-4 md:p-6 rounded-2xl shadow-ocean max-w-[calc(100%-2rem)]">
              <p className="font-display text-2xl md:text-3xl font-bold text-secondary">+10</p>
              <p className="text-sm text-muted-foreground font-body">Años de experiencia</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
