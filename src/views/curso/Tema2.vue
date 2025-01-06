<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. El briefing como punto de partida estratégico'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .bg-color-3.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") El briefing es un documento esencial que guía un proyecto creativo, especificando objetivos, público objetivo, mensajes claves, tono de voz, presupuesto y cualquier restricción relevante. Es el mapa que indica el destino y las acciones necesarias para llegar allí, asegurando una comprensión común, entre el cliente y el equipo creativo.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/1.png', alt='')

      h5(data-aos="fade-up") ¿Por qué es esencial el briefing?

      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", alt="").mb-4.mb-lg-0
        .col-lg-8
          p(data-aos="fade-left") El enfoque colaborativo tiene múltiples beneficios en la resolución de conflictos:

          AcordionA(tipo="b")
            .div(titulo="Asegura la alineación")
              p Define una visión común entre todas las partes involucradas.


            .div(titulo="Optimiza el proceso creativo")
              p Orienta los esfuerzos hacia ideas relevantes.

            .div(titulo="Facilita la toma de decisiones")
              p Proporciona información clave para decisiones 

            .div(titulo="Mejora la comunicación")
              p Reduce malentendidos entre cliente y equipo creativo.


      h2(data-aos="fade-up") Elementos claves de un #[span #[em briefing]]

      p(data-aos="fade-left") Los elementos de un #[em briefing], son los pilares que sostienen la estrategia de una campaña exitosa.

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-1.png")
              .col-lg-7.order-lg-1
                h4 Objetivo de la campaña
                p Define qué se quiere lograr. 
                ul.lista-ul--color
                  li.mb-0
                    i.fas.fa-check-circle
                    | #[b Ejemplo:] incrementar las ventas de un nuevo modelo de smartphone en un 20 % en los próximos tres meses.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-2.png")
              .col-lg-7.order-lg-1
                h4 Público objetivo
                p Especifica a quién va dirigida la campaña (edad, intereses, hábitos).
                ul.lista-ul--color
                  li.mb-0
                    i.fas.fa-check-circle
                    | #[b Ejemplo:] mujeres entre 25 y 35 años, profesionales, interesadas en bienestar y sostenibilidad.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-3.png")
              .col-lg-7.order-lg-1
                h4 Mensaje clave
                p Comunica la idea principal o beneficio del producto/servicio.
                ul.lista-ul--color
                  li.mb-0
                    i.fas.fa-check-circle
                    | #[b Ejemplo:] "Nuestro champú deja el cabello suave y brillante, brindándonos confianza".

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-4.png")
              .col-lg-7.order-lg-1
                h4 Tono de voz
                p Define la personalidad de la marca en la comunicación (formal, informal, juvenil, seria).
                ul.lista-ul--color
                  li.mb-0
                    i.fas.fa-check-circle
                    | #[b Ejemplo:] juvenil y divertido para una marca de ropa deportiva, dirigida a los adolescentes.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-5.png")
              .col-lg-7.order-lg-1
                h4 Presupuesto
                p Establece los recursos disponibles para la campaña.
                ul.lista-ul--color
                  li.mb-0
                    i.fas.fa-check-circle
                    | #[b Ejemplo:] $50,000 para una campaña de lanzamiento en redes sociales.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slider-6.png")
              .col-lg-7.order-lg-1
                h4 #[em Call to action] (CTA)
                p Indica la acción deseada del público objetivo.
                ul.lista-ul--color
                  li.mb-0
                    i.fas.fa-check-circle
                    | #[b Ejemplo:] "Descubre más y pruébalo hoy".



      .bg-full-width.bg-color-4.mb-5
        .p-4.p-md-5

          .row.justify-content-center.align-items-center
            .col-lg-6
              figure
                img(src="@/assets/curso/tema2/3.svg")
            .col-lg-6
              h4(data-aos="fade-left") Ejemplo práctico de un #[em briefing]
              p(data-aos="fade-left") Para una nueva marca de café:
              ol.lista-ol--cuadro(data-aos="fade-up")
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | #[b Objetivo:] aumentar la cuota de mercado en un 10 % en seis meses.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | #[b Público objetivo:] jóvenes adultos entre 25 y 35 años, interesados en café de especialidad y sostenibilidad.
                li
                  .lista-ol--cuadro__vineta
                    span 3
                  | #[b Mensaje clave:] "Nuestro café es una experiencia única que combina sabor artesanal y conciencia social".

                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | #[b Tono de voz:] cercano, auténtico y comprometido.
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | #[b Presupuesto:] $30,000 para medios digitales y publicidad, en redes sociales.
                li
                  .lista-ol--cuadro__vineta
                    span 6
                  | #[b #[em Call to action]:] "Únete a la comunidad de amantes del café consciente".


      h2(data-aos="fade-up") Consejos prácticos para crear #[span #[em briefings]] efectivos

      .bg-full-width.bg-fondo-6
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.mb-5.align-items-center
            .col-lg-8
              p(data-aos="fade-left") Un #[em briefing] efectivo es esencial para guiar proyectos creativos de manera clara y alineada con los objetivos.

              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/icon-1.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Sea claro y conciso
                  p.text-center Evite la jerga y divagaciones; priorice la información más relevante.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/icon-2.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Sea específico
                  p.text-center Defina objetivos claros, describa el público objetivo en detalle y especifique el mensaje clave.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/icon-3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Sea visual
                  p.text-center Utilice gráficos, imágenes o un #[em moodboard], para transmitir el estilo y la estética deseada.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/icon-4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Sea flexible
                  p.text-center Deje espacio para la creatividad del equipo, permitiendo sugerencias e ideas innovadoras.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/icon-5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Colabore
                  p.text-center Involucre a todas las partes interesadas y solicite #[em feedback], antes de finalizar el documento.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema2/icon-6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Revise y ajuste
                  p.text-center Revise el documento para garantizar que sea claro, consistente y útil para todos los involucrados.

            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/4.png', alt='')


      h2(data-aos="fade-up") ¿Qué ocurre si el #[span #[em briefing]] es deficiente?

      p(data-aos="fade-left").mb-4 Un #[em briefing] deficiente puede generar múltiples inconvenientes que afectan el desarrollo y éxito de un proyecto.

      figure.mb-5
        img(src="@/assets/curso/tema2/5.svg", data-aos="zoom-in").mb-4.mb-lg-0.d-none.d-lg-block
        img(src="@/assets/curso/tema2/5-mobile.svg", data-aos="zoom-in").mb-4.mb-lg-0.d-lg-none


      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
        .col-lg-7

          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/icon-7.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 #[b Ejemplo:] una empresa tecnológica lanza un producto sin definir el público objetivo claramente, generando una campaña demasiado genérica y menos efectiva.

          p(data-aos="fade-left") Un #[em briefing] bien elaborado es la brújula que orienta el rumbo del equipo creativo hacia los objetivos del cliente. Al ser claro, conciso y detallado, asegura alineación, optimiza el proceso creativo y maximiza los recursos disponibles. La inversión de tiempo en su elaboración, se traduce en campañas más efectivas, resultados satisfactorios y relaciones de confianza entre las partes involucradas.


      .bg-full-width.bg-color-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Casos prácticos de #[em briefing] eficaces
              p.mb-4(data-aos="fade-right") En el documento se exponen casos prácticos de #[b #[em briefings] eficaces] que abarcan distintos escenarios, desde el lanzamiento de un producto tecnológico hasta campañas de concienciación. Se presentan ejemplos detallados que incluyen objetivos claros, públicos definidos, mensajes claves, tonos de voz adecuados, restricciones específicas, indicadores de rendimiento (KPI's) y visuales ejemplares.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Casos prácticos de briefing eficaces.

            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/7.png', alt='')

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/105453" target="_blank" rel="noopener noreferrer") Montes, Z. G. D. & Montes G. L. (2019). Cerebro, inteligencias y mapas mentales: desarrolla tus habilidades mentales a través de 27 inteligencias del cerebro (2 ed.). Marge Books. 
  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://open.spotify.com/intl-es/album/0czWD4khMpBWDAayo25iQt?si=-tfJ6hA8QQKa101mlDTkdQ" target="_blank" rel="noopener noreferrer") David Campbell. (2022). El arte de la manipulación-Leer a las personas (pódcast). Spotify.  
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://ondho.com/blog/categoria/creatividad-tecnicas-ideas" target="_blank" rel="noopener noreferrer") Ondho.com. (2024). La creatividad está presente en todo momento, del diseño a la publicidad pasando por la fotografía o el branding.

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
