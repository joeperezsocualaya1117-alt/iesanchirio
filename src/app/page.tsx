'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HomePage from '@/components/pages/HomePage';
import AcademicoPage from '@/components/pages/AcademicoPage';
import ProfesoradoPage from '@/components/pages/ProfesoradoPage';
import AdmisionPage from '@/components/pages/AdmisionPage';
import NoticiasPage from '@/components/pages/NoticiasPage';
import InformacionPage from '@/components/pages/InformacionPage';
import ApafaPage from '@/components/pages/ApafaPage';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('inicio');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <HomePage onNavigate={handleNavigate} />;
      case 'academico':
        return <AcademicoPage />;
      case 'profesorado':
        return <ProfesoradoPage />;
      case 'admision':
        return <AdmisionPage />;
      case 'apafa':
        return <ApafaPage />;
      case 'noticias':
        return <NoticiasPage />;
      case 'informacion':
        return <InformacionPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
