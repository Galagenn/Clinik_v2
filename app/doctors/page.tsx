import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

export default function Doctors() {
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
                    Наши врачи
                  </h1>
                  <p className="mt-6 text-base leading-7 text-foreground/70 sm:text-lg md:max-w-xl">
                    Команда опытных специалистов с многолетним стажем работы. Наши врачи регулярно повышают квалификацию и используют современные методы диагностики и лечения.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link href="#book" className="rounded-xl bg-black px-6 py-3 text-center text-white shadow-sm transition-colors hover:bg-black/90">
                      Записаться к врачу
                    </Link>
                    <Link href="/services" className="rounded-xl bg-muted px-6 py-3 text-center text-foreground shadow-sm transition-colors hover:bg-muted/80">
                      Наши услуги
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative mx-auto w-full max-w-[40rem] overflow-hidden rounded-2xl ring-1 ring-border">
                    <Image src="/testimonials/avatar.jpg" alt="Наши врачи" width={1200} height={900} className="h-auto w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Doctors */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Основные специалисты</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "Айгуль Садыкова", role: "Главный врач, терапевт", exp: "15 лет опыта", specialization: "Терапия, гастроэнтерология, профилактика", education: "Алматынский медицинский университет", schedule: "Пн-Пт: 09:00-18:00", price: "от 7 000 тг", rating: 4.9, img: "/testimonials/avatar.jpg" },
                  { name: "Марат Нуртазин", role: "Заведующий стоматологией", exp: "12 лет опыта", specialization: "Терапевтическая стоматология, имплантация", education: "Казахский медицинский университет", schedule: "Вт-Сб: 10:00-19:00", price: "от 8 000 тг", rating: 4.8, img: "/testimonials/avatar.jpg" },
                  { name: "Елена Ким", role: "Заведующая диагностикой", exp: "10 лет опыта", specialization: "УЗИ, рентгенология, лабораторная диагностика", education: "Медицинский университет Астана", schedule: "Пн, Ср, Пт: 09:00-16:00", price: "от 6 500 тг", rating: 4.7, img: "/testimonials/avatar.jpg" },
                  { name: "Бахыт Жумагалиев", role: "Кардиолог", exp: "14 лет опыта", specialization: "Кардиология, функциональная диагностика", education: "Алматынский медицинский университет", schedule: "Пн-Пт: 11:00-19:00", price: "от 12 000 тг", rating: 4.9, img: "/testimonials/avatar.jpg" },
                  { name: "Алёна Шевченко", role: "Дерматолог", exp: "8 лет опыта", specialization: "Дерматология, косметология, аллергология", education: "Казахский медицинский университет", schedule: "Вт-Сб: 09:00-17:00", price: "от 9 000 тг", rating: 4.6, img: "/testimonials/avatar.jpg" },
                  { name: "Канат Абдрахманов", role: "Невролог", exp: "11 лет опыта", specialization: "Неврология, реабилитация, лечение боли", education: "Медицинский университет Астана", schedule: "Ср-Вс: 10:00-18:00", price: "от 10 000 тг", rating: 4.8, img: "/testimonials/avatar.jpg" },
                ].map((doctor, idx) => (
                  <div key={idx} className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft ring-1 ring-transparent transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-premium hover:ring-primary/10">
                    <div className="relative">
                      <Image src={doctor.img} alt={doctor.name} width={800} height={600} className="h-48 w-full object-cover sm:h-56" />
                      <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-primary">
                        ⭐ {doctor.rating}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold">{doctor.name}</h3>
                      <div className="mt-1 text-sm text-foreground/60">{doctor.role}</div>
                      <div className="mt-2 text-sm text-foreground/70">{doctor.specialization}</div>
                      <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-foreground/70">
                        <div>Опыт: <span className="font-semibold text-foreground">{doctor.exp}</span></div>
                        <div>Прием: <span className="font-semibold text-foreground">{doctor.price}</span></div>
                        <div>Образование: <span className="font-semibold text-foreground">{doctor.education}</span></div>
                        <div>График: <span className="font-semibold text-foreground">{doctor.schedule}</span></div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Link href="#book" className="flex-1 rounded-xl bg-primary px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                          Записаться
                        </Link>
                        <Link href={`/doctors/${idx + 1}`} className="rounded-xl bg-muted px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted/80">
                          Профиль
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Медицинские направления</h2>
                <p className="mt-2 text-sm text-foreground/60">Специализации наших врачей</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Терапия", description: "Лечение внутренних заболеваний, профилактика", doctors: 3, icon: "🏥" },
                  { title: "Стоматология", description: "Лечение зубов, протезирование, гигиена", doctors: 2, icon: "🦷" },
                  { title: "Диагностика", description: "УЗИ, рентген, лабораторные исследования", doctors: 2, icon: "🔬" },
                  { title: "Кардиология", description: "Лечение сердечно-сосудистых заболеваний", doctors: 1, icon: "❤️" },
                  { title: "Неврология", description: "Лечение заболеваний нервной системы", doctors: 1, icon: "🧠" },
                  { title: "Дерматология", description: "Лечение кожных заболеваний", doctors: 1, icon: "🔬" },
                ].map((specialty, idx) => (
                  <div key={idx} className="rounded-2xl border border-border p-6">
                    <div className="mb-4 text-4xl">{specialty.icon}</div>
                    <h3 className="mb-2 text-lg font-semibold">{specialty.title}</h3>
                    <p className="mb-3 text-sm text-foreground/70">{specialty.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground/60">{specialty.doctors} специалист(а)</span>
                      <Link href={`/services#${specialty.title.toLowerCase()}`} className="text-sm font-medium text-primary hover:underline">
                        Услуги
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Опыт и образование</h2>
                  <p className="mt-4 text-base leading-7 text-foreground/70">
                    Наши врачи имеют высшее медицинское образование, регулярно проходят курсы повышения квалификации и участвуют в международных конференциях.
                  </p>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl border border-border p-5">
                      <div className="text-lg font-semibold">Образование</div>
                      <div className="text-sm text-foreground/70">Ведущие медицинские университеты Казахстана и России</div>
                    </div>
                    <div className="rounded-2xl border border-border p-5">
                      <div className="text-lg font-semibold">Сертификаты</div>
                      <div className="text-sm text-foreground/70">Международные сертификаты и дипломы</div>
                    </div>
                    <div className="rounded-2xl border border-border p-5">
                      <div className="text-lg font-semibold">Опыт работы</div>
                      <div className="text-sm text-foreground/70">От 8 до 15 лет в ведущих клиниках</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Достижения команды</h2>
                  <div className="mt-4 space-y-4">
                    <div className="rounded-2xl border border-border p-5">
                      <div className="text-lg font-semibold">Награды</div>
                      <div className="text-sm text-foreground/70">Почетные грамоты и благодарности от пациентов</div>
                    </div>
                    <div className="rounded-2xl border border-border p-5">
                      <div className="text-lg font-semibold">Публикации</div>
                      <div className="text-sm text-foreground/70">Научные статьи в медицинских журналах</div>
                    </div>
                    <div className="rounded-2xl border border-border p-5">
                      <div className="text-lg font-semibold">Инновации</div>
                      <div className="text-sm text-foreground/70">Внедрение новых методов диагностики и лечения</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-16">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Как выбрать врача</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { step: "1", title: "Определите проблему", description: "Подумайте, с какими симптомами или заболеванием вы столкнулись" },
                  { step: "2", title: "Выберите специализацию", description: "Найдите подходящее направление медицины для вашей проблемы" },
                  { step: "3", title: "Изучите врачей", description: "Посмотрите профили специалистов, их опыт и отзывы" },
                  { step: "4", title: "Сравните цены", description: "Узнайте стоимость приема у разных врачей" },
                  { step: "5", title: "Запишитесь на прием", description: "Выберите удобное время и запишитесь к выбранному врачу" },
                  { step: "6", title: "Подготовьтесь к визиту", description: "Соберите необходимые документы и подготовьте вопросы" },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-border p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-lg font-bold">
                      {item.step}
                    </div>
                    <div className="text-lg font-semibold">{item.title}</div>
                    <div className="mt-1 text-sm text-foreground/70">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-16">
              <div className="mb-6 flex items-end justify-between">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Отзывы о врачах</h2>
                <Link href="/reviews" className="text-sm text-foreground/60 transition-colors hover:text-foreground">Все отзывы</Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { text: "Очень внимательный врач, все объяснил доступно. Рекомендую!", doctor: "Айгуль Садыкова", rating: 5 },
                  { text: "Профессионал своего дела, быстро поставил диагноз и назначил лечение.", doctor: "Марат Нуртазин", rating: 5 },
                  { text: "Отличный специалист, вежливый и компетентный врач.", doctor: "Елена Ким", rating: 4 },
                  { text: "Врач с большой буквы, помог решить проблему, с которой я мучился годами.", doctor: "Бахыт Жумагалиев", rating: 5 },
                  { text: "Очень довольна приемом, врач внимательно осмотрел и дал полезные советы.", doctor: "Алёна Шевченко", rating: 4 },
                  { text: "Профессиональный подход, современные методы лечения, отличный результат.", doctor: "Канат Абдрахманов", rating: 5 },
                ].map((review, idx) => (
                  <div key={idx} className="rounded-2xl border border-border p-6">
                    <div className="mb-3 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-lg ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="mb-3 text-sm text-foreground/80">{review.text}</p>
                    <div className="text-xs text-foreground/60">— {review.doctor}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-16">
              <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">Часто задаваемые вопросы</h2>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  { q: "Как записаться к конкретному врачу?", a: "Позвоните по телефону +7 707 070 00 77 или оставьте заявку на сайте, указав желаемого специалиста." },
                  { q: "Можно ли поменять врача во время лечения?", a: "Да, вы можете обратиться к другому специалисту в любое время. Ваша медицинская карта будет доступна новому врачу." },
                  { q: "Есть ли возможность онлайн-консультации?", a: "Да, некоторые врачи проводят онлайн-консультации. Уточняйте у администратора доступность для конкретного специалиста." },
                  { q: "Как часто нужно посещать врача для профилактики?", a: "Рекомендуется проходить профилактический осмотр 1-2 раза в год, если нет хронических заболеваний." },
                  { q: "Можно ли получить второе мнение?", a: "Да, вы можете обратиться к другому специалисту для получения альтернативного мнения по вашему диагнозу." },
                  { q: "Есть ли возможность экстренной консультации?", a: "Да, при острых состояниях возможна экстренная консультация. Звоните по телефону для уточнения деталей." },
                ].map((item, i) => (
                  <details key={i} className="group rounded-2xl border border-border p-5">
                    <summary className="cursor-pointer list-none text-base font-medium">
                      {item.q}
                    </summary>
                    <div className="mt-2 text-sm text-foreground/70">{item.a}</div>
                  </details>
                ))}
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
                  <h3 className="text-2xl font-semibold sm:text-3xl">Запишитесь на прием к специалисту</h3>
                  <p className="mt-3 text-white/70">Оставьте контакты — администратор перезвонит и поможет выбрать подходящего врача и удобное время для записи.</p>
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
