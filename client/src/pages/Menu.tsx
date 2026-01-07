import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const MENU_DATA = {
  paquetes: [
    {
      id: 1,
      name: "Paquete 1",
      pieces: "2 piezas",
      description: "pierna y muslo o pechuga y ala con un solo complemento",
      price: 70,
    },
    {
      id: 2,
      name: "Paquete 2",
      pieces: "4 piezas",
      description: "surtidas con puré y ensalada ch",
      price: 120,
    },
    {
      id: 3,
      name: "Paquete 3",
      pieces: "8 piezas",
      description: "surtidas con puré y ensalada Gr",
      price: 240,
    },
    {
      id: 4,
      name: "Paquete 4",
      pieces: "12 piezas",
      description: "surtidas con puré y ensalada Gr",
      price: 325,
    },
    {
      id: 5,
      name: "Paquete 5",
      pieces: "16 piezas",
      description: "surtidas con puré y ensalada Gr",
      price: 430,
    },
    {
      id: 6,
      name: "Paquete 6",
      pieces: "20 piezas",
      description: "surtidas con 2 purés y 2 ensaladas",
      price: 540,
    },
  ],
  piezas: [
    { id: 1, pieces: "2 piezas", description: "pierna y muslo o pechuga y ala", price: 55 },
    { id: 2, pieces: "4 piezas", description: "surtidas", price: 100 },
    { id: 3, pieces: "8 piezas", description: "surtidas", price: 185 },
    { id: 4, pieces: "12 piezas", description: "surtidas", price: 275 },
    { id: 5, pieces: "16 piezas", description: "surtidas", price: 370 },
    { id: 6, pieces: "20 piezas", description: "surtidas", price: 460 },
  ],
  porPieza: [
    { name: "Ala", price: 19 },
    { name: "Pierna", price: 27 },
    { name: "Muslo", price: 27 },
    { name: "Pechuga", price: 31 },
  ],
  extras: [
    { name: "Tender", description: "300g más una salsa", price: 80 },
    { name: "Palomitas", description: "200g más una salsa", price: 50 },
    { name: "Nuggets", description: "250g más una salsa", price: 60 },
    { name: "Papas Fritas", description: "300g ketchup y Valentina", price: 45 },
  ],
  complementos: [
    { name: "Puré Gr", description: "350g", price: 30 },
    { name: "Ensalada Gr", description: "350g", price: 30 },
    { name: "Puré ch", description: "175g", price: 20 },
    { name: "Ensalada ch", description: "175g", price: 20 },
    { name: "Bisquets", description: "por pieza", price: 5 },
  ],
  salsas: [
    { name: "Mango Habanero", description: "60g", price: 15 },
    { name: "BBQ", description: "60g", price: 15 },
    { name: "Tradicional", description: "60g", price: 15 },
  ],
};

function MenuItem({ item, onAddToCart }: { item: any; onAddToCart: (item: any) => void }) {
  return (
    <Card className="p-4 border-red-200 hover:shadow-lg transition">
      <div className="h-40 bg-gradient-to-br from-red-400 to-orange-400 rounded-lg flex items-center justify-center text-4xl mb-4">
        🍗
      </div>
      <h3 className="font-bold text-lg text-red-700 mb-2">
        {item.name || item.pieces}
      </h3>
      {item.description && (
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
      )}
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-yellow-600">${item.price}</span>
        <Button
          className="bg-yellow-400 text-black hover:bg-yellow-500"
          onClick={() => onAddToCart(item)}
        >
          Agregar
        </Button>
      </div>
    </Card>
  );
}

export function Menu() {
  const handleAddToCart = (item: any) => {
    console.log("Item agregado:", item);
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-red-700 text-center mb-4">Nuestro Menú</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Descubre nuestras deliciosas opciones de pollo frito
        </p>

        <Tabs defaultValue="paquetes" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 bg-red-100 mb-8">
            <TabsTrigger value="paquetes" className="text-sm md:text-base">
              Paquetes
            </TabsTrigger>
            <TabsTrigger value="piezas" className="text-sm md:text-base">
              Piezas Solas
            </TabsTrigger>
            <TabsTrigger value="porpieza" className="text-sm md:text-base">
              Por Pieza
            </TabsTrigger>
            <TabsTrigger value="extras" className="text-sm md:text-base">
              Extras
            </TabsTrigger>
            <TabsTrigger value="complementos" className="text-sm md:text-base">
              Complementos
            </TabsTrigger>
            <TabsTrigger value="salsas" className="text-sm md:text-base">
              Salsas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="paquetes">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-red-700 mb-6">Paquetes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MENU_DATA.paquetes.map((item) => (
                  <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="piezas">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-red-700 mb-6">Piezas Solas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MENU_DATA.piezas.map((item, idx) => (
                  <MenuItem key={idx} item={item} onAddToCart={handleAddToCart} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="porpieza">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-red-700 mb-6">Por Pieza</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {MENU_DATA.porPieza.map((item, idx) => (
                  <MenuItem key={idx} item={item} onAddToCart={handleAddToCart} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="extras">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-red-700 mb-6">Extras</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MENU_DATA.extras.map((item, idx) => (
                  <MenuItem key={idx} item={item} onAddToCart={handleAddToCart} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="complementos">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-red-700 mb-6">Complementos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MENU_DATA.complementos.map((item, idx) => (
                  <MenuItem key={idx} item={item} onAddToCart={handleAddToCart} />
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="salsas">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-red-700 mb-6">Salsas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MENU_DATA.salsas.map((item, idx) => (
                  <MenuItem key={idx} item={item} onAddToCart={handleAddToCart} />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
