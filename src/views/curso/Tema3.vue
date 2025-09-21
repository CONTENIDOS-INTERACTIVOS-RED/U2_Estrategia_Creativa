<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Técnicas para la generación de ideas'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


      .bg-full-width.bg-color-6.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/icon-1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La creatividad es como un laboratorio que necesita herramientas precisas para experimentar y descubrir combinaciones novedosas. En este contexto, se exploran técnicas diseñadas para estimular la imaginación y generar soluciones innovadoras.


      h2(data-aos="fade-left").mb-5 #[span #[em Brainstorming:]] una tormenta perfecta de ideas

      p(data-aos="fade-left").mb-4 El #[em brainstorming] es una técnica sencilla pero poderosa, que permite generar un flujo constante de ideas, sin juicio ni restricciones.


      .row.justify-content-center.mb-4
        .col-lg-11
          .tarjeta-move.d-flex.align-items-center
            .tarjeta-move__title(style="background-color: #E23E64 "): h3.mb-0 Definir un objetivo claro
            .tarjeta-move__content.w-100(style="background-color: #E3D7DA; border: solid 2px #E23E64")
              p.mb-0 Determine el problema o desafío que desea abordar.

      .row.justify-content-center.mb-4
        .col-lg-11
          .tarjeta-move.d-flex.align-items-center
            .tarjeta-move__title(style="background-color: #ac59f1 "): h3.mb-0 Establecer un ambiente propicio
            .tarjeta-move__content.w-100(style="background-color: #eeddfc; border: solid 2px #ac59f1")
              p.mb-0 Cree un espacio relajado donde todos puedan expresar sus ideas libremente.

      .row.justify-content-center.mb-4
        .col-lg-11
          .tarjeta-move.d-flex.align-items-center
            .tarjeta-move__title(style="background-color: #FD884D "): h3.mb-0 Generar ideas sin críticas
            .tarjeta-move__content.w-100(style="background-color: #FEE6DA; border: solid 2px #FD884D")
              p.mb-0 Anime a los participantes para compartir ideas, sin importar cuán inusuales parezcan.

      .row.justify-content-center.mb-4
        .col-lg-11
          .tarjeta-move.d-flex.align-items-center
            .tarjeta-move__title(style="background-color: #A3F0F3;"): h3.mb-0.text-black Construir sobre ideas previas
            .tarjeta-move__content.w-100(style="background-color: #ECFCFC; border: solid 2px #A3F0F3")
              p.mb-0(style="color: #000000") Utilice ideas ya mencionadas como base para generar nuevas.

      .row.justify-content-center.mb-5
        .col-lg-11
          .tarjeta-move.d-flex.align-items-center
            .tarjeta-move__title(style="background-color: #598384 "): h3.mb-0 Evaluar y priorizar
            .tarjeta-move__content.w-100(style="background-color: #C6F1F2; border: solid 2px #598384")
              p.mb-0 Una vez terminada la sesión, clasifique las ideas, según relevancia y viabilidad.

      .bg-full-width.bg-color-4.mb-5
        .p-4.px-md-5

          .row.justify-content-center.align-items-center
            .col-lg-5
              figure.p-4
                img(src="@/assets/curso/tema3/1.svg").mx-auto
            .col-lg-6
              h4(data-aos="fade-left") Ejemplo práctico
              p(data-aos="fade-left") Para crear una nueva aplicación de comida a domicilio, el brainstorming podría generar ideas como:
              ol.lista-ol--cuadro(data-aos="fade-up")
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Entregas con drones.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Algoritmo que sugiere platos, según el estado de ánimo.
                li
                  .lista-ol--cuadro__vineta
                    span 3
                  | Restaurantes virtuales exclusivos de la #[em app].


      h2(data-aos="fade-left").mb-5 El papel de la inteligencia artificial (IA) en el #[span #[em brainstorming]]

      p(data-aos="fade-left").mb-4 La IA es una herramienta que potencia el brainstorming al generar, ampliar y evaluar ideas, de manera eficiente.


      .row.align-items-start.mb-5
        .col-lg-8
          //p(data-aos="fade-left") El enfoque colaborativo tiene múltiples beneficios en la resolución de conflictos:

          AcordionA(tipo="b")
            .div(titulo="Generación de ideas iniciales")
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Palabras claves:] introduzca palabras claves relacionadas con su producto o servicio, en un modelo como ChatGPT.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] para innovar en el sector de la moda, use palabras claves como "ropa sostenible, tecnología, juventud". La IA generará ideas que puede utilizar como punto de partida para aplicar SCAMPER. 
                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Analogías:] solicite analogías entre su producto o servicio y conceptos diferentes. 
                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] si trabaja en un nuevo tipo de automóvil, podría pedir una analogía con un #[em smartphone].

            .div(titulo="Exploración de cada letra de SCAMPER")
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Generación de opciones:] solicite a la IA que sugiera múltiples opciones para cada letra de SCAMPER.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] para la "S" de Sustituir, pregunte: "¿Qué materiales innovadores podrían sustituir el cuero en la fabricación de bolsos?"
                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Combinaciones creativas:] pida combinaciones de conceptos dispares.
                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] si trabaja en diseño de interiores, pida combinar el estilo industrial, con elementos de la naturaleza.

            .div(titulo="Optimiza el proceso creativo")
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Clasificación:] la IA organiza ideas, según originalidad, viabilidad e impacto.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Priorización:] identifica las ideas con mayor potencial, basadas en datos y tendencias.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/2.png", alt="").mb-4.mb-lg-0


      h3(data-aos="fade-left") Herramientas de IA recomendadas:

      .row.justify-content-center.align-items-stretch.mb-5
        .col-xl-4 
          .bg-color-1.p-4.h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/icon-2.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Generadores de texto
                p.mb-0 ChatGPT, Jasper.ai.
        .col-xl-4 
          .bg-color-1.p-4.h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/icon-3.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Visualización de ideas
                p.mb-0 MindMeister, Miro.
        .col-xl-4 
          .bg-color-1.p-4.h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/icon-4.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Plataformas generativas
                p.mb-0 #[em Software] que combina texto, imágenes y prototipos virtuales.


      h2(data-aos="fade-left") Técnicas de ideación adicionales

      p(data-aos="fade-left") Las técnicas de ideación adicionales, son herramientas claves para estimular la creatividad y encontrar soluciones innovadoras en proyectos.


      .bg-full-width.bg-color-info
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-5
              ImagenInfografica.color-secundario
                  template(v-slot:imagen)
                    figure
                      img(src='@/assets/curso/tema3/info1.png', alt='', style="max-width: 490px;").mx-auto

                  .bg-color-white.box-shadow.p-3(x="7%" y="7%" numero="+")
                    h5 Analogías y metáforas
                    p Comparar problemas con situaciones familiares para encontrar soluciones creativas. 
                    p #[b Ejemplo:] diseñar un sistema de seguridad como un "guardián digital".

                  .bg-color-white.box-shadow.p-3(x="85%" y="15%" numero="+")
                    h5 Asociación libre
                    p Permitir que la mente conecte ideas aparentemente, no relacionadas. 
                    p #[b Ejemplo:] relacionar "tecnología" con "naturaleza" para crear productos sostenibles.

                  .bg-color-white.box-shadow.p-3(x="15%" y="84%" numero="+")
                    h5 Técnica SCAMPER
                    p Modificar un producto o idea existente mediante preguntas: 
                    p - Sustituir: ¿Qué componentes podrían reemplazarse? 
                    p - Adaptar: ¿Cómo podría ajustarse a otras necesidades? 
                    p - Revertir: ¿Qué pasa si se invierte el proceso?

                  .bg-color-white.box-shadow.p-3(x="90%" y="90%" numero="+")
                    h5 Mind Mapping
                    p Crear diagramas que conecten conceptos principales y secundarios.

      .bg-full-width.bg-fondo-7
        .p-4.p-md-5
          h2(data-aos="fade-left") Ejemplo práctico con IA: marca de café
          p(data-aos="fade-left").mb-4 Para una campaña de marketing, la IA podría:

          #Tarjetas1.div.row.justify-content-center.align-items-stretch
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/icon-5.svg"
                  alt=""
                  style="width: 90px"
                )
                h5.text-center.mb-2 Generar ideas iniciales
                p.mb-2.text-center Usar palabras claves como "café, energía, ritual".
                p.mb-0.text-center #[b Resultados:] "Café que cuenta historias", "Café que despierta tus sentidos".
            
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/icon-6.svg"
                  alt=""
                  style="width: 90px"
                )
                h5.text-center.mb-2 Expandir conceptos
                p.mb-0.text-center "Café que cuenta historias": desarrollar ideas como destacar el origen del grano o historias de los caficultores.
            
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/icon-7.svg"
                  alt=""
                  style="width: 90px"
                )
                h5.text-center.mb-2 Visualizar conexiones
                p.mb-0.text-center Crear un mapa mental que conecte temas como "sabor", "origen", y "experiencias".


      .bg-full-width.bg-color-4.mb-5
        .p-4.px-md-5

          .row.justify-content-center.align-items-center
            .col-lg-5
              figure.p-4
                img(src="@/assets/curso/tema3/3.svg").mx-auto
            .col-lg-6
              h4(data-aos="fade-left") Ejemplo práctico
              p(data-aos="fade-left") Consejos para aprovechar el #[em brainstorming]
              ol.lista-ol--cuadro(data-aos="fade-up")
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Combine creatividad humana con IA: la IA facilita el proceso, pero la creatividad humana aporta el toque emocional y personal.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Sea específico: cuanto más claras sean las instrucciones, mejores serán los resultados.
                li
                  .lista-ol--cuadro__vineta
                    span 3
                  | Explore sin restricciones: permítase experimentar con ideas inusuales.
                li
                  .lista-ol--cuadro__vineta
                    span 4
                  | Documente todo: las ideas que hoy parecen irrelevantes podrían ser útiles en el futuro.

      p(data-aos="fade-left").mb-5 La creatividad y el uso estratégico de técnicas como el brainstorming con apoyo de la IA, permiten desarrollar soluciones originales e impactantes. Esta combinación maximiza el potencial creativo, optimizando el proceso para lograr resultados innovadores.


      .bg-full-width.bg-color-5.mb-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Mapas mentales: visualizar las ideas
              p.mb-4(data-aos="fade-right") En el documento se presentan los mapas mentales como herramientas esenciales para estructurar y visualizar ideas, destacando su capacidad para fomentar la creatividad, resolver problemas y mejorar la productividad. Se explica el proceso para crearlos, desde la elección de un tema central, hasta la adición de colores e imágenes, para mayor claridad.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Mapas mentales: visualizar las ideas

            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/7.png', alt='')


      h2(data-aos="fade-left") SCAMPER: modifica, combina, adapta y crea

      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
        .col-lg-7
          p(data-aos="fade-left") SCAMPER es una técnica estructurada que le permitirá transformar ideas existentes en conceptos totalmente nuevos. Es como un juego de construcción, donde puede modificar, combinar y adaptar elementos para crear algo completamente original. 

          .bg-color-1.p-4(data-aos="fade-left")
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema3/icon-8.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 SCAMPER es una técnica estructurada que permite generar nuevas ideas a partir de un producto o servicio existente. Es un acrónimo que representa diferentes acciones:


      .row.justify-content-center.align-items-start.mb-5
        .col-lg-8
          .tarjeta.px-4.py-4(style="background-color: #E23E64;").mb-2(data-aos="fade-left")
            p.mb-0.text-white #[b Sustituir:]  ¿Qué puedo sustituir?
          .tarjeta.px-4.py-4(style="background-color: #AC59F1;").mb-2(data-aos="fade-left")
            p.mb-0.text-white #[b Combinar:]  ¿Qué puedo combinar?
          .tarjeta.px-4.py-4(style="background-color: #FD884D;").mb-2(data-aos="fade-left")
            p.mb-0.text-white #[b Adaptar:]  ¿Puedo adaptar algo de otra situación?
          .tarjeta.px-4.py-4(style="background-color: #A3F0F3;").mb-2(data-aos="fade-left")
            p.mb-0 #[b Modificar:]  ¿Qué puedo modificar o cambiar?
          .tarjeta.px-4.py-3(style="background-color: #598384;").mb-2(data-aos="fade-left")
            p.mb-0.text-white #[b Poner otro uso:]  ¿Para qué más puedo usarlo?
          .tarjeta.px-4.py-4(style="background-color: #5E3084;").mb-2(data-aos="fade-left")
            p.mb-0.text-white #[b Eliminar:]  ¿Qué puedo eliminar?
          .tarjeta.px-4.py-3(style="background-color: #7B2136;").mb-2(data-aos="fade-left")
            p.mb-0.text-white #[b Reorganizar:] ¿Puedo reorganizarlo?
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in").mb-4.mb-lg-0.d-none.d-lg-block

      h2(data-aos="fade-left") ¿Cómo funciona SCAMPER?
      
      p(data-aos="fade-left") Ejemplo:

      p(data-aos="fade-left") Para una bicicleta, se podría aplicar SCAMPER de la siguiente manera:


      .bg-full-width.bg-fondo-8
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/6.png', alt='')
            .col-lg-8

              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/icon-9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Sustituir
                  p.text-center Remplazar las ruedas por orugas.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/icon-10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Combinar
                  p.text-center Combinar una bicicleta con un patinete eléctrico.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/icon-11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Adaptar
                  p.text-center Adaptar una bicicleta para llevar una pequeña carga.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/icon-12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Modificar
                  p.text-center Añadir un motor eléctrico a una bicicleta tradicional.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/icon-13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Poner otro uso
                  p.text-center Utilizar el marco de una bicicleta para construir un mueble.

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-1.png")
              .col-lg-7.order-lg-1
                h4 Identifique el objeto de su innovación
                p Puede ser un producto, un servicio, un proceso o incluso una idea abstracta.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-2.png")
              .col-lg-7.order-lg-1
                h4 Aplique cada letra de SCAMPER
                p Hágase las preguntas correspondientes a cada letra y anote todas las ideas que se le ocurran, sin juzgarlas.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-3.png")
              .col-lg-7.order-lg-1
                h4 Combine ideas
                p Una vez que tenga una lista de ideas, puede combinarlas para crear conceptos aún más innovadores.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/slider-4.png")
              .col-lg-7.order-lg-1
                h4 Seleccione las mejores ideas
                p Evalúe las ideas generadas y seleccione las que tienen más potencial.


      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12

          .bg-color-white.shadow-soft.py-4.px-lg-5
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/bg-icono-pdf.svg", style="width: 90px;")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Aplicaciones de SCAMPER
                    p En el documento, se destacan las aplicaciones del método SCAMPER como herramienta para fomentar la innovación y la creatividad en diferentes contextos empresariales.
                  .col-sm-auto
                    a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-arrow-right

      h2(data-aos="fade-left") Utilizando la IA para potenciar la técnica SCAMPER

      p(data-aos="fade-left") La Inteligencia Artificial (IA), puede ser un aliado poderoso al aplicar la técnica SCAMPER, ampliando significativamente la capacidad para generar ideas innovadoras. A continuación, se presentan algunas estrategias para combinar ambas herramientas:
        

      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/7.png", alt="").mb-4.mb-lg-0
        .col-lg-8

          AcordionA(tipo="b")
            .div(titulo="Generación de ideas iniciales")
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Palabras claves:] introduzca palabras claves relacionadas con su producto o servicio, en un modelo como ChatGPT.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] para innovar en el sector de la moda, use palabras claves como "ropa sostenible, tecnología, juventud". La IA generará ideas que puede utilizar como punto de partida para aplicar SCAMPER. 
                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Analogías:] solicite analogías entre su producto o servicio y conceptos diferentes. 
                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] si trabaja en un nuevo tipo de automóvil, podría pedir una analogía con un #[em smartphone].

            .div(titulo="Exploración de cada letra de SCAMPER")
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Generación de opciones:] solicite a la IA que sugiera múltiples opciones para cada letra de SCAMPER.
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] para la "S" de Sustituir, pregunte: "¿Qué materiales innovadores podrían sustituir el cuero en la fabricación de bolsos?"
                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Combinaciones creativas:] pida combinaciones de conceptos dispares.
                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Ejemplo:] si trabaja en diseño de interiores, pida combinar el estilo industrial, con elementos de la naturaleza.

            .div(titulo="Evaluación de ideas")
              ul.lista-ul--color
                li.mb-2
                  i.fas.fa-check-circle
                  | #[b Clasificación:] use la IA para clasificar ideas, según criterios como viabilidad, originalidad o impacto.
                li.mb-0
                  i.fas.fa-check-circle
                  | #[b Priorización:] solicite a la IA que analice datos para identificar y priorizar las ideas con mayor potencial.



      p(data-aos="fade-left") Las herramientas de IA útiles son:

      .bg-full-width.bg-color-2.mb-5
        .p-4.px-md-5
          p #[b Modelos de lenguaje:] ChatGPT, GPT-4, Claude, entre otros.
          p #[b Plataformas de generación de ideas y herramientas de visualización:] algunas plataformas ofrecen herramientas específicas para la aplicación de técnicas como SCAMPER, cómo: Miro, Lucidspark, MindMeister Y Coggle.



      .row.align-items-start.mb-5

        .col-lg-8

          p(data-aos="fade-left") Beneficios de combinar SCAMPER con IA:

          AcordionA(tipo="b")
            .div(titulo="Aumento de la creatividad")
              p La IA puede generar ideas que nunca habría considerado.

            .div(titulo="Mayor eficiencia")
              p La IA puede acelerar el proceso de generación de ideas.

            .div(titulo="Mayor profundidad en el análisis")
              p La IA puede analizar grandes cantidades de datos y encontrar patrones que los humanos podrían pasar por alto.

            .div(titulo="Reducción del sesgo")
              p Al utilizar algoritmos, la IA puede ayudar a reducir los sesgos cognitivos que pueden limitar la creatividad.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/8.png", alt="").mb-4.mb-lg-0


      .bg-full-width.bg-color-7.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/icon-14.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 #[b Recuerde:] la IA es una herramienta que complementa la creatividad humana, no la reemplaza. Es importante utilizarla de manera estratégica y combinar sus capacidades con su propio juicio y experiencia.


      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12

          .bg-color-white.shadow-soft.py-4.px-lg-5
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/bg-icono-pdf.svg", style="width: 90px;")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Otras técnicas para estimular la creatividad
                    p En el documento se detallan #[b técnicas innovadoras para estimular la creatividad], como el método 6-3-5, los seis sombreros para pensar, y el uso de analogías, integrándolas con herramientas como SCAMPER e inteligencia artificial. 
                  .col-sm-auto
                    a.boton.color-primario.texto-blanco(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-arrow-right

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/273090" target="_blank" rel="noopener noreferrer") Biasca, R. E. (2024). Resultados: la acción de las ideas a los hechos concretos (2 ed.). Ciudad Educativa. 

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://monografica.es/3-trucos-en-creatividad-publicitaria/" target="_blank" rel="noopener noreferrer") Adriana Hernández (2020). 3 Trucos en creatividad publicitaria para empoderar tu marca.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://open.spotify.com/playlist/4qTxF5Fuj4UFnY7au7TKDj?si=AqCMj7ylQcK4Ez3mAbgdAA" target="_blank" rel="noopener noreferrer") Bexega. (2021). El arte de la seducción (pódcast). Spotify.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Técnicas para la generación de ideas',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Qué elemento es considerado el "combustible de la creatividad"?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Evaluación',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Inspiración',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Implementación',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ideación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'En el SCAMPER, ¿qué técnica se refiere a modificar una idea?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Adaptar',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Combinar',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Sustituir',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Eliminar',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué técnica creativa fomenta la generación de ideas mediante preguntas estructuradas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'SCAMPER',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Brainstorming',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Evaluación',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Implementación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'En la etapa de implementación, ¿qué actividad es más común?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Validar conceptos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Prototipar ideas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Inspirarse en tendencias',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Crear mapas mentales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'En un briefing, ¿qué elemento asegura que el equipo creativo entienda el tono a transmitir?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Presupuesto',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Público objetivo',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Tono del mensaje',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Competencia',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
