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
      "A deeper look into my academic journey, expertise, and professional experience in Arabic language teaching, poetry, and voice artistry.",
    back: "← Back to Home",
    introLabel: "Introduction",
    introHeading: "Who I am",
    introText: `About Me

Educator & Islamic Scholar

I am **Obaid Ur Rehman Yousafzai**, a dedicated educator and Islamic scholar with more than **14 years of teaching experience** in Arabic language and Islamic studies. My mission is to make Arabic and Islamic knowledge accessible, practical, and inspiring for students of all levels.



 Academic Background

 Master's Degree in Arabic Language and Islamic studies 
 specialization in islamic studies and Arabic language 
 Academic affiliation with Al-Rasheed University, Karachi


 Teaching Experience

 14+ years of teaching Arabic Language
 14+ years of teaching Islamic Studies
 Lecturer and academic mentor at Al-Rasheed University
 Experience teaching students from diverse educational backgrounds


 Translation & Language Services

I specialize in multilingual translation and language development projects, with a particular focus on Arabic, Pashto, Urdu, and Islamic literature.

 Key Contributions

 Pashto translation recording for Digital Quran projects
 Contributor to the "Ahsan-ul-Kalam" Quran project
 Development of multilingual dictionaries and language resources



 Voice-Over & Media Production

With extensive experience in professional voice recording, I have participated in numerous educational and religious media projects.

 Notable Work

 audio recording of Fazail-e-Amaal
 Educational and charitable documentary narrations
 Professional voice-over production for academic institutions


 Publications & Authorship

 Published Works

 Dictionary of Equivalent Proverbs (Three Languages)

 Upcoming Publications

 Arabic-English Dictionary of Proverbs
 Multilingual Dictionary of Expressions

 Other Works

 Diwan of Sheikh Obaid Ur Rehman
 Functions and Duties of the Prophet ﷺ



 Literary & Academic Activities

 Poetry presentations at national academic seminars
 Participant in literary events and university conferences
 Contributor to educational and cultural initiatives

 Selected Events

 Islamabad Academic Poetry Seminars (2019, 2021)
 Punjab University Literary Participation (2024)


 Educational Content Series

Regular creator of educational content, including:

 Hadith of the Day
 Wisdom of the Day
 Poem of the Day
 Expression of the Day
 Proverb of the Day
 Historical Events of the Day


 Scholarly Travels

 Journey to Madinah for the study of Hadith
Performed Umrah twice
 Educational visits to Quetta for the promotion of Arabic language learning



 Areas of Expertise

 Arabic Language Teaching
 Islamic Studies
 Translation Services
 Voice-Over Production
 Content Development
 Academic Writing
 Dictionary Compilation
 Book Authorship



Teaching Philosophy

Knowledge becomes meaningful when it is understood, practiced, and shared. My goal is to combine authentic scholarship with effective teaching methods to help students achieve both academic excellence and personal growth`,
    educationLabel: "Education",
    educationHeading: "Academic Background",
    education1Title: "Islamic Studies",
    education1Subtitle: "Jamiat-ul-Uloom-ul-Islamia – 2010",
    education2Title: "Arabic Language and Literature",
    education2Subtitle: "Jamiat-ul-Uloom-ul-Islamia – 2012",
    skillsLabel: "Skills",
    skillsHeading: "Core Competencies",
    skill1: "Arabic Language Poet",
    skill2: "Arabic Language Teacher",
    skill3: "Arabic Voice Artist",
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
      "Connect with me to book personalized lessons or discuss your Arabic learning goals.",
    ctaButton: "Get in Touch",
    footerCopyright: "© 2026 ubaidAcademy All rights reserved.",
    languageToggle: "العربية",
    languageLabel: "Switch to Arabic",
  },
  ar: {
    nav: {
      home: "الصفحة الرئیسة",
      portfolio: "السیرة الذاتیة",
      blogs: "المدونة",
      contact: "تواصل",
    },
    headerTitle: "من أنا",
    headerSubtitle:
      "نظرة أعمق على رحلتي الأكاديمية وخبرتي المهنية في تدريس اللغة العربية والشعر وفن الأداء الصوتي.",
    back: "← العودة إلى الرئيسية",
    introLabel: "مقدمة",
    introHeading: "من هو أنا",
    introText:
  `"سيرة الذاتية

الاسم:
عبيد الرحمن يوسف زئي بن گل محمد

تاريخ الميلاد:
01 يناير 1987م
العمر: 37 سنة

الجنس:
ذكر

الجنسية:
باكستاني

بلد الإقامة:
كراتشي، باكستان

البريد الإلكتروني:
ubaidyousufzai9@gmail.com

رقم الهاتف:
+92 3480281550

المؤهلات العلمية:
ماجستير في اللغة العربية والعلوم الدينية
دراسة العلوم الشرعية والعربية في جامعة الرشيد كراتشي

الخبرات العملية:
خبرة تدريسية 14 سنة في اللغة العربية والعلوم الإسلامية
أستاذ في جامعة الرشيد كراتشي
عمل 10 سنوات في شركة Danny Technology في البرمجيات والتعليق الصوتي
تسجيل ترجمة القرآن الكريم بالبشتو ضمن مشاريع المصحف الرقمي وأحسن الكلام
تسجيل صوتي لكتاب فضائل الأعمال
إعداد وثائقيات صوتية للمؤسسات التعليمية والخيرية

سلسلة اليوميات:
حديث اليوم
حكمة اليوم
شعر اليوم
تعبير اليوم
مثل اليوم
ماذا حدث في مثل هذا اليوم

النشاط الأدبي:
مشاركات شعرية في ندوات جامعة NULS إسلام آباد 2019 و2021
مشاركة في جامعة پنجاب 2024

المؤلفات:
 قاموس الأمثال المتماثلة 3 لغات مطبوع
 قاموس الأمثال 2 لغات إنجليزي تحت الطبع
 قاموس التعبيرات 3 لغات تحت الطبع
 ديوان الشيخ عبيد الرحمن
 وظائف النبي صلى الله عليه وسلم

الرحلات:
المدينة المنورة لطلب الحديث
عمرتان
كويتا مرتين لنشر العربية

المهارات:
الترجمة
الكتابة
التعليق الصوتي`,
    educationLabel: "التعليم",
    educationHeading: "الخلفية الأكاديمية",
    education1Title: "الدراسات الإسلامية",
    education1Subtitle: "جامعة العلوم الإسلامية – 2010",
    education2Title: "اللغة العربية وآدابها",
    education2Subtitle: "جامعة العلوم الإسلامية – 2012",
    skillsLabel: "المهارات",
    skillsHeading: "الكفاءات الأساسية",
    skill1: "شاعر باللغة العربية",
    skill2: "مدرس لغة عربية",
    skill3: "فنان صوتي عربي",
    activitiesLabel: "الأنشطة",
    activitiesHeading: "الأنشطة المهنية",
    activity1: "المشاركة في المؤتمرات العلمية",
    activity2: "المشاريع البحثية",
    activity3: "البرامج المجتمعية والتعليمية",
    videosLabel: "الدروس والفعاليات",
    videosHeading: "الدروس والخطابات والأنشطة",
    videosIntro:
      "مجموعة من الدروس والمحاضرات والعروض المجتمعية التي تعكس التعلم القيمي والتربية اللغوية والتوجيه الأكاديمي.",
    ctaLabel: "هل أنت مستعد للتعلم؟",
    ctaHeading: "ابدأ رحلتك في اللغة العربية",
    ctaText:
      "تواصل معي لحجز دروس مخصصة أو لمناقشة أهدافك في تعلم اللغة العربية.",
    ctaButton: "تواصل الآن",
    footerCopyright: "© 2026 أكاديمية عبيد جميع الحقوق محفوظة.",
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
                src="/images/profile picture.jpeg"
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
