// Content for the /grad celebration page — a cute memory scrapbook.
// Photos live in /public/grad/ and are referenced by `src` (e.g. "/grad/matric-1.jpg").
// A photo with src: "" shows a pretty pastel placeholder (great for "coming soon").
//
// Memories are organised into SECTIONS, and each memory is a GROUP of one or
// more photos that share a single caption. Multi-photo groups render as a
// clustered mini-album so related pictures stay together.

export type Photo = {
  src: string;
  emoji?: string; // shown on the placeholder when src is ""
};

export type Group = {
  caption: string;
  photos: Photo[];
  rotate?: number; // playful tilt for the whole group
};

export type Section = {
  emoji: string;
  title: string;
  note?: string;
  groups: Group[];
};

const g = (src: string) => `/grad/${src}`;
const one = (caption: string, src: string, rotate?: number): Group => ({
  caption,
  rotate,
  photos: [{ src: g(src) }],
});
const many = (caption: string, srcs: string[], rotate?: number): Group => ({
  caption,
  rotate,
  photos: srcs.map((s) => ({ src: g(s) })),
});

export const grad = {
  name: "Favour",
  fullName: "Favour Oluwatunmibi",
  classOf: "Class of 2026",
  degree: "B.Sc. Software Engineering",
  school: "Babcock University",
  honor: "Best Graduating Student",
  gpa: "4.89 / 5.00",

  hero: {
    greeting: "graduATE!! 🎓",
    line: "four years, so many memories, and the best people ✨",
  },

  // Auto-playing slideshow. Opens with the very beginning and closes with a
  // placeholder for the graduation photoshoot — a little bookend.
  slideshow: [
    { src: g("matric-1.jpg"), caption: "where it all began 🎀" },
    { src: g("highest-cgpa-awards.jpg"), caption: "academic weapon 🏆" },
    { src: g("gdg-team-1.jpg"), caption: "my tech family 🤖" },
    { src: g("sabbath-1.jpg"), caption: "sabbaths together 🤍" },
    { src: g("final-defense-1.jpg"), caption: "defended it! 🎤" },
    { src: g("grad-class-picture-day-2.jpg"), caption: "picture day 📸" },
    { src: g("bethel-chapel-grad-week.jpg"), caption: "grad week sabbath 💃🏽" },
    { src: g("holding-sash.jpg"), caption: "and this is how it ends… 📸✨" },
  ] as (Photo & { caption: string })[],

  sections: [
    {
      emoji: "🌱",
      title: "firsts",
      note: "every story starts somewhere — here's where mine did.",
      groups: [
        many("matriculation day 🎓", ["matric-2.jpg", "IMG-20230623-WA0004.jpg", "matric-4.jpg"], -4),
        one("day one on campus ✨", "first-day.jpg", 3),
        one("first week nerves 🌸", "first-week-2.jpg", -3),
        many("first dinner ✨", ["first-dinner-1.jpg", "first-dinner-2.jpg", "first-dinner-3.jpg"], 4),
        one("first sabbath 🤍", "first-sabbath.jpg", 3),
        one("first set of awards 🏆", "first-set-of-awards.jpg", -3),
      ],
    },
    {
      emoji: "📚",
      title: "the grind",
      note: "the internships, defenses and long nights that earned the gown.",
      groups: [
        many("SIWES · internship 💼", ["siwes-1.jpg", "siwes-2.jpg"], -3),
        one("two years of ALX 🎓", "alx-certificate-after-two-years.jpg", 3),
        one("SIWES defense 🎤", "siwes-defense.jpg", -3),
        many("mini defense 🎤", ["mini-defense-1.jpg", "mini-defense-2.jpg"], 4),
        many("final defense — passed! 🎉", ["final-defense-1.jpg", "IMG_5231.jpg"], -4),
      ],
    },
    {
      emoji: "🫶",
      title: "communities and events",
      note: "the tech, faith and student circles i got to call home.",
      groups: [
        many("GDG family 🤖", ["gdg-team-1.jpg", "gdg-team-2.jpg", "gdg-team-3.jpg"], -4),
        one("track event 🎯", "gdg-track-event.jpg", -3),
        many("Wema Bank Hackaholics 💡", ["wema-bank-hackaholics-1.jpg", "wema-bank-hackaholics-2.jpg"], 3),
        one("MLSA 🌐", "mlsa-event.jpg", -3),
        one("Enactus 🌍", "enactus.jpg", 4),
        one("bethel chapel media team 🎥", "bethel-chapel-media-team.jpg", -5),
        many("BUSA senate 🏛️", ["busa-election-flyer.jpg", "busa-senator.jpg"], 4),
        one("BUCC 💻", "bucc.jpg", 5),
        one("academic committee 🫂", "academic-committee.jpg", -5),
      ],
    },
    {
      emoji: "🥂",
      title: "moments",
      note: "the in-between magic — dress-ups and grad-week joy.",
      groups: [
        one("ankara day 🌍", "departmental-week-ankara-day.jpg", 3),
        one("highest CGPA 👑", "highest-cgpa-awards.jpg", -3),
        many("orbit 1.0 🚀", ["gdg-orbit-field-trip.jpg", "gdg-orbit-field-trip-2.jpg"], 3),
        many("DevFest 🎉", ["dev-fest-1.jpg", "dev-fest-2.jpg"], 4),
        many("TechXplore ⚡", ["tech-xplore-1.jpg", "tech-xplore-2.jpg"], -5),
        many("BIV summit 🎤", ["biv-summit-1.jpg", "biv-summit-2.jpg"], -4),
        one("a little side quest 🗺️", "side-quest.jpg", 4),
        {
          caption: "grad week 🎓",
          rotate: -4,
          photos: [
            { src: g("grad-class-picture-day-2.jpg") },
            { src: g("grad-class-rally.jpg") },
            { src: g("grad-class-seminar.jpg") },
            { src: g("grad-fest.jpg") },
            { src: g("grad-worship.jpg") },
          ],
        },
        one("hangout with the vc ✨", "hangout-with-vc.jpg", 4),
      ],
    },
    {
      emoji: "🥹",
      title: "lasts",
      note: "the last of all the firsts — soaking up every final one.",
      groups: [
        many("the last class 🥹", ["last-class-1.jpg", "last-class-2.jpg"], -3),
        many("last departmental dinner 🥂", ["last-departmental-dinner-1.jpg", "last-departmental-dinner-2.jpg"], 4),
        one("last freshers' fair 🎪", "last-freshers-fair.jpg", -5),
        one("last morning run 🌅", "last-morning-run.jpg", 3),
        one("last sabbath on campus 🤍", "last-sabbath.jpg", -3),
        one("last week of prayer 🙏", "last-week-of-prayer.jpg", 5),
      ],
    },
  ] as Section[],

  // The grand finale — photoshoot & big day.
  finale: {
    emoji: "🎓",
    title: "graduation, finally",
    note: "the big day — we made it! 🎓✨",
    groups: [
      one("celebrating the wins 🏆", "awards.jpg", -3),
      one("first class graduate 🏅", "biting-medal.jpg", 4),
      one("hats off to the journey 🎓", "cap-only.jpg", -3),
      one("all the hard work paid off 📜", "certificates.jpg", 4),
      one("suited up for the finale ✨", "full-regalia.jpg", -3),
      many("with the best people 🫂💐", ["with-debbie.jpg", "with-koks.jpg", "with-shazzy.jpeg", "shazzy-and-soji.jpg"], 4),
    ] as Group[],
  },
  // A heartfelt interlude to my people (shown after "communities").
  peopleNote:
    "To everyone who laughed with me, cried with me, prayed for me, and pushed me — you are the best part of this story. I love you all so much. 💛",

  // A little love note (the closer).
  loveNote: [
    "This chapter was everything: the hard days, the happy tears, the friendships that turned into family.",
    "Thank you for being here, for celebrating me, and for being part of my story. Here's to what's next! 💛",
  ],

  signoff: "with all my love,",

  url: "https://favourtunmibi.dev/grad",
};
