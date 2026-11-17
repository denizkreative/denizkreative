/* =====================================================================
   DENIZKREATIVE — WEBSITE TEXT
   Change any text between the "quotes", then click "Commit changes".
   Keep the quotes and the comma at the end of each line.
   Use \n inside a text to start a new line.
   ===================================================================== */

window.SITE = {

  // Contact
  email: "denizkreative@gmail.com",                          // e.g. "hello@denizkreative.com" — leave "" to show Instagram instead
  instagram: "denizkreative",         // your Instagram username, without @
  basedIn: "Based in Bologna",
  footerNote: "Based in Bologna, available in Europe",

  // Homepage text (bottom of the first page)
  tagline: "Photographer and videomaker based in Bologna. Specialized in couples, elopements, editorial and music videos.\nFilm and digital.",

  // About page
  about: "DenizKreative is a photographer and videomaker based in Bologna, Italy. Working across couples, elopements, editorial and music videos, with a love for honest moments, natural light and movement. Available across Italy and abroad.",

  // Text shown on each portfolio page
  categories: {
    "couples":      "Very fun, romantic, cinematic photoshoot through charming streets, bookstores, cozy coffee shops or wherever you choose. With an authentic, editorial style, I’ll capture natural moments.",
    "editorial":    "Fashion, Music and portrait stories For brands and designers.",
    "music-videos": "Music videos and visual content for artists: concept, direction, shooting and edit."
  },

  // Services page
  servicesIntro: "Photography and film for couples, brands and artists. I'm based in Bologna and available across Italy and abroad. Tell me what you have in mind.",
  servicesCta: "Ideas, questions, write me and I will reply within same day.",
  services: [
    { title: "Couples",      kind: "Photo",            text: "Portrait sessions for couples! Engagements, anniversaries or just because. Fun, guided and romantic.", details: "1 to 2 hours · Bologna & Emilia-Romagna" },
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
