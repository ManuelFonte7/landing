// =====================================================================
// CONTENUTI DELLA LANDING PAGE
// Tutti i testi sono qui: modifica questo file per cambiare la pagina
// senza toccare i componenti. Sono testi segnaposto da sostituire.
// =====================================================================

export const brand = {
  name: "TuoBrand",
  email: "ciao@tuobrand.it",
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
  titleStart: "Rendiamo la tua azienda",
  rotatingWords: ["intelligente", "veloce", "efficiente"],
  subtitle:
    "Soluzioni su misura che collegano i tuoi strumenti e automatizzano il lavoro ripetitivo.",
  cta: "Prenota una call gratuita",
};

export const problem = {
  headline: "Il tuo team passa ore su attività che si potrebbero fare in secondi.",
  subheadline: "Non è un problema di persone. È un problema di infrastruttura.",
  problemTitle: "Problema",
  problems: [
    "Troppo lavoro fatto ancora a mano",
    "Processi scollegati tra loro",
    "Esecuzione lenta e macchinosa",
    "Strumenti che non ragionano",
  ],
  solutionTitle: "Soluzione",
  solution:
    "Un sistema su misura che collega i processi, li automatizza e li fa girare da soli. Ci integriamo con i sistemi che hai già, senza costringerti a cambiare tutto.",
  integrationsTitle: "Ci integriamo con",
  integrations: ["Gestionali", "Email", "Excel / Google Sheet", "CRM", "Documenti", "WhatsApp"],
};

export const results = [
  {
    title: "L'azienda diventa più smart",
    text: "I processi si parlano tra loro e girano da soli.",
  },
  {
    title: "Il team lavora meglio",
    text: "Meno operazioni ripetitive, più attenzione a ciò che dà valore.",
  },
  {
    title: "Zero errori manuali",
    text: "Niente dati persi, niente sviste da correggere dopo.",
  },
  {
    title: "Più tempo per ciò che conta",
    text: "Le ore recuperate tornano a far crescere l'azienda.",
  },
];

export const steps = {
  title: "Come lavoriamo",
  intro: "Quattro passaggi, dal primo incontro alla piattaforma che continua a migliorare.",
  items: [
    {
      title: "Analizziamo",
      text: "Ci sediamo con chi lavora ogni giorno per capire come funzionano davvero i tuoi processi e dove si perde più tempo.",
    },
    {
      title: "Sviluppiamo",
      text: "Progettiamo e costruiamo una soluzione su misura per i bisogni della tua azienda.",
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
      a: "Dipende dal progetto: di solito una prima versione utilizzabile arriva in poche settimane.",
    },
    {
      q: "Devo cambiare i programmi che uso già?",
      a: "No. Ci integriamo con i tuoi strumenti attuali, senza costringerti a cambiare tutto.",
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
  title: "Quante ore ha perso oggi la tua azienda?",
  text: "Prenota una call gratuita di 30 minuti. Mappiamo insieme cosa costruiremo per te.",
  button: "Prenota una call gratuita",
};
