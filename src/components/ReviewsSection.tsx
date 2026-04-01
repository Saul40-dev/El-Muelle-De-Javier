import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  { name: "María G.", text: "Uno de los mejores ceviches de Carabayllo. Siempre regreso por más.", rating: 5 },
  { name: "Carlos R.", text: "Platos abundantes y muy frescos. El combinado marino es increíble.", rating: 5 },
  { name: "Ana P.", text: "Excelente sabor y ambiente familiar. Los niños también lo disfrutan mucho.", rating: 4 },
  { name: "José L.", text: "La jalea mixta es espectacular. Porción generosa y todo crujiente.", rating: 5 },
  { name: "Lucía M.", text: "El mejor ceviche que he probado en Lima Norte. 100% recomendado.", rating: 5 },
  { name: "Pedro S.", text: "Atención rápida y amable. Los arroces marinos son buenísimos.", rating: 4 },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % reviews.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  return (
    <section id="resenas" className="py-24 bg-gradient-ocean text-primary-foreground" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary-foreground/60 font-semibold text-sm uppercase tracking-widest font-body">
            Nuestros clientes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3">
            Lo que dicen de nosotros
          </h2>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((s) => (
                <Star key={s} className="w-6 h-6 fill-accent text-accent" />
              ))}
              <Star className="w-6 h-6 fill-accent/50 text-accent" />
            </div>
            <span className="text-2xl font-bold font-display">4.4 / 5</span>
            <span className="text-primary-foreground/60 font-body">· +400 reseñas en Google</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-2xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-primary-foreground/10 text-center"
          >
            <Quote className="w-10 h-10 text-accent/50 mx-auto mb-4" />
            <p className="text-xl md:text-2xl font-display italic mb-6 leading-relaxed">
              "{reviews[current].text}"
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: reviews[current].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="font-semibold font-body">— {reviews[current].name}</span>
            </div>
          </motion.div>

          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-accent w-6" : "bg-primary-foreground/30"}`}
                  aria-label={`Reseña ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
