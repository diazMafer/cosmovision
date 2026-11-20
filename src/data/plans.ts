// Planes y preguntas frecuentes. Se usan en el home y en /planes.

export interface Plan {
  label: string;
  name: string;
  megas: number;
  price: number;
  description: string;
  items: string[];
  popular?: boolean;
}

export const PLANES_INTERNET: Plan[] = [
  {
    label: 'Para empezar',
    name: 'Básico',
    megas: 80,
    price: 180,
    description: 'Redes sociales, clases en línea y series para una o dos personas.',
    items: ['Instalación gratis', 'Sin contrato', 'Router incluido'],
  },
  {
    label: 'Para la familia',
    name: 'Familiar',
    megas: 125,
    price: 230,
    description: 'Teletrabajo, clases y streaming al mismo tiempo, sin pelear por el WiFi.',
    items: ['Instalación gratis', 'Sin contrato', 'Ideal para varios dispositivos'],
    popular: true,
  },
  {
    label: 'Para el gamer',
    name: 'Avanzado',
    megas: 200,
    price: 280,
    description: 'Juegos en línea, descargas pesadas y muchas pantallas conectadas.',
    items: ['Instalación gratis', 'Sin contrato', 'La mayor velocidad'],
  },
];

export const PLANES_TV: Plan[] = [
  {
    label: 'Para empezar',
    name: 'Básico + TV',
    megas: 80,
    price: 199,
    description: 'Internet para el día a día y TV por cable para toda la casa.',
    items: ['+90 canales', 'Hasta 3 televisores', 'Instalación gratis', 'Sin contrato'],
  },
  {
    label: 'Para la familia',
    name: 'Familiar + TV',
    megas: 125,
    price: 249,
    description: 'Todos conectados y la novela en la tele. Todos contentos.',
    items: ['+90 canales', 'Hasta 3 televisores', 'Instalación gratis', 'Sin contrato'],
    popular: true,
  },
  {
    label: 'Para el gamer',
    name: 'Gamer + TV',
    megas: 200,
    price: 299,
    description: 'Velocidad para jugar y tele para el resto de la familia.',
    items: ['+90 canales', 'Hasta 3 televisores', 'Instalación gratis', 'Sin contrato'],
  },
];

export const PRECIO_SOLO_TV = 100;

export const FAQS = [
  { q: '¿Cuándo pago mi servicio?', a: 'Entre el 1 y el 5 de cada mes.' },
  {
    q: '¿Qué pasa si pago después del 5?',
    a: 'Tu servicio se suspende el día 10 (o, por motivos operativos, a más tardar el 20). No cobramos mora, pero el servicio vuelve hasta que se paga el saldo pendiente completo.',
  },
  {
    q: '¿Cómo pido reconexión si me cortaron?',
    a: 'Cancela el saldo vencido más la tarifa de reconexión. El restablecimiento toma de 3 a 5 días hábiles tras confirmar el pago.',
  },
  {
    q: '¿Qué pasa con el equipo si cancelo el servicio?',
    a: 'Debes devolver la ONU/router y los cables en buen estado. Si no lo haces, se factura su valor comercial.',
  },
  {
    q: '¿Puedo cambiar de plan?',
    a: 'Sí, a cualquier plan de igual o mayor precio, en cualquier momento, sujeto a viabilidad técnica.',
  },
  {
    q: '¿Y si me cambio de casa?',
    a: 'Te seguimos. Llevas tu router/ONU a la nueva dirección y el cambio tiene un costo de Q50.',
  },
];

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};
