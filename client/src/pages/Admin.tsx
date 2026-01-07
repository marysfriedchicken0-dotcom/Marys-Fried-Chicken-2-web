import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

interface Order {
  id: number;
  customer_name: string;
  status: "pending" | "preparing" | "delivered";
  created_at: string;
}

export function Admin() {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      customer_name: "Juan García",
      status: "pending",
      created_at: "2024-01-15 14:30",
    },
    {
      id: 2,
      customer_name: "María López",
      status: "preparing",
      created_at: "2024-01-15 13:45",
    },
  ]);

  const [adminSettings, setAdminSettings] = useState({
    aboutText: "",
    deliveryZones: "",
    promotionText: "",
  });

  const handleOrderStatusChange = (orderId: number, newStatus: string) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId
          ? { ...order, status: newStatus as any }
          : order
      )
    );
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-800",
      preparing: "bg-blue-100 text-blue-800",
      delivered: "bg-green-100 text-green-800",
    };
    return colors[status as keyof typeof colors] || "bg-gray-100";
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-red-700 text-center mb-4">Panel de Administración</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Gestiona pedidos, contenido y configuración
        </p>

        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-red-100 mb-8">
            <TabsTrigger value="orders">Pedidos</TabsTrigger>
            <TabsTrigger value="content">Contenido</TabsTrigger>
            <TabsTrigger value="reviews">Reseñas</TabsTrigger>
            <TabsTrigger value="settings">Configuración</TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card className="p-6 border-red-200">
              <h2 className="text-3xl font-bold text-red-700 mb-6">Gestionar Pedidos</h2>

              {orders.length > 0 ? (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-red-200 rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                    >
                      <div>
                        <h3 className="font-bold text-lg text-red-700">
                          Pedido #{order.id}
                        </h3>
                        <p className="text-gray-600">{order.customer_name}</p>
                        <p className="text-sm text-gray-500">{order.created_at}</p>
                      </div>
                      <div className="flex gap-2 w-full md:w-auto">
                        <select
                          value={order.status}
                          onChange={(e) =>
                            handleOrderStatusChange(order.id, e.target.value)
                          }
                          className={`px-4 py-2 rounded font-semibold ${getStatusBadge(
                            order.status
                          )}`}
                        >
                          <option value="pending">Pendiente</option>
                          <option value="preparing">Preparando</option>
                          <option value="delivered">Entregado</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 py-8">No hay pedidos</p>
              )}
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content">
            <div className="space-y-6">
              {/* About Us */}
              <Card className="p-6 border-red-200">
                <h2 className="text-3xl font-bold text-red-700 mb-4">Sección Nosotros</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="about" className="text-gray-700">
                      Texto Principal
                    </Label>
                    <Textarea
                      id="about"
                      placeholder="Edita el texto de la sección Nosotros..."
                      rows={6}
                      value={adminSettings.aboutText}
                      onChange={(e) =>
                        setAdminSettings((prev) => ({
                          ...prev,
                          aboutText: e.target.value,
                        }))
                      }
                      className="border-red-200"
                    />
                  </div>
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                    Guardar Cambios
                  </Button>
                </div>
              </Card>

              {/* Promotions */}
              <Card className="p-6 border-red-200">
                <h2 className="text-3xl font-bold text-red-700 mb-4">Promociones del Día</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="promotion" className="text-gray-700">
                      Título de Promoción
                    </Label>
                    <Input
                      id="promotion"
                      placeholder="Ej: Miércoles de Descuento"
                      className="border-red-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="promo-desc" className="text-gray-700">
                      Descripción
                    </Label>
                    <Textarea
                      id="promo-desc"
                      placeholder="Detalles de la promoción..."
                      rows={3}
                      className="border-red-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="promo-image" className="text-gray-700">
                      Imagen
                    </Label>
                    <Input
                      id="promo-image"
                      type="file"
                      className="border-red-200"
                    />
                  </div>
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                    Crear Promoción
                  </Button>
                </div>
              </Card>

              {/* Team Celebrations */}
              <Card className="p-6 border-red-200">
                <h2 className="text-3xl font-bold text-red-700 mb-4">Celebraciones del Equipo</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="celebration-title" className="text-gray-700">
                      Título
                    </Label>
                    <Input
                      id="celebration-title"
                      placeholder="Ej: Feliz Cumpleaños Juan"
                      className="border-red-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="celebration-desc" className="text-gray-700">
                      Descripción
                    </Label>
                    <Textarea
                      id="celebration-desc"
                      placeholder="Mensaje de celebración..."
                      rows={3}
                      className="border-red-200"
                    />
                  </div>
                  <div>
                    <Label htmlFor="celebration-image" className="text-gray-700">
                      Imagen
                    </Label>
                    <Input
                      id="celebration-image"
                      type="file"
                      className="border-red-200"
                    />
                  </div>
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                    Crear Celebración
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <Card className="p-6 border-red-200">
              <h2 className="text-3xl font-bold text-red-700 mb-6">Moderar Reseñas</h2>
              <div className="space-y-4">
                <Card className="p-4 border-l-4 border-l-yellow-400 bg-yellow-50">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-red-700">Juan García</h3>
                      <p className="text-sm text-gray-600">⭐⭐⭐⭐⭐</p>
                    </div>
                    <span className="text-sm px-2 py-1 bg-yellow-200 rounded">
                      Pendiente
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    "¡El mejor pollo frito que he probado! Crujiente y jugoso."
                  </p>
                  <div className="flex gap-2">
                    <Button className="bg-green-500 text-white hover:bg-green-600">
                      Aprobar
                    </Button>
                    <Button variant="destructive">Rechazar</Button>
                  </div>
                </Card>
              </div>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card className="p-6 border-red-200">
              <h2 className="text-3xl font-bold text-red-700 mb-6">Configuración General</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="site-name" className="text-gray-700">
                    Nombre del Sitio
                  </Label>
                  <Input
                    id="site-name"
                    defaultValue="Mary's Fried Chicken"
                    className="border-red-200"
                  />
                </div>

                <div>
                  <Label htmlFor="phone-number" className="text-gray-700">
                    Número Principal de Contacto
                  </Label>
                  <Input
                    id="phone-number"
                    defaultValue="5577479755"
                    className="border-red-200"
                  />
                </div>

                <div>
                  <Label htmlFor="delivery-info" className="text-gray-700">
                    Información de Entrega
                  </Label>
                  <Textarea
                    id="delivery-info"
                    placeholder="Detalles sobre entregas a domicilio..."
                    rows={4}
                    className="border-red-200"
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-blue-900 text-sm">
                    💡 Estas configuraciones se mostrarán en diferentes partes del sitio.
                  </p>
                </div>

                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 w-full">
                  Guardar Configuración
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
