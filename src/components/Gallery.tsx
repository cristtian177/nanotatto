import  { useState } from 'react';
import { GALLERY_CATEGORIES } from '../utils/gallery';
import GalleryFilter from './gallery/GalleryFilter';
import GalleryImage from './gallery/GalleryImage';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState(GALLERY_CATEGORIES[0].id);
  const currentCategory = GALLERY_CATEGORIES.find(cat => cat.id === activeCategory);

  return (
    <section id="galeria" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Nuestros Trabajos</h2>
        
        <GalleryFilter
          categories={GALLERY_CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {currentCategory && (
          <div className="text-center mb-8">
            <p className="text-gray-400">{currentCategory.description}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentCategory?.images.map((image, index) => (
            <GalleryImage key={index} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
}