export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Proceso creativo y <em>briefing</em>',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Proceso creativo y <em>briefing</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El <em>briefing</em> como punto de partida estratégico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Técnicas para la generación de ideas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Biasca, R. E. (2024). Resultados: la acción de las ideas a los hechos concretos (2 ed.). Ciudad Educativa.',
      link: 'https://libro.net/es/lc/tecnologicadeloriente/titulos/273090',
    },
    {
      referencia:
        'González, E. (2019). En las entrañas de la publicidad: la dirección creativa ejecutiva y el oficio de anunciar. Editorial UOC.',
      link: 'https://libro.net/es/lc/tecnologicadeloriente/titulos/120286',
    },
    {
      referencia:
        'Uribe Beltrán, C. I. (2020). Marketing digital en agencias de publicidad: social media en Mipymes de servicios creativos de Bogotá. Fundación Universitaria Los Libertadores.',
      link: 'https://libro.net/es/lc/tecnologicadeloriente/titulos/136993',
    },
    {
      referencia:
        'González, E. (2019). En las entrañas de la publicidad: la dirección creativa ejecutiva y el oficio de anunciar. Editorial UOC.',
      link: 'https://libro.net/es/lc/tecnologicadeloriente/titulos/120286',
    },
    {
      referencia:
        'Montessori, M. (2020). Ideas generales sobre mi método: manual práctico. Editorial CEPE.',
      link: 'https://libro.net/es/lc/tecnologicadeloriente/titulos/153522',
    },
    {
      referencia:
        'Pieri, J. (2020). Makers: cómo transformar ideas en productos en estos tiempos. McGraw-Hill España.',
      link: 'https://libro.net/es/lc/tecnologicadeloriente/titulos/189586',
    },
  ],
  glosario: [
    {
      termino: '<em>Brainstorming</em>',
      significado:
        'Técnica de generación de ideas en grupo, donde se fomenta la libre expresión y la cantidad de ideas, sin juzgarlas inicialmente.',
    },
    {
      termino: '<em>Brief</em>',
      significado: 'Sinónimo de <em>briefing</em>.',
    },
    {
      termino: 'Concepto creativo',
      significado:
        'Idea central que guía una campaña publicitaria y que comunica el mensaje de manera original y memorable.',
    },
    {
      termino: '<em>Copywriting</em>',
      significado: 'Redacción creativa de textos publicitarios.',
    },
    {
      termino: 'Evaluación',
      significado:
        'Proceso de análisis y valoración de las ideas generadas para seleccionar las más adecuadas.',
    },
    {
      termino: 'Ideación',
      significado:
        'Proceso de generación de ideas, tanto a nivel individual como en equipo.',
    },
    {
      termino: 'Implementación',
      significado:
        'Fase en la que se lleva a cabo la campaña publicitaria, poniendo en práctica las ideas seleccionadas.',
    },
    {
      termino: '<em>Insight</em>',
      significado:
        'Comprensión profunda de las necesidades, deseos y motivaciones del consumidor.',
    },
    {
      termino: 'Inspiración',
      significado:
        'Estímulo que desencadena la creatividad y la generación de nuevas ideas.',
    },
    {
      termino: 'Mapas mentales',
      significado:
        'Herramienta visual que permite representar ideas de forma jerárquica y establecer conexiones entre ellas.',
    },
    {
      termino: 'Objetivo de campaña',
      significado:
        'Meta que se desea alcanzar con una campaña publicitaria, por ejemplo, aumentar las ventas, mejorar la imagen de marca o lanzar un nuevo producto.',
    },
    {
      termino: 'Posicionamiento de marca',
      significado:
        'Lugar que ocupa una marca en la mente de los consumidores en relación con la competencia.',
    },
    {
      termino: 'Público objetivo',
      significado:
        'Grupo de personas al que va dirigida una campaña publicitaria.',
    },
    {
      termino: '<em>SCAMPER</em>',
      significado:
        'Técnica de generación de ideas, basada en siete preguntas que ayudan a modificar, combinar, adaptar, proponer nuevos usos, eliminar y reorganizar elementos existentes.',
    },
    {
      termino: '<em>Target</em>',
      significado: 'Sinónimo de público objetivo.',
    },
    {
      termino: 'Tono de voz',
      significado:
        'Personalidad y estilo de comunicación que se utiliza en una campaña publicitaria.',
    },
    {
      termino: 'Visualización',
      significado:
        'Proceso de crear imágenes mentales para representar ideas y conceptos.',
    },
  ],
}
