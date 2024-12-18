import { Phone } from 'lucide-react';
import { SOCIAL_LINKS } from '../utils/social';
import ContactInfo from './contact/ContactInfo';
import SocialIcons from './SocialIcons';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Información de Contacto
          </h2>

          <div className="bg-zinc-800 p-8 rounded-lg space-y-6">
            <ContactInfo />
            
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-4 text-red-500" />
              <div>
                <p className="mb-2">Reservas y consultas por WhatsApp:</p>
                <a
                  href={SOCIAL_LINKS.WHATSAPP.url(SOCIAL_LINKS.WHATSAPP.number)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400"
                >
                  Contactar por WhatsApp
                </a>
              </div>
            </div>

            <div className="border-t border-zinc-700 pt-6 mt-6">
              <p className="text-center mb-6">
                Síguenos en nuestras redes sociales para ver más trabajos:
              </p>
              <SocialIcons className="justify-center" size={28} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}