export default function Header() {
  return (
    <header className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      <nav className="relative z-10 flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold" style={{ fontFamily: 'Times New Roman, serif' }}>NanoTatto</h1>
        <div className="flex gap-6">
          <a href="#galeria" className="hover:text-gray-300">
            Galería
          </a>
          <a href="#contacto" className="hover:text-gray-300">
            Contacto
          </a>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-6xl font-bold mb-6">Arte Minimalista en tu Piel</h2>
        <p className="text-xl mb-8 max-w-2xl">
          Especialistas en tatuajes minimalistas y lettering
        </p>
        <a
          href="https://wa.me/+18574104599"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
        >
          Reserva tu Cita por WhatsApp
        </a>
      </div>
    </header>
  );
}
