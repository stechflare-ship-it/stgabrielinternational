import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export function useScrollHeader({
  scrollThreshold =20,//shows shadow after 20px scroll
  desktopBreakpoint = 1024,//show desktop nav at 1024px
  enableOutsideClick = true,//close on outside click
  enableEscapeKey = true, //close on escape key
  throttleMs = 50, //wait for 50ms between scroll updates
}={}) {

  //State management 
  //useSate to check if phone scrolled and mobileMenu is open to update the  state

  const [state, setState] = useState(()=>({
    isScrolled: false,
    isMobileOpen: false,
  }));


  //references to the DOM elements
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const scrollTimeoutRef= useRef(null);//scroll timer
  const animationFrameRef = useRef(null);
  const mountedRef = useRef(null);//to check if component is mounted

  //memoization -  for remembering values between renders . only recalculate when dependencies change.

  const breakPoint = useMemo(()=> desktopBreakpoint, [desktopBreakpoint]);
  const threshold = useMemo(()=>scrollThreshold, [scrollThreshold]);


  //cleanup function - runs when component unmounts
  const cleanup = useCallback(()=>{
    //mark as unmounted
    mountedRef.current= false;

    //cancle animation frame
    if (animationFrameRef.current){
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current =  null;
    }

    //clear timeout
    if (scrollTimeoutRef.current){
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = null;
    }

    //restore body styles (removing scroll lock)
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top ='';
  },[]);

  //scroll handler 

  useEffect(()=>{
    let ticking=false;

    //handling scroll
    const handleScroll=() =>{
      if (!mountedRef.current)return;

      //to run only if not scheduled
      if (!ticking){
        //schedule with request animationFrame(next screen refresh)
        animationFrameRef.current = requestAnimationFrame(()=> {
          try {
            const currentScrolly = window.scrollY;
            
            //check if threshold is passed
            const shouldScrolled = currentSociety > threshold;

            //only update state if value changed- to prevent unnecessary re-renders
            setState(prev => {
              if (prev.isScrolled === shouldScrolled)return prev;
              return {...prev, isScrolled: shouldScrolled};
            });
          } catch (error) {
            console.warn('Scroll handler error:',error);
          }
          ticking =false;
        });

        ticking =true;
      }
    };

    
    //Throtted scroll bar to limit how often function ruuns
    const throttedScroll = () =>{

      if (scrollTimeoutRef.current)return;

      //setting timeouut to run after throttleMs
      scrollTimeoutRef.current = setTimeout(() => {

        handleScroll();
        scrollTimeoutRef.current =null;

      },throttleMs);

    };

    try {
      
      window.addEventListener('scroll',throttedScroll,{passive :true});

    } catch (error) {
      //fallback for older browser
      window.addEventListener('scroll',throttedScroll);
    };

    //cleaning up to remove event listener on unmount
    return()=>{

      if (scrollTimeoutRef.current){
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current=null;
      };

      if(animationFrameRef.current){
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      window.removeEventListener('scroll',throttedScroll);
    };

    
  },[threshold,throttleMs]);


  //Auto close on resize
  useEffect(() => {
    // Only run if menu is open
    if (!state.isMobileOpen) return;

    let resizeTimeout = null;

    const handleResize = () => {
      // Debounce: Don't run too often
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }

      resizeTimeout = setTimeout(() => {
        try {
          // If screen is desktop size, close menu
          if (window.innerWidth >= breakPoint) {
            setState(prev => {
              if (!prev.isMobileOpen) return prev;
              return { ...prev, isMobileOpen: false };
            });
          }
        } catch (error) {
          console.warn('Resize handler error:', error);
        }
        resizeTimeout = null;
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
        resizeTimeout = null;
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [state.isMobileOpen, breakPoint]);


  //BODY SCROLL LOCK - WHEN MOBILE MENU IS ON PREVENT SCROLLING

  useEffect(() => {
    // If menu is closed, restore body styles
    if (!state.isMobileOpen) {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      return;
    }

    try {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Lock the body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
    } catch (error) {
      // Fallback for older browsers
      document.body.style.overflow = 'hidden';
    }

    // Cleanup: Restore body on unmount or close
    return () => {
      try {
        const scrollY = parseInt(document.body.style.top || '0') * -1;
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        
        // Restore scroll position
        if (!isNaN(scrollY) && scrollY > 0) {
          window.scrollTo(0, scrollY);
        }
      } catch (error) {
        // Fallback
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
      }
    };
  }, [state.isMobileOpen]);


  //click outside handler- if user clicks outside the menu, close it
  useEffect(() => {
    // Only run if enabled and menu is open
    if (!enableOutsideClick || !state.isMobileOpen) return;

    const handleClickOutside = (event) => {
      try {
        const target = event.target;
        if (!target) return;

        // Check if click is inside the menu or on the button
        const isMobileMenu = mobileMenuRef.current?.contains(target);
        const isMenuButton = menuButtonRef.current?.contains(target);

        // If click is outside both, close the menu
        if (!isMobileMenu && !isMenuButton) {
          setState(prev => {
            if (!prev.isMobileOpen) return prev;
            return { ...prev, isMobileOpen: false };
          });
        }
      } catch (error) {
        // Don't crash on click errors
        console.warn('Click outside handler error:', error);
      }
    };

    // Listen for both mouse and touch events
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [state.isMobileOpen, enableOutsideClick]);

  //ESCAPE KEY HANDLER - if user click esc, close the menu

  useEffect(() => {
    if (!enableEscapeKey || !state.isMobileOpen) return;

    const handleEscape = (event) => {
      try {
        // Check for Escape key
        if (event.key === 'Escape' || event.key === 'Esc') {
          event.preventDefault();
          
          // Close the menu
          setState(prev => {
            if (!prev.isMobileOpen) return prev;
            return { ...prev, isMobileOpen: false };
          });

          // Return focus to the menu button
          setTimeout(() => {
            menuButtonRef.current?.focus();
          }, 50);
        }
      } catch (error) {
        console.warn('Escape handler error:', error);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [state.isMobileOpen, enableEscapeKey]);


  //focus management - when menu opens, focus the first interactive element
  useEffect(() => {
    if (!state.isMobileOpen) return;

    // Wait a moment for the animation to complete
    const focusTimer = setTimeout(() => {
      try {
        // Find first focusable element in the menu
        const firstFocusable = mobileMenuRef.current?.querySelector(
          'a[href], button:not([disabled]), input, select, textarea'
        );
        
        // Focus it if it exists
        if (firstFocusable && typeof firstFocusable.focus === 'function') {
          firstFocusable.focus({ preventScroll: true });
        }
      } catch (error) {
        console.warn('Focus management error:', error);
      }
    }, 100);

    return () => clearTimeout(focusTimer);
  }, [state.isMobileOpen]);

  //cleanup on mount
  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  //Memoized callbacks - useCallback remembers functions between renders to prevent re-renders

  const toggleMobile = useCallback(() => {
    setState(prev => ({
      ...prev,
      isMobileOpen: !prev.isMobileOpen,
    }));
  }, []);

  const closeMobile = useCallback(() => {
    setState(prev => {
      if (!prev.isMobileOpen) return prev;
      return { ...prev, isMobileOpen: false };
    });
    
    // Return focus to button
    setTimeout(() => {
      menuButtonRef.current?.focus();
    }, 100);
  }, []);

  const openMobile = useCallback(() => {
    setState(prev => {
      if (prev.isMobileOpen) return prev;
      return { ...prev, isMobileOpen: true };
    });
  }, []);


  //retuns Api - which other components will use
  //memo have been used to prevent the objects being recreated if none of its dependencies changes
  return useMemo(() => ({
    // State
    isScrolled: state.isScrolled,
    isMobileOpen: state.isMobileOpen,
    
    // Refs
    mobileMenuRef,
    menuButtonRef,
    
    // Actions
    toggleMobile,
    closeMobile,
    openMobile,
    
    // Derived
    isDesktop: typeof window !== 'undefined' && window.innerWidth >= breakPoint,
  }), [
    state.isScrolled,
    state.isMobileOpen,
    toggleMobile,
    closeMobile,
    openMobile,
    breakPoint,
  ]);
};
