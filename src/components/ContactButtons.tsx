import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from './Button';
import { SCHOOL_INFO } from '../data/schoolData';

interface ContactButtonsProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLabels?: boolean;
}

export const ContactButtons: React.FC<ContactButtonsProps> = ({
  size = 'md',
  className = '',
}) => {
  const whatsappUrl = `https://wa.me/${SCHOOL_INFO.contacts.whatsappPhoneRaw}?text=${SCHOOL_INFO.whatsappPrefillMessage}`;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Button
        href={`tel:${SCHOOL_INFO.contacts.mainPhoneRaw}`}
        variant="phone"
        size={size}
        icon={<Phone className="w-4 h-4" />}
      >
        Call Us: {SCHOOL_INFO.contacts.mainPhone}
      </Button>

      <Button
        href={whatsappUrl}
        variant="whatsapp"
        size={size}
        external
        icon={<MessageCircle className="w-4 h-4" />}
      >
        WhatsApp Admissions
      </Button>
    </div>
  );
};
