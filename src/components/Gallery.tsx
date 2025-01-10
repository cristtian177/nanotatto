import React, { useState, useEffect } from "react";
import { GALLERY_CATEGORIES } from "../utils/gallery"; // Importa los datos del archivo JSON

const TattooCarousel: React.FC = () => {
  const sections = GALLERY_CATEGORIES;

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const currentSection = sections[currentSectionIndex];
  const currentImage = currentSection.images[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => {
      return prevIndex === currentSection.images.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      return prevIndex === 0 ? currentSection.images.length - 1 : prevIndex - 1;
    });
  };

  const changeSection = (index: number) => {
    setCurrentSectionIndex(index);
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000); // Cambia de imagen cada 5 segundos
    return () => clearInterval(timer);
  }, [currentSection.images.length, currentImageIndex]);

  return (
    <section id="galeria" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Una muestra de nuestros trabajos
        </h2>

        {/* Botones de Categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => changeSection(index)}
              className={`px-6 py-2 rounded-full transition-colors ${
                index === currentSectionIndex
                  ? "bg-red-600 text-white"
                  : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
              }`}
            >
              {section.name}
            </button>
          ))}
        </div>

        {/* Carrusel */}
        <div className="relative h-[500px]  w-full max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-lg h-full w-full">
            <img
              src={currentImage.url}
              alt={currentImage.alt}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setModalImage(currentImage.url)}
            />

            {/* Indicadores */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {sections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full ${index === currentImageIndex ? "bg-red-600" : "bg-gray-400"}`}
                    ></button>
                ))}
            </div>

            {/* Controles */}
            <button
              onClick={prevImage}
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              onClick={nextImage}
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>

        {/* Modal */}
        {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setModalImage(null)}
          >
            <div className="relative">
              <img
                src={modalImage}
                alt="Imagen seleccionada"
                className="max-w-full max-h-screen object-contain cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={() => setModalImage(null)}
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
};

export default TattooCarousel;
