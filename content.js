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
  whatsapp: "+39 339 677 5515",                       // your WhatsApp number with country code, e.g. "+39 333 123 4567" — leave "" to hide
  basedIn: "Based in Bologna",
  hero: "editorial/03.jpg",
  heroCaption: "Editorial — Photography by Deniz",   // small credit on the home photo — leave "" to hide
  // Who is in the photos: their name appears on the photo (and on the home photo). Add a line for each new person.
  credits: [
    { name: "Andrea & Cat", role: "Couple session", roleIT: "Servizio di coppia",
      photos: ["couples/04-cover.jpg", "couples/01.jpg", "couples/02.jpg", "couples/03.jpg", "couples/05.jpg", "couples/06.jpg", "couples/07.jpg", "couples/12.jpg", "couples/13.jpg", "couples/14.jpg", "couples/18.jpg"] },
    { name: "Tal & Gal", role: "Couple session", roleIT: "Servizio di coppia",
      photos: ["couples/08.jpg", "couples/09.jpg", "couples/10.jpg", "couples/11.jpg", "couples/15.jpg", "couples/16.jpg", "couples/17.jpg"] },
    { name: "Daria Ryzova", role: "Fashion designer & model", roleIT: "Stilista e modella",
      photos: ["editorial/01.jpg", "editorial/02-hero.jpg", "editorial/03.jpg", "editorial/04.jpg"] },
    { name: "Pepe", role: "Music artist", roleIT: "Artista musicale",
      photos: ["editorial/05.jpg", "editorial/06.jpg", "editorial/07.jpg"] },
    { name: "Giulia Magro", role: "Music artist", roleIT: "Artista musicale",
      photos: ["editorial/08.jpg", "editorial/09.jpg", "editorial/10.jpg", "editorial/11.jpg", "editorial/12.jpg", "editorial/13.jpg", "editorial/14.jpg", "editorial/15.jpg"] },
    { name: "Tano", role: "Music artist", roleIT: "Artista musicale",
      photos: ["editorial/16.jpg", "editorial/17.jpg"] }
  ],
  aboutPhoto: "",                                // your photo on the About page, e.g. "about.jpg" (put the file next to index.html) — leave "" to hide
  // About page: little pictures that appear when the mouse is on these words (computers only)
  aboutHovers: [
    { words: ["I’m Deniz", "I'm Deniz", "sono Deniz"], image: "decor/deniz.jpg" }
  ],
  mouseEffect: "focus",                          // mouse effect on Couples, Editorial and Music Videos: "focus", "ring", "glitter", "embers", "confetti", "red" or "none"
  mouseEffectCouples: "engagement",              // mouse effect on Couples only (same choices, plus "engagement" = the ring)
  menuStyle: "classic",                          // menu look: "classic", "split", "sheet", "index" or "pill"
  headerStyle: "tags",                        // top bar look on computers: "classic", "outline", "tags", "rule", "dots", "type" or "stack"
  homeCard: "none",                              // look of the photos on the right of the home page: "tint", "bw", "blur", "vintage", "negative", "frame", "spotlight", "blinds", "halftone", "leak", "dim" or "none"
  homeTint: "blush",                             // soft colour over the photos on the right of the home page: "blush", "rose", "powder", "grey", "warm grey", "mauve" or "none"
  footerNote: "Based in Bologna, available in Europe",

  // Homepage text (bottom of the first page)
  tagline: "Photographer and videomaker based in Bologna. Specialized in couples, elopements, editorial and music videos.\nFilm and digital.",

  // About page
  about: "Hi, I’m Deniz, a photographer and videomaker based in Bologna, Italy.\nI’ve always been drawn to observing people and the little details that often go unnoticed. I work with couples, brands and artists, creating photos and videos that feel natural, personal and a little different.\nI shoot film and digital, playing with light, colour and movement. For me, it’s not just about a beautiful picture, but about capturing something with a feeling behind it.",
  // Text shown on each portfolio page
  categories: {
    "couples":      "Very fun, romantic, cinematic photoshoot through charming streets, bookstores, cozy coffee shops or wherever you choose. With an authentic, editorial style, I’ll capture natural moments.",
    "editorial":    "Fashion, Music and portrait stories For brands and designers.",
    "music-videos": "Music videos and visual content for artists: concept, direction, shooting and edit. Here you can see short cuts of my work; the full videos are 3–4 minutes long. Ask me to see them."
  },

  // Services page
  servicesIntro: "Photography and film for couples, brands and artists. I'm based in Bologna and available across Italy and abroad. Tell me what you have in mind.",
  servicesCta: "Ideas, questions, write me and I will reply within same day.",
  // photo: "folder/file.jpg" picks the picture that appears when you hover a service (optional)
  services: [
    { title: "Couples",      kind: "Photo",            text: "Couple sessions! Engagements, anniversaries or just because :) Fun, guided and romantic.", details: "Bologna & Emilia-Romagna" },
    { title: "Elopements",   kind: "Photo & Film",     text: "Intimate weddings and elopements. I will help you with locations in Italy.", details: "Half or full day · Italy & abroad", photo: "couples/18.jpg" },
    { title: "Editorial",    kind: "Photo",            text: "Fashion, brand and magazine shoots with creative direction, from concept to retouched selects.", details: "Studio or location" },
    { title: "Music Videos", kind: "Direction & Film", text: "Music videos and visuals for artists. Concept, direction, filming, edit and colour.", details: "Concept · Filming · Edit & colour" }
  ],

  // Client reviews (shown on Couples & Elopements and Services). Leave text "" to hide.
  // text = English, textIT = Italian, name = who wrote it.
  reviews: [
    {
      title:   "",
      text:    "We had an amazing time with deniz! She was so professional she had the locations planned and made day of adjustments for rain. She did such a good job of giving helpful prompts for posing. We are so happy with our pictures! An absolute must if you want pictures on your travels. She is the best!",
      name:    "McKayla",
      about:   "November 2026",
      aboutIT: "Novembre 2026",
      source:  "Airbnb",
      stars:   5
    },
    {
      title:   "My Memorable Experience in Bologna!",
      text:    "Deniz's photoshoot was a unique way to explore Bologna. After we met, she took time to understand our goals in the photoshoot. She was fun, professional and we ended up with a number of great photos to remember our first night in this new city. As a person who takes numerous pictures on trips, but is rarely represented in them, I appreciated her skill in capturing photos of me and my good memories in many different locations within Central Bologna. Highly recommended experience!",
      name:    "Patricia Hengel",
      about:   "Photoshoot in Bologna · October 2026",
      aboutIT: "Shooting a Bologna · Ottobre 2026"
    }
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
      "music-videos": "Videoclip e contenuti visivi per artisti: idea, regia, riprese e montaggio. Qui trovi brevi estratti dei miei lavori; i video completi durano 3–4 minuti. Chiedimi di vederli."
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
  // Titles shown on the clips (instead of the file name):
  musicVideoTitles: {
    "02 Artist - Song.mp4": "Showreel",
    "03 Backstage Baby.mp4": "PEPE - Baby Backstage"
  },
  musicVideoLinks: {
    // "01 PRISMA - LIVIDI.mp4": "https://www.youtube.com/watch?v=...",
    "03 Backstage Baby.mp4": "https://www.youtube.com/watch?v=9Tb1LolzUlw"
  },

  // Only needed if you connect your own domain (e.g. denizkreative.com):
  // your GitHub username and the repository name.
  github: { owner: "denizkreative", repo: "denizkreative" }
};
