"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Doctor = {
  id: number;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  schedule: string;
  avatar: string;
  tags: string[];
  priceFrom: string;
  rating: number;
};

const allTags = [
  "Терапевты",
  "Стоматологи",
  "Хирурги",
  "Эндокринологи",
  "Акушеры-гинекологи",
  "Педиатры",
  "Дерматологи",
  "Ортопеды",
  "Психотерапевты",
  "Кардиологи",
  "Неврологи",
  "Рентгенологи",
];

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Айгуль Садыкова",
    role: "врач-терапевт, врач высшей категории",
    specialization: "Хронические заболевания, профилактика, гастроэнтерология",
    experience: "Стаж 12 лет",
    schedule: "Пн–Пт: 09:00–18:00",
    avatar: "/testimonials/avatar.jpg",
    tags: ["Терапевты"],
    priceFrom: "от 7 000 тг",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Марат Нуртазин",
    role: "врач-стоматолог",
    specialization: "Терапевтическая стоматология, гигиена, профилактика",
    experience: "Стаж 10 лет",
    schedule: "Вт–Сб: 10:00–19:00",
    avatar: "/testimonials/avatar.jpg",
    tags: ["Стоматологи"],
    priceFrom: "от 8 000 тг",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Елена Ким",
    role: "врач УЗИ",
    specialization: "Комплексная ультразвуковая диагностика",
    experience: "Стаж 9 лет",
    schedule: "Пн, Ср, Пт: 09:00–16:00",
    avatar: "/testimonials/avatar.jpg",
    tags: ["Рентгенологи"],
    priceFrom: "от 6 500 тг",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Бахыт Жумагалиев",
    role: "кардиолог",
    specialization: "Диагностика и лечение сердечно-сосудистых заболеваний",
    experience: "Стаж 14 лет",
    schedule: "Пн–Пт: 11:00–19:00",
    avatar: "/testimonials/avatar.jpg",
    tags: ["Кардиологи"],
    priceFrom: "от 12 000 тг",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Алёна Шевченко",
    role: "дерматолог",
    specialization: "Диагностика и лечение кожных заболеваний, дерматоскопия",
    experience: "Стаж 8 лет",
    schedule: "Вт–Сб: 09:00–17:00",
    avatar: "/testimonials/avatar.jpg",
    tags: ["Дерматологи"],
    priceFrom: "от 9 000 тг",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Канат Абдрахманов",
    role: "невролог",
    specialization: "Головные боли, остеохондроз, полинейропатии",
    experience: "Стаж 11 лет",
    schedule: "Ср–Вс: 10:00–18:00",
    avatar: "/testimonials/avatar.jpg",
    tags: ["Неврологи"],
    priceFrom: "от 10 000 тг",
    rating: 4.8,
  },
];

export default function Doctors() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"rating" | "price">("rating");

  const filtered = useMemo(() => {
    const byFilter = doctors.filter((d) => {
      const byTag = activeTag ? d.tags.includes(activeTag) : true;
      const q = query.trim().toLowerCase();
      const byQuery = q
        ? [d.name, d.role, d.specialization].some((v) => v.toLowerCase().includes(q))
        : true;
      return byTag && byQuery;
    });
    const sorted = [...byFilter].sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      // numeric compare by extracting digits from priceFrom
      const ap = parseInt(a.priceFrom.replace(/\D/g, "")) || 0;
      const bp = parseInt(b.priceFrom.replace(/\D/g, "")) || 0;
      return ap - bp;
    });
    return sorted;
  }, [query, activeTag, sortBy]);

  return (
    <section className="pb-12 pt-6 sm:pb-20 sm:pt-12">
      <div className="container">
        {/* Hero + Search */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-[#f6fbff] to-[#eaf6ff] p-6 shadow-premium sm:p-10">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background-image:radial-gradient(900px_450px_at_80%_20%,rgba(42,157,244,0.14),transparent),radial-gradient(700px_350px_at_20%_80%,rgba(0,191,166,0.12),transparent)]" />
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl">Наши специалисты</h1>
              <p className="mt-2 text-sm text-foreground/70 sm:text-base">Выберите врача по специализации, рейтингу или стоимости первичного приема.</p>
            </div>
            <div className="rounded-2xl border border-border bg-white/80 p-3 shadow-soft backdrop-blur">
              <div className="flex items-center gap-3">
                <Input
                  placeholder="введите запрос"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="h-11 rounded-xl bg-muted px-4 text-sm placeholder:uppercase placeholder:text-[#9aa3ab] focus-visible:ring-2 focus-visible:ring-primary"
                />
                <Button className="shrink-0">Найти</Button>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs text-foreground/60">Сортировка:</span>
                <button onClick={() => setSortBy("rating")} className={`rounded-full px-3 py-1 text-xs font-semibold ${sortBy === "rating" ? "bg-primary text-white" : "bg-muted text-foreground/70 hover:bg-muted/80"}`}>по рейтингу</button>
                <button onClick={() => setSortBy("price")} className={`rounded-full px-3 py-1 text-xs font-semibold ${sortBy === "price" ? "bg-primary text-white" : "bg-muted text-foreground/70 hover:bg-muted/80"}`}>по цене</button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 mt-6 flex flex-wrap gap-3">
          {allTags.map((tag, i) => (
            <button
              key={i}
              onClick={() => setActiveTag((prev) => (prev === tag ? null : tag))}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                activeTag === tag
                  ? "bg-primary text-white shadow-soft"
                  : "bg-muted text-foreground/70 hover:bg-muted/80"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Doctors grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((d) => (
            <article
              key={d.id}
              className="rounded-2xl border border-border bg-gradient-to-b from-white to-[#f7fbff] p-6 shadow-soft ring-1 ring-transparent transition-all hover:-translate-y-1 hover:shadow-premium hover:ring-primary/10"
            >
              <div className="flex items-center gap-4">
                <div className="size-16 shrink-0 rounded-full ring-2 ring-primary/20">
                  <Image src={d.avatar} alt={d.name} width={64} height={64} className="size-16 rounded-full object-cover" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{d.name}</h3>
                  <div className="text-xs text-foreground/60">{d.role}</div>
                </div>
              </div>
              <div className="mt-3 text-xs text-foreground/70">{d.specialization}</div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-foreground/70">
                <div>Рейтинг: <span className="font-semibold text-foreground">{d.rating.toFixed(1)}</span></div>
                <div>Прием: <span className="font-semibold text-foreground">{d.priceFrom}</span></div>
                <div>Опыт: <span className="font-semibold text-foreground">{d.experience}</span></div>
                <div>График: <span className="font-semibold text-foreground">{d.schedule}</span></div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {d.tags.map((t) => (
                  <span key={t} className="rounded-full bg-muted px-3 py-1 text-[10px] font-semibold text-foreground/70">{t}</span>
                ))}
              </div>
              <Button className="mt-5 w-full">Записаться</Button>
            </article>
          ))}
        </div>

        {/* Specialties */}
        <div className="mx-auto mt-12 !max-w-[88rem]">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">Направления</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["Терапия", "Стоматология", "Кардиология", "Неврология", "Дерматология", "УЗИ"].map((s) => (
              <div key={s} className="rounded-2xl border border-border bg-white p-5 text-sm text-foreground/80">
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <section className="mt-12 rounded-3xl bg-black px-6 py-10 text-white sm:px-10">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold sm:text-3xl">Подберем врача под вашу задачу</h3>
              <p className="mt-2 text-white/70">Оставьте контакты — администратор перезвонит и предложит удобное время.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Input placeholder="Имя" className="h-11 rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-white/30" />
              <Input placeholder="Телефон" className="h-11 rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-white/30" />
              <Button className="col-span-1 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:col-span-2">
                Записаться
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <div className="mx-auto mt-12 !max-w-[88rem]">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">FAQ</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              { q: "Как выбрать врача?", a: "Используйте фильтры по специализации, рейтингу и стоимости приема." },
              { q: "Можно ли записаться на сегодня?", a: "Часто есть ближайшие окна. Оставьте заявку — перезвоним в течение 10 минут." },
              { q: "Сколько длится первичный прием?", a: "Обычно 20–40 минут. Зависит от специализации и вашего запроса." },
              { q: "Можно ли онлайн-консультацию?", a: "Да, для ряда направлений доступна дистанционная консультация." },
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
  );
}
