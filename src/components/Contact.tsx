import { SOCIAL_LINKS } from "../utils/social";
import ContactInfo from "./contact/ContactInfo";
import SocialIcons from "./SocialIcons";
import { SiWhatsapp } from "react-icons/si";

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

            <div className="flex items-start space-x-4 p-4 border rounded-lg shadow-lg bg-white">
              <div>
                <p className="text-lg font-medium text-gray-800 mb-1">
                  ¿Tienes preguntas o quieres reservar?
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  Contáctanos directamente por WhatsApp y recibe atención
                  inmediata.
                </p>
                <div className="flex justify-center">
                  <a
                  href={SOCIAL_LINKS.WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-400 transition-all"
                  >
                  <SiWhatsapp className="w-5 h-5 mr-2" />
                  Contactar por WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-700 pt-6 mt-6">
              <p className="text-center mb-6">
                Síguenos en nuestras redes sociales para ver más trabajos:
              </p>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
