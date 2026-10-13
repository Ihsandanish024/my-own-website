import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Sparkles,
  BookOpen,
  Feather,
  Youtube,
  Linkedin,
  Facebook,
  ChevronRight,
} from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

const translations = {
  en: {
    navItems: [
      { label: "Home", to: "/" },
      { label: "Portfolio", to: "/portfolio" },
      { label: "Blogs", to: "/blogs" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
    admin: "Admin Login",
    hero: {
      roleTag: "Arabic Teacher · Quran · Grammar Mentor",
      heading: "Arabic teaching is my core service and the heart of everything I do.",
      description:
        "I teach spoken Gulf Arabic, Modern Standard Arabic, Arabic grammar, Quran with Nazra and Hifz, Arabic poetry, and Arabic content writing for students of all ages.",
      buttons: {
        portfolio: "Explore Portfolio",
        blogs: "Read Blogs",
        contact: "Contact Me",
      },
    },
    featured: {
      sectionLabel: "Featured Learning Areas",
      cards: [
        {
          title: "Spoken Gulf Arabic",
          description: "Daily conversation skills for confident communication.",
        },
        {
          title: "Modern Standard Arabic",
          description: "Reading, speaking, grammar, and clear expression.",
        },
      ],
      whyTitle: "Why learners choose me",
      whyDescription:
        "I focus on Arabic teaching for all ages, combining Quran reading and memorization, grammar, poetry, and content writing in a practical and inspiring learning experience.",
    },
    about: {
      label: "About",
      heading: "A teacher of Arabic language, Quran, grammar, and literary expression.",
      description:
        "With years of teaching experience, I help students grow in spoken Arabic, Modern Standard Arabic, grammar, Quran recitation, poetry, and Arabic writing with clarity and confidence.",
      cards: [
        {
          title: "Spoken Gulf Arabic",
          description:
            "Practical lessons for everyday conversation, pronunciation, and fluency.",
        },
        {
          title: "Modern Standard Arabic & Grammar",
          description:
            "Structured learning for reading, writing, and mastering essential grammar rules.",
        },
        {
          title: "Quran, Poetry & Writing",
          description:
            "Qaida, Nazra, Hifz, Arabic poetry, and content writing for learners of all ages.",
        },
      ],
    },
    services: {
      label: "Services",
      heading: "What I offer",
      description:
        "My core work is Arabic teaching, Quran study, grammar, poetry, and Arabic content writing for students of every age.",
    },
    portfolio: {
      label: "Featured Portfolio",
      heading: "Selected learning areas",
      button: "View Portfolio",
      featuredTag: "Featured",
      details: "View details",
    },
    blogs: {
      label: "Latest Blogs",
      heading: "Recent articles",
      button: "Explore blogs",
      readMore: "Read more",
    },
    testimonials: {
      label: "Testimonials",
      heading: "Trusted by learners and families.",
      description:
        "Feedback from students who experienced Arabic teaching, Quran learning, grammar coaching, and poetry guidance.",
    },
    contact: {
      label: "Contact",
      heading: "Start your Arabic journey with confidence.",
      description:
        "Reach out by email or connect through social channels for a tailored lesson plan.",
      emailLabel: "Email",
      socialLabel: "Social",
      connectTitle: "Let’s connect",
      connectDescription:
        "Send a message for Arabic lessons, Quran classes, grammar support, poetry guidance, or content writing and receive detailed guidance within one business day.",
      messageButton: "Message me",
    },
    footer: {
      copyright: "© 2026 Ihsan Ullah Fareed. All rights reserved.",
      links: ["Home", "Portfolio", "Blogs", "About", "Contact"],
    },
    languageButton: "العربیة",
  },
  ar: {
    navItems: [
      { label: "الصفحة الرئيسية", to: "/" },
      { label: "السیرة الذاتیة", to: "/portfolio" },
      { label: "المدونات", to: "/blogs" },
      { label: "من أنا", to: "/about" },
      { label: "تواصل", to: "/contact" },
    ],
    admin: "تسجيل دخول الإدارة",
    hero: {
      roleTag: "مدرس عربي · قرآن · قواعد",
      heading: "تدريس اللغة العربية هو خدمتي الأساسية وقلب ما أقدمه.",
      description:
        "أدرس العربية الخليجية المنطوقة، العربية الفصحى الحديثة، القواعد النحوية، القرآن مع الناظر والحفظ، الشعر العربي، وكتابة المحتوى العربي لطلاب من جميع الأعمار.",
      buttons: {
        portfolio: "استعرض الأعمال",
        blogs: "قراءة المدونات",
        contact: "تواصل معي",
      },
    },
    featured: {
      sectionLabel: "مجالات التعلم المميزة",
      cards: [
        {
          title: "العربية الخليجية المنطوقة",
          description: "مهارات المحادثة اليومية للتواصل بثقة.",
        },
        {
          title: "العربية الفصحى الحديثة",
          description: "القراءة، التحدث، القواعد، والتعبير الواضح.",
        },
      ],
      whyTitle: "لماذا يختارني المتعلمون",
      whyDescription:
        "أركز على تدريس اللغة العربية لجميع الأعمار، مع تعليم القرآن بالحفظ والنظر، والقواعد، والشعر، وكتابة المحتوى في تجربة عملية ومشجعة.",
    },
    about: {
      label: "من أنا",
      heading: "مدرس اللغة العربية، القرآن، القواعد، والتعبير الأدبي.",
      description:
        "بخبرة في التعليم، أساعد الطلاب على النمو في المحادثة العربية، العربية الفصحى الحديثة، القواعد، قراءات القرآن، الشعر، والكتابة العربية بثقة ووضوح.",
      cards: [
        {
          title: "العربية الخليجية المنطوقة",
          description:
            "دروس عملية للمحادثة اليومية والنطق والطلاقة.",
        },
        {
          title: "العربية الفصحى الحديثة والقواعد",
          description:
            "تعلم منظم للقراءة والكتابة وإتقان قواعد اللغة الأساسية.",
        },
        {
          title: "القرآن، الشعر، والكتابة",
          description:
            "القيادة، الناظر، الحفظ، الشعر العربي، وكتابة المحتوى للمتعلمين من جميع الأعمار.",
        },
      ],
    },
    services: {
      label: "الخدمات",
      heading: "ما أقدمه",
      description:
        "عملنا الأساسي هو تدريس اللغة العربية، تعليم القرآن، القواعد، الشعر، وكتابة المحتوى العربي لطلاب من جميع الأعمار.",
    },
    portfolio: {
      label: "أعمال مختارة",
      heading: "مجالات التعلم المختارة",
      button: "عرض المحفظة",
      featuredTag: "مميز",
      details: "عرض التفاصيل",
    },
    blogs: {
      label: "أحدث المقالات",
      heading: "مقالات حديثة",
      button: "استكشف المدونات",
      readMore: "اقرأ المزيد",
    },
    testimonials: {
      label: "آراء العملاء",
      heading: "يثق بي الطلاب والعائلات.",
      description:
        "آراء من جربوا تدريس اللغة العربية، تعليم القرآن، القواعد، وإرشاد الشعر.",
    },
    contact: {
      label: "تواصل",
      heading: "ابدأ رحلتك في اللغة العربية بثقة.",
      description:
        "تواصل عبر البريد الإلكتروني أو وسائل التواصل للحصول على خطة دروس مخصصة.",
      emailLabel: "البريد الإلكتروني",
      socialLabel: "التواصل",
      connectTitle: "هيا نتواصل",
      connectDescription:
        "أرسل رسالة للدروس العربية، صفوف القرآن، دعم القواعد، إرشاد الشعر، أو كتابة المحتوى، وسأرسل لك توجيهات مفصلة خلال يوم عمل واحد.",
      messageButton: "أرسل رسالة",
    },
    footer: {
      copyright: "© 2026 أكاديمية عبيد. جميع الحقوق محفوظة.",
      links: ["الرئيسية", "المحفظة", "المدونات", "من أنا", "تواصل"],
    },
    languageButton: "English",
  },
};

const services = [
  {
    title: {
      en: "Spoken Gulf Arabic",
      ar: "العربية الخليجية المنطوقة",
    },
    description: {
      en: "Everyday speaking practice for confidence, fluency, and real communication.",
      ar: "تمارين يومية في المحادثة لبناء الثقة والطلاقة والتواصل الواقعي.",
    },
    icon: BookOpen,
  },
  {
    title: {
      en: "Modern Standard Arabic",
      ar: "العربية الفصحى الحديثة",
    },
    description: {
      en: "Reading, writing, speaking, and grammar skills for clear expression.",
      ar: "مهارات القراءة والكتابة والتحدث والقواعد للتعبير الواضح.",
    },
    icon: Sparkles,
  },
  {
    title: {
      en: "Arabic Grammar",
      ar: "القواعد العربية",
    },
    description: {
      en: "Step-by-step guidance in sentence structure, rules, and accuracy.",
      ar: "شرح تدريجي في تركيب الجمل والقواعد والدقة اللغوية.",
    },
    icon: Sparkles,
  },
  {
    title: {
      en: "Qaida & Quran",
      ar: "القيادة والقرآن",
    },
    description: {
      en: "Qaida, Nazra, and Hifz for confident Quran reading and memorization.",
      ar: "القيادة، الناظر، والحفظ لتعلم القرآن بثقة ومعرفة.",
    },
    icon: BookOpen,
  },
  {
    title: {
      en: "Arabic Poetry",
      ar: "الشعر العربي",
    },
    description: {
      en: "Creative guidance in Arabic poetry and literary expression.",
      ar: "إرشاد إبداعي في الشعر العربي والتعبير الأدبي.",
    },
    icon: Feather,
  },
  {
    title: {
      en: "Arabic Content Writing",
      ar: "كتابة المحتوى العربي",
    },
    description: {
      en: "Writing for students of all ages, from simple paragraphs to meaningful Arabic content.",
      ar: "كتابة مناسبة للطلاب من جميع الأعمار، من الفقرات البسيطة إلى المحتوى العربي المعني.",
    },
    icon: Sparkles,
  },
];

const portfolioItems = [
  {
    title: {
      en: "Arabic Language Foundation",
      ar: "أساسيات اللغة العربية",
    },
    description: {
      en: "A complete path for spoken Gulf Arabic, Modern Standard Arabic, and grammar development.",
      ar: "مسار كامل للعربية الخليجية المنطوقة، العربية الفصحى الحديثة، وتطوير القواعد.",
    },
  },
  {
    title: {
      en: "Quran Learning Path",
      ar: "مسار تعلم القرآن",
    },
    description: {
      en: "Focused learning for Qaida, Nazra, and Hifz with clear understanding and consistency.",
      ar: "تعليم موجه للقيادة، الناظر، والحفظ مع فهم واضح وثبات في الأداء.",
    },
  },
  {
    title: {
      en: "Poetry & Writing Mentorship",
      ar: "إرشاد الشعر والكتابة",
    },
    description: {
      en: "Creative guidance for Arabic poetry, writing, and expressive content creation.",
      ar: "إرشاد إبداعي للشعر العربي، الكتابة، وصياغة المحتوى التعبيري.",
    },
  },
];

const blogPreviews = [
  {
    title: {
      en: "How to Learn Spoken Gulf Arabic",
      ar: "كيف تتعلم العربية الخليجية المنطوقة",
    },
    excerpt: {
      en: "A practical path to speaking clearly, confidently, and naturally in everyday Arabic.",
      ar: "مسار عملي للتحدث بوضوح وثقة وطبيعية في العربية اليومية.",
    },
  },
  {
    title: {
      en: "Building Strong Arabic Grammar",
      ar: "بناء قواعد عربية قوية",
    },
    excerpt: {
      en: "A guide to understanding grammar patterns and developing confident sentence-building skills.",
      ar: "دليل لفهم أنماط القواعد وتطوير مهارات بناء الجمل بثقة.",
    },
  },
];

const socialLinks = [
  {
    label: {
      en: "Youtube",
      ar: "يوتيوب",
    },
    icon: Youtube,
    href: "https://youtube.com/channel/UChig7uLbEqv_lKk3HX6Ul8Q?si=liPA2dhzVbZ6EdIX",
  },
  {
    label: {
      en: "Facebook",
      ar: "فيسبوك",
    },
    icon: Facebook,
    href: "https://www.facebook.com/share/1AvHw9W3MG/",
  },
  {
    label: {
      en: "LinkedIn",
      ar: "لينكدإن",
    },
    icon: Linkedin,
    href: "https://www.linkedin.com/in/عبيدالرحمن-يوسف-زئي-2a893b296?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
];

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isArabic, setIsArabic] = useState(false);
  const lang = isArabic ? "ar" : "en";
  const t = translations[lang];

  const footerLinkPath = (link) => {
    if (link === "Home" || link === "الصفحة الرئيسية" || link === "الرئيسية") return "/";
    if (link === "Portfolio" || link === "السیرة الذاتیة" || link === "المحفظة") return "/portfolio";
    if (link === "Blogs" || link === "المدونات") return "/blogs";
    if (link === "About" || link === "من أنا") return "/about";
    return "/contact";
  };

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-10">
          <Link to="/" className="inline-flex items-center gap-3 text-xl font-semibold tracking-tight text-white">
            {/* <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300 shadow-sm shadow-amber-400/10">
              A
            </span> */}
            Ihsan Ullah Fareed
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsArabic((prev) => !prev)}
              className="rounded-full border border-zinc-700 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-amber-300 hover:text-amber-300"
            >
              {t.languageButton}
            </button>
            <div className="hidden items-center gap-3 md:flex">
              <Link
                to="/admin/login"
                className="rounded-full border border-zinc-700 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-amber-300 hover:text-amber-300"
              >
                {t.admin}
              </Link>
              <ThemeToggle />
            </div>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-300 transition hover:border-amber-300 hover:text-amber-300 md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {t.navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm text-zinc-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {menuOpen && (
          <div className="border-t border-zinc-800 bg-zinc-950/95 px-6 py-5 md:hidden">
            <nav className="space-y-4">
              {t.navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-sm text-zinc-200 transition hover:border-amber-400 hover:bg-zinc-800"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/admin/login"
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl border border-zinc-800 bg-white/5 px-4 py-3 text-sm text-zinc-200 transition hover:border-amber-400 hover:text-amber-300"
              >
                {t.admin}
              </Link>
              <ThemeToggle className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-left text-sm text-zinc-200 transition hover:border-amber-400 hover:text-amber-300" />
              <button
                type="button"
                onClick={() => {
                  setIsArabic((prev) => !prev);
                  setMenuOpen(false);
                }}
                className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-left text-sm text-zinc-200 transition hover:border-amber-400 hover:text-amber-300"
              >
                {t.languageButton}
              </button>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pt-12 pb-20 md:px-10 lg:pb-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl" />
          <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="relative z-10 flex-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-200 shadow-sm shadow-amber-400/10">
                {t.hero.roleTag}
              </span>

              <h1 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
                {t.hero.heading}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                {t.hero.description}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
                >
                  {t.hero.buttons.portfolio}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/blogs"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-amber-300 hover:text-amber-300"
                >
                  {t.hero.buttons.blogs}
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/90 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-amber-300 hover:text-amber-300"
                >
                  {t.hero.buttons.contact}
                </Link>
              </div>
            </div>

            <div className="relative flex-1 rounded-4xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-2xl shadow-amber-500/5 backdrop-blur-xl sm:p-10">
              <div className="absolute inset-x-0 -top-8 h-24 rounded-4xl bg-gradient-to-r from-amber-400/15 via-transparent to-sky-400/10 blur-3xl" />
              <div className="relative space-y-6">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6 shadow-lg shadow-black/20">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">{t.featured.sectionLabel}</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {t.featured.cards.map((card) => (
                      <div key={card.title} className="rounded-3xl bg-zinc-900/90 p-4 text-sm text-zinc-300 ring-1 ring-white/5 transition hover:-translate-y-1 hover:border-amber-400/20 hover:bg-zinc-800/90">
                        <p className="font-semibold text-zinc-100">{card.title}</p>
                        <p className="mt-2 text-sm text-zinc-400">{card.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-6 text-zinc-300 shadow-inner shadow-black/20">
                  <h2 className="text-xl font-semibold text-zinc-50">{t.featured.whyTitle}</h2>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {t.featured.whyDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

    
        <section className="border-t border-zinc-800/70 px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80">{t.about.label}</p>
              <h2 className="mt-4 text-3xl font-semibold text-zinc-100 sm:text-4xl">{t.about.heading}</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
                {t.about.description}
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {t.about.cards.map((card) => (
                <div key={card.title} className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-7 shadow-xl shadow-black/10 transition hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-zinc-100">{card.title}</h3>
                  <p className="mt-4 text-zinc-400 leading-7">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80">{t.services.label}</p>
                <h2 className="mt-4 text-3xl font-semibold text-zinc-100 sm:text-4xl">{t.services.heading}</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-zinc-400">{t.services.description}</p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title.en} className="group rounded-4xl border border-zinc-800 bg-zinc-900/80 p-7 transition hover:-translate-y-1 hover:border-amber-400/30 hover:bg-zinc-800/90">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-amber-400/10 text-amber-300 transition group-hover:bg-amber-300/15">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-zinc-100">{service.title[lang]}</h3>
                    <p className="mt-3 text-zinc-400 leading-7">{service.description[lang]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-800/70 px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80">{t.portfolio.label}</p>
                <h2 className="mt-4 text-3xl font-semibold text-zinc-100 sm:text-4xl">{t.portfolio.heading}</h2>
              </div>
              <Link
                to="/portfolio"
                className="inline-flex items-center rounded-full border border-zinc-700 bg-white/5 px-5 py-3 text-sm text-zinc-200 transition hover:border-amber-300 hover:text-amber-300"
              >
                {t.portfolio.button}
              </Link>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {portfolioItems.map((item) => (
                <div key={item.title.en} className="group overflow-hidden rounded-4xl border border-zinc-800 bg-zinc-900/80 p-7 transition hover:-translate-y-1 hover:border-amber-400/30 hover:bg-zinc-800/90">
                  <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">{t.portfolio.featuredTag}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-zinc-100">{item.title[lang]}</h3>
                  <p className="mt-4 text-zinc-400 leading-7">{item.description[lang]}</p>
                  <button className="mt-8 inline-flex items-center text-sm font-semibold text-amber-300 transition group-hover:text-amber-200">
                    {t.portfolio.details}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80">{t.blogs.label}</p>
                <h2 className="mt-4 text-3xl font-semibold text-zinc-100 sm:text-4xl">{t.blogs.heading}</h2>
              </div>
              <Link
                to="/blogs"
                className="inline-flex items-center rounded-full border border-zinc-700 bg-white/5 px-5 py-3 text-sm text-zinc-200 transition hover:border-amber-300 hover:text-amber-300"
              >
                {t.blogs.button}
              </Link>
            </div>

            <div className="mt-10 grid gap-6 xl:grid-cols-2">
              {blogPreviews.map((blog) => (
                <article key={blog.title.en} className="rounded-4xl border border-zinc-800 bg-zinc-900/80 p-8 transition hover:-translate-y-1 hover:border-amber-400/30 hover:bg-zinc-800/90">
                  <h3 className="text-2xl font-semibold text-zinc-100">{blog.title[lang]}</h3>
                  <p className="mt-4 text-zinc-400 leading-7">{blog.excerpt[lang]}</p>
                  <Link
                    to="/blogs"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-amber-300 transition hover:text-amber-200"
                  >
                    {t.blogs.readMore}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 pt-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-4xl border border-zinc-800 bg-zinc-900/80 p-10 shadow-2xl shadow-black/20">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80">{t.contact.label}</p>
                <h2 className="mt-4 text-3xl font-semibold text-zinc-100 sm:text-4xl">{t.contact.heading}</h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400">{t.contact.description}</p>

                <div className="mt-10 space-y-5">
                  <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6">
                    <p className="text-sm text-amber-300/90">{t.contact.emailLabel}</p>
                    <a href="mailto:ubaidyousufzai9@gmail.com" className="mt-2 block text-lg font-semibold text-zinc-100 hover:text-amber-300">
                      ubaidyousufzai9@gmail.com
                    </a>
                  </div>

                  <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6">
                    <p className="text-sm text-amber-300/90">{t.contact.socialLabel}</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.label.en}
                            href={social.href}
                            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-sm text-zinc-200 transition hover:border-amber-300 hover:text-amber-300"
                          >
                            <Icon className="h-4 w-4" />
                            {social.label[lang]}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-4xl bg-linear-to-br from-amber-400/10 via-transparent to-sky-400/5 p-8 shadow-inner shadow-black/20">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-950/95 p-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">{t.contact.connectTitle}</p>
                  <p className="mt-6 text-lg leading-8 text-zinc-300">{t.contact.connectDescription}</p>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
                  >
                    {t.contact.messageButton}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/70 px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-zinc-400">{t.footer.copyright}</p>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
            {t.footer.links.map((link) => (
              <Link key={link} to={footerLinkPath(link)} className="transition hover:text-white">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
