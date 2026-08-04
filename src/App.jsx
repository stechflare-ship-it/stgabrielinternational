import React, { Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';


const Home = lazy(()=> import('./pages/Home'));
const About = lazy(() => import('./pages/AboutUs'));
const Academics = lazy(() => import('./pages/Academics'));
const StudentLife = lazy(() => import('./pages/StudentLife'));
const Staff = lazy(() => import('./pages/Staff'));
const Gallery = lazy(() => import('./pages/Gallery'));
const News = lazy(() => import('./pages/NewsEvents'));
const Downloads = lazy(() => import('./pages/Downloads'));
const Contact = lazy(() => import('./pages/Contact'));


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
    
    // Send to analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: true,
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-4">😅</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We're sorry for the inconvenience. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }

}


//LOADING FALLBACK - shows while pages loading
function PageLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="relative">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-blue-900/20 border-t-blue-900 rounded-full animate-spin"></div>
        {/* School logo in center of spinner */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-blue-900">SG</span>
        </div>
      </div>
      <p className="mt-4 text-gray-600 text-sm animate-pulse">
        Loading...
      </p>
    </div>
  );
}



//PAGE VIEW Tracker - tracks page views for analytics

//SEO Component

// Page Components to wrap every component with SEO

// MAIN APP
function App(){
  return (
    <ErrorBoundary>
      <div className='min-h-screen bg-gray-50 flex flex-col'>
        <Navbar />

        {/* To add Page View Tracking */}

        {/* Main Content */}

        <main id="main-content" className="flex-grow" role="main">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element = {<About />}/>
              <Route path='/academics' element = {<Academics />}/>
              <Route path='/student-life' element = {<StudentLife />}/>
              <Route path='/staff' element = {<Staff />}/>
              <Route path='/gallery' element = {<Gallery />}/>
              <Route path='/news' element = {<News />}/>
              <Route path='/downloads' element = {<Downloads />}/>
              <Route path='/contact' element = {<Contact />}/>
            </Routes>
          </Suspense>

        </main>

      </div>
    </ErrorBoundary>
  )
}

export default App;