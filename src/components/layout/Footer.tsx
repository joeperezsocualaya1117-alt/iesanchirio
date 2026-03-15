'use client';

import { BookOpen, Facebook, Instagram, Youtube, ArrowUp, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const quickLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'academico', label: 'Académico' },
  { id: 'profesorado', label: 'Profesorado' },
  { id: 'admision', label: 'Admisiones' },
  { id: 'noticias', label: 'Noticias' },
];

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">I.E. Sanchirio</span>
                <span className="text-gray-400 text-xs">PALOMAR</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Formando líderes con valores y excelencia académica desde hace más de 25 años. Educación Primaria y Secundaria de calidad.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Barrio Nuevo, Sanchirio Palomar, Chanchamayo</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span>(01) 456-7890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                <span>contacto@iesanchirio.edu.pe</span>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="text-white font-semibold mb-4">Horario</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Lunes - Viernes</p>
                  <p>7:30 AM - 3:30 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Atención Administrativa</p>
                  <p>8:00 AM - 4:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 I.E. Sanchirio Palomar. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-lg z-50"
        size="icon"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </footer>
  );
}
