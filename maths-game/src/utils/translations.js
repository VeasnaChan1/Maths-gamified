/**
 * Bilingual translations map for Brilliance Tutoring
 * Supports English ('en') and Khmer ('km').
 */

export const TRANSLATIONS = {
  en: {
    // School Identity
    schoolName: 'Brilliance Tutoring',
    schoolNameKm: 'សាលាគរុបំប៉ន ប្រ៊ីលាន',
    motto: 'Discipline · Quality · Virtue',
    tagline: 'Building true understanding, confidence, and long-term academic excellence.',

    // Navigation
    navAbout: 'About',
    navCurriculum: 'Curriculums',
    navSubjects: 'Subjects',
    navFeatures: 'Features',
    navMathPortal: 'Maths Practice Portal',
    navContact: 'Contact',
    btnEnroll: 'Enroll via Telegram',
    langToggle: 'ភាសាខ្មែរ',

    // Promotion Banner
    promoBadge: 'Special Offer',
    promoTitle: 'Early 2026 Promotion!',
    promoSubtitle:
      "Don't miss this opportunity! Our tutoring center is offering new semester preparation courses to ensure your child starts the school year with excellence.",
    promoDetails:
      'For a limited time, enjoy exclusive tuition discounts across all subjects and programs — including Cambridge, Singapore, IB, AP, and the National Curriculum.',
    promoSeats: 'Limited seats available — enroll your child today!',
    promoCta: 'Claim Promotion on Telegram',

    // Hero Section
    heroBadge: 'New Semester Enrollment Open',
    heroQuestion: 'Are you searching for the best way to get your child ready for the new school year?',
    heroAnswer:
      'At Brilliance Tutoring, we help students reinforce essential knowledge, build genuine self-confidence, and stay ahead before the school bell rings.',
    heroCtaPrimary: 'Message Us on Telegram',
    heroCtaSecondary: 'Explore Curriculums',
    heroCtaPractice: 'Try Interactive Maths Portal',

    // Curriculum Section
    curriculumTitle: 'Accredited Curriculums',
    curriculumSubtitle:
      'Specially designed learning paths tailored for national and international academic pathways.',
    curriculums: [
      {
        badge: 'Cambridge',
        name: 'Cambridge International',
        levels: 'Primary · Lower Secondary · Checkpoint · IGCSE · A-Level',
        desc: 'Rigorous British curriculum focusing on conceptual mastery in Mathematics, Sciences, and English.',
      },
      {
        badge: 'Singapore',
        name: 'Singapore Curriculum',
        levels: 'Primary & Secondary Math & Science',
        desc: 'World-renowned CPA (Concrete, Pictorial, Abstract) heuristic problem-solving methodology.',
      },
      {
        badge: 'IB',
        name: 'International Baccalaureate',
        levels: 'PYP · MYP · DP (Diploma Programme)',
        desc: 'Inquiry-based learning developing critical analytical thinking and independent research.',
      },
      {
        badge: 'AP',
        name: 'Advanced Placement (AP)',
        levels: 'Calculus · Physics · Chemistry · Biology · Statistics',
        desc: 'University-level credit coursework and comprehensive standardized exam preparation.',
      },
      {
        badge: 'National',
        name: 'National Curriculum (MoEYS)',
        levels: 'Grade 1 through Grade 12 · BacII National Exam Prep',
        desc: 'Comprehensive foundation reinforcement aligned with the Ministry of Education standards and exams.',
      },
    ],

    // Subjects Grid
    subjectsTitle: 'Subjects Offered',
    subjectsSubtitle: 'Expert guidance across core disciplines for both local and international students.',
    subjects: [
      {
        id: 'maths',
        name: 'Mathematics',
        nameKm: 'គណិតវិទ្យា',
        desc: 'Arithmetic, Algebra, Geometry, Trigonometry, Calculus, and Statistics. Includes our free interactive online Quiz Blitz practice portal.',
        hasPractice: true,
      },
      {
        id: 'science',
        name: 'Sciences',
        nameKm: 'វិទ្យាសាស្ត្រ',
        desc: 'Combined Science, Physics, Chemistry, and Biology. Emphasis on scientific inquiry, lab reasoning, and exam problem solving.',
        hasPractice: false,
      },
      {
        id: 'english',
        name: 'English Language & Literature',
        nameKm: 'ភាសាអង់គ្លេស',
        desc: 'Academic grammar, essay writing, reading comprehension, vocabulary expansion, and international exam prep (IELTS/TOEFL).',
        hasPractice: false,
      },
      {
        id: 'chinese',
        name: 'Chinese (Mandarin)',
        nameKm: 'ភាសាចិន',
        desc: 'Pinyin, Chinese character writing, listening comprehension, HSK certification preparation, and conversational fluency.',
        hasPractice: false,
      },
      {
        id: 'khmer',
        name: 'Khmer Language & Literature',
        nameKm: 'ភាសាខ្មែរ',
        desc: 'Grammar, essay writing, reading analysis, and targeted preparation for National Grade 9 & Grade 12 exams.',
        hasPractice: false,
      },
    ],

    // Features Section
    featuresTitle: 'Why Choose Brilliance Tutoring?',
    featuresSubtitle:
      'We invest in each student’s personal growth, turning weaknesses into strengths.',
    features: [
      {
        title: 'Small Groups or 1-on-1 Tutoring',
        desc: 'Choose between dynamic small group sessions or personalized private 1-on-1 coaching adapted to your child’s pace.',
      },
      {
        title: 'Experienced & Caring Teachers',
        desc: 'Our passionate mentors possess deep curriculum expertise and take the time to mentor and support every learner.',
      },
      {
        title: 'Foundation Reinforcement & Next-Grade Prep',
        desc: 'We review prerequisite concepts and introduce upcoming grade topics so students feel confident and prepared.',
      },
      {
        title: 'Exam Readiness & Grade Improvement',
        desc: 'Structured revision strategies, past-paper drills, and time management skills for school tests and national/international exams.',
      },
      {
        title: 'Vacation is an Opportunity to Grow',
        desc: 'School holidays are not just for rest — they are the best window to bridge learning gaps and build long-term momentum.',
      },
      {
        title: 'Interactive Learning Platform',
        desc: 'Students gain access to our custom-built digital practice portal with instant step-by-step explanations.',
      },
    ],

    // Online Practice Teaser
    practiceTeaserTitle: 'Try Our Online Maths Practice',
    practiceTeaserSubtitle:
      'A free, interactive quiz platform designed by our teachers for Year 6 (Key Stage 2) and Year 9 (Key Stage 3 / GCSE prep).',
    btnLaunchPractice: 'Launch Maths Practice Portal',
    year6PracticeDesc: 'Fractions, decimals, percentages, ratio, area and perimeter, order of operations.',
    year9PracticeDesc: 'Algebra, linear graphs, Pythagoras, percentages and ratio, angles, standard form, transformations.',

    // Contact & Footer
    contactTitle: 'Get in Touch with Us Today',
    contactSubtitle: 'Have questions or ready to register? Message our admissions team directly.',
    phoneLabel: 'Phone & Telegram Direct',
    telegramChannelLabel: 'Telegram Announcements Channel',
    facebookLabel: 'Official Facebook Page',
    addressLabel: 'Location',
    addressValue: 'Phnom Penh, Cambodia',
    footerCopyright: '© 2026 Brilliance Tutoring. All rights reserved.',
  },

  km: {
    // School Identity
    schoolName: 'សាលាបំប៉ន ប្រ៊ីលាន',
    schoolNameKm: 'Brilliance Tutoring',
    motto: 'វិន័យ គុណភាព គុណធម៌',
    tagline: 'ផ្តោតលើការកសាងការយល់ដឹងពិតប្រាកដ ទំនុកចិត្ត និងភាពជោគជ័យក្នុងការសិក្សារយៈពេលវែង។',

    // Navigation
    navAbout: 'អំពីយើង',
    navCurriculum: 'កម្មវិធីសិក្សា',
    navSubjects: 'មុខវិជ្ជា',
    navFeatures: 'លក្ខណៈពិសេស',
    navMathPortal: 'វិបផតថលហាត់គណិតវិទ្យា',
    navContact: 'ទំនាក់ទំនង',
    btnEnroll: 'ចុះឈ្មោះតាម Telegram',
    langToggle: 'English',

    // Promotion Banner
    promoBadge: 'ការផ្តល់ជូនពិសេស',
    promoTitle: 'ប្រូម៉ូសិនដើមឆ្នាំ 2026!',
    promoSubtitle:
      'កុំអោយឪកាសនេះកន្លងផុតទៅ សាលាបំប៉នរបស់យើងខ្ញុំនឹងធ្វើការផ្តល់ជូននូវវគ្គសិក្សាបវេសនកាលថ្មីដើម្បីត្រៀមខ្លួនអោយបានល្អសម្រាប់ការរៀននៅសាលា។',
    promoDetails:
      'ក្នុងរយៈពេលកំណត់ សូមរីករាយជាមួយការបញ្ចុះតម្លៃពិសេសលើមុខវិជ្ជា និងកម្មវិធីទាំងអស់ — រួមទាំង Cambridge, Singapore, IB, AP, និងកម្មវិធីសិក្សាថ្នាក់ជាតិ។',
    promoSeats: 'កន្លែងមានកំណត់ — ចុះឈ្មោះកូនអ្នកឥឡូវនេះ!',
    promoCta: 'ទទួលប្រូម៉ូសិនតាម Telegram',

    // Hero Section
    heroBadge: 'វគ្គសិក្សាថ្មីចាប់ផ្តើមទទួលចុះឈ្មោះ',
    heroQuestion: 'តើអាណាព្យាបាលកំពុងស្វែងរកវិធីល្អបំផុត ដើម្បីឲ្យកូនៗត្រៀមខ្លួនរួចរាល់សម្រាប់ឆ្នាំសិក្សាថ្មីមែនទេ?',
    heroAnswer:
      'ជាមួយ សាលាបំប៉នប្រ៊ីលាន យើងជួយឲ្យសិស្សានុសិស្សពង្រឹងចំណេះដឹង បង្កើនទំនុកចិត្ត និងឈានមុខគេមុនពេលចូលរៀនឆ្នាំថ្មី!',
    heroCtaPrimary: 'ផ្ញើសារមកយើងតាម Telegram',
    heroCtaSecondary: 'ស្វែងយល់កម្មវិធីសិក្សា',
    heroCtaPractice: 'សាកល្បងហាត់គណិតវិទ្យាអនឡាញ',

    // Curriculum Section
    curriculumTitle: 'កម្មវិធីសិក្សាជាតិ និងអន្តរជាតិ',
    curriculumSubtitle: 'កម្មវិធីសិក្សាត្រូវបានរៀបចំយ៉ាងពិសេសស្របតាមកម្រិត និងតម្រូវការជាក់ស្តែងរបស់អ្នកសិក្សា។',
    curriculums: [
      {
        badge: 'Cambridge',
        name: 'កម្មវិធី Cambridge International',
        levels: 'Primary · Lower Secondary · Checkpoint · IGCSE · A-Level',
        desc: 'កម្មវិធីសិក្សាស្ដង់ដារអង់គ្លេស ពង្រឹងការយល់ដឹងស៊ីជម្រៅលើមុខវិជ្ជា គណិតវិទ្យា វិទ្យាសាស្ត្រ និងភាសាអង់គ្លេស។',
      },
      {
        badge: 'Singapore',
        name: 'កម្មវិធីសិក្សាសិង្ហបុរី (Singapore)',
        levels: 'គណិតវិទ្យា និងវិទ្យាសាស្ត្រ បឋម និងមធ្យមសិក្សា',
        desc: 'វិធីសាស្ត្រដោះស្រាយលំហាត់គណិតវិទ្យាបែប Heuristics និង CPA ដែលល្បីល្បាញទូទាំងពិភពលោក។',
      },
      {
        badge: 'IB',
        name: 'កម្មវិធី IB (International Baccalaureate)',
        levels: 'PYP · MYP · DP (Diploma Programme)',
        desc: 'ការអប់រំបែបស្រាវជ្រាវ និងវិភាគស៊ីជម្រៅ បង្កើនការគិតពិចារណាដោយឯករាជ្យភាព។',
      },
      {
        badge: 'AP',
        name: 'កម្មវិធី Advanced Placement (AP)',
        levels: 'Calculus · Physics · Chemistry · Biology · Statistics',
        desc: 'កម្មវិធីសិក្សាកម្រិតមហាវិទ្យាល័យ និងការត្រៀមប្រឡងស្ដង់ដារអន្តរជាតិសម្រាប់ចូលសាកលវិទ្យាល័យ។',
      },
      {
        badge: 'ថ្នាក់ជាតិ',
        name: 'កម្មវិធីសិក្សាថ្នាក់ជាតិ (ក្រសួងអប់រំ)',
        levels: 'ថ្នាក់ទី ១ ដល់ ទី ១២ · ត្រៀមប្រឡងសញ្ញាបត្របាក់ឌុប',
        desc: 'ពង្រឹងមូលដ្ឋានគ្រឹះយ៉ាងរឹងមាំ ត្រៀមឡើងថ្នាក់ និងត្រៀមប្រឡងប្រចាំឆមាស និងប្រឡងថ្នាក់ជាតិ។',
      },
    ],

    // Subjects Grid
    subjectsTitle: 'មុខវិជ្ជាបង្រៀនបំប៉ន',
    subjectsSubtitle: 'បង្រៀនដោយគ្រូបំប៉នដែលមានបទពិសោធន៍ ផ្តល់នូវមេរៀនបត់បែនតាមតម្រូវការ។',
    subjects: [
      {
        id: 'maths',
        name: 'គណិតវិទ្យា (Mathematics)',
        nameKm: 'Mathematics',
        desc: 'លេខនព្វន្ត ពីជគណិត ធរណីមាត្រ ត្រីកោណមាត្រ និងស្ថិតិ។ មានរួមបញ្ចូលវិបផតថល Quiz Blitz ហាត់លំហាត់អន្តរកម្មឥតគិតថ្លៃ។',
        hasPractice: true,
      },
      {
        id: 'science',
        name: 'វិទ្យាសាស្ត្រ (Sciences)',
        nameKm: 'Physics · Chemistry · Biology',
        desc: 'វិទ្យាសាស្ត្រទូទៅ រូបវិទ្យា គីមីវិទ្យា និងជីវវិទ្យា សម្រាប់កម្មវិធីជាតិ និង Cambridge IGCSE/A-Level។',
        hasPractice: false,
      },
      {
        id: 'english',
        name: 'ភាសាអង់គ្លេស (English)',
        nameKm: 'English Language & Literature',
        desc: 'វេយ្យាករណ៍ ការតែងសេចក្តី អំណាន និងការត្រៀមប្រឡងភាសាអង់គ្លេសស្ដង់ដារអន្តរជាតិ។',
        hasPractice: false,
      },
      {
        id: 'chinese',
        name: 'ភាសាចិន (Chinese)',
        nameKm: 'Mandarin Chinese',
        desc: 'ពាក្យគន្លឹះ ភីនអុីន (Pinyin) ការសរសេរតួអក្សរ ការសន្ទនា និងការត្រៀមប្រឡង HSK គ្រប់កម្រិត។',
        hasPractice: false,
      },
      {
        id: 'khmer',
        name: 'ភាសាខ្មែរ (Khmer)',
        nameKm: 'Khmer Literature',
        desc: 'អក្សរសាស្ត្រខ្មែរ វេយ្យាករណ៍ ការតែងសេចក្តី និងត្រៀមប្រឡងថ្នាក់ទី ៩ និងទី ១២ (បាក់ឌុប)។',
        hasPractice: false,
      },
    ],

    // Features Section
    featuresTitle: 'ហេតុអ្វីជ្រើសរើស សាលាបំប៉នប្រ៊ីលាន?',
    featuresSubtitle:
      'ជួយសិស្សសម្រេចលទ្ធផលល្អ មិនថាកូនរបស់អ្នកត្រូវការការរំលឹកឡើងវិញ ការវិវត្តចំណាត់ថ្នាក់ ឬការរៀបចំផែនការសិក្សានិងប្រឡង។',
    features: [
      {
        title: 'រៀនជាក្រុម ឬ ការបង្រៀន 1 ទល់នឹង 1',
        desc: 'ជ្រើសរើសថ្នាក់រៀនជាក្រុមតូចៗ ឬការបង្រៀនឯកជនមួយទល់នឹងមួយ ទៅតាមតម្រូវការជាក់ស្តែងរបស់សិស្ស។',
      },
      {
        title: 'គ្រូបង្រៀនមានបទពិសោធន៍ និងយកចិត្តទុកដាក់',
        desc: 'គ្រូបំប៉នរបស់យើងផ្តល់នូវការបង្រៀនយ៉ាងច្បាស់លាស់ លើកទឹកចិត្ត និងតាមដានការវិវត្តរបស់សិស្សគ្រប់រូប។',
      },
      {
        title: 'ផ្ដោតលើការពង្រឹងមូលដ្ឋាន និងត្រៀមសម្រាប់ថ្នាក់បន្ទាប់',
        desc: 'ជួយបំពេញចន្លោះប្រហោងមេរៀនចាស់ និងត្រៀមចំណេះដឹងថ្មីសម្រាប់ថ្នាក់បន្ទាប់ដោយទំនុកចិត្ត។',
      },
      {
        title: 'ត្រៀមប្រឡង • ត្រៀមឡើងថ្នាក់ • ពង្រឹងមេរៀនខ្សោយ',
        desc: 'បណ្តុះបណ្តាលវិធីសាស្ត្រធ្វើលំហាត់ប្រឡង ការគ្រប់គ្រងពេលវេលា និងបង្កើនពិន្ទុក្នុងការប្រឡង។',
      },
      {
        title: 'វិស្សមកាលជាឱកាសដ៏ល្អក្នុងការអភិវឌ្ឍសមត្ថភាព',
        desc: 'វិស្សមកាលមិនមែនសម្រាប់សម្រាកតែប៉ុណ្ណោះទេ តែជាឱកាសដ៏ល្អក្នុងការអភិវឌ្ឍសមត្ថភាព និងត្រៀមជោគជ័យសម្រាប់អនាគត!',
      },
      {
        title: 'វិបផតថលហាត់រៀនឌីជីថលអន្តរកម្ម',
        desc: 'សិស្សអាចធ្វើតេស្តសាកល្បងចំណេះដឹងតាមប្រព័ន្ធ Quiz Blitz ជាមួយការពន្យល់លម្អិតនៃចម្លើយនីមួយៗ។',
      },
    ],

    // Online Practice Teaser
    practiceTeaserTitle: 'សាកល្បងវិបផតថលហាត់គណិតវិទ្យា',
    practiceTeaserSubtitle:
      'ប្រព័ន្ធលំហាត់ឌីជីថល Quiz Blitz រៀបចំឡើងសម្រាប់សិស្សថ្នាក់ទី ៦ (Year 6 - KS2) និងថ្នាក់ទី ៩ (Year 9 - KS3/GCSE)។',
    btnLaunchPractice: 'ចូលហាត់គណិតវិទ្យាឥឡូវនេះ',
    year6PracticeDesc: 'ប្រភាគ ចំនួនទសភាគ ភាគរយ ផលធៀប ផ្ទៃក្រឡា និងបរិមាត្រ លំដាប់នៃប្រមាណវិធី។',
    year9PracticeDesc: 'ពីជគណិត ក្រាហ្វលីនេអ៊ែរ ទ្រឹស្តីបទពីតាក័រ ភាគរយនិងផលធៀប មុំ ទម្រង់ស្តង់ដារ និងបំប្លែងធរណីមាត្រ។',

    // Contact & Footer
    contactTitle: 'ទំនាក់ទំនងមកកាន់យើងខ្ញុំថ្ងៃនេះ',
    contactSubtitle: 'សូមទាក់ទងមកកាន់ក្រុមការងារដើម្បីទទួលបានព័ត៌មានលម្អិត ឬចុះឈ្មោះចូលរៀន។',
    phoneLabel: 'លេខទំនាក់ទំនង និង Telegram',
    telegramChannelLabel: 'Telegram Channel ផ្លូវការ',
    facebookLabel: 'ទំព័រ Facebook ផ្លូវការ',
    addressLabel: 'ទីតាំង',
    addressValue: 'រាជធានីភ្នំពេញ ប្រទេសកម្ពុជា',
    footerCopyright: '© 2026 សាលាបំប៉ន ប្រ៊ីលាន (Brilliance Tutoring)។ រក្សាសិទ្ធិគ្រប់យ៉ាង។',
  },
};
