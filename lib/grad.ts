// Content for the /grad celebration page. Edit freely — this is the single
// source of truth for that page.

export const grad = {
  name: "Favour Oluwatunmibi",
  classOf: "Class of 2026",
  degree: "B.Sc. Software Engineering",
  school: "Babcock University",
  honor: "Best Graduating Student",
  gpa: "4.89 / 5.00",

  // Warm note to the people scanning this at your celebration.
  thankYou: [
    "Thank you for celebrating this moment with me.",
    "Four years, a lot of late nights, and so much grace later — I made it, and I didn't do it alone. Every prayer, every push, every person who believed in me is part of this. From the bottom of my heart: thank you for being here.",
  ],

  // A few milestones told warmly (not resume-style).
  milestones: [
    {
      title: "Best Graduating Student",
      detail: "Graduated top of Software Engineering with a 4.89/5.00 CGPA.",
    },
    {
      title: "An award-winning thesis",
      detail:
        "Built a hybrid CNN–Vision Transformer to detect eye disease from retinal images — and won Best HealthTech for it.",
    },
    {
      title: "Building in the real world",
      detail:
        "Shipped production software as a founding engineer while still in school.",
    },
  ],

  // Photo gallery. Drop image paths (in /public/grad) here when you have them.
  // Leave empty and a friendly placeholder shows instead.
  photos: [] as { src: string; alt: string }[],

  // Where the QR code sends people.
  url: "https://favourtunmibi.dev/grad",
};
