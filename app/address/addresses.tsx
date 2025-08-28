"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

type Branch = {
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  parking: string;
  transport: string;
};

const branches: Branch[] = [
  {
    city: "Астана",
    address: "Абылай хан көшесі, 45, 050000",
    phone: "+7 (705) 111-22-33",
    email: "astana.center@example.com",
    hours: "Ежедневно 08:00–20:00",
    parking: "Бесплатная парковка у входа",
    transport: "Автобусы 10, 17, 25 — остановка ‘Медцентр’",
  },
  {
    city: "Астана",
    address: "Тәуелсіздік даңғылы, 120, 010000",
    phone: "+7 (707) 444-55-66",
    email: "tauelsizdik@example.com",
    hours: "Ежедневно 08:00–20:00",
    parking: "Подземная парковка, 1 час бесплатно",
    transport: "Трамвай 2, автобусы 8, 19",
  },
  {
    city: "Астана",
    address: "Байтерек көшесі, 18, 160000",
    phone: "+7 (747) 888-99-00",
    email: "baiterek@example.com",
    hours: "Пн–Пт 08:00–20:00, Сб–Вс 09:00–18:00",
    parking: "Городская парковка, первые 30 минут бесплатно",
    transport: "Автобусы 4, 12, 33",
  },
  {
    city: "Қарағанды",
    address: "Жібек Жолы көшесі, 77А, 100000",
    phone: "+7 (701) 123-45-67",
    email: "karaganda@example.com",
    hours: "Ежедневно 08:00–20:00",
    parking: "Парковка перед зданием",
    transport: "Маршрутные такси 5, 16",
  },
  {
    city: "Өскемен",
    address: "Абай даңғылы, 10, 070000",
    phone: "+7 (708) 222-33-44",
    email: "oskemen@example.com",
    hours: "Пн–Сб 08:00–20:00",
    parking: "Парковка на внутреннем дворе",
    transport: "Автобусы 7, 21, 29",
  },
];

export default function Addresses() {
  const [activeCity, setActiveCity] = useState<string>("Все");
  const [query, setQuery] = useState<string>("");

  const cities = useMemo(() => ["Все", ...Array.from(new Set(branches.map((b) => b.city)))], []);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return branches.filter((b) => {
      const byCity = activeCity === "Все" ? true : b.city === activeCity;
      const byQuery = term
        ? [b.address, b.phone, b.email, b.parking, b.transport].some((v) => v.toLowerCase().includes(term))
        : true;
      return byCity && byQuery;
    });
  }, [activeCity, query]);

  return (
    <section className="bg-white">
      <div className="container">
        <div className="mx-auto !max-w-[88rem] py-12 sm:py-16">
          {/* Hero */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-[#f6fbff] to-[#eaf6ff] p-6 shadow-premium sm:p-10">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background-image:radial-gradient(900px_450px_at_80%_20%,rgba(42,157,244,0.14),transparent),radial-gradient(700px_350px_at_20%_80%,rgba(0,191,166,0.12),transparent)]" />
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl">Наши адреса</h1>
                <p className="mt-2 text-sm text-foreground/70 sm:text-base">Комфортный визит каждый день: удобная парковка, понятный график, быстрая запись.</p>
              </div>
              <div className="rounded-2xl border border-border bg-white/80 p-3 shadow-soft backdrop-blur">
                <div className="flex items-center gap-3">
                  <Input
                    placeholder="введите запрос (адрес, телефон, email)"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="h-11 w-full rounded-xl bg-muted px-4 text-sm placeholder:uppercase placeholder:text-[#9aa3ab] focus-visible:ring-2 focus-visible:ring-primary"
                  />
                  <Button className="shrink-0">Найти</Button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cities.map((c) => (
                    <button
                      key={c}
                      onClick={() => setActiveCity(c)}
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${activeCity === c ? "bg-primary text-white" : "bg-muted text-foreground/70 hover:bg-muted/80"}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Branches */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((b, i) => (
              <article key={i} className="rounded-2xl border border-border bg-white/90 p-5 shadow-soft ring-1 ring-transparent transition-all hover:-translate-y-0.5 hover:shadow-premium hover:ring-primary/10">
                <div className="mb-3 flex items-center justify-between text-xs">
                  <span className="font-semibold uppercase tracking-wide text-primary/80">{b.city}</span>
                  <span className="text-foreground/60">{b.hours}</span>
                </div>
                <div className="space-y-2 text-sm text-foreground/80">
                  <div className="font-medium">{b.address}</div>
                  <div>
                    <span className="text-foreground/60">Телефон: </span>
                    <a href={`tel:${b.phone.replace(/[^+\\d]/g, "")}`} className="font-semibold text-foreground transition-colors hover:text-primary">{b.phone}</a>
                  </div>
                  <div>
                    <span className="text-foreground/60">Email: </span>
                    <a href={`mailto:${b.email}`} className="text-foreground transition-colors hover:text-primary">{b.email}</a>
                  </div>
                  <div><span className="text-foreground/60">Парковка: </span>{b.parking}</div>
                  <div><span className="text-foreground/60">Транспорт: </span>{b.transport}</div>
                </div>
                <div className="mt-5 flex gap-2">
                  <a href={`tel:${b.phone.replace(/[^+\\d]/g, "")}`} className="inline-block rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-primary/90">Позвонить</a>
                  <a href={`mailto:${b.email}`} className="inline-block rounded-xl bg-white px-4 py-2 text-xs font-semibold text-primary ring-1 ring-primary/20 transition-all hover:ring-primary/30">Написать</a>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <section className="mt-12 rounded-3xl bg-black px-6 py-10 text-white sm:px-10">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold sm:text-3xl">Нужна подсказка по выбору филиала?</h3>
                <p className="mt-2 text-white/70">Оставьте контакты — администратор подберет ближайший филиал и удобное время.</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <Input placeholder="Имя" className="h-11 rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-white/30" />
                <Input placeholder="Телефон" className="h-11 rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-white/30" />
                <Button className="col-span-1 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:col-span-2">Получить консультацию</Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
