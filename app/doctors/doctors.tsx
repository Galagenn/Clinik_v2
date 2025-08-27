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
};

const allTags = [
  "Терапевты",
  "Стоматологи",
  "Хирурги",
  "Эндокринологи",
  "Акушеры",
  "Невропатологи",
  "Педиатры",
  "Дерматологи",
  "Невропатологи",
  "Ортопеды",
  "Психотерапевты",
  "Дерматологи",
  "Кардиологи",
  "Рентгенологи",
  "Неврологи",
  "Ревматологи",
  "Инфекционист",
];

const doctors: Doctor[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  name: "Анна Сергеевна Морозова",
  role: "терапевт, врач высшей категории",
  specialization:
    "Специализация \"лечение хронических заболеваний, гастроэнтерология\"",
  experience: "Опыт работы: 15 лет",
  schedule: "График приема: Пн/Пт: 09:00",
  avatar: "/testimonials/avatar.jpg",
  tags: ["Терапевты"],
}));

export default function Doctors() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return doctors.filter((d) => {
      const byTag = activeTag ? d.tags.includes(activeTag) : true;
      const q = query.trim().toLowerCase();
      const byQuery = q
        ? [d.name, d.role, d.specialization].some((v) => v.toLowerCase().includes(q))
        : true;
      return byTag && byQuery;
    });
  }, [query, activeTag]);

  return (
    <section className="pb-12 pt-6 sm:pb-20 sm:pt-12">
      <div className="container">
        <h1 className="mb-5 text-2xl font-extrabold tracking-tight sm:mb-8 sm:text-3xl">
          Наши специалисты
        </h1>
        <div className="mb-6 flex items-center gap-3 rounded-2xl border border-border bg-white/70 p-3 shadow-soft">
          <div className="relative w-full">
            <Input
              placeholder="введите запрос"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-11 rounded-xl bg-muted px-4 text-sm placeholder:uppercase placeholder:text-[#9aa3ab] focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
          <Button variant="secondary" className="hidden shrink-0 sm:inline-flex">
            Найти
          </Button>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((d) => (
            <article
              key={d.id}
              className="rounded-2xl border border-border bg-gradient-to-b from-white to-[#f7fbff] p-6 text-center shadow-soft ring-1 ring-transparent transition-all hover:-translate-y-1 hover:shadow-premium hover:ring-primary/10"
            >
              <div className="mx-auto mb-4 size-16 rounded-full ring-2 ring-primary/20">
                <Image
                  src={d.avatar}
                  alt={d.name}
                  width={64}
                  height={64}
                  className="size-16 rounded-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-sm font-semibold">{d.name}</h3>
              <p className="mb-2 text-xs text-foreground/70">{d.role}</p>
              <p className="mb-2 text-xs text-foreground/70">{d.specialization}</p>
              <p className="mb-2 text-xs text-foreground/70">{d.experience}</p>
              <p className="mb-5 text-xs text-foreground/70">{d.schedule}</p>
              <Button className="w-full">Записаться</Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
