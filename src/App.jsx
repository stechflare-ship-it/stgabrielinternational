import React, { lazy } from 'react';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/whatsapp/WhatsAppButton';
import ChatbotFallback from './components/chatbot/ChatbotFallback';

const Home = lazy(()=> import('./pages/Home'));
const About = lazy(() => import('./pages/About/About'));
const Academics = lazy(() => import('./pages/Academics'));
const StudentLife = lazy(() => import('./pages/StudentLife'));
const Staff = lazy(() => import('./pages/Staff'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));
const News = lazy(() => import('./pages/NewsEvents'));
const Downloads = lazy(() => import('./pages/Downloads'));
const Contact = lazy(() => import('./pages/Contact'));
const Admissions = lazy(() => import('./pages/Admissions'));
const FeesAndRequirements = lazy(() => import('./pages/FeesAndRequirements'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Boarding = lazy(() => import('./pages/Boarding'));

// Academics subpages
const EYFS = lazy(() => import('./pages/academics/EYFS'));
const Primary = lazy(() => import('./pages/academics/Primary'));
const LowerSecondary = lazy(() => import('./pages/academics/LowerSecondary'));
const IGCSE = lazy(() => import('./pages/academics/IGCSE'));
const ALevel = lazy(() => import('./pages/academics/ALevel'));

//ERROR BOUNDARY Catches errors in child components
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-4">😅</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h1>
            <p className="text-gray-600 mb-6">We're sorry for the inconvenience. Please try refreshing the page.</p>
            <button onClick={() => window.location.reload()} className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">Refresh Page</button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }

}

function PageLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-900/20 border-t-blue-900 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-blue-900">SG</span>
        </div>
      </div>
      <p className="mt-4 text-gray-600 text-sm animate-pulse">Loading...</p>
    </div>
  );
}

import { Route, Routes } from 'react-router-dom';

function App(){
  return (
    <ErrorBoundary>
      <div className='min-h-screen bg-gray-50 flex flex-col'>
        <Navbar />

        <WhatsAppButton />
        <ChatbotFallback />

        <main id="main-content" className="flex-grow" role="main">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/academics' element={<Academics />}/>
              <Route path='/academics/eyfs' element={<EYFS />}/>
              <Route path='/academics/primary' element={<Primary />}/>
              <Route path='/academics/lower-secondary' element={<LowerSecondary />}/>
              <Route path='/academics/igcse' element={<IGCSE />}/>
              <Route path='/academics/a-level' element={<ALevel />}/>
              <Route path='/student-life' element={<StudentLife />}/>
              <Route path='/boarding' element={<Boarding />}/>
              <Route path='/admissions' element={<Admissions />}/>
              <Route path='/fees-and-requirements' element={<FeesAndRequirements />}/>
              <Route path='/gallery/*' element={<Gallery />}/>
              <Route path='/news' element={<News />}/>
              <Route path='/blog' element={<Blog />}/>
              <Route path='/blog/:slug' element={<BlogPost />}/>
              <Route path='/downloads' element={<Downloads />}/>
              <Route path='/staff' element={<Staff />}/>
              <Route path='/contact' element={<Contact />}/>
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App;
