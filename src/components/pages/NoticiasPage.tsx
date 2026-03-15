'use client';

import { Calendar, ArrowRight, User, Tag, Clock, Share2, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useState } from 'react';

interface Noticia {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  tags: string[];
}

const noticias: Noticia[] = [
  {
    id: '1',
    title: 'Inscripciones Abiertas 2026',
    excerpt: 'Ya está abierto el proceso de admisión para el año escolar 2026. Conoce los requisitos y fechas importantes.',
    content: `El proceso de admisión para el año escolar 2026 ya está oficialmente abierto en la I.E. Sanchirio Palomar. Este año, hemos implementado un nuevo sistema de inscripción en línea que facilitará el proceso para los padres de familia.

## Fechas Importantes

- **Inscripciones en línea:** Del 1 al 31 de marzo
- **Entrega de documentos:** Del 1 al 15 de abril
- **Evaluaciones:** Del 20 al 30 de abril
- **Publicación de resultados:** 5 de mayo

## Requisitos

Para el proceso de admisión, los padres de familia deberán presentar:
- Copia del DNI del estudiante y padres
- Partida de nacimiento original
- Certificado de estudios del año anterior
- Fotos tamaño carnet

## Horarios de Atención

La oficina de admisiones atenderá de lunes a viernes de 8:00 AM a 4:00 PM, y sábados de 9:00 AM a 12:00 PM.

Para más información, pueden comunicarse al teléfono (01) 456-7890 o escribir al correo admisiones@iesanchirio.edu.pe.`,
    date: '15 Marzo 2026',
    author: 'Departamento de Admisiones',
    category: 'Admisiones',
    image: '/images/hero-classroom.png',
    readTime: '5 min',
    tags: ['Admisiones', 'Inscripciones', '2026'],
  },
  {
    id: '2',
    title: 'Feria de Ciencias 2026',
    excerpt: 'Nuestros estudiantes presentaron proyectos innovadores en la feria de ciencias anual, demostrando creatividad y conocimiento.',
    content: `Con gran éxito se llevó a cabo la Feria de Ciencias 2026, donde más de 50 proyectos fueron presentados por estudiantes de primaria y secundaria. Los proyectos demostraron un alto nivel de creatividad y aplicación del método científico.

## Proyectos Destacados

### Primer Lugar - Secundaria
**"Sistema de Riego Automatizado con Energía Solar"**
Estudiantes de 4° y 5° de secundaria desarrollaron un sistema de riego que utiliza energía solar y sensores de humedad para optimizar el uso del agua en la agricultura.

### Primer Lugar - Primaria
**"Filtro de Agua con Materiales Reciclados"**
Los estudiantes de 6° grado crearon un filtro de agua utilizando materiales reciclados y naturales, demostrando la importancia del cuidado del medio ambiente.

## Categorías Participantes

- Física y Química
- Biología y Ecología
- Tecnología e Innovación
- Ciencias Sociales

Agradecemos a todos los docentes y padres de familia que apoyaron a los estudiantes en el desarrollo de sus proyectos. La feria demuestra el compromiso de nuestra institución con la educación científica de calidad.`,
    date: '10 Marzo 2026',
    author: 'Coordinación Académica',
    category: 'Eventos',
    image: '/images/primaria.png',
    readTime: '4 min',
    tags: ['Ciencias', 'Feria', 'Innovación'],
  },
  {
    id: '3',
    title: 'Campeonato Deportivo Interescolar',
    excerpt: 'El equipo de fútbol de nuestra institución obtuvo el primer lugar en el campeonato interescolar de la zona.',
    content: `¡Felicitaciones a nuestro equipo de fútbol que obtuvo el primer lugar en el Campeonato Interescolar de la Zona Este! El equipo demostró un excelente desempeño deportivo y un gran espíritu de equipo.

## Resultados del Campeonato

### Partidos Jugados
- I.E. Sanchirio vs I.E. San Martín: 3-1
- I.E. Sanchirio vs I.E. Los Álamos: 2-0
- I.E. Sanchirio vs I.E. Santa Rosa: 4-2 (Final)

## Equipo Campeón

**Jugadores Destacados:**
- Juan Pérez (Capitán) - 5° Secundaria
- Carlos López - 4° Secundaria
- Miguel Torres - 3° Secundaria
- Roberto Díaz - 5° Secundaria

**Cuerpo Técnico:**
- Prof. Fernando Gutiérrez (Entrenador)
- Prof. Ricardo Vega (Asistente)

El campeonato contó con la participación de 8 instituciones educativas de la zona. Este logro demuestra el compromiso de nuestros estudiantes con el deporte y el trabajo en equipo.

La entrega de trofeos se realizará el próximo viernes en ceremonia especial.`,
    date: '5 Marzo 2026',
    author: 'Departamento de Deportes',
    category: 'Deportes',
    image: '/images/secundaria.png',
    readTime: '3 min',
    tags: ['Deportes', 'Fútbol', 'Campeonato'],
  },
  {
    id: '4',
    title: 'Taller de Orientación Vocacional',
    excerpt: 'Se llevó a cabo el taller de orientación vocacional para estudiantes de 4° y 5° de secundaria con gran éxito.',
    content: `Con una asistencia de más de 150 estudiantes, se realizó el Taller de Orientación Vocacional dirigido a los estudiantes de 4° y 5° de secundaria. El taller tuvo como objetivo ayudar a los estudiantes a tomar decisiones informadas sobre su futuro profesional.

## Temas Tratados

### Carreras Universitarias
Se presentaron las principales carreras universitarias con mayor demanda en el mercado laboral actual, incluyendo:
- Ingeniería de Sistemas
- Medicina
- Administración
- Derecho
- Educación

### Educación Técnica
También se dio a conocer las opciones de educación técnica y los institutos de referencia en la zona.

## Expositores

Contamos con la participación de profesionales de diferentes áreas que compartieron sus experiencias:
- Dr. Juan Mendoza - Médico
- Ing. María Torres - Ingeniera de Sistemas
- Lic. Ana Gutiérrez - Administradora
- Abog. Roberto Vargas - Abogado

Los estudiantes tuvieron la oportunidad de hacer preguntas y recibir orientación personalizada. Agradecemos a todos los profesionales que compartieron su tiempo con nuestra comunidad educativa.`,
    date: '1 Marzo 2026',
    author: 'Departamento de Tutoría',
    category: 'Académico',
    image: '/images/library.png',
    readTime: '4 min',
    tags: ['Vocacional', 'Orientación', 'Universidad'],
  },
  {
    id: '5',
    title: 'Día del Logro 2026',
    excerpt: 'Celebramos el Día del Logro donde nuestros estudiantes demostraron sus aprendizajes y proyectos del año.',
    content: `Con gran entusiasmo se celebró el Día del Logro 2026, un evento especial donde nuestros estudiantes presentaron los proyectos y aprendizajes alcanzados durante el año escolar.

## Actividades Realizadas

### Exposiciones Académicas
Los estudiantes de todos los niveles presentaron proyectos en las siguientes áreas:
- Matemáticas: Resolución de problemas del mundo real
- Comunicación: Producción de textos y presentaciones orales
- Ciencia y Tecnología: Experimentos y prototipos
- Ciencias Sociales: Investigaciones sobre historia local

### Presentaciones Artísticas
- Danzas folclóricas
- Coro escolar
- Teatro educativo
- Exposición de obras de arte

### Feria Gastronómica
Los padres de familia participaron en la feria gastronómica donde se ofrecieron platos típicos de diferentes regiones del Perú.

## Reconocimientos

Se entregaron reconocimientos especiales a los estudiantes con mejor rendimiento académico y a aquellos que demostraron valores destacados durante el año escolar.

Agradecemos a toda la comunidad educativa por hacer de este evento un momento especial de celebración y reflexión sobre nuestros logros educativos.`,
    date: '28 Febrero 2026',
    author: 'Dirección',
    category: 'Eventos',
    image: '/images/hero-classroom.png',
    readTime: '5 min',
    tags: ['Logro', 'Celebración', 'Estudiantes'],
  },
  {
    id: '6',
    title: 'Capacitación Docente 2026',
    excerpt: 'Nuestro cuerpo docente participó en capacitaciones sobre nuevas metodologías de enseñanza.',
    content: `El cuerpo docente de la I.E. Sanchirio Palomar participó en las capacitaciones programadas para el año 2026, enfocadas en nuevas metodologías de enseñanza y el uso de tecnología educativa.

## Temas de Capacitación

### Metodologías Activas
- Aprendizaje Basado en Proyectos (ABP)
- Aula Invertida (Flipped Classroom)
- Gamificación educativa
- Aprendizaje cooperativo

### Tecnología Educativa
- Uso de plataformas educativas digitales
- Creación de recursos multimedia
- Herramientas de evaluación en línea
- Aplicaciones educativas para el aula

### Bienestar Docente
- Manejo del estrés
- Trabajo en equipo
- Comunicación efectiva

## Facilitadores

Las capacitaciones estuvieron a cargo de especialistas del Ministerio de Educación y profesionales en educación de reconocidas universidades.

## Resultados

- 45 docentes capacitados
- 20 horas de formación
- Certificaciones oficiales

La institución continúa comprometida con la formación continua de su cuerpo docente como pilar fundamental de la calidad educativa.`,
    date: '20 Febrero 2026',
    author: 'Coordinación Académica',
    category: 'Institucional',
    image: '/images/secundaria.png',
    readTime: '4 min',
    tags: ['Capacitación', 'Docentes', 'Formación'],
  },
   {
    id: '7',
    title: 'Capacitación Administrativos 2026',
    excerpt: 'Nuestro cuerpo administrativo participó en capacitaciones sobre nuevas metodologías de enseñanza.',
    content: `El cuerpo docente de la I.E. Sanchirio Palomar participó en las capacitaciones programadas para el año 2026, enfocadas en nuevas metodologías de enseñanza y el uso de tecnología educativa.

## Temas de Capacitación

### Metodologías Activas
- Aprendizaje Basado en Proyectos (ABP)
- Aula Invertida (Flipped Classroom)
- Gamificación educativa
- Aprendizaje cooperativo

### Tecnología Educativa
- Uso de plataformas educativas digitales
- Creación de recursos multimedia
- Herramientas de evaluación en línea
- Aplicaciones educativas para el aula

### Bienestar Docente
- Manejo del estrés
- Trabajo en equipo
- Comunicación efectiva

## Facilitadores

Las capacitaciones estuvieron a cargo de especialistas del Ministerio de Educación y profesionales en educación de reconocidas universidades.

## Resultados

- 45 docentes capacitados
- 20 horas de formación
- Certificaciones oficiales

La institución continúa comprometida con la formación continua de su cuerpo docente como pilar fundamental de la calidad educativa.`,
    date: '20 Febrero 2026',
    author: 'Coordinación Académica',
    category: 'Institucional',
    image: '/images/administracion.png',
    readTime: '4 min',
    tags: ['Capacitación', 'Docentes', 'Formación'],
  },
];

function NoticiaDetailModal({ noticia, open, onOpenChange }: {
  noticia: Noticia | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!noticia) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              {noticia.category}
            </span>
            <span className="text-gray-500 text-sm flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {noticia.readTime} de lectura
            </span>
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {noticia.title}
          </DialogTitle>
        </DialogHeader>

        {/* Imagen */}
        <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6">
          <img
            src={noticia.image}
            alt={noticia.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{noticia.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{noticia.date}</span>
          </div>
        </div>

        {/* Contenido */}
        <div className="prose prose-sm max-w-none">
          {noticia.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-lg font-bold text-gray-900 mt-6 mb-3">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} className="text-base font-semibold text-gray-800 mt-4 mb-2">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return (
                <p key={index} className="font-semibold text-gray-800 my-2">
                  {paragraph.replace(/\*\*/g, '')}
                </p>
              );
            }
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n');
              return (
                <ul key={index} className="list-disc list-inside text-gray-600 my-2 space-y-1">
                  {items.map((item, i) => (
                    <li key={i}>{item.replace('- ', '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="text-gray-600 leading-relaxed my-3">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-200">
          <Tag className="h-4 w-4 text-gray-400" />
          {noticia.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Acciones */}
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-gray-500">
              <Heart className="h-4 w-4 mr-1" />
              Me gusta
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-500">
              <MessageCircle className="h-4 w-4 mr-1" />
              Comentar
            </Button>
          </div>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-1" />
            Compartir
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function NoticiasPage() {
  const [selectedNoticia, setSelectedNoticia] = useState<Noticia | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewDetails = (noticia: Noticia) => {
    setSelectedNoticia(noticia);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[450px] flex items-center bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <p className="text-emerald-400 font-semibold mb-2 tracking-wider text-sm">ACTUALIDAD</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Notic<span className="text-emerald-400">ias</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Mantente informado sobre las últimas novedades y eventos de nuestra institución educativa.
            </p>
          </div>
        </div>
      </section>

      {/* Noticias Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.map((noticia) => (
              <Card
                key={noticia.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => handleViewDetails(noticia)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={noticia.image}
                    alt={noticia.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {noticia.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {noticia.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {noticia.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-500 transition-colors">
                    {noticia.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{noticia.excerpt}</p>
                  <Button
                    variant="link"
                    className="p-0 text-emerald-500 hover:text-emerald-600 group-hover:text-amber-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewDetails(noticia);
                    }}
                  >
                    Leer más <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Detalles */}
      <NoticiaDetailModal
        noticia={selectedNoticia}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}
