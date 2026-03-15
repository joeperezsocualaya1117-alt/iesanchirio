'use client';

import { BookOpen, GraduationCap, Pencil, Users, TrendingUp, Award, Clock, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function AcademicoPage() {
  const niveles = [
    {
      title: 'Educación Primaria',
      icon: BookOpen,
      iconColor: 'text-emerald-500',
      bgColor: 'bg-emerald-500',
      image: '/images/primaria.png',
      description: 'Programa integral para estudiantes de 1° a 6° grado, enfocado en el desarrollo de competencias fundamentales.',
      subjects: ['Matemática', 'Comunicación', 'Ciencia y Tecnología', 'Personal Social', 'Arte y Cultura', 'Educación Física'],
    },
    {
      title: 'Educación Secundaria',
      icon: GraduationCap,
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-500',
      image: '/images/secundaria.png',
      description: 'Formación académica avanzada de 1° a 5° grado, preparando a los estudiantes para la educación superior.',
      subjects: ['Matemática', 'Comunicación', 'Ciencias Sociales', 'Ciencia y Tecnología', 'Inglés', 'Educación para el Trabajo'],
    },
    {
      title: 'Programas Complementarios',
      icon: Pencil,
      iconColor: 'text-purple-500',
      bgColor: 'bg-purple-500',
      image: '/images/secundaria.png',
      description: 'Talleres y actividades extracurriculares que complementan la formación académica de nuestros estudiantes.',
      subjects: ['Talleres de Arte', 'Deportes', 'Música', 'Robótica', 'Inglés Avanzado', 'Liderazgo'],
    },
  ];

  const indicadores = [
    { value: '95%', label: 'Tasa de Graduación', icon: TrendingUp },
    { value: '80%', label: 'Ingreso a Universidades', icon: GraduationCap },
    { value: '25+', label: 'Años de Experiencia', icon: Clock },
    { value: '450+', label: 'Estudiantes Activos', icon: Users },
  ];

  const servicios = [
    {
      icon: Pencil,
      title: 'Metodología Educativa',
      description: 'Enfoque constructivista centrado en el estudiante, con metodologías activas que promueven el pensamiento crítico y la resolución de problemas.',
    },
    {
      icon: Users,
      title: 'Actividades Extracurriculares',
      description: 'Amplia variedad de talleres, clubes y actividades deportivas que complementan la formación integral de nuestros estudiantes.',
    },
    {
      icon: Star,
      title: 'Convenios Académicos',
      description: 'Alianzas estratégicas con universidades e instituciones educativas para brindar mayores oportunidades a nuestros estudiantes.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[450px] flex items-center bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <p className="text-emerald-400 font-semibold mb-2 tracking-wider text-sm">PROGRAMAS ACADÉMICOS</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Excelencia en <span className="text-emerald-400">Educación</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Descubre nuestros programas educativos diseñados para desarrollar las competencias del siglo XXI en nuestros estudiantes
            </p>
          </div>
        </div>
      </section>

      {/* Niveles Educativos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-500 font-semibold mb-2 tracking-wider text-sm">NUESTROS PROGRAMAS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Niveles <span className="text-emerald-500">Educativos</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {niveles.map((nivel, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-40">
                  <Image
                    src={nivel.image}
                    alt={nivel.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute top-4 left-4 ${nivel.bgColor} p-3 rounded-lg`}>
                    <nivel.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{nivel.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{nivel.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {nivel.subjects.slice(0, 4).map((subject) => (
                      <span key={subject} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {subject}
                      </span>
                    ))}
                    {nivel.subjects.length > 4 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        +{nivel.subjects.length - 4} más
                      </span>
                    )}
                  </div>
                  <Button variant="link" className={`p-0 ${nivel.iconColor} hover:no-underline`}>
                    Más información <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indicadores Institucionales */}
      <section className="py-20 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-300 font-semibold mb-2 tracking-wider text-sm">INDICADORES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Indicadores <span className="text-amber-400">Institucionales</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {indicadores.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-4">
                  <item.icon className="h-8 w-8 text-amber-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{item.value}</div>
                <div className="text-emerald-200">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-emerald-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <servicio.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{servicio.title}</h3>
                <p className="text-gray-600 leading-relaxed">{servicio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
