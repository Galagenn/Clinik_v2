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
    style={{
      backdropFilter: 'blur(44.5px)',
      boxShadow: '0px 0px 19.8px 6px #E0E0E06B inset',
      maxWidth: '424px',
      height: '162px',
      width: '100%',
      borderRadius: '15px'
    }}
    className="bg-white p-6"
  >
    <h3 className="sales-card-title mb-4 font-semibold">{title}</h3>
    <p className="sales-card-text">{description}</p>
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Навигационная цепочка */}
          <div className="mb-8">
            <p className="text-gray-600">
              <Link href="/" className="hover:underline">Главная страница</Link>
              <span className="mx-2">/</span>
              <span>Акции</span>
            </p>
          </div>
          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 
                style={{ 
                  fontFamily: 'Montserrat',
                  fontSize: '24px',
                  fontWeight: 400,
                  lineHeight: '39.01px',
                  textAlign: 'left',
                  background: 'transparent'
                }}
                className="mb-8"
              >
                Акции в нашей клинике
              </h1>
              <p 
                style={{ 
                  fontFamily: 'Montserrat',
                  fontSize: '16px',
                  fontWeight: 200,
                  lineHeight: '29.26px',
                  textAlign: 'left'
                }}
              >
                Мы заботимся о вашем здоровье и стремимся сделать наши услуги еще доступнее! Поэтому в клинике регулярно действуют акции, которые помогут вам сэкономить на диагностике, лечении и профилактике заболеваний. Вот некоторые из наших актуальных предложений.
              </p>
            </div>

            <div className="relative h-[400px]">
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
      </section>

      {/* Интегрированный компонент Offers */}
      <section className="bg-neutral-100 pb-[1.125rem] pt-[3.75rem]">
        <div className="container">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="mb-10 md:mb-20 lg:mb-32">
              <div>
                <h2 className="mb-12 text-2xl sm:text-3xl md:mb-[4.625rem] md:text-5xl">
                  Акции и специальные предложения
                </h2>
                <div className="text-base sm:text-lg md:text-2xl">
                  <p>Первичная консультация со скидкой</p>
                  <ul>
                    <li className="relative pl-9 before:absolute before:left-[1.125rem] before:content-['•']">
                      Описание: Получите скидку 20% на первую консультацию у
                      любого специалиста клиники!
                    </li>
                    <li className="relative pl-9 before:absolute before:left-[1.125rem] before:content-['•']">
                      Детали: Акция доступна новым пациентам. Узнайте о своем
                      здоровье и получите профессиональные рекомендации по
                      специальной цене.
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 
            style={{ 
              fontFamily: 'Montserrat',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '29.26px'
            }}
            className="mb-8"
          >
            Всего акции
          </h2>
          <p className="mb-12">4</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {salesData.map((sale, index) => (
              <div key={index} className="w-full flex justify-center">
                <SalesCard 
                  title={sale.title}
                  description={sale.description}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-16 max-w-4xl mx-auto">
            <p 
              className="mb-12"
              style={{ 
                fontFamily: 'Montserrat',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '29.26px',
                textAlign: 'center'
              }}
            >
              Наши акции — это возможность позаботиться о здоровье всей семьи с комфортом и выгодой. 
              Следите за обновлениями на сайте клиники или звоните нам, чтобы узнать больше о текущих 
              предложениях и акциях.
            </p>

            <div className="flex flex-col items-center gap-x-10 gap-y-4 min-[580px]:flex-row justify-between max-w-[663px] w-full mx-auto">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="h-auto w-full rounded-[.9375rem] bg-[#648eff]/[.7] py-4 text-base font-medium shadow-[0_0_20px_0_rgba(144,173,252,0.63)] hover:bg-[#648eff] min-[580px]:w-[15.25rem]">
                    Записаться на прием
                  </Button>
                </DialogTrigger>
                <DialogContent className="border-black/35 bg-neutral-200/35 sm:rounded-[.9375rem]">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-light">
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
                                className="rounded-[1.25rem] border-none font-light placeholder:text-[#c0b8b8]"
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
                          <FormItem className="mb-[2.625rem]">
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="Телефон номера"
                                {...field}
                                className="rounded-[1.25rem] border-none font-light placeholder:text-[#c0b8b8]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full rounded-[1.25rem] bg-[#fffcfc] text-lg font-bold uppercase text-black hover:bg-neutral-200"
                      >
                        отправить
                      </Button>
                    </form>
                  </Form>
                  <DialogFooter>
                    <p className="text-center text-[.625rem] font-light">
                      Используя наш сайт, вы подтверждаете согласие с этой
                      политикой обработки персональных данных и разрешаете нам
                      обрабатывать ваши данные в соответствии с её положениями.
                    </p>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Link
                href="/"
                className="inline-block w-full rounded-[.9375rem] bg-[#648eff]/[.7] py-4 text-center font-medium text-white shadow-[0_0_20px_0_rgba(144,173,252,0.63)] transition-colors hover:bg-[#648eff] min-[580px]:w-[15.25rem]"
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
