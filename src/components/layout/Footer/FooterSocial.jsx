import { memo } from "react";
import { Icon } from "../../Icons";
import { SOCIAL_MEDIA } from "../../../data/navigationData";


//mapping social platform icons
const SOCIAL_ICONS = {
  facebook: 'facebook',
  instagram: 'instagram',
  twitter: 'twitter',
  youtube: "youtube",
  tiktok: 'tiktok', 
};


//filter out empty social links
const getActiveSocials = ()=>{
    return Object.entries(SOCIAL_MEDIA)
        .filter(([_, url]) => url && url.trim().length > 0)
        .map(([key, url]) => ({
            name: key.charAt(0).toUpperCase() + key.slice(1),
            url,
            iconName: SOCIAL_ICONS[key.toLowerCase()],
        }))
        .filter(social => Boolean(social.iconName)); // Remove platforms without icons
};

export const FooterSocial = memo(function FooterSocial({
    onSocialClick,
    className=''
}){
    const socials = getActiveSocials();

    if (socials.length === 0) return null;

    return(
        <div className={`pt-2 ${className}`} >
            <span className="sr-only">Follow us on Social Media</span>

            <div className="flex flex-wrap gap-3">
                {socials.map((social)=>(
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer" // Security
                        onClick={() => onSocialClick?.(social.name)}
                        className="p-2.5 rounded-lg bg-slate-900 text-slate-300 hover:bg-amber-500 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors duration-200"
                        aria-label={`Follow us on ${social.name} (opens in new tab)`}
                    >
                        <Icon 
                            name={social.iconName} 
                            type="brand" 
                            size={20}
                            className="w-4 h-4" 
                            aria-hidden="true" 
                        />
                    </a>
                ))}
            </div>
        
        </div>
    );
});

FooterSocial.displayName = "FooterSocial"