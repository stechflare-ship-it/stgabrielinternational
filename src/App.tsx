import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Chatbot } from './components/Chatbot';
import { BackToTop } from './components/BackToTop';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';

const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const AcademicsPage = lazy(() => import('./pages/AcademicsPage').then(m => ({ default: m.AcademicsPage })));
const EYFSPage = lazy(() => import('./pages/EYFSPage').then(m => ({ default: m.EYFSPage })));
const StudentLifePage = lazy(() => import('./pages/StudentLifePage').then(m => ({ default: m.StudentLifePage })));
const BoardingPage = lazy(() => import('./pages/BoardingPage').then(m => ({ default: m.BoardingPage })));
const AdmissionsPage = lazy(() => import('./pages/AdmissionsPage').then(m => ({ default: m.AdmissionsPage })));
const FeesPage = lazy(() => import('./pages/FeesPage').then(m => ({ default: m.FeesPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then(m => ({ default: m.GalleryPage })));
const NewsPage = lazy(() => import('./pages/NewsPage').then(m => ({ default: m.NewsPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(m => ({ default: m.BlogPage })));
const DownloadsPage = lazy(() => import('./pages/DownloadsPage').then(m => ({ default: m.DownloadsPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

const PageLoader = () => (
  <div className="w-full min-h-[60vh] flex items-center justify-center bg-[#F8F9FB]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-4 border-[#5CE1E6] border-t-[#0A192F] rounded-full animate-spin"></div>
      <p className="text-xs font-bold text-[#0A192F] uppercase tracking-wider">Loading St. Gabriel...</p>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen max-w-full overflow-x-hidden bg-[#F8F9FB] font-sans text-gray-900 antialiased selection:bg-[#C59B27] selection:text-[#0B1D33]">
        <Navbar />
        
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/academics" element={<AcademicsPage />} />
              <Route path="/academics/eyfs" element={<EYFSPage />} />
              <Route path="/academics/:stageId" element={<EYFSPage />} />
              <Route path="/student-life" element={<StudentLifePage />} />
              <Route path="/boarding" element={<BoardingPage />} />
              <Route path="/admissions" element={<AdmissionsPage />} />
              <Route path="/fees-and-requirements" element={<FeesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/staff" element={<Navigate to="/about" replace />} />
              <Route path="/downloads" element={<DownloadsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <FloatingWhatsApp />
        <Chatbot />
        <BackToTop />
      </div>
    </Router>
  );
}
