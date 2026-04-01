import { motion } from "framer-motion";
import { Star, Clock, MapPin } from "lucide-react";
import cevicheImg from "@/assets/ceviche.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-ocean"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={cevicheImg}
          alt="Ceviche peruano fresco"
          className="w-full h-full object-cover"
          width={800}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="max-w-2xl">
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 bg-accent/20 backdrop-blur-sm text-accent-foreground px-3 py-1.5 rounded-full text-sm font-medium border border-accent/30">
              <Star className="w-4 h-4 fill-accent text-accent" />
              4.4 en Google
            </span>
            <span className="inline-flex items-center gap-1.5 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium border border-primary-foreground/20">
              +400 reseñas
            </span>
            <span className="inline-flex items-center gap-1.5 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium border border-primary-foreground/20">
              <Clock className="w-4 h-4" />
              Abierto desde 10:00 a.m.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-4 leading-tight"
          >
            El Muelle
            <br />
            <span className="italic font-medium">de Javier</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/80 font-body mb-2"
          >
            Cevichería y restaurante de comida marina en Carabayllo.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-primary-foreground/60 font-body mb-8 max-w-lg"
          >
            Reconocido por su sabor, frescura y creatividad en cada plato.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#reservas"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              Reservar mesa
            </a>
            <a
              href="#menu"
              className="bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-foreground/20 transition-colors duration-200"
            >
              Ver menú
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex items-center gap-2 text-primary-foreground/60 text-sm"
          >
            <MapPin className="w-4 h-4" />
            Av. Señor de Caudivilla, Carabayllo, Lima
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
