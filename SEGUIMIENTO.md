# Taller X — Seguimiento del proyecto web

> Archivo vivo. Cualquier chat/persona que continúe el proyecto: **leer esto primero** y
> **actualizar la bitácora al final de cada sesión**.

## 1. El negocio

**Taller X** — taller de electrónica del automotor en **La Plata** (Buenos Aires, Argentina).

| Dato | Valor |
|---|---|
| Dirección | Diagonal 74 N° 3370 1/2 e/ 69 y 70, La Plata (escribirla así) (mapa: -34.949416, -57.952902) |
| WhatsApp | 221 463-9472 → `5492214639472` (en `js/main.js`, constante `WA_NUMBER`) |
| Teléfono fijo | (0221) 451-1753 |
| Email | comercial@tallerxlp.com |
| Horario | Lun a vie 9:30 a 18:30 h · Sábados 9:30 a 15:30 h |
| Instagram | https://www.instagram.com/tallerx_lp/ |
| Facebook | https://www.facebook.com/profile.php?id=100063624190880 |
| Dominio anterior | tallerxlp.com (caído; contenido recuperado de web.archive.org) |

**Servicios:** relojes taxímetro (venta, instalación, programación de todas las marcas,
reparación, sensores de asiento) · tacógrafos y GPS/AVL · programación/reparación de ECU e
inyección electrónica · lubricentro · llaves codificadas y cerrajería (auto y hogar).

**Productos publicados en el catálogo:**
- Fulmar **ZTX-PRO** (NOVEDAD destacada) — táctil, OBD2 sin sensor, app de monitoreo, **hasta 9 tarifas** (dato del dueño; no poner "2 tarifas"), reportes.
- Fulmar **Tango XP** — 6 dígitos, 6 tarifas, CAN Bus, GPS, impresora (foto oficial sacada del folleto PDF de Ful-Mar).
- Ariel Tax Milenio · Nervex Microprinter Serie II · GP Digi Tax Printer (taxímetros)
- Tacógrafos: **Fulmar FMD-1000** (lo instalan; foto de fábrica) y Digi Tac RPM II.

**Marcas prioritarias en la web: Fulmar y Ariel** (Nervex y GP quedan solo en el catálogo).

**Logro destacado:** Taller X instaló el **primer Fulmar ZTX-PRO de La Plata, de la provincia y de
Argentina** (fotos del 27/09/2026). Tiene su propia sección en la web (`#primer-ztx`).

**NO publicar (decisión del dueño):** Centinela C66, Digi Tac Evolution (nunca salió a la venta).

## 2. Stack y archivos

Sitio **estático** (HTML + CSS + JS puro, sin build, sin backend todavía).

```
index.html          Página única (secciones: hero, novedad ZTX-PRO, servicios, productos, turnos, contacto)
css/styles.css      Estilos. Tokens de color en :root (naranja #e9a23b + negro #16181c)
js/main.js          WhatsApp (data-wa), menú mobile, filtro de productos, form de turnos,
                    animación del display "taxímetro" del hero, video ZTX-PRO
img/                Logo y fotos de productos (img/_original = descargas originales, sin usar)
video/fulmar-ztx-pro.mp4          Video promo de Fulmar (vertical 1080x1920, 38 s, 34 MB)
video/ztx-primer-instalado.mp4    Demo real del primer ZTX-PRO instalado (474x850, 62 s, 14 MB)
```

Videos: todo `<div class="reel">` con `<video>` + botón `.reel__sound` funciona solo
(autoplay silenciado al verse, botón de sonido, `data-skip` opcional). Ver `js/main.js`.

```
```

**Convenciones**
- Cualquier elemento con `data-wa="texto"` se convierte en link a WhatsApp con ese mensaje.
- El formulario de turnos **no guarda nada**: arma el mensaje y abre WhatsApp.
- Fuentes Google: Barlow Condensed (títulos), Barlow (texto), Share Tech Mono (display LED).
- Idioma: español rioplatense (voseo: "pedí", "contanos").

## 3. Repositorio y publicación

- Git local en la carpeta del proyecto, rama `main`.
- GitHub (privado): https://github.com/pablobonome-cyber/tallerx-web
- Publicación temporal: **Vercel** (plan Hobby, importando el repo). Cada `git push` a `main` republica solo.
  - `.vercelignore` excluye SEGUIMIENTO.md y CLAUDE.md de la web publicada.
  - `vercel.json` pone `X-Robots-Tag: noindex` en *.vercel.app (que Google no la indexe) y cache para img/video.
  - Ojo: Hobby es para uso no comercial → para el sitio definitivo evaluar Cloudflare Pages / Netlify.

## 3b. Entorno local

- El dueño usa **WampServer** (Apache en puerto 80, PHP/MySQL disponibles).
- `C:\wamp64\www` tiene otros proyectos (puente Mercado Pago) → **no tocar**.
- No hay Node ni Python instalados. Para previsualizar sin Wamp se puede abrir `index.html`
  directamente o usar un servidor temporal en otro puerto (no 80).
- Pendiente decidir: copiar el sitio a `C:\wamp64\www\tallerx` o crear un alias en Wamp.

## 4. Pendientes / ideas

- [ ] **Recuperar dominio tallerxlp.com — URGENTE, vence 06/12/2026.** Estado (30/09/2026): activo,
      registrador Arsys/Nicline, DNS de Yell (ns01/ns02.yell.com.ar, ya no responden → por eso no anda).
      Paso 1: pedir a Yell/websguru código EPP + desbloqueo + confirmar titular (mensaje redactado el 30/09).
      Yell Argentina hoy es **gurú** (Soluciones Multimedia S.A., CUIT 30-65411876-7). Contacto:
      clientes@gurusoluciones.com.ar y clientes@gurusoluciones.com · WhatsApp +54 9 11 2314 3608 ·
      Tel. 011 6090-0100 / 0810-333-8080 · portal https://login.guruconecta.com/
      30/09/2026: se envió el pedido; gurú respondió que **están viendo el caso**. Esperando código EPP.
      Paso 2: transferir a registrador propio y apuntar DNS al hosting nuevo.
- [ ] Elegir hosting y publicar el sitio.
- [ ] Edición de video real (cortes, audio, compresión) — necesita ffmpeg (no instalado).
- [ ] **Comprimir el video** (34 MB es pesado para celulares; ideal < 8 MB, 720p) o subirlo a YouTube/Instagram e incrustarlo.
- [ ] Ariel de 6 dígitos: no figura en relojesariel.com.ar (solo Milenio, Bit y tacógrafo Ariel Tac). Falta foto/nombre.
- [x] Foto del FMD-1000 (imagen de fábrica que pasó el dueño, `img/fulmar-fmd-1000.webp`).
- [ ] Fotos propias: frente del taller, lubricentro, llaves, trabajos realizados.
- [ ] Confirmar si es distribuidor oficial de alguna marca (agregar leyenda/logos con autorización).
- [ ] Confirmar la cifra "+10 años" del hero.
- [ ] Actualizar Google Business Profile con horarios y web nueva.
- [ ] Fase 2 (PHP + MySQL con Wamp): base de clientes taxistas + aviso de cambio de tarifa;
      consulta de estado de reparación por patente; panel de turnos.

## 5. Bitácora

### 2026-09-29/30 — Sesión 1 (primera versión)
- Se recuperó el contenido del sitio anterior desde web.archive.org (textos, logo, fotos, contactos).
- Se creó el sitio completo: hero con display animado tipo taxímetro, bloque novedad ZTX-PRO,
  6 tarjetas de servicios con WhatsApp precargado, catálogo filtrable, formulario de turnos → WhatsApp,
  contacto con mapa, botón flotante de WhatsApp. Responsive (probado escritorio y ~630 px).
- Correcciones del dueño: horario real; se quitaron Centinela C66 y Digi Tac Evolution.
- Se agregó el video promo de Fulmar (autoplay silenciado al verse en pantalla, botón de sonido)
  y un cuadro del video como foto del ZTX-PRO (`img/fulmar-ztx-pro.jpg`, poster `img/fulmar-ztx-pro-poster.jpg`).
- El video trae una placa (seg. 28–33) con fecha/lugar de la presentación en fábrica (8 de octubre 16 h,
  Av. Eva Perón 5327, Mataderos). El dueño pidió **sacarla y dejar el cierre**. Solución provisoria:
  `data-skip="27.7-33.1"` en el `<video>` + código en `js/main.js` que saltea ese tramo.
  Requiere un servidor con soporte de rangos (Apache/Wamp y cualquier hosting lo tienen).
  Cuando se edite el video de verdad (ffmpeg), quitar el `data-skip`.
- Nueva sección "N° 1 del país": 2 fotos (libre / ocupado) + video demo del primer ZTX-PRO instalado,
  botón "Quiero el mío" a WhatsApp. El código de video se generalizó para varios `.reel`.
- Portada: la foto del Nervex se reemplazó por fotos rotativas (cada 4 s) de **Fulmar y Ariel**
  (pedido del dueño: priorizar esas marcas). Con "reducir movimiento" rotan igual, cada 6 s.
- Catálogo: tarjeta "Ariel Tax · Reloj de 6 dígitos" (falta foto y nombre exacto del modelo).
- Se agregó el tacógrafo Fulmar FMD-1000 al catálogo, a la tarjeta de servicios y al formulario.
- El dueño va a pasar **más videos** para recortar partes y dejarlos sin audio o con un audio como el de fábrica.
