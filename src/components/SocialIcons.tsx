import { SiWhatsapp, SiInstagram, SiTiktok } from "react-icons/si";
import { SOCIAL_LINKS } from "../utils/social";

export default function SocialIcons() {
  return (
    <div className="flex items-center justify-center space-x-6">
      <a
        href={SOCIAL_LINKS.WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-400 transition-colors"
        title="WhatsApp"
      >
        <SiWhatsapp size={24} />
      </a>
      <a
        href={SOCIAL_LINKS.INSTAGRAM}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-400 transition-colors"
        title="Instagram"
      >
        <SiInstagram size={24} />
      </a>
      <a
        href={SOCIAL_LINKS.TIKTOK}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-400 transition-colors"
        title="TikTok"
      >
        <SiTiktok size={24} />
      </a>
    </div>
  );
}
