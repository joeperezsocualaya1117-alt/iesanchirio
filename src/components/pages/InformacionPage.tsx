'use client';

import { Building2, Users, Target, Award, Clock, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

const valores = [
  { title: 'Respeto', desc: 'Valoramos la dignidad de cada persona y promovemos relaciones armoniosas.' },
  { title: 'Responsabilidad', desc: 'Fomentamos el compromiso con las obligaciones y el cumplimiento de deberes.' },
  { title: 'Honestidad', desc: 'Promovemos la verdad y la transparencia en todas nuestras acciones.' },
  { title: 'Solidaridad', desc: 'Cultivamos la ayuda mutua y el trabajo en equipo.' },
  { title: 'Excelencia', desc: 'Buscamos la mejora continua en todo lo que hacemos.' },
  { title: 'Innovación', desc: 'Adoptamos nuevas metodologías y tecnologías para mejorar la educación.' },
];

const servicios = [
  'Educación Primaria y Secundaria de calidad',
  'Laboratorios de ciencias y computación',
  'Biblioteca con más de 10,000 volúmenes',
  'Campos deportivos y áreas recreativas',
  'Programa de inglés intensivo',
  'Talleres artísticos y culturales',
  'Servicio de psicopedagogía',
  'Transporte escolar',
  'Comedor nutritivo',
  'Seguro estudiantil',
];

export default function InformacionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[450px] flex items-center bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <p className="text-emerald-400 font-semibold mb-2 tracking-wider text-sm">CONÓCENOS</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Información <span className="text-emerald-400">Institucional</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Conoce más sobre nuestra historia, misión, visión y los valores que nos guían.
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-500 p-3 rounded-lg">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Nuestra Historia</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                La I.E. Sanchirio Palomar fue fundada en el año 2001 con la misión de brindar educación de calidad a la comunidad de Sanchirio Palomar y sus alrededores. Desde entonces, nos hemos convertido en una institución educativa de referencia en la zona.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A lo largo de más de 25 años, hemos formado a miles de estudiantes que hoy son profesionales exitosos en diversos campos. Nuestro compromiso con la excelencia académica y la formación integral nos ha permitido mantenernos como una de las mejores opciones educativas de la región.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hoy contamos con infraestructura moderna, un equipo docente altamente calificado y programas educativos que responden a las necesidades del siglo XXI.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-500 mb-2">2001</div>
                  <div className="text-gray-600">Año de Fundación</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-500 mb-2">25+</div>
                  <div className="text-gray-600">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-500 mb-2">450+</div>
                  <div className="text-gray-600">Estudiantes Activos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-500 mb-2">3000+</div>
                  <div className="text-gray-600">Graduados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-500 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Nuestra Misión</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Brindar una educación integral de calidad que desarrolle competencias académicas, valores éticos y habilidades para la vida, preparando a cada estudiante para enfrentar los desafíos del futuro con confianza y responsabilidad. Nos comprometemos a formar ciudadanos íntegros y comprometidos con el desarrollo de la sociedad.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Nuestra Visión</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ser reconocidos como una institución educativa líder en la formación de estudiantes con excelencia académica y sólidos valores, que contribuyan positivamente al desarrollo de su comunidad y del país. Aspiramos a ser un referente en innovación educativa y formación integral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-500 font-semibold mb-2 tracking-wider text-sm">PRINCIPIOS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Nuestros <span className="text-emerald-500">Valores</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{valor.title}</h3>
                <p className="text-gray-600 text-sm">{valor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-300 font-semibold mb-2 tracking-wider text-sm">LO QUE OFRECEMOS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Nuestros <span className="text-amber-400">Servicios</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {servicios.map((servicio, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-white">{servicio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horarios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-500 font-semibold mb-2 tracking-wider text-sm">HORARIOS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Horarios de <span className="text-emerald-500">Atención</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-500 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Horario Escolar</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Lunes a Viernes</span>
                  <span className="font-semibold text-gray-900">7:30 AM - 3:30 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Receso</span>
                  <span className="font-semibold text-gray-900">10:30 AM - 11:00 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Almuerzo</span>
                  <span className="font-semibold text-gray-900">12:30 PM - 1:30 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Atención Administrativa</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Lunes a Viernes</span>
                  <span className="font-semibold text-gray-900">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-600">Sábados</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Domingos y Feriados</span>
                  <span className="font-semibold text-red-500">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ¿Dónde <span className="text-emerald-500">Estamos</span>?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Dirección</p>
                    <p className="text-gray-600">Barrio nuevo, Sanchirio Palomar, Chanchamayo</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Teléfono</p>
                    <p className="text-gray-600">(01) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Correo electrónico</p>
                    <p className="text-gray-600">contacto@iesanchirio.edu.pe</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">Mapa de Ubicación</p>
                <p className="text-sm text-gray-400">Sanchirio Palomar, Lima, Perú</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
