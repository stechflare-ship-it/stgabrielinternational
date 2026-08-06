import { useCallback, useEffect, useRef, useState } from "react";





export function useFooter(){

    const [isSubscribed, setIsSubscribed] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const mountedRef = useRef(true);

    //cleanup on unmount
    useEffect(() =>{
        mountedRef.current= true;
        return ()=>{
            mountedRef.current=false;
        };
    },[]);


    //memoized handlers
    const handleSubscribe = useCallback(async (e) =>{
        e.preventDefault();

        if (!mountedRef.current)return;

        //validate email
        const normalizedEmail = email.trim();

        if (!normalizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)){
            setError("Please enter a valid email address");
            return;
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            if (mountedRef.current) {
                setIsSubscribed(true);
                setEmail('');
                setError(null);
                
                // Analytics tracking
                if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'newsletter_subscribe', {
                        event_category: 'Footer',
                    });
                }
            }
        } catch (error) {
            if (mountedRef.current){
                setError('Something went wrong. Please try again.');

            };
        }


    },[email]);

    //tracking footer interactions
    const trackClick = useCallback((linkName, linkType) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'footer_interaction', {
                event_category: 'Footer',
                event_label: linkName,
                link_type: linkType,
        });
        }
    }, []);


    //get cuurent year 
    const getCurrentYear = useCallback(() => new Date().getFullYear(), []);

    return {
        email,
        setEmail,
        error,
        setError,
        isSubscribed,
        handleSubscribe,
        trackClick,
        getCurrentYear,
    };


};