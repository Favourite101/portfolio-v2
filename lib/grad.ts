// Content for the /grad celebration page. This is a cute memory scrapbook —
// edit everything here. Photos live in /public/grad/ and are referenced by
// `src` (e.g. "/grad/matric-1.jpg"). Any photo left with src: "" shows a
// pretty pastel placeholder so the page always looks full.

export type Photo = {
  src: string;
  caption: string;
  rotate?: number; // degrees of playful tilt
  emoji?: string; // shown on the placeholder if there's no photo yet
};

export type Chapter = {
  emoji: string;
  title: string;
  note?: string;
  photos: Photo[];
};

const g = (src: string) => `/grad/${src}`;

export const grad = {
  name: "Favour",
  fullName: "Favour Oluwatunmibi",
  classOf: "Class of 2026",
  degree: "B.Sc. Software Engineering",
  school: "Babcock University",
  honor: "Best Graduating Student",
  gpa: "4.89 / 5.00",

  // Big cheerful greeting at the top.
  hero: {
    greeting: "we did it!! 🎓",
    line: "four years, so many memories, and the best people ✨",
  },

  // Auto-playing slideshow of favourite pictures.
  slideshow: [
    { src: g("matric-1.jpg"), caption: "where it all began 🎀" },
    { src: g("first-set-of-awards.jpg"), caption: "the wins started early 🏆" },
    { src: g("gdg-team-1.jpg"), caption: "my tech family 🤖" },
    { src: g("sabbath-1.jpg"), caption: "sabbaths together 🤍" },
    { src: g("final-defense-1.jpg"), caption: "defended it! 🎤" },
    { src: g("grad-class-picture-day-2.jpg"), caption: "class of 2026 📸" },
    { src: g("bethel-chapel-grad-week.jpg"), caption: "grad week feels 🎓" },
  ] as Photo[],

  // Best moments through the years.
  moments: [
    { year: "Year 1", text: "found my footing (and my people 🫶)", emoji: "🌱" },
    { year: "Year 2", text: "fell in love with building things 💻", emoji: "✨" },
    { year: "Year 3", text: "leadership, late nights & big wins 🏆", emoji: "🚀" },
    { year: "Year 4", text: "thesis, awards, and finishing strong 🎓", emoji: "👑" },
  ],

  // Themed scrapbook chapters. Each renders as a titled polaroid grid.
  chapters: [
    {
      emoji: "🎒",
      title: "how it started",
      note: "fresh-faced, a little nervous, and so excited for everything ahead.",
      photos: [
        { src: g("matric-1.jpg"), caption: "matriculation day 🎀", rotate: -5 },
        { src: g("matric-2.jpg"), caption: "officially a student 📜", rotate: 3 },
        { src: g("matric-3.jpg"), caption: "taking the oath 🤍", rotate: -3 },
        { src: g("matric-4.jpg"), caption: "matric fits 💫", rotate: 4 },
        { src: g("first-day.png"), caption: "day one 🥺", rotate: -4 },
        { src: g("first-week-2.jpg"), caption: "first week nerves 🌸", rotate: 5 },
        { src: g("first-time-in-the-cafeteria.jpg"), caption: "first caf meal 🍽️", rotate: -6 },
        { src: g("first-morning-run.png"), caption: "6am morning runs 🏃‍♀️", rotate: 3 },
        { src: g("first-dinner-1.jpg"), caption: "first dinner 🍝", rotate: -3 },
        { src: g("first-dinner-2.jpg"), caption: "all dressed up ✨", rotate: 4 },
        { src: g("first-dinner-3.jpg"), caption: "brand new friends 💕", rotate: -5 },
        { src: g("first-sabbath.jpg"), caption: "first sabbath 🤍", rotate: 3 },
        { src: g("IMG-20230623-WA0004.jpg"), caption: "somewhere in the beginning 🌱", rotate: -4 },
      ],
    },
    {
      emoji: "📚",
      title: "the grind",
      note: "internships, defenses, and the thesis that almost ended me (worth it).",
      photos: [
        { src: g("siwes-1.jpg"), caption: "internship season 💼", rotate: 4 },
        { src: g("siwes-2.jpg"), caption: "learning on the job 🛠️", rotate: -3 },
        { src: g("siwes-defense.jpg"), caption: "SIWES defense ✅", rotate: 5 },
        { src: g("mini-defense-1.jpg"), caption: "mini defense jitters 😅", rotate: -4 },
        { src: g("mini-defense-2.jpg"), caption: "made it through 🙌", rotate: 3 },
        { src: g("final-defense-1.jpg"), caption: "final defense 🎤", rotate: -5 },
        { src: g("final-defense-2.jpg"), caption: "defending the thesis 🧠", rotate: 4 },
        { src: g("final-defense-3.jpg"), caption: "and… passed! 🎉", rotate: -3 },
        { src: g("last-class-2.jpg"), caption: "the very last class 🥹", rotate: 5 },
      ],
    },
    {
      emoji: "💻",
      title: "building things",
      note: "the tech community that turned late-night ideas into real things.",
      photos: [
        { src: g("gdg-team-1.jpg"), caption: "GDG fam 🤖", rotate: -4 },
        { src: g("gdg-team-2.jpg"), caption: "the tech crew 💫", rotate: 3 },
        { src: g("gdg-team-3.jpg"), caption: "community > everything 🫶", rotate: -3 },
        { src: g("gdg-orbit-field-trip.jpg"), caption: "orbit field trip 🚀", rotate: 4 },
        { src: g("gdg-orbit-field-trip-2.jpg"), caption: "learning together 🛰️", rotate: -5 },
        { src: g("gdg-track-event.jpg"), caption: "leading a track 🎯", rotate: 3 },
        { src: g("dev-fest-1.jpg"), caption: "DevFest! 🎉", rotate: -4 },
        { src: g("dev-fest-2.jpg"), caption: "so much to learn 📡", rotate: 5 },
        { src: g("tech-xplore-1.jpg"), caption: "TechXplore ⚡", rotate: -3 },
        { src: g("tech-xplore-2.jpg"), caption: "exploring tech 🔍", rotate: 4 },
        { src: g("wema-bank-hackaholics-1.jpg"), caption: "Hackaholics hackathon 💡", rotate: -5 },
        { src: g("wema-bank-hackaholics-2.jpg"), caption: "building under pressure ⏱️", rotate: 3 },
        { src: g("mlsa-event.jpg"), caption: "MLSA event 🌐", rotate: -4 },
        { src: g("enactus.jpg"), caption: "Enactus 🌍", rotate: 4 },
        { src: g("biv-summit-1.jpg"), caption: "BIV summit 🎤", rotate: -3 },
        { src: g("biv-summit-2.jpg"), caption: "big ideas ✨", rotate: 5 },
        { src: g("alx-certificate-after-two-years.png"), caption: "two years of ALX, done 🎓", rotate: -4 },
        { src: g("side-quest.jpg"), caption: "a little side quest 🗺️", rotate: 3 },
      ],
    },
    {
      emoji: "⛪",
      title: "faith & family",
      note: "the people and the peace that kept me grounded through it all.",
      photos: [
        { src: g("sabbath-1.jpg"), caption: "sabbath rest 🤍", rotate: -4 },
        { src: g("sabbath-2.jpg"), caption: "worship days 🎶", rotate: 3 },
        { src: g("sabbath-3.jpg"), caption: "church fam ⛪", rotate: -3 },
        { src: g("last-sabbath.jpg"), caption: "last sabbath on campus 🥹", rotate: 5 },
        { src: g("bethel-chapel-media-team.jpg"), caption: "media team ministry 🎥", rotate: -5 },
        { src: g("last-week-of-prayer.jpg"), caption: "week of prayer 🙏", rotate: 4 },
      ],
    },
    {
      emoji: "👑",
      title: "leading the way",
      note: "running, serving, and picking up a few trophies along the way.",
      photos: [
        { src: g("busa-election-flyer.jpg"), caption: "running for senate 🗳️", rotate: -4 },
        { src: g("busa-senator.jpg"), caption: "BUSA senator 🏛️", rotate: 3 },
        { src: g("busa-dinner-1.jpg"), caption: "BUSA dinner 🥂", rotate: -3 },
        { src: g("busa-dinner-2.jpg"), caption: "leadership nights ✨", rotate: 5 },
        { src: g("bucc.jpg"), caption: "BUCC 💻", rotate: -5 },
        { src: g("first-set-of-awards.jpg"), caption: "first set of awards 🏆", rotate: 4 },
        { src: g("highest-cgpa-awards.jpg"), caption: "highest CGPA 👑", rotate: -3 },
      ],
    },
    {
      emoji: "🥂",
      title: "good times",
      note: "dinners, dress-ups, and the nights we didn't want to end.",
      photos: [
        { src: g("second-dinner-1.jpg"), caption: "dinner nights 🍷", rotate: -4 },
        { src: g("second-dinner-2.jpg"), caption: "dressed to the nines 💃", rotate: 3 },
        { src: g("departmental-week-ankara-day.jpg"), caption: "ankara day 🌍", rotate: -5 },
        { src: g("last-departmental-dinner-1.jpg"), caption: "last departmental dinner 🥹", rotate: 4 },
        { src: g("last-departmental-dinner-2.jpg"), caption: "one last toast 🥂", rotate: -3 },
      ],
    },
    {
      emoji: "🎓",
      title: "the final bow",
      note: "the last of the lasts — soaking up every single moment.",
      photos: [
        { src: g("grad-class-picture-day-2.jpg"), caption: "class picture day 📸", rotate: -4 },
        { src: g("grad-class-rally.jpg"), caption: "grad rally 🎉", rotate: 3 },
        { src: g("grad-class-seminar.jpg"), caption: "grad seminar 🎓", rotate: -3 },
        { src: g("hangout-with-vc.jpg"), caption: "hangout with the VC 🤝", rotate: 5 },
        { src: g("bethel-chapel-grad-week.jpg"), caption: "grad week worship 🤍", rotate: -5 },
        { src: g("last-freshers-fair.jpg"), caption: "last freshers' fair 🎪", rotate: 4 },
        { src: g("last-morning-run.jpg"), caption: "last morning run 🌅", rotate: -3 },
      ],
    },
  ] as Chapter[],

  // Teaser for photos still to come.
  comingSoon: {
    emoji: "📸",
    title: "still to come…",
    note: "the grad photoshoot and pictures from the big day — dropping here soon! ✨",
  },

  // A heartfelt interlude to my people.
  peopleNote:
    "To everyone who laughed with me, cried with me, prayed for me, and pushed me — you are the best part of this story. I love you all so much. 💛",

  // A little love note.
  loveNote: [
    "This chapter was everything — the hard days, the happy tears, the friendships that turned into family.",
    "Thank you for being here, for celebrating me, and for being part of my story. Here's to what's next! 💛",
  ],

  signoff: "with all my love,",

  url: "https://favourtunmibi.dev/grad",
};
