<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .bg-full-width.bg-fondo-1.mb-4
      .px-4.px-md-5.pb-md-3

        .row
          .col-lg-8
            .bg-color-1.px-4.py-5(data-aos="fade-left").mb-4
              p.mb-0 #[b ¡Bienvenido a un mundo lleno de ideas innovadoras!] En esta unidad, se adentrará en el fascinante proceso de dar vida a conceptos creativos que cautivan y persuaden. ¿Alguna vez se ha preguntado cómo se crean las campañas publicitarias que le impactan? ¿O cómo se desarrollan las ideas que dan origen a nuevos productos y servicios? ¡Aquí encontrará las respuestas!
            
            p(data-aos="fade-left") #[b Imagine tener la capacidad de generar ideas originales y convertirlas en realidades tangibles.] A lo largo de esta unidad, desarrollará las habilidades necesarias para pensar de manera creativa y estratégica. Aprenderá a identificar oportunidades, a resolver problemas de manera innovadora y a comunicar sus ideas, de forma efectiva.
          .col-lg-4.d-none.d-sm-block
            figure
              img(src="@/assets/curso/intro/1.svg", data-aos="zoom-in").mb-4.mb-lg-0

    .bg-full-width.bg-color-2(data-aos="zoom-in").mb-4
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 #[b ¿Por qué es importante este tema?] La creatividad es una herramienta fundamental en cualquier ámbito profesional. Ya sea que se dediquen al marketing, al diseño, a la programación o a cualquier otra área, la capacidad de generar ideas nuevas y originales, le permitirá destacar y alcanzar el éxito.

    .bg-full-width.bg-fondo-2.mb-4
      .px-4.px-md-5.pb-md-3
        p(data-aos="fade-left").mb-4 #[b En esta unidad, se abordarán los siguientes temas:]


        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/intro/card-1.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Componentes del proceso creativo publicitario
                p.mb-0 Descubrirá los pasos que siguen los profesionales de la creatividad, para desarrollar ideas desde cero, hasta su implementación.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/intro/card-2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center El #[em briefing] como punto de partida estratégico
                p.mb-0 Aprenderá a analizar un #[em briefing] y a utilizarlo como guía, para generar ideas relevantes y efectivas.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/intro/card-3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Técnicas para la generación de ideas
                p.mb-0 Dominará herramientas como el #[em brainstorming], los mapas mentales y el método SCAMPER, para potenciar su creatividad y superar bloqueos mentales.



</template>
