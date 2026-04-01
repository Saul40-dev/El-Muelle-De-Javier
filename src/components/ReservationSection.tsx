import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Check } from "lucide-react";

const ReservationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="reservas" className="py-24 bg-sand" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest font-body">
              Reservaciones
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
              Reserva tu mesa
            </h2>
            <p className="text-muted-foreground font-body mt-3">
              Asegura tu lugar y disfruta de la mejor comida marina de Carabayllo.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 shadow-ocean space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-semibold text-foreground font-body block mb-1.5">Nombre</label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground font-body block mb-1.5">Teléfono</label>
                <input
                  type="tel"
                  required
                  placeholder="+51 ..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              <div>
                <label className="text-sm font-semibold text-foreground font-body block mb-1.5">Personas</label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground font-body block mb-1.5">Fecha</label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground font-body block mb-1.5">Hora</label>
                <input
                  type="time"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-foreground font-body block mb-1.5">Mensaje (opcional)</label>
              <textarea
                rows={3}
                placeholder="Alguna solicitud especial..."
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className={`w-full py-4 rounded-xl font-semibold text-lg font-body flex items-center justify-center gap-2 transition-all duration-300 ${
                submitted
                  ? "bg-green-500 text-primary-foreground"
                  : "bg-accent text-accent-foreground hover:scale-[1.02] hover:shadow-lg"
              }`}
            >
              {submitted ? (
                <>
                  <Check className="w-5 h-5" />
                  ¡Reserva enviada!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Reservar mesa
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
