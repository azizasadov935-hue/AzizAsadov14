/**
 * Barcha rasmlar `public/images/` papkasida saqlanadi.
 * Har bir rasm saytda FAQAT BIR MARTA ishlatiladi — dublikat yo'q.
 *
 * Siz yuborgan suratlarni quyidagi nomlar bilan `public/images/` ga joylang:
 */
export const images = {
  avatar: "/images/avatar.png", // eski saytdan olingan real avatar (nav va footer'da kichik)
  hero: "/images/04-office-standing.jpg", // ofisda kreslo orqasida turgan (zaytun rangli kurtka)
  about: "/images/08-white-portrait.jpg", // oq fonda yaqin portret
  manifesto: "/images/07-red-thinking.jpg", // qizil fonda, qo'li iyagida, soat bilan
  contact: "/images/06-red-portrait.jpg", // qizil fonda to'g'ri qarab turgan portret
  gallery: [
    { src: "/images/01-office-top.jpg", alt: "Ofis, yuqoridan ko'rinish", ratio: "1/1", caption: "Ofis — yuqoridan" },
    { src: "/images/09-mirror-shirt.jpg", alt: "Ko'zgu oldida, kulrang ko'ylak", ratio: "3/4", caption: "Kundalik" },
    { src: "/images/02-orange-chair.jpg", alt: "Krem kresloda, to'q sariq fon", ratio: "1/1", caption: "Studiya I" },
    { src: "/images/10-mirror-open.jpg", alt: "Ko'zgu oldida, ochiq ko'ylak", ratio: "3/4", caption: "Kundalik II" },
    { src: "/images/03-orange-portrait.jpg", alt: "Yaqin portret, to'q sariq fon", ratio: "1/1", caption: "Studiya II" },
    { src: "/images/05-orange-chair-full.jpg", alt: "Kresloda to'liq bo'y, to'q sariq fon", ratio: "1/1", caption: "Studiya III" },
  ],
};

export const socials = [
  { label: "Telegram", href: "https://t.me/AzizAsadov0", handle: "@AzizAsadov0" },
  { label: "Instagram", href: "https://instagram.com/azizasadov_official", handle: "@azizasadov_official" },
  { label: "LinkedIn", href: "https://linkedin.com/in/aziz-asadov-5956373b1", handle: "aziz-asadov" },
  { label: "X", href: "https://x.com/AzizjonAsadov", handle: "@AzizjonAsadov" },
  { label: "Facebook", href: "https://facebook.com/azizjonasadov14", handle: "azizjonasadov14" },
];

export const contact = {
  phone: "+998 50 503 34 41",
  phoneHref: "tel:+998505033441",
  telegram: "https://t.me/Azizjon_Asadov",
  bot: "https://t.me/AzizjonAsadov_bot",
  channel: "https://t.me/AzizAsadov0",
  location: "Qashqadaryo, O'zbekiston",
};

export const stats = [
  { value: 20, suffix: "+", label: "AI loyihalar" },
  { value: 200, suffix: "+", label: "Yaratilgan kontent" },
  { value: 30, suffix: "+", label: "Web sayt va botlar" },
  { value: 10, suffix: "+", label: "Hamkor brendlar" },
];

export const experience = [
  {
    period: "2025 — Hozir",
    role: "AI Team Leader",
    company: "Izdihom PR / Marketing Agency",
    desc: "AI bo'limini boshqarish, kompaniya uchun AI strategiyalar ishlab chiqish va avtomatlashtirish tizimlarini joriy etish.",
  },
  {
    period: "Media",
    role: "AI Media Production",
    company: "Kontent ekotizimi",
    desc: "Brendlar uchun video roliklar, reklama materiallari, posterlar va AI asosidagi kontentlar yaratish.",
  },
  {
    period: "Systems",
    role: "Biznes avtomatlashtirish",
    company: "Automation Systems",
    desc: "CRM integratsiyalari, AI yordamchilar, workflow va murojaatlarni boshqarish tizimlari.",
  },
  {
    period: "Telegram",
    role: "Telegram ekotizimi",
    company: "Bot Development",
    desc: "AI yordamchi botlar, avtomatik javob tizimlari va mijozlar bilan aloqa markazlari.",
  },
  {
    period: "Startup",
    role: "AI mahsulotlar",
    company: "Startup Development",
    desc: "SaaS platformalar, raqamli ekotizimlar, MVP ishlab chiqish va startup loyihalar.",
  },
];

export const services = [
  {
    n: "01",
    title: "AI tizimlar ishlab chiqish",
    desc: "Biznesingiz uchun maxsus AI yechimlar: chat-yordamchilar, tahlil tizimlari, intellektual agentlar va LLM asosidagi mahsulotlar.",
    tags: ["LLM", "Agents", "RAG", "OpenAI API"],
  },
  {
    n: "02",
    title: "Telegram bot ekotizimi",
    desc: "Savdo, qo'llab-quvvatlash, ta'lim va CRM bilan integratsiyalashgan kuchli Telegram botlar.",
    tags: ["Bot API", "Payments", "Mini Apps"],
  },
  {
    n: "03",
    title: "Biznes avtomatlashtirish",
    desc: "Takrorlanuvchi jarayonlarni n8n, Make va maxsus workflow tizimlari orqali avtomatlashtirish.",
    tags: ["n8n", "Make", "CRM", "Workflow"],
  },
  {
    n: "04",
    title: "AI media production",
    desc: "Brendlar uchun AI yordamida video, poster va reklama materiallari — g'oyadan tayyor kontentgacha.",
    tags: ["Video", "Poster", "Reels"],
  },
  {
    n: "05",
    title: "Premium web development",
    desc: "Tez, SEO-optimallashtirilgan va nafis dizaynli web saytlar hamda raqamli platformalar.",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    n: "06",
    title: "Startup MVP",
    desc: "G'oyani qisqa muddatda ishlaydigan MVP ga aylantirish: strategiya, dizayn va ishlab chiqish.",
    tags: ["Strategy", "Design", "Launch"],
  },
];

export const projects = [
  {
    n: "01",
    title: "Echo AI Assistant",
    category: "AI Platform",
    desc: "Marketing, tarjima, kontent ishlab chiqish va biznes yordamchi funksiyalarini birlashtirgan AI tizim.",
    tags: ["AI Chat", "Content", "Translation"],
  },
  {
    n: "02",
    title: "BuildIQ Pro",
    category: "Computer Vision",
    desc: "Qurilish va interyer sohasi uchun rasm tahlili, smeta hisoblash va 3D vizualizatsiya.",
    tags: ["Image Analysis", "Estimates", "3D"],
  },
  {
    n: "03",
    title: "AI Savdo Yordamchisi",
    category: "Telegram Bot",
    desc: "Mahsulot tavsiya qilish, buyurtma qabul qilish va sotuv jarayonlarini to'liq avtomatlashtirish.",
    tags: ["Bot", "Recommendations", "Sales"],
  },
  {
    n: "04",
    title: "AI Mijozlar Markazi",
    category: "Automation",
    desc: "Telegram, web va ijtimoiy tarmoqlardan kelgan murojaatlarni bitta markazda boshqaruvchi AI operator.",
    tags: ["Leads", "CRM", "AI Operator"],
  },
  {
    n: "05",
    title: "AI Biznes Paneli",
    category: "Analytics",
    desc: "Sotuvlar, mijozlar va ko'rsatkichlarni real vaqtda kuzatish hamda prognozlash paneli.",
    tags: ["Dashboard", "Forecasting"],
  },
  {
    n: "06",
    title: "AI O'qituvchi Bot",
    category: "EdTech",
    desc: "O'quvchilar uchun savol-javob, uy vazifasi yordami va test tizimiga ega aqlli ta'lim yordamchisi.",
    tags: ["Q&A", "Tests", "Education"],
  },
  {
    n: "07",
    title: "AI Yangiliklar Markazi",
    category: "Media",
    desc: "Texnologiya yangiliklarini yig'ish, qisqartirish va avtomatik e'lon qiluvchi media platforma.",
    tags: ["Aggregator", "Summaries", "Auto-publish"],
  },
  {
    n: "08",
    title: "Premium Web Studio",
    category: "Web",
    desc: "Shaxsiy brendlar va startaplar uchun zamonaviy, SEO-optimallashtirilgan web saytlar tizimi.",
    tags: ["Web", "SEO", "UI/UX"],
  },
];

export const skills = {
  ai: ["ChatGPT", "Claude", "Gemini", "OpenAI API", "Prompt Engineering", "Midjourney", "Runway"],
  dev: ["TypeScript", "React", "Next.js", "Node.js", "Python", "Tailwind CSS", "PostgreSQL"],
  tools: ["n8n", "Make", "Telegram API", "Figma", "Vercel", "Git", "Framer Motion"],
};

export const nav = [
  { label: "Haqimda", href: "#about" },
  { label: "Xizmatlar", href: "#services" },
  { label: "Loyihalar", href: "#projects" },
  { label: "Galereya", href: "#gallery" },
  { label: "Aloqa", href: "#contact" },
];
