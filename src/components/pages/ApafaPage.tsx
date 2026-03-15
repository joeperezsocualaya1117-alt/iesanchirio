'use client';

import { useState } from 'react';
import { FileText, Users, ShoppingCart, BookOpen, Calendar, Search, ExternalLink, Download, Filter, FolderOpen, Clock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Documento {
  id: string;
  nombre: string;
  descripcion: string;
  tipo: 'reunion' | 'compra' | 'acta' | 'informe' | 'otro';
  fecha: string;
  driveUrl: string;
  tamaño?: string;
  visualizaciones?: number;
}

const documentos: Documento[] = [
  {
    id: '1',
    nombre: 'Reunión General de Padres de Familia - Marzo 2026',
    descripcion: 'Acta de la reunión general con padres de familia donde se trataron temas académicos, infraestructura y proyectos del presente año escolar.',
    tipo: 'reunion',
    fecha: '2026-03-15',
    driveUrl: 'https://drive.google.com/file/d/1Kbp9h5tfr9G5L3OIlmtz5c4cUunP8Cym/view?usp=drive_link',
    tamaño: '2.5 MB',
    visualizaciones: 45,
  },
  {
    id: '2',
    nombre: 'Compra de Material Didáctico - Febrero 2026',
    descripcion: 'Documentación de la compra de materiales didácticos para el ciclo escolar 2026, incluyendo libros, cuadernos y materiales de trabajo.',
    tipo: 'compra',
    fecha: '2026-02-20',
    driveUrl: 'https://drive.google.com/file/d/ejemplo2',
    tamaño: '1.8 MB',
    visualizaciones: 32,
  },
  {
    id: '3',
    nombre: 'Acta de Sesión Ordinaria N° 001-2026',
    descripcion: 'Acta de la primera sesión ordinaria del año 2026 de la junta directiva del APAFA, con acuerdos y compromisos establecidos.',
    tipo: 'acta',
    fecha: '2026-01-28',
    driveUrl: 'https://drive.google.com/file/d/ejemplo3',
    tamaño: '890 KB',
    visualizaciones: 28,
  },
  {
    id: '4',
    nombre: 'Informe de Gestión 2025',
    descripcion: 'Informe anual de gestión del APAFA correspondiente al año escolar 2025, incluyendo ingresos, egresos y proyectos realizados.',
    tipo: 'informe',
    fecha: '2026-01-15',
    driveUrl: 'https://drive.google.com/file/d/ejemplo4',
    tamaño: '4.2 MB',
    visualizaciones: 67,
  },
  {
    id: '5',
    nombre: 'Reunión de Coordinación - Enero 2026',
    descripcion: 'Memoria de la reunión de coordinación con docentes y representantes de aula para organizar actividades del primer trimestre.',
    tipo: 'reunion',
    fecha: '2026-01-10',
    driveUrl: 'https://drive.google.com/file/d/ejemplo5',
    tamaño: '1.2 MB',
    visualizaciones: 23,
  },
  {
    id: '6',
    nombre: 'Compra de Equipos de Computación',
    descripcion: 'Proceso de adquisición de equipos de computación para el laboratorio de informática, con cotizaciones y acta de adjudicación.',
    tipo: 'compra',
    fecha: '2025-12-05',
    driveUrl: 'https://drive.google.com/file/d/ejemplo6',
    tamaño: '5.8 MB',
    visualizaciones: 41,
  },
  {
    id: '7',
    nombre: 'Acta de Sesión Extraordinaria N° 002-2026',
    descripcion: 'Acta de sesión extraordinaria convocada para tratar asuntos urgentes relacionados con la infraestructura escolar.',
    tipo: 'acta',
    fecha: '2026-02-10',
    driveUrl: 'https://drive.google.com/file/d/ejemplo7',
    tamaño: '750 KB',
    visualizaciones: 19,
  },
  {
    id: '8',
    nombre: 'Padrón de Padres de Familia 2026',
    descripcion: 'Listado actualizado de padres de familia integrantes del APAFA para el año escolar 2026 con datos de contacto.',
    tipo: 'otro',
    fecha: '2026-03-01',
    driveUrl: 'https://drive.google.com/file/d/ejemplo8',
    tamaño: '3.1 MB',
    visualizaciones: 89,
  },
  {
    id: '9',
    nombre: 'Reunión de Fin de Año 2025',
    descripcion: 'Acta de la reunión de fin de año escolar 2025 con rendición de cuentas y planificación del año siguiente.',
    tipo: 'reunion',
    fecha: '2025-12-18',
    driveUrl: 'https://drive.google.com/file/d/ejemplo9',
    tamaño: '2.1 MB',
    visualizaciones: 56,
  },
  {
    id: '10',
    nombre: 'Compra de Mobiliario Escolar',
    descripcion: 'Documentación de la compra de sillas y mesas para las aulas de primaria y secundaria.',
    tipo: 'compra',
    fecha: '2025-11-20',
    driveUrl: 'https://drive.google.com/file/d/ejemplo10',
    tamaño: '3.4 MB',
    visualizaciones: 34,
  },
  {
    id: '11',
    nombre: 'Libro de Actas 2025',
    descripcion: 'Libro de actas completo del año 2025 con todas las sesiones ordinarias y extraordinarias realizadas.',
    tipo: 'acta',
    fecha: '2025-12-31',
    driveUrl: 'https://drive.google.com/file/d/ejemplo11',
    tamaño: '12.5 MB',
    visualizaciones: 112,
  },
  {
    id: '12',
    nombre: 'Informe Financiero T2-2026',
    descripcion: 'Informe financiero del segundo trimestre del año 2026 con detalle de ingresos, gastos y balances.',
    tipo: 'informe',
    fecha: '2026-03-10',
    driveUrl: 'https://drive.google.com/file/d/ejemplo12',
    tamaño: '1.9 MB',
    visualizaciones: 38,
  },
  {
    id: '13',
    nombre: 'Informe Reunion de Apafa Marzo 2026',
    descripcion: 'Informe financiero del segundo trimestre del año 2026 con detalle de ingresos, gastos y balances.',
    tipo: 'reunion',
    fecha: '2026-03-15',
    driveUrl: 'https://drive.google.com/file/d/ejemplo12',
    tamaño: '1.9 MB',
    visualizaciones: 38,
  },
];

const tipoConfig = {
  reunion: { label: 'Reuniones', icon: Users, color: 'bg-blue-500', badge: 'bg-blue-100 text-blue-700' },
  compra: { label: 'Compras', icon: ShoppingCart, color: 'bg-emerald-500', badge: 'bg-emerald-100 text-emerald-700' },
  acta: { label: 'Libro de Actas', icon: BookOpen, color: 'bg-amber-500', badge: 'bg-amber-100 text-amber-700' },
  informe: { label: 'Informes', icon: FileText, color: 'bg-purple-500', badge: 'bg-purple-100 text-purple-700' },
  otro: { label: 'Otros', icon: FolderOpen, color: 'bg-gray-500', badge: 'bg-gray-100 text-gray-700' },
};

export default function ApafaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTipo, setSelectedTipo] = useState<string>('todos');

  const filteredDocumentos = documentos.filter((doc) => {
    const matchesSearch = doc.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTipo = selectedTipo === 'todos' || doc.tipo === selectedTipo;
    return matchesSearch && matchesTipo;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-PE', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[350px] md:min-h-[400px] flex items-center bg-gradient-to-br from-emerald-800 via-emerald-700 to-emerald-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Users className="h-5 w-5 text-emerald-300 mr-2" />
              <span className="text-emerald-200 text-sm font-medium">Asociación de Padres de Familia</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              APAFA - Documentos
            </h1>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
              Accede a todos los documentos oficiales del APAFA: actas de reuniones, registros de compras, informes y más.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">{documentos.length}</div>
              <div className="text-gray-500 text-sm">Total Documentos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{documentos.filter(d => d.tipo === 'reunion').length}</div>
              <div className="text-gray-500 text-sm">Reuniones</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">{documentos.filter(d => d.tipo === 'acta').length}</div>
              <div className="text-gray-500 text-sm">Actas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">{documentos.filter(d => d.tipo === 'compra').length}</div>
              <div className="text-gray-500 text-sm">Compras</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-6 bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar documentos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-50 border-gray-200"
              />
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={selectedTipo === 'todos' ? 'default' : 'outline'}
                onClick={() => setSelectedTipo('todos')}
                className={selectedTipo === 'todos' ? 'bg-emerald-500 hover:bg-emerald-600' : 'border-gray-300'}
              >
                <FolderOpen className="h-4 w-4 mr-2" />
                Todos
              </Button>
              {Object.entries(tipoConfig).map(([key, config]) => (
                <Button
                  key={key}
                  variant={selectedTipo === key ? 'default' : 'outline'}
                  onClick={() => setSelectedTipo(key)}
                  className={selectedTipo === key ? `${config.color} hover:opacity-90` : 'border-gray-300'}
                >
                  <config.icon className="h-4 w-4 mr-2" />
                  {config.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-12 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDocumentos.length === 0 ? (
            <div className="text-center py-16">
              <FolderOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron documentos</h3>
              <p className="text-gray-500">Intenta con otros términos de búsqueda o filtros.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocumentos.map((doc) => {
                const config = tipoConfig[doc.tipo];
                const IconComponent = config.icon;

                return (
                  <Card
                    key={doc.id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 group"
                  >
                    {/* Card Header */}
                    <div className={`${config.color} p-4`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-white/20 p-2 rounded-lg">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <Badge className={`${config.badge} border-0`}>
                            {config.label}
                          </Badge>
                        </div>
                        <div className="text-white/80 text-sm">{doc.tamaño}</div>
                      </div>
                    </div>

                    <CardContent className="p-5">
                      <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                        {doc.nombre}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {doc.descripcion}
                      </p>

                      {/* Meta info */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(doc.fecha)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {doc.visualizaciones} vistas
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button
                          className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white"
                          onClick={() => window.open(doc.driveUrl, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Ver documento
                        </Button>
                        <Button
                          variant="outline"
                          className="border-gray-300"
                          onClick={() => window.open(doc.driveUrl, '_blank')}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-500/20 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-7 w-7 text-emerald-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Actualización Constante</h3>
              <p className="text-gray-400 text-sm">Los documentos se actualizan regularmente después de cada reunión o evento del APAFA.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500/20 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Acceso desde Google Drive</h3>
              <p className="text-gray-400 text-sm">Todos los documentos están alojados en Google Drive para un acceso rápido y seguro.</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-500/20 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-amber-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Transparencia Total</h3>
              <p className="text-gray-400 text-sm">Todos los padres de familia tienen acceso a la información del APAFA en cualquier momento.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
