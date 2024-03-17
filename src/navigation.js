import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Planes',
      links: [
        {
          text: 'Ciudad Peronia',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Milpas Altas',
          href: getPermalink('/pricing2'),
        },
        
      ],
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
  actions: [{ text: 'Contratar', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Cable', href: '#' },
        { text: 'Internet', href: '/pricing' },
        { text: 'Quienes Somos', href: '/about' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { text: 'Quienes Somos', href: '/about' },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: '2375-2111', href: '#' },
        { text: '4958-5443', href: '#' },
        { text: 'info@cosmovisiongt.com', href: '#' },
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
