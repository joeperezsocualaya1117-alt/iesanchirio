'use client';

import { useState } from 'react';
import { Eye, MapPin, FileText, ClipboardCheck, CheckCircle2, Phone, Mail, MapPinned, Send, BookOpen, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const pasos = [
  { icon: Eye, title: 'Consulta Inicial', desc: 'Contáctanos para obtener información sobre nuestros programas educativos.' },
  { icon: MapPin, title: 'Visita al Campus', desc: 'Agenda una visita guiada para conocer nuestras instalaciones.' },
  { icon: FileText, title: 'Presentación de Documentación', desc: 'Entrega los documentos requeridos para iniciar el proceso.' },
  { icon: ClipboardCheck, title: 'Evaluación', desc: 'Evaluación del estudiante para determinar su nivel académico.' },
  { icon: CheckCircle2, title: 'Confirmación de Vacante', desc: 'Notificación de aceptación y matrícula formal.' },
];

const requisitosPrimaria = [
  'Copia del DNI del estudiante',
  'Copia del DNI de los padres',
  'Partida de nacimiento original',
  'Certificado de estudios del año anterior',
  'Ficha de matrícula completa',
  '2 fotos tamaño carnet',
  'Certificado de vacunas',
];

const requisitosSecundaria = [
  'Copia del DNI del estudiante',
  'Copia del DNI de los padres',
  'Partida de nacimiento original',
  'Certificado de estudios de primaria completa',
  'Certificado de estudios del año anterior',
  'Ficha de matrícula completa',
  '2 fotos tamaño carnet',
  'Constancia de conducta',
];

export default function AdmisionPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    nivel: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    alert('Mensaje enviado correctamente. Nos pondremos en contacto pronto.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[450px] flex items-center bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <p className="text-emerald-400 font-semibold mb-2 tracking-wider text-sm">ÚNETE A NOSOTROS</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Admisiones <span className="text-white">2026</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Inicia el camino hacia una educación de excelencia. Conoce nuestro proceso de admisión y los requisitos para ser parte de nuestra comunidad educativa.
            </p>
          </div>
        </div>
      </section>

      {/* Proceso de Admisión */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-500 font-semibold mb-2 tracking-wider text-sm">PASO A PASO</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Proceso de <span className="text-emerald-500">Admisión</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {pasos.map((paso, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">
                <div className="relative inline-flex items-center justify-center mb-4">
                  <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center">
                    <paso.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 bg-amber-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{paso.title}</h3>
                <p className="text-gray-600 text-sm">{paso.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-500 font-semibold mb-2 tracking-wider text-sm">DOCUMENTACIÓN</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Requisitos de <span className="text-emerald-500">Admisión</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Primaria */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-500 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Educación Primaria</h3>
              </div>
              <ul className="space-y-3">
                {requisitosPrimaria.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Secundaria */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Educación Secundaria</h3>
              </div>
              <ul className="space-y-3">
                {requisitosSecundaria.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-emerald-500 font-semibold mb-2 tracking-wider text-sm">CONTÁCTANOS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              ¿Tienes <span className="text-emerald-500">Preguntas</span>?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                  <Input
                    type="text"
                    placeholder="Tu nombre completo"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="bg-white"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                    <Input
                      type="tel"
                      placeholder="+51 999 999 999"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nivel de interés</label>
                  <Select value={formData.nivel} onValueChange={(value) => setFormData({ ...formData, nivel: value })}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Selecciona un nivel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="primaria">Educación Primaria</SelectItem>
                      <SelectItem value="secundaria">Educación Secundaria</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <Textarea
                    placeholder="Escribe tu mensaje o consulta..."
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="bg-white"
                  />
                </div>
                <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white py-6">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar mensaje
                </Button>
              </form>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-lg">
                      <MapPinned className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Dirección</p>
                      <p className="text-gray-600">Jr. Los Álamos 123, Sanchirio Palomar, Lima</p>
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
                      <p className="text-gray-600">admisiones@iesanchirio.edu.pe</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPinned className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Mapa de ubicación</p>
                  <p className="text-sm text-gray-400">Sanchirio Palomar, Lima</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
