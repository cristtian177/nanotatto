import { Shield, Palette, Award } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <Palette className="w-12 h-12 mb-4 text-red-500" />
            <h3 className="text-xl font-bold mb-2">Diseños Únicos</h3>
            <p className="text-gray-400">Cada tatuaje es personalizado a tu estilo</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award className="w-12 h-12 mb-4 text-red-500" />
            <h3 className="text-xl font-bold mb-2">Experiencia</h3>
            <p className="text-gray-400">Experiencia en varios estilos de tatuajes</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield className="w-12 h-12 mb-4 text-red-500" />
            <h3 className="text-xl font-bold mb-2">100% Higiénico</h3>
            <p className="text-gray-400">Materiales esterilizados y ambiente sanitizado</p>
          </div>
        </div>
      </div>
    </section>
  );
}