import type { ImageMetadata } from 'astro:assets';

import logo2Tooncast            from '~/assets/images/canales/2-tooncast.png';
import logo3Canal3              from '~/assets/images/canales/3-canal3.png';
import logo4CartoonNetwork      from '~/assets/images/canales/4-cartoon.png';
import logo5Boomerang           from '~/assets/images/canales/5-boomerang.png';
import logo6Nickelodeon         from '~/assets/images/canales/6-nickelodeon.png';
import logo7Canal7              from '~/assets/images/canales/7-televisiete.png';
import logo8NickJr              from '~/assets/images/canales/8-nickjr.png';
import logo9DisneyChannel       from '~/assets/images/canales/9-disneychannel.png';
import logo10DiscoveryKids      from '~/assets/images/canales/10-dkids.png';
import logo11Canal11            from '~/assets/images/canales/11-canal11.webp';
import logo12BabyTV             from '~/assets/images/canales/12-babytv.png';
import logo13Canal13            from '~/assets/images/canales/13-canal13.png';
import logo14DisneyJr           from '~/assets/images/canales/14-disneyjr.png';
import logo15StarChannel        from '~/assets/images/canales/15-star.png';
import logo16SonyChannel        from '~/assets/images/canales/16-sony.png';
import logo17WarnerChannel      from '~/assets/images/canales/17-warner.svg';
import logo18StarChannelAlt     from '~/assets/images/canales/18-starchannel.png';
import logo19Guatevision        from '~/assets/images/canales/19-guatevision.webp';
import logo20AXN                from '~/assets/images/canales/20-axn.png';
import logo21AztecaGuate        from '~/assets/images/canales/21-tvaztecaguate.png';
import logo22StudioUniversal    from '~/assets/images/canales/22-studiouniversal.png';
import logo23FX                 from '~/assets/images/canales/23-fx.svg';
import logo24BitMe              from '~/assets/images/canales/24-bitme.svg';
import logo25ESPN5              from '~/assets/images/canales/25-espn5.png';
import logo26ESPN4              from '~/assets/images/canales/26-espn4.png';
import logo27ESPN6              from '~/assets/images/canales/27-espn6.png';
import logo28ESPN               from '~/assets/images/canales/28-espn.png';
import logo29ESPN2              from '~/assets/images/canales/29-espn2.png';
import logo30DiscoveryTurbo     from '~/assets/images/canales/30-turbodiscovery.png';
import logo31TUDN               from '~/assets/images/canales/31-tudn.png';
import logo32Corazon            from '~/assets/images/canales/32-corazon.png';
import logo33LasEstrellas       from '~/assets/images/canales/33-lasestrellas.png';
import logo34AztecaIntl         from '~/assets/images/canales/34-aztecainternacional.png';
import logo35TLNovelas          from '~/assets/images/canales/35-tlnovelas.png';
import logo36Telemundo          from '~/assets/images/canales/36-telemundo.png';
import logo37CineLatino         from '~/assets/images/canales/37-cinelatino.png';
import logo38DePelicula         from '~/assets/images/canales/38-depelicula.png';
import logo39TCM                from '~/assets/images/canales/39-tcm.png';
import logo40Univision          from '~/assets/images/canales/40-univision.png';
import logo41TNT                from '~/assets/images/canales/41-tnt.png';
import logo43GoldenEdge         from '~/assets/images/canales/43-goldenedge.png';
import logo44Cinecanal          from '~/assets/images/canales/44-cinecanal.png';
import logo45UniversalTV        from '~/assets/images/canales/45-universal.png';
import logo46Golden             from '~/assets/images/canales/46-golden.webp';
import logo47CinemaPlatino      from '~/assets/images/canales/47-cinemaplatino.webp';
import logo48Multipremier       from '~/assets/images/canales/48-multipremier.png';
import logo49DistritoComedia    from '~/assets/images/canales/49-distritocomedia.png';
import logo50InvestigationDiscovery from '~/assets/images/canales/50-investigationdiscovery.png';
import logo51AnimalPlanet       from '~/assets/images/canales/51-animalplanet.png';
import logo52History2           from '~/assets/images/canales/52-history2.png';
import logo53MasChic            from '~/assets/images/canales/53-maschic.png';
import logo54TNTSeries          from '~/assets/images/canales/54-tntseries.png';
import logo55TNTNovelas         from '~/assets/images/canales/55-tntnovelas.png';
import logo56Gourmet            from '~/assets/images/canales/56-gourmet.png';
import logo57DiscoveryChannel   from '~/assets/images/canales/57-discoverychannel.png';
import logo58TLC                from '~/assets/images/canales/58-tlc.png';
import logo59HomeHealth         from '~/assets/images/canales/59-homehealth.png';
import logo60AE                 from '~/assets/images/canales/60-ae.png';
import logo61History            from '~/assets/images/canales/61-history.png';
import logo62NatGeo             from '~/assets/images/canales/62-nationalgeographic.png';
import logo63Telesur            from '~/assets/images/canales/63-telesur.webp';
import logo64XTime              from '~/assets/images/canales/64-xtchannel.webp';
import logo65AMC                from '~/assets/images/canales/65-amc.svg';
import logo66FilmArts           from '~/assets/images/canales/66-filmarts.png';
import logo67CNN                from '~/assets/images/canales/67-cnnespanol.png';
import logo68Cineclick          from '~/assets/images/canales/68-cineclick.webp';
import logo69Agro21             from '~/assets/images/canales/69-agrotendencia.png';
import logo70ESPN3              from '~/assets/images/canales/70-espn3.png';
import logo71MTV                from '~/assets/images/canales/71-mtv.png';
import logo72Telehit            from '~/assets/images/canales/72-telehit.png';
import logo73TelehitMusica      from '~/assets/images/canales/73-telehitmusica.png';
import logo74E                  from '~/assets/images/canales/74-E.png';
import logo75CanalAntigua       from '~/assets/images/canales/75-canalantigua.png';
import logo76TN23               from '~/assets/images/canales/76-tn23.png';
import logo77Bandamax           from '~/assets/images/canales/77-bandamax.png';
import logo78HTV                from '~/assets/images/canales/78-htv.png';
import logo79Space              from '~/assets/images/canales/79-space.png';
import logo80France24           from '~/assets/images/canales/80-france24.png';
import logo81PanicoHD           from '~/assets/images/canales/81-panico.webp';
import logo82HispanTV           from '~/assets/images/canales/82-hispantv.jpg';
import logo83Antena3            from '~/assets/images/canales/83-antena3.png';
import logo84MTV00s             from '~/assets/images/canales/84-mtv00s.png';
import logo85VEACanal           from '~/assets/images/canales/85-veacanal.webp';
import logo86Enlace             from '~/assets/images/canales/86-enlace.webp';
import logo87Canal27            from '~/assets/images/canales/87-canal27.png';
import logo88MariaVision        from '~/assets/images/canales/88-mariavision.png';
import logo89EWTN               from '~/assets/images/canales/89-ewtn.png';
import logo90EJTV               from '~/assets/images/canales/90-ejtv.png';
import logo91ThreeABN           from '~/assets/images/canales/91-3abn.png';
import logo92VEPlus             from '~/assets/images/canales/92-veplus.png';
import logo93Lifetime           from '~/assets/images/canales/93-lifetime.png';
import logo94AMas               from '~/assets/images/canales/94-amasguate.webp';
import logo98Canal3Repeat       from '~/assets/images/canales/3-canal3.png';
import logo99Canal7Repeat       from '~/assets/images/canales/7-televisiete.png';

export interface Canal {
    numero: number;
    nombre: string;
    logo: ImageMetadata;      // ruta en /public/canales
    categoria?: string; // opcional, p/ filtrar más adelante
  }
  
  export const canales: Canal[] = [
    { numero: 2,  nombre: 'Tooncast',               logo: logo2Tooncast,             categoria: 'Infantiles' },
    { numero: 3,  nombre: 'Canal 3',               logo: logo3Canal3,               categoria: 'Nacionales' },
    { numero: 4,  nombre: 'Cartoon Network',        logo: logo4CartoonNetwork,              categoria: 'Infantiles' },
    { numero: 5,  nombre: 'Boomerang',              logo: logo5Boomerang,            categoria: 'Infantiles' },
    { numero: 6,  nombre: 'Nickelodeon',            logo: logo6Nickelodeon,          categoria: 'Infantiles' },
    { numero: 7,  nombre: 'Canal 7',               logo: logo7Canal7,               categoria: 'Nacionales' },
    { numero: 8,  nombre: 'Nick Jr.',              logo: logo8NickJr,               categoria: 'Infantiles' },
    { numero: 9,  nombre: 'Disney Channel',         logo: logo9DisneyChannel,        categoria: 'Infantiles' },
    { numero: 10, nombre: 'Discovery Kids',         logo: logo10DiscoveryKids,               categoria: 'Infantiles' },
    { numero: 11, nombre: 'Canal 11',              logo: logo11Canal11,             categoria: 'Nacionales' },
    { numero: 12, nombre: 'Baby TV',               logo: logo12BabyTV,              categoria: 'Infantiles' },
    { numero: 13, nombre: 'Canal 13',              logo: logo13Canal13,             categoria: 'Nacionales' },
    { numero: 14, nombre: 'Disney Jr.',            logo: logo14DisneyJr,            categoria: 'Infantiles' },
    { numero: 15, nombre: 'Star Channel',           logo:logo15StarChannel,                categoria: 'Series y Películas' },
    { numero: 16, nombre: 'Sony Channel',           logo: logo16SonyChannel,                categoria: 'Series y Películas' },
    { numero: 17, nombre: 'Warner Channel',         logo: logo17WarnerChannel,              categoria: 'Series y Películas' },
    { numero: 18, nombre: 'Star Channel (alt.)',    logo: logo18StarChannelAlt,                categoria: 'Series y Películas' },
    { numero: 19, nombre: 'Guatevisión',            logo: logo19Guatevision,         categoria: 'Nacionales' },
    { numero: 20, nombre: 'AXN',                    logo: logo20AXN,                 categoria: 'Series y Películas' },
    { numero: 21, nombre: 'Azteca Guate',          logo: logo21AztecaGuate,         categoria: 'Nacionales' },
    { numero: 22, nombre: 'Studio Universal',       logo: logo22StudioUniversal,     categoria: 'Series y Películas' },
    { numero: 23, nombre: 'FX Movies',             logo: logo23FX,                  categoria: 'Series y Películas' },
    { numero: 24, nombre: 'BitMe',                  logo: logo24BitMe,               categoria: 'Gamers / Variedad' },
    { numero: 25, nombre: 'ESPN 5',                logo: logo25ESPN5,               categoria: 'Deportes' },
    { numero: 26, nombre: 'ESPN 4',                logo: logo26ESPN4,               categoria: 'Deportes' },
    { numero: 27, nombre: 'ESPN 6',                logo: logo27ESPN6,               categoria: 'Deportes' },
    { numero: 28, nombre: 'ESPN',                   logo: logo28ESPN,                categoria: 'Deportes' },
    { numero: 29, nombre: 'ESPN 2',                logo: logo29ESPN2,               categoria: 'Deportes' },
    { numero: 30, nombre: 'Discovery Turbo',       logo: logo30DiscoveryTurbo,               categoria: 'Motor' },
    { numero: 31, nombre: 'TUDN',                   logo: logo31TUDN,                categoria: 'Deportes' },
    { numero: 32, nombre: 'Corazón TV Azteca',      logo: logo32Corazon,             categoria: 'Series y Películas' },
    { numero: 33, nombre: 'Las Estrellas',          logo: logo33LasEstrellas,        categoria: 'Internacional' },
    { numero: 34, nombre: 'Azteca Internacional',   logo: logo34AztecaIntl, categoria: 'Internacional' },
    { numero: 35, nombre: 'TLNovelas',              logo: logo35TLNovelas,           categoria: 'Series y Películas' },
    { numero: 36, nombre: 'Telemundo Int.',         logo: logo36Telemundo,           categoria: 'Internacional' },
    { numero: 37, nombre: 'Cine Latino',           logo: logo37CineLatino,          categoria: 'Series y Películas' },
    { numero: 38, nombre: 'De Película',           logo: logo38DePelicula,          categoria: 'Series y Películas' },
    { numero: 39, nombre: 'TCM',                    logo: logo39TCM,                 categoria: 'Series y Películas' },
    { numero: 40, nombre: 'Univisión',              logo: logo40Univision,           categoria: 'Internacional' },
    { numero: 41, nombre: 'TNT',                    logo: logo41TNT,                 categoria: 'Series y Películas' },
    { numero: 43, nombre: 'Golden Edge',           logo: logo43GoldenEdge,          categoria: 'Series y Películas' },
    { numero: 44, nombre: 'Cinecanal',              logo: logo44Cinecanal,           categoria: 'Series y Películas' },
    { numero: 45, nombre: 'Universal TV',          logo: logo45UniversalTV,           categoria: 'Series y Películas' },
    { numero: 46, nombre: 'Golden',                 logo: logo46Golden,              categoria: 'Series y Películas' },
    { numero: 47, nombre: 'Cinema Platino',        logo: logo47CinemaPlatino,             categoria: 'Series y Películas' },
    { numero: 48, nombre: 'Multipremier',           logo: logo48Multipremier,        categoria: 'Series y Películas' },
    { numero: 49, nombre: 'Distrito Comedia',       logo: logo49DistritoComedia,     categoria: 'Series y Películas' },
    { numero: 50, nombre: 'Investigation Discovery',logo: logo50InvestigationDiscovery,                  categoria: 'Documentales' },
    { numero: 51, nombre: 'Animal Planet',         logo: logo51AnimalPlanet,        categoria: 'Documentales' },
    { numero: 52, nombre: 'History 2',             logo: logo52History2,            categoria: 'Documentales' },
    { numero: 53, nombre: 'Más Chic',              logo: logo53MasChic,             categoria: 'Lifestyle' },
    { numero: 54, nombre: 'TNT Series',             logo: logo54TNTSeries,           categoria: 'Series y Películas' },
    { numero: 55, nombre: 'TNT Novelas',            logo: logo55TNTNovelas,          categoria: 'Series y Películas' },
    { numero: 56, nombre: 'El Gourmet',            logo: logo56Gourmet,             categoria: 'Lifestyle' },
    { numero: 57, nombre: 'Discovery Channel',     logo: logo57DiscoveryChannel,            categoria: 'Documentales' },
    { numero: 58, nombre: 'TLC',                    logo: logo58TLC,                 categoria: 'Lifestyle' },
    { numero: 59, nombre: 'Discovery Home & Health',logo: logo59HomeHealth,                  categoria: 'Lifestyle' },
    { numero: 60, nombre: 'A&E',                    logo: logo60AE,                  categoria: 'Series y Películas' },
    { numero: 61, nombre: 'History',                logo: logo61History,             categoria: 'Documentales' },
    { numero: 62, nombre: 'National Geographic',   logo: logo62NatGeo,             categoria: 'Documentales' },
    { numero: 63, nombre: 'Telesur',                logo: logo63Telesur,             categoria: 'Noticias' },
    { numero: 64, nombre: 'X Time',                logo: logo64XTime,               categoria: 'Series y Películas' },
    { numero: 65, nombre: 'AMC',                    logo: logo65AMC,                 categoria: 'Series y Películas' },
    { numero: 66, nombre: 'Film & Arts',           logo: logo66FilmArts,         categoria: 'Cultura' },
    { numero: 67, nombre: 'CNN en Español',        logo: logo67CNN,                 categoria: 'Noticias' },
    { numero: 68, nombre: 'Cineclick',              logo: logo68Cineclick,           categoria: 'Series y Películas' },
    { numero: 69, nombre: 'Agro 21',               logo: logo69Agro21,              categoria: 'Variedad' },
    { numero: 70, nombre: 'ESPN 3',                logo: logo70ESPN3,               categoria: 'Deportes' },
    { numero: 71, nombre: 'MTV',                    logo: logo71MTV,                 categoria: 'Música' },
    { numero: 72, nombre: 'Telehit',                logo: logo72Telehit,             categoria: 'Música' },
    { numero: 73, nombre: 'Telehit Música',        logo: logo73TelehitMusica,       categoria: 'Música' },
    { numero: 74, nombre: 'E! Entertainment',      logo: logo74E,                   categoria: 'Lifestyle' },
    { numero: 75, nombre: 'Canal Antigua',         logo: logo75CanalAntigua,             categoria: 'Noticias' },
    { numero: 76, nombre: 'TN 23',                 logo: logo76TN23,               categoria: 'Noticias' },
    { numero: 77, nombre: 'Bandamax',               logo: logo77Bandamax,            categoria: 'Música' },
    { numero: 78, nombre: 'HTV',                    logo: logo78HTV,                 categoria: 'Música' },
    { numero: 79, nombre: 'Space',                  logo: logo79Space,               categoria: 'Series y Películas' },
    { numero: 80, nombre: 'France 24',             logo: logo80France24,            categoria: 'Noticias' },
    { numero: 81, nombre: 'Pánico HD',             logo: logo81PanicoHD,              categoria: 'Series y Películas' },
    { numero: 82, nombre: 'Hispan TV',             logo: logo82HispanTV,            categoria: 'Noticias' },
    { numero: 83, nombre: 'Antena 3',              logo: logo83Antena3,             categoria: 'Internacional' },
    { numero: 84, nombre: 'MTV 00s',               logo: logo84MTV00s,               categoria: 'Música' },
    { numero: 85, nombre: 'VEA Canal',             logo: logo85VEACanal,                 categoria: 'Noticias / Variedad' },
    { numero: 86, nombre: 'Enlace',                 logo: logo86Enlace,              categoria: 'Religiosos' },
    { numero: 87, nombre: 'Canal 27',              logo: logo87Canal27,             categoria: 'Religiosos' },
    { numero: 88, nombre: 'María Visión',          logo: logo88MariaVision,         categoria: 'Religiosos' },
    { numero: 89, nombre: 'EWTN',                   logo: logo89EWTN,                categoria: 'Religiosos' },
    { numero: 90, nombre: 'EJTV',                   logo: logo90EJTV,                categoria: 'Religiosos' },
    { numero: 91, nombre: '3ABN Latino',           logo: logo91ThreeABN,                categoria: 'Religiosos' },
    { numero: 92, nombre: 'VE Plus',               logo: logo92VEPlus,              categoria: 'Variedad' },
    { numero: 93, nombre: 'Lifetime',               logo: logo93Lifetime,            categoria: 'Series y Películas' },
    { numero: 94, nombre: 'A Más',                 logo: logo94AMas,                categoria: 'Noticias / Variedad' },
    { numero: 98, nombre: 'Repetidora Canal 3',     logo: logo98Canal3Repeat,        categoria: 'Nacionales' },
    { numero: 99, nombre: 'Repetidora Canal 7',     logo: logo99Canal7Repeat,        categoria: 'Nacionales' },
  ];
  