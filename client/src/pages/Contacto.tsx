import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

const PHONES = [
  {
    location: "Buenavista",
    phone: "5577479755",
    hours: "Lunes - Domingo 10:00 AM - 10:00 PM",
  },
  {
    location: "Tesoro",
    phone: "5572993603",
    hours: "Lunes - Domingo 10:00 AM - 10:00 PM",
  },
  {
    location: "López Portillo",
    phone: "5575412265",
    hours: "Lunes - Domingo 10:00 AM - 10:00 PM",
  },
  {
    location: "Izcalli del Valle",
    phone: "5538382437",
    hours: "Lunes - Domingo 10:00 AM - 10:00 PM",
  },
  {
    location: "Tequex",
    phone: "5616905039",
    hours: "Lunes - Domingo 10:00 AM - 10:00 PM",
  },
];

const SOCIAL_MEDIA = [
  {
    name: "Facebook",
    handle: "Marys Fried Chicken",
    icon: "f",
    url: "https://facebook.com/search/top?q=Marys%20Fried%20Chicken",
  },
  {
    name: "Instagram",
    handle: "@marysfriedchicken_",
    icon: "📸",
    url: "https://instagram.com/marysfriedchicken_",
  },
  {
    name: "TikTok",
    handle: "@_marysfriedchicken",
    icon: "🎵",
    url: "https://tiktok.com/@_marysfriedchicken",
  },
];

function PhoneCard({ item }: { item: any }) {
  const handleCall = () => {
    window.location.href = `tel:${item.phone}`;
  };

  const handleWhatsApp = () => {
    window.location.href = `https://wa.me/52${item.phone}`;
  };

  return (
    <Card className="p-6 border-red-200 hover:shadow-lg transition">
      <h3 className="text-2xl font-bold text-red-700 mb-2">{item.location}</h3>
      <p className="text-gray-600 mb-4">📞 {item.phone}</p>
      <p className="text-sm text-gray-500 mb-4">{item.hours}</p>
      <div className="flex gap-2">
        <Button
          onClick={handleCall}
          className="flex-1 bg-red-600 text-white hover:bg-red-700"
        >
          Llamar
        </Button>
        <Button
          onClick={handleWhatsApp}
          className="flex-1 bg-green-500 text-white hover:bg-green-600"
        >
          WhatsApp
        </Button>
      </div>
    </Card>
  );
}

export function Contacto() {
  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-red-700 text-center mb-4">Contáctanos</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Estamos aquí para servirte. Elige tu sucursal favorita
        </p>

        {/* Phone Numbers */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-red-700 mb-8 text-center">
            📞 Números Telefónicos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PHONES.map((item, idx) => (
              <PhoneCard key={idx} item={item} />
            ))}
          </div>
        </section>

        {/* Social Media */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-red-700 mb-8 text-center">
            Síguenos en Redes Sociales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOCIAL_MEDIA.map((social, idx) => (
              <Card key={idx} className="p-8 border-red-200 text-center hover:shadow-lg transition">
                <p className="text-5xl mb-4">{social.icon}</p>
                <h3 className="text-2xl font-bold text-red-700 mb-2">{social.name}</h3>
                <p className="text-gray-600 mb-6 font-semibold">{social.handle}</p>
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                    Visitar
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Contact */}
        <section className="bg-gradient-to-r from-red-700 to-red-800 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">¿Necesitas ayuda rápida?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl mb-2">☎️</p>
              <p className="text-sm mb-2">Llamadas y WhatsApp</p>
              <p className="font-bold">Disponible 24/7</p>
            </div>
            <div>
              <p className="text-4xl mb-2">📱</p>
              <p className="text-sm mb-2">Redes Sociales</p>
              <p className="font-bold">Respuesta rápida</p>
            </div>
            <div>
              <p className="text-4xl mb-2">🚗</p>
              <p className="text-sm mb-2">Pedidos a Domicilio</p>
              <p className="font-bold">Por la plataforma</p>
            </div>
          </div>
        </section>

        {/* Hours */}
        <section className="mt-16 bg-yellow-50 p-8 rounded-lg border-2 border-yellow-300">
          <h3 className="text-2xl font-bold text-red-700 mb-4 text-center">⏰ Horarios</h3>
          <div className="max-w-md mx-auto space-y-2">
            <div className="flex justify-between text-gray-700">
              <span>Lunes a Viernes:</span>
              <span className="font-bold">10:00 AM - 10:00 PM</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Sábado:</span>
              <span className="font-bold">10:00 AM - 11:00 PM</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Domingo:</span>
              <span className="font-bold">10:00 AM - 10:00 PM</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
