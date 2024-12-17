export interface GalleryCategory {
  id: string;
  name: string;
  description: string;
  images: string[];
}

export const categories: GalleryCategory[] = [
  {
    id: 'minimalista',
    name: 'Minimalista',
    description: 'Diseños simples y elegantes que capturan la esencia con líneas limpias',
    images: [
      'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590246814883-57c511e76523?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'lettering',
    name: 'Lettering',
    description: 'Caligrafía moderna y tipografías únicas',
    images: [
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590246814883-57c511e76523?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1543932927-99e45ea7c410?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'geometrico',
    name: 'Geométrico',
    description: 'Patrones y formas geométricas precisas',
    images: [
      'https://images.unsplash.com/photo-1590246814883-57c511e76523?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'fineline',
    name: 'Fine Line',
    description: 'Tatuajes delicados con líneas finas y detalladas',
    images: [
      'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590246814883-57c511e76523?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'blackwork',
    name: 'Blackwork',
    description: 'Diseños en negro sólido con contrastes llamativos',
    images: [
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590246814883-57c511e76523?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'ornamental',
    name: 'Ornamental',
    description: 'Diseños decorativos con patrones intrincados',
    images: [
      'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590246814883-57c511e76523?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80'
    ]
  }
];