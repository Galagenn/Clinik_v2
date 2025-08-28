import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
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
                    Наши услуги
                  </h1>
                  <p className="mt-6 text-base leading-7 text-foreground/70 sm:text-lg md:max-w-xl">
                    Полный спектр медицинских услуг в одном месте. От первичной консультации до сложных диагностических процедур — мы заботимся о вашем здоровье на каждом этапе.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link href="#book" className="rounded-xl bg-black px-6 py-3 text-center text-white shadow-sm transition-colors hover:bg-black/90">
                      Записаться на прием
                    </Link>
                    <Link href="/doctors" className="rounded-xl bg-muted px-6 py-3 text-center text-foreground shadow-sm transition-colors hover:bg-muted/80">
                      Наши врачи
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative mx-auto w-full max-w-[40rem] overflow-hidden rounded-2xl ring-1 ring-border">
                    <Image src="/services/dentistry.png" alt="Медицинские услуги" width={1200} height={900} className="h-auto w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Основные направления</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { title: "Стоматология", icon: "/services/dentistry.png", description: "Лечение зубов, протезирование, имплантация", price: "от 8 000 тг", href: "/services/stomatology" },
                  { title: "Диагностика", icon: "/services/diagnostics.png", description: "УЗИ, рентген, МРТ, КТ", price: "от 6 500 тг", href: "/services/diagnostics" },
                  { title: "Анализы", icon: "/services/analysis.png", description: "Лабораторные исследования крови и мочи", price: "от 3 500 тг", href: "/services/laboratory" },
                  { title: "Терапия", icon: "/services/therapy.png", description: "Лечение внутренних заболеваний", price: "от 7 000 тг", href: "/services/therapy" },
                  { title: "Вакцинация", icon: "/services/vaccination.png", description: "Прививки для детей и взрослых", price: "от 2 500 тг", href: "/services/vaccination" },
                  { title: "Консультации", icon: "/services/consultation.png", description: "Первичные и повторные приемы", price: "от 5 000 тг", href: "/services/consultations" },
                  { title: "Check-Up", icon: "/services/checkup.png", description: "Комплексное обследование организма", price: "от 25 000 тг", href: "/services/checkup" },
                  { title: "Справки", icon: "/services/certificates.png", description: "Медицинские документы и справки", price: "от 1 500 тг", href: "/services/certificates" },
                ].map((service, idx) => (
                  <div key={idx} className="group rounded-2xl border border-border bg-white p-6 shadow-soft ring-1 ring-transparent transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-premium hover:ring-primary/10">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-muted">
                      <Image src={service.icon} alt={service.title} width={32} height={32} className="h-8 w-8 object-contain" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                    <p className="mb-3 text-sm text-foreground/70">{service.description}</p>
                    <div className="mb-4 text-lg font-bold text-primary">{service.price}</div>
                    <Link href={service.href} className="inline-block rounded-xl bg-muted px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-primary hover:text-white">
                      Подробнее
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Специализированные услуги</h2>
                <p className="mt-2 text-sm text-foreground/60">Узкопрофильные направления медицины</p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {[
                  { title: "Кардиология", description: "Диагностика и лечение сердечно-сосудистых заболеваний", features: ["ЭКГ", "Холтер-мониторинг", "УЗИ сердца", "Консультации кардиолога"], price: "от 12 000 тг" },
                  { title: "Неврология", description: "Лечение заболеваний нервной системы", features: ["ЭЭГ", "МРТ головного мозга", "Консультации невролога", "Реабилитация"], price: "от 10 000 тг" },
                  { title: "Дерматология", description: "Диагностика и лечение кожных заболеваний", features: ["Дерматоскопия", "Биопсия кожи", "Косметология", "Аллергопробы"], price: "от 9 000 тг" },
                  { title: "Гинекология", description: "Женское здоровье и репродуктивная медицина", features: ["УЗИ органов малого таза", "Кольпоскопия", "Консультации гинеколога", "Ведение беременности"], price: "от 8 500 тг" },
                ].map((service, idx) => (
                  <div key={idx} className="rounded-2xl border border-border p-6">
                    <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                    <p className="mb-4 text-sm text-foreground/70">{service.description}</p>
                    <div className="mb-4">
                      <div className="text-sm font-medium text-foreground/80 mb-2">Включает:</div>
                      <ul className="space-y-1">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-sm text-foreground/70">
                            <span className="size-1.5 rounded-full bg-primary"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-primary">{service.price}</div>
                      <Link href="#book" className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                        Записаться
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-16">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Как получить услугу</h2>
              <div className="grid gap-4 md:grid-cols-4">
                {[
                  { step: "1", title: "Запись", description: "Оставьте заявку на сайте или позвоните по телефону" },
                  { step: "2", title: "Консультация", description: "Врач проведет осмотр и назначит необходимые процедуры" },
                  { step: "3", title: "Выполнение", description: "Получите услугу в удобное для вас время" },
                  { step: "4", title: "Результат", description: "Получите результаты и рекомендации по дальнейшему лечению" },
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

        {/* Pricing */}
        <section className="bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-16">
              <div className="mb-6 flex items-end justify-between">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Прайс-лист</h2>
                <div className="text-sm text-foreground/60">Актуальные цены на 2024 год</div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border">
                <div className="grid grid-cols-4 bg-muted px-4 py-3 text-sm font-medium text-foreground/60">
                  <div>Услуга</div>
                  <div>Описание</div>
                  <div>Длительность</div>
                  <div className="text-right">Цена</div>
                </div>
                {[
                  ["Первичная консультация", "Осмотр, сбор анамнеза, рекомендации", "20-30 мин", "7 000 тг"],
                  ["Расширенная консультация", "Детальный осмотр, план лечения", "40-60 мин", "12 000 тг"],
                  ["УЗИ брюшной полости", "Обследование внутренних органов", "30-40 мин", "15 000 тг"],
                  ["Анализ крови общий", "Клинический анализ крови", "1 день", "6 500 тг"],
                  ["Рентген грудной клетки", "Цифровой снимок в двух проекциях", "15-20 мин", "8 000 тг"],
                  ["Гигиена полости рта", "Профессиональная чистка зубов", "45-60 мин", "18 000 тг"],
                  ["ЭКГ", "Электрокардиограмма с расшифровкой", "15-20 мин", "5 500 тг"],
                  ["Прививка от гриппа", "Вакцинация против сезонного гриппа", "10-15 мин", "3 500 тг"],
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-4 items-center px-4 py-4 text-sm ring-1 ring-border/60 first:ring-0">
                    <div className="font-medium">{row[0]}</div>
                    <div className="text-foreground/70">{row[1]}</div>
                    <div className="text-foreground/70">{row[2]}</div>
                    <div className="text-right font-semibold">{row[3]}</div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-foreground/60">* Итоговая стоимость зависит от сложности случая и объема лечения. Уточняйте у администратора.</p>
            </div>
          </div>
        </section>

        {/* Insurance */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-16">
              <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 sm:p-12">
                <div className="grid items-center gap-8 md:grid-cols-2">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Страхование и льготы</h2>
                    <p className="mt-4 text-foreground/70">
                      Мы работаем с ведущими страховыми компаниями и предоставляем скидки для различных категорий пациентов.
                    </p>
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="size-2 rounded-full bg-primary"></span>
                        <span className="text-sm">Скидка 10% для пенсионеров</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="size-2 rounded-full bg-primary"></span>
                        <span className="text-sm">Скидка 15% для многодетных семей</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="size-2 rounded-full bg-primary"></span>
                        <span className="text-sm">Скидка 20% для медицинских работников</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/80 p-6 backdrop-blur">
                    <h3 className="mb-4 text-lg font-semibold">Страховые партнеры</h3>
                    <div className="grid gap-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span>АО "Казахстанская страховая компания"</span>
                        <span className="text-primary font-medium">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>ТОО "Страховая компания "Номад"</span>
                        <span className="text-primary font-medium">✓</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>АО "Страховая компания "Халык"</span>
                        <span className="text-primary font-medium">✓</span>
                      </div>
                    </div>
                  </div>
                </div>
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
                  { q: "Какие документы нужны для записи?", a: "Паспорт, СНИЛС (при наличии), медицинская карта (если есть). Для детей — свидетельство о рождении и паспорт родителя." },
                  { q: "Можно ли записаться на выходные?", a: "Да, клиника работает ежедневно с 08:00 до 20:00, включая выходные и праздничные дни." },
                  { q: "Есть ли возможность срочной записи?", a: "Да, при наличии свободного времени у врача возможна срочная запись. Оставьте заявку — перезвоним в течение 10 минут." },
                  { q: "Какие способы оплаты принимаете?", a: "Наличные, банковские карты (Visa, MasterCard, UnionPay), безналичный расчет для юридических лиц." },
                  { q: "Предоставляете ли больничные листы?", a: "Да, наши врачи имеют право выписывать больничные листы в соответствии с законодательством РК." },
                  { q: "Есть ли возможность онлайн-консультации?", a: "Да, для ряда направлений доступны онлайн-консультации через видеосвязь. Уточняйте у администратора." },
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
                  <h3 className="text-2xl font-semibold sm:text-3xl">Готовы получить качественную медицинскую помощь</h3>
                  <p className="mt-3 text-white/70">Оставьте контакты — администратор перезвонит и подберет удобное время для записи на выбранную услугу.</p>
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
