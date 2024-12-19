export interface GalleryImage {
  url: string;
  alt: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  description: string;
  images: GalleryImage[];
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: 'minimalista',
    name: 'Minimalista',
    description: 'Diseños simples y elegantes que capturan la esencia con líneas limpias',
    images: [
      {
        url: 'https://scontent.fclo1-3.fna.fbcdn.net/v/t39.30808-6/469593499_563993662927683_4468755591448482681_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=fWl009JYgd4Q7kNvgEGdjo9&_nc_zt=23&_nc_ht=scontent.fclo1-3.fna&_nc_gid=A7iVjhFOHcsRSNmO_TGexI8&oh=00_AYAkNTCVCx5nL8Gkfyhu-DCHZLB2fOd_OTfzJOGeWhnmLg&oe=67696999',
        alt: 'Tatuaje minimalista 1'
      },
      {
        url: 'https://images.unsplash.com/photo-1590246814883-57c511e76523?auto=format&fit=crop&q=80',
        alt: 'Tatuaje minimalista 2'
      },
      {
        url: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&q=80',
        alt: 'Tatuaje minimalista 3'
      },
      {
        url: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80',
        alt: 'Tatuaje minimalista 4'
      }
    ]
  },
  {
    id: 'lettering',
    name: 'Lettering',
    description: 'Caligrafía moderna y tipografías únicas',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80',
        alt: 'Tatuaje lettering 1'
      },
      {
        url: 'https://images.unsplash.com/photo-1590246814883-57c511e76523?auto=format&fit=crop&q=80',
        alt: 'Tatuaje lettering 2'
      },
      {
        url: 'https://images.unsplash.com/photo-1543932927-99e45ea7c410?auto=format&fit=crop&q=80',
        alt: 'Tatuaje lettering 3'
      },
      {
        url: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&q=80',
        alt: 'Tatuaje lettering 4'
      }
    ]
  },
  {
    id: 'geometrico',
    name: 'Geométrico',
    description: 'Patrones y formas geométricas precisas',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1590246814883-57c511e76523?auto=format&fit=crop&q=80',
        alt: 'Tatuaje geométrico 1'
      },
      {
        url: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&q=80',
        alt: 'Tatuaje geométrico 2'
      },
      {
        url: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80',
        alt: 'Tatuaje geométrico 3'
      },
      {
        url: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80',
        alt: 'Tatuaje geométrico 4'
      }
    ]
  },
  {
    id: 'fineline',
    name: 'Fine Line',
    description: 'Tatuajes delicados con líneas finas y detalladas',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&q=80',
        alt: 'Tatuaje fine line 1'
      },
      {
        url: 'https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&q=80',
        alt: 'Tatuaje fine line 2'
      },
      {
        url: 'https://images.unsplash.com/photo-1590246814883-57c511e76523?auto=format&fit=crop&q=80',
        alt: 'Tatuaje fine line 3'
      },
      {
        url: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80',
        alt: 'Tatuaje fine line 4'
      }
    ]
  }
];