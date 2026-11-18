/* =====================================================================
   DENIZKREATIVE — WEBSITE TEXT
   Change any text between the "quotes", then click "Commit changes".
   Keep the quotes and the comma at the end of each line.
   Use \n inside a text to start a new line.
   English texts are at the top. Italian texts are in the "italian" section below.
   ===================================================================== */

window.SITE = {

  // Contact
  email: "denizkreative@gmail.com",                          // e.g. "hello@denizkreative.com" — leave "" to show Instagram instead
  instagram: "denizkreative",         // your Instagram username, without @
  basedIn: "Based in Bologna",
  hero: "editorial/03.jpg",
  footerNote: "Based in Bologna, available in Europe",

  // Homepage text (bottom of the first page)
  tagline: "Photographer and videomaker based in Bologna. Specialized in couples, elopements, editorial and music videos.\nFilm and digital.",

  // About page
  about: "Hi, I’m Deniz, a photographer and videomaker based in Bologna, Italy.\nI’ve always been drawn to observing people and the little details that often go unnoticed. I work with couples, brands and artists, creating photos and videos that feel natural, personal and a little different.\nI shoot film and digital, playing with light, colour and movement. For me, it’s not just about a beautiful picture, but about capturing something with a feeling behind it.",
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
    { title: "Couples",      kind: "Photo",            text: "Couple sessions! Engagements, anniversaries or just because :) Fun, guided and romantic.", details: "Bologna & Emilia-Romagna" },
    { title: "Elopements",   kind: "Photo & Film",     text: "Intimate weddings and elopements. I will help you with locations in Italy.", details: "Half or full day · Italy & abroad" },
    { title: "Editorial",    kind: "Photo",            text: "Fashion, brand and magazine shoots with creative direction, from concept to retouched selects.", details: "Studio or location" },
    { title: "Music Videos", kind: "Direction & Film", text: "Music videos and visuals for artists. Concept, direction, filming, edit and colour.", details: "Concept · Filming · Edit & colour" }
  ],

  // ===================== ITALIANO =====================
  // Italian version of the texts above. Shown when a visitor picks "IT".
  // Anything left empty "" shows the English text instead.
  italian: {
    basedIn: "Con base a Bologna",
    footerNote: "Con base a Bologna, disponibile in tutta Europa",
    tagline: "Sono Deniz, fotografa e videomaker a Bologna. Racconto coppie, elopement, editoriali e videoclip.\nIn pellicola e in digitale.",
    about: "Ciao, sono Deniz! Sono fotografa e videomaker.\nMi ha sempre affascinato osservare le persone e i piccoli dettagli che spesso passano inosservati. Lavoro con coppie, brand e artisti, creando foto e video.\nScatto in pellicola e in digitale. Per me non si tratta solo di una bella foto, ma di catturare qualcosa che abbia un’emozione dietro.",
    categories: {
      "couples":      "Uno shooting divertente, romantico e cinematografico tra stradine affascinanti, librerie, caffè accoglienti o dove preferite voi. Con uno stile autentico ed editoriale, catturerò momenti naturali.",
      "editorial":    "Storie di moda, musica e ritratto per brand e designer.",
      "music-videos": "Videoclip e contenuti visivi per artisti: idea, regia, riprese e montaggio."
    },
    servicesIntro: "Fotografia e video per coppie, brand e artisti. Ho base a Bologna e sono disponibile in tutta Italia e all’estero. Raccontami cosa hai in mente.",
    servicesCta: "Idee, domande: scrivimi e ti rispondo in giornata.",
    services: [
      { title: "Coppie",     kind: "Foto",          text: "Shooting di coppia! Fidanzamenti, anniversari o semplicemente per voi :) Divertente, guidato e romantico.", details: "Bologna & Emilia-Romagna" },
      { title: "Elopement",  kind: "Foto & Video",  text: "Matrimoni intimi ed elopement. Vi aiuto a scegliere le location in Italia.", details: "Mezza giornata o giornata intera · Italia & estero" },
      { title: "Editoriale", kind: "Foto",          text: "Shooting di moda, brand e riviste con direzione creativa, dall’idea alle foto ritoccate.", details: "In studio o in location" },
      { title: "Videoclip",  kind: "Regia & Video", text: "Videoclip e contenuti visivi per artisti. Idea, regia, riprese, montaggio e color.", details: "Idea · Riprese · Montaggio & color" }
    ]
  },

  // Music videos: the title shown is the file name (e.g. "01 PRISMA - LIVIDI.mp4" shows "PRISMA - LIVIDI").
  // To add a YouTube / Vimeo link to a clip, write its exact file name and the link:
  musicVideoLinks: {
    // "01 PRISMA - LIVIDI.mp4": "https://www.youtube.com/watch?v=...",
  },

  // Only needed if you connect your own domain (e.g. denizkreative.com):
  // your GitHub username and the repository name.
  github: { owner: "", repo: "" }
};
