// Datos del negocio usados en el sitio y en los datos estructurados (JSON-LD) para Google.
export const BUSINESS = {
  name: 'Cosmovision',
  url: 'https://cosmovisiongt.com',
  email: 'info@cosmovisiongt.com',
  phone: '+502 2375-2111',
  whatsapp: {
    peronia: '50249177756',
    sacatepequez: '50230692865',
  },
  // ID de medición de Google Analytics 4
  googleAnalyticsId: 'G-3ZP64LMM4N',
  // TODO: reemplazar por la URL real de la página de Facebook
  facebook: '',
  locations: [
    {
      name: 'Cosmovision Villa Nueva (Ciudad Peronia)',
      streetAddress: 'Boulevard principal Terrazas, Peronia',
      addressLocality: 'Villa Nueva',
      addressRegion: 'Guatemala',
      telephone: '+502 4917-7756',
    },
    {
      name: 'Cosmovision San Lucas',
      streetAddress: 'Local 107, Centro Comercial San Lucas',
      addressLocality: 'San Lucas Sacatepéquez',
      addressRegion: 'Sacatepéquez',
      telephone: '+502 3069-2865',
    },
  ],
  areaServed: ['Villa Nueva', 'Ciudad Peronia', 'Sacatepéquez'],
};

export const whatsappLink = (message: string, number = BUSINESS.whatsapp.sacatepequez) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
