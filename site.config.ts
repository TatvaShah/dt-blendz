import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "DtBlendz",
  tagline: "Haircuts, fades and blends in Oshawa.",
  category: "Barber",
  schemaType: "HairSalon",
  area: "Oshawa, ON",
  siteUrl: "https://dt-blendz-ca.vercel.app",

  theme: {
    preset: "barber-bold-light",
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Barbering in Oshawa",
    headline: "Haircuts, fades and blends in Oshawa",
    subhead: "DtBlendz is an Oshawa barber with 13 years of experience, offering haircuts, fades and blends. Send an Instagram message for the booking link.",
    images: [
      { src: "/images/post-7.jpg", alt: "A fade and beard tidy from DtBlendz in Oshawa", width: 720, height: 1280 },
      { src: "/images/post-1.jpg", alt: "A textured fringe haircut from DtBlendz in Oshawa", width: 1080, height: 1920 },
      { src: "/images/post-5.jpg", alt: "A mid taper cut in progress at DtBlendz in Oshawa", width: 1080, height: 1920 },
    ],
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "13 years of barbering experience",
    "Haircuts, fades and blends",
    "Oshawa, ON",
    "DM for the booking link",
  ],

  about: {
    title: "Welcome to DtBlendz",
    body: [
      "DtBlendz is an Oshawa barber with 13 years of experience, offering haircuts, fades and blends. Recent work has included a textured fringe, a mid taper, and fades with a beard tidy.",
      "Send an Instagram message for the booking link.",
    ],
    image: { src: "/images/post-7.jpg", alt: "A fade and beard tidy from DtBlendz in Oshawa", width: 720, height: 1280 },
  },

  menu: {
    label: "Services",
    title: "Cuts and blends",
    variant: "list",
    showPrices: false,
    priceNote: "Send an Instagram message for the booking link and for pricing.",
    groups: [
      {
        title: "Barbering",
        items: [
          { name: "Haircuts" },
          { name: "Fades and blends" },
          { name: "Mid taper", description: "As posted in recent work." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent cuts",
    items: [
      { src: "/images/post-7.jpg", width: 720, height: 1280, alt: "A fade and beard tidy from DtBlendz in Oshawa", caption: "A fade and beard tidy", href: "https://www.instagram.com/reel/DfGcJloK480/" },
      { src: "/images/post-1.jpg", width: 1080, height: 1920, alt: "A textured fringe haircut from DtBlendz in Oshawa", caption: "A textured fringe", href: "https://www.instagram.com/reel/Df5P58gKM0s/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1920, alt: "A low fade and styled top from DtBlendz in Oshawa", caption: "A low fade and styled top", href: "https://www.instagram.com/reel/DfiYKAaK-pV/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1920, alt: "A mid taper cut in progress at DtBlendz in Oshawa", caption: "A mid taper", href: "https://www.instagram.com/reel/DfdgwnGK_B8/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1920, alt: "Scissor work in progress at DtBlendz in Oshawa", caption: "Scissor work", href: "https://www.instagram.com/reel/De-s1G1K6lk/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "dtbl.endz",
    embeds: ["https://www.instagram.com/reel/DfGcJloK480/", "https://www.instagram.com/reel/Df5P58gKM0s/", "https://www.instagram.com/reel/DfdgwnGK_B8/"],
  },

  order: {
    label: "How to book",
    title: "DM for the booking link",
    intro: "Send an Instagram message for the booking link. DtBlendz is based in Oshawa.",
    headerCtaLabel: "Book now",
    dmMessage: "Hi DtBlendz! I would like the booking link.\nPreferred day and time:\nCut or style:",
    links: [
      { label: "DM for the booking link", href: "https://ig.me/m/dtbl.endz" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send an Instagram message for the booking link." },
    { q: "Where are you based?", a: "DtBlendz is based in Oshawa." },
    { q: "How long have you been cutting hair?", a: "DtBlendz posts 13 years of barbering experience." },
  ],

  contact: {
    title: "Contact",
    area: "Oshawa, ON",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/dtbl.endz/" },
    ],
  },

  seo: {
    title: "DtBlendz | Haircuts, fades and blends in Oshawa",
    description: "Oshawa barber with 13 years of experience, offering haircuts, fades and blends. Send an Instagram message for the booking link.",
    keywords: ["DtBlendz", "Oshawa barber", "fades Oshawa", "haircut Oshawa"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
