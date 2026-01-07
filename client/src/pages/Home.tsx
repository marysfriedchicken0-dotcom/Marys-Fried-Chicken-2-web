import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-700 to-red-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">🍗 Mary's Fried Chicken</h1>
          <p className="text-xl md:text-2xl mb-8 text-yellow-300">
            El mejor pollo frito hecho con pasión
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-6">
                Ver Menú
              </Button>
            </Link>
            <Link to="/pedidos">
              <Button className="bg-white text-red-700 hover:bg-gray-100 text-lg px-8 py-6">
                Hacer Pedido
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-700 text-center mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center border-red-200 hover:shadow-lg transition">
              <p className="text-4xl mb-4">📍</p>
              <h3 className="text-xl font-bold text-red-700 mb-2">Ubicaciones</h3>
              <p className="text-gray-600 mb-4">Visítanos en cualquiera de nuestras sucursales</p>
              <Link to="/ubicaciones">
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 w-full">
                  Ver Ubicaciones
                </Button>
              </Link>
            </Card>

            <Card className="p-6 text-center border-red-200 hover:shadow-lg transition">
              <p className="text-4xl mb-4">🛵</p>
              <h3 className="text-xl font-bold text-red-700 mb-2">Pedidos a Domicilio</h3>
              <p className="text-gray-600 mb-4">Ordena en línea y recibe en tu puerta</p>
              <Link to="/pedidos">
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 w-full">
                  Hacer Pedido
                </Button>
              </Link>
            </Card>

            <Card className="p-6 text-center border-red-200 hover:shadow-lg transition">
              <p className="text-4xl mb-4">⭐</p>
              <h3 className="text-xl font-bold text-red-700 mb-2">Reseñas</h3>
              <p className="text-gray-600 mb-4">Lee lo que nuestros clientes dicen</p>
              <Link to="/resenas">
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 w-full">
                  Ver Reseñas
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-red-700 text-center mb-12">
            Nuestros Populares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden border-red-200 hover:shadow-lg transition">
                <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-5xl">
                  🍗
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-red-700 mb-2">
                    Paquete Popular
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Delicioso pollo frito con complementos
                  </p>
                  <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
                    Ver Detalles
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/menu">
              <Button className="bg-red-700 text-white hover:bg-red-800 text-lg px-8 py-4">
                Ver Todo el Menú
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">¡Hoy es tu día de Pollo Frito!</h2>
          <p className="text-xl mb-8">
            Ordena ahora y disfruta del mejor pollo frito de la ciudad
          </p>
          <Link to="/pedidos">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-4">
              Hacer Pedido Ahora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
