'use client';

import { useState } from 'react';
import { BookOpen, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'academico', label: 'Académico' },
  { id: 'profesorado', label: 'Profesorado' },
  { id: 'admision', label: 'Admisiones' },
  { id: 'apafa', label: 'Apafa' },
  { id: 'noticias', label: 'Noticias' },
  { id: 'informacion', label: 'Información' },
];

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('inicio')}>
            <div className="bg-emerald-500 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight">I.E. Sanchirio</span>
              <span className="text-gray-400 text-xs">PALOMAR</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                  currentPage === item.id
                    ? 'text-amber-400 bg-amber-400/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2">
              <LogIn className="h-4 w-4" />
              Ingresar
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    'px-4 py-3 text-left text-sm font-medium rounded-lg transition-all duration-200',
                    currentPage === item.id
                      ? 'text-amber-400 bg-amber-400/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-700">
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white gap-2">
                  <LogIn className="h-4 w-4" />
                  Ingresar
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
