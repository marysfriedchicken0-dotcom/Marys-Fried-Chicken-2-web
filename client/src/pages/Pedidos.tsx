import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

const DELIVERY_ZONES = [
  { zone: "Buenavista", fee: 30 },
  { zone: "Tesoro", fee: 40 },
  { zone: "López Portillo", fee: 35 },
  { zone: "Izcalli del Valle", fee: 50 },
  { zone: "Tequex", fee: 45 },
  { zone: "Otra zona", fee: 50 },
];

const MENU_ITEMS = [
  "Paquete 1 - 2 piezas ($70)",
  "Paquete 2 - 4 piezas ($120)",
  "Paquete 3 - 8 piezas ($240)",
  "Paquete 4 - 12 piezas ($325)",
  "Paquete 5 - 16 piezas ($430)",
  "Paquete 6 - 20 piezas ($540)",
  "2 piezas solas ($55)",
  "4 piezas solas ($100)",
  "8 piezas solas ($185)",
];

interface OrderItem {
  name: string;
  quantity: number;
}

export function Pedidos() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [deliveryZone, setDeliveryZone] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
    paymentMethod: "cash",
    tip: 0,
  });
  const [submitted, setSubmitted] = useState(false);

  const deliveryFee = DELIVERY_ZONES.find((z) => z.zone === deliveryZone)?.fee || 0;

  const addItem = () => {
    if (selectedItem) {
      setOrderItems([...orderItems, { name: selectedItem, quantity }]);
      setSelectedItem("");
      setQuantity(1);
    }
  };

  const removeItem = (index: number) => {
    setOrderItems(orderItems.filter((_, i) => i !== index));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "tip" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.name.trim() &&
      formData.phone.trim() &&
      formData.address.trim() &&
      orderItems.length > 0 &&
      deliveryZone
    ) {
      console.log({
        items: orderItems,
        customer: formData,
        deliveryFee,
        total: calculateTotal(),
      });
      setSubmitted(true);
      setOrderItems([]);
      setFormData({ name: "", phone: "", address: "", notes: "", paymentMethod: "cash", tip: 0 });
      setDeliveryZone("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const calculateTotal = () => {
    const itemsTotal = 0; // En un caso real, sumaría los precios
    return itemsTotal + deliveryFee + formData.tip;
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-red-700 text-center mb-4">Hacer un Pedido</h1>
        <p className="text-center text-gray-600 mb-8 text-lg">
          Ordena en línea y recibe tu comida caliente en tu puerta
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Items */}
          <div className="lg:col-span-2">
            <Card className="p-6 border-red-200 mb-6">
              <h2 className="text-2xl font-bold text-red-700 mb-4">Selecciona tus Items</h2>

              <div className="space-y-4 mb-4">
                <div>
                  <Label htmlFor="item" className="text-gray-700">
                    Producto
                  </Label>
                  <Select value={selectedItem} onValueChange={setSelectedItem}>
                    <SelectTrigger className="border-red-200">
                      <SelectValue placeholder="Selecciona un producto" />
                    </SelectTrigger>
                    <SelectContent>
                      {MENU_ITEMS.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="quantity" className="text-gray-700">
                    Cantidad
                  </Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="border-red-200"
                  />
                </div>

                <Button
                  onClick={addItem}
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
                >
                  Agregar al Carrito
                </Button>
              </div>

              {/* Items List */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-red-700 mb-4">Tu Carrito ({orderItems.length})</h3>
                {orderItems.length > 0 ? (
                  <div className="space-y-2">
                    {orderItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center bg-white p-3 rounded">
                        <span className="text-gray-700">
                          {item.name} x{item.quantity}
                        </span>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => removeItem(idx)}
                        >
                          Eliminar
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-4">No hay items en el carrito</p>
                )}
              </div>
            </Card>

            {/* Delivery Zone */}
            <Card className="p-6 border-red-200">
              <h2 className="text-2xl font-bold text-red-700 mb-4">Zona de Entrega</h2>
              <Select value={deliveryZone} onValueChange={setDeliveryZone}>
                <SelectTrigger className="border-red-200">
                  <SelectValue placeholder="Selecciona tu zona" />
                </SelectTrigger>
                <SelectContent>
                  {DELIVERY_ZONES.map((zone) => (
                    <SelectItem key={zone.zone} value={zone.zone}>
                      {zone.zone} - ${zone.fee}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {deliveryZone && (
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-gray-700">
                    Costo de entrega: <span className="font-bold text-red-700">${deliveryFee}</span>
                  </p>
                </div>
              )}
            </Card>
          </div>

          {/* Form and Summary */}
          <div>
            <Card className="p-6 border-red-200 sticky top-24">
              <h2 className="text-2xl font-bold text-red-700 mb-6">Tu Información</h2>

              {submitted && (
                <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg">
                  ¡Pedido enviado! Nos contactaremos pronto.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-gray-700 text-sm">
                    Nombre
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Juan Pérez"
                    className="border-red-200"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700 text-sm">
                    Teléfono
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="5577479755"
                    className="border-red-200"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="text-gray-700 text-sm">
                    Dirección
                  </Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Tu dirección completa"
                    rows={3}
                    className="border-red-200"
                  />
                </div>

                <div>
                  <Label htmlFor="notes" className="text-gray-700 text-sm">
                    Notas (Opcional)
                  </Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Instrucciones especiales..."
                    rows={2}
                    className="border-red-200"
                  />
                </div>

                <div>
                  <Label htmlFor="payment" className="text-gray-700 text-sm">
                    Método de Pago
                  </Label>
                  <Select value={formData.paymentMethod} onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, paymentMethod: value }))
                  }>
                    <SelectTrigger className="border-red-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cash">Efectivo</SelectItem>
                      <SelectItem value="card">Tarjeta</SelectItem>
                      <SelectItem value="transfer">Transferencia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="tip" className="text-gray-700 text-sm">
                    Propina (Opcional)
                  </Label>
                  <Input
                    id="tip"
                    name="tip"
                    type="number"
                    min="0"
                    value={formData.tip}
                    onChange={handleInputChange}
                    placeholder="0"
                    className="border-red-200"
                  />
                </div>

                <div className="bg-red-50 p-4 rounded-lg mt-6">
                  <p className="text-sm text-gray-600 mb-2">Resumen:</p>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>Items:</span>
                      <span className="font-bold">${orderItems.length > 0 ? "TBD" : "0"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Entrega:</span>
                      <span className="font-bold">${deliveryFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Propina:</span>
                      <span className="font-bold">${formData.tip}</span>
                    </div>
                    <div className="border-t border-red-200 pt-2 mt-2 flex justify-between">
                      <span className="font-bold">Total:</span>
                      <span className="text-xl font-bold text-red-700">
                        ${(deliveryFee + formData.tip).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={orderItems.length === 0 || !deliveryZone}
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500 disabled:opacity-50"
                >
                  Confirmar Pedido
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-yellow-50 p-8 rounded-lg border-2 border-yellow-300">
          <h3 className="text-2xl font-bold text-red-700 mb-4">ℹ️ Información Importante</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Los pedidos se confirman por teléfono antes de preparar</li>
            <li>✓ Tiempo de entrega: 30-45 minutos (según zona)</li>
            <li>✓ Aceptamos efectivo, tarjeta y transferencia</li>
            <li>✓ La propina es opcional pero apreciada</li>
            <li>✓ Puedes pedir que se cobre al momento de entrega</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
