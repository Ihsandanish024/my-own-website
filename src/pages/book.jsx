import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const translations = {
  en: {
    languageToggle: "العربية",
    languageLabel: "Switch to Arabic",
    headerTitle: "A trilingual idioms reference: Arabic, English, Pashto",
    introTitle: "Book introduction",
    introText:
      "This unique collection presents idiomatic expressions in Arabic, English, and Pashto. Readers can quickly find equivalent idioms across the three languages, making it a valuable resource for students, teachers, translators, researchers, and language enthusiasts.",
    sideTitle: "Cross-cultural language study",
    sideText:
      "Supported by classical and modern poetry, plus examples from historical works.",
    whyTitle: "Why this book matters",
    whyText:
      "The book promotes cross-cultural and linguistic understanding by showing both commonalities and distinctive features of idiomatic speech in three languages. It also includes evidence from poetry and literature to illustrate meaning and usage clearly.",
    audienceTitle: "Audience",
    audienceText: "Students, teachers, translators, researchers, and language lovers.",
    evidenceTitle: "Evidence-based",
    evidenceText:
      "Many idioms are supported by classical and modern poetry, plus literary excerpts.",
    organizedTitle: "How the book is organized",
    entriesTitle: "Trilingual entries",
    entriesText:
      "Each entry includes Arabic, English, and Pashto equivalents for easy comparison.",
    notesTitle: "Context notes",
    notesText:
      "Notes explain meaning, tone, and when to use each expression.",
    bookImagesLabel: "Book images",
    contactTitle: "Contact to order",
    contactText: "Email or WhatsApp me with your name, location, and preferred delivery method.",
    backLabel: "Back to home",
  },
  ar: {
    languageToggle: "English",
    languageLabel: "التبديل إلى الإنجليزية",
    headerTitle: "مرجع تعابير ثلاثي اللغات: العربية، الإنجليزية، البشتو",
    introTitle: "مقدمة الكتاب",
    introText:
      "يعرض هذا الكتاب الفريد التعابير الاصطلاحية في العربية والإنجليزية والبشتو. يمكن للقراء العثور بسرعة على ما يعادل هذه التعابير في اللغات الثلاث، مما يجعله مرجعًا هامًا للطلاب والمعلمين والمترجمين والباحثين ومحبي اللغات.",
    sideTitle: "دراسة لغوية عبر الثقافات",
    sideText:
      "يتم دعم العديد من التعابير بالأدب الكلاسيكي والحديث، بالإضافة إلى مقتطفات من الأعمال الأدبية التاريخية.",
    whyTitle: "لماذا هذا الكتاب مهم",
    whyText:
      "يعزز الكتاب الفهم الثقافي واللغوي من خلال عرض أوجه التشابه والاختلاف في اللغة الاصطلاحية بثلاث لغات. كما يوضح المعنى والاستخدام عبر الأدب والشعر.",
    audienceTitle: "الجمهور المستهدف",
    audienceText: "الطلاب والمعلمون والمترجمون والباحثون ومحبو اللغات.",
    evidenceTitle: "مدعوم بالأدلة",
    evidenceText:
      "يتم دعم العديد من التعابير بالشعر الكلاسيكي والحديث، بالإضافة إلى مقتطفات أدبية.",
    organizedTitle: "كيفية تنظيم الكتاب",
    entriesTitle: "مدخلات ثلاثية اللغة",
    entriesText:
      "يتضمن كل مدخل ما يعادل التعبير بالعربية والإنجليزية والبشتو لتسهيل المقارنة.",
    notesTitle: "ملاحظات سياقية",
    notesText: "تشرح الملاحظات المعنى والنبرة ومتى يستخدم كل تعبير.",
    bookImagesLabel: "صور الكتاب",
    contactTitle: "للطلب والتواصل",
    contactText: "راسلني عبر البريد الإلكتروني أو WhatsApp باسمك وموقعك وطريقة التوصيل المفضلة.",
    backLabel: "عودة إلى الرئيسية",
  },
};

const bookImages = [
  {
    id: "whatsapp-1",
    label: "WhatsApp Image 2026-06-26 at 2.34.23 PM",
    src: "/images/WhatsApp Image 2026-06-26 at 2.34.23 PM.jpeg",
    fallback: "/WhatsApp Image 2026-06-26 at 2.34.23 PM.jpeg",
  },
  {
    id: "whatsapp-2",
    label: "WhatsApp Image 2026-06-26 at 2.34.23 PM (1)",
    src: "/images/WhatsApp Image 2026-06-26 at 2.34.23 PM (1).jpeg",
    fallback: "/WhatsApp Image 2026-06-26 at 2.34.23 PM (1).jpeg",
  },
  {
    id: "whatsapp-3",
    label: "WhatsApp Image 2026-06-26 at 2.34.24 PM",
    src: "/images/WhatsApp Image 2026-06-26 at 2.34.24 PM.jpeg",
    fallback: "/WhatsApp Image 2026-06-26 at 2.34.24 PM.jpeg",
  },
  {
    id: "whatsapp-4",
    label: "WhatsApp Image 2026-06-26 at 2.34.24 PM (1)",
    src: "/images/WhatsApp Image 2026-06-26 at 2.34.24 PM (1).jpeg",
    fallback: "/WhatsApp Image 2026-06-26 at 2.34.24 PM (1).jpeg",
  },
  {
    id: "whatsapp-5",
    label: "WhatsApp Image 2026-06-26 at 2.34.25 PM",
    src: "/images/WhatsApp Image 2026-06-26 at 2.34.25 PM.jpeg",
    fallback: "/WhatsApp Image 2026-06-26 at 2.34.25 PM.jpeg",
  },
  {
    id: "whatsapp-6",
    label: "WhatsApp Image 2026-06-26 at 2.34.25 PM (1)",
    src: "/images/WhatsApp Image 2026-06-26 at 2.34.25 PM (1).jpeg",
    fallback: "/WhatsApp Image 2026-06-26 at 2.34.25 PM (1).jpeg",
  },
  {
    id: "whatsapp-7",
    label: "WhatsApp Image 2026-06-26 at 2.34.25 PM (2)",
    src: "/images/WhatsApp Image 2026-06-26 at 2.34.25 PM (2).jpeg",
    fallback: "/WhatsApp Image 2026-06-26 at 2.34.25 PM (2).jpeg",
  },
];

const Book = () => {
  const [language, setLanguage] = useState("en");
  const isArabic = language === "ar";
  const t = translations[language];

  return (
    <div dir={isArabic ? "rtl" : "ltr"} lang={language} className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-12">
        <div className="mb-10 flex items-center justify-between gap-4 rounded-4xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-2xl shadow-black/20">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">{t.introTitle}</p>
            <h1 className="mt-4 text-4xl font-semibold text-zinc-100 sm:text-5xl">{t.headerTitle}</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400">{t.introText}</p>
          </div>
          <button
            type="button"
            onClick={() => setLanguage(isArabic ? "en" : "ar")}
            aria-label={t.languageLabel}
            className="rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-amber-300 hover:text-white"
          >
            {t.languageToggle}
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.9fr]">
          <section className="space-y-8">
            <div className="rounded-4xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-xl shadow-black/20">
              <h2 className="text-2xl font-semibold text-zinc-100">{t.whyTitle}</h2>
              <p className="mt-5 text-zinc-400 leading-8">{t.whyText}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">{t.audienceTitle}</p>
                  <p className="mt-4 text-zinc-400 leading-7">{t.audienceText}</p>
                </div>
                <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">{t.evidenceTitle}</p>
                  <p className="mt-4 text-zinc-400 leading-7">{t.evidenceText}</p>
                </div>
              </div>
            </div>

            <div className="rounded-4xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-xl shadow-black/20">
              <h2 className="text-2xl font-semibold text-zinc-100">{t.organizedTitle}</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">{t.entriesTitle}</p>
                  <p className="mt-4 text-zinc-400 leading-7">{t.entriesText}</p>
                </div>
                <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">{t.notesTitle}</p>
                  <p className="mt-4 text-zinc-400 leading-7">{t.notesText}</p>
                </div>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-4xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-xl shadow-black/20">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">{t.bookImagesLabel}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {bookImages.map((image) => (
                  <Link
                    key={image.id}
                    to={`/book/image/${image.id}`}
                    className="overflow-hidden rounded-[2rem] border border-zinc-800 bg-gradient-to-br from-amber-400/10 via-transparent to-sky-400/10 transition hover:-translate-y-1"
                  >
                    <img
                      src={encodeURI(image.src)}
                      alt={image.label}
                      onError={(event) => {
                        if (event.currentTarget.src !== encodeURI(image.fallback)) {
                          event.currentTarget.src = encodeURI(image.fallback);
                        }
                      }}
                      className="h-64 w-full object-cover"
                    />
                    <div className="bg-zinc-950/90 px-4 py-3 text-sm text-zinc-300">
                      {image.label}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 rounded-4xl border border-zinc-800 bg-zinc-950/90 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">{t.contactTitle}</p>
                <p className="mt-4 text-zinc-400 leading-7">
                  WhatsApp: <a href="https://wa.me/923480281550" target="_blank" rel="noreferrer" className="text-amber-300 hover:text-amber-200">+92 348 0281550</a>
                </p>
                <p className="mt-4 text-zinc-400 leading-7">
                  Email: <a href="mailto:ubaidyousufzai9@gmail.com" className="text-amber-300 hover:text-amber-200">ubaidyousufzai9@gmail.com</a>
                </p>
                <p className="mt-4 text-sm text-zinc-500">{t.contactText}</p>
              </div>
            </div>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/90 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-amber-300 hover:text-amber-300"
            >
              {t.backLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Book;
