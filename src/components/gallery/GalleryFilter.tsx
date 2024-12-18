import type { GalleryCategory } from '../../utils/gallery';

interface Props {
  categories: GalleryCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function GalleryFilter({ categories, activeCategory, onCategoryChange }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-2 rounded-full transition-colors ${
            activeCategory === category.id
              ? 'bg-red-600 text-white'
              : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}