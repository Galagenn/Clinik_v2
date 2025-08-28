import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

export default function Contacts() {
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
                    Свяжитесь с нами любым удобным способом. Удобное расположение в центре города с отличной транспортной доступностью. Бесплатная парковка и комфортные условия для посещения.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link href="#map" className="rounded-xl bg-black px-6 py-3 text-center text-white shadow-sm transition-colors hover:bg-black/90">
                      Посмотреть карту
                    </Link>
                    <Link href="/services" className="rounded-xl bg-muted px-6 py-3 text-center text-foreground shadow-sm transition-colors hover:bg-muted/80">
                      Наши услуги
                    </Link>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative mx-auto w-full max-w-[40rem] overflow-hidden rounded-2xl ring-1 ring-border">
                    <Image src="/about-us/appointment-back.jpg" alt="Клиника снаружи" width={1200} height={900} className="h-auto w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Основная информация</h2>
                  <div className="mt-6 space-y-4">
                                                 <div className="flex items-start gap-4">
                               <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                                 <Image src="/contacts/icons/contacts.png" alt="Телефон" width={20} height={20} className="h-5 w-5" />
                               </div>
                               <div>
                                 <div className="font-semibold">Телефоны</div>
                                 <div className="text-foreground/70">+7 (7172) 49-03-84</div>
                                 <div className="text-foreground/70">+7 (778) 906-40-60</div>
                                 <div className="text-foreground/70">+7 (777) 753-28-28</div>
                                 <div className="text-foreground/70">+7 (702) 377-75-24</div>
                                 <div className="text-sm text-foreground/60">В рабочее время</div>
                               </div>
                             </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <Image src="/contacts/icons/gmail.png" alt="Email" width={20} height={20} className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-foreground/70">clinic@example.com</div>
                        <div className="text-sm text-foreground/60">Ответим в течение 2 часов</div>
                      </div>
                    </div>
                                                 <div className="flex items-start gap-4">
                               <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                                 <Image src="/contacts/icons/location.png" alt="Адрес" width={20} height={20} className="h-5 w-5" />
                               </div>
                               <div>
                                 <div className="font-semibold">Адрес</div>
                                 <div className="text-foreground/70">г. Астана, ул. Мәскеу, 11А, 010000</div>
                                 <div className="text-sm text-foreground/60">Центр города</div>
                               </div>
                             </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <Image src="/contacts/icons/whatsapp.png" alt="WhatsApp" width={20} height={20} className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">WhatsApp</div>
                        <div className="text-foreground/70">+7 707 070 00 77</div>
                        <div className="text-sm text-foreground/60">Быстрые ответы на вопросы</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Время работы</h2>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl border border-border p-6">
                      <div className="text-lg font-semibold">Основной график</div>
                                                     <div className="mt-2 space-y-2 text-sm text-foreground/70">
                                 <div className="flex justify-between">
                                   <span>Понедельник - Пятница</span>
                                   <span className="font-medium">08:30 - 17:30</span>
                                 </div>
                                 <div className="flex justify-between">
                                   <span>Суббота</span>
                                   <span className="font-medium">08:30 - 13:00</span>
                                 </div>
                                 <div className="flex justify-between">
                                   <span>Воскресенье</span>
                                   <span className="font-medium">Выходной</span>
                                 </div>
                               </div>
                    </div>
                    <div className="rounded-2xl border border-border p-6">
                      <div className="text-lg font-semibold">Экстренная помощь</div>
                                             <div className="mt-2 text-sm text-foreground/70">
                         При острых состояниях звоните по телефону +7 (778) 906-40-60. Врач дежурной службы проконсультирует и при необходимости примет вас вне графика.
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Address Info */}
        <section className="bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Адрес клиники</h2>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl border border-border p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                          <Image src="/contacts/icons/location.png" alt="Адрес" width={24} height={24} className="h-6 w-6" />
                        </div>
                        <div>
                                                     <div className="text-lg font-semibold">Основной адрес</div>
                           <div className="text-foreground/70">г. Астана, ул. Мәскеу, 11А, 010000</div>
                         </div>
                       </div>
                       <div className="text-sm text-foreground/60">
                         Район: Центральный район<br />
                         Ориентир: центр города<br />
                         Координаты: 51.1801° N, 71.4460° E
                       </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Как добраться</h2>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl border border-border p-6">
                      <h3 className="mb-4 text-lg font-semibold">Транспорт</h3>
                      <div className="space-y-3 text-sm text-foreground/70">
                                                 <div className="flex items-center gap-2">
                           <span className="size-2 rounded-full bg-primary"></span>
                           <span><strong>Автобусы:</strong> №1, №2, №3, №4 (остановка "Центр")</span>
                         </div>
                         <div className="flex items-center gap-2">
                           <span className="size-2 rounded-full bg-primary"></span>
                           <span><strong>Маршрутки:</strong> №101, №102, №103 (остановка "Центр")</span>
                         </div>
                         <div className="flex items-center gap-2">
                           <span className="size-2 rounded-full bg-primary"></span>
                           <span><strong>Такси:</strong> круглосуточно</span>
                         </div>
                         <div className="flex items-center gap-2">
                           <span className="size-2 rounded-full bg-primary"></span>
                           <span><strong>Пешком:</strong> от центра города 10-15 минут</span>
                         </div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-border p-6">
                      <h3 className="mb-4 text-lg font-semibold">Парковка</h3>
                      <div className="space-y-2 text-sm text-foreground/70">
                        <div>• Бесплатная парковка для пациентов</div>
                        <div>• Охраняемая территория</div>
                        <div>• Места для людей с ограниченными возможностями</div>
                        <div>• Подземный паркинг (платный)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="map">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Карта и схема проезда</h2>
                <p className="mt-2 text-sm text-foreground/60">Интерактивная карта и подробная схема проезда к клинике</p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-2xl border border-border bg-muted p-6">
                  <div className="aspect-video rounded-xl bg-white">
                    <div className="flex h-full items-center justify-center text-foreground/60">
                      [Интерактивная карта будет здесь]
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-foreground/70">
                    <p>Клиника расположена в центре города, рядом с основными транспортными магистралями. Удобный подъезд как на общественном транспорте, так и на личном автомобиле.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-border p-6">
                    <h3 className="mb-4 text-lg font-semibold">Пошаговая инструкция</h3>
                    <div className="space-y-3 text-sm text-foreground/70">
                                             <div className="flex items-start gap-3">
                         <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</span>
                         <span>От центра города идите по ул. Мәскеу</span>
                       </div>
                       <div className="flex items-start gap-3">
                         <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</span>
                         <span>Пройдите 200 метров от перекрестка</span>
                       </div>
                       <div className="flex items-start gap-3">
                         <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</span>
                         <span>Клиника находится слева, здание с вывеской "International Clinic of Asia"</span>
                       </div>
                       <div className="flex items-start gap-3">
                         <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">4</span>
                         <span>Вход с главной улицы</span>
                       </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-border p-6">
                    <h3 className="mb-4 text-lg font-semibold">Ориентиры</h3>
                    <div className="space-y-2 text-sm text-foreground/70">
                                             <div>• Рядом с центральной площадью (300 м)</div>
                       <div>• Напротив парка "Центральный"</div>
                       <div>• Рядом с остановкой "Центр"</div>
                       <div>• Здание с вывеской "International Clinic of Asia"</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parking */}
        <section className="bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Парковка</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { type: "Бесплатная парковка", icon: "🅿️", description: "Для пациентов клиники", features: ["Охраняемая территория", "Видеонаблюдение", "Освещение", "Места для инвалидов"], capacity: "20 мест", availability: "В рабочее время" },
                  { type: "Подземный паркинг", icon: "🚗", description: "Платный паркинг", features: ["Крытая парковка", "Электронные ворота", "Охрана 24/7", "Мойка автомобилей"], capacity: "50 мест", availability: "Круглосуточно" },
                  { type: "Уличная парковка", icon: "🚙", description: "Вдоль улицы", features: ["Бесплатно", "Ограниченное время", "Паркоматы", "Штрафы за нарушение"], capacity: "15 мест", availability: "До 2 часов" },
                ].map((parking, idx) => (
                  <div key={idx} className="rounded-2xl border border-border p-6">
                    <div className="mb-4 text-4xl">{parking.icon}</div>
                    <h3 className="mb-2 text-lg font-semibold">{parking.type}</h3>
                    <div className="mb-3 text-sm text-foreground/70">{parking.description}</div>
                    <div className="mb-4">
                      <div className="text-sm font-medium text-foreground/80 mb-2">Особенности:</div>
                      <ul className="space-y-1">
                        {parking.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-sm text-foreground/70">
                            <span className="size-1.5 rounded-full bg-primary"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-foreground/60">
                      <div>Вместимость: <span className="font-medium">{parking.capacity}</span></div>
                      <div>Доступность: <span className="font-medium">{parking.availability}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Доступность</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { feature: "Пандусы", icon: "♿", description: "Доступность для инвалидных колясок", status: "Доступно" },
                  { feature: "Лифты", icon: "🛗", description: "Подъемники на все этажи", status: "Доступно" },
                  { feature: "Туалеты", icon: "🚻", description: "Адаптированные санузлы", status: "Доступно" },
                  { feature: "Парковка", icon: "🅿️", description: "Места для людей с ОВЗ", status: "Доступно" },
                  { feature: "Тактильные указатели", icon: "👆", description: "Для слабовидящих", status: "Частично" },
                  { feature: "Аудио-системы", icon: "🔊", description: "Для слабослышащих", status: "Планируется" },
                  { feature: "Брайль", icon: "👁️", description: "Информация шрифтом Брайля", status: "Частично" },
                  { feature: "Персонал", icon: "👨‍⚕️", description: "Обучение работе с ОВЗ", status: "Доступно" },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-border p-6 text-center">
                    <div className="mb-4 text-4xl">{item.icon}</div>
                    <h3 className="mb-2 text-lg font-semibold">{item.feature}</h3>
                    <p className="mb-3 text-sm text-foreground/70">{item.description}</p>
                    <div className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                      item.status === "Доступно" ? "bg-green-100 text-green-800" :
                      item.status === "Частично" ? "bg-yellow-100 text-yellow-800" :
                      "bg-gray-100 text-gray-800"
                    }`}>
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Places */}
        <section className="bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">Рядом с клиникой</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "ТРЦ 'Мега'", distance: "500 м", description: "Торгово-развлекательный центр", services: ["Магазины", "Рестораны", "Кинотеатр", "Развлечения"], icon: "🛍️" },
                  { name: "Парк 'Здоровье'", distance: "200 м", description: "Городской парк для отдыха", services: ["Прогулки", "Спортивные площадки", "Детские зоны", "Кафе"], icon: "🌳" },
                  { name: "Метро 'Алмалы'", distance: "300 м", description: "Станция метрополитена", services: ["Линия 1", "Линия 2", "Автобусы", "Маршрутки"], icon: "🚇" },
                  { name: "Аптека 'Здоровье'", distance: "100 м", description: "Круглосуточная аптека", services: ["Лекарства", "Медицинские товары", "Консультации", "Доставка"], icon: "💊" },
                  { name: "Банк 'Народный'", distance: "400 м", description: "Отделение банка", services: ["Кредиты", "Вклады", "Платежи", "Обмен валют"], icon: "🏦" },
                  { name: "Кафе 'У врача'", distance: "150 м", description: "Медицинское кафе", services: ["Диетическое питание", "Свежие соки", "Здоровые закуски", "Wi-Fi"], icon: "☕" },
                ].map((place, idx) => (
                  <div key={idx} className="rounded-2xl border border-border p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="text-3xl">{place.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold">{place.name}</h3>
                        <div className="text-sm text-primary font-medium">{place.distance}</div>
                      </div>
                    </div>
                    <p className="mb-3 text-sm text-foreground/70">{place.description}</p>
                    <div className="text-sm text-foreground/60">
                      {place.services.join(" • ")}
                    </div>
                  </div>
                ))}
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
                  { q: "Как добраться на машине?", a: "Клиника находится на ул. Мәскеу, 11А. Есть бесплатная парковка для пациентов. Координаты: 51.1801° N, 71.4460° E." },
                  { q: "Есть ли бесплатная парковка?", a: "Да, для пациентов клиники предоставляется бесплатная парковка на 20 мест. Также есть платный подземный паркинг на 50 мест." },
                  { q: "Как добраться на общественном транспорте?", a: "От центра города - 10-15 минут пешком. Автобусы №1, №2, №3, №4 до остановки 'Центр'. Маршрутки №101, №102, №103 до остановки 'Центр'." },
                  { q: "Работает ли клиника в выходные?", a: "Да, клиника работает по субботам с 08:30 до 13:00, по воскресеньям - выходной." },
                  { q: "Есть ли доступность для инвалидов?", a: "Да, клиника оборудована пандусами, лифтами, адаптированными туалетами и специальными парковочными местами для людей с ограниченными возможностями." },
                  { q: "Можно ли приехать на такси?", a: "Да, такси может подъехать прямо к входу в клинику. Рекомендуем заказывать через приложения Yandex.Taxi, Uber или Такси 123." },
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
                  <h3 className="text-2xl font-semibold sm:text-3xl">Запишитесь на прием</h3>
                  <p className="mt-3 text-white/70">Теперь, когда вы знаете, как нас найти, запишитесь на прием в удобное для вас время.</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <a href="tel:+77172490384" className="rounded-xl bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                    Позвонить
                  </a>
                  <Link href="#book" className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-black transition-colors hover:bg-white/90">
                    Записаться
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
