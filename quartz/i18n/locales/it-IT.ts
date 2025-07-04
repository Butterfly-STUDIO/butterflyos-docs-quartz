import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Senza titolo",
    description: "Nessuna descrizione",
  },
  components: {
    callout: {
      note: "Nota",
      abstract: "Astratto",
      info: "Info",
      todo: "Da fare",
      tip: "Consiglio",
      success: "Completato",
      question: "Domanda",
      warning: "Attenzione",
      failure: "Errore",
      danger: "Pericolo",
      bug: "Bug",
      example: "Esempio",
      quote: "Citazione",
    },
    backlinks: {
      title: "Link entranti",
      noBacklinksFound: "Nessun link entrante",
    },
    themeToggle: {
      lightMode: "Tema chiaro",
      darkMode: "Tema scuro",
    },
    readerMode: {
      title: "Modalità lettura",
    },
    explorer: {
      title: "Argomenti",
    },
    footer: {
      createdWith: "Creato con",
    },
    graph: {
      title: "Vista grafico",
    },
    recentNotes: {
      title: "Note recenti",
      seeRemainingMore: ({ remaining }) => `Vedi ${remaining} altro →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transclusione di ${targetSlug}`,
      linkToOriginal: "Link all'originale",
    },
    search: {
      title: "Cerca",
      searchBarPlaceholder: "Che cosa vuoi sapere?",
    },
    tableOfContents: {
      title: "In questa pagina",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} minuti di lettura`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Note recenti",
      lastFewNotes: ({ count }) => `Ultime ${count} note`,
    },
    error: {
      title: "Non trovato",
      notFound: "Abbiamo cercato questa pagina ovunque... ma non vi era traccia. Forse è stata cancellata, o magari è privata... . In ogni caso, meglio",
      home: "tornare alla pagina iniziale",
    },
    folderContent: {
      folder: "Cartella",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 pagina in questa cartella." : `${count} pagine in questa cartella.`,
    },
    tagContent: {
      tag: "Etichetta",
      tagIndex: "Indice etichette",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 pagina con questa etichetta." : `${count} pagine con questa etichetta.`,
      showingFirst: ({ count }) => `Prime ${count} etichette.`,
      totalTags: ({ count }) => `Trovate ${count} etichette totali.`,
    },
  },
} as const satisfies Translation
