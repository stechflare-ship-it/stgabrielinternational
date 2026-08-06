import React from 'react';
import {
  siFacebook,
  siInstagram,
  siX,
  siYoutube,
  siTiktok,
} from 'simple-icons';

const ICON_NAME_MAP = {
  facebook: siFacebook,
  instagram: siInstagram,
  twitter: siX,
  x: siX,
  youtube: siYoutube,
  tiktok: siTiktok,
};

/**
 *  ICON COMPONENT FOR BRAND ICONS
 * 
 * Uses simple-icons for all brand icons (Facebook, Instagram, etc.)
 * 
 * USAGE:
 * <Icon name="facebook" />
 * <Icon name="instagram" />
 * <Icon name="twitter" />
 * <Icon name="youtube" />
 */
export const Icon = ({ 
  name, 
  size = 24, 
  color = 'currentColor', 
  className = '', 
  ...props 
}) => {
  const normalizedName = String(name ?? '').trim().toLowerCase();
  const iconData = ICON_NAME_MAP[normalizedName];

  if (!iconData) {
    console.warn(`Icon "${name}" not found in the site icon set`);
    return null;
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d={iconData.path} />
    </svg>
  );
};

export default Icon;