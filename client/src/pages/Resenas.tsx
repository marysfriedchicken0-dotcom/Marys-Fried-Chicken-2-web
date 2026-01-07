import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

interface Review {
  id: number;
  customer_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

const SAMPLE_REVIEWS: Review[] = [
  {
    id: 1,
    customer_name: "Juan García",
    rating: 5,
    comment: "¡El mejor pollo frito que he probado! Crujiente por fuera, jugoso por dentro. La atención es excelente.",
    created_at: "2024-01-15",
  },
  {
    id: 2,
    customer_name: "María López",
    rating: 5,
    comment: "Los pedidos llegan rápido y siempre calientes. Las porciones son generosas. ¡Muy recomendado!",
    created_at: "2024-01-14",
  },
  {
    id: 3,
    customer_name: "Carlos Rodríguez",
    rating: 4,
    comment: "Excelente servicio. El pollo está delicioso. Solo mejoraría un poco en la rapidez de entrega.",
    created_at: "2024-01-13",
  },
];

function StarRating({ rating, size = "lg" }: { rating: number; size?: "sm" | "lg" }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className={size === "lg" ? "text-2xl" : "text-lg"}>
          {star <= rating ? "⭐" : "☆"}
        </span>
      ))}
    </div>
  );
}

export function Resenas() {
  const [reviews, setReviews] = useState<Review[]>(SAMPLE_REVIEWS);
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.comment.trim()) {
      setSubmitted(true);
      setFormData({ name: "", rating: 5, comment: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : "5.0";

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-red-700 text-center mb-4">Reseñas de Clientes</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Conoce la opinión de nuestros clientes satisfechos
        </p>

        {/* Rating Summary */}
        <Card className="p-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-red-200 mb-12 text-center">
          <p className="text-gray-600 mb-2">Calificación Promedio</p>
          <p className="text-6xl font-bold text-red-700 mb-3">{avgRating}</p>
          <StarRating rating={Math.round(parseFloat(avgRating))} />
          <p className="text-gray-600 mt-4">Basado en {reviews.length} reseñas</p>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Reviews List */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-red-700 mb-6">Últimas Reseñas</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <Card key={review.id} className="p-6 border-red-200 hover:shadow-lg transition">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-red-700">{review.customer_name}</h3>
                        <p className="text-sm text-gray-500">{review.created_at}</p>
                      </div>
                      <StarRating rating={review.rating} size="sm" />
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </Card>
                ))
              ) : (
                <p className="text-gray-500 text-center py-8">No hay reseñas aún</p>
              )}
            </div>
          </div>

          {/* Form */}
          <div>
            <Card className="p-6 border-red-200 sticky top-24">
              <h3 className="text-2xl font-bold text-red-700 mb-6">Deja tu Reseña</h3>

              {submitted && (
                <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg">
                  ¡Gracias por tu reseña! Será revisada y publicada pronto.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-gray-700">
                    Tu Nombre
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Juan Pérez"
                    className="border-red-200 focus:border-red-500"
                  />
                </div>

                <div>
                  <Label htmlFor="rating" className="text-gray-700">
                    Calificación
                  </Label>
                  <div className="flex gap-2 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                        className="text-3xl transition hover:scale-110"
                      >
                        {star <= formData.rating ? "⭐" : "☆"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="comment" className="text-gray-700">
                    Tu Comentario
                  </Label>
                  <Textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos tu experiencia..."
                    rows={4}
                    className="border-red-200 focus:border-red-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-bold"
                >
                  Enviar Reseña
                </Button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Tu reseña será revisada antes de ser publicada
              </p>
            </Card>
          </div>
        </div>

        {/* Info Section */}
        <Card className="p-6 bg-red-50 border-red-200">
          <h3 className="font-bold text-red-700 mb-2">💡 Por qué tu opinión importa</h3>
          <p className="text-gray-700">
            Leemos cada reseña y comentario. Tu feedback nos ayuda a mejorar cada día y a otros clientes a conocer la calidad de nuestro servicio.
          </p>
        </Card>
      </div>
    </div>
  );
}
