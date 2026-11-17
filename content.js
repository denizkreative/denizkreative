/* =====================================================================
   DENIZKREATIVE — WEBSITE TEXT
   Change any text between the "quotes", then click "Commit changes".
   Keep the quotes and the comma at the end of each line.
   Use \n inside a text to start a new line.
   ===================================================================== */

window.SITE = {

  // Contact
  email: "",                          // e.g. "hello@denizkreative.com" — leave "" to show Instagram instead
  instagram: "denizkreative",         // your Instagram username, without @
  basedIn: "Based in Bologna",
  footerNote: "Based in Bologna, available worldwide",

  // Homepage text (bottom of the first page)
  tagline: "Photographer and videomaker based in Bologna. Specialized in couples, elopements, editorial and music videos.\nFilm and digital.",

  // About page
  about: "DenizKreative is a photographer and videomaker based in Bologna, Italy. Working across couples, elopements, editorial and music videos, with a love for honest moments, natural light and movement. Available across Italy and abroad.",

  // Text shown on each portfolio page
  categories: {
    "couples":      "Engagements, anniversaries and intimate elopements. Honest, unposed images of two people, in Bologna and wherever the story takes us.",
    "editorial":    "Fashion, Music and portrait stories For brands and designers. From concept and moodboard to the final edit.",
    "music-videos": "Music videos and visual content for artists: concept, direction, shooting and edit. Stills and clips from recent productions."
  },

  // Services page
  servicesIntro: "Photography and film for couples, brands and artists. Based in Bologna, available across Italy and abroad. Every project starts with a conversation: tell me what you have in mind.",
  servicesCta: "Dates, ideas, questions: write me and I will reply within two days.",
  services: [
    { title: "Couples",      kind: "Photo",            text: "Portrait sessions for two: engagements, anniversaries or just because. Relaxed, guided and natural.", details: "1 to 2 hours · Bologna & Emilia-Romagna" },
    { title: "Elopements",   kind: "Photo & Film",     text: "Intimate weddings and elopements, from the vows to the quiet moments after. Help with locations across Italy included.", details: "Half or full day · Italy & abroad" },
    { title: "Editorial",    kind: "Photo",            text: "Fashion, brand and magazine shoots with creative direction, from concept to retouched selects.", details: "Studio or location · Creative direction" },
    { title: "Music Videos", kind: "Direction & Film", text: "Music videos and visuals for artists and labels: concept, direction, filming, edit and colour.", details: "Concept · Filming · Edit & colour" }
  ],

  // Music videos: the title shown is the file name (e.g. "01 PRISMA - LIVIDI.mp4" shows "PRISMA - LIVIDI").
  // To add a YouTube / Vimeo link to a clip, write its exact file name and the link:
  musicVideoLinks: {
    // "01 PRISMA - LIVIDI.mp4": "https://www.youtube.com/watch?v=...",
  },

  // Only needed if you connect your own domain (e.g. denizkreative.com):
  // your GitHub username and the repository name.
  github: { owner: "", repo: "" }
};
