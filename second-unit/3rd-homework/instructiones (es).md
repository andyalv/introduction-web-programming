# Tareas
1. <strong style="font-size:16px;">Aplicación de Estilos: Diferentes Formas de CSS</strong>
    - **En línea:**
        - Cambia el color del texto del título (`<h1>`) dentro del `<header>` a azul usando estilos en línea.
    - **En el `<head>`:**
        - Agrega una etiqueta `<style>` en el `<head>` de index.html para:
        - Cambiar el fondo de la página (`<body>`) a un color gris claro.
        - Cambiar la fuente de todos los elementos `<p>` a Arial.
    - **Archivo .css externo:**
        - Enlaza el archivo styles.css en el `<head>` del index.html.
    - **Dentro de styles.css, define:**
        - Un tamaño de fuente de **18px** para todos los encabezados (`<h2>`, `<h3>`).
        - Un color de texto de **#333** (gris oscuro) para los elementos de texto en el `<main>`.

2. <strong style="font-size:16px;">Selectores Básicos y Colores</strong>
    - **Selector de clase:**
        - Asigna una clase llamada *.highlight* a un párrafo y define en styles.css que el texto de esa clase sea de color **rojo**.
    - **Selector de ID:**
        - Asigna un ID *#important-info* a uno de los artículos (`<article>`) y en styles.css cambia el color de fondo de ese artículo a **amarillo claro**.

3. <strong style="font-size:16px;">Pseudo-clases</strong>
    - **Pseudo-clases dinámicas:**
        - Usa *:hover* para cambiar el color del texto de los enlaces (`<a>`) a **verde** cuando el ratón pasa sobre ellos.
        - Usa *:active* para cambiar el color del texto del enlace a **naranja** cuando se hace clic.
        - Usa *:focus* para cambiar el borde de un campo de entrada (`<input>`) a **2px solid blue** cuando recibe el foco.
    - **Pseudo-clases estructurales:**
        - Utiliza :first-child para dar un margen superior de **20px** al primer párrafo de cada sección.
        - Utiliza :last-child para aplicar un color de fondo de **#f0f0f0** al último párrafo de cada sección.

4. <strong style="font-size:16px;">Selectores Combinados</strong>
    - **Selector descendiente:**
        - Usa el selector *section h2* para cambiar el color de los encabezados `<h2>` dentro de cualquier sección a **#0055cc**.
    - **Selector de hijo directo:**
        - Usa el selector *header > nav* para cambiar el fondo del menú de navegación a **#eaeaea**.
    - **Selector de hermano adyacente (+) y general (~):**
        - Usa *h2 + p* para cambiar el color del texto del párrafo que sigue inmediatamente a un encabezado `<h2>` a **#666**.
        - Usa *h2 ~ p* para establecer una fuente en cursiva para todos los párrafos que siguen a cualquier `<h2>` en la misma sección.

5. <strong style="font-size:16px;"> Cascada y Especificidad </strong>
    - Crea reglas CSS en styles.css que entren en conflicto para el color del texto de un párrafo (`<p>`):
        - Define el color como **verde** en una regla general *p*.
        - Cambia el color a **rojo** para *p.highlight*.
        - Utiliza *!important* para cambiar el color de todos los párrafos en el <aside> a **azul**.

6. <strong style="font-size:16px;"> Border, Width, Height en PX </strong> 
    - Establece un contenedor (`<div>`) con las siguientes propiedades:
        - Width: 400px
        - Height: 200px
        - Border: 2px solid #000

7. <strong style="font-size:16px;"> Agregar Multimedia y Estilizar con CSS </strong>
    - **Añadir una imagen y un video al HTML:**
        - Inserta una imagen en una de las secciones de contenido (`<section>`). Puedes usar una imagen de muestra de internet o una de tu elección.
        - Agrega un video en formato `<video>` dentro de la misma u otra sección. El video puede ser un archivo local o un enlace a un video en línea (por ejemplo, de YouTube).
    - **Estilizar la imagen con CSS:**
        - En styles.css, aplica un ancho de **300px** y un borde de **3px solid #333** a la imagen.
    - **Estilizar el video con CSS:**
        - Define un ancho de **500px** y una altura de **280px** para el video.