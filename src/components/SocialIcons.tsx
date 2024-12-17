import { Instagram, MessageCircle } from 'lucide-react';
import { TikTokIcon } from './icons/TikTokIcon';

interface SocialIconProps {
  className?: string;
  size?: number;
}

export default function SocialIcons({
  className = '',
  size = 24,
}: SocialIconProps) {
  return (
    <div className={`flex items-center space-x-6 ${className}`}>
      <a
        href="https://wa.me/+18574104599"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-400 transition-colors"
        title="WhatsApp"
      >
        <MessageCircle size={size} />
      </a>
      <a
        href="https://instagram.com/nanoart_tattoo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-400 transition-colors"
        title="Instagram"
      >
        <Instagram size={size} />
      </a>
      <a
        href="https://tiktok.com/@nanotattoo23"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-400 transition-colors"
        title="TikTok"
      >
        <TikTokIcon size={size} />
      </a>
    </div>
  );
}
