import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-widest font-body">
            Encuéntranos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Ubicación & Contacto
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-ocean h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5!2d-77.03!3d-11.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDUxJzAwLjAiUyA3N8KwMDEnNDguMCJX!5e0!3m2!1ses!2spe!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación El Muelle de Javier"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl p-6 shadow-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-ocean-light flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Dirección</h3>
                <p className="text-muted-foreground font-body text-sm mt-1">
                  Av. Señor de Caudivilla, Mz T1 Lote 15<br />
                  Carabayllo, Lima, Perú
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-ocean-light flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Teléfonos</h3>
                <div className="space-y-1 mt-1">
                  <a href="tel:+51906387511" className="text-secondary hover:underline font-body text-sm block">
                    +51 906 387 511
                  </a>
                  <a href="tel:+51993785799" className="text-secondary hover:underline font-body text-sm block">
                    +51 993 785 799
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-ocean-light flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Horario</h3>
                <p className="text-muted-foreground font-body text-sm mt-1">
                  Abierto desde las 10:00 a.m.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-ocean-light flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Redes Sociales</h3>
                <div className="flex gap-3 mt-2">
                  <a
                    href="https://facebook.com/ElMuelleDeJavier"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-secondary hover:underline font-body text-sm"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com/elmuelledejaviercevicheria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-secondary hover:underline font-body text-sm"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
