# Landing page animata con Next.js

Questa cartella contiene i **sorgenti** della landing page (non un progetto completo):
si copiano dentro un progetto Next.js appena creato.

> Nota: questi file sono stati scritti ma **non ancora provati con una build**, perché
> nell'ambiente in cui sono stati creati non era possibile installare i pacchetti npm.
> Se al primo avvio compare un errore, incollalo nella chat e lo sistemiamo.

## 1. Requisiti

- Node.js 20 o superiore (https://nodejs.org)
- Un editor di codice, ad esempio VS Code

## 2. Creare il progetto

Nel terminale:

```bash
npx create-next-app@latest landing --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd landing
npm install gsap lenis
```

Se create-next-app fa domande, accetta i valori proposti.

## 3. Copiare i file

Copia dentro il progetto `landing`, **sovrascrivendo** quando richiesto:

- `src/app/` (page.tsx, layout.tsx, globals.css)
- `src/components/`
- `src/lib/`
- `src/content.ts`
- `public/videos/` (cartella per i tuoi video)

## 4. Avviare

```bash
npm run dev
```

Apri http://localhost:3000. Ogni modifica salvata si vede subito nel browser.

## 5. Come è organizzato (per imparare)

| File | A cosa serve |
| --- | --- |
| `src/content.ts` | **Tutti i testi**. Inizia modificando questo file. |
| `src/app/page.tsx` | Elenco ordinato delle sezioni della pagina |
| `src/app/layout.tsx` | Struttura HTML, font, titolo e descrizione per Google |
| `src/app/globals.css` | Colori del tema (variabili `--bg`, `--accent`, ...) |
| `src/components/Hero.tsx` | Titolo con parola che ruota (animazione GSAP) |
| `src/components/Steps.tsx` | Sezione che resta ferma e cambia passo con lo scroll |
| `src/components/Reveal.tsx` | Fa comparire gli elementi mentre scorri |
| `src/components/VideoCard.tsx` | Video che partono/si fermano quando sono visibili |
| `src/components/SmoothScroll.tsx` | Scroll morbido (Lenis) |
| `src/lib/gsap.ts` | Registrazione di GSAP e ScrollTrigger |

Due concetti utili di Next.js:

- **Server Component** (default): componenti senza interattività, veloci e ottimi per la SEO
  (es. `Header`, `Faq`, `Footer`).
- **Client Component** (`"use client"` in prima riga): componenti che girano nel browser,
  necessari per animazioni, `useEffect`, `window` (es. `Hero`, `Steps`).

## 6. Aggiungere i video

Metti i file in `public/videos/` con questi nomi (o cambia i percorsi in `content.ts`):

- `app-1.mp4` ... `app-4.mp4` (i video)
- `still-1.png` ... `still-4.png` (immagine mostrata prima che il video parta)

Per comprimerli bene per il web (serve FFmpeg):

```bash
ffmpeg -i originale.mov -vcodec libx264 -crf 28 -preset slow -an -movflags +faststart app-1.mp4
```

`-an` toglie l'audio (i video sono muti) e `+faststart` li fa partire più in fretta.

## 7. Prima di pubblicare

- Sostituisci nome, email, telefono, P. IVA e link di prenotazione (`content.ts`, `Footer.tsx`).
- Crea le pagine `/privacy-policy`, `/termini-di-servizio`, `/cookie-policy`
  (in Italia sono richieste; servizi come Iubenda le generano).
- Se usi analytics o pixel, aggiungi un banner cookie conforme al GDPR.
- Pubblicazione: carica il progetto su GitHub e importalo su https://vercel.com
  (gratuito per iniziare), poi collega il tuo dominio.
