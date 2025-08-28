"use client";

import Image from 'next/image'
import Link from 'next/link'
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";

// Схема валидации формы
const formSchema = z.object({
    name: z.string().min(3, {
        message: "Имя должно содержать не менее 3 символов.",
    }),
    phoneNumber: z.string().min(11, {
        message: "В номере телефона должно быть не менее 11 цифр.",
    }),
});

type Promo = {
  id: number;
  title: string;
  description: string;
  tag: string;
  validUntil: string;
  badge?: string;
  discount?: string;
  details: string[];
};

const categories = ["Все", "Диагностика", "Стоматология", "Анализы", "Check-Up", "Педиатрия"];

const salesData: Promo[] = [
  {
    id: 1,
    title: "Первичная консультация -20%",
    description: "Для новых пациентов — любая первичная консультация со скидкой.",
    tag: "Диагностика",
    validUntil: "до 31 декабря",
    badge: "Новое",
    discount: "-20%",
    details: [
      "Скидка применяется один раз на пациента",
      "Доступно в будние дни",
    ],
  },
  {
    id: 2,
    title: "Улыбка года: отбеливание",
    description: "Профессиональное отбеливание и чистка по специальной цене.",
    tag: "Стоматология",
    validUntil: "до 30 ноября",
    badge: "Топ",
    discount: "-15%",
    details: [
      "Включает консультацию стоматолога",
      "Противопоказания уточняйте у врача",
    ],
  },
  {
    id: 3,
    title: "-20% на анализы",
    description: "Комплекс базовых анализов со скидкой.",
    tag: "Анализы",
    validUntil: "весь декабрь",
    discount: "-20%",
    details: [
      "Готовность результатов — в течение 24 часов",
      "Взятие биоматериала входит в стоимость",
    ],
  },
  {
    id: 4,
    title: "Check‑Up: здоровое сердце",
    description: "Комплекс обследований для оценки риска ССЗ.",
    tag: "Check-Up",
    validUntil: "до 15 января",
    badge: "Пакет",
    details: [
      "ЭКГ, УЗИ, консультация кардиолога",
      "Индивидуальные рекомендации по образу жизни",
    ],
  },
  {
    id: 5,
    title: "Детская вакцинация",
    description: "Снижение цены на вакцины и консультацию педиатра.",
    tag: "Педиатрия",
    validUntil: "до 31 октября",
    discount: "-10%",
    details: [
      "Сертифицированные вакцины",
      "Сопровождение и наблюдение",
    ],
  },
];

const SalesCard = ({ promo }: { promo: Promo }) => (
  <div className="w-full max-w-[26.5rem] rounded-2xl border border-border bg-gradient-to-br from-white to-[#f2fbff] p-6 shadow-soft ring-1 ring-transparent transition-all hover:-translate-y-1 hover:shadow-premium hover:ring-primary/10">
    <div className="mb-2 flex items-center gap-2 text-xs">
      {promo.badge && <span className="rounded-full bg-primary/10 px-2 py-1 font-semibold text-primary">{promo.badge}</span>}
      {promo.discount && <span className="rounded-full bg-emerald-50 px-2 py-1 font-semibold text-emerald-600">{promo.discount}</span>}
      <span className="ml-auto text-foreground/60">{promo.validUntil}</span>
    </div>
    <h3 className="mb-1 text-lg font-semibold text-foreground">{promo.title}</h3>
    <p className="text-foreground/70">{promo.description}</p>
    <div className="mt-3 flex flex-wrap gap-2 text-[10px]">
      <span className="rounded-full bg-muted px-2 py-1 font-semibold text-foreground/70">{promo.tag}</span>
    </div>
    <ul className="mt-4 space-y-1 text-sm text-foreground/70">
      {promo.details.map((d, i) => (
        <li key={i} className="relative pl-5 before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-primary/40">{d}</li>
      ))}
    </ul>
    <div className="mt-5 flex gap-2">
      <Link href="#book" className="inline-block rounded-xl bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-secondary/90">Получить</Link>
      <Link href="/contacts" className="inline-block rounded-xl bg-white px-4 py-2 text-sm font-semibold text-primary ring-1 ring-primary/20 transition-all hover:ring-primary/30">Уточнить</Link>
    </div>
  </div>
);

export default function Sales() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const [activeCategory, setActiveCategory] = useState<string>("Все");
  const filteredPromos = useMemo(() => {
    return activeCategory === "Все" ? salesData : salesData.filter((p) => p.tag === activeCategory);
  }, [activeCategory]);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pb-12 pt-4 sm:pb-20 sm:pt-8">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-[#f6fbff] to-[#e8f7ff] p-6 shadow-premium min-[992px]:p-10">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background-image:radial-gradient(900px_450px_at_80%_20%,rgba(42,157,244,0.18),transparent),radial-gradient(700px_350px_at_20%_80%,rgba(0,191,166,0.16),transparent)]" />
            <div className="grid items-center gap-8 min-[900px]:grid-cols-2">
              <div>
                <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">International Clinic of Asia</h1>
                <p className="mb-4 text-lg text-foreground/70">Акции в нашей клинике</p>
                <p className="text-foreground/80 sm:text-lg">
                  Мы заботимся о вашем здоровье и делаем услуги еще доступнее. Следите за актуальными предложениями и получайте выгоду на диагностику, лечение и профилактику.
                </p>
                <div className="mt-6 flex gap-3">
                  <Link href="#promos" className="rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-premium transition-transform hover:-translate-y-0.5 hover:bg-primary/90">Смотреть акции</Link>
                  <Link href="/contacts" className="rounded-xl bg-white px-6 py-3 font-semibold text-primary ring-1 ring-primary/20 transition-all hover:ring-primary/30">Связаться</Link>
                </div>
              </div>
              <div className="relative mx-auto h-[260px] w-full max-w-[28rem] sm:h-[320px]">
                <Image
                  src="/sales/image.png"
                  alt="Акции и скидки"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Фильтры */}
      <section className="bg-muted/40 pb-6 pt-10 sm:pb-12 sm:pt-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">International Clinic of Asia</h2>
            <p className="mb-4 text-sm text-foreground/60">Все акции - выгодные предложения на медицинские услуги</p>
                <p className="text-foreground/60">Всего: {filteredPromos.length}</p>
              </div>
              <Link href="/" className="hidden rounded-xl bg-primary px-5 py-2 font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-primary/90 sm:inline-block">На главную</Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold ${activeCategory === c ? "bg-primary text-white" : "bg-white text-foreground/70 ring-1 ring-border hover:bg-muted"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Блок с карточками акций */}
      <section id="promos" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div className="text-sm text-foreground/60">Показываем: {filteredPromos.length}</div>
          </div>
          <div className="grid place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPromos.map((promo) => (
              <SalesCard key={promo.id} promo={promo} />
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-4xl text-center">
            <p className="mb-8 text-foreground/80">
              International Clinic of Asia — наши акции — это возможность позаботиться о здоровье всей семьи с комфортом и выгодой. Следите за обновлениями или свяжитесь с нами, чтобы узнать больше о текущих предложениях.
            </p>

            <div className="mx-auto flex w-full max-w-[663px] flex-col items-center justify-between gap-4 min-[580px]:flex-row">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="h-auto w-full rounded-xl bg-primary/80 px-6 py-4 text-base font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-primary min-[580px]:w-[15.25rem]">
                    Записаться на прием
                  </Button>
                </DialogTrigger>
                <DialogContent className="border-border bg-white sm:rounded-xl">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">
                      Записаться к нам:
                    </DialogTitle>
                  </DialogHeader>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="mb-4">
                            <FormControl>
                              <Input
                                placeholder="Имя"
                                {...field}
                                className="rounded-xl border-input font-normal placeholder:text-[#9aa3ab] focus-visible:ring-2 focus-visible:ring-primary"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem className="mb-6">
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="Телефон номера"
                                {...field}
                                className="rounded-xl border-input font-normal placeholder:text-[#9aa3ab] focus-visible:ring-2 focus-visible:ring-primary"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full rounded-xl bg-secondary text-lg font-semibold text-white shadow-premium transition-transform hover:-translate-y-0.5 hover:bg-secondary/90"
                      >
                        отправить
                      </Button>
                    </form>
                  </Form>
                  <DialogFooter>
                    <p className="text-center text-[.75rem] text-foreground/60">
                      Используя наш сайт, вы подтверждаете согласие с политикой обработки персональных данных.
                    </p>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Link
                href="/contacts"
                className="inline-block w-full rounded-xl bg-white px-6 py-4 text-center font-semibold text-primary ring-1 ring-primary/20 transition-all hover:ring-primary/30 min-[580px]:w-[15.25rem]"
              >
                Консультация
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Условия и FAQ */}
      <section className="pb-20">
        <div className="container">
          <div className="mx-auto !max-w-[88rem]">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">Условия</h2>
            <ul className="grid gap-2 text-sm text-foreground/70 md:grid-cols-2">
              <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-primary/40">Скидки не суммируются с другими предложениями</li>
              <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-primary/40">Количество мест по акциям ограничено</li>
              <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-primary/40">Подробности уточняйте по телефону клиники</li>
              <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-primary/40">Точные цены зависят от диагноза и объема лечения</li>
            </ul>
            <h2 className="mb-4 mt-10 text-2xl font-semibold tracking-tight sm:text-3xl">FAQ</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                { q: "Как воспользоваться акцией?", a: "Выберите предложение и оставьте заявку — администратор свяжется с вами." },
                { q: "Нужна предоплата?", a: "Нет, достаточно записаться и прийти в назначенное время." },
                { q: "Можно подарочный сертификат?", a: "Да, оформим сертификат на выбранную услугу." },
                { q: "Есть рассрочка?", a: "Доступна у партнеров — уточняйте у администратора." },
              ].map((item, i) => (
                <details key={i} className="group rounded-2xl border border-border bg-white p-5">
                  <summary className="cursor-pointer list-none text-base font-medium">{item.q}</summary>
                  <div className="mt-2 text-sm text-foreground/70">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
