import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

export default function Reviews() {
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
                    Отзывы пациентов
                  </h1>
                  <p className="mt-6 text-base leading-7 text-foreground/70 sm:text-lg md:max-w-xl">
                    Реальные отзывы наших пациентов о качестве медицинской помощи, профессионализме врачей и уровне сервиса в клинике.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link href="#add-review" className="rounded-xl bg-black px-6 py-3 text-center text-white shadow-sm transition-colors hover:bg-black/90">
                      Оставить отзыв
                    </Link>
                    <Link href="/services" className="rounded-xl bg-muted px-6 py-3 text-center text-foreground shadow-sm transition-colors hover:bg-muted/80">
                      Наши услуги
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative mx-auto w-full max-w-[40rem] overflow-hidden rounded-2xl ring-1 ring-border">
                    <Image src="/testimonials/avatar.jpg" alt="Отзывы пациентов" width={1200} height={900} className="h-auto w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-16">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { number: "4.8", label: "Общий рейтинг", description: "из 5 звезд" },
                  { number: "1500+", label: "Отзывов", description: "довольных пациентов" },
                  { number: "98%", label: "Рекомендуют", description: "нашу клинику" },
                  { number: "24ч", label: "Ответ", description: "на отзывы" },
                ].map((stat, idx) => (
                  <div key={idx} className="rounded-2xl border border-border p-6 text-center">
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="mt-2 text-lg font-semibold">{stat.label}</div>
                    <div className="text-sm text-foreground/70">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Reviews */}
        <section className="bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Лучшие отзывы</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "Анна Ким", age: "32 года", service: "Терапия", rating: 5, text: "Очень довольна приемом у доктора Садыковой. Внимательный врач, все объяснила доступно, назначила эффективное лечение. Клиника чистая, персонал вежливый. Рекомендую!", date: "15.12.2024", doctor: "Айгуль Садыкова" },
                  { name: "Марат Ахметов", age: "45 лет", service: "Стоматология", rating: 5, text: "Отличный сервис! Доктор Нуртазин профессионально вылечил зуб, без боли и дискомфорта. Цены приемлемые, качество на высоте. Обязательно приду еще.", date: "12.12.2024", doctor: "Марат Нуртазин" },
                  { name: "Елена Петрова", age: "28 лет", service: "Диагностика", rating: 5, text: "Проходила УЗИ у доктора Ким. Очень внимательная и профессиональная. Все объяснила, показала на экране, ответила на все вопросы. Спасибо за качественную диагностику!", date: "10.12.2024", doctor: "Елена Ким" },
                  { name: "Бахыт Смагулов", age: "56 лет", service: "Кардиология", rating: 5, text: "Доктор Жумагалиев - настоящий профессионал! Помог решить проблему с сердцем, с которой я мучился годами. Теперь чувствую себя намного лучше. Спасибо!", date: "08.12.2024", doctor: "Бахыт Жумагалиев" },
                  { name: "Алёна Иванова", age: "35 лет", service: "Дерматология", rating: 4, text: "Хороший прием у дерматолога. Врач внимательно осмотрел, назначил лечение. Единственное - немного долго ждала приема. В целом довольна.", date: "05.12.2024", doctor: "Алёна Шевченко" },
                  { name: "Канат Баймуратов", age: "42 года", service: "Неврология", rating: 5, text: "Отличный невролог! Доктор Абдрахманов помог справиться с головными болями. Современные методы лечения, внимательный подход. Рекомендую всем!", date: "03.12.2024", doctor: "Канат Абдрахманов" },
                ].map((review, idx) => (
                  <div key={idx} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-12 rounded-full bg-muted">
                          <Image src="/testimonials/avatar.jpg" alt={review.name} width={48} height={48} className="size-12 rounded-full object-cover" />
                        </div>
                        <div>
                          <div className="font-semibold">{review.name}</div>
                          <div className="text-sm text-foreground/60">{review.age}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-lg ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                              ★
                            </span>
                          ))}
                        </div>
                        <div className="text-xs text-foreground/60">{review.date}</div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {review.service}
                      </span>
                    </div>
                    <p className="mb-3 text-sm text-foreground/80">{review.text}</p>
                    <div className="text-xs text-foreground/60">
                      Врач: <span className="font-medium">{review.doctor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Review Categories */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Отзывы по направлениям</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { category: "Терапия", rating: 4.9, reviews: 450, icon: "🏥", description: "Отзывы о терапевтических услугах" },
                  { category: "Стоматология", rating: 4.8, reviews: 380, icon: "🦷", description: "Отзывы о стоматологических услугах" },
                  { category: "Диагностика", rating: 4.7, reviews: 320, icon: "🔬", description: "Отзывы о диагностических процедурах" },
                  { category: "Кардиология", rating: 4.9, reviews: 280, icon: "❤️", description: "Отзывы о кардиологических услугах" },
                  { category: "Неврология", rating: 4.8, reviews: 250, icon: "🧠", description: "Отзывы о неврологических услугах" },
                  { category: "Дерматология", rating: 4.6, reviews: 220, icon: "🔬", description: "Отзывы о дерматологических услугах" },
                ].map((category, idx) => (
                  <div key={idx} className="rounded-2xl border border-border p-6">
                    <div className="mb-4 text-4xl">{category.icon}</div>
                    <h3 className="mb-2 text-lg font-semibold">{category.category}</h3>
                    <p className="mb-3 text-sm text-foreground/70">{category.description}</p>
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-sm ${i < Math.floor(category.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm font-medium">{category.rating}</span>
                    </div>
                    <div className="text-sm text-foreground/60">{category.reviews} отзывов</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Reviews */}
        <section className="bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Последние отзывы</h2>
              <div className="space-y-4">
                {[
                  { name: "Дария Нурланова", service: "Консультация", rating: 5, text: "Была на консультации у терапевта. Очень довольна! Врач внимательный, все объяснил понятно. Клиника чистая, персонал вежливый.", date: "20.12.2024" },
                  { name: "Артём Сидоров", service: "Анализы", rating: 4, text: "Сдавал анализы крови. Быстро, без очередей. Результаты готовы на следующий день. Единственное - немного дороговато.", date: "19.12.2024" },
                  { name: "Мария Козлова", service: "УЗИ", rating: 5, text: "Проходила УЗИ брюшной полости. Доктор очень внимательный, все показал и объяснил. Рекомендую!", date: "18.12.2024" },
                  { name: "Алишер Темиров", service: "Стоматология", rating: 5, text: "Лечил зуб у стоматолога. Отличная работа! Без боли, быстро, качественно. Спасибо доктору Нуртазину!", date: "17.12.2024" },
                  { name: "Ольга Морозова", service: "Прививка", rating: 4, text: "Делала прививку от гриппа. Все прошло быстро и безболезненно. Медсестра очень аккуратная.", date: "16.12.2024" },
                ].map((review, idx) => (
                  <div key={idx} className="rounded-2xl border border-border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-muted">
                          <Image src="/testimonials/avatar.jpg" alt={review.name} width={40} height={40} className="size-10 rounded-full object-cover" />
                        </div>
                        <div>
                          <div className="font-medium">{review.name}</div>
                          <div className="text-sm text-foreground/60">{review.service}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-sm ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                              ★
                            </span>
                          ))}
                        </div>
                        <div className="text-xs text-foreground/60">{review.date}</div>
                      </div>
              </div>
                    <p className="mt-3 text-sm text-foreground/80">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Add Review Form */}
        <section id="add-review" className="bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Оставить отзыв</h2>
                  <p className="mt-4 text-base leading-7 text-foreground/70">
                    Поделитесь своим опытом посещения нашей клиники. Ваш отзыв поможет другим пациентам сделать правильный выбор.
                  </p>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl border border-border p-5">
                      <div className="text-lg font-semibold">Быстрая публикация</div>
                      <div className="text-sm text-foreground/70">Отзывы публикуются в течение 24 часов после модерации</div>
                    </div>
                    <div className="rounded-2xl border border-border p-5">
                      <div className="text-lg font-semibold">Анонимность</div>
                      <div className="text-sm text-foreground/70">Вы можете оставить отзыв анонимно, указав только имя</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium">Имя *</label>
                        <input type="text" required className="h-11 w-full rounded-xl border border-input px-4 text-sm outline-none ring-1 ring-transparent focus:ring-2 focus:ring-primary" />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium">Возраст</label>
                        <input type="number" min="1" max="120" className="h-11 w-full rounded-xl border border-input px-4 text-sm outline-none ring-1 ring-transparent focus:ring-2 focus:ring-primary" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Услуга *</label>
                      <select required className="h-11 w-full rounded-xl border border-input px-4 text-sm outline-none ring-1 ring-transparent focus:ring-2 focus:ring-primary">
                        <option value="">Выберите услугу</option>
                        <option value="therapy">Терапия</option>
                        <option value="dentistry">Стоматология</option>
                        <option value="diagnostics">Диагностика</option>
                        <option value="cardiology">Кардиология</option>
                        <option value="neurology">Неврология</option>
                        <option value="dermatology">Дерматология</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Врач</label>
                      <select className="h-11 w-full rounded-xl border border-input px-4 text-sm outline-none ring-1 ring-transparent focus:ring-2 focus:ring-primary">
                        <option value="">Выберите врача (необязательно)</option>
                        <option value="sadykova">Айгуль Садыкова</option>
                        <option value="nurtazin">Марат Нуртазин</option>
                        <option value="kim">Елена Ким</option>
                        <option value="zhumagaliev">Бахыт Жумагалиев</option>
                        <option value="shevchenko">Алёна Шевченко</option>
                        <option value="abdrakhmanov">Канат Абдрахманов</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Оценка *</label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button key={star} type="button" className="text-2xl text-gray-300 hover:text-yellow-400 focus:text-yellow-400">
                            ★
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Отзыв *</label>
                      <textarea rows={4} required className="w-full rounded-xl border border-input px-4 py-3 text-sm outline-none ring-1 ring-transparent focus:ring-2 focus:ring-primary" placeholder="Опишите ваш опыт посещения клиники..."></textarea>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="agreement" required className="rounded border-input" />
                      <label htmlFor="agreement" className="text-sm text-foreground/70">
                        Я согласен с <Link href="/" className="text-primary hover:underline">правилами публикации отзывов</Link>
                      </label>
                    </div>
                    <button type="submit" className="w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                      Опубликовать отзыв
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-16">
              <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">Часто задаваемые вопросы</h2>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  { q: "Как оставить отзыв?", a: "Заполните форму на этой странице, указав ваше имя, выбранную услугу и оценку. Отзыв будет опубликован после модерации в течение 24 часов." },
                  { q: "Можно ли оставить анонимный отзыв?", a: "Да, вы можете указать только имя или псевдоним. Ваши личные данные не будут опубликованы." },
                  { q: "Сколько времени проходит до публикации отзыва?", a: "Отзывы проходят модерацию и публикуются в течение 24 часов в рабочее время." },
                  { q: "Можно ли отредактировать или удалить отзыв?", a: "Да, вы можете отредактировать или удалить свой отзыв, связавшись с нами по телефону или email." },
                  { q: "Почему мой отзыв не опубликован?", a: "Отзывы не публикуются, если они содержат нецензурную лексику, оскорбления или не соответствуют правилам сайта." },
                  { q: "Как связаться с клиникой по поводу отзыва?", a: "Вы можете позвонить по телефону +7 707 070 00 77 или написать на email clinic@example.com." },
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
        <section className="relative isolate overflow-hidden">
          <div className="container">
            <div className="mx-auto max-w-6xl rounded-3xl bg-black px-6 py-12 text-white sm:px-10 sm:py-16">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-semibold sm:text-3xl">Поделитесь своим опытом</h3>
                  <p className="mt-3 text-white/70">Ваш отзыв поможет другим пациентам сделать правильный выбор и улучшит качество наших услуг.</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Link href="#add-review" className="rounded-xl bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                    Оставить отзыв
                  </Link>
                  <Link href="/services" className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-black transition-colors hover:bg-white/90">
                    Наши услуги
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
