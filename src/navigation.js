import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Cable TV',
      href: '/cable',
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
        { text: 'Cable', href: '/cable' },
        { text: 'Internet', href: '/pricing' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { text: 'Quienes Somos', href: '/about' },
        { text: 'Terminos y Condiciones', href: '/terms'},
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'PBX: 2375-2111' },
        { text: 'Ciudad Peronia: 4917-7756' },
        { text: 'Sacatepéquez: 3069-2865' },
        { text: 'info@cosmovisiongt.com', href: 'mailto:info@cosmovisiongt.com', target: "_blank" },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terminos y Condiciones', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  
};
