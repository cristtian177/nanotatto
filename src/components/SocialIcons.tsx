import { Instagram, MessageCircle } from 'lucide-react';

interface SocialIconProps {
  className?: string;
  size?: number;
}

export default function SocialIcons({
  className = '',
  size = 24,
}: SocialIconProps) {
  const WHATSAPP_NUMBER = '+18574104599';
  const INSTAGRAM_USER = 'nanoart_tattoo';
  const TIKTOK_USER = 'nanotattoo23';

  return (
    <div className={`flex items-center space-x-6 ${className}`}>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-400 transition-colors"
        title="WhatsApp"
      >
        <MessageCircle size={size} />
      </a>
      <a
        href={`https://instagram.com/${INSTAGRAM_USER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-400 transition-colors"
        title="Instagram"
      >
        <Instagram size={size} />
      </a>
      <a
        href={`https://tiktok.com/@${TIKTOK_USER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-400 transition-colors"
        title="TikTok"
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      </a>
    </div>
  );
}