import { useState, useEffect } from "react";
import { GALLERY_CATEGORIES } from "../utils/gallery";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState(
    GALLERY_CATEGORIES[0].id
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Modal para abrir imagen
  const [currentIndex, setCurrentIndex] = useState(0); // Control del índice del carrusel

  const currentCategory = GALLERY_CATEGORIES.find(
    (cat) => cat.id === activeCategory
  );
  const images = currentCategory?.images || [];

  // Cambio automático del carrusel cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  // Función para cambiar manualmente entre imágenes
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="galeria" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Una muestra de nuestros trabajos
        </h2>

        {/* Botones de Categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {GALLERY_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${activeCategory === category.id ? "bg-red-600 text-white" : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="flex justify-center w-full mb-8 h-full">
          <div className="flex justify-center items-center w-full h-full">
            {/* Carrusel */}
            <div id="carousel" className="relative  h-96 w-64">
              {/* Contenedor del Carrusel */}
              <div className="relative  overflow-hidden rounded-lg h-full w-full">
                {images.map((_images, index) => (
                  <div
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setSelectedImage(images[index].url)} // Abre modal al hacer clic
                  >
                    <img
                      src={_images.url}
                      alt={_images.alt}
                      className="w-full h-full object-cover cursor-pointer"
                    />
                  </div>
                ))}
              </div>

              {/* Indicadores */}
              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-red-600" : "bg-gray-400"}`}
                    ></button>
                ))}
              </div>

              {/* Controles */}
              <button
                onClick={handlePrev}
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                  ‹
                </span>
              </button>
              <button
                onClick={handleNext}
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                  ›
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)} // Cierra modal al hacer clic fuera
          >
            <div className="relative">
              <img
                src={selectedImage}
                alt="Imagen seleccionada"
                className="max-w-full max-h-screen object-contain cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              />
              {/* Botón para cerrar */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer hover:text-red-500 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 