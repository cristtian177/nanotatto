export default function HeroSection() {
  const WHATSAPP_NUMBER = '+18574104599';

  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h2 className="text-6xl font-bold mb-6">Arte Minimalista en tu Piel</h2>
      <p className="text-xl mb-8 max-w-2xl">
        Especialistas en tatuajes minimalistas y lettering
      </p>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
      >
        Reserva tu Cita por WhatsApp
      </a>
    </div>
  );
}