'use client';

import { Phone, Mail } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useState } from 'react';

interface Teacher {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  description: string;
  specialty: string;
}

const director: Teacher = {
  id: 'director',
  name: 'Prof. Antenor Tito Morales de la Cruz',
  role: 'Director',
  phone: '+51 931 050 850',
  email: 'antenortito235@gmail.com',
  image: '/images/teachers/director.png',
  description: 'Con más de 20 años de experiencia en el sector educativo, el Prof. Rios ha liderado la institución hacia la excelencia académica, implementando programas innovadores que han posicionado a la I.E. Sanchirio Palomar como referente educativo en la zona.',
  specialty: 'Comunicación',
};

const equipoDirectivo: Teacher[] = [
  {
    id: 'dir1',
    name: 'Lic. María Elena Torres Vargas',
    role: 'Subdirectora Académica',
    phone: '+51 999 123 456',
    email: 'subdireccion@iesanchirio.edu.pe',
    image: '/images/teachers/docent-f1.png',
    description: 'Especialista en currículo educativo con maestría en Educación. Ha implementado exitosamente el nuevo enfoque por competencias en nuestra institución.',
    specialty: 'Currículo y Evaluación'
  },
  {
    id: 'dir2',
    name: 'Prof. Juan Carlos Mendoza López',
    role: 'Coordinador de Primaria',
    phone: '+51 999 234 567',
    email: 'primaria@iesanchirio.edu.pe',
    image: '/images/teachers/docent-m1.png',
    description: 'Docente con amplia experiencia en educación inicial y primaria. Líder en la implementación de metodologías activas de aprendizaje.',
    specialty: 'Educación Primaria'
  },
  {
    id: 'dir3',
    name: 'Lic. Ana María Gutiérrez Ruiz',
    role: 'Coordinadora de Secundaria',
    phone: '+51 999 345 678',
    email: 'secundaria@iesanchirio.edu.pe',
    image: '/images/teachers/docent-f2.png',
    description: 'Especialista en educación secundaria con enfoque en competencias. Ha desarrollado programas de orientación vocacional exitosos.',
    specialty: 'Educación Secundaria'
  },
  {
    id: 'dir4',
    name: 'Prof. Roberto Díaz Sánchez',
    role: 'Coordinador de Actividades',
    phone: '+51 999 456 789',
    email: 'actividades@iesanchirio.edu.pe',
    image: '/images/teachers/docent-m2.png',
    description: 'Organizador de eventos y actividades extracurriculares. Ha llevado a nuestra institución a ganar múltiples certámenes deportivos y culturales.',
    specialty: 'Actividades y Eventos'
  },
  {
    id: 'dir5',
    name: 'Lic. Patricia Vega Moreno',
    role: 'Coordinadora de Tutoría',
    phone: '+51 999 567 890',
    email: 'tutoria@iesanchirio.edu.pe',
    image: '/images/teachers/docent-f3.png',
    description: 'Psicóloga educativa especializada en orientación estudiantil. Ha implementado programas de prevención del bullying y apoyo emocional.',
    specialty: 'Psicología Educativa'
  },
];

const docentes: Teacher[] = [
{
id: 'doc1',
name: 'Salazar Chavez Corina',
role: 'Profesor Primaria',
phone: '973861205',
email: 'corinao201475@gmail.com',
image: '/images/teachers/Corina.png',
description: 'Docente',
specialty: 'Primaria'
},
{
id: 'doc2',
name: 'Montes Quichca Flavia Luisa',
role: 'Profesor Primaria',
phone: '988242208',
email: 'lmg.libra@gmail.com',
image: '/images/teachers/Flavia.png',
description: 'Docente',
specialty: 'Primaria'
},
{
id: 'doc3',
name: 'Galarza Flores Irma',
role: 'Profesor Primaria',
phone: '968521418',
email: 'irmagf2020@gmail.com',
image: '/images/teachers/Irma.png',
description:' Docente',
specialty: 'Primaria'
},
{
id: 'doc4',
name: 'Paucar Santos Karina',
role: 'Profesor Primaria',
phone: '956413365',
email: 'karinapilarpaucar@gmail.com',
image: '/images/teachers/Karinas.png',
description: 'Docente',
specialty: 'Primaria'
},
{
id: 'doc5',
name: 'Pérez Capcha Karina',
role: 'Profesor Primaria',
phone: '972354943',
email: 'kp30054@gmail.com',
image: '/images/teachers/Karina.png',
description: 'Docente',
specialty: 'Primaria'
},
{
id: 'doc6',
name: 'Lloclla Camasca Sofia Irene',
role: 'Profesor Primaria',
phone: '964899110',
email: 'sofiairenelloc2016@gmail.com',
image: '/images/teachers/Sofia.png',
description: 'Docente',
specialty: 'Primaria'
},
{
id: 'doc7',
name: 'Suere Cortez Jonathan Marino',
role: 'Profesor Primaria',
phone: '967279204',
email: 'jmarinosc2002@gmail.com',
image: '/images/teachers/Jonathan.png',
description: 'Docente',
specialty: 'Educ. Fisica'
},
{
id: 'doc8',
name: 'Lopez Concha Luis',
role: 'Profesor Primaria',
phone: '953373873',
email: 'conchita.65le@gmail.com',
image: '/images/teachers/Luis.png',
description: 'Docente',
specialty: 'E.P.T.'
},
{
id: 'doc9',
name: 'Leiva Medina Roy Edyn',
role: 'Profesor Primaria',
phone: '933665019',
email: 'royleivamedina@gmail.com',
image: '/images/teachers/Roy.png',
description: 'Docente',
specialty: 'E. Física'
},
{
id: 'doc10',
name: 'Tovar Ticse, Rudy Vicente',
role: 'Profesor Primaria',
phone: '988520106',
email: 'rudyvicentet@gmail.com',
image: '/images/teachers/Rudy.png',
description: 'Docente',
specialty: 'DPCC'
},
{
id: 'doc11',
name: 'Parian Anglas Juan',
role: 'Profesor Primaria',
phone: '964645308',
email: 'cjparian777@gmail.com',
image: '/images/teachers/Juan.png',
description: 'Docente',
specialty: 'CT'
},
{
id: 'doc12',
name: 'Rojas Cardenas, Roland',
role: 'Profesor Primaria',
phone: '964487593',
email: 'rojitassyc@gmail.com',
image: '/images/teachers/Roland.png',
description: 'Docente',
specialty: 'Arte y Cultura'
},
{
id: 'doc13',
name: 'Javiez Loayza Flor',
role: 'Profesor Primaria',
phone: '950052861',
email: 'giuliana.javierloayza@gmail.com',
image: '/images/teachers/Flor.png',
description: 'Docente',
specialty: 'Ciencias Sociales'
},
{
id: 'doc14',
name: 'Rivera Hidalgo Pedro',
role: 'Profesor Primaria',
phone: '973534213',
email: 'pedroulisesriverahidalgo@gmail.com',
image: '/images/teachers/Pedro.png',
description: 'Docente',
specialty: 'Comunicación'
},
{
id: 'doc15',
name: 'Castro Castro Nestor',
role: 'Profesor Primaria',
phone: '975664661',
email: 'nestor.2024.mat@gmail.com',
image: '/images/teachers/Nestor.png',
description: 'Docente',
specialty: 'Matemática'
},
{
id: 'doc16',
name: 'Caña Cajahuanca Federico',
role: 'Profesor Primaria',
phone: '943026608',
email: 'fredy250465@gmail.com',
image: '/images/teachers/Federico.png',
description: 'Docente',
specialty: 'E. Religiosa'
},
{
id: 'doc17',
name: 'Inga Cristobal Angelica María',
role: 'Profesor Primaria',
phone: '938214043',
email: 'angelicamaria.jul@gmail.com',
image: '/images/teachers/Angelica.png',
description: 'Docente',
specialty: 'Comunicación'
},
{
id: 'doc18',
name: 'Vivar Luis Janpier Stuar',
role: 'Profesor Primaria',
phone: '910599206',
email: 'vivarluisjanpier9@gmail.com',
image: '/images/teachers/Janpier.png',
description: 'Docente',
specialty: 'DPCC'
},
{
id: 'doc19',
name: 'Huari Sanchez Yuseli Sadith',
role: 'Profesor Primaria',
phone: '963250296',
email: 'josely0522@gmail.com',
image: '/images/teachers/Yuseli.png',
description: 'Docente',
specialty: 'Inglés'
},

];

function TeacherCard({ teacher, onViewDetails }: {
  teacher: Teacher;
  onViewDetails: (teacher: Teacher) => void;
}) {
  const initials = teacher.name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('');

  return (
    <div className="bg-white border border-emerald-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex flex-col items-center text-center">
        <Avatar className="h-20 w-20 border-4 border-emerald-100 group-hover:border-emerald-300 transition-colors mb-4">
          <AvatarImage src={teacher.image} alt={teacher.name} />
          <AvatarFallback className="bg-emerald-100 text-emerald-600 text-xl font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>

        <h3 className="font-bold text-gray-900 text-base mb-1">{teacher.name}</h3>
        <p className="text-emerald-500 font-medium text-sm mb-3">{teacher.role}</p>

        <div className="w-full space-y-2 text-sm mb-4">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Phone className="h-4 w-4 text-emerald-500" />
            <span>{teacher.phone}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600 truncate px-2">
            <Mail className="h-4 w-4 text-emerald-500 flex-shrink-0" />
            <span className="truncate">{teacher.email}</span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full border-emerald-200 text-emerald-600 hover:bg-emerald-50"
          onClick={() => onViewDetails(teacher)}
        >
          Ver más detalles
        </Button>
      </div>
    </div>
  );
}

function DirectorCard({ teacher, onViewDetails }: {
  teacher: Teacher;
  onViewDetails: (teacher: Teacher) => void;
}) {
  const initials = teacher.name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('');

  return (
    <div className="bg-white border-2 border-emerald-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
      <div className="flex flex-col items-center text-center">
        <Avatar className="h-32 w-32 border-4 border-emerald-200 group-hover:border-emerald-400 transition-colors mb-6">
          <AvatarImage src={teacher.image} alt={teacher.name} />
          <AvatarFallback className="bg-emerald-100 text-emerald-600 text-3xl font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>

        <h3 className="font-bold text-gray-900 text-xl mb-1">{teacher.name}</h3>
        <p className="text-emerald-500 font-semibold mb-4">{teacher.role}</p>

        <p className="text-gray-600 text-sm mb-6 max-w-md">{teacher.description}</p>

        <div className="w-full space-y-3 text-sm mb-6">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Phone className="h-5 w-5 text-emerald-500" />
            <span>{teacher.phone}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Mail className="h-5 w-5 text-emerald-500" />
            <span>{teacher.email}</span>
          </div>
        </div>

        <Button
          className="bg-emerald-500 hover:bg-emerald-600 text-white"
          onClick={() => onViewDetails(teacher)}
        >
          Ver perfil completo
        </Button>
      </div>
    </div>
  );
}

function TeacherDetailModal({ teacher, open, onOpenChange }: {
  teacher: Teacher | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  if (!teacher) return null;

  const initials = teacher.name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-900">
            Perfil del Docente
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center text-center py-4">
          <Avatar className="h-24 w-24 border-4 border-emerald-200 mb-4">
            <AvatarImage src={teacher.image} alt={teacher.name} />
            <AvatarFallback className="bg-emerald-100 text-emerald-600 text-2xl font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>

          <h3 className="font-bold text-gray-900 text-xl mb-1">{teacher.name}</h3>
          <p className="text-emerald-500 font-semibold mb-1">{teacher.role}</p>
          <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            {teacher.specialty}
          </span>

          <div className="w-full mt-4 space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Descripción</h4>
              <p className="text-gray-600 text-sm">{teacher.description}</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Información de Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="h-5 w-5 text-emerald-500" />
                  <span>{teacher.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="h-5 w-5 text-emerald-500" />
                  <span>{teacher.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function ProfesoradoPage() {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  const handleViewDetails = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setDetailModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[450px] flex items-center bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <p className="text-emerald-400 font-semibold mb-2 tracking-wider text-sm">NUESTRO EQUIPO</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Profeso<span className="text-emerald-400">rado</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Conoce a los profesionales dedicados a la formación integral de nuestros estudiantes.
            </p>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-emerald-500 font-semibold mb-2 tracking-wider text-sm">DIRECCIÓN</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Nuestro <span className="text-amber-500">Director</span>
            </h2>
          </div>

          <div className="max-w-md mx-auto">
            <DirectorCard
              teacher={director}
              onViewDetails={handleViewDetails}
            />
          </div>
        </div>
      </section>

      {/* Equipo Directivo */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-emerald-500 font-semibold mb-2 tracking-wider text-sm">LIDERAZGO</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Equipo <span className="text-amber-500">Directivo</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {equipoDirectivo.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                teacher={teacher}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Docentes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-emerald-500 font-semibold mb-2 tracking-wider text-sm">EQUIPO DOCENTE</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Nuestros <span className="text-amber-500">Docentes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {docentes.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                teacher={teacher}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Detalles */}
      <TeacherDetailModal
        teacher={selectedTeacher}
        open={detailModalOpen}
        onOpenChange={setDetailModalOpen}
      />
    </div>
  );
}
