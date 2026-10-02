// =====================================================================
// CONTENUTI DELLA LANDING PAGE
// Tutti i testi sono qui: modifica questo file per cambiare la pagina
// senza toccare i componenti. Sono testi segnaposto da sostituire.
// =====================================================================

export const brand = {
  name: "Kredo",
  email: "info@kredo.it",
  phone: "+39 000 000 0000",
  // Link per prenotare una call (Cal.com, Calendly, ecc.)
  bookingUrl: "https://cal.com/tuo-account/30min",
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
};

export const hero = {
  // La parola finale ruota tra queste (la prima viene ripetuta in automatico)
  titleStart: "Diamo alla tua azienda",
  rotatingWords: ["visibilità", "presenza", "social proof"],
  subtitle:
    "Soluzioni su misura che portano la tua azienda sotto gli occhi di tutti.",
  cta: "Prenota una call gratuita",
};

export const problem = {
  headline: "In molti stanno cercando proprio te, ma non ti troveranno mai.",
  subheadline: "Non è un problema di servizio. È un problema di presenza.",
  problemTitle: "Problema",
  problems: [
    "Sito web assente",
    "Una SEO che non funziona",
    "Sito datato e lento",
    "Domini e hosting poco affidabili",
  ],
  solutionTitle: "Soluzione",
  solution:
    "Una soluzione su misura che garantisce visibilità, SEO, conversione dei clienti, e chiarezza per chi ti cerca.",
  integrationsTitle: "Ci integriamo con",
  integrations: ["Gestionali", "Email", "Excel / Google Sheet", "CRM", "Documenti", "WhatsApp"],
};

export const results = [
  {
    title: "L'azienda sotto gli occhi di tutti",
    text: "Ottieni la visibiltà che meriti a 360°.",
  },
  {
    title: "I clienti arrivano da soli",
    text: "Chi ha bisogno di te trova il modo di raggiungerti.",
  },
  {
    title: "Zero fraintendimenti, zero errori",
    text: "Chiarezza e precisione in ogni interazione.",
  },
  {
    title: "Più tempo per ciò che conta",
    text: "I clienti arrivano da soli.",
  },
];

export const steps = {
  title: "Come lavoriamo",
  intro: "Quattro passaggi, dal primo incontro alla piattaforma che continua a migliorare.",
  items: [
    {
      title: "Analizziamo",
      text: "Ci sediamo con chi lavora ogni giorno per capire come dare visibilità alla tua azienda.",
    },
    {
      title: "Sviluppiamo",
      text: "Progettiamo e costruiamo una soluzione su misura per la tua azienda.",
    },
    {
      title: "Integriamo",
      text: "Colleghiamo la soluzione agli strumenti che usi ogni giorno, senza stravolgere i tuoi flussi.",
    },
    {
      title: "Miglioriamo",
      text: "Il lavoro non finisce alla consegna: ottimizziamo la piattaforma sui dati d'uso reali.",
    },
  ],
};

// I file video vanno messi in /public/videos (es. app-1.mp4 e still-1.png)
export const caseStudies = {
  title: "Case study",
  items: [
    {
      title: "Riconcilia le fatture",
      text: "Prima nota e fatture abbinate in automatico.",
      video: "/videos/app-1.mp4",
      poster: "/videos/still-1.png",
    },
    {
      title: "Social media su misura",
      text: "Contenuti sempre in linea con il brand di ogni cliente.",
      video: "/videos/app-2.mp4",
      poster: "/videos/still-2.png",
    },
    {
      title: "Gestione strutture",
      text: "Ogni movimento tracciato, casa per casa.",
      video: "/videos/app-3.mp4",
      poster: "/videos/still-3.png",
    },
    {
      title: "Calendario intelligente",
      text: "Appuntamenti sincronizzati e promemoria automatici.",
      video: "/videos/app-4.mp4",
      poster: "/videos/still-4.png",
    },
  ],
};

export const faq = {
  title: "Domande frequenti",
  items: [
    {
      q: "Quanto tempo ci vuole per avere la prima soluzione?",
      a: "Dipende dal progetto: di solito una prima versione utilizzabile arriva in pochi giorni.",
    },
    {
      q: "I miei dati sono al sicuro?",
      a: "Sì. Trattiamo i dati nel rispetto del GDPR e concordiamo con te dove e come vengono conservati.",
    },
    {
      q: "Cosa succede dopo la consegna?",
      a: "Continuiamo a monitorare e migliorare la piattaforma sulla base dell'utilizzo reale.",
    },
  ],
};

export const cta = {
  title: "Quanti clienti ha perso oggi la tua azienda?",
  text: "Prenota una call gratuita di 30 minuti. Mappiamo insieme cosa costruiremo per te.",
  button: "Prenota una call gratuita",
};
