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
      href: '/planes',
    },
    {
      text: 'Quiénes Somos',
      href: '/quienes-somos',
    },
    {
      text: 'Contacto',
      href: '/contacto',
    }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Internet + TV', href: '/planes' },
        { text: 'Internet', href: '/planes' },
        { text: 'Preguntas frecuentes', href: '/planes#preguntas-frecuentes' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { text: 'Quiénes Somos', href: '/quienes-somos' },
        { text: 'Términos y Condiciones', href: '/terminos-y-condiciones' },
        { text: 'Política de Privacidad', href: '/politica-de-privacidad' },
        { text: 'Términos y Condiciones Sorteo Bono 14', href: getPermalink('/sorteo-bono-14') },

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
    { text: 'Términos y Condiciones', href: getPermalink('/terminos-y-condiciones') },
  ],
  socialLinks: BUSINESS.facebook
    ? [{ ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: BUSINESS.facebook, target: '_blank' }]
    : [],
  
};
