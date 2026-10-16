import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Feather,
  Sparkles,
  Mic2,
  Volume2,
  ChevronRight,
} from "lucide-react";

const navigationLinks = [
  { key: "home", to: "/" },
  { key: "blogs", to: "/blogs" },
  { key: "about", to: "/about" },
  { key: "contact", to: "/contact" },
];

const serviceCards = [
  { key: "service1", icon: BookOpen },
  { key: "service2", icon: Feather },
  { key: "service3", icon: Mic2 },
  { key: "service4", icon: Volume2 },
];

const portfolioItems = [
  { key: "portfolio1" },
  { key: "portfolio2" },
  { key: "portfolio3" },
];

const translations = {
  en: {
    pageTitle: "Portfolio",
    pageShortcut: "Frontend Portfolio · UI-first Experience",
    heroTitle:
      "A polished portfolio built fully with frontend visuals, rich gradients, and modern UX.",
    heroText:
      "This portfolio highlights my Arabic teaching services, Quran instruction, grammar coaching, poetry guidance, and Arabic content writing for learners of every age.",
    blogButton: "Read Blogs",
    highlightLabel: "Highlight",
    highlightTitle: "Smooth design, no API needed",
    highlightText:
      "All portfolio content is stored in the page and styled with dark glass panels, gradient accents, and tactile buttons.",
    featuresLabel: "UI features",
    features: [
      "Clear Arabic teaching pathways for learners of all levels.",
      "Structured lessons for conversation, grammar, and Quran study.",
      "Support for poetry, writing, and content development.",
    ],
    servicesLabel: "Services",
    servicesHeading: "What I offer",
    servicesText:
      "These service cards focus on Arabic teaching, Quran study, grammar mastery, poetry, and writing support for students of every age.",
    services: [
      {
        title: "Spoken Gulf Arabic",
        description:
          "Practical lessons in everyday spoken Arabic for confidence and real-world communication.",
      },
      {
        title: "Modern Standard Arabic",
        description:
          "Structured learning for reading, speaking, and comprehension in modern Arabic.",
      },
      {
        title: "Arabic Grammar",
        description:
          "Clear explanations and guided practice for grammar, sentence building, and accuracy.",
      },
      {
        title: "Qaida & Quran",
        description:
          "Qaida, Nazra, and Hifz programs for learners who want strong Quran recitation and memorization.",
      },
    ],
    portfolioLabel: "Portfolio",
    portfolioHeading: "Featured work",
    portfolioItems: [
      {
        title: "Arabic Language Foundation",
        description:
          "Learning pathways for spoken Gulf Arabic, Modern Standard Arabic, and grammar progression.",
      },
      {
        title: "Quran Learning Path",
        description:
          "Focused support for Qaida, Nazra, Hifz, and confident Quran reading with proper understanding.",
      },
      {
        title: "Poetry & Writing Mentorship",
        description:
          "Creative guidance for Arabic poetry, content writing, and strong expression for all learners.",
      },
    ],
    ctaLabel: "Ready to work together?",
    ctaHeading: "Launch your next Arabic project with confidence.",
    ctaText:
      "This portfolio reflects my Arabic teaching focus, Quran instruction, grammar coaching, and creative writing support for students of all ages.",
    contactButton: "Contact Me",
    blogArticleButton: "View Blog Articles",
    footerText: "© 2026 Noor Al-Qalam. All rights reserved.",
    languageToggle: "العربية",
    languageLabel: "Switch to Arabic",
    nav: {
      home: "Home",
      blogs: "Blogs",
      about: "About",
      contact: "Contact",
    },
  },
  ar: {
    pageTitle: "أعمالي",
    pageShortcut: "محفظة أمامية · تجربة واجهة مستخدم",
    heroTitle:
      "محفظة مصقولة مبنية بالكامل على واجهة أمامية، تدرجات غنية وتجربة مستخدم حديثة.",
    heroText:
      "هذه الصفحة لا تعتمد بعد الآن على بيانات من الخلفية. تم تصميمها لعرض المشاريع والخدمات والدروس بنفس النمط المتميز لصفحة البداية.",
    bookButton: "ابدأ التعلم",
    blogButton: "قراءة المدونة",
    highlightLabel: "أبرز ما في الأمر",
    highlightTitle: "تصميم سلس بدون API",
    highlightText:
      "يتم تخزين جميع محتويات المحفظة في الصفحة ويتم تنسيقها بألواح زجاجية داكنة وتدرجات لونية وتأثيرات الأزرار الجذابة.",
    featuresLabel: "ميزات الواجهة",
    features: [
      "تدرجات ناعمة متوهجة وبطاقات زجاجية مصقولة.",
      "طباعة واضحة مع ترتيب بصري قوي.",
      "أزرار CTA تفاعلية وتأثيرات عائمة مميزة.",
    ],
    servicesLabel: "الخدمات",
    servicesHeading: "ما أقدمه",
    servicesText:
      "تركز بطاقات الخدمة على تدريس اللغة العربية، تعليم القرآن، القواعد، الشعر، والكتابة للأعمار والمستويات المختلفة.",
    services: [
      {
        title: "العربية الخليجية المنطوقة",
        description:
          "دروس عملية في الحديث اليومي لبناء الثقة والتواصل الواقعي.",
      },
      {
        title: "العربية الفصحى الحديثة",
        description:
          "تعلم منظم للقراءة والمحادثة والفهم في العربية الحديثة.",
      },
      {
        title: "القواعد النحوية",
        description:
          "شرح واضح وتمارين عملية لبناء الجمل وتحسين الدقة اللغوية.",
      },
      {
        title: "القرآن والقيادة",
        description:
          "برامج لقواعد التجويد، الناظر، والحفظ لتعليم القرآن بشكل قوي ومتماسك.",
      },
    ],
    portfolioLabel: "أعمال",
    portfolioHeading: "أعمال مميزة",
    portfolioItems: [
      {
        title: "أساسيات اللغة العربية",
        description:
          "مسارات تعليمية للعربية الخليجية المنطوقة، العربية الفصحى الحديثة، والقواعد.",
      },
      {
        title: "مسار تعلم القرآن",
        description:
          "دعم متكامل للقيادة، الناظر، والحفظ مع تنمية الثقة في القراءة.",
      },
      {
        title: "الإرشاد الشعري والكتابي",
        description:
          "توجيه إبداعي للشعر العربي والكتابة والمحتوى اللغوي للمتعلمين.",
      },
    ],
    ctaLabel: "هل أنت مستعد للعمل معًا؟",
    ctaHeading: "أطلق مشروعك العربي التالي بثقة.",
    ctaText:
      "تعكس هذه المحفظة تركيزي على تدريس اللغة العربية، تعليم القرآن، القواعد، والكتابة الإبداعية للطلاب من جميع الأعمار.",
    contactButton: "اتصل بي",
    blogArticleButton: "عرض مقالات المدونة",
    footerText: "© 2026 نور القلم. جميع الحقوق محفوظة.",
    languageToggle: "English",
    languageLabel: "التبديل إلى الإنجليزية",
    nav: {
      home: "الصفحة الرئیسة",
      blogs: "المدونة",
      about: "من أنا",
      contact: "تواصل",
    },
  },
};

const Portfolio = () => {
  const [language, setLanguage] = useState("en");
  const isArabic = language === "ar";
  const t = translations[language];
  const sectionAlign = isArabic ? "text-right" : "text-left";
  const layoutDirection = isArabic ? "lg:flex-row-reverse" : "lg:flex-row";
  const tileTextAlign = isArabic ? "text-right" : "text-left";

  return (
    <div dir={isArabic ? "rtl" : "ltr"} lang={language} className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link to="/" className="inline-flex items-center gap-3 text-xl font-semibold tracking-tight text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300 shadow-sm shadow-amber-400/10">
              Home
            </span>
            {/* {t.pageTitle} */}
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-8 md:flex">
              {navigationLinks.map((link) => (
                <Link key={link.key} to={link.to} className="text-sm text-zinc-300 transition hover:text-white">
                  {t.nav[link.key]}
                </Link>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => setLanguage(isArabic ? "en" : "ar")}
              aria-label={t.languageLabel}
              className="rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-amber-300 hover:text-white"
            >
              {t.languageToggle}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pt-12 pb-20 md:px-10 lg:pb-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-linear-to-b from-amber-500/10 to-transparent blur-3xl" />
          <div className={`mx-auto flex max-w-7xl flex-col gap-12 lg:items-center lg:gap-16 ${layoutDirection}`}>
            <div className="relative z-10 flex-1">
              <img
                src="/WhatsApp%20Image%202026-02-01%20at%209.09.28%20AM.jpeg"
                alt="Ihsan Ullah Fareed"
                className={`mb-6 h-28 w-28 rounded-full border border-amber-400/20 object-cover shadow-xl shadow-black/20 sm:h-32 sm:w-32 ${isArabic ? "ml-auto" : ""}`}
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-200 shadow-sm shadow-amber-400/10">
                {t.pageShortcut}
              </span>

              <h1 className={`mt-8 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl ${sectionAlign}`}>
                {t.heroTitle}
              </h1>

              <p className={`mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg ${sectionAlign}`}>
                {t.heroText}
              </p>

              <div className={`mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap ${isArabic ? "justify-end" : "justify-start"}`}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
                >
                  {t.bookButton}
                  <ChevronRight className={`${isArabic ? "mr-2" : "ml-2"} h-4 w-4`} />
                </Link>
                <Link
                  to="/blogs"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-amber-300 hover:text-amber-300"
                >
                  {t.blogButton}
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div className={`rounded-3xl border border-zinc-800/80 bg-white/5 p-8 shadow-xl shadow-amber-500/5 backdrop-blur-xl ${tileTextAlign}`}>
                <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">{t.highlightLabel}</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">{t.highlightTitle}</h2>
                <p className="mt-4 text-zinc-400">{t.highlightText}</p>
              </div>

              <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8 shadow-xl shadow-black/30">
                <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">{t.featuresLabel}</p>
                <ul className="mt-6 space-y-4 text-zinc-300">
                  {t.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Sparkles className="mt-1 h-5 w-5 text-amber-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-950/80 px-6 py-16 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-3 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">{t.servicesLabel}</p>
              <h2 className="text-3xl font-semibold text-zinc-50 sm:text-4xl">{t.servicesHeading}</h2>
              <p className="mx-auto max-w-2xl text-zinc-400">{t.servicesText}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {serviceCards.map((service, index) => {
                const Icon = service.icon;
                const card = t.services[index];
                return (
                  <div
                    key={service.key}
                    className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-amber-300/50 hover:bg-zinc-900"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-3 text-zinc-400">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-3 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">{t.portfolioLabel}</p>
              <h2 className="text-3xl font-semibold text-zinc-50 sm:text-4xl">{t.portfolioHeading}</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {portfolioItems.map((item, index) => {
                const work = t.portfolioItems[index];
                return (
                  <div
                    key={item.key}
                    className="rounded-3xl border border-zinc-800/80 bg-white/5 p-8 shadow-lg shadow-amber-500/5 transition hover:-translate-y-1 hover:border-amber-300"
                  >
                    <h3 className="text-xl font-semibold text-white">{work.title}</h3>
                    <p className="mt-4 text-zinc-400">{work.description}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-300">
                      <ChevronRight className="h-4 w-4" />
                      {isArabic ? "تفاصيل الحالة" : "Case study details"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-linear-to-br from-zinc-950 via-zinc-900 to-black px-6 py-16 md:px-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-linear-to-b from-amber-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-7xl rounded-[2.75rem] border border-zinc-800/70 bg-zinc-950/90 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className={tileTextAlign}>
                <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">{t.ctaLabel}</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{t.ctaHeading}</h2>
                <p className="mt-4 max-w-xl text-zinc-400">{t.ctaText}</p>
              </div>

              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block rounded-3xl bg-amber-400 px-6 py-4 text-center text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
                >
                  {t.contactButton}
                </Link>
                <Link
                  to="/blogs"
                  className="block rounded-3xl border border-zinc-700 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-zinc-100 transition hover:border-amber-300 hover:text-amber-300"
                >
                  {t.blogArticleButton}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/70 px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className={`text-sm text-zinc-400 ${sectionAlign}`}>{t.footerText}</p>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
            {navigationLinks.map((link) => (
              <Link key={link.key} to={link.to} className="transition hover:text-white">
                {t.nav[link.key]}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
