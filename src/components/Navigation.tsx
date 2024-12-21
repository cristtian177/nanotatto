export default function Navigation() {
  return (
    <nav className="relative z-10 flex justify-between items-center pt-6 px-2">
      <h1 className="text-3xl font-bold">NanoTatto</h1>
      <div className="flex justify-between items-center">
        <a href="#aboutMe" className="hover:text-gray-300 ">
          Sobre mí
        </a>
        <a href="#galeria" className="hover:text-gray-300 px-2">
          Galería
        </a>
        <a href="#contacto" className="hover:text-gray-300">
          Contacto
        </a>
      </div>
    </nav>
  );
}