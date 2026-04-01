import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const message = encodeURIComponent("Hola, quiero hacer una reserva en El Muelle de Javier.");
  const url = `https://wa.me/51906387511?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-[#25D366] text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 animate-fade-up"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
