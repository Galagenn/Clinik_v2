"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
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

// Схема валидации формы
const formSchema = z.object({
    name: z.string().min(3, {
        message: "Имя должно содержать не менее 3 символов.",
    }),
    phoneNumber: z.string().min(11, {
        message: "В номере телефона должно быть не менее 11 цифр.",
    }),
});

const salesData = [
  {
    title: '"С заботой о вашем здоровье!"',
    description: '– скидки на первичные консультации или обследования.'
  },
  {
    title: '"Улыбка года"',
    description: '– скидки на стоматологическое лечение и отбеливание.'
  },
  {
    title: 'Весь декабрь',
    description: '- Скидка 20% на анализы'
  },
  {
    title: '"Здоровье каждому!"',
    description: '– специальная цена на комплексные программы лечения.'
  },
  {
    title: '"Малышам – лучшее"',
    description: '– сниженные цены на услуги для детей (педиатрия, вакцинация и т.д.).'
  }
];

const SalesCard = ({ title, description }: { title: string; description: string }) => (
  <div 
    className="w-full max-w-[26.5rem] rounded-2xl border border-border bg-gradient-to-br from-white to-[#f2fbff] p-6 shadow-soft ring-1 ring-transparent transition-all hover:-translate-y-1 hover:shadow-premium hover:ring-primary/10"
  >
    <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
    <p className="text-foreground/70">{description}</p>
    <div className="mt-5">
      <Link href="/sales" className="inline-block rounded-xl bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-secondary/90">
        Подробнее
      </Link>
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

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pb-12 pt-8 sm:pb-20 sm:pt-14">
        <div className="container mx-auto px-4">
          {/* Навигационная цепочка */}
          <div className="mb-6 text-sm text-foreground/60">
            <Link href="/" className="hover:underline">Главная страница</Link>
            <span className="mx-2">/</span>
            <span>Акции</span>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-[#f6fbff] to-[#e8f7ff] p-6 shadow-premium min-[992px]:p-10">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background-image:radial-gradient(900px_450px_at_80%_20%,rgba(42,157,244,0.18),transparent),radial-gradient(700px_350px_at_20%_80%,rgba(0,191,166,0.16),transparent)]" />
            <div className="grid items-center gap-8 min-[900px]:grid-cols-2">
              <div>
                <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Акции в нашей клинике</h1>
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

      {/* Слайдер с предложениями */}
      <section className="bg-muted/40 pb-6 pt-10 sm:pb-12 sm:pt-16">
        <div className="container">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="mb-10 md:mb-16 lg:mb-20">
              <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-border">
                <h2 className="mb-6 text-2xl font-extrabold tracking-tight sm:text-3xl md:mb-10 md:text-5xl">
                  Акции и специальные предложения
                </h2>
                <div className="text-base text-foreground/80 sm:text-lg md:text-2xl">
                  <p className="font-medium text-foreground">Первичная консультация со скидкой</p>
                  <ul className="mt-3 space-y-2">
                    <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:size-2 before:rounded-full before:bg-primary/40">
                      Описание: Получите скидку 20% на первую консультацию у любого специалиста клиники!
                    </li>
                    <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:size-2 before:rounded-full before:bg-primary/40">
                      Детали: Акция доступна новым пациентам. Узнайте о своем здоровье и получите профессиональные рекомендации по специальной цене.
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-10 md:mb-20 lg:mb-32">2</SwiperSlide>
            <SwiperSlide className="mb-10 md:mb-20 lg:mb-32">3</SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Блок с карточками акций */}
      <section id="promos" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">Все акции</h2>
              <p className="text-foreground/60">Всего: {salesData.length}</p>
            </div>
            <Link href="/" className="hidden rounded-xl bg-primary px-5 py-2 font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-primary/90 sm:inline-block">На главную</Link>
          </div>

          <div className="grid place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {salesData.map((sale, index) => (
              <SalesCard key={index} title={sale.title} description={sale.description} />
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-4xl text-center">
            <p className="mb-8 text-foreground/80">
              Наши акции — это возможность позаботиться о здоровье всей семьи с комфортом и выгодой. Следите за обновлениями или свяжитесь с нами, чтобы узнать больше о текущих предложениях.
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
    </div>
  )
}
