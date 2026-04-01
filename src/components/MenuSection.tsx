import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Flame } from "lucide-react";
import cevicheImg from "@/assets/ceviche.png";
import jaleaImg from "@/assets/jalea.png";
import combinadoImg from "@/assets/combinado.jpg";
import arrozImg from "@/assets/arroz-marino.jpg";
import chicharronImg from "@/assets/chicharron.jpg";
import causaImg from "@/assets/causa.jpg";
import lecheImg from "@/assets/leche-tigre.png";

const categories = [
  "Todos",
  "Ceviches",
  "Jaleas",
  "Combinados",
  "Arroces",
  "Chicharrones",
  "Causas",
];

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  popular?: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: "Ceviche Muelle",
    description: "Nuestro plato estrella. Pescado fresco marinado en limón con ají, cebolla y camote.",
    price: "S/ 45",
    image: cevicheImg,
    category: "Ceviches",
    popular: true,
  },
  {
    name: "Ceviche de Pescado",
    description: "Clásico ceviche peruano con pescado del día, choclo y cancha.",
    price: "S/ 38",
    image: lecheImg,
    category: "Ceviches",
  },
  {
    name: "Jalea Mixta",
    description: "Fritura mixta de mariscos y pescado con yuca y salsa criolla.",
    price: "S/ 55",
    image: jaleaImg,
    category: "Jaleas",
    popular: true,
  },
  {
    name: "Combinado Marino Especial",
    description: "Selección de nuestros mejores platos marinos en una sola bandeja.",
    price: "S/ 60",
    image: combinadoImg,
    category: "Combinados",
    popular: true,
  },
  {
    name: "Arroz con Mariscos",
    description: "Arroz bañado en salsa de mariscos con langostinos, conchas y calamares.",
    price: "S/ 48",
    image: arrozImg,
    category: "Arroces",
  },
  {
    name: "Chicharrón de Pescado",
    description: "Trozos de pescado crocante acompañados de yuca y salsa tártara.",
    price: "S/ 35",
    image: chicharronImg,
    category: "Chicharrones",
  },
  {
    name: "Causa Marina",
    description: "Capas de papa amarilla rellenas de mariscos con palta y ají.",
    price: "S/ 32",
    image: causaImg,
    category: "Causas",
  },
];

const MenuSection = () => {
  const [active, setActive] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "Todos" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest font-body">
            Nuestra carta
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Menú del Mar
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-lg mx-auto">
            Platos preparados con los ingredientes más frescos del mar peruano.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold font-body transition-all duration-200 ${
                active === cat
                  ? "bg-secondary text-secondary-foreground shadow-ocean"
                  : "bg-card text-muted-foreground hover:bg-ocean-light hover:text-secondary border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-ocean transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  width={400}
                  height={300}
                />
                {item.popular && (
                  <span className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Flame className="w-3 h-3" />
                    Popular
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {item.name}
                  </h3>
                  <span className="text-secondary font-bold font-body text-lg whitespace-nowrap ml-3">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm font-body mt-8">
          Precio promedio: S/ 40 – S/ 60 por persona
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
