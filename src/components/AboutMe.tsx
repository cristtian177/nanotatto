import { AboutMeData } from '../data/aboutMeData';

const About = () => {
  return (
    <section id="about" className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-evenly gap-8">
        {/* Columna: Imagen */}
        <div className="flex-shrink-0 w-full md:w-1/3 text-center md:text-left">
          <img
            src={AboutMeData.image}
            alt={`Imagen de ${AboutMeData.name}`}
            className="w-48 h-48 mx-auto md:mx-0 rounded-full shadow-md object-cover"
          />
        </div>
        {/* Columna: Información */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Sobre mí</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hola, soy <span className="text-gray-800 font-semibold">{AboutMeData.name}</span> 
            (<span className="italic">{AboutMeData.nickname}</span>), {AboutMeData.descripcion}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
