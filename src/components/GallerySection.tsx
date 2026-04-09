import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import cevicheImg from "@/assets/ceviche.png";
import jaleaImg from "@/assets/jalea.png";
import combinadoImg from "@/assets/combinado.jpg";
import arrozImg from "@/assets/arroz-marino.jpg";
import chicharronImg from "@/assets/chicharron.jpg";
import causaImg from "@/assets/causa.jpg";
import interiorImg from "@/assets/restaurant-interior.jpg";
import chefImg from "@/assets/chef.jpg";

const images = [
  { src: cevicheImg, alt: "Ceviche fresco peruano" },
  { src: jaleaImg, alt: "Jalea mixta crocante" },
  { src: interiorImg, alt: "Interior del restaurante" },
  { src: combinadoImg, alt: "Combinado marino especial" },
  { src: chefImg, alt: "Chef Javier en la cocina" },
  { src: arrozImg, alt: "Arroz con mariscos" },
  { src: chicharronImg, alt: "Chicharrón de pescado" },
  { src: causaImg, alt: "Causa marina" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section id="galeria" className="py-24 bg-background" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest font-body">
              Nuestra galería
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
              Momentos & Sabores
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {images.map((img, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => setLightbox(i)}
                className={`group relative overflow-hidden rounded-xl ${
                  i === 2 || i === 4 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-body font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                    Ver imagen
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground"
            onClick={() => setLightbox(null)}
            aria-label="Cerrar"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default GallerySection;
