<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Proceso creativo y <em>briefing</em>'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-8
        .bg-color-1.p-4(data-aos="fade-left").mb-5
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/icon-1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El proceso creativo es el motor del marketing moderno, permitiendo a las marcas destacar en un mercado saturado y establecer conexiones profundas con su audiencia. A continuación, se detalla cada etapa clave de este proceso, así como su relevancia en el contexto publicitario.

        h2.mb-4 #[b Creatividad en] #[span marketing]

        p(data-aos="fade-left") La creatividad en marketing, se define como la capacidad de generar ideas originales, innovadoras y relevantes, que permitan conectar con el público, diferenciarse de la competencia y alcanzar los objetivos de una campaña.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in").mb-4.mb-lg-0


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    .bg-full-width.bg-fondo-3.mb-5
      .p-4.p-md-5
        h2.mb-4 Relación entre creatividad y proceso creativo

        p(data-aos="fade-left").mb-4 La creatividad y el proceso creativo, están intrínsecamente relacionados, complementándose en la generación y la implementación de ideas.

        .row.justify-content-center.align-items-stretch
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/card-1.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Creatividad como chispa
                p.mb-0 Genera ideas iniciales, actuando como el detonante para la innovación.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/card-2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Proceso creativo como estructura
                p.mb-0 Organiza esas ideas, selecciona las más prometedoras y las desarrolla en acciones concretas



    h2(data-aos="flip-up").mb-5 Importancia de un proceso creativo sistemático
    p(data-aos="fade-left").mb-5 Un proceso creativo sistemático, es crucial para optimizar la generación e implementación de ideas.

    .bg-full-width.bg-fondo-4
      .p-4.p-md-5
        figure.mb-5
          img(src="@/assets/curso/tema1/2.svg", data-aos="zoom-in").mb-4.mb-lg-0.d-none.d-lg-block
          img(src="@/assets/curso/tema1/2b.svg", data-aos="zoom-in").mb-4.mb-lg-0.d-lg-none


        h2(data-aos="fade-left").mb-4 Componentes del proceso creativo publicitario
        p(data-aos="fade-left").mb-0 El proceso creativo publicitario, se compone de etapas claves que guían desde la generación de ideas, hasta su implementación efectiva.


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-1.png")
            .col-lg-7.order-lg-1
              h4 Inspiración
              p Es el punto de partida para la generación de ideas. 

              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-check-circle
                  |  #[b Fuentes:] la vida cotidiana, tendencias, arte, cultura, investigación de mercado, competencia y trabajo colaborativo. 

                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] un publicista inspirado en una noticia sobre reciclaje, crea una campaña que fomenta prácticas sostenibles.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-2.png")
            .col-lg-7.order-lg-1
              h4 Ideación
              p Proceso de generar múltiples ideas para resolver problemas o alcanzar objetivos.

              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-check-circle
                  |  #[b Técnicas:] analogía, metáfora, brainstorming, SCAMPER. 
                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] utilizar SCAMPER para desarrollar una zapatilla que genere energía al caminar (Combine).

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-3.png")
            .col-lg-7.order-lg-1
              h4 Evaluación
              p Filtra y selecciona las mejores ideas.

              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-check-circle
                  |  #[b Criterios:] originalidad, relevancia, viabilidad y efectividad.
                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] descartar una idea muy creativa pero irrelevante para el público objetivo.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slider-4.png")
            .col-lg-7.order-lg-1
              h4 Implementación
              p Convierte la idea seleccionada en realidad.

              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-check-circle
                  |  #[b Etapas:] conceptualización, producción, selección de medios, lanzamiento y evaluación.
                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] crear anuncios, definir canales y medir resultados en una campaña de zapatillas.


    .bg-full-width.bg-fondo-5.mb-5
      .p-4.p-md-5
        h2(data-aos="fade-left") Ejemplo práctico: proceso creativo, aplicado a una campaña
        p(data-aos="fade-left").mb-4 El proceso creativo aplicado a una campaña publicitaria, es fundamental para transformar ideas en resultados tangibles.

        #Tarjetas1.div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/icon-2.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center.mb-2 Creatividad
              p.mb-0.text-center Generar ideas para una campaña de una nueva bebida energética.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/icon-3.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center.mb-2 Proceso creativo
              p.mb-0.text-center Evaluar las ideas y seleccionar una basada en la idea de "energía renovable".
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/icon-4.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center.mb-2 Ejecución
              p.mb-0.text-center Diseñar anuncios visuales, colaborar con influencers y lanzar la campaña en redes sociales.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/icon-5.svg"
                alt=""
                style="width: 90px"
              )
              h5.text-center.mb-2 Medición
              p.mb-0.text-center Analizar métricas de alcance, interacción y ventas para ajustar estrategias futuras.


    h2(data-aos="fade-left").mb-4 #[span #[em Briefing:] ] una herramienta clave

    p(data-aos="fade-left").mb-4 El #[em briefing] es un documento esencial que define los objetivos, público objetivo, mensajes claves y recursos de una campaña.

    .row.justify-content-center.align-items-center.bg-h85.mb-5
      .col-lg-11
        .row.justify-content-center.align-items-center
          .col-lg-5(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema1/3.svg', style="max-width:505px", alt="").mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

          .col-lg-7(data-aos="fade-left")
            .pt-5
              h5.mb-2 Beneficios

              ol.lista-ol--cuadro(data-aos="fade-up")
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Claridad en la comunicación entre el equipo creativo y el cliente.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Alineación de los objetivos.
                li
                  .lista-ol--cuadro__vineta
                    span 3
                  | Optimización del tiempo y los recursos.


    p(data-aos="fade-left").mb-4 Contenido básico de un #[em briefing]: 

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-8
        .tarjeta.px-4.py-4(style="background-color: #E23E64;").mb-2(data-aos="fade-left")
          p.mb-0.text-white #[b Objetivos de la campaña.]
        .tarjeta.px-4.py-4(style="background-color: #AC59F1;").mb-2(data-aos="fade-left")
          p.mb-0.text-white #[b Descripción del público objetivo.]
        .tarjeta.px-4.py-4(style="background-color: #FD884D;").mb-2(data-aos="fade-left")
          p.mb-0.text-white #[b Mensajes claves a comunicar.]
        .tarjeta.px-4.py-4(style="background-color: #A3F0F3;").mb-2(data-aos="fade-left")
          p.mb-0 #[b Presupuesto y recursos disponibles.]
        .tarjeta.px-4.py-3(style="background-color: #598384;").mb-2(data-aos="fade-left")
          p.mb-0.text-white #[b Cronograma y fechas claves.]
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in").mb-4.mb-lg-0.d-none.d-lg-block

    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
      .col-lg-7
        h5(data-aos="fade-left").mb-4 Ejemplo:
        p(data-aos="fade-left").mb-4 Un #[em briefing] para una campaña de una aplicación de reciclaje, incluiría objetivos como aumentar descargas en un 20 % en tres meses, enfocado en jóvenes entre 18 y 30 años interesados en la sostenibilidad.

        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 El proceso creativo y el briefing, son herramientas esenciales en marketing. Mientras que la creatividad genera ideas disruptivas, el proceso creativo crea las estructura para convertirlas en acciones efectivas. Por otro lado, el briefing proporciona la guía estratégica que asegura el éxito de una campaña, alineando las expectativas del cliente con el equipo creativo. Al integrar ambos elementos, las marcas logran destacar, conectar y crecer en un mercado cada vez más competitivo.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/273090" target="_blank" rel="noopener noreferrer") Biasca, R. E. (2024). Resultados: la acción de las ideas a los hechos concretos (2 ed.). Ciudad Educativa. 

            p.d-flex.mt-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://open.spotify.com/playlist/37i9dQZF1DX0L0byUJaKfM?si=LL_HdtU3RnKIgf94tACS6w" target="_blank" rel="noopener noreferrer") Molo Cebrian. (2024). Lo mejor de entiende tu mente (pódcast). Spotify. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
