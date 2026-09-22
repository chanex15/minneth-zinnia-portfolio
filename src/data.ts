// Drop your media files directly into the /public folder using these exact
// names (same as the GitHub repo). Vite serves /public at the site root.
export const media = {
  profile: "/P1.jpg", // your profile / headshot photo
  work1: "/image1.jpg", // portfolio image 1 (Instagram carousel)
  work2: "/image2.jpg", // portfolio image 2 (brand visual)
  work3: "/image3.jpg", // portfolio image 3 (content design)
  video1: "/V1.mp4", // portfolio video 1 (Reel / Shorts)
  video2: "/V2.mp4", // portfolio video 2 (UGC style)
  video3: "/V3.mp4", // portfolio video 3 (AI assisted)
};

export const profile = {
  firstName: "Minneth",
  lastName: "Zinnia",
  fullName: "Minneth Zinnia Aquino-Dayaday",
  role: "Creative Virtual Assistant",
  tagline: "Social Media Content & Video Editor",
  location: "CDO, Philippines",
  availability: "Available worldwide · Remote-ready",
  email: "hello@minnethzinnia.com",
  linkedin: "https://www.linkedin.com/",
  onlinejobs: "https://www.onlinejobs.ph/",
};

export const professionalProfiles = [
  {
    id: "linkedin",
    label: "in",
    name: "LinkedIn",
    href: profile.linkedin,
    hint: "Connect on LinkedIn",
  },
  {
    id: "onlinejobs",
    label: "oj",
    name: "OnlineJobs.ph",
    href: profile.onlinejobs,
    hint: "Hire on OnlineJobs.ph",
  },
];

export const heroStats = [
  {
    value: "3",
    suffix: "+",
    title: "Years of video editing",
    text: "Hook-first edits for Reels, Shorts & TikTok that reach a wide audience and leave a lasting impression.",
  },
  {
    value: "6",
    suffix: "+",
    title: "Years of client work",
    text: "Hours of engaging, audience-focused storytelling — clear communication and on-time delivery, every time.",
  },
];

export const heroChips = ["Reels & Shorts", "Canva Design", "AI Content"];

export const aboutParagraphs = [
  "Hi! I'm Minneth Zinnia Aquino-Dayaday, a Creative Virtual Assistant specializing in social media content creation, short-form video editing, visual content design, and AI-assisted creative production.",
  "I help businesses, brands, and content creators strengthen their online presence by creating engaging and visually appealing content for platforms like Instagram, TikTok, and YouTube.",
  "With a background in communication management, online teaching, and customer support, I bring strong communication skills, creativity, adaptability, and attention to detail into every project I handle.",
];

export const aboutStats = [
  { value: "3+", label: "Years Video Editing" },
  { value: "6+", label: "Years Client Work" },
  { value: "4+", label: "Service Pillars" },
  { value: "\u221E", label: "Creative Iterations" },
];

export type Service = {
  index: string;
  title: string;
  text: string;
  tags: string[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "Short-Form Video Editing",
    text: "Engaging edits for Instagram Reels, TikTok, and YouTube Shorts — hook-first pacing, captions, transitions, and motion optimized for mobile.",
    tags: ["Reels", "Shorts", "TikTok", "UGC", "CapCut"],
  },
  {
    index: "02",
    title: "Social Media Design",
    text: "Branded carousel posts, promotional graphics, quote posts, and AI-generated visuals that communicate your identity across every platform.",
    tags: ["Canva", "Carousels", "AI Visuals", "Branding"],
  },
  {
    index: "03",
    title: "Creative VA Support",
    text: "Behind-the-scenes content organization, file management, caption formatting, and scheduling support to keep your workflow frictionless.",
    tags: ["Organization", "Scheduling", "Captions"],
  },
  {
    index: "04",
    title: "AI-Assisted Production",
    text: "Leveraging AI image and video generation platforms to accelerate creative output — concept ideation, AI visuals, and hybrid creative content at scale.",
    tags: ["AI Image Gen", "AI Video", "Creative AI"],
  },
];

export const tools = [
  "Canva",
  "CapCut",
  "Adobe Creative Cloud",
  "Google Workspace",
  "AI Image Platforms",
  "AI Video Tools",
  "Short-Form Editing",
  "UGC-Style Editing",
  "Carousel Design",
  "Visual Storytelling",
  "Audience Engagement",
  "English Communication",
];

export const portfolioImages = [
  { src: media.work1, label: "Instagram Carousel", index: "01" },
  { src: media.work2, label: "Brand Visual", index: "02" },
  { src: media.work3, label: "Content Design", index: "03" },
];

export const portfolioVideos = [
  {
    src: media.video1,
    poster: media.work1,
    label: "Reel \u00b7 Shorts",
    index: "V1",
  },
  {
    src: media.video2,
    poster: media.work2,
    label: "UGC Style",
    index: "V2",
  },
  {
    src: media.video3,
    poster: media.work3,
    label: "AI Assisted",
    index: "V3",
  },
];

export const processSteps = [
  {
    index: "01",
    title: "Understand",
    text: "Learn your brand, target audience, creative direction, and content goals before anything is produced.",
  },
  {
    index: "02",
    title: "Organize",
    text: "Structure all assets, briefs, and creative references into a clear, actionable content plan.",
  },
  {
    index: "03",
    title: "Create",
    text: "Edit, design, and produce content optimized for the target platform — every frame intentional.",
  },
  {
    index: "04",
    title: "Refine",
    text: "Apply your feedback with care and precision — revisions are part of the process, not an extra step.",
  },
  {
    index: "05",
    title: "Deliver",
    text: "Polished final content delivered on time, ready to publish, formatted correctly for each platform.",
  },
];

export const whyReasons = [
  {
    index: "01",
    title: "Strong Communication",
    text: "With an ESL training background, I communicate clearly, professionally, and proactively — no need to chase updates.",
  },
  {
    index: "02",
    title: "Organized & Reliable",
    text: "Deadlines are a commitment, not a suggestion. Your content arrives on time, every time, ready to go live.",
  },
  {
    index: "03",
    title: "Detail-Oriented",
    text: "From caption spacing to pacing and color consistency — every small decision adds up to a polished result.",
  },
  {
    index: "04",
    title: "Audience-Focused",
    text: "Content that looks great AND connects. I study platform trends and audience behavior to maximize engagement.",
  },
  {
    index: "05",
    title: "Brand Adaptable",
    text: "Whether you're minimal, bold, playful, or premium — I adapt my style to fit your brand perfectly.",
  },
  {
    index: "06",
    title: "Remote-Ready",
    text: "Experienced working with international online clients. Comfortable across time zones, tools, and platforms.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];
