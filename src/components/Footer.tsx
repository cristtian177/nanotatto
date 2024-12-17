import React from 'react';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <SocialIcons className="justify-center mb-4" size={20} />
        <p>© 2024 NanoTatto. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}