export type Service = {
  slug: string;
  title: string;
  icon: string;
  cover?: string;
  description: string;
  longDescription?: string;
  tags?: string[];
  priceFrom?: string;
  includes?: string[];
  prices?: { title: string; description?: string; amount: string }[];
  faq?: { q: string; a: string }[];
  related?: string[]; // slugs
};

export const services: Service[] = [
  {
    slug: "stomatology",
    title: "Стоматология",
    icon: "/services/dentistry.png",
    cover: "/services/dentistry.png",
    description: "Лечение зубов, протезирование, имплантация",
    longDescription:
      "Полный спектр стоматологических услуг: от профилактики и лечения кариеса до имплантации и протезирования. Работаем по международным протоколам, используем современную анестезию и микроскоп.",
    tags: ["Стоматология", "Имплантация", "Эстетика"],
    priceFrom: "от 8 000 тг",
    includes: ["Лечение кариеса", "Эстетическая реставрация", "Чистка и гигиена"],
    prices: [
      { title: "Консультация стоматолога", amount: "8 000 тг" },
      { title: "Лечение кариеса (1 поверхность)", amount: "18 000 тг" },
      { title: "Имплантация (без коронки)", amount: "от 180 000 тг" },
      { title: "Профессиональная гигиена", amount: "18 000 тг" },
    ],
    faq: [
      { q: "Больно ли лечить зубы?", a: "Мы используем современные анестетики, лечение проходит комфортно." },
      { q: "Сколько держится имплант?", a: "При правильном уходе 10–15 лет и более." },
    ],
    related: ["diagnostics", "consultations"],
  },
  {
    slug: "diagnostics",
    title: "Диагностика",
    icon: "/services/diagnostics.png",
    cover: "/services/diagnostics.png",
    description: "УЗИ, рентген, функциональные исследования",
    longDescription:
      "Точная и быстрая диагностика на современном оборудовании. Единые стандарты описания исследований и консультативная поддержка лечащих врачей.",
    tags: ["УЗИ", "Рентген", "Функциональные тесты"],
    priceFrom: "от 6 500 тг",
    includes: ["УЗИ органов", "ЭКГ", "Рентгенография"],
    prices: [
      { title: "УЗИ брюшной полости", amount: "15 000 тг" },
      { title: "УЗИ щитовидной железы", amount: "10 000 тг" },
      { title: "Рентген грудной клетки", amount: "8 000 тг" },
      { title: "ЭКГ с расшифровкой", amount: "5 500 тг" },
    ],
    faq: [
      { q: "Нужно ли готовиться к УЗИ?", a: "Для ряда исследований — да. Уточняйте у администратора при записи." },
    ],
    related: ["laboratory", "checkup"],
  },
  {
    slug: "laboratory",
    title: "Анализы",
    icon: "/services/analysis.png",
    cover: "/services/analysis.png",
    description: "Лабораторные исследования крови и мочи",
    tags: ["Лаборатория", "Скрининг"],
    priceFrom: "от 3 500 тг",
    includes: ["ОАК", "ОАМ", "Биохимия"],
    prices: [
      { title: "Общий анализ крови", amount: "6 500 тг" },
      { title: "Общий анализ мочи", amount: "4 500 тг" },
      { title: "Биохимический профиль (базовый)", amount: "13 000 тг" },
    ],
    faq: [
      { q: "Нужно приходить натощак?", a: "Для большинства анализов — да, за 8–12 часов исключите еду и кофе." },
    ],
    related: ["consultations"],
  },
  {
    slug: "therapy",
    title: "Терапия",
    icon: "/services/therapy.png",
    cover: "/services/therapy.png",
    description: "Лечение внутренних заболеваний",
    tags: ["Терапия", "Профилактика"],
    priceFrom: "от 7 000 тг",
    includes: ["Первичный прием", "План лечения", "Диспансерное наблюдение"],
    prices: [
      { title: "Первичная консультация", amount: "7 000 тг" },
      { title: "Повторная консультация", amount: "6 000 тг" },
    ],
    faq: [
      { q: "Можно ли онлайн-консультацию?", a: "Да, для повторных приемов доступна онлайн-консультация." },
    ],
    related: ["diagnostics", "laboratory"],
  },
  {
    slug: "vaccination",
    title: "Вакцинация",
    icon: "/services/vaccination.png",
    cover: "/services/vaccination.png",
    description: "Прививки для детей и взрослых",
    tags: ["Прививки", "Профилактика"],
    priceFrom: "от 2 500 тг",
    includes: ["Консультация перед вакцинацией", "Инъекция", "Наблюдение 15 мин"],
    prices: [
      { title: "Вакцина от гриппа", amount: "3 500 тг" },
      { title: "АКДС (детям)", amount: "по запросу" },
    ],
    faq: [
      { q: "Есть ли противопоказания?", a: "Определяются на очной консультации по анкете и осмотру." },
    ],
    related: ["consultations"],
  },
  {
    slug: "consultations",
    title: "Консультации",
    icon: "/services/consultation.png",
    cover: "/services/consultation.png",
    description: "Первичные и повторные приемы",
    tags: ["Консультации", "Врачи"],
    priceFrom: "от 5 000 тг",
    includes: ["Сбор анамнеза", "Осмотр", "Рекомендации"],
    prices: [
      { title: "Первичная консультация", amount: "7 000 тг" },
      { title: "Повторная консультация", amount: "5 000 тг" },
    ],
    faq: [
      { q: "Сколько длится прием?", a: "Обычно 20–40 минут. Расширенный — до 60 минут." },
    ],
    related: ["therapy"],
  },
  {
    slug: "checkup",
    title: "Check-Up",
    icon: "/services/checkup.png",
    cover: "/services/checkup.png",
    description: "Комплексное обследование организма",
    tags: ["Скрининг", "Комплекс"],
    priceFrom: "от 25 000 тг",
    includes: ["Консультации", "Анализы", "УЗИ"],
    prices: [
      { title: "Check-Up базовый", amount: "25 000 тг" },
      { title: "Check-Up расширенный", amount: "45 000 тг" },
    ],
    faq: [
      { q: "Сколько времени занимает?", a: "От 2 до 4 часов в зависимости от пакета." },
    ],
    related: ["diagnostics", "laboratory"],
  },
  {
    slug: "certificates",
    title: "Справки",
    icon: "/services/certificates.png",
    cover: "/services/certificates.png",
    description: "Медицинские документы и справки",
    tags: ["Документы", "Осмотры"],
    priceFrom: "от 1 500 тг",
    includes: ["Осмотр", "Оформление", "Подпись врача"],
    prices: [
      { title: "Справка для бассейна", amount: "3 000 тг" },
      { title: "Справка на работу/учебу", amount: "от 2 500 тг" },
    ],
    faq: [
      { q: "Нужны ли анализы?", a: "Для некоторых справок — да, уточните у администратора." },
    ],
    related: ["consultations"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}


