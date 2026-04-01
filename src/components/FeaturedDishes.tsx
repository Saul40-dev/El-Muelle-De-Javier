import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";
import cevicheImg from "@/assets/ceviche.png";
import jaleaImg from "@/assets/jalea.png";
import combinadoImg from "@/assets/combinado.jpg";
import lecheImg from "@/assets/leche-tigre.png";

const dishes = [
  {
    name: "Ceviche Muelle",
    description: "Nuestro plato insignia: pescado fresco del día marinado al limón con ají limo, cebolla morada y camote glaseado.",
    image: cevicheImg,
  },
  {
    name: "Ceviche de Pescado",
    description: "El clásico peruano preparado con la receta tradicional del chef Javier y los ingredientes más frescos.",
    image: lecheImg,
  },
  {
    name: "Jalea Mixta",
    description: "Generosa fuente de mariscos y pescado crocante, acompañado de yuca dorada y salsa criolla.",
    image: jaleaImg,
  },
  {
    name: "Combinado Marino",
    description: "La experiencia completa del mar en un solo plato: ceviche, chicharrón, jalea y arroz.",
    image: combinadoImg,
  },
];

const FeaturedDishes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-sand" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest font-body">
            Lo más pedido
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Platos Destacados
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-ocean transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-2/5 h-56 sm:h-auto overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-1.5 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit">
                    <Award className="w-3.5 h-3.5" />
                    Especialidad de la casa
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
