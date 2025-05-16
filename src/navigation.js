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
        { text: '2375-2111' },
        { text: '4917-7756' },
        { text: 'info@cosmovisiongt.com', href: 'mailto:info@cosmovisiongt.com', target: "_blank" },
      ],
    },
    {
      title: 'Agencias',
      links: [
        { text: 'Ciudad Peronia: 5a Avenida 6-58 Boulevard Principal Las Terrazas' },      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terminos y Condiciones', href: getPermalink('/terms') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  
};
