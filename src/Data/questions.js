// Σ | Δ | I | X | -

const questionsData = [
  {
    options: [
      {
        text: "لطيف مع الأخرين",
        most: "Σ",
        least: "Σ",
      },
      {
        text: "قادر علي اقناع الأخرين",
        most: "I",
        least: "-",
      },
      {
        text: "لست متكبرا",
        most: "X",
        least: "X",
      },
      {
        text: "تصنع الأشياء بطرق جديدة",
        most: "-",
        least: "Σ",
      },
    ],
  },
  {
    options: [
      {
        text: "مقبول للناس - جذاب",
        most: "I",
        least: "I",
      },
      {
        text: "تنظر الي الأشياء من داخلك ليس من الناس",
        most: "X",
        least: "X",
      },
      {
        text: "عنيد لا تستسلم بسهولة",
        most: "Δ",
        least: "Δ",
      },
      {
        text: "تسر الأخرين ",
        most: "-",
        least: "Σ",
      },
    ],
  },
  {
    options: [
      {
        text: "منقاد - تفعل ما يريده الأخرين",
        most: "-",
        least: "X",
      },
      {
        text: "جرئ - تحب ركوب المخاطر",
        most: "Δ",
        least: "Δ",
      },
      {
        text: "مخلص - صادق مع الناس",
        most: "Σ",
        least: "-",
      },
      {
        text: "شخص ممتع ومشرق",
        most: "I",
        least: "I",
      },
    ],
  },
  {
    options: [
      {
        text: "متفتح - تقبل افكار جديدة",
        most: "X",
        least: "-",
      },
      {
        text: "مستعد لصنع المعروف",
        most: "Σ",
        least: "Σ",
      },
      {
        text: "قوي الإرادة - لا تتراجع",
        most: "-",
        least: "Δ",
      },
      {
        text: "ذو شخصية مرحة",
        most: "I",
        least: "I",
      },
    ],
  },
  {
    options: [
      {
        text: "بشوش - مبتهج ومازح",
        most: "-",
        least: "I",
      },
      {
        text: "مدقق - تتقن الأشياء التي تعلمها",
        most: "X",
        least: "X",
      },
      {
        text: "فظ - نتعامل بخشونة مع الأخرين",
        most: "-",
        least: "Δ",
      },
      {
        text: "هادئ الطبع - لا تغضب بسهولة",
        most: "Σ",
        least: "Σ",
      },
    ],
  },
  {
    options: [
      {
        text: "متنافس - تسعي وراء الفوز",
        most: "Δ",
        least: "Δ",
      },
      {
        text: "مقدر - تفكر في الأخرين",
        most: "Σ",
        least: "Σ",
      },
      {
        text: "مسرور وسعيد",
        most: "-",
        least: "I",
      },
      {
        text: "تتوافق مع الأخرين",
        most: "-",
        least: "X",
      },
    ],
  },
  {
    options: [
      {
        text: "تريد أن تري الأشياء مضبوطة",
        most: "-",
        least: "X",
      },
      {
        text: "مطيع",
        most: "Σ",
        least: "-",
      },
      {
        text: "لا تقبل الهزيمة او الانكسار",
        most: "Δ",
        least: "Δ",
      },
      {
        text: "مرح - تحب الضحك والمرح",
        most: "I",
        least: "I",
      },
    ],
  },
  {
    options: [
      {
        text: "شجاع - لا تخاف",
        most: "Δ",
        least: "-",
      },
      {
        text: "ملهم - تدفع الأخرين للقيام بواجباتهم",
        most: "I",
        least: "-",
      },
      {
        text: "خاضع لا تعارض",
        most: "-",
        least: "Σ",
      },
      {
        text: "خجول",
        most: "-",
        least: "X",
      },
    ],
  },
  {
    options: [
      {
        text: "اجتماعي",
        most: "I",
        least: "I",
      },
      {
        text: "صبور",
        most: "Σ",
        least: "Σ",
      },
      {
        text: "معتمد علي نفسك - لا تتكل علي الأخرين",
        most: "Δ",
        least: "Δ",
      },
      {
        text: "تتكلم بهدوء وبصوت ساكن",
        most: "X",
        least: "-",
      },
    ],
  },
  {
    options: [
      {
        text: "مغامر - تحب تجربة الافكار الجديدة",
        most: "Δ",
        least: "Δ",
      },
      {
        text: "واعي - ذهن متفتح",
        most: "X",
        least: "-",
      },
      {
        text: "دافئ المشاعر وصادق",
        most: "-",
        least: "I",
      },
      {
        text: "معتدل - غير مبالغ",
        most: "Σ",
        least: "Σ",
      },
    ],
  },
  {
    options: [
      {
        text: "متكلم - تحب أن تتكلم كثيرا",
        most: "I",
        least: "I",
      },
      {
        text: "منطوي - تخفي أحساسيك",
        most: "Σ",
        least: "Σ",
      },
      {
        text: "تتعامل مع الأشياء بطريقة مألوفة",
        most: "-",
        least: "X",
      },
      {
        text: "حاسم - لا تخاف من أتخاذ القرارات",
        most: "Δ",
        least: "Δ",
      },
    ],
  },
  {
    options: [
      {
        text: "مهذب - ذو أخلاق عالية",
        most: "-",
        least: "I",
      },
      {
        text: "جسور - لك شجاعة عالية للقيام بالأشياء",
        most: "Δ",
        least: "Δ",
      },
      {
        text: "دبلوماسي - تتعامل مع الناس بلباقة",
        most: "X",
        least: "-",
      },
      {
        text: "قنوع - مكتف وراضي",
        most: "Σ",
        least: "Σ",
      },
    ],
  },

  {
    options: [
      {
        text: "عدواني - تتصرف بطريقة عنيفة",
        most: "Δ",
        least: "-",
      },
      {
        text: "متحمس - تغويك الاثارة",
        most: "I",
        least: "I",
      },
      {
        text: "لطيف ودود ومحبوب",
        most: "Σ",
        least: "Σ",
      },
      {
        text: "تخاف من الإقدام على فعل الأشياء",
        most: "-",
        least: "X"
      },
    ],
  },
  {
    options: [
      {
        text: "محترس - حذر",
        most: "X",
        least: "X",
      },
      {
        text: "تصمم أن تفعل الأشياء بطريقتك",
        most: "Δ",
        least: "-",
      },
      {
        text: "مقنع - تقدم الدلائل المقنعة",
        most: "I",
        least: "I",
      },
      {
        text: "طيب ومسالم",
        most: "Σ",
        least: "-",
      },
    ],
  },
  {
    options: [
      {
        text: "متطوع - يسعد بإعانة الأخرين",
        most: "Σ",
        least: "-",
      },
      {
        text: "متشوق لفعل الواجبات والمهام",
        most: "-",
        least: "-",
      },
      {
        text: "تتوافق مع الآخرين",
        most: "X",
        least: "X",
      },
      {
        text: "نشيط - حيوي ومرح",
        most: "-",
        least: "Δ"
      },
    ],
  },
  {
    options: [
      {
        text:"واثق في نفسك",
        most: "I",
        least: "-",
      },
      {
        text:"متعاطف مع مشاعر الاخرين",
        most: "-",
        least: "Σ",
      },
      {
        text:"محتمل - تقبل اراء الاخرين",
        most: "-",
        least: "X",
      },
      {
        text:"مبرر - تفعل الاشياء بثقة كبيرة",
        most: "Δ",
        least: "Δ",
      },
    ],
  },
  {
    options: [
      {
        text:"منضبط - تعمل بمقتضي القوانين",
        most: "X",
        least: "-",
      },
      {
        text:"كريم - لست أنانيا",
        most: "Σ",
        least: "Σ",
      },
      {
        text:"منتعش - نشيط وحركي",
        most: "-",
        least: "Σ",
      },
      {
        text:"مثابر - ترفض الأستسلام",
        most: "Δ",
        least: "Δ"
      },
    ],
  },
  {
    options: [
      {
        text:"تستحق الأحترام",
        most: "I",
        least: "-",
      },
      {
        text:"شقوق - تساعد الأخرين",
        most: "Σ",
        least: "-",
      },
      {
        text:"مذعن - تستسلم بسهولة",
        most: "-",
        least: "X",
      },
      {
        text:"قوي الشخصية",
        most: "Δ",
        least: "Δ",
      },
    ],
  },
  {
    options: [
      {
        text: "محترم - تهتم بالأخرين",
        most: "X",
        least: "-",
      },
      {
       text: "رائد - تأتي بافكار جديدة",
       most: "Δ",
       least: "Δ",
      },
      {
       text: "متفائل",
        most: "I",
        least: "I",
      },
      {
       text: "مريح - مصدر راحة للأخرين",
       most: "Σ",
       least: "Σ",
      },
    ],
  },
  {
    options: [
      {
       text: "مجادل",
       most: "Δ",
       least: "Δ",
      },
      {
       text: "متكيف - تتوافق مع التغيرات",
        most: "X",
        least: "-",
      },
      {
       text: "متهامل",
        most: "-",
        least: "Σ",
      },
      {
       text: "جذل - خالي البال ومستهتر",
       most: "I",
       least: "I",
      },
    ],
  },
  {
    options: [
      {
       text: "وثوق - تثق في الاخرين",
        most: "Σ",
        least: "I",
      },
      {
       text: "قنوع - راض بصفة عامة",
        most: "-",
        least: "Σ",
      },
      {
       text: "ايجابي - متأكد من الاشياء التي تصنعها",
       most: "Δ",
       least: "Δ",
      },
      {
       text: "سلمي متحرر من المخاوف",
        most: "Σ",
        least: "X",
      },
    ],
  },
  {
    options: [
      {
        text: "مرافق جيد - تحب ان تكون مع الاخرين",
        most: "I",
        least: "I",
      },
      {
       text: "مربي - تتصرف بالطريقة الصحيحة",
       most: "-",
       least: "X",
      },
      {
       text: "شديد - قوي في حركاتك",
       most: "Δ",
       least: "Δ",
      },
      {
       text: "لين - متساهل مع الاخرين",
       most: "X",
       least: "Σ",
      },
    ],
  },
  {
    options: [
      {
       text: "حسن المعاشر - مريح",
       most: "I",
       least: "I",
      },
      {
       text: "دقيق - تصنع الاشياء بالطريقة الصحيحة",
        most: "X",
        least: "-",
      },
      {
       text: "متكلم حر - تتكلم بشجاعة وحرية",
       most: "Δ",
       least: "Δ",
      },
      {
       text: "منعزل - هادئ وكتوم",
       most: "-",
       least: "Σ",
      },
    ],
  },
  {
    options: [
      {
       text: "مضطرب - لا تثبت علي حال",
       most: "Δ",
       least: "Δ",
      },
      {
       text: "ودود - تعتم بالاخرين وحسن الجوار",
       most: "Σ",
       least: "Σ",
      },
      {
       text: "محبوب من الناس ",
       most: "I",
       least: "I",
      },
      {
       text: "ورع - تقي ومتعبد وشديد التعلق بالدين",
        most: "X",
        least: "X",
      },
    ],
  },
];
export default questionsData;
