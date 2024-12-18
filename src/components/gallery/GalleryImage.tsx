import type { GalleryImage } from '../../utils/gallery';

interface Props {
  image: GalleryImage;
}

export default function GalleryImage({ image }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img
        src={image.url}
        alt={image.alt}
        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-lg font-semibold">Ver Detalle</span>
      </div>
    </div>
  );
}