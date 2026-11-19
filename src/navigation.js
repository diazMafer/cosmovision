import { getPermalink } from './utils/permalinks';
import { BUSINESS } from './data/business';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Planes',
      href: '/pricing',
    },
    {
      text: 'Quienes Somos',
      href: '/about',
    },
    {
      text: 'Contacto',
      href: '/contact',
    }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Internet + TV', href: '/pricing' },
        { text: 'Internet', href: '/pricing' },
        { text: 'Preguntas frecuentes', href: '/pricing#preguntas-frecuentes' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { text: 'Quienes Somos', href: '/about' },
        { text: 'Términos y Condiciones', href: '/terms' },
        { text: 'Política de Privacidad', href: '/privacy' },
        { text: 'Términos y Condiciones Sorteo Bono 14', href: getPermalink('/sorteobono14') },

      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'PBX: 2375-2111', href: 'tel:+50223752111' },
        { text: 'WhatsApp Ciudad Peronia: 4917-7756', href: 'https://wa.me/50249177756', target: '_blank' },
        { text: 'WhatsApp Sacatepéquez: 3069-2865', href: 'https://wa.me/50230692865', target: '_blank' },
        { text: 'info@cosmovisiongt.com', href: 'mailto:info@cosmovisiongt.com', target: "_blank" },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos y Condiciones', href: getPermalink('/terms') },
  ],
  socialLinks: BUSINESS.facebook
    ? [{ ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: BUSINESS.facebook, target: '_blank' }]
    : [],
  
};
