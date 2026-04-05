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
id: '96',
title: '¡El cole se llena de vida de nuevo! 🍎',
excerpt: 'Recibimiento de nuestro docentes a la I.E. Sanchirio Palomar',
content: `Recibimos a nuestros profesores con el corazón contento y la mesa puesta. 

Desde la APAFA, queremos que se sientan como en casa, por eso organizamos un almuerzo especial para compartir metas, risas y, sobre todo, nuestra gratitud por su vocación.

¡Bienvenidos a un gran año escolar en Sanchirio Palomar!-Juntos, padres y maestros, 

¡somos el mejor equipo! 💪📚
`,
date: '2026-03-20',
author: 'I.E. SANCHIRIO',
category: 'Bienvenida Docentes',
image: '/images/vienvenida.png',
readTime: '3 min',
tags: ['Bienvenida', '2026'],
},

{
id: '97',
title: 'Hablemos Quiosco! 🍎🥪',
excerpt: 'Saludamos a Krysell Marcela, Escobar Yupanqui',
content: `Saludamos a Krysell Marcela, Escobar Yupanqui, quien estará a cargo de la alimentación de nuestros estudiantes este año. 
Estamos seguros de que su compromiso con la salud y el buen trato marcará la diferencia.

¡Bienvenidos a la familia de la I.E. “Sanchirio Palomar”! 
Juntos promovemos una vida saludable. 💪✨
`,
date: '2026-03-23',
author: 'I.E. SANCHIRIO P.',
category: 'Quiosco',
image: '/images/mercela.png',
readTime: '3 min',
tags: ['I.E Sanchirio Palomar', 'Educación', 'QuioscoSaludable'],
},

{
id:'98',
title: '¡Gran Bienvenida 2026! Chocolatada para Alumnos y Almuerzo de Confraternidad',
excerpt: 'En la I.E. “Sanchirio Palomar”, el inicio de clases es una fiesta. Con mucha alegría, el Consejo Directivo de la APAFA recibió a nuestros estudiantes ',
content: `En la I.E. “Sanchirio Palomar”, el inicio de clases es una fiesta. Con mucha alegría, el Consejo Directivo de la APAFA recibió a nuestros estudiantes y visitantes con un evento especial de bienvenida, financiado íntegramente con los fondos de nuestra asociación.

Creemos que un ambiente cálido y acogedor es el primer paso para un año escolar exitoso. Por ello, pusimos "manos a la obra" para organizar esta jornada de integración.

Detalles de la Actividad:

- Chocolatada Estudiantil: Todos nuestros alumnos disfrutaron de una deliciosa chocolatada con su sándwich de pollo, compartiendo momentos de risas y reencuentro con sus compañeros.

- Almuerzo de Bienvenida: Recibimos a nuestras autoridades, visitantes y delegaciones con un almuerzo especial, fortaleciendo los lazos entre la comunidad y nuestra institución.

- Gestión Transparente: Este evento fue posible gracias a las cuotas y aportes de los padres de familia, administrados responsablemente para generar bienestar en nuestra comunidad educativa.

"Ver la sonrisa de nuestros niños al entrar al colegio es nuestra mayor satisfacción. Gracias a cada padre por hacer esto posible con su aporte".
`,
date: '2026-03-23',
author: 'I.E. SANCHIRIO P.',
category: 'Bienvenida Estudiantes',
image: '/images/bienvenidaest.png',
readTime: '4 min',
tags: ['I.E Sanchirio Palomar', 'Educación', 'Bienvenida'],
},

{
  id:'99',
title: '¡LO LOGRAMOS! Nuestra Institución Gana Proyecto en el Presupuesto Participativo 2027',
excerpt: 'Consejo Directivo de la APAFA y la Dirección de la I.E. “Sanchirio Palomar” informan a toda la comunidad educativa que nuestro proyecto ha sido aprobado',
content: `Con gran orgullo, el Consejo Directivo de la APAFA y la Dirección de la I.E. “Sanchirio Palomar” informan a toda la comunidad educativa que nuestro proyecto ha sido seleccionado y aprobado dentro del Presupuesto Participativo de la Municipalidad Provincial de Chanchamayo para el año 2027.

Gracias a la participación activa de nuestros representantes y al sustento técnico de nuestras necesidades, la municipalidad destinará fondos para la ejecución del Proyecto: 

“Construcción de cobertura de instalaciones deportivas; en el (la) I.E. Sanchirio Palomar en el Centro Poblado Sanchirio Palomar, Distrito San Luis de Shuaro, Provincia de Chanchamayo, Departamento de Junín”.

•	Inversión Pública: Logramos canalizar recursos municipales hacia nuestra institución, cuidando así la economía de los padres de familia.

•	Gestión Exitosa: Este resultado es fruto de constantes reuniones, sustentos y el voto de los agentes participantes.

"Este es el resultado de no quedarnos de brazos cruzados. Tocamos puertas en la Municipalidad y hoy vemos los frutos. 

¡El beneficio es para todos nuestros alumnos!".

`,
date: '2026-03-27',
author: 'I.E. SANCHIRIO P.',
category: 'Institución Educativa',
image: '/images/techo.png',
readTime: '4 min',
tags: ['I.E Sanchirio Palomar', 'Educación', 'Infraestructura'],
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
