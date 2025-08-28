import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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
                    Современная клиника полного цикла: диагностика, консультации, анализы и лечение. 
                    Честные цены, опытные врачи, продуманный сервис.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link href="#book" className="rounded-xl bg-black px-6 py-3 text-center text-white shadow-sm transition-colors hover:bg-black/90">
                      Записаться на прием
                    </Link>
                    <Link href="/services" className="rounded-xl bg-muted px-6 py-3 text-center text-foreground shadow-sm transition-colors hover:bg-muted/80">
                      Услуги
                    </Link>
                  </div>
                  <div className="mt-8 flex items-center gap-6 text-sm text-foreground/60">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-green-500" />
                      Ведем прием в будни и субботу
                    </div>
                    <div className="hidden sm:block">Без скрытых платежей</div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative mx-auto w-full max-w-[40rem] overflow-hidden rounded-2xl ring-1 ring-border">
                    <Image src="/nurse.png" alt="Профессиональная забота" width={1200} height={900} className="h-auto w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust signals */}
        <section className="bg-white">
          <div className="container">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 py-10 text-sm text-foreground/70 sm:grid-cols-4">
              <div className="rounded-xl bg-muted px-4 py-5 text-center">Опыт 15+ лет</div>
              <div className="rounded-xl bg-muted px-4 py-5 text-center">Собственная диагностика</div>
              <div className="rounded-xl bg-muted px-4 py-5 text-center">Лицензия и сертификация</div>
              <div className="rounded-xl bg-muted px-4 py-5 text-center">Поддержка 24/7</div>
            </div>
          </div>
        </section>

        

        {/* About the clinic */}
        <section className="bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] items-center gap-10 py-12 sm:py-20 md:grid md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">О клинике</h2>
                <p className="mt-4 text-base leading-7 text-foreground/70">
                  Мы объединили ведущих специалистов и современное оборудование, чтобы вы
                  получали доказательную медицинскую помощь без стресса. Простая запись,
                  прозрачные цены, внимание к деталям — от первого звонка до полного
                  решения вашего запроса.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border p-5">
                    <div className="text-lg font-semibold">15+ лет</div>
                    <div className="text-sm text-foreground/60">опыт наших врачей</div>
                  </div>
                  <div className="rounded-2xl border border-border p-5">
                    <div className="text-lg font-semibold">Все в одном месте</div>
                    <div className="text-sm text-foreground/60">диагностика, анализы, лечение</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Image src="/about-us/clinic-reseption.jpg" alt="Ресепшн клиники" width={900} height={700} className="h-auto w-full rounded-2xl object-cover ring-1 ring-border" />
                  <Image src="/about-us/clinic-workspace.jpg" alt="Кабинет врача" width={900} height={700} className="h-auto w-full rounded-2xl object-cover ring-1 ring-border" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-16">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Как проходит прием</h2>
              <div className="grid gap-4 md:grid-cols-4">
                {[
                  { n: "1", t: "Заявка", d: "Оставьте контакты — администратор перезвонит в течение 10 минут." },
                  { n: "2", t: "Диагностика", d: "Подберем врача и необходимые исследования в один визит." },
                  { n: "3", t: "План лечения", d: "Врач объяснит простым языком и согласует план и стоимость." },
                  { n: "4", t: "Сопровождение", d: "Остаемся на связи и контролируем результат." },
                ].map((s) => (
                  <div key={s.n} className="rounded-2xl border border-border p-6">
                    <div className="text-sm text-foreground/60">Шаг {s.n}</div>
                    <div className="mt-2 text-lg font-semibold">{s.t}</div>
                    <div className="mt-1 text-sm text-foreground/70">{s.d}</div>
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
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Оборудование</h2>
                <p className="mt-2 text-sm text-foreground/60">Точная диагностика и комфорт на каждом этапе.</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Цифровая диагностика", img: "/about-us/clinic-corridor.jpg" },
                  { title: "Стерилизация класса B", img: "/about-us/clinic-workspace.jpg" },
                  { title: "Комфортные кабинеты", img: "/about-us/doctors-office.jpg" },
                ].map((e) => (
                  <div key={e.title} className="overflow-hidden rounded-2xl border border-border">
                    <Image src={e.img} alt={e.title} width={900} height={700} className="h-48 w-full object-cover sm:h-56" />
                    <div className="p-5">
                      <div className="text-base font-semibold">{e.title}</div>
                      <div className="mt-1 text-sm text-foreground/60">Поддерживаем международные стандарты качества.</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-16">
              <div className="mb-6 flex items-end justify-between">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Цены</h2>
                <div className="text-sm text-foreground/60">Прозрачно и без скрытых платежей</div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border">
                <div className="grid grid-cols-3 bg-muted px-4 py-3 text-sm text-foreground/60">
                  <div>Услуга</div>
                  <div>Описание</div>
                  <div className="text-right">Цена</div>
                </div>
                {[
                  ["Первичная консультация", "Прием врача, рекомендации", "7 000 тг"],
                  ["Расширенная консультация", "Сбор анамнеза, план лечения", "12 000 тг"],
                  ["УЗИ", "Современные датчики, расшифровка", "15 000 тг"],
                  ["Анализы базовые", "Клинический минимум", "6 500 тг"],
                  ["Снимок (рентген)", "Цифровой снимок области", "8 000 тг"],
                  ["Гигиена полости рта", "Профессиональная чистка", "18 000 тг"],
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 items-center px-4 py-4 text-sm ring-1 ring-border/60 first:ring-0">
                    <div className="font-medium">{row[0]}</div>
                    <div className="text-foreground/70">{row[1]}</div>
                    <div className="text-right font-semibold">{row[2]}</div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-foreground/60">Итоговая стоимость зависит от диагноза и объема лечения. Уточняйте у администратора.</p>
            </div>
          </div>
        </section>

        {/* Doctors highlight */}
        <section className="bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-16">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Наши врачи</h2>
                <p className="mt-2 text-sm text-foreground/60">Опытные специалисты, международные протоколы, внимание к деталям.</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "Айгуль Садыкова", role: "Терапевт", exp: "Стаж 12 лет", focus: "Профилактика и лечение хронических заболеваний", img: "/testimonials/avatar.jpg" },
                  { name: "Марат Нуртазин", role: "Стоматолог", exp: "Стаж 10 лет", focus: "Терапевтическая стоматология, гигиена", img: "/testimonials/avatar.jpg" },
                  { name: "Елена Ким", role: "УЗИ-диагност", exp: "Стаж 9 лет", focus: "Комплексная ультразвуковая диагностика", img: "/testimonials/avatar.jpg" },
                ].map((d) => (
                  <div key={d.name} className="overflow-hidden rounded-2xl border border-border">
                    <Image src={d.img} alt={d.name} width={800} height={600} className="h-48 w-full object-cover sm:h-56" />
                    <div className="p-5">
                      <div className="text-lg font-semibold">{d.name}</div>
                      <div className="text-sm text-foreground/60">{d.role} • {d.exp}</div>
                      <div className="mt-2 text-sm text-foreground/70">{d.focus}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews minimal carousel substitute */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-16">
              <div className="mb-6 flex items-end justify-between">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Отзывы</h2>
                <Link href="/reviews" className="text-sm text-foreground/60 transition-colors hover:text-foreground">Все отзывы</Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {["Очень внимательные врачи.", "Комфортно и без очередей.", "Записался онлайн — удобно."].map((text, idx) => (
                  <div key={idx} className="rounded-2xl border border-border p-6 text-sm text-foreground/80">
                    {text}
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
              <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">FAQ</h2>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  { q: "Как записаться?", a: "Нажмите «Записаться на прием» и оставьте контакты — мы перезвоним в течение 10 минут." },
                  { q: "Сколько длится прием?", a: "Стандартный прием длится 20–40 минут. Для расширенной консультации — до 60 минут." },
                  { q: "Работаете ли в выходные?", a: "Да, клиника работает по субботам с 08:30 до 13:00, по воскресеньям - выходной." },
                  { q: "Как подготовиться к анализам?", a: "Базовые анализы сдавайте натощак, за 8–12 часов исключите еду и кофе." },
                  { q: "Какие способы оплаты?", a: "Наличными, картой, а также доступна рассрочка у партнеров." },
                  { q: "Где находитесь?", a: "г. Астана, ул. Мәскеу, 11А, 010000. Удобная парковка рядом с входом." },
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

        {/* Contacts */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] items-start gap-10 py-12 sm:py-20 md:grid md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Контакты</h2>
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
                    Записаться сейчас
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
                  <h3 className="text-2xl font-semibold sm:text-3xl">Готовы позаботиться о вашем здоровье</h3>
                  <p className="mt-3 text-white/70">Оставьте контакты — администратор перезвонит и подберет удобное время.</p>
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
