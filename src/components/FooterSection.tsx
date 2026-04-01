import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const FooterSection = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <img src={logo} alt="El Muelle de Javier" className="h-16 w-auto mb-4" />
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              Cevichería y restaurante de comida marina reconocido en Carabayllo por su sabor y frescura.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold">Contacto</h4>
            <div className="space-y-3 text-primary-foreground/70 font-body text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                Av. Señor de Caudivilla, Mz T1 Lote 15, Carabayllo, Lima
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +51 906 387 511 / 993 785 799
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                Abierto desde las 10:00 a.m.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-display text-lg font-bold">Síguenos</h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/ElMuelleDeJavier"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/elmuelledejaviercevicheria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-primary-foreground/40 font-body text-sm">
          © {new Date().getFullYear()} El Muelle de Javier — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
