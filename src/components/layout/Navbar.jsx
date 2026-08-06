import React, { memo, useMemo, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS } from '../../data/navigationData';
import { useScrollHeader } from '../../hooks/userScrollHeader';
import { BrandLogo } from '../common/BrandLogo';


//Topbar rendering with contact imfo
const TopBar = memo(function Topbar(){
  const {phone, email, announcement} = SITE_CONFIG;

  return (
    <div 
      className="bg-blue-950 text-gray-300 text-xs py-2 px-4 hidden sm:block"
      aria-label="Contact information"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Left side: Phone and Email */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
          {/* Phone with Schema markup for SEO */}
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-1 hover:text-white transition-colors"
            aria-label={`Call us at ${phone}`}
          >
            {/* Phone icon */}
            <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" aria-hidden="true" />
            <span className="whitespace-nowrap">{phone}</span>
          </a>
          
          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-1 hover:text-white transition-colors"
            aria-label={`Email us at ${email}`}
          >
            <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" aria-hidden="true" />
            <span className="whitespace-nowrap">{email}</span>
          </a>
        </div>
        
        {/* Right side: Announcement */}
        <div 
          className="text-amber-400 font-medium animate-pulse text-center sm:text-left"
          aria-live="polite"
        >
          {announcement}
        </div>
      </div>
    </div>
  );
});

const Logo = memo(function Logo(){
  return <BrandLogo variant="navbar" showHope />;
});

//DESKTOP Navigation

const DesktopNav = memo(function DesktopNav({currentPath}){
  const renderLinks = useMemo(()=>{
    return NAV_LINKS.map((link)=>{

      //check if this link is the current page
      const isActive = currentPath === link.path;

      return (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive: active }) =>
            // Conditional classes based on active state
            `px-3 py-2 text-sm font-medium transition-colors rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-500
            ${active || isActive
              ? 'text-blue-900 font-bold bg-blue-50/80'  // Active styles
              : 'text-gray-600 hover:text-blue-900 hover:bg-gray-50'  // Inactive styles
            }`
          }
          aria-current={isActive ? 'page' : undefined}
          title={link.name}
        >
          {link.name}
        </NavLink>
      );
    });
  },[currentPath]); //only re-run if current page changes
  return (
    <nav 
      className="hidden lg:flex items-center space-x-1" 
      aria-label="Main navigation"
      role="navigation"
    >
      {renderLinks}
    </nav>
  );
});


//Mobile drawer
const MobileDrawer = memo(function MobileDrawer({ isOpen, onClose, currentPath }) {
  /**
   * SEO: Prevent search engines from indexing mobile menu
   * This prevents duplicate content issues
   */
  useEffect(() => {
    if (isOpen) {
      document.querySelector('#mobile-menu')?.setAttribute('data-robots', 'noindex');
    }
  }, [isOpen]);

  const renderLinks = useMemo(() => {
    return NAV_LINKS.map((link) => {
      const isActive = currentPath === link.path;
      
      return (
        <NavLink
          key={link.path}
          to={link.path}
          /**
           * onClick={onClose}: Close menu when clicking a link
           * This is important for UX on mobile
           */
          onClick={onClose}
          className={({ isActive: active }) =>
            `block px-4 py-3 text-base font-medium rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-left
            ${active || isActive
              ? 'text-blue-900 bg-blue-50 font-bold'
              : 'text-gray-700 hover:bg-gray-50'
            }`
          }
          aria-current={isActive ? 'page' : undefined}
        >
          {link.name}
        </NavLink>
      );
    });
  }, [currentPath, onClose]);

  // Don't render if not open
  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      className="lg:hidden bg-white border-b border-gray-200 overflow-hidden shadow-xl"
      role="dialog"
      aria-label="Mobile navigation menu"
      aria-modal="true"
      data-robots="noindex"
    >
      <div className="px-4 py-2 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
        {/* Navigation Links */}
        {renderLinks}
        
        {/* Contact Info in Mobile Menu */}
        <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-900 px-4 py-2 rounded-lg hover:bg-gray-50"
          >
            <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            <span>{SITE_CONFIG.phone}</span>
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-900 px-4 py-2 rounded-lg hover:bg-gray-50"
          >
            <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            <span>{SITE_CONFIG.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
});

//Main component Navbar
function Navbar(){
  //useLocatio from React Router hook for current URL
  const location = useLocation();
  const currentPath = location.pathname;

  //custom hooks 

  const {
    isScrolled,      // Should we show shadow?
    isMobileOpen,    // Is mobile menu open?
    mobileMenuRef,   // Ref for the menu
    menuButtonRef,   // Ref for the button
    toggleMobile,    // Function to toggle
    closeMobile,     // Function to close
  } = useScrollHeader({
    desktopBreakpoint: 1024, // Show desktop at 1024px+
  });

  /**
   * useMemo: Memoize the header classes
   * Only recalculate when isScrolled changes
   */
  const headerClasses = useMemo(() => {
    return `
      sticky top-0 z-50 
      bg-white 
      border-b border-gray-100 
      transition-shadow duration-300
      ${isScrolled ? 'shadow-lg' : 'shadow-sm'}
    `;
  }, [isScrolled]);


  return (
    <>
      {/**
       * ♿ SKIP NAVIGATION LINK
       * 
       * This is important for accessibility.
       * Keyboard users can skip the navigation and go to content.
       * 
       * It's hidden by default but visible when focused.
       */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[100] focus:bg-white focus:p-4 focus:text-blue-900 focus:font-bold"
      >
        Skip to main content
      </a>

      <header 
        ref={mobileMenuRef}  // Attach the ref to the header
        className={headerClasses}
        role="banner"  // Semantic HTML for screen readers
      >
        {/* Top Bar - Contact Information */}
        <TopBar />

        {/* Main Navigation Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Left: Logo */}
            <Logo />
            
            {/* Center (Desktop): Navigation Links */}
            <DesktopNav currentPath={currentPath} />

            {/* Right (Mobile): Menu Button */}
            <button
              ref={menuButtonRef}  // Attach ref for outside click detection
              onClick={toggleMobile}
              className="lg:hidden p-2 text-gray-600 rounded-lg hover:text-blue-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-shrink-0 ml-2"
              aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              {/* Show X when open, Menu when closed */}
              {isMobileOpen ? (
                <X className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer - Renders conditionally */}
        <MobileDrawer 
          isOpen={isMobileOpen} 
          onClose={closeMobile} 
          currentPath={currentPath} 
        />
      </header>

      {/* Anchor for skip navigation link */}
      <div id="main-content" />
    </>
  );



};


export default memo(Navbar);