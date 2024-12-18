import Navigation from './Navigation';
import HeroSection from './HeroSection';

export default function Header() {
  return (
    <header className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      <Navigation />
      <HeroSection />
    </header>
  );
}