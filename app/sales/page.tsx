import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

export default function Sales() {
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
                    Акции и спецпредложения
                  </h1>
                  <p className="mt-6 text-base leading-7 text-foreground/70 sm:text-lg md:max-w-xl">
                    Выгодные предложения на медицинские услуги для всей семьи. Скидки, бонусы и специальные цены на диагностику, лечение и профилактику.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link href="#current-sales" className="rounded-xl bg-black px-6 py-3 text-center text-white shadow-sm transition-colors hover:bg-black/90">
                      Посмотреть акции
                    </Link>
                    <Link href="/services" className="rounded-xl bg-muted px-6 py-3 text-center text-foreground shadow-sm transition-colors hover:bg-muted/80">
                      Все услуги
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative mx-auto w-full max-w-[40rem] overflow-hidden rounded-2xl ring-1 ring-border">
                    <Image src="/sales/image.png" alt="Акции и спецпредложения" width={1200} height={900} className="h-auto w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Sales */}
        <section id="current-sales">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Текущие акции</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Check-Up со скидкой 30%", originalPrice: "35 000 тг", salePrice: "24 500 тг", discount: "30%", description: "Комплексное обследование организма для мужчин и женщин", validUntil: "31.01.2025", image: "/sales/image.png", category: "Диагностика" },
                  { title: "Семейная стоматология", originalPrice: "25 000 тг", salePrice: "18 000 тг", discount: "28%", description: "Лечение зубов для всей семьи - скидка на каждого члена семьи", validUntil: "28.02.2025", image: "/sales/image.png", category: "Стоматология" },
                  { title: "Вакцинация в подарок", originalPrice: "8 000 тг", salePrice: "5 000 тг", discount: "37%", description: "Прививка от гриппа + консультация терапевта бесплатно", validUntil: "15.01.2025", image: "/sales/image.png", category: "Вакцинация" },
                  { title: "Кардио-пакет", originalPrice: "20 000 тг", salePrice: "14 000 тг", discount: "30%", description: "ЭКГ + УЗИ сердца + консультация кардиолога", validUntil: "20.02.2025", image: "/sales/image.png", category: "Кардиология" },
                  { title: "День красоты", originalPrice: "15 000 тг", salePrice: "10 500 тг", discount: "30%", description: "Консультация дерматолога + косметологические процедуры", validUntil: "25.01.2025", image: "/sales/image.png", category: "Дерматология" },
                  { title: "Неврологический скрининг", originalPrice: "18 000 тг", salePrice: "12 600 тг", discount: "30%", description: "Консультация невролога + ЭЭГ + МРТ головного мозга", validUntil: "10.02.2025", image: "/sales/image.png", category: "Неврология" },
                ].map((sale, idx) => (
                  <div key={idx} className="group overflow-hidden rounded-2xl border border-border bg-white shadow-soft ring-1 ring-transparent transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-premium hover:ring-primary/10">
                    <div className="relative">
                      <Image src={sale.image} alt={sale.title} width={800} height={600} className="h-48 w-full object-cover sm:h-56" />
                      <div className="absolute top-4 left-4 rounded-full bg-red-500 px-3 py-1 text-sm font-bold text-white">
                        -{sale.discount}
                      </div>
                      <div className="absolute top-4 right-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-white">
                        {sale.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-lg font-semibold">{sale.title}</h3>
                      <p className="mb-4 text-sm text-foreground/70">{sale.description}</p>
                      <div className="mb-4 flex items-center gap-3">
                        <span className="text-2xl font-bold text-primary">{sale.salePrice}</span>
                        <span className="text-lg text-foreground/60 line-through">{sale.originalPrice}</span>
                      </div>
                      <div className="mb-4 text-xs text-foreground/60">
                        Действует до: {sale.validUntil}
                      </div>
                      <Link href="#book" className="block w-full rounded-xl bg-primary px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                        Записаться
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Специальные предложения</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {[
                  { title: "День рождения пациента", description: "В день рождения получайте скидку 25% на любую услугу клиники", icon: "🎂", benefits: ["Скидка 25% на любую услугу", "Подарок от клиники", "Приоритетная запись", "Бонусные баллы"], validFor: "Только в день рождения" },
                  { title: "Приведи друга", description: "Приведите друга в клинику и получите скидку 20% на следующий прием", icon: "👥", benefits: ["Скидка 20% на прием", "Бонус за каждого друга", "Накопительная система", "Специальные условия"], validFor: "Постоянно" },
                  { title: "Семейный абонемент", description: "Скидки для семей с детьми на все виды медицинских услуг", icon: "👨‍👩‍👧‍👦", benefits: ["Скидка до 30%", "Единая карта семьи", "Специальные цены", "Приоритетное обслуживание"], validFor: "Постоянно" },
                  { title: "Пенсионная программа", description: "Специальные цены и скидки для пенсионеров", icon: "👴", benefits: ["Скидка 15% на все услуги", "Бесплатные консультации", "Домашние визиты", "Социальные программы"], validFor: "Постоянно" },
                ].map((offer, idx) => (
                  <div key={idx} className="rounded-2xl border border-border p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="text-4xl">{offer.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold">{offer.title}</h3>
                        <p className="text-sm text-foreground/70">{offer.description}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-medium text-foreground/80 mb-2">Что включено:</div>
                      <ul className="space-y-1">
                        {offer.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-center gap-2 text-sm text-foreground/70">
                            <span className="size-1.5 rounded-full bg-primary"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-xs text-foreground/60">
                      Действует: {offer.validFor}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Promotions */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Сезонные акции</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { season: "Зима 2024-2025", title: "Зимний иммунитет", description: "Укрепление иммунитета, витамины, профилактика простудных заболеваний", discount: "до 40%", services: ["Консультация терапевта", "Анализ крови", "Витаминные комплексы", "Иммуномодуляторы"], image: "/sales/image.png" },
                  { season: "Весна 2025", title: "Весеннее обновление", description: "Комплексное обследование организма после зимы", discount: "до 35%", services: ["Общий анализ крови", "Биохимия", "УЗИ органов", "Консультации специалистов"], image: "/sales/image.png" },
                  { season: "Лето 2025", title: "Летнее здоровье", description: "Подготовка к отпуску, справки, вакцинация", discount: "до 30%", services: ["Медицинские справки", "Прививки", "Санаторно-курортные карты", "Консультации"], image: "/sales/image.png" },
                  { season: "Осень 2025", title: "Осенняя профилактика", description: "Подготовка к зиме, укрепление здоровья", discount: "до 35%", services: ["Профилактические осмотры", "Вакцинация от гриппа", "Витаминотерапия", "Иммунограмма"], image: "/sales/image.png" },
                  { season: "Новый год", title: "Подарки здоровья", description: "Специальные предложения на медицинские услуги", discount: "до 50%", services: ["Подарочные сертификаты", "Семейные пакеты", "Бонусные программы", "Эксклюзивные услуги"], image: "/sales/image.png" },
                  { season: "8 Марта", title: "Женское здоровье", description: "Скидки на гинекологические и косметологические услуги", discount: "до 30%", services: ["Консультация гинеколога", "УЗИ органов малого таза", "Косметология", "Массаж"], image: "/sales/image.png" },
                ].map((promo, idx) => (
                  <div key={idx} className="overflow-hidden rounded-2xl border border-border bg-white">
                    <Image src={promo.image} alt={promo.title} width={800} height={600} className="h-48 w-full object-cover sm:h-56" />
                    <div className="p-6">
                      <div className="mb-2 text-sm font-medium text-primary">{promo.season}</div>
                      <h3 className="mb-2 text-lg font-semibold">{promo.title}</h3>
                      <p className="mb-3 text-sm text-foreground/70">{promo.description}</p>
                      <div className="mb-3 text-lg font-bold text-primary">Скидка {promo.discount}</div>
                      <div className="mb-4">
                        <div className="text-sm font-medium text-foreground/80 mb-2">Включено:</div>
                        <ul className="space-y-1">
                          {promo.services.map((service, sIdx) => (
                            <li key={sIdx} className="flex items-center gap-2 text-sm text-foreground/70">
                              <span className="size-1 rounded-full bg-primary"></span>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link href="#book" className="block w-full rounded-xl bg-primary px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                        Узнать больше
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Loyalty Program */}
        <section className="bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 sm:p-12">
                <div className="grid items-center gap-8 md:grid-cols-2">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Программа лояльности</h2>
                    <p className="mt-4 text-foreground/70">
                      Накопительная система скидок и бонусов для постоянных пациентов. Чем больше вы посещаете клинику, тем больше получаете выгод.
                    </p>
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="size-2 rounded-full bg-primary"></span>
                        <span className="text-sm">Бронзовый уровень - скидка 5%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="size-2 rounded-full bg-primary"></span>
                        <span className="text-sm">Серебряный уровень - скидка 10%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="size-2 rounded-full bg-primary"></span>
                        <span className="text-sm">Золотой уровень - скидка 15%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="size-2 rounded-full bg-primary"></span>
                        <span className="text-sm">Платиновый уровень - скидка 20%</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/80 p-6 backdrop-blur">
                    <h3 className="mb-4 text-lg font-semibold">Как накопить баллы</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Запись на прием</span>
                        <span className="text-primary font-medium">+10 баллов</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Рекомендация друзьям</span>
                        <span className="text-primary font-medium">+50 баллов</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Отзыв о клинике</span>
                        <span className="text-primary font-medium">+25 баллов</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>День рождения</span>
                        <span className="text-primary font-medium">+100 баллов</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms & Conditions */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-16">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Условия акций</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  { title: "Общие условия", items: ["Акции не суммируются", "Действуют только при предъявлении купона", "Не распространяются на лекарства", "Возможны изменения без предварительного уведомления"] },
                  { title: "Ограничения", items: ["Одна акция на одного пациента", "Не действуют в праздничные дни", "Требуется предварительная запись", "Количество мест ограничено"] },
                  { title: "Как получить скидку", items: ["Покажите купон администратору", "Запишитесь заранее", "Придите в указанное время", "Оплатите услугу по акционной цене"] },
                  { title: "Сроки действия", items: ["Указаны в описании каждой акции", "Могут быть продлены", "Действуют до указанной даты", "Включая день окончания"] },
                ].map((section, idx) => (
                  <div key={idx} className="rounded-2xl border border-border p-6">
                    <h3 className="mb-4 text-lg font-semibold">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-center gap-2 text-sm text-foreground/70">
                          <span className="size-1.5 rounded-full bg-primary"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
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
                  { q: "Можно ли использовать несколько акций одновременно?", a: "Нет, акции не суммируются. Вы можете выбрать наиболее выгодную для вас акцию." },
                  { q: "Как долго действуют акции?", a: "Срок действия каждой акции указан в её описании. Обычно акции действуют от 1 до 3 месяцев." },
                  { q: "Можно ли получить скидку без купона?", a: "Нет, для получения скидки необходимо предъявить купон или сообщить код акции администратору." },
                  { q: "Распространяются ли акции на все услуги?", a: "Условия каждой акции индивидуальны. Подробности уточняйте у администратора." },
                  { q: "Можно ли перенести акционную цену на другой день?", a: "Акционные цены действуют только в указанные даты. Перенос не предусмотрен." },
                  { q: "Есть ли ограничения по количеству пациентов?", a: "Да, некоторые акции имеют ограничения по количеству участников. Уточняйте заранее." },
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
                  <h3 className="text-2xl font-semibold sm:text-3xl">Не упустите выгодные предложения</h3>
                  <p className="mt-3 text-white/70">Оставьте контакты — мы расскажем о действующих акциях и подберем для вас самое выгодное предложение.</p>
                </div>
                <form className="grid gap-3 sm:grid-cols-2">
                  <input placeholder="Имя" className="h-11 rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-white/30" />
                  <input placeholder="Телефон" className="h-11 rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-white/30" />
                  <button className="col-span-1 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:col-span-2">
                    Узнать об акциях
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
