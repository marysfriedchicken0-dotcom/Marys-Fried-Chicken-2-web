import { Card } from "../components/ui/card";

export function Nosotros() {
  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-red-700 text-center mb-12">Sobre Nosotros</h1>

        {/* Main Story */}
        <Card className="p-8 bg-gradient-to-br from-red-50 to-orange-50 border-red-200 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold text-red-700 mb-6">
                🍗 Mary's Fried Chicken
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Desde los primeros destellos de aceite chispeante hasta el rojo vibrante que hoy corona nuestra fachada, ustedes han estado ahí- paladeando cada giro, cada cambio, cada nueva escena de esta historia que escribimos juntos.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <span className="text-xl">🍗</span> Mary's Fried Chicken no es solo es un lugar, es una emoción compartida. Es el crujido que despierta memorias, el aroma que une generaciones, el sabor que evoluciona sin perder su alma.
              </p>
            </div>
            <div className="w-full md:w-96 h-96 bg-gradient-to-br from-red-400 to-orange-400 rounded-lg flex items-center justify-center text-8xl shadow-lg">
              🍗
            </div>
          </div>
        </Card>

        {/* Journey */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-red-700 mb-8 text-center">Nuestro Viaje</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border-red-200 hover:shadow-lg transition">
              <p className="text-4xl mb-4">🌱</p>
              <h3 className="text-2xl font-bold text-red-700 mb-3">Cómo Iniciamos</h3>
              <p className="text-gray-700">
                Con pasión, dedicación y el deseo de llevar el mejor pollo frito a nuestras comunidades. Lo que comenzó como un sueño hoy es una realidad que palpita en cada sucursal.
              </p>
            </Card>

            <Card className="p-6 border-red-200 hover:shadow-lg transition">
              <p className="text-4xl mb-4">📈</p>
              <h3 className="text-2xl font-bold text-red-700 mb-3">Cómo Evolucionamos</h3>
              <p className="text-gray-700">
                Día a día mejoramos nuestros procesos, ampliamos nuestro menú y aprendemos de ustedes. Cada paso que damos es para brindarles la mejor experiencia.
              </p>
            </Card>

            <Card className="p-6 border-red-200 hover:shadow-lg transition">
              <p className="text-4xl mb-4">🎯</p>
              <h3 className="text-2xl font-bold text-red-700 mb-3">A Dónde Vamos</h3>
              <p className="text-gray-700">
                Hacia la expansión continua, innovación constante y el compromiso de ser la primera opción en pollo frito para millones de personas en México y más allá.
              </p>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="bg-red-700 text-white p-8 rounded-lg mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "❤️", title: "Pasión", desc: "En cada pollo que preparamos" },
              { icon: "🤝", title: "Comunidad", desc: "Somos parte de ustedes" },
              { icon: "⭐", title: "Calidad", desc: "Lo mejor para nuestros clientes" },
              { icon: "🚀", title: "Innovación", desc: "Siempre mejorando" },
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl mb-2">{value.icon}</p>
                <h3 className="font-bold text-lg mb-1">{value.title}</h3>
                <p className="text-red-100">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Image Spaces */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-red-700 mb-8 text-center">Nuestra Historia en Imágenes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-64 bg-gradient-to-br from-red-200 to-orange-200 rounded-lg flex items-center justify-center border-2 border-red-300"
              >
                <div className="text-center">
                  <p className="text-5xl mb-2">📸</p>
                  <p className="text-red-700 font-semibold">Foto {i}</p>
                  <p className="text-sm text-gray-600">Cargada por el administrador</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-yellow-50 p-8 rounded-lg border-2 border-yellow-300 text-center">
          <h2 className="text-3xl font-bold text-red-700 mb-4">
            ¡Gracias por ser parte de nuestro viaje!
          </h2>
          <p className="text-lg text-gray-700">
            Cada cliente, cada comentario, cada reseña nos motiva a ser mejor cada día.
          </p>
        </section>
      </div>
    </div>
  );
}
