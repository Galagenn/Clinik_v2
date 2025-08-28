import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-16 sm:py-24">
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div>
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                    International Clinic of Asia
                  </h1>
                  <p className="mt-6 text-base leading-7 text-foreground/70 sm:text-lg md:max-w-xl">
                    Товарищество с ограниченной ответственностью "International Clinic of Asia" – многопрофильный медицинский центр в г. Астана. 
                    Мы — современная клиника полного цикла, где качество медицинской помощи сочетается с внимательным отношением к каждому пациенту. Наша миссия — сделать медицину доступной, понятной и эффективной.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link href="#contact" className="rounded-xl bg-black px-6 py-3 text-center text-white shadow-sm transition-colors hover:bg-black/90">
                      Связаться с нами
                    </Link>
                    <Link href="/services" className="rounded-xl bg-muted px-6 py-3 text-center text-foreground shadow-sm transition-colors hover:bg-muted/80">
                      Наши услуги
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative mx-auto w-full max-w-[40rem] overflow-hidden rounded-2xl ring-1 ring-border">
                    <Image src="/about-us/clinic-reseption.jpg" alt="Ресепшн клиники" width={1200} height={900} className="h-auto w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Наша миссия</h2>
                  <p className="mt-4 text-base leading-7 text-foreground/70">
                    Мы стремимся быть лидерами в области качественной медицинской помощи, используя современные технологии и лучшие практики мировой медицины. Наша цель — помочь каждому пациенту достичь оптимального здоровья и качества жизни.
                  </p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border p-5">
                      <div className="text-lg font-semibold">Качество</div>
                      <div className="text-sm text-foreground/60">медицинской помощи</div>
                    </div>
                    <div className="rounded-2xl border border-border p-5">
                      <div className="text-lg font-semibold">Забота</div>
                      <div className="text-sm text-foreground/60">о каждом пациенте</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Наши ценности</h2>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-2xl border border-border p-5">
                      <div className="text-lg font-semibold">Профессионализм</div>
                      <div className="text-sm text-foreground/70">Постоянное обучение и развитие наших специалистов</div>
                    </div>
                    <div className="rounded-2xl border border-border p-5">
                      <div className="text-lg font-semibold">Честность</div>
                      <div className="text-sm text-foreground/70">Прозрачность в диагностике, лечении и ценообразовании</div>
                    </div>
                    <div className="rounded-2xl border border-border p-5">
                      <div className="text-lg font-semibold">Инновации</div>
                      <div className="text-sm text-foreground/70">Внедрение современных медицинских технологий</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">История развития</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { year: "2009", title: "Основание клиники", description: "Открытие первой клиники с базовым набором услуг" },
                  { year: "2015", title: "Расширение", description: "Добавление новых направлений и современного оборудования" },
                  { year: "2020", title: "Цифровизация", description: "Внедрение электронной системы записи и управления" },
                  { year: "2023", title: "Инновации", description: "Запуск телемедицины и онлайн-консультаций" },
                  { year: "2024", title: "Развитие", description: "Открытие новых филиалов и расширение спектра услуг" },
                  { year: "2025", title: "Будущее", description: "Планы по внедрению ИИ-диагностики и персонализированной медицины" },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-border p-6">
                    <div className="text-2xl font-bold text-primary">{item.year}</div>
                    <div className="mt-2 text-lg font-semibold">{item.title}</div>
                    <div className="mt-1 text-sm text-foreground/70">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Наша команда</h2>
                <p className="mt-2 text-sm text-foreground/60">Опытные специалисты, которые заботятся о вашем здоровье</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "Айгуль Садыкова", role: "Главный врач", exp: "15 лет опыта", focus: "Общее руководство клиникой, терапевтические услуги", img: "/testimonials/avatar.jpg" },
                  { name: "Марат Нуртазин", role: "Заведующий стоматологией", exp: "12 лет опыта", focus: "Стоматологические услуги, имплантация", img: "/testimonials/avatar.jpg" },
                  { name: "Елена Ким", role: "Заведующая диагностикой", exp: "10 лет опыта", focus: "УЗИ, рентген, лабораторные исследования", img: "/testimonials/avatar.jpg" },
                  { name: "Бахыт Жумагалиев", role: "Кардиолог", exp: "14 лет опыта", focus: "Диагностика и лечение сердечно-сосудистых заболеваний", img: "/testimonials/avatar.jpg" },
                  { name: "Алёна Шевченко", role: "Дерматолог", exp: "8 лет опыта", focus: "Лечение кожных заболеваний, косметология", img: "/testimonials/avatar.jpg" },
                  { name: "Канат Абдрахманов", role: "Невролог", exp: "11 лет опыта", focus: "Лечение неврологических заболеваний", img: "/testimonials/avatar.jpg" },
                ].map((member, idx) => (
                  <div key={idx} className="overflow-hidden rounded-2xl border border-border">
                    <Image src={member.img} alt={member.name} width={800} height={600} className="h-48 w-full object-cover sm:h-56" />
                    <div className="p-5">
                      <div className="text-lg font-semibold">{member.name}</div>
                      <div className="text-sm text-foreground/60">{member.role} • {member.exp}</div>
                      <div className="mt-2 text-sm text-foreground/70">{member.focus}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Equipment */}
        <section className="bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-16">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Оборудование и технологии</h2>
                <p className="mt-2 text-sm text-foreground/60">Современная диагностическая и лечебная база</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Цифровая рентгенография", img: "/about-us/clinic-corridor.jpg", description: "Высококачественные снимки с минимальной лучевой нагрузкой" },
                  { title: "УЗИ экспертного класса", img: "/about-us/clinic-workspace.jpg", description: "Современные датчики для точной диагностики" },
                  { title: "Лабораторное оборудование", img: "/about-us/doctors-office.jpg", description: "Автоматизированные анализаторы для точных результатов" },
                  { title: "Стоматологическое оборудование", img: "/about-us/clinic-reseption.jpg", description: "Инновационные технологии для лечения зубов" },
                  { title: "Система стерилизации", img: "/about-us/clinic-workspace.jpg", description: "Современные методы обеззараживания инструментов" },
                  { title: "Электронная система", img: "/about-us/doctors-office.jpg", description: "Цифровое управление записями и медицинскими картами" },
                ].map((item, idx) => (
                  <div key={idx} className="overflow-hidden rounded-2xl border border-border">
                    <Image src={item.img} alt={item.title} width={900} height={700} className="h-48 w-full object-cover sm:h-56" />
                    <div className="p-5">
                      <div className="text-base font-semibold">{item.title}</div>
                      <div className="mt-1 text-sm text-foreground/60">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Licenses */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-16">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Лицензии и сертификаты</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Лицензия на медицинскую деятельность", number: "№ ЛО-77-01-012345", valid: "Действительна до 2026 года" },
                  { title: "Сертификат качества ISO 9001", number: "№ ISO-9001-2023", valid: "Международный стандарт качества" },
                  { title: "Аккредитация Минздрава", number: "№ АКК-2024-001", valid: "Высший уровень аккредитации" },
                  { title: "Сертификат безопасности", number: "№ БЕЗ-2024-005", valid: "Соответствие стандартам безопасности" },
                  { title: "Лицензия на фармацевтическую деятельность", number: "№ ФАРМ-2024-003", valid: "Продажа лекарственных средств" },
                  { title: "Сертификат экологической безопасности", number: "№ ЭКО-2024-002", valid: "Экологически безопасная деятельность" },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-border p-6">
                    <div className="text-base font-semibold">{item.title}</div>
                    <div className="mt-2 text-sm text-foreground/60">{item.number}</div>
                    <div className="mt-1 text-sm text-foreground/70">{item.valid}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] items-start gap-10 py-12 sm:py-20 md:grid md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Свяжитесь с нами</h2>
                                         <div className="mt-4 space-y-2 text-sm text-foreground/80">
                           <div><span className="text-foreground/60">Телефоны:</span></div>
                           <div>+7 (7172) 49-03-84</div>
                           <div>+7 (778) 906-40-60</div>
                           <div>+7 (777) 753-28-28</div>
                           <div>+7 (702) 377-75-24</div>
                           <div><span className="text-foreground/60">Адрес:</span> г. Астана, ул. Мәскеу, 11А, 010000</div>
                           <div><span className="text-foreground/60">Время работы:</span></div>
                           <div>Пн-Пт: 08:30–17:30</div>
                           <div>Сб: 08:30–13:00</div>
                           <div>Вс: выходной</div>
                         </div>
                <div className="mt-6">
                  <Link href="#book" className="inline-block rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-black/90">
                    Записаться на прием
                  </Link>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <Image src="/about-us/appointment-back.jpg" alt="Клиника снаружи" width={1200} height={800} className="h-auto w-full rounded-2xl object-cover ring-1 ring-border" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="book" className="relative isolate overflow-hidden">
          <div className="container">
            <div className="mx-auto max-w-6xl rounded-3xl bg-black px-6 py-12 text-white sm:px-10 sm:py-16">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-semibold sm:text-3xl">Узнайте больше о нашей клинике</h3>
                  <p className="mt-3 text-white/70">Оставьте контакты — мы расскажем подробнее о наших возможностях и запишем на консультацию.</p>
                </div>
                <form className="grid gap-3 sm:grid-cols-2">
                  <input placeholder="Имя" className="h-11 rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-white/30" />
                  <input placeholder="Телефон" className="h-11 rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-white/30" />
                  <button className="col-span-1 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:col-span-2">
                    Отправить заявку
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
