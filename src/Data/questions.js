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
];
export default questionsData;
