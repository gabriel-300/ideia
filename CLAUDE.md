# IDEIA — Especificaciones Técnicas para Implementación Visual

## CONTEXTO
Sitio web de IDEIA (ideia.com.ar). El objetivo es elevar la identidad visual SIN rediseñar
la arquitectura, SIN cambiar textos ni navegación, SIN reemplazar la identidad existente.

---

## 1. PALETA DE COLORES OFICIAL

Usar SIEMPRE estas variables CSS. No inventar variantes.

```css
:root {
  --azul-profundo:  #103B73;
  --azul-electrico: #42A5F5;
  --gris-grafito:   #2E3138;
  --blanco-humo:    #F7F8FA;

  /* Derivadas para uso interno — no son colores de marca, solo utilidades */
  --azul-profundo-10: rgba(16, 59, 115, 0.10);
  --azul-profundo-06: rgba(16, 59, 115, 0.06);
  --azul-electrico-15: rgba(66, 165, 245, 0.15);
  --azul-electrico-08: rgba(66, 165, 245, 0.08);
  --gris-grafito-30: rgba(46, 49, 56, 0.30);
}
```

---

## 2. TIPOGRAFÍAS OFICIALES

```css
/* Títulos, logotipo, piezas destacadas */
font-family: 'Sora', sans-serif;

/* Textos, párrafos, comunicaciones */
font-family: 'Inter', sans-serif;
```

Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## 3. EL ISOLOGOTIPO — ANATOMÍA EXACTA

El símbolo de IDEIA es un **triángulo de 3 nodos conectados por arcos**.
Geometría basada en el isotipo real:

```
Nodo superior (AZUL ELÉCTRICO #42A5F5):
  - círculo, el más grande
  - posición: centro-arriba (12 o'clock)

Nodo inferior-izquierdo (AZUL PROFUNDO #103B73):
  - círculo, tamaño medio
  - posición: 8 o'clock

Nodo inferior-derecho (GRIS GRAFITO #2E3138 — tono azul-gris):
  - círculo, tamaño medio
  - posición: 4 o'clock

Arco superior-izquierdo: color #103B73 (azul profundo)
Arco superior-derecho:   color #2E3138 (gris grafito) o tono intermedio
Arco inferior:           color más oscuro/gris entre los dos nodos inferiores

Relación de tamaño:
  - Nodo superior ≈ 1.4× el tamaño de los nodos inferiores
  - Los arcos tienen un strokeWidth ≈ igual al radio de los nodos inferiores
  - El conjunto cabe en un viewBox cuadrado
```

**IMPORTANTE**: El isologotipo completo NO debe repetirse como ícono decorativo en cada
sección. Ver sección 6 para el sistema de iconos derivado.

---

## 4. LOGOTIPO — TEXTO "IDEIA"

La E del logotipo tiene **dos líneas horizontales paralelas** en azul eléctrico
(no es una E tipográfica estándar — es la E con las barras reemplazadas por líneas
de la paleta).

Tipografía del wordmark: **Sora Bold** — mayúsculas, tracking amplio.

Tagline: **"INFLUIR POSITIVAMENTE PARA QUE LAS COSAS PASEN."**
- Tipografía: Inter o Sora, peso regular/light
- Mayúsculas
- Tracking: letter-spacing: 0.15em a 0.2em

---

## 5. PRINCIPIO GENERAL — QUÉ HACER Y QUÉ NO

### HACER
- Construir un sistema gráfico SVG **derivado** del ADN del símbolo:
  - nodos circulares (círculos simples)
  - conexiones curvas (arcos bezier)
  - estructuras triangulares suaves (3 puntos en disposición triangular)
  - patrones radiales (círculo central con elementos en órbita)
  - relaciones entre tres elementos
  - flujos de conexión entre nodos

### NO HACER
- No repetir el isologotipo completo como elemento decorativo en cada card o sección
- No usar fotografías de stock genéricas (personas sonriendo, oficinas genéricas)
- No cambiar la arquitectura del sitio
- No cambiar los textos
- No cambiar la navegación
- No inventar nuevos colores fuera de la paleta oficial

---

## 6. SISTEMA DE ICONOS SVG — FAMILIA IDEIA

Todos los iconos son SVG inline. Usan **solo colores de la paleta oficial**.
Cada uno es una variación del mismo ADN visual (nodos + arcos), NO el isologotipo completo.

### Especificaciones base comunes para todos los iconos:
```
viewBox: "0 0 48 48"
stroke-linecap: round
stroke-linejoin: round
fill: none (salvo los nodos que son círculos rellenos)
Nodos: círculos rellenos de r=4 a r=6
Arcos/líneas: strokeWidth entre 2 y 2.5
Colores de nodos: #42A5F5, #103B73, #2E3138 (según jerarquía)
```

### Gestión y Estrategia — "tres nodos con uno dominante"
```svg
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <!-- Nodo dominante, centro-arriba -->
  <circle cx="24" cy="10" r="6" fill="#42A5F5"/>
  <!-- Nodo secundario izquierda -->
  <circle cx="12" cy="34" r="4" fill="#103B73"/>
  <!-- Nodo secundario derecha -->
  <circle cx="36" cy="34" r="4" fill="#2E3138"/>
  <!-- Conexión izquierda -->
  <path d="M19 14 Q13 22 14 30" stroke="#103B73" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Conexión derecha -->
  <path d="M29 14 Q35 22 34 30" stroke="#2E3138" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Conexión base -->
  <path d="M16 34 Q24 40 32 34" stroke="#103B73" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.5"/>
</svg>
```

### Eficiencia Operacional — "flujo entre nodos"
```svg
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <!-- Nodo inicio -->
  <circle cx="8" cy="24" r="5" fill="#103B73"/>
  <!-- Nodo medio -->
  <circle cx="24" cy="14" r="4" fill="#42A5F5"/>
  <!-- Nodo destino -->
  <circle cx="40" cy="24" r="5" fill="#2E3138"/>
  <!-- Flujo curvo -->
  <path d="M13 24 Q18 10 20 14" stroke="#42A5F5" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M28 14 Q32 10 35 24" stroke="#103B73" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- Flecha dirección -->
  <path d="M33 22 L36 24 L33 26" stroke="#2E3138" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

### Información y Control — "red jerárquica de nodos"
```svg
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <!-- Nodo raíz -->
  <circle cx="24" cy="8" r="5" fill="#42A5F5"/>
  <!-- Nodos nivel 2 -->
  <circle cx="14" cy="24" r="4" fill="#103B73"/>
  <circle cx="34" cy="24" r="4" fill="#103B73"/>
  <!-- Nodos nivel 3 -->
  <circle cx="9"  cy="40" r="3" fill="#2E3138"/>
  <circle cx="24" cy="40" r="3" fill="#2E3138"/>
  <circle cx="39" cy="40" r="3" fill="#2E3138"/>
  <!-- Conexiones jerárquicas -->
  <line x1="24" y1="13" x2="16" y2="20" stroke="#103B73" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="24" y1="13" x2="32" y2="20" stroke="#103B73" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="14" y1="28" x2="10"  y2="37" stroke="#2E3138" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="14" y1="28" x2="23"  y2="37" stroke="#2E3138" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="34" y1="28" x2="38"  y2="37" stroke="#2E3138" stroke-width="1.5" stroke-linecap="round"/>
</svg>
```

### Inteligencia Artificial — "malla de conexiones"
```svg
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <!-- 6 nodos en hexágono -->
  <circle cx="24" cy="6"  r="3.5" fill="#42A5F5"/>
  <circle cx="40" cy="15" r="3"   fill="#103B73"/>
  <circle cx="40" cy="33" r="3"   fill="#103B73"/>
  <circle cx="24" cy="42" r="3.5" fill="#42A5F5"/>
  <circle cx="8"  cy="33" r="3"   fill="#2E3138"/>
  <circle cx="8"  cy="15" r="3"   fill="#2E3138"/>
  <!-- Nodo central -->
  <circle cx="24" cy="24" r="4" fill="#103B73"/>
  <!-- Conexiones a central -->
  <line x1="24" y1="9.5"  x2="24" y2="20" stroke="#42A5F5" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
  <line x1="37" y1="17"   x2="27" y2="21" stroke="#103B73" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
  <line x1="37" y1="31"   x2="27" y2="27" stroke="#103B73" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
  <line x1="24" y1="38.5" x2="24" y2="28" stroke="#42A5F5" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
  <line x1="11" y1="31"   x2="21" y2="27" stroke="#2E3138" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
  <line x1="11" y1="17"   x2="21" y2="21" stroke="#2E3138" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
</svg>
```

### Herramientas y Soluciones — "módulos conectados"
```svg
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <!-- Módulo 1 (rect redondeado) -->
  <rect x="4"  y="6"  width="16" height="12" rx="3" stroke="#103B73" stroke-width="2" fill="none"/>
  <!-- Módulo 2 -->
  <rect x="28" y="6"  width="16" height="12" rx="3" stroke="#42A5F5" stroke-width="2" fill="none"/>
  <!-- Módulo 3 -->
  <rect x="16" y="30" width="16" height="12" rx="3" stroke="#2E3138" stroke-width="2" fill="none"/>
  <!-- Nodos en esquinas de módulos -->
  <circle cx="12" cy="12" r="3" fill="#103B73"/>
  <circle cx="36" cy="12" r="3" fill="#42A5F5"/>
  <circle cx="24" cy="36" r="3" fill="#2E3138"/>
  <!-- Conexiones entre módulos -->
  <path d="M20 12 Q24 12 28 12" stroke="#42A5F5" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M12 18 Q14 30 18 30" stroke="#103B73" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M36 18 Q34 30 30 30" stroke="#2E3138" stroke-width="2" fill="none" stroke-linecap="round"/>
</svg>
```

---

## 7. PATRÓN RADIAL — HERO BACKGROUND

SVG de fondo para la sección Hero. Va DETRÁS del contenido, con baja opacidad.

```svg
<!-- Patrón radial Hero: nodos flotantes + arcos concéntricos -->
<!-- Colocar como background absoluto, z-index: 0, pointer-events: none -->
<svg viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg"
     style="position:absolute; top:0; right:0; width:55%; height:100%; opacity:0.12; pointer-events:none; overflow:hidden">

  <!-- Arcos concéntricos centrados en punto de fuga (aprox. 420, 220) -->
  <circle cx="420" cy="220" r="80"  fill="none" stroke="#42A5F5" stroke-width="1.5"/>
  <circle cx="420" cy="220" r="140" fill="none" stroke="#103B73" stroke-width="1"/>
  <circle cx="420" cy="220" r="200" fill="none" stroke="#103B73" stroke-width="0.8"/>
  <circle cx="420" cy="220" r="270" fill="none" stroke="#2E3138" stroke-width="0.6"/>

  <!-- Nodos flotantes en orbita -->
  <circle cx="420" cy="140" r="7" fill="#42A5F5"/>
  <circle cx="500" cy="260" r="5" fill="#103B73"/>
  <circle cx="340" cy="300" r="5" fill="#2E3138"/>
  <circle cx="360" cy="160" r="4" fill="#103B73"/>
  <circle cx="480" cy="180" r="4" fill="#42A5F5"/>
  <circle cx="310" cy="220" r="3" fill="#2E3138"/>
  <circle cx="450" cy="340" r="3" fill="#103B73"/>

  <!-- Conexiones entre nodos flotantes -->
  <line x1="420" y1="140" x2="500" y2="260" stroke="#42A5F5" stroke-width="1" opacity="0.6"/>
  <line x1="500" y1="260" x2="340" y2="300" stroke="#103B73" stroke-width="1" opacity="0.6"/>
  <line x1="340" y1="300" x2="420" y2="140" stroke="#103B73" stroke-width="0.8" opacity="0.4"/>
  <line x1="360" y1="160" x2="480" y2="180" stroke="#42A5F5" stroke-width="0.8" opacity="0.5"/>
</svg>
```

---

## 8. PATRONES DE FONDO — SECCIONES GENERALES

Para secciones con fondo blanco-humo o blanco que quedan "vacías", agregar este patrón
SVG de puntos/nodos como textura de fondo muy sutil:

```css
/* Opción A: patrón de puntos radiales como background-image CSS */
.section-with-pattern {
  background-image: radial-gradient(circle, rgba(66,165,245,0.12) 1.5px, transparent 1.5px);
  background-size: 28px 28px;
}

/* Opción B: para secciones oscuras (fondo #103B73) */
.section-dark-pattern {
  background-color: #103B73;
  background-image: radial-gradient(circle, rgba(66,165,245,0.15) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

---

## 9. ICONOS METODOLOGÍA — PROGRESIÓN VISUAL

La sección Metodología tiene 5/6 pasos. Cada paso tiene un ícono SVG que representa
**progresión** de "nodo simple" a "sistema completo":

### Paso 1 — Diagnosticar: nodo simple
```svg
<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="20" r="8" fill="#42A5F5"/>
</svg>
```

### Paso 2 — Diseñar: primeras conexiones
```svg
<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="14" r="5" fill="#42A5F5"/>
  <circle cx="12" cy="28" r="4" fill="#103B73"/>
  <line x1="17" y1="18" x2="13" y2="24" stroke="#103B73" stroke-width="2" stroke-linecap="round"/>
</svg>
```

### Paso 3 — Implementar: red completa (triángulo completo)
```svg
<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="8"  r="5" fill="#42A5F5"/>
  <circle cx="8"  cy="30" r="4" fill="#103B73"/>
  <circle cx="32" cy="30" r="4" fill="#2E3138"/>
  <line x1="17" y1="12" x2="10" y2="26" stroke="#103B73" stroke-width="2" stroke-linecap="round"/>
  <line x1="23" y1="12" x2="30" y2="26" stroke="#2E3138" stroke-width="2" stroke-linecap="round"/>
  <line x1="12" y1="30" x2="28" y2="30" stroke="#103B73" stroke-width="2" stroke-linecap="round"/>
</svg>
```

### Paso 4 — Transferir: conexiones abiertas (arcos sin cerrar)
```svg
<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="8"  r="5" fill="#42A5F5"/>
  <circle cx="8"  cy="30" r="4" fill="#103B73"/>
  <circle cx="32" cy="30" r="4" fill="#2E3138"/>
  <!-- Arcos abiertos hacia afuera -->
  <path d="M17 12 Q10 20 10 26" stroke="#103B73" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="3 2"/>
  <path d="M23 12 Q30 20 30 26" stroke="#2E3138" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="3 2"/>
  <!-- Flechas saliendo -->
  <path d="M6 30 L2 26" stroke="#42A5F5" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M34 30 L38 26" stroke="#42A5F5" stroke-width="1.5" stroke-linecap="round"/>
</svg>
```

### Paso 5 — Consolidar: sistema estable (triángulo con nodo central)
```svg
<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20" cy="8"  r="4" fill="#42A5F5"/>
  <circle cx="8"  cy="30" r="4" fill="#103B73"/>
  <circle cx="32" cy="30" r="4" fill="#2E3138"/>
  <!-- Nodo central = sistema estable -->
  <circle cx="20" cy="22" r="4" fill="#103B73"/>
  <line x1="17" y1="11" x2="21" y2="18" stroke="#42A5F5" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="11" y1="28" x2="17" y2="24" stroke="#103B73" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="29" y1="28" x2="23" y2="24" stroke="#2E3138" stroke-width="1.8" stroke-linecap="round"/>
</svg>
```

### Paso 6 — Medir y Consolidar (si existe): ciclo cerrado
```svg
<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
  <!-- Arco circular completo -->
  <circle cx="20" cy="20" r="13" fill="none" stroke="#103B73" stroke-width="2"/>
  <!-- 3 nodos en el arco -->
  <circle cx="20" cy="7"  r="4" fill="#42A5F5"/>
  <circle cx="9"  cy="28" r="3.5" fill="#103B73"/>
  <circle cx="31" cy="28" r="3.5" fill="#2E3138"/>
  <!-- Flecha de ciclo -->
  <path d="M31 25 Q34 20 30 15" stroke="#42A5F5" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  <path d="M29 14 L32 14 L31 17" stroke="#42A5F5" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

---

## 10. SECCIÓN NOSOTROS — TARJETAS DE VALORES

Las 4 tarjetas (Experiencia, Visión Integral, Compromiso Real, Enfoque Humano) NO deben
llevar el isologotipo completo. Usar en cambio un ícono derivado pequeño (32×32px) con
la misma familia visual.

Cada tarjeta: ícono SVG único (de la misma familia de nodos/arcos) + título + texto.

---

## 11. REGLAS DE USO DEL ISOLOGOTIPO COMPLETO

El isologotipo completo (isotipo + wordmark) aparece ÚNICAMENTE en:
1. **Header/Navbar** — una vez, versión horizontal
2. **Hero** — una vez, versión vertical o isotipo grande con patrón radial detrás
3. **Footer** — una vez

En el resto del sitio: usar el **sistema de iconos derivados** (sección 6 de este doc).
Nunca como decoración repetida en cards, bullets, o fondos.

---

## 12. IMÁGENES PARA CASOS DE ÉXITO

No usar fotos de personas sonriendo ni oficinas. Usar imágenes conceptuales con tonos
que respeten la paleta IDEIA (azules, grises oscuros).

Por categoría:
- **Transporte**: mapas de rutas, redes de nodos geográficos, vistas aéreas de autopistas
- **Logística**: centros de distribución vistos desde arriba, flujos operativos diagramados
- **Construcción**: renders arquitectónicos, planos técnicos, estructuras metálicas
- **Seguridad**: interfaces de monitoreo, capas de datos, pantallas de control

Todas en tonos oscuros o tratadas con overlay de color `rgba(16,59,115,0.4)` para
mantener coherencia con la paleta.

---

## RESUMEN DE LO QUE NO CAMBIAR

- Estructura HTML/JSX del sitio
- Textos de todas las secciones
- Navegación y links
- Layout general de cada sección
- Paleta de colores (solo usar las 4 oficiales)
- Tipografías (solo Sora e Inter)
