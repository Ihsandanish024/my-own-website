import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Sparkles,
  BookOpen,
  Feather,
  Mic2,
  Volume2,
  Mail,
  Youtube,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
  MessageSquare,
  Quote,
} from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

const translations = {
  en: {
    navItems: [
      { label: "Home", to: "/" },
      { label: "Book", to: "/book" },
      { label: "Portfolio", to: "/portfolio" },
      { label: "Blogs", to: "/blogs" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
    admin: "Admin Login",
    hero: {
      roleTag: "Arabic Teacher · Poet · Voice Artist",
      heading: "Elegant Arabic teaching, poetry, and premium voice-over services.",
      description:
        "I help learners discover the depth of Arabic language and literature with clear pronunciation, expressive poetry, and professional Arabic voice content for videos and advertisements.",
      buttons: {
        portfolio: "Explore Portfolio",
        blogs: "Read Blogs",
        contact: "Contact Me",
      },
    },
    featured: {
      sectionLabel: "Featured Services",
      cards: [
        {
          title: "Accent Precision",
          description: "Professional pronunciation coaching.",
        },
        {
          title: "Literary Craft",
          description: "Poetry and writing with authentic Arabic voice.",
        },
      ],
      whyTitle: "Why Choose My Services",
      whyDescription:
        "Combining pedagogy, literature, and voice artistry, I deliver refined Arabic communication that feels both modern and deeply rooted in tradition.",
    },
    book: {
      sectionLabel: "New Book",
      title: "A bilingual expression reference: Arabic, Pashto",
      subtitle: "An illustrated guide to get expressions in either arabic and pashto languages",
      description:
        "This unique collection presents idiomatic expressions in Arabic, English, and Pashto. Readers can quickly find equivalent idioms across the three languages.",
      highlights: [
        "Beautiful cover art and sample pages.",
        "Easy-to-follow reading exercises.",
        "Contact details and purchase options included.",
      ],
      button: "View Book",
      buyButton: "Order Now",
      contactLabel: "Buy by email",
      contactEmail: "ubaidyousufzai9@gmail.com",
      whatsappLink: "https://wa.me/923480281550?text=Hello%20Ubaid%2C%20I%20want%20to%20order%20the%20book.",
    },
    about: {
      label: "About",
      heading: "A teacher of Arabic language, poetry, and refined expression.",
      description:
        "With years of teaching experience and passion for Arabic literature, I bring clarity and elegance to every lesson, article, and voice recording I create.",
      cards: [
        {
          title: "Teaching Mastery",
          description:
            "Personalized lessons for spoken Arabic, grammar, and fluency that grow confidence fast.",
        },
        {
          title: "Poetry & Literature",
          description:
            "Crafted Arabic poetry with soulful rhythm and rich literary expression.",
        },
        {
          title: "Voice-over Expertise",
          description:
            "Professional Arabic voice for commercials, narrations, and branded media.",
        },
      ],
    },
    services: {
      label: "Services",
      heading: "What I offer",
      description:
        "Elegant, modern service cards designed to communicate experience and trust.",
    },
    portfolio: {
      label: "Featured Portfolio",
      heading: "Selected work & services",
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
      heading: "Trusted by learners and creative teams.",
      description:
        "Feedback from students and collaborators who experienced Arabic teaching, writing, and voice-over services.",
    },
    contact: {
      label: "Contact",
      heading: "Start your Arabic journey or book a voice-over.",
      description:
        "Reach out by email or connect through social channels for a tailored consultation.",
      emailLabel: "Email",
      socialLabel: "Social",
      connectTitle: "Let’s connect",
      connectDescription:
        "Send a message for teaching, poetry, narration, or consulting and receive detailed guidance within one business day.",
      messageButton: "Message me",
    },
    footer: {
      copyright: "© 2026 Ubaid academy. All rights reserved.",
      links: ["Home", "Book", "Portfolio", "Blogs", "About", "Contact"],
    },
    languageButton: "العربیة",
  },
  ar: {
    navItems: [
      { label: "الصفحة الرئيسية", to: "/" },
      { label: "الكتاب", to: "/book" },
      { label: "السیرة الذاتیة", to: "/portfolio" },
      { label: "المدونات", to: "/blogs" },
      { label: "من أنا", to: "/about" },
      { label: "تواصل", to: "/contact" },
    ],
    admin: "تسجيل دخول الإدارة",
    hero: {
      roleTag: "مدرّس لغة عربية · شاعر · فنان صوتي",
      heading: "تدريس عربي راقٍ، شعر أصيل، وصوتيات احترافية.",
      description:
        "أساعد المتعلمين على اكتشاف عمق اللغة العربية وآدابها من خلال نطق واضح، شعر معبر، ومحتوى صوتي عربي احترافي للفيديوهات والإعلانات.",
      buttons: {
        portfolio: "استعرض الأعمال",
        blogs: "قراءة المدونات",
        contact: "تواصل معي",
      },
    },
    featured: {
      sectionLabel: "الخدمات المميزة",
      cards: [
        {
          title: "دقة النطق",
          description: "تدريب محترف على نطق العربية بوضوح وثقة.",
        },
        {
          title: "حرفية أدبية",
          description: "كتابة وشعر عربي بنبرة أصيلة وأسلوب بديع.",
        },
      ],
      whyTitle: "لماذا تختار خدماتي",
      whyDescription:
        "أدمج بين التربية الأدبية وفن الصوت لتقديم تواصل عربي رفيع يجمع بين الحداثة والجذور التقليدية.",
    },
    book: {
      sectionLabel: "كتاب جديد",
      title:" مرجع التعبيرات ثنائية اللغة العربیة و البشتو",
      subtitle: "استفد من تعبیرات ذات اللغتین العربیة و البشتو",
      description:
        "مثالي للمتعلمين والقراء والمحترفين الإبداعيين الذين يريدون كتابًا يجمع بين اللغة والقصة والتدريب الصوتي.",
      highlights: [
        "غلاف جذاب وصفحات عرض مميزة.",
        "تمارين قراءة سهلة المتابعة.",
        "خيارات شراء مع تفاصيل الاتصال.",
      ],
      button: "عرض الكتاب",
      buyButton: "اطلب الآن",
      contactLabel: "للطلب عبر البريد الإلكتروني",
      contactEmail: "ubaidyousufzai9@gmail.com",
      whatsappLink: "https://wa.me/923480281550?text=مرحباً%20عبيد%2C%20أرغب%20بطلب%20الكتاب.",
    },
    about: {
      label: "من أنا",
      heading: "مدرّس في اللغة العربية، الشعر، والتعبير الراقي.",
      description:
        "بخبرة سنوات في التدريس وشغف بالأدب العربي، أقدّم وضوحاً وأناقة في كل درس، مقال، وتسجيل صوتي أصنعه.",
      cards: [
        {
          title: "إتقان التدريس",
          description:
            "دروس شخصية في المحادثة العربية، القواعد، والطلاقة لبناء الثقة بسرعة.",
        },
        {
          title: "شعر وأدب",
          description:
            "شعر عربي مصاغ بإيقاع روحاني وتعابير أدبية غنية.",
        },
        {
          title: "خبرة التعليق الصوتي",
          description:
            "صوت عربي احترافي للإعلانات، السرد، والمحتوى الإعلامي.",
        },
      ],
    },
    services: {
      label: "الخدمات",
      heading: "ما أقدمه",
      description:
        "بطاقات خدمات أنيقة وعصرية تساعد على إيصال الخبرة والثقة.",
    },
    portfolio: {
      label: "أعمال مختارة",
      heading: "نماذج من المشاريع والخدمات",
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
      heading: "يثق بي المتعلمون والفرق الإبداعية.",
      description:
        "آراء طلاب ومتعاونين جربوا تدريس اللغة العربية، الكتابة، والتعليق الصوتي.",
    },
    contact: {
      label: "تواصل",
      heading: "ابدأ رحلتك في العربية أو احجز تعليقاً صوتياً.",
      description:
        "تواصل عبر البريد الإلكتروني أو من خلال الشبكات الاجتماعية للحصول على استشارة مخصّصة.",
      emailLabel: "البريد الإلكتروني",
      socialLabel: "تابعني",
      connectTitle: "هيا نتواصل",
      connectDescription:
        "أرسل رسالة للتدريس، الشعر، السرد، أو الاستشارة، وسأرسل لك إرشادات مفصّلة خلال يوم عمل واحد.",
      messageButton: "أرسل رسالة",
    },
    footer: {
      copyright: "© 2026 عبید اکیدمی. كل الحقوق محفوظة.",
      links: ["الرئيسية", "الكتاب", "المحفظة", "المدونات", "من أنا", "تواصل"],
    },
    languageButton: "English",
  },
};

const services = [
  {
    title: {
      en: "Arabic Language Teaching",
      ar: "تدريس اللغة العربية",
    },
    description: {
      en: "Structured lessons for learners at every level.",
      ar: "دروس منظمة للمتعلمين في جميع المستويات.",
    },
    icon: BookOpen,
  },
  {
    title: {
      en: "Arabic Poetry",
      ar: "الشعر العربي",
    },
    description: {
      en: "Original poetry with refined literary rhythm.",
      ar: "شعر أصيل بإيقاع أدبي راقٍ.",
    },
    icon: Feather,
  },
  {
    title: {
      en: "Arabic Writing",
      ar: "الكتابة العربية",
    },
    description: {
      en: "Professional writing, editing, and literary consulting.",
      ar: "كتابة احترافية، تحرير، واستشارات أدبية.",
    },
    icon: Sparkles,
  },
  {
    title: {
      en: "Voice-over for Advertisements",
      ar: "التعليق الصوتي للإعلانات",
    },
    description: {
      en: "Premium Arabic voice recordings for videos and ads.",
      ar: "تسجيلات صوتية عربية احترافية للفيديوهات والإعلانات.",
    },
    icon: Mic2,
  },
  {
    title: {
      en: "Public Speaking & Pronunciation",
      ar: "التحدث العام والنطق",
    },
    description: {
      en: "Accent coaching and polished delivery for live speech.",
      ar: "تدريب على النطق وخطاب مصقول للعروض الحية.",
    },
    icon: Volume2,
  },
];

const portfolioItems = [
  {
    title: {
      en: "Classical Arabic Curriculum",
      ar: "منهج العربية الكلاسيكية",
    },
    description: {
      en: "A complete learning path for modern and classical Arabic fluency.",
      ar: "مسار تعلّم متكامل للطلاقة في العربية الكلاسيكية والحديثة.",
    },
  },
  {
    title: {
      en: "Literary Poetry Series",
      ar: "سلسلة شعرية أدبية",
    },
    description: {
      en: "Curated poems and visual storytelling for cultural projects.",
      ar: "قصائد مختارة وسرد مرئي للمشاريع الثقافية.",
    },
  },
  {
    title: {
      en: "Voice-over Campaign",
      ar: "حملة تعليق صوتي",
    },
    description: {
      en: "Professional Arabic narration for brand videos and ads.",
      ar: "سرد عربي احترافي لإعلانات الفيديو والعلامات التجارية.",
    },
  },
];

const blogPreviews = [
  {
    title: {
      en: "The Art of Pronunciation in Arabic",
      ar: "فن النطق في العربية",
    },
    excerpt: {
      en: "Explore the beauty of Arabic sound, accent, and the musicality of every phrase.",
      ar: "اكتشف جمال صوت العربية، اللّهجة، وموسيقى كل عبارة.",
    },
  },
  {
    title: {
      en: "Crafting Poems with Timeless Emotion",
      ar: "صياغة شعر بمشاعر خالدة",
    },
    excerpt: {
      en: "A guide to writing modern Arabic poetry that honors classical tradition.",
      ar: "دليل لكتابة شعر عربي حديث يحترم التراث الكلاسيكي.",
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
  const [showBookCard, setShowBookCard] = useState(true);
  const [isArabic, setIsArabic] = useState(false);
  const lang = isArabic ? "ar" : "en";
  const t = translations[lang];

  const footerLinkPath = (link) => {
    if (link === "Home" || link === "الصفحة الرئيسية" || link === "الرئيسية") return "/";
    if (link === "Book" || link === "الالكتاب") return "/book";
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
            Ubaid Yousafzai
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
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">{t.book.sectionLabel}</p>
                <h2 className="mt-4 text-4xl font-semibold text-zinc-100 sm:text-5xl">
                  {t.book.title}
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
                  {t.book.subtitle}
                </p>
                <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
                  {t.book.description}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {t.book.highlights.map((highlight) => (
                    <div key={highlight} className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-5 text-sm text-zinc-300">
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/book"
                    className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
                  >
                    {t.book.button}
                  </Link>
                  <a
                    href={t.book.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/90 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-amber-300 hover:text-amber-300"
                  >
                    <MessageSquare className="h-4 w-4" />
                    {t.book.buyButton}
                  </a>
                </div>

                <p className="mt-4 text-sm text-zinc-500">
                  {t.book.contactLabel}: <a href={`mailto:${t.book.contactEmail}`} className="text-amber-300 hover:text-amber-200">{t.book.contactEmail}</a>
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/80 p-6 shadow-lg shadow-black/30">
                  <div className="h-72 rounded-[1.75rem] bg-[url('/images/profile picture.jpeg')] bg-cover bg-center" />
                  <div className="mt-5 space-y-3">
                    <div className="h-4 w-24 rounded-full bg-amber-400/20" />
                    <div className="h-4 w-32 rounded-full bg-zinc-700/70" />
                    <div className="h-4 w-20 rounded-full bg-zinc-700/70" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/80 p-5 shadow-inner shadow-black/20">
                    <div className="h-32 rounded-3xl bg-gradient-to-br from-amber-400/20 via-transparent to-sky-400/10 p-5">
                      <div className="h-full rounded-3xl bg-zinc-950/90 p-4">
                        <div className="h-3/5 rounded-3xl bg-zinc-800/80" />
                        <div className="mt-4 h-2 rounded-full bg-zinc-700/70" />
                        <div className="mt-2 h-2 rounded-full bg-zinc-700/70" />
                        <div className="mt-2 h-2 rounded-full bg-zinc-700/70" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/80 p-5 shadow-inner shadow-black/20">
                    <div className="h-32 rounded-3xl bg-gradient-to-br from-sky-400/20 via-transparent to-amber-400/10 p-5">
                      <div className="h-full rounded-3xl bg-zinc-950/90 p-4">
                        <div className="h-3/5 rounded-3xl bg-zinc-800/80" />
                        <div className="mt-4 h-2 rounded-full bg-zinc-700/70" />
                        <div className="mt-2 h-2 rounded-full bg-zinc-700/70" />
                        <div className="mt-2 h-2 rounded-full bg-zinc-700/70" />
                      </div>
                    </div>
                  </div>
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

      {showBookCard && (
        <div className="fixed bottom-5 right-5 z-50 w-full max-w-xs rounded-[1.5rem] border border-amber-400/20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/5 backdrop-blur-xl sm:right-6">
          <div className="absolute inset-x-4 top-0 h-16 rounded-full bg-gradient-to-r from-amber-400/15 via-transparent to-sky-400/10 blur-2xl" />
          <div className="relative flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">{t.book.sectionLabel}</p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-100">{t.book.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{t.book.subtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => setShowBookCard(false)}
              className="rounded-full border border-zinc-700 bg-zinc-900/90 p-2 text-zinc-400 transition hover:border-amber-300 hover:text-white"
              aria-label="Dismiss book card"
            >
              ×
            </button>
          </div>
          <div className="relative mt-4 flex flex-col gap-3">
            <Link
              to="/book"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
            >
              {t.book.button}
            </Link>
            <a
              href={`mailto:${t.book.contactEmail}`}
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/90 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-amber-300 hover:text-amber-300"
            >
              {t.book.buyButton}
            </a>
          </div>
        </div>
      )}

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
