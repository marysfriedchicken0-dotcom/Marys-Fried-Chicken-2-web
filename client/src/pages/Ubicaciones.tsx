import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

const LOCATIONS_MEXICO = [
  {
    id: 1,
    name: "Buenavista",
    address: "Emiliano Zapata #7 Buenavista parte alta Tultitlan",
    phone: "5577479755",
    state: "México",
  },
  {
    id: 2,
    name: "Tesoro",
    address: "Avenida la perla, zinc y el tesoro 54957 Méx.",
    phone: "5572993603",
    state: "México",
  },
  {
    id: 3,
    name: "López Portillo",
    address: "Carretera vía José López Portillo 27",
    phone: "5575412265",
    state: "México",
  },
  {
    id: 4,
    name: "Izcalli del Valle",
    address: "Valle de los cipreses 72, izcalli y del valle 54957 Buenavista, Méx",
    phone: "5538382437",
    state: "México",
  },
  {
    id: 5,
    name: "Tequexquinahuac",
    address: "Tequex av, Gustavo vas #12 col tequexquinahuac entre calle seguro",
    phone: "5616905039",
    state: "México",
  },
];

const LOCATIONS_JALISCO = [
  {
    id: 6,
    name: "Santarita",
    address: "Santarita, Jalisco",
    phone: "Por confirmar",
    state: "Jalisco",
  },
  {
    id: 7,
    name: "La Rivera",
    address: "La Rivera, Jalisco",
    phone: "Por confirmar",
    state: "Jalisco",
  },
  {
    id: 8,
    name: "Ayotlan",
    address: "Ayotlan, Jalisco",
    phone: "Por confirmar",
    state: "Jalisco",
  },
];

function LocationCard({ location }: { location: any }) {
  const handleCall = () => {
    if (location.phone !== "Por confirmar") {
      window.location.href = `tel:${location.phone}`;
    }
  };

  return (
    <Card className="p-6 border-red-200 hover:shadow-lg transition">
      <div className="flex items-start gap-4 mb-4">
        <div className="text-4xl">📍</div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-red-700 mb-2">{location.name}</h3>
          <p className="text-gray-700 mb-2">{location.address}</p>
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <p className="text-gray-600 text-sm mb-2">📞 Teléfono:</p>
        <p className="font-bold text-lg text-red-700">{location.phone}</p>
      </div>
      {location.phone !== "Por confirmar" && (
        <Button
          onClick={handleCall}
          className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
        >
          Llamar Ahora
        </Button>
      )}
    </Card>
  );
}

export function Ubicaciones() {
  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-red-700 text-center mb-4">Nuestras Ubicaciones</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Encuentra la sucursal más cercana a ti
        </p>

        {/* México */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white bg-red-700 p-4 rounded-lg mb-8">
            Estado de México
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS_MEXICO.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </section>

        {/* Jalisco */}
        <section>
          <h2 className="text-4xl font-bold text-white bg-red-700 p-4 rounded-lg mb-8">
            Jalisco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS_JALISCO.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="mt-16 bg-yellow-50 p-8 rounded-lg border-2 border-yellow-300">
          <h3 className="text-2xl font-bold text-red-700 mb-4">💡 Información Importante</h3>
          <p className="text-gray-700 mb-3">
            ¿No encuentras una ubicación específica? Contacta con nosotros por teléfono o redes sociales.
          </p>
          <p className="text-gray-700">
            ¡Estamos expandiendo constantemente! Sigue nuestras redes para los anuncios de nuevas sucursales.
          </p>
        </section>
      </div>
    </div>
  );
}
