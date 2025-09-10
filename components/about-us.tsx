"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="mx-auto !max-w-[88rem] items-center gap-10 py-12 sm:py-20 md:grid md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">International Clinic of Asia</h2>
            <p className="mt-4 text-base leading-7 text-foreground/70">
              Международный медицинский центр &quot;International Clinic of Asia&quot; – многопрофильный медицинский центр в г. Астана. Клиника предлагает широкий спектр медицинских услуг: консультации специалистов, диагностические исследования, дневной стационар, медосмотры и оформление справок. Оснащена современным оборудованием.
            </p>
            <div className="mt-4 space-y-3 text-base leading-7 text-foreground/70">
              <p>
                Международный медицинский центр &quot;International Clinic of Asia&quot; – многопрофильный медицинский центр, расположенный в г. Астана. Клиника предлагает широкий спектр медицинских услуг, включая:
              </p>
              <div>
                <div className="font-semibold text-foreground">Консультации специалистов:</div>
                <ul className="mt-1 list-disc pl-5">
                  <li>терапевт</li>
                  <li>хирург</li>
                  <li>акушер-гинеколог</li>
                  <li>оториноларинголог</li>
                  <li>кардиолог</li>
                  <li>невропатолог</li>
                  <li>офтальмолог</li>
                  <li>дерматовенеролог</li>
                  <li>рентгенолог</li>
                  <li>профпатолог</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-foreground">Диагностические исследования:</div>
                <ul className="mt-1 list-disc pl-5">
                  <li>лабораторная диагностика</li>
                  <li>рентген</li>
                  <li>ЭКГ</li>
                </ul>
              </div>
              <p>
                Дневной стационар с возможностью проведения различных процедур. Медосмотры, оформление справок (037/у), (038/у), (073/у), (075/у), (028/у), (076/у), (069/у), (071/у), и санитарных книжек.
              </p>
              <p>
                Клиника оснащена современным оборудованием и предоставляет услуги высокого качества. Для удобства пациентов предусмотрены скидки для пенсионеров, инвалидов и ветеранов в размере 50% на все услуги.
              </p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border p-5">
                <div className="text-lg font-semibold">15+ лет</div>
                <div className="text-sm text-foreground/60">опыт наших врачей</div>
              </div>
              <div className="rounded-2xl border border-border p-5">
                <div className="text-lg font-semibold">Все в одном месте</div>
                <div className="text-sm text-foreground/60">диагностика, анализы, лечение</div>
              </div>
              <div className="rounded-2xl border border-border p-5">
                <div className="text-lg font-semibold">Честные цены</div>
                <div className="text-sm text-foreground/60">без скрытых платежей</div>
              </div>
              <div className="rounded-2xl border border-border p-5">
                <div className="text-lg font-semibold">Поддержка 24/7</div>
                <div className="text-sm text-foreground/60">всегда на связи</div>
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

        <div className="mx-auto !max-w-[88rem] py-12 sm:py-16">
          <h3 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">Наш подход</h3>
          <div className="grid gap-4 md:grid-cols-4">
            {["Диагностика", "План лечения", "Коммуникация", "Контроль результата"].map((t, i) => (
              <div key={i} className="rounded-2xl border border-border p-6">
                <div className="text-base font-semibold">{t}</div>
                <div className="mt-1 text-sm text-foreground/70">
                  Мы объясняем простым языком, согласуем шаги и сопровождаем весь путь.
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto !max-w-[88rem] rounded-3xl bg-black px-6 py-10 text-white sm:px-10">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold sm:text-3xl">Готовы помочь вам</h3>
              <p className="mt-2 text-white/70">Оставьте контакты — администратор перезвонит и подберет удобное время.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <input placeholder="Имя" className="h-11 rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-white/30" />
              <input placeholder="Телефон" className="h-11 rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-white/30" />
              <Button className="col-span-1 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:col-span-2">
                Записаться
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


