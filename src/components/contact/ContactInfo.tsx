import { SiGooglemaps, SiClockify } from 'react-icons/si';
import { SocialData } from '../../utils/social';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <SiGooglemaps size={24} className="mr-4 text-red-500" />
        <p>
          Atendemos exclusivamente en {SocialData.LOCATION} No realizamos visitas fuera de la ciudad.
        </p>
      </div>
      <div className="flex items-center">
        <SiClockify size={24} className="mr-4 text-red-500" />
        <p>
          Horario de atención: Todos los días con cita previa.
        </p>
      </div>
    </div>
  );
}