import { SOCIAL_LINKS } from "../utils/social";

export default function HeroSection() {

  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h2 className="text-6xl font-bold mb-6">Arte Minimalista en tu Piel</h2>
      <p className="text-xl mb-8 max-w-2xl">
        Especialistas en tatuajes minimalistas y lettering
      </p>
      <a
        href={`${SOCIAL_LINKS.WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
      >
        Reserva tu Cita por WhatsApp
      </a>
    </div>
  );
}