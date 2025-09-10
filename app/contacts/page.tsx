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
                    Международный медицинский центр &quot;International Clinic of Asia&quot; – многопрофильный медицинский центр в г. Астана. Клиника предлагает широкий спектр медицинских услуг: консультации специалистов, диагностические исследования, дневной стационар, медосмотры и оформление справок. Оснащена современным оборудованием.
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
                    <a href="tel:+77026982336" className="w-full flex items-start gap-4 p-4 rounded-2xl border border-border hover:bg-muted/50 transition-colors text-left">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <Image src="/contacts/icons/contacts.png" alt="Телефон" width={20} height={20} className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">Телефон</div>
                        <div className="text-foreground/70">+7 702 698 2336</div>
                        <div className="text-sm text-foreground/60">В рабочее время</div>
                      </div>
                    </a>
                    
                    <a href="mailto:clinic@example.com" className="w-full flex items-start gap-4 p-4 rounded-2xl border border-border hover:bg-muted/50 transition-colors text-left">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <Image src="/contacts/icons/gmail.png" alt="Email" width={20} height={20} className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-foreground/70">clinic@example.com</div>
                        <div className="text-sm text-foreground/60">Ответим в течение 2 часов</div>
                      </div>
                    </a>
                    
                    <a href="https://go.2gis.com/jUVuo" target="_blank" rel="noopener noreferrer" className="w-full flex items-start gap-4 p-4 rounded-2xl border border-border hover:bg-muted/50 transition-colors text-left">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <Image src="/contacts/icons/location.png" alt="Адрес" width={20} height={20} className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">Адрес</div>
                        <div className="text-foreground/70">Казахстан, г. Астана, улица Мәскеу, дом 11А, 010000</div>
                        <div className="text-sm text-foreground/60">Центр города</div>
                      </div>
                    </a>
                    
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Режим работы</h2>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl border border-border p-6">
                      <div className="text-lg font-semibold">Основной график</div>
                                                     <div className="mt-2 space-y-2 text-sm text-foreground/70">
                                 <div className="flex justify-between">
                                   <span>Понедельник - Пятница</span>
                                   <span className="font-medium">08:00 - 17:00</span>
                                 </div>
                                 <div className="flex justify-between">
                                   <span>Обед</span>
                                   <span className="font-medium">13:00 - 14:00</span>
                                 </div>
                                 <div className="flex justify-between">
                                   <span>Суббота</span>
                                   <span className="font-medium">08:00 - 13:00 (рентген/флюорография)</span>
                                 </div>
                                 <div className="flex justify-between">
                                   <span>Воскресенье</span>
                                   <span className="font-medium">Выходной</span>
                                 </div>
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
                    <iframe id="map_144568307" frameBorder="0" width="100%" height="350px" src="https://makemap.2gis.ru/widget?data=eJw9UFtvgjAU_i_d44g5IFgg8cGVDDVoqC7xsviAUrELUlKKTon_fQW3neS8fLec8zVIyJRJloZMnJmSnFXI_2yQupUM-eidJaqWDBmolKJkUnV8gw4iF1LzL2C55tHSvOIqbx3LlQPb9bTerBfl3nJOe_IW7MO8TlazoZalrDpIXiouCi2Ox6NXmOLFaR4SiAJae-EMoju9KIIhwrS6BTyb0gyiD1rPyRWimF5S8gqb8SJTxIZI0opoX7seMWFzpColHkRfVC0DqrxwBNG69diwcXXOJJtpvOq8R50Zkph41zgbtsfdJ0XKvpFvwt88DJQ9i7m1b_-2EgteKK0_CF0eLxLVlYbNXt_rW-AZjtkzXejb5k77eYp8F8NjZ6BzUsai4s_nG5QnCvn_WmybNmAH2wbKW_4Zhy3LcV1vAAON34U46-tcnapbFHm-OjGWbztUyZo9fgDxQo3F" sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
                  </div>
                  <div className="mt-4 text-sm text-foreground/70">
                    <p>Клиника расположена в центре города, рядом с основными транспортными магистралями. Удобный подъезд как на общественном транспорте, так и на личном автомобиле.</p>
                  </div>
                </div>

                  <div className="container">
                    <div className="mx-auto !max-w-[88rem] py-12 sm:py-20">

                          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Адрес клиники</h2>
                          <div className="mt-6 space-y-4 border-border border-2 rounded-2xl p-6 hover:bg-muted/50 transition-colors">
                            <a href="https://go.2gis.com/jUVuo" target="_blank" rel="noopener noreferrer" className="w-full rounded-2xl p-6 text-left">
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
                            </a>
                          </div>

                    </div>
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
        <section id="book" className="relative isolate overflow-hidden">
          <div className="container">
            <div className="mx-auto max-w-6xl rounded-3xl bg-black px-6 py-12 text-white sm:px-10 sm:py-16">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-semibold sm:text-3xl">Запишитесь на прием</h3>
                  <p className="mt-3 text-white/70">Теперь, когда вы знаете, как нас найти, запишитесь на прием в удобное для вас время.</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input placeholder="Имя" className="h-11 rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-white/30" />
                  <input placeholder="Телефон" className="h-11 rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-white/30" />
                  <button className="col-span-1 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:col-span-2">
                    Отправить заявку
                  </button>
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
