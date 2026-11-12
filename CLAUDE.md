# IDEIA · ideia.com.ar · Instrucciones para Claude

## Regla principal
Este sitio está TERMINADO y APROBADO. Tu trabajo es PUBLICARLO tal cual, no rehacerlo.

- NO reescribas, reorganices, "mejores", modernices ni optimices ningún archivo.
- NO cambies textos, colores, tipografías, tamaños, espaciados, imágenes, íconos ni el orden de las secciones.
- NO conviertas el sitio a otro framework (React, Next, Astro, WordPress, Tailwind, etc.).
- NO agregues librerías, componentes, animaciones, secciones ni páginas.
- NO regeneres ni recomprimas imágenes. NO renombres archivos ni carpetas.
- NO "arregles" nada que te parezca un error: consultá primero con Damián.

Si una tarea parece requerir cambiar algo de lo anterior, frená y preguntá.

## Lo único que se puede tocar
1. `assets/app.js`, línea `var WHATSAPP = '';` → poner el número en formato internacional
   sin + ni espacios (ej. '5493764123456'). Nada más de ese archivo.
2. Configuración del hosting (dominio, HTTPS, redirecciones). No toca los archivos del sitio.

## Qué es
HTML estático, sin build. Se sube la carpeta completa a la raíz del hosting.

  index.html          Inicio
  comercios.html      Comercios y puntos de venta (Mostrador)
  alimentos.html      Gastronomía e industria alimenticia (Planta, Mostrador, Pedido)
  construccion.html   Construcción y proyectos (Obra, Cotiza)
  servicios.html      Servicios y operaciones (Flujo)
  assets/styles.css   Sistema de diseño
  assets/app.js       Menú móvil, pestañas, botones de WhatsApp, copiar mail
  assets/fonts/       Montserrat (respaldo de Google Fonts)
  img/                Fotos WebP y logos de clientes

## Verificación obligatoria antes y después de publicar
Ejecutá `sh verificar.sh` en esta carpeta. Tiene que decir "OK" en todos los archivos.
- `assets/app.js` puede fallar SOLO por el número de WhatsApp. Cualquier otro archivo que
  falle significa que algo se modificó: restauralo desde el zip original.
- Después de publicar, abrí el sitio en una computadora y en un celular y compará con las
  capturas de la carpeta `referencia/`. Tienen que verse iguales.

## Mantenimiento futuro
Los cambios de diseño o contenido los hace Damián y entrega un zip nuevo.
No edites el HTML a mano para cambios de contenido.
