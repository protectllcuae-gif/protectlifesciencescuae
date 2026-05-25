export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '971567464623';
export const COMPANY_NAME = 'Protect life sciences FZE LLC';
export const SITE_NAME = 'Protect Life Sciences Pvt Ltd';
export const EMAIL_ADDRESS = 'Protectlifesci@gmail.com';
export const WEBSITE_URL = import.meta.env.VITE_WEBSITE_URL || 'https://protectlifesciences.in';
export const DEFAULT_OG_IMAGE = import.meta.env.VITE_DEFAULT_OG_IMAGE || `${WEBSITE_URL}/world-map.png`;
export const ADDRESS_TEXT = '1411 Rami garden Al falah street Airport road Abu Dhabi';

export const getWhatsAppUrl = (message = '') => {
  return `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
};

export const SOCIAL_LINKS = {
  linkedin: import.meta.env.VITE_LINKEDIN || '#',
  twitter: import.meta.env.VITE_TWITTER || '#',
  facebook: import.meta.env.VITE_FACEBOOK || '#'
};

export const getFormattedWhatsAppNumber = () => {
  const num = WHATSAPP_NUMBER;
  if (num.startsWith('971') && num.length === 12) {
    return `+971 ${num.substring(3, 5)} ${num.substring(5, 8)} ${num.substring(8)}`;
  }
  if (num.startsWith('+')) return num;
  return `+${num}`;
};

export const getWhatsAppTelLink = () => {
  return `tel:${WHATSAPP_NUMBER.replace(/\D/g, '')}`;
};
