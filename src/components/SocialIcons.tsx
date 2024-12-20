import { Instagram, MessageCircle } from 'lucide-react';

import { SOCIAL_LINKS } from '../utils/social';

export default function SocialIcons() {


  return (
    <div className={`flex items-center space-x-6`}>
      <a
        href={SOCIAL_LINKS.WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-400 transition-colors"
        title="WhatsApp"
      >
        <MessageCircle size={14} />
      </a>
      <a
        href={SOCIAL_LINKS.INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-400 transition-colors"
        title="Instagram"
      >
        <Instagram size={14} />
      </a>
      <a
        href={SOCIAL_LINKS.TIKTOK}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-400 transition-colors"
        title="TikTok"
      >
        <svg
          width={14}
          height={14}
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