import { MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../../utils/contact';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <MapPin className="w-6 h-6 mr-4 text-red-500" />
        <p>
          Solo atendemos en {CONTACT_INFO.LOCATION.city}/{CONTACT_INFO.LOCATION.state} - {CONTACT_INFO.LOCATION.notice}
        </p>
      </div>
      <div className="flex items-center">
        <Clock className="w-6 h-6 mr-4 text-red-500" />
        <p>
          Horario de atención: {CONTACT_INFO.SCHEDULE.days}: {CONTACT_INFO.SCHEDULE.hours}
        </p>
      </div>
    </div>
  );
}