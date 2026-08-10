import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Chatbot } from './components/Chatbot';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { EYFSPage } from './pages/EYFSPage';
import { StudentLifePage } from './pages/StudentLifePage';
import { BoardingPage } from './pages/BoardingPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { FeesPage } from './pages/FeesPage';
import { GalleryPage } from './pages/GalleryPage';
import { NewsPage } from './pages/NewsPage';
import { BlogPage } from './pages/BlogPage';
import { StaffPage } from './pages/StaffPage';
import { DownloadsPage } from './pages/DownloadsPage';
import { ContactPage } from './pages/ContactPage';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen max-w-full overflow-x-hidden bg-[#F8F9FB] font-sans text-gray-900 antialiased selection:bg-[#C59B27] selection:text-[#0B1D33]">
        <Navbar />
        
        <main className="flex-grow">
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
            <Route path="/staff" element={<StaffPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp />
        <Chatbot />
      </div>
    </Router>
  );
}
