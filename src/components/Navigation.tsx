export default function Navigation() {
  return (
    <nav className="relative z-10 flex justify-between items-center p-6">
      <h1 className="text-3xl font-bold">NanoTatto</h1>
      <div className="justify-between">
        <a href="#aboutMe" className="hover:text-gray-300 px-2">
          Sobre mí
        </a>
        <a href="#galeria" className="hover:text-gray-300 px-2">
          Galería
        </a>
        <a href="#contacto" className="hover:text-gray-300 ps-2">
          Contacto
        </a>
      </div>
    </nav>
  );
}