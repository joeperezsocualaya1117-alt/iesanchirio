'use client';

import { BookOpen, GraduationCap, Microscope, Trophy, Users, Star, Globe, Library, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-classroom.png"
            alt="Aula moderna"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Formando líderes con{' '}
              <span className="text-emerald-400">valores</span> y{' '}
              <span className="text-emerald-400">excelencia</span> académica
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              En la I.E. Sanchirio Palomar creemos en el poder de la educación para transformar vidas. Más de 25 años formando profesionales de excelencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => onNavigate('admision')}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg"
              >
                Inscríbete ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 px-8 py-6 text-lg"
              >
                Programar visita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-emerald-500 font-semibold mb-2 tracking-wider text-sm">NUESTRA MISIÓN</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Avance hacia la{' '}
                <span className="text-emerald-500">Excelencia</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                En la I.E. Sanchirio Palomar nos comprometemos con la formación integral de nuestros estudiantes. Nuestra misión es brindar una educación de calidad que desarrolle competencias académicas, valores éticos y habilidades para la vida, preparando a cada estudiante para enfrentar los desafíos del futuro con confianza y responsabilidad.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl">
                  <div className="bg-emerald-500 p-3 rounded-lg">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Excelencia Académica</h3>
                    <p className="text-gray-600 text-sm mt-1">Programas educativos de alta calidad</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl">
                  <div className="bg-amber-500 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Formación Integral</h3>
                    <p className="text-gray-600 text-sm mt-1">Desarrollo personal y académico</p>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg">
                <Star className="h-5 w-5 text-amber-400" />
                <span className="font-semibold">25+ Años de experiencia</span>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/library.png"
                  alt="Biblioteca moderna"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-400 font-semibold mb-2 tracking-wider text-sm">DESCUBRE</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vida en el <span className="text-emerald-400">Campus</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Un entorno completo para el aprendizaje y el desarrollo integral de nuestros estudiantes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: Microscope, title: 'Laboratorios Modernos', desc: 'Equipados con tecnología de punta' },
              { icon: Trophy, title: 'Deportes', desc: 'Amplias instalaciones deportivas' },
              { icon: Users, title: 'Vida Estudiantil', desc: 'Actividades y eventos continuos' },
              { icon: Star, title: '25+ Años', desc: 'De trayectoria educativa', highlight: true },
              { icon: Globe, title: 'Área de Inglés', desc: 'Programa bilingüe certificado' },
              { icon: Library, title: 'Biblioteca', desc: 'Más de 10,000 volúmenes' },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  item.highlight
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                <item.icon className={`h-10 w-10 mb-4 ${item.highlight ? 'text-white' : 'text-emerald-400'}`} />
                <h3 className={`font-semibold mb-2 ${item.highlight ? 'text-white' : 'text-white'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm ${item.highlight ? 'text-emerald-100' : 'text-gray-400'}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Offer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-500 font-semibold mb-2 tracking-wider text-sm">NIVELES EDUCATIVOS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Nuestra Oferta <span className="text-emerald-500">Educativa</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Primaria */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/primaria.png"
                  alt="Educación Primaria"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-emerald-500 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Educación Primaria</h3>
                <p className="text-emerald-500 text-sm font-medium mb-4">1° a 6° grado</p>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Materiales:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Matemática', 'Ciencia y Tecnología', 'Arte y Cultura', 'Religión'].map((m) => (
                        <span key={m} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Comunicación:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Comunicación', 'Personal Social', 'Educación Física', 'Inglés'].map((m) => (
                        <span key={m} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                  Más información
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Secundaria */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/secundaria.png"
                  alt="Educación Secundaria"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-amber-500 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Educación Secundaria</h3>
                <p className="text-amber-500 text-sm font-medium mb-4">1° a 5° grado</p>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Materiales:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Matemática', 'Ciencias Sociales', 'Educación para el Trabajo', 'Inglés', 'Tutoría'].map((m) => (
                        <span key={m} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Comunicación:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Comunicación', 'Ciencia y Tecnología', 'Arte y Cultura', 'Educación Física', 'Religión'].map((m) => (
                        <span key={m} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                  Más información
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
