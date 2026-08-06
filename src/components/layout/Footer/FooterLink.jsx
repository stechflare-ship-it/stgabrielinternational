import { ArrowUpRight } from "lucide-react";
import { memo } from "react";
import { Link as RouterLink } from "react-router-dom";

export const FooterLink = memo(function FooterLink({
    to,
    children,
    onClick,
    showArrow = true,
    className = '',
    ...props
}){
    return (
        <RouterLink
            to={to}
            onClick={onClick}
            className={`
                inline-flex items-center
                text-slate-400 hover:text-amber-400
                focus:outline-none focus:ring-1 focus:ring-amber-400
                rounded transition-colors group
                break-words whitespace-normal
                ${className}
            `}
            {...props}
        >
            <span>{children}</span>
            {showArrow && (
                <ArrowUpRight
                    className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-amber-500 ml-1"
                    aria-hidden="true"
                />
            )}
        </RouterLink>
    );
});

FooterLink.displayName='FooterLink';