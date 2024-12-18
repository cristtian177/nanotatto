export default function Navigation() {
  return (
    <nav className="relative z-10 flex justify-between items-center p-6">
      <h1 className="text-3xl font-bold">NanoTatto</h1>
      <div className="flex gap-6">
        <a href="#galeria" className="hover:text-gray-300">
          Galería
        </a>
        <a href="#contacto" className="hover:text-gray-300">
          Contacto
        </a>
      </div>
    </nav>
  );
}