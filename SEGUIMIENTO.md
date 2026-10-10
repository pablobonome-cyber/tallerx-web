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
- **Marca: escribir siempre `FUL-MAR`** (mayúsculas y guion medio), nunca "Fulmar". Pedido de la fábrica (09/10/2026).

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
- **Segunda PC** (desde 06/10/2026): repo clonado en `E:\Documentos\Proyectos\tallerx-web`, Git instalado.
  No se verificó si tiene Wamp. Antes de trabajar en cualquiera de las dos PCs: `git pull`; al terminar: `git push`.

## 4. Pendientes / ideas

- [x] **Recuperar dominio tallerxlp.com — RESUELTO 07/10/2026 (en Porkbun, vence 06/12/2027).** Estado (30/09/2026): activo,
      registrador Arsys/Nicline, DNS de Yell (ns01/ns02.yell.com.ar, ya no responden → por eso no anda).
      Paso 1: pedir a Yell/websguru código EPP + desbloqueo + confirmar titular (mensaje redactado el 30/09).
      Yell Argentina hoy es **gurú** (Soluciones Multimedia S.A., CUIT 30-65411876-7). Contacto:
      clientes@gurusoluciones.com.ar y clientes@gurusoluciones.com · WhatsApp +54 9 11 2314 3608 ·
      Tel. 011 6090-0100 / 0810-333-8080 · portal https://login.guruconecta.com/
      30/09/2026: se envió el pedido; gurú respondió que **están viendo el caso**.
      01/10/2026: gurú **envió el código EPP** (lo tiene el dueño; NO guardarlo en archivos). Dominio ya
      desbloqueado (RDAP sin clientTransferProhibited). Próximo: el dueño transfiere a Namecheap/Porkbun
      (recomendados), luego Vercel → Settings → Domains + DNS (A @ 76.76.21.21, CNAME www cname.vercel-dns.com)
      y quitar el `noindex` de vercel.json para el dominio propio (hoy solo aplica a *.vercel.app).
      01/10/2026: **transferencia iniciada a Porkbun** (porkbun.com). Tarda 1–7 días. Al completarse,
      el registrador en RDAP pasa a Porkbun → seguir con Vercel Domains + DNS en Porkbun.
      06/10/2026: RDAP sigue en `pending transfer` (registrador todavía Arsys/Nicline, DNS de Yell).
      El plazo de 5 días de Arsys vence el 06/10 ~19:30 h ARG; si el 07/10 a la tarde sigue igual,
      escribir al soporte de Porkbun.
      07/10/2026: **TRANSFERENCIA COMPLETA.** RDAP: registrador Porkbun LLC, vence **06/12/2027**,
      bloqueado contra transferencias. Los DNS siguen siendo los de Yell (muertos) → falta:
      (a) en Porkbun, volver a los nameservers por defecto de Porkbun; (b) en Vercel, Settings → Domains,
      agregar tallerxlp.com y www; (c) en Porkbun DNS, borrar registros de estacionamiento y cargar los
      que indique Vercel. Después: mail comercial@tallerxlp.com (hoy no funciona; opción: reenvío de Porkbun).
      07/10/2026: (a) HECHO — nameservers cambiados a los de Porkbun (curitiba/fortaleza/maceio/salvador.ns.porkbun.com),
      confirmado en RDAP. La zona DNS en Porkbun está vacía (0 registros). Faltan (b) y (c).
      07/10/2026: (b) y (c) HECHOS. Vercel: tallerxlp.com (308 → www) y www.tallerxlp.com (Production).
      Porkbun DNS: `A @ 216.198.79.1` y `CNAME www 71cfab6b7e28d8ae.vercel-dns-017.com`.
      **https://www.tallerxlp.com ONLINE con HTTPS** (verificado). El noindex solo aplica a *.vercel.app, así que
      el dominio propio ya es indexable; se agregó `<link rel="canonical">` a www.tallerxlp.com.
      07/10/2026: **correo activado** — reenvío gratuito de Porkbun: comercial@tallerxlp.com → Gmail del dueño.
      MX fwd1/fwd2.porkbun.com y SPF creados automáticamente. Es solo recepción (para responder "como"
      comercial@ haría falta casilla paga o configurar envío SMTP). Pendiente: Google Business / Search Console.
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

### 2026-10-05 — Separación en tres proyectos
- Sin cambios en el sitio. Se separó el trabajo en tres carpetas, cada una con su `CLAUDE.md`:
  `C:\Users\ADMIN\pagina tallerx` (web para clientes), `C:\Users\ADMIN\tallerx-diagnosticos`
  (fallas de autos, con `INDICE.md` y `casos/`) y `C:\Users\ADMIN\libre` (consultas sueltas).
- En la barra lateral de la app se crearon los grupos "Web para clientes", "Diagnósticos de autos" y "Libre".
- El caso del Gol Trend (velocímetro sin ABS, tablero 5U0920827N) quedó guardado en la carpeta de diagnósticos.

### 2026-10-06 — Sesión en la segunda PC
- Se instaló Git y se clonó el repo en `E:\Documentos\Proyectos\tallerx-web` (ver 3b). Sin cambios en el sitio.
- Se consultó el RDAP de tallerxlp.com: sigue en `pending transfer` hacia Porkbun (detalle en Pendientes).

### 2026-10-06 — Respaldo de proyectos y chats (PC principal)
- Sin cambios en el sitio. Se bajó el commit de la segunda PC y se resolvió el cruce en esta bitácora.
- Se armó `C:\Users\ADMIN\tallerx-respaldo` (repo git local): copia de Diagnósticos, Libre, Recetas,
  Receta Kimchi y los chats de Claude (`.claude\projects`). `respaldar.ps1` vuelve a copiar, hace commit y push.
  Destino: repo **privado** `pablobonome-cyber/tallerx-respaldo`. Los chats van sin revisar (pueden tener el código EPP).
- No se incluyó: `C:\wamp64\www` (credenciales de Mercado Pago), `Documents\Codex` y chats de Codex (~700 MB), firmware (MPLAB/CCS).

### 2026-10-07 — Dominio propio online y revisión general
- tallerxlp.com transferido a Porkbun, DNS apuntando a Vercel, **https://www.tallerxlp.com online** (detalle en Pendientes).
- Reenvío de correo comercial@tallerxlp.com → Gmail del dueño (Porkbun, gratis).
- Revisión completa del sitio publicado (celular 375 px y escritorio): sin imágenes rotas ni desbordes;
  WhatsApp, formulario de turnos, filtros, menú y videos OK.
- Arreglos: fotos de portada a ancho completo en tablet/celular; dirección en una línea en celular;
  etiquetas Open Graph (vista previa al compartir el link) y `canonical`.
- Observaciones sin resolver: tarjeta "Ariel 6 dígitos" sigue con "Foto próximamente"; "+10 años" sin confirmar;
  videos pesan 48 MB (comprimir con ffmpeg); el formulario deja elegir domingos; plan Hobby de Vercel no es
  para uso comercial (evaluar Cloudflare Pages / Netlify).
- Respaldo: se creó el repo privado `pablobonome-cyber/tallerx-respaldo` y se subió por primera vez
  (`respaldar.ps1`, 07/10 15:46, 163 archivos). Para actualizarlo: volver a correr `respaldar.ps1`.

### 2026-10-09 — Correcciones pedidas por FUL-MAR
- El dueño pasó el guion de la presentación del ZTX-PRO (PDF "Textos para publicidad") con más características:
  pantalla táctil alta resolución, importes hasta 7 dígitos, estados libre/ocupado/reservado, OBD-II + CAN BUS,
  Bluetooth, telemetría (velocidad, RPM, temperatura, combustible), Tango Driver, Taxi Plus (flotas), pago QR,
  comprobante digital, anuncio por voz, INMETRO Cert. 444/2026, fabricado en Argentina.
  Duda abierta: 
  si está homologado en Argentina además de INMETRO (la web solo dice lo del documento).
- Correcciones de la fábrica aplicadas: marca siempre **FUL-MAR**; título de la sección N° 1 →
  "Nosotros instalamos el primer Reloj Taxímetro ZTX-PRO en Argentina".
- Publicado (con OK del dueño): bloque ZTX-PRO ampliado con datos del guion de FUL-MAR y sección nueva
  `#ecosistema` (ZTX-PRO → Tango Driver → Taxi Plus + línea "para el pasajero"). Se quitó "sin sensor de
  velocidad" (no figura en material oficial); ahora dice "OBD-II · compatible con CAN BUS".
  ZTX-PRO: hasta 9 tarifas, importes hasta 7 dígitos, INMETRO Cert. 444/2026, fabricado en Argentina.
- **ffmpeg instalado** (con permiso del dueño) en `C:\Users\ADMIN\tools\ffmpeg\` (ffmpeg.exe y ffprobe.exe, build
  essentials de gyan.dev, sha256 verificado). Usarlo para cortar/comprimir videos.
- Video "ZTX-PRO Video presentación" de FUL-MAR (original 4K, 5:41, 1,5 GB, en Descargas del dueño): se recortó
  de 0:00 a 3:33,5 (pedido del dueño; en 3:33 empieza el capítulo "ZTX-PRO & Taxi Net Pro", que no va), 720p,
  27 MB → `video/ztx-pro-presentacion.mp4`, poster `img/ztx-pro-presentacion-poster.jpg`. Va en `#ecosistema`
  con controles (no autoplay). Comando: `ffmpeg -i ORIGINAL -t 213.53 -vf "scale=1280:720,fade=t=out:st=213.13:d=0.4"
  -af "afade=t=out:st=213.13:d=0.4" -c:v libx264 -crf 27 -c:a aac -b:a 96k -movflags +faststart SALIDA`.
- CSS/JS llevan `?v=...` en index.html: cambiar el valor cuando se toquen estilos o scripts.
- Ojo: la app abre sola una vista previa de index.html sin estilos (parece "rota"); el sitio real es www.tallerxlp.com.
