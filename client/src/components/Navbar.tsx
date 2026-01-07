import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/menu", label: "Menú" },
    { href: "/ubicaciones", label: "Ubicaciones" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/resenas", label: "Reseñas" },
    { href: "/contacto", label: "Contacto" },
    { href: "/pedidos", label: "Hacer Pedido" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-red-700 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            🍗 Mary's Fried Chicken
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link key={link.href} to={link.href}>
                <Button
                  variant={isActive(link.href) ? "default" : "ghost"}
                  className={`${
                    isActive(link.href)
                      ? "bg-yellow-400 text-black hover:bg-yellow-500"
                      : "text-white hover:bg-red-600"
                  }`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link to="/admin">
              <Button variant="outline" className="ml-2 text-white border-white hover:bg-red-600">
                Admin
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
              >
                <Button
                  variant={isActive(link.href) ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    isActive(link.href)
                      ? "bg-yellow-400 text-black"
                      : "text-white hover:bg-red-600"
                  }`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link to="/admin" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full text-white border-white">
                Admin
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
