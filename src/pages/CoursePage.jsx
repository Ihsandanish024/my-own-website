import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const courses = {
  arabic: {
    path: "/arabic-courses",
    group: "Arabic Courses",
    titleAr: "دورات اللغة العربية",
    descriptionAr: "تعلم العربية الخليجية المنطوقة، والعربية الفصحى الحديثة، والقواعد، والشعر، والكتابة من خلال دروس منظمة.",
    title: "Arabic Language Courses for All Levels",
    description: "Study spoken Gulf Arabic, Modern Standard Arabic, grammar, poetry, and writing through structured online Arabic lessons for learners of all ages.",
    intro: "Build practical Arabic skills through guided lessons tailored to your age, level, and learning goals. Choose a course in conversation, Modern Standard Arabic, grammar, poetry, or writing.",
    curriculum: ["Spoken and written Arabic foundations", "Vocabulary, pronunciation, and sentence building", "Guided reading, writing, and conversation practice"],
    outcomes: ["Communicate with greater confidence", "Read and understand Arabic at your level", "Continue into a focused Arabic course"],
    audience: "Beginners and continuing learners of all ages who want a clear, supportive path to learning Arabic.",
    related: ["gulfArabic", "fushaArabic", "arabicGrammar", "arabicPoetry"],
  },
  gulfArabic: {
    path: "/arabic-courses/gulf-arabic",
    group: "Arabic Courses",
    title: "Spoken Gulf Arabic (Khaleeji) Lessons",
    description: "Learn practical spoken Gulf Arabic (Khaleeji) with guided practice in everyday vocabulary, pronunciation, listening, and real-life conversation.",
    intro: "Develop the confidence to understand and use spoken Gulf Arabic in everyday situations. Lessons focus on practical Khaleeji expressions, pronunciation, listening, and conversation rather than only textbook phrases.",
    curriculum: ["Everyday greetings and useful expressions", "Common vocabulary and sentence patterns", "Pronunciation and listening practice", "Role-play for real-life conversations"],
    outcomes: ["Handle common daily conversations", "Understand frequently used Gulf expressions", "Speak with clearer pronunciation and more confidence"],
    audience: "Learners preparing to communicate with Gulf Arabic speakers, including beginners and students who already know Arabic basics.",
    parentPath: "/arabic-courses",
    related: ["arabic", "fushaArabic", "arabicGrammar"],
  },
  fushaArabic: {
    path: "/arabic-courses/fusha-arabic",
    group: "Arabic Courses",
    title: "Modern Standard Arabic (Fusha) Course",
    description: "Study Modern Standard Arabic (Fusha) with structured lessons in reading, vocabulary, sentence formation, speaking, and comprehension.",
    intro: "Learn Modern Standard Arabic with a balanced approach to reading, speaking, listening, and writing. Lessons build from core vocabulary and sentence patterns toward clearer comprehension and expression.",
    curriculum: ["Arabic letters, sounds, and vocabulary development", "Sentence structure and useful grammar", "Reading comprehension and guided writing", "Speaking practice in Modern Standard Arabic"],
    outcomes: ["Read and understand level-appropriate Arabic texts", "Form accurate sentences", "Express ideas in clear Modern Standard Arabic"],
    audience: "Students who want a strong foundation in formal Arabic for education, reading, communication, or further study.",
    parentPath: "/arabic-courses",
    related: ["arabic", "gulfArabic", "arabicGrammar"],
  },
  arabicGrammar: {
    path: "/arabic-courses/arabic-grammar",
    group: "Arabic Courses",
    title: "Arabic Grammar Lessons",
    description: "Understand Arabic grammar through clear explanations and guided practice in sentence structure, essential rules, and accurate expression.",
    intro: "Make Arabic grammar easier to understand by connecting rules to real reading, writing, and speaking examples. Lessons progress step by step and include guided practice suited to the learner’s level.",
    curriculum: ["Parts of speech and sentence patterns", "Essential nahw and sarf concepts", "Grammar in reading and written examples", "Practice correcting and building sentences"],
    outcomes: ["Recognize key Arabic sentence structures", "Apply grammar rules with greater accuracy", "Improve reading and writing comprehension"],
    audience: "Arabic learners who want to strengthen their foundations or make more accurate use of Arabic grammar.",
    parentPath: "/arabic-courses",
    related: ["arabic", "fushaArabic", "gulfArabic"],
  },
  arabicPoetry: {
    path: "/arabic-courses/arabic-poetry",
    group: "Arabic Courses",
    title: "Arabic Poetry and Literature Course",
    description: "Explore Arabic poetry and literature through guided reading, literary vocabulary, interpretation, poetic expression, and writing practice.",
    intro: "Discover how Arabic poetry communicates meaning, imagery, and emotion. Guided lessons develop literary understanding alongside opportunities to discuss and create Arabic poetry.",
    curriculum: ["Reading selected Arabic poems", "Understanding imagery, vocabulary, and themes", "Introduction to poetic expression and style", "Writing and discussing original Arabic verses"],
    outcomes: ["Read and discuss poetry with deeper understanding", "Develop literary vocabulary and interpretation", "Practice expressing ideas through Arabic verse"],
    audience: "Students interested in Arabic literature, poetry, creative expression, or strengthening their written Arabic.",
    parentPath: "/arabic-courses",
    related: ["arabic", "arabicGrammar", "fushaArabic"],
  },
  quran: {
    path: "/quran-studies",
    group: "Quran Studies",
    titleAr: "دراسات القرآن",
    descriptionAr: "تعلم القاعدة وقراءة القرآن بالتجويد والحفظ من خلال دروس منظمة تناسب مختلف الأعمار والمستويات.",
    title: "Quran Studies for Children and Adults",
    description: "Explore structured Quran learning with Qaida foundations, Nazra recitation, Tajweed practice, and Hifz memorization for learners of all ages.",
    intro: "Follow a Quran learning path that matches your current level, from learning the Arabic letters to recitation and memorization. Lessons are paced to support steady practice and progress.",
    curriculum: ["Arabic letter and reading foundations", "Quran recitation and fluency", "Tajweed rules through guided practice", "Memorization and revision routines"],
    outcomes: ["Build a strong foundation for Quran reading", "Improve recitation with structured practice", "Develop a sustainable memorization and revision habit"],
    audience: "Children and adults beginning Quran reading, improving recitation, or working toward memorization.",
    related: ["qaida", "nazra", "hifz"],
  },
  islamicStudies: {
    path: "/islamic-studies",
    group: "Islamic Studies",
    titleAr: "الدراسات الإسلامية",
    descriptionAr: "استكشف دروس الحديث والفقه المنظمة، مع دراسة النصوص والمفاهيم الأساسية والتطبيقات العملية.",
    title: "Islamic Studies Courses",
    description: "Explore guided Islamic studies in Hadith and Fiqh, with structured learning in selected texts, foundational concepts, and practical understanding.",
    intro: "Study foundational Islamic subjects through clear, guided lessons. Explore Hadith learning and Fiqh, and choose a path suited to your interests and level.",
    curriculum: ["Guided reading of selected Hadith", "Foundational Fiqh terminology and concepts", "Structured topic study and review"],
    outcomes: ["Build a foundation for continued Islamic studies", "Understand key terms and ideas in each subject", "Connect study with thoughtful practical reflection"],
    audience: "Learners looking for an organized introduction to Hadith or foundational Islamic jurisprudence.",
    related: ["hadith", "fiqh"],
  },
  qaida: {
    path: "/quran-studies/qaida",
    group: "Quran Studies",
    title: "Noorani Qaida and Quran Reading Foundations",
    description: "Learn Noorani Qaida step by step, from Arabic letters and pronunciation to joining letters and preparing to read the Quran.",
    intro: "Start Quran reading with careful practice of Arabic letters, sounds, and combinations. Noorani Qaida lessons build the essential reading skills learners need before progressing to Quran recitation.",
    curriculum: ["Recognizing Arabic letters and their forms", "Correct letter sounds and articulation", "Joining letters and reading words", "Short vowels and foundational reading rules"],
    outcomes: ["Recognize and pronounce Arabic letters", "Read connected Arabic words", "Prepare to begin Quran Nazra"],
    audience: "Beginners of any age who are learning Arabic reading or starting Quran study from the beginning.",
    parentPath: "/quran-studies",
    related: ["quran", "nazra", "hifz"],
  },
  nazra: {
    path: "/quran-studies/nazra",
    group: "Quran Studies",
    title: "Quran Nazra Reading with Tajweed",
    description: "Improve Quran Nazra reading with guided recitation, fluency practice, and step-by-step Tajweed instruction.",
    intro: "Develop accurate, fluent Quran recitation through regular Nazra reading and guided Tajweed practice. Lessons focus on applying recitation rules while reading, at a pace appropriate to each student.",
    curriculum: ["Reading selected Quran passages", "Fluency and consistent reading practice", "Core Tajweed rules and their application", "Correction of common pronunciation errors"],
    outcomes: ["Read Quran passages more fluently", "Apply essential Tajweed rules during recitation", "Build confidence through consistent practice"],
    audience: "Learners who know the Arabic reading basics and want to improve Quran recitation and Tajweed.",
    parentPath: "/quran-studies",
    related: ["quran", "qaida", "hifz"],
  },
  hifz: {
    path: "/quran-studies/hifz",
    group: "Quran Studies",
    title: "Quran Hifz Memorization and Revision",
    description: "Work toward Quran Hifz with a structured memorization plan, regular revision, recitation practice, and progress suited to your pace.",
    intro: "Build Quran memorization steadily with a manageable lesson plan and consistent revision. The focus is on accurate recitation, retention, and forming a routine that supports lasting progress.",
    curriculum: ["Setting an achievable memorization schedule", "New lesson preparation and recitation", "Daily and cumulative revision", "Progress review and retention strategies"],
    outcomes: ["Follow a consistent Hifz routine", "Strengthen retention through planned revision", "Recite memorized passages with growing confidence"],
    audience: "Students who can read Quran and are ready to begin or continue a guided memorization plan.",
    parentPath: "/quran-studies",
    related: ["quran", "qaida", "nazra"],
  },
  hadith: {
    path: "/islamic-studies/hadith",
    group: "Islamic Studies",
    title: "Hadith Studies and Guided Learning",
    description: "Study selected Hadith with guided reading, key terminology, contextual understanding, and reflection on practical lessons.",
    intro: "Approach Hadith study through careful reading and guided explanation. Lessons introduce selected narrations, clarify important terms, and consider their context and lessons for everyday life.",
    curriculum: ["Reading selected Hadith texts", "Understanding key Arabic terms", "Discussing context and meaning", "Reflecting on practical lessons and conduct"],
    outcomes: ["Understand the central meaning of studied narrations", "Build familiarity with Hadith vocabulary", "Connect learning with practical reflection"],
    audience: "Students seeking a structured introduction to Hadith or guided study of selected texts.",
    parentPath: "/islamic-studies",
    related: ["fiqh"],
  },
  fiqh: {
    path: "/islamic-studies/fiqh",
    group: "Islamic Studies",
    title: "Fiqh and Islamic Jurisprudence Studies",
    description: "Learn foundational Fiqh through structured study of essential concepts, acts of worship, terminology, and practical questions.",
    intro: "Study foundational Fiqh in a clear, organized way, focusing on essential concepts and the understanding needed to learn about acts of worship and everyday practice.",
    curriculum: ["Core Fiqh terminology and principles", "Foundations of purification and prayer", "Structured study of selected topics", "Guided questions and review"],
    outcomes: ["Understand foundational Fiqh concepts", "Recognize key terms used in study", "Develop a structured approach to learning practical topics"],
    audience: "Learners looking for a guided foundation in Islamic jurisprudence and essential topics of practice.",
    parentPath: "/islamic-studies",
    related: ["hadith"],
  },
  englishGrammar: {
    path: "/english-courses/grammar",
    group: "English Courses",
    title: "English Grammar Course",
    description: "Improve English grammar with clear lessons and practice in sentence structure, verb tenses, parts of speech, and everyday writing.",
    intro: "Strengthen your English with practical grammar instruction. Lessons explain how sentence structures work and give learners opportunities to apply rules in speaking and writing.",
    curriculum: ["Parts of speech and sentence structure", "Verb tenses and subject-verb agreement", "Questions, negatives, and common patterns", "Grammar practice for writing and conversation"],
    outcomes: ["Build clearer, more accurate sentences", "Use common verb tenses with greater confidence", "Apply grammar knowledge in everyday communication"],
    audience: "Learners who want to build English foundations or improve the accuracy of their speaking and writing.",
    parentPath: "/english-courses",
    related: ["englishConversation"],
  },
  english: {
    path: "/english-courses",
    group: "English Courses",
    titleAr: "دورات اللغة الإنجليزية",
    descriptionAr: "طور مهاراتك في اللغة الإنجليزية من خلال دورات مركزة في القواعد والمحادثة.",
    title: "English Courses for Grammar and Conversation",
    description: "Build practical English skills with focused courses in grammar and spoken conversation, designed for learners who want clearer communication.",
    intro: "Choose a focused path to improve English communication. Study grammar for more accurate sentences or practice spoken conversation for everyday confidence.",
    curriculum: ["Essential grammar and sentence structure", "Everyday vocabulary and expressions", "Guided speaking and listening practice"],
    outcomes: ["Communicate more clearly in English", "Strengthen grammar foundations", "Practice speaking with greater confidence"],
    audience: "Learners who want to improve English for everyday, educational, or work-related communication.",
    related: ["englishGrammar", "englishConversation"],
  },
  englishConversation: {
    path: "/english-courses/conversation",
    group: "English Courses",
    title: "Spoken English Conversation Course",
    description: "Build spoken English confidence through guided conversation, useful vocabulary, pronunciation practice, and everyday speaking situations.",
    intro: "Practice speaking English in a supportive, structured setting. Lessons use everyday topics and guided conversation to build fluency, listening confidence, and useful vocabulary.",
    curriculum: ["Introductions and everyday conversation", "Useful vocabulary and natural expressions", "Listening and pronunciation practice", "Guided discussions and role-play"],
    outcomes: ["Speak more comfortably in common situations", "Expand practical vocabulary", "Improve listening and conversational responses"],
    audience: "English learners who want more confidence speaking in daily, study, or work-related situations.",
    parentPath: "/english-courses",
    related: ["englishGrammar"],
  },
};

const arabicCourseContent = {
  arabic: {
    group: "دورات اللغة العربية",
    title: "دورات تعليم اللغة العربية لجميع المستويات",
    description: "تعلم العربية الخليجية المنطوقة، والعربية الفصحى الحديثة، والقواعد، والشعر، والكتابة من خلال دروس منظمة للمتعلمين من جميع الأعمار.",
    intro: "اكتسب مهارات عملية في اللغة العربية من خلال دروس موجهة تناسب عمرك ومستواك وأهدافك. اختر دورة في المحادثة أو العربية الفصحى الحديثة أو القواعد أو الشعر أو الكتابة.",
    curriculum: ["أساسيات اللغة العربية المنطوقة والمكتوبة", "المفردات والنطق وبناء الجمل", "تدريبات موجهة على القراءة والكتابة والمحادثة"],
    outcomes: ["التواصل بثقة أكبر", "قراءة العربية وفهمها وفق مستواك", "متابعة التعلم في دورة عربية متخصصة"],
    audience: "للمبتدئين والمتعلمين من جميع الأعمار الراغبين في مسار واضح ومشجع لتعلم العربية.",
  },
  gulfArabic: {
    group: "دورات اللغة العربية",
    title: "دروس العربية الخليجية المحكية (الخليجية)",
    description: "تعلم العربية الخليجية المحكية من خلال تدريب عملي على المفردات اليومية والنطق والاستماع والمحادثات الواقعية.",
    intro: "اكتسب الثقة لفهم العربية الخليجية واستخدامها في المواقف اليومية. تركز الدروس على التعبيرات الخليجية العملية والنطق والاستماع والمحادثة، وليس على العبارات المدرسية فقط.",
    curriculum: ["التحيات والتعبيرات اليومية المفيدة", "المفردات الشائعة وأنماط الجمل", "تدريبات النطق والاستماع", "تمثيل مواقف المحادثة الواقعية"],
    outcomes: ["إجراء المحادثات اليومية الشائعة", "فهم التعبيرات الخليجية المتداولة", "التحدث بنطق أوضح وثقة أكبر"],
    audience: "لمن يستعد للتواصل مع متحدثي اللهجات الخليجية، من المبتدئين ومن لديهم أساسيات في العربية.",
  },
  fushaArabic: {
    group: "دورات اللغة العربية",
    title: "دورة العربية الفصحى الحديثة",
    description: "ادرس العربية الفصحى الحديثة من خلال دروس منظمة في القراءة والمفردات وتكوين الجمل والتحدث والفهم.",
    intro: "تعلم العربية الفصحى الحديثة من خلال منهج متوازن للقراءة والتحدث والاستماع والكتابة. تنتقل الدروس من المفردات الأساسية وأنماط الجمل إلى الفهم والتعبير الواضح.",
    curriculum: ["الحروف العربية والأصوات وتنمية المفردات", "تركيب الجمل والقواعد المفيدة", "فهم المقروء والكتابة الموجهة", "التدرب على التحدث بالفصحى الحديثة"],
    outcomes: ["قراءة النصوص العربية المناسبة للمستوى وفهمها", "تكوين جمل صحيحة", "التعبير عن الأفكار بفصحى واضحة"],
    audience: "للطلاب الراغبين في تأسيس قوي في العربية الفصحى للتعليم أو القراءة أو التواصل أو مواصلة الدراسة.",
  },
  arabicGrammar: {
    group: "دورات اللغة العربية",
    title: "دروس قواعد اللغة العربية",
    description: "افهم قواعد اللغة العربية من خلال شرح واضح وتدريب موجه على تركيب الجمل والقواعد الأساسية والتعبير السليم.",
    intro: "اجعل قواعد العربية أسهل فهماً بربطها بأمثلة حقيقية في القراءة والكتابة والتحدث. تتدرج الدروس خطوة بخطوة مع تدريبات تناسب مستوى المتعلم.",
    curriculum: ["أقسام الكلام وأنماط الجمل", "المفاهيم الأساسية في النحو والصرف", "القواعد في أمثلة القراءة والكتابة", "تدريبات على تصحيح الجمل وبنائها"],
    outcomes: ["تمييز تراكيب الجمل العربية الأساسية", "تطبيق القواعد بدقة أكبر", "تحسين فهم المقروء والكتابة"],
    audience: "لمتعلمي العربية الراغبين في تقوية أساسهم أو استخدام القواعد العربية بدقة أكبر.",
  },
  arabicPoetry: {
    group: "دورات اللغة العربية",
    title: "دورة الشعر والأدب العربي",
    description: "اكتشف الشعر والأدب العربي من خلال القراءة الموجهة والمفردات الأدبية والتحليل والتعبير الشعري والتدريب على الكتابة.",
    intro: "اكتشف كيف ينقل الشعر العربي المعاني والصور والمشاعر. تنمي الدروس فهم الأدب، وتتيح للطلاب مناقشة الشعر العربي وإنشاء أبيات شعرية.",
    curriculum: ["قراءة مختارات من الشعر العربي", "فهم الصور والمفردات والموضوعات", "مدخل إلى التعبير والأسلوب الشعري", "كتابة أبيات عربية ومناقشتها"],
    outcomes: ["قراءة الشعر ومناقشته بفهم أعمق", "تنمية المفردات الأدبية ومهارة التحليل", "التدرب على التعبير عن الأفكار بالشعر العربي"],
    audience: "للطلاب المهتمين بالأدب العربي والشعر والإبداع أو تقوية مهارات الكتابة العربية.",
  },
  quran: {
    group: "دراسات القرآن",
    title: "دروس القرآن للأطفال والكبار",
    description: "تعلم القرآن ضمن مسار منظم يشمل أساسيات القاعدة وتلاوة النظر والتجويد والحفظ للمتعلمين من جميع الأعمار.",
    intro: "اتبع مساراً لتعلم القرآن يناسب مستواك، بدءاً من تعلم الحروف العربية وصولاً إلى التلاوة والحفظ. تسير الدروس بوتيرة تساعد على الممارسة والتقدم بثبات.",
    curriculum: ["أساسيات الحروف العربية والقراءة", "تلاوة القرآن وتحسين الطلاقة", "أحكام التجويد بالتدريب الموجه", "خطط الحفظ والمراجعة"],
    outcomes: ["تأسيس قوي لقراءة القرآن", "تحسين التلاوة بالتدريب المنظم", "بناء عادة مستمرة للحفظ والمراجعة"],
    audience: "للأطفال والكبار المبتدئين في قراءة القرآن أو الراغبين في تحسين التلاوة أو حفظ القرآن.",
  },
  qaida: {
    group: "دراسات القرآن",
    title: "القاعدة النورانية وأساسيات قراءة القرآن",
    description: "تعلم القاعدة النورانية خطوة بخطوة، من الحروف العربية والنطق إلى تركيب الحروف والاستعداد لقراءة القرآن.",
    intro: "ابدأ قراءة القرآن بالتدرب المتأني على الحروف العربية وأصواتها وتركيبها. تبني دروس القاعدة النورانية مهارات القراءة الأساسية قبل الانتقال إلى تلاوة القرآن.",
    curriculum: ["التعرف إلى الحروف العربية وأشكالها", "النطق الصحيح ومخارج الحروف", "تركيب الحروف وقراءة الكلمات", "الحركات القصيرة وقواعد القراءة الأساسية"],
    outcomes: ["التعرف إلى الحروف العربية ونطقها", "قراءة الكلمات العربية المتصلة", "الاستعداد لبدء قراءة القرآن نظراً"],
    audience: "للمبتدئين من جميع الأعمار ممن يتعلمون القراءة العربية أو يبدأون دراسة القرآن.",
  },
  nazra: {
    group: "دراسات القرآن",
    title: "قراءة القرآن نظراً مع التجويد",
    description: "حسّن قراءة القرآن نظراً من خلال التلاوة الموجهة وتدريبات الطلاقة وتعليم التجويد خطوة بخطوة.",
    intro: "طور تلاوتك للقرآن لتكون أدق وأكثر طلاقة من خلال القراءة المنتظمة والتدرب الموجه على التجويد. تركز الدروس على تطبيق أحكام التلاوة أثناء القراءة وفق مستوى الطالب.",
    curriculum: ["قراءة مختارات من آيات القرآن", "تدريبات الطلاقة والقراءة المنتظمة", "أحكام التجويد الأساسية وتطبيقها", "تصحيح أخطاء النطق الشائعة"],
    outcomes: ["قراءة مقاطع القرآن بطلاقة أكبر", "تطبيق أحكام التجويد الأساسية أثناء التلاوة", "اكتساب الثقة بالممارسة المنتظمة"],
    audience: "لمن يعرف أساسيات القراءة العربية ويرغب في تحسين تلاوة القرآن والتجويد.",
  },
  hifz: {
    group: "دراسات القرآن",
    title: "حفظ القرآن ومراجعته",
    description: "ابدأ حفظ القرآن أو واصله وفق خطة منظمة تشمل الحفظ والمراجعة المنتظمة والتلاوة والتقدم بحسب وتيرتك.",
    intro: "احفظ القرآن تدريجياً من خلال خطة دراسية مناسبة ومراجعة منتظمة. تركز الدروس على صحة التلاوة وثبات الحفظ وتكوين روتين يساعد على الاستمرار.",
    curriculum: ["وضع جدول حفظ قابل للتحقيق", "إعداد وتسميع المقرر الجديد", "المراجعة اليومية والتراكمية", "متابعة التقدم ووسائل تثبيت الحفظ"],
    outcomes: ["اتباع روتين منتظم للحفظ", "تقوية ثبات الحفظ بالمراجعة المخططة", "تلاوة المحفوظ بثقة متزايدة"],
    audience: "للطلاب القادرين على قراءة القرآن والراغبين في بدء الحفظ أو مواصلته بخطة موجهة.",
  },
  islamicStudies: {
    group: "الدراسات الإسلامية",
    title: "دورات الدراسات الإسلامية",
    description: "استكشف دروس الحديث والفقه المنظمة، مع دراسة النصوص والمفاهيم الأساسية والتطبيقات العملية.",
    intro: "ادرس المواد الإسلامية الأساسية من خلال دروس واضحة وموجهة. تعرف إلى دراسة الحديث والفقه واختر المسار المناسب لاهتماماتك ومستواك.",
    curriculum: ["قراءة موجهة لنصوص مختارة من الحديث", "مصطلحات الفقه ومفاهيمه الأساسية", "دراسة منظمة للموضوعات ومراجعتها"],
    outcomes: ["تأسيس لمواصلة دراسة العلوم الإسلامية", "فهم المصطلحات والأفكار الأساسية في كل مادة", "ربط الدراسة بالتأمل العملي الواعي"],
    audience: "للمتعلمين الراغبين في مدخل منظم إلى الحديث أو أساسيات الفقه الإسلامي.",
  },
  hadith: {
    group: "الدراسات الإسلامية",
    title: "دراسة الحديث النبوي والتعلم الموجه",
    description: "ادرس أحاديث مختارة من خلال القراءة الموجهة والمصطلحات الأساسية وفهم السياق والتأمل في الدروس العملية.",
    intro: "ادرس الحديث من خلال القراءة المتأنية والشرح الموجه. تقدم الدروس أحاديث مختارة وتوضح المصطلحات المهمة وسياقها وما فيها من دروس للحياة اليومية.",
    curriculum: ["قراءة نصوص مختارة من الحديث", "فهم المصطلحات العربية الأساسية", "مناقشة السياق والمعنى", "التأمل في الدروس العملية والآداب"],
    outcomes: ["فهم المعنى الأساسي للأحاديث المدروسة", "التعرف إلى مفردات الحديث", "ربط التعلم بالتأمل العملي"],
    audience: "للطلاب الراغبين في مدخل منظم إلى الحديث أو دراسة نصوص مختارة بإرشاد.",
  },
  fiqh: {
    group: "الدراسات الإسلامية",
    title: "دراسة الفقه الإسلامي",
    description: "تعلم أساسيات الفقه من خلال دراسة منظمة للمفاهيم والعبادات والمصطلحات والمسائل العملية.",
    intro: "ادرس أساسيات الفقه بطريقة واضحة ومنظمة، مع التركيز على المفاهيم المهمة والمعرفة اللازمة للتعلم عن العبادات والممارسات اليومية.",
    curriculum: ["مصطلحات الفقه وأصوله الأساسية", "أساسيات الطهارة والصلاة", "دراسة منظمة لموضوعات مختارة", "أسئلة موجهة ومراجعة"],
    outcomes: ["فهم المفاهيم الأساسية في الفقه", "التعرف إلى المصطلحات المستخدمة في الدراسة", "اتباع منهج منظم لتعلم المسائل العملية"],
    audience: "للمتعلمين الراغبين في تأسيس موجه في الفقه الإسلامي والموضوعات العملية الأساسية.",
  },
  english: {
    group: "دورات اللغة الإنجليزية",
    title: "دورات اللغة الإنجليزية للقواعد والمحادثة",
    description: "طور مهاراتك العملية في الإنجليزية من خلال دورات مركزة في القواعد والمحادثة للمتعلمين الراغبين في تواصل أوضح.",
    intro: "اختر مساراً متخصصاً لتحسين تواصلك باللغة الإنجليزية. ادرس القواعد لتكوين جمل أدق أو تدرب على المحادثة لاكتساب الثقة في المواقف اليومية.",
    curriculum: ["القواعد الأساسية وبناء الجملة", "المفردات والتعبيرات اليومية", "تدريبات موجهة على التحدث والاستماع"],
    outcomes: ["التواصل باللغة الإنجليزية بوضوح أكبر", "تقوية أساسيات القواعد", "التدرب على التحدث بثقة أكبر"],
    audience: "للمتعلمين الراغبين في تحسين الإنجليزية للتواصل اليومي أو الدراسي أو المهني.",
  },
  englishGrammar: {
    group: "دورات اللغة الإنجليزية",
    title: "دورة قواعد اللغة الإنجليزية",
    description: "حسّن قواعد اللغة الإنجليزية من خلال دروس واضحة وتدريبات على بناء الجملة والأزمنة وأقسام الكلام والكتابة اليومية.",
    intro: "قوّ لغتك الإنجليزية من خلال تعليم عملي للقواعد. توضح الدروس طريقة بناء الجمل وتتيح للمتعلمين تطبيق القواعد في التحدث والكتابة.",
    curriculum: ["أقسام الكلام وتركيب الجملة", "أزمنة الأفعال والتوافق بين الفاعل والفعل", "الأسئلة والنفي والتراكيب الشائعة", "تدريبات القواعد للكتابة والمحادثة"],
    outcomes: ["تكوين جمل أوضح وأكثر دقة", "استخدام الأزمنة الشائعة بثقة أكبر", "تطبيق القواعد في التواصل اليومي"],
    audience: "للمتعلمين الراغبين في تأسيس قواعد الإنجليزية أو تحسين دقة التحدث والكتابة.",
  },
  englishConversation: {
    group: "دورات اللغة الإنجليزية",
    title: "دورة المحادثة باللغة الإنجليزية",
    description: "اكتسب الثقة في التحدث بالإنجليزية من خلال المحادثة الموجهة والمفردات المفيدة وتدريب النطق والمواقف اليومية.",
    intro: "تدرب على التحدث بالإنجليزية في بيئة داعمة ومنظمة. تستخدم الدروس موضوعات يومية ومحادثات موجهة لتنمية الطلاقة والاستماع والمفردات المفيدة.",
    curriculum: ["التعارف والمحادثات اليومية", "المفردات المفيدة والتعبيرات الطبيعية", "تدريبات الاستماع والنطق", "نقاشات موجهة وتمثيل الأدوار"],
    outcomes: ["التحدث براحة أكبر في المواقف الشائعة", "توسيع المفردات العملية", "تحسين الاستماع والاستجابة في المحادثة"],
    audience: "لمتعلمي الإنجليزية الراغبين في اكتساب الثقة في مواقف الحياة اليومية أو الدراسة أو العمل.",
  },
};

const interfaceText = {
  en: {
    home: "Home", arabic: "Arabic", quran: "Quran", islamic: "Islamic Studies", english: "English", contact: "Contact",
    ask: "Ask about lessons", study: "What you will study", outcomes: "Learning outcomes", audience: "Who this course is for",
    related: "Explore related courses", footer: "All rights reserved.", contactCourse: "Contact about this course", toggle: "العربية", languageLabel: "Switch to Arabic",
  },
  ar: {
    home: "الرئيسية", arabic: "العربية", quran: "القرآن", islamic: "الدراسات الإسلامية", english: "الإنجليزية", contact: "تواصل",
    ask: "استفسر عن الدروس", study: "ماذا ستتعلم", outcomes: "مخرجات التعلم", audience: "لمن هذه الدورة؟",
    related: "اكتشف الدورات ذات الصلة", footer: "جميع الحقوق محفوظة.", contactCourse: "تواصل للاستفسار عن الدورة", toggle: "English", languageLabel: "التبديل إلى الإنجليزية",
  },
};

const CoursePage = ({ course }) => {
  const [language, setLanguage] = useState("en");
  const isArabic = language === "ar";
  const content = isArabic ? arabicCourseContent[Object.keys(courses).find((key) => courses[key] === course)] : course;
  const labels = interfaceText[language];

  useEffect(() => {
    const previousTitle = document.title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionTag?.content;
    const metaDescription = descriptionTag ?? document.createElement("meta");
    if (!descriptionTag) {
      metaDescription.name = "description";
      document.head.append(metaDescription);
    }
    metaDescription.content = content.description;

    const canonicalTag = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonicalTag?.href;
    const canonical = canonicalTag ?? document.createElement("link");
    if (!canonicalTag) {
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = `${window.location.origin}${course.path}`;
    document.title = `${content.title} | Ihsan Ullah Fareed`;

    return () => {
      document.title = previousTitle;
      if (previousDescription === undefined) metaDescription.remove();
      else metaDescription.content = previousDescription;
      if (previousCanonical === undefined) canonical.remove();
      else canonical.href = previousCanonical;
    };
  }, [content, course]);

  const relatedCourses = course.related.map((key) => courses[key]);

  return (
    <div dir={isArabic ? "rtl" : "ltr"} lang={language} className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800/70 px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-zinc-300">
            <Link to="/" className="font-semibold text-white hover:text-amber-300">{labels.home}</Link>
            <Link to="/arabic-courses" className="hover:text-amber-300">{labels.arabic}</Link>
            <Link to="/quran-studies" className="hover:text-amber-300">{labels.quran}</Link>
            <Link to="/islamic-studies" className="hover:text-amber-300">{labels.islamic}</Link>
            <Link to="/english-courses" className="hover:text-amber-300">{labels.english}</Link>
            <Link to="/contact" className="hover:text-amber-300">{labels.contact}</Link>
          </nav>
          <button
            type="button"
            onClick={() => setLanguage(isArabic ? "en" : "ar")}
            aria-label={labels.languageLabel}
            className="rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-amber-300 hover:text-white"
          >
            {labels.toggle}
          </button>
        </div>
      </header>

      <main>
        <section className="border-b border-zinc-800/70 px-6 py-16 md:px-10 md:py-20">
          <div className="mx-auto max-w-5xl">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-zinc-400">
              <Link to="/" className="hover:text-amber-300">Home</Link>
              <span className="px-2" aria-hidden="true">/</span>
              {course.parentPath ? (
                <>
                  <Link to={course.parentPath} className="hover:text-amber-300">{content.group}</Link>
                  <span className="px-2" aria-hidden="true">/</span>
                </>
              ) : null}
              <span className="text-zinc-200">{content.title}</span>
            </nav>
            <p className="text-sm font-semibold text-amber-300">{content.group}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">{content.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{content.intro}</p>
            <Link to="/contact" className="mt-8 inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300">
              {labels.ask} <ChevronRight className={`${isArabic ? "mr-2 rotate-180" : "ml-2"} h-4 w-4`} />
            </Link>
          </div>
        </section>

        <section className="px-6 py-14 md:px-10 md:py-16">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            <article>
              <h2 className="text-2xl font-semibold">{labels.study}</h2>
              <ul className="mt-6 space-y-4 text-zinc-300">
                {content.curriculum.map((item) => <li key={item} className="border-b border-zinc-800 pb-4">{item}</li>)}
              </ul>
            </article>
            <article>
              <h2 className="text-2xl font-semibold">{labels.outcomes}</h2>
              <ul className="mt-6 space-y-4 text-zinc-300">
                {content.outcomes.map((item) => <li key={item} className="border-b border-zinc-800 pb-4">{item}</li>)}
              </ul>
              <h2 className="mt-10 text-2xl font-semibold">{labels.audience}</h2>
              <p className="mt-4 leading-7 text-zinc-400">{content.audience}</p>
            </article>
          </div>
        </section>

        <section className="border-t border-zinc-800/70 px-6 py-14 md:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-semibold">{labels.related}</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {relatedCourses.map((related) => (
                <Link key={related.path} to={related.path} className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-200 transition hover:border-amber-300 hover:text-amber-300">
                  {isArabic ? arabicCourseContent[Object.keys(courses).find((key) => courses[key] === related)]?.title ?? related.title : related.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/70 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 text-sm text-zinc-400">
          <p>© 2026 Ihsan Ullah Fareed. {labels.footer}</p>
          <Link to="/contact" className="hover:text-amber-300">{labels.contactCourse}</Link>
        </div>
      </footer>
    </div>
  );
};

export default CoursePage;