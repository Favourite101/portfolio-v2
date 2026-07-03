// Content for the /grad celebration page. This is a cute memory scrapbook —
// edit everything here. For photos, drop files in /public/grad/ and set the
// `src` (e.g. "/grad/friends-1.jpg"). Any photo left with src: "" shows a
// pretty pastel placeholder so the page always looks full.

export type Photo = {
  src: string;
  caption: string;
  rotate?: number; // degrees of playful tilt
  emoji?: string; // shown on the placeholder if there's no photo yet
};

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
    { src: "", caption: "the day it all began 🥹", emoji: "🎒" },
    { src: "", caption: "late nights & big dreams 🌙", emoji: "💻" },
    { src: "", caption: "my people 💛", emoji: "🫶" },
    { src: "", caption: "we made it to the finish line! 🏁", emoji: "🎓" },
    { src: "", caption: "best moments ever 🥰", emoji: "📸" },
  ] as Photo[],

  // Scattered polaroids — random little memories.
  scrapbook: [
    { src: "", caption: "first day 🥺", rotate: -6, emoji: "🌸" },
    { src: "", caption: "study buddies 📚", rotate: 4, emoji: "☕" },
    { src: "", caption: "birthday surprises 🎂", rotate: -3, emoji: "🎉" },
    { src: "", caption: "hostel nights 🌙", rotate: 5, emoji: "🛏️" },
    { src: "", caption: "hackathon chaos 💡", rotate: -5, emoji: "⚡" },
    { src: "", caption: "church fam ⛪", rotate: 3, emoji: "🙏" },
    { src: "", caption: "random adventures 🚗", rotate: -4, emoji: "🗺️" },
    { src: "", caption: "graduation day 🎓", rotate: 6, emoji: "💐" },
  ] as Photo[],

  // "My people" — friends & community shoutouts.
  people: {
    note: "To everyone who laughed with me, cried with me, prayed for me, and pushed me — you are the best part of this story. I love you all so much. 💛",
    photos: [
      { src: "", caption: "the day ones 💖", rotate: -5, emoji: "👯‍♀️" },
      { src: "", caption: "GDG fam 🤖", rotate: 4, emoji: "💫" },
      { src: "", caption: "roomies 🏡", rotate: -3, emoji: "🌷" },
      { src: "", caption: "the group chat 📱", rotate: 5, emoji: "💌" },
    ] as Photo[],
  },

  // Best moments through the years.
  moments: [
    { year: "Year 1", text: "found my footing (and my people 🫶)", emoji: "🌱" },
    { year: "Year 2", text: "fell in love with building things 💻", emoji: "✨" },
    { year: "Year 3", text: "leadership, late nights & big wins 🏆", emoji: "🚀" },
    { year: "Year 4", text: "thesis, awards, and finishing strong 🎓", emoji: "👑" },
  ],

  // A little love note.
  loveNote: [
    "This chapter was everything — the hard days, the happy tears, the friendships that turned into family.",
    "Thank you for being here, for celebrating me, and for being part of my story. Here's to what's next! 💛",
  ],

  signoff: "with all my love,",

  url: "https://favourtunmibi.dev/grad",
};
