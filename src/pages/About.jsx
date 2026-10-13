import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import VideosActivitiesSection from "../components/VideosActivitiesSection";

const translations = {
  en: {
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      blogs: "Blogs",
      contact: "Contact",
    },
    headerTitle: "About Me",
    HomepageLink:"Home",
    headerSubtitle:
      "A deeper look into my academic journey, expertise, and professional experience in Arabic language teaching, Quran learning, grammar, and literary expression.",
    back: "← Back to Home",
    introLabel: "Introduction",
    introHeading: "Who I am",
    introText: `About Me

Educator & Islamic Scholar

I am **Ihsan Ullah Fareed**, a dedicated educator and Islamic scholar with more than **5 years of teaching experience** in Arabic language and Islamic studies. My mission is to make Arabic and Islamic knowledge accessible, practical, and inspiring for students of all levels.


 Academic Background

 Master's Degree in Arabic Language and Islamic studies
 full command on arabic speaking and writing
 Academic affiliation with Al-Rasheed University, Karachi


 Teaching Experience

 4+ years of teaching Arabic Language
 6+ years of teaching Islamic Studies
 Lecturer and academic mentor at Itqan academy
 Experience teaching students from diverse educational backgrounds


 Arabic Teaching & Quran Education

I specialize in helping students learn spoken Gulf Arabic, Modern Standard Arabic, Arabic grammar, Quran reading, Nazra, and Hifz in a structured and encouraging environment.

 Key Focus Areas

 Spoken Gulf Arabic
 Modern Standard Arabic
 Arabic Grammar
 Qaida and Quran Nazra
 Quran Hifz
 Arabic Poetry
 Arabic Content Writing


 Publications & Authorship


 Literary & Academic Activities

 Poetry presentations at national academic seminars
 Participant in literary events and university conferences
 Contributor to educational and cultural initiatives

 Selected Events

 Punjab University Literary Participation (2024)


 Educational Content Series

Regular creator of educational content, including:

 Hadith of the Day
 Wisdom of the Day
 Expression of the Day
 Proverb of the Day
 Historical Events of the Day

 Areas of Expertise

 Arabic Language Teaching
 Islamic Studies
 Quran Teaching and Hifz
 Arabic Grammar
 Arabic Poetry
 Arabic Content Writing
 Academic Writing


 Teaching Philosophy

Knowledge becomes meaningful when it is understood, practiced, and shared. My goal is to combine authentic scholarship with effective teaching methods to help students achieve both academic excellence and personal growth`,
    educationLabel: "Education",
    educationHeading: "Academic Background",
    education1Title: "Islamic Studies",
    education1Subtitle: "jamiaturrashid karachi",
    education2Title: "Arabic Language and Literature",
    education2Subtitle: "jamiaturrashid karachi",
    skillsLabel: "Skills",
    skillsHeading: "Core Competencies",
    skill1: "Arabic Language Poet",
    skill2: "Arabic Language Teacher",
    skill3: "Quran & Grammar Mentor",
    activitiesLabel: "Activities",
    activitiesHeading: "Professional Engagements",
    activity1: "Academic Conference Participation",
    activity2: "Research Projects",
    activity3: "Community and Educational Programs",
    videosLabel: "Lessons & Activities",
    videosHeading: "Lessons, Speeches & Activities",
    videosIntro:
      "A curated collection of lectures, teachings, and community presentations highlighting faith-based learning, language education, and public speaking.",
    ctaLabel: "Ready to Learn?",
    ctaHeading: "Start Your Arabic Journey",
    ctaText:
      "Connect with me to start personalized Arabic lessons, Quran classes, grammar coaching, poetry guidance, and content writing support.",
    ctaButton: "Get in Touch",
    footerCopyright: "© 2026 Ihsan Ullah Fareed. All rights reserved.",
    languageToggle: "العربية",
    languageLabel: "Switch to Arabic",
  },
  ar: {
    nav: {
      home: "الرئيسية",
      portfolio: "السيرة الذاتية",
      blogs: "المدونة",
      contact: "تواصل",
    },
    headerTitle: "من أنا",
    headerSubtitle:
      "نظرة أعمق على رحلتي الأكاديمية وخبرتي في تدريس اللغة العربية، تعليم القرآن، القواعد، والتعبير الأدبي.",
    back: "← العودة إلى الرئيسية",
    introLabel: "مقدمة",
    introHeading: "من أكون",
    introText: `عنّي

معلم ومفكر إسلامي

أنا **إحسان الله فريد**، معلم متخصص وعالم إسلامي متحمس لأكثر من **5 سنوات من الخبرة التعليمية** في اللغة العربية والدراسات الإسلامية. رسالتي هي جعل المعرفة العربية والإسلامية متاحة، عملية، ومُلهمة للطلاب من جميع المستويات.

المؤهلات الأكاديمية

- ماجستير في اللغة العربية والدراسات الإسلامية
- إتقان كامل في التحدث والكتابة بالعربية
- الانتساب الأكاديمي بجامعة الرشيد، كراتشي

الخبرة التدريسية

- أكثر من 4 سنوات في تدريس اللغة العربية
- أكثر من 6 سنوات في تدريس الدراسات الإسلامية
- محاضر ومرشد أكاديمي في أكاديمية إتقان
- خبرة في تدريس طلاب من خلفيات تعليمية متنوعة

تعليم اللغة العربية والقرآن

أعمل على مساعدة الطلاب على تعلم العربية الخليجية المنطوقة، العربية الفصحى الحديثة، قواعد اللغة العربية، قراءة القرآن، النظم، والحفظ في بيئة منظمة ومشجعة.

المجالات المركزية

- العربية الخليجية المنطوقة
- العربية الفصحى الحديثة
- قواعد اللغة العربية
- القاعدة وقراءة القرآن
- حفظ القرآن
- الشعر العربي
- كتابة المحتوى العربي

المنشورات والتأليف

الأنشطة الأدبية والأكاديمية

- عروض شعرية في الندوات الأكاديمية الوطنية
- مشارك في الفعاليات الأدبية ومؤتمرات الجامعات
- مساهم في المبادرات التعليمية والثقافية

الأحداث المختارة

- مشاركة جامعة البنجاب في الأدب (2024)

سلسلة المحتوى التعليمي

أقوم بإنشاء محتوى تعليمي منتظم، بما في ذلك:

- حديث اليوم
- حكمة اليوم
- تعبير اليوم
- مثل اليوم
- الحدث التاريخي اليوم

مجالات الخبرة

- تدريس اللغة العربية
- الدراسات الإسلامية
- تعليم القرآن والحفظ
- قواعد اللغة العربية
- الشعر العربي
- كتابة المحتوى العربي
- الكتابة الأكاديمية

فلسفة التعليم

تتحول المعرفة إلى معنى عندما تُفهم، وتُمارس، وتُشارك. هدفي هو الجمع بين العلم الأصيل والطرق التعليمية الفعّالة لمساعدة الطلاب على تحقيق التفوق الأكاديمي والنمو الشخصي.`,
    educationLabel: "التعليم",
    educationHeading: "الخلفية الأكاديمية",
    education1Title: "الدراسات الإسلامية",
    education1Subtitle: "جامعة الرشيد - كراتشي",
    education2Title: "اللغة العربية وآدابها",
    education2Subtitle: "جامعة الرشيد - كراتشي",
    skillsLabel: "المهارات",
    skillsHeading: "الكفاءات الأساسية",
    skill1: "شاعر باللغة العربية",
    skill2: "مدرس اللغة العربية",
    skill3: "مرشد القرآن والقواعد",
    activitiesLabel: "الأنشطة",
    activitiesHeading: "الأنشطة المهنية",
    activity1: "مشاركة في المؤتمرات الأكاديمية",
    activity2: "المشاريع البحثية",
    activity3: "البرامج المجتمعية والتعليمية",
    videosLabel: "الدروس والفعاليات",
    videosHeading: "الدروس والخطابات والأنشطة",
    videosIntro:
      "مجموعة مختارة من المحاضرات والدروس والعروض المجتمعية التي تسلط الضوء على التعليم القيم، تعليم اللغة، والخطابة العامة.",
    ctaLabel: "هل أنت مستعد للتعلم؟",
    ctaHeading: "ابدأ رحلتك في اللغة العربية",
    ctaText:
      "تواصل معي لبدء دروس عربية مخصصة، صفوف قرآن، تدريب على القواعد، إرشاد في الشعر، ودعم في كتابة المحتوى.",
    ctaButton: "تواصل الآن",
    footerCopyright: "© 2026 إحسان الله فريد. جميع الحقوق محفوظة.",
    languageToggle: "English",
    languageLabel: "التبديل إلى الإنجليزية",
  },
};

const About = () => {
  const [language, setLanguage] = useState("en");
  const isArabic = language === "ar";
  const t = translations[language];
  const sectionAlign = isArabic ? "text-right" : "text-left";
  const layoutDirection = isArabic ? "sm:flex-row-reverse" : "sm:flex-row";
  const tileTextAlign = isArabic ? "text-right" : "text-left";

  return (
    <div dir={isArabic ? "rtl" : "ltr"} lang={language} className="min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/95 backdrop-blur-none md:bg-zinc-950/90 md:backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link to="/" className="inline-flex items-center gap-3 text-xl font-semibold tracking-tight text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300 shadow-sm shadow-amber-400/10">
              {t.HomepageLink}
            </span>
            {/* {t.headerTitle} */}
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-8 md:flex">
              <Link to="/" className="text-sm text-zinc-300 transition hover:text-white">{t.nav.home}</Link>
              <Link to="/portfolio" className="text-sm text-zinc-300 transition hover:text-white">{t.nav.portfolio}</Link>
              <Link to="/blogs" className="text-sm text-zinc-300 transition hover:text-white">{t.nav.blogs}</Link>
              <Link to="/contact" className="text-sm text-zinc-300 transition hover:text-white">{t.nav.contact}</Link>
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
        <section className="relative px-6 pt-12 pb-16 md:px-10 lg:pb-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-80 bg-linear-to-b from-amber-500/10 to-transparent blur-3xl md:block" />
          <div className="mx-auto max-w-7xl relative z-10">
            <Link
              to="/"
              className={`inline-flex items-center text-sm text-zinc-400 hover:text-amber-300 transition ${sectionAlign}`}
            >
              {t.back}
            </Link>

            <div className={`mt-8 flex flex-col items-start gap-6 ${layoutDirection} sm:items-center`}>
              <img
                src="/WhatsApp%20Image%202026-02-01%20at%209.09.28%20AM.jpeg"
                alt={t.headerTitle}
                className="h-28 w-28 rounded-full border border-amber-400/20 object-cover shadow-xl shadow-black/20 sm:h-32 sm:w-32"
              />
              <h1 className={`text-5xl md:text-6xl font-semibold tracking-tight text-zinc-100 ${sectionAlign}`}>
                {t.headerTitle}
              </h1>
            </div>

            <p className={`text-zinc-400 mt-6 max-w-2xl text-base leading-8 ${sectionAlign}`}>
              {t.headerSubtitle}
            </p>
          </div>
        </section>

        <section className="px-6 py-16 md:px-10 lg:px-12 border-t border-zinc-800/70">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80 mb-10">{t.introLabel}</p>
              <div className="p-10 rounded-3xl border border-zinc-800 bg-zinc-900/90 shadow-lg shadow-black/20 backdrop-blur-none md:bg-zinc-900/80 md:backdrop-blur-xl md:shadow-2xl">
                <h2 className={`text-3xl font-semibold mb-6 text-zinc-100 ${sectionAlign}`}>{t.introHeading}</h2>
                <p className={`text-zinc-400 leading-8 whitespace-pre-line ${sectionAlign}`}>
                  {t.introText}
                </p>
              </div>
            </div>

            <div className="mb-20">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80 mb-10">{t.educationLabel}</p>
              <h2 className={`text-3xl font-semibold mb-10 text-zinc-100 ${sectionAlign}`}>{t.educationHeading}</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className={`rounded-3xl border border-zinc-800 bg-zinc-900/90 p-8 shadow-md shadow-black/10 text-zinc-200 backdrop-blur-none transition-none md:bg-zinc-900/80 md:backdrop-blur-xl md:shadow-xl md:transition-transform md:duration-300 md:hover:-translate-y-1 ${tileTextAlign}`}>
                  <h3 className="text-xl font-semibold mb-3 text-zinc-100">{t.education1Title}</h3>
                  <p className="text-zinc-400">{t.education1Subtitle}</p>
                </div>

                <div className={`rounded-3xl border border-zinc-800 bg-zinc-900/90 p-8 shadow-md shadow-black/10 text-zinc-200 backdrop-blur-none transition-none md:bg-zinc-900/80 md:backdrop-blur-xl md:shadow-xl md:transition-transform md:duration-300 md:hover:-translate-y-1 ${tileTextAlign}`}>
                  <h3 className="text-xl font-semibold mb-3 text-zinc-100">{t.education2Title}</h3>
                  <p className="text-zinc-400">{t.education2Subtitle}</p>
                </div>
              </div>
            </div>

            <div className="mb-20">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80 mb-10">{t.skillsLabel}</p>
              <h2 className={`text-3xl font-semibold mb-10 text-zinc-100 ${sectionAlign}`}>{t.skillsHeading}</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-6 shadow-md shadow-black/10 text-zinc-200 backdrop-blur-none transition-none md:bg-zinc-900/80 md:backdrop-blur-xl md:shadow-lg md:transition-transform md:duration-300 md:hover:-translate-y-1">
                  {t.skill1}
                </div>

                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-6 shadow-md shadow-black/10 text-zinc-200 backdrop-blur-none transition-none md:bg-zinc-900/80 md:backdrop-blur-xl md:shadow-lg md:transition-transform md:duration-300 md:hover:-translate-y-1">
                  {t.skill2}
                </div>

                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-6 shadow-md shadow-black/10 text-zinc-200 backdrop-blur-none transition-none md:bg-zinc-900/80 md:backdrop-blur-xl md:shadow-lg md:transition-transform md:duration-300 md:hover:-translate-y-1">
                  {t.skill3}
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80 mb-10">{t.activitiesLabel}</p>
              <h2 className={`text-3xl font-semibold mb-10 text-zinc-100 ${sectionAlign}`}>{t.activitiesHeading}</h2>

              <div className="space-y-6">
                <div className={`rounded-3xl border border-zinc-800 bg-zinc-900/90 p-8 shadow-md shadow-black/10 text-zinc-200 backdrop-blur-none transition-none md:bg-zinc-900/80 md:backdrop-blur-xl md:shadow-xl md:transition-transform md:duration-300 md:hover:-translate-y-1 ${tileTextAlign}`}>
                  {t.activity1}
                </div>

                <div className={`rounded-3xl border border-zinc-800 bg-zinc-900/90 p-8 shadow-md shadow-black/10 text-zinc-200 backdrop-blur-none transition-none md:bg-zinc-900/80 md:backdrop-blur-xl md:shadow-xl md:transition-transform md:duration-300 md:hover:-translate-y-1 ${tileTextAlign}`}>
                  {t.activity2}
                </div>

                <div className={`rounded-3xl border border-zinc-800 bg-zinc-900/90 p-8 shadow-md shadow-black/10 text-zinc-200 backdrop-blur-none transition-none md:bg-zinc-900/80 md:backdrop-blur-xl md:shadow-xl md:transition-transform md:duration-300 md:hover:-translate-y-1 ${tileTextAlign}`}>
                  {t.activity3}
                </div>
              </div>
            </div>
          </div>
        </section>

        <VideosActivitiesSection isArabic={isArabic} t={t} />

        <section className="border-t border-zinc-800/70 px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-4xl border border-zinc-800 bg-linear-to-br from-zinc-900/80 via-zinc-900/50 to-zinc-900/80 p-12 shadow-2xl shadow-black/20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80">{t.ctaLabel}</p>
              <h2 className={`mt-4 text-3xl font-semibold text-zinc-100 sm:text-4xl ${sectionAlign}`}>{t.ctaHeading}</h2>
              <p className={`mt-6 text-base leading-8 text-zinc-400 ${sectionAlign}`}>
                {t.ctaText}
              </p>
              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300 ${isArabic ? "flex-row-reverse" : ""}`}
              >
                {t.ctaButton}
                <ChevronRight className={`${isArabic ? "mr-2" : "ml-2"} h-4 w-4`} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/70 px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className={`text-sm text-zinc-400 ${sectionAlign}`}>{t.footerCopyright}</p>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
            <Link to="/" className="transition hover:text-white">{t.nav.home}</Link>
            <Link to="/portfolio" className="transition hover:text-white">{t.nav.portfolio}</Link>
            <Link to="/blogs" className="transition hover:text-white">{t.nav.blogs}</Link>
            <Link to="/contact" className="transition hover:text-white">{t.nav.contact}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
