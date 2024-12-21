import { useState } from "react";
import { GALLERY_CATEGORIES } from "../utils/gallery";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState(
    GALLERY_CATEGORIES[0].id
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const currentCategory = GALLERY_CATEGORIES.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section id="galeria" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Una muestra de nuestros trabajos
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {GALLERY_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? "bg-red-600 text-white"
                  : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {currentCategory && (
          <div className="text-center mb-8">
            <p className="text-gray-400">{currentCategory.description}</p>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-4">
          {currentCategory?.images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  Ver Imagen
                </span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative">
              <img
                src={selectedImage}
                alt="Imagen seleccionada"
                className="max-w-full max-h-screen object-contain cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              />
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
