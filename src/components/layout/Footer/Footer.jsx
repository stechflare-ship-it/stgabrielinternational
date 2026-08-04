import React, { memo, useMemo } from "react";
import { NAV_LINKS, SITE_CONFIG } from "../../../data/navigationData";
import { Clock, GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { FooterSocial } from "./FooterSocial";
import { FooterLink } from "./FooterLink";
import { useFooter } from "../../../hooks/useFooter";




const Footer = memo (function Footer(){
    // hook for logic (seperated UI)
    const {trackClick, getCurrentYear} = useFooter();

    //Memoized values
    const currentYear = useMemo(()=>getCurrentYear(),[getCurrentYear]);


    const quickLinks = useMemo(()=>NAV_LINKS.slice(0,6),[]);

    const resourceLinks = useMemo(() => [
        { name: "Student Life & Clubs", path: "/student-life" },
        { name: "Download Forms & Handbooks", path: "/downloads" },
        { name: "Admissions & Inquiries", path: "/contact" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
    ], []);

    const bottomLinks = useMemo(() => [
        { name: "Admissions Desk", path: "/contact" },
        { name: "School Circulars", path: "/downloads" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
    ], []);


    //track clicks analysis
    const handleLinkClick = (linkName) => {
        trackClick(linkName, 'navigation');
    };


    const handleSocialClick = (socialName) => {
        trackClick(socialName, 'social');
    };

    return(
        <footer
            className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-8 font-sans antialiased"
            aria-labelledby="footer-heading"
            role="contentinfo"
        >
            {/* SEO: Screen reader heading */}
            <h2 id="footer-heading" className="sr-only">
                Footer Information and Links - {SITE_CONFIG.name}
            </h2>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-16">
                    {/*Brand and mission */}
                    <div className="space-y-4">
                        <RouterLink
                            to="/"
                            className="inline-flex flex-col items-start gap-3 sm:flex-row sm:items-center group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1"
                            aria-label={`${SITE_CONFIG.name} - Homepage`}
                        >
                            <div className="p-2.5 bg-blue-900 text-amber-400 rounded-xl shadow-md group-hover:bg-blue-800 transition-colors">
                                <GraduationCap className="w-7 h-7" aria-hidden="true"/>

                            </div>

                            <div className="flex flex-col min-w-0">
                                <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors break-words">
                                    {SITE_CONFIG.name}

                                </span>

                                <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-amber-500 uppercase break-words">
                                    {SITE_CONFIG.subName}

                                </span>
                            </div>

                        </RouterLink>

                        {/*Description with semantic paragraph with SEO*/}
                        <p className="text-sm text-slate-400 leading-relaxed break-words">
                            St. Gabriel Group of Schools, located in Nakuru, is committed to nurturing academically competent, morally upright, and globally competitive learners.
                        </p>
                        {/*School Motto*/}
                        <p className="text-xs font-semibold text-amber-400 italic">
                            Motto:  "Hope to world."

                        </p>

                        {/*Social media from navigationData */}

                        <FooterSocial onSocialClick={handleSocialClick} />

                    </div>

                    {/*Quick Navigation Links */}
                    <nav aria-label="Quick Navigation" className="min-w-0">
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
                            Quick Navigation
                        </h3>

                        <ul className="space-y-2.5 text-sm">
                            {quickLinks.map((link)=>(
                                <li key={link.path}>
                                    <FooterLink
                                        to={link.path}
                                        onClick = {()=> handleLinkClick(link.name)}>
                                            {link.name}
                                        </FooterLink>
                                </li>
                            ))}

                        </ul>

                    </nav>

                    {/*Resources & Legal */}

                    <nav aria-label="Resources and Legal Links" className="min-w-0">
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
                            Resources & Legal
                        </h3>
                        <ul className="space-y-2.5 text-sm">
                        {resourceLinks.map((link) => (
                            <li key={link.path}>
                                <FooterLink
                                    to={link.path}
                                    onClick={() => handleLinkClick(link.name)}
                                >
                                    {link.name}
                                </FooterLink>
                            </li>
                        ))}
                        </ul>
                    </nav>

                    {/*Contact Campus */}

                    <div className="min-w-0">
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
                        Contact Campus
                        </h3>
                       
                        <address className="not-italic space-y-3.5 text-sm text-slate-400">
                            {/* SEO: Address with Schema */}
                            <div itemScope itemType="https://schema.org/PostalAddress">
                                <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                                <span>
                                    <span itemProp="streetAddress">St. Gabriel Campus Way</span><br />
                                    <span itemProp="addressLocality">Education District</span><br />
                                    <span itemProp="addressCountry">Lanet,Nakuru, Kenya</span>
                                </span>
                                </div>
                            </div>

                            {/* REUSES SITE_CONFIG.phone */}
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" aria-hidden="true" />
                                <a
                                    href={`tel:${SITE_CONFIG.phone}`} 
                                    className="hover:text-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 rounded transition-colors"
                                    aria-label={`Call us at ${SITE_CONFIG.phone}`}
                                    itemProp="telephone"
                                >
                                {SITE_CONFIG.phone} 
                                </a>
                            </div>

                            {/* REUSES SITE_CONFIG.email */}
                            <div className="flex items-center space-x-3">
                                
                                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" aria-hidden="true" />
                                <a
                                    href={`mailto:${SITE_CONFIG.email}`} 
                                    className="hover:text-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 rounded transition-colors"
                                    aria-label={`Email us at ${SITE_CONFIG.email}`}
                                    itemProp="email"
                                >
                                {SITE_CONFIG.email} 
                                </a>
                            </div>

                            {/* Hours */}
                            <div className="flex items-center space-x-3 pt-1 border-t border-slate-900">
                                <Clock className="w-5 h-5 text-amber-500 flex-shrink-0" aria-hidden="true" />
                                <span className="text-xs text-slate-400">Monday - Friday: 8:00 AM – 4:30 PM <br/> Saturday: 8:30 AM – 1:00 PM</span>
                            </div>

                            {/* REUSES SITE_CONFIG.announcement */}
                            {SITE_CONFIG.announcement && (
                                <div className="flex items-center space-x-3 pt-1 text-xs text-amber-400">
                                    <span className="w-5 h-5 flex items-center justify-center text-amber-500">🎯</span>
                                    <span>{SITE_CONFIG.announcement}</span>
                                </div>
                            )}
                        </address>
                    </div>
                   


                </div>

                {/*Copyright & LegalLinks */}
                <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
                <p>
                    © {currentYear} {SITE_CONFIG.name} {SITE_CONFIG.subName}. All rights reserved.
                </p>
                <div className="flex flex-wrap items-center gap-3 justify-center">
                    {bottomLinks.map((link, index) => (
                    
                    <React.Fragment key={link.path}>
                        <FooterLink
                        to={link.path}
                        onClick={() => handleLinkClick(link.name)}
                        showArrow={false}
                        className="hover:text-slate-400"
                        >
                        {link.name}
                        </FooterLink>
                        {index < bottomLinks.length - 1 && <span>•</span>}
                    </React.Fragment>
                    ))}
                </div>
                </div>

            </div>


        </footer>
    );

});

Footer.displayName = 'Footer';

export default Footer;