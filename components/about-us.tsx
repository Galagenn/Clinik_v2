"use client";

import Image from 'next/image'
import Link from 'next/link'
import styles from './about-us.module.css'
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

export default function AboutUs() {
  // Инициализация формы
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
    },
  });

  // Обработчик отправки формы
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="py-10 sm:py-16">
      <div className="container mx-auto px-4">
        {/* Навигационная цепочка */}
        <div className="mb-8">
          <p className="text-gray-600">
            <Link href="/" className="hover:underline">Главная страница</Link>
            <span className="mx-2">/</span>
            <span>О Клинике</span>
          </p>
        </div>


        {/* Основной контент */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-center mb-10 sm:mb-16">
          <div className="lg:col-span-8">
            <h1 className={`${styles.title} mb-16 font-bold`}>
              О нашей клинике
            </h1>
            <p className={`${styles.text} text-sm sm:text-base`}>
              Наша клиника — это современный медицинский центр, предоставляющий широкий спектр услуг для вашего здоровья и благополучия. Мы объединяем опытных специалистов, передовые технологии и индивидуальный подход к каждому пациенту. Основные принципы нашей работы — профессионализм, забота о пациентах и постоянное стремление к совершенству в медицинских услугах.
            </p>
          </div>
          <div 
            className="lg:col-span-4 relative mx-auto lg:mx-0" 
            style={{ 
              maxWidth: '402px', 
              maxHeight: '313px', 
              height: '313px',
              width: '100%'  // добавляем для лучшего контроля ширины
            }}
          >
            <Image
              src="/about-us/clinic-reseption.jpg"
              alt="Ресепшн клиники"
              fill
              sizes="(max-width: 768px) 100vw, 32vw"
              quality={100}
              priority
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Галерея изображений */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
          <div className="relative mx-auto" style={{ maxWidth: '402px', maxHeight: '313px', height: '313px', width: '100%' }}>
            <Image
              src="/about-us/clinic-corridor.jpg"
              alt="Коридор клиники"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              quality={100}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative mx-auto" style={{ maxWidth: '402px', maxHeight: '313px', height: '313px', width: '100%' }}>
            <Image
              src="/about-us/doctors-office.jpg"
              alt="Кабинет врача"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              quality={100}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative mx-auto" style={{ maxWidth: '402px', maxHeight: '313px', height: '313px', width: '100%' }}>
            <Image
              src="/about-us/clinic-workspace.jpg"
              alt="Рабочее пространство"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              quality={100}
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Статистика */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center relative" 
          style={{ 
            padding: '12.5% 0',
           }}
        >
          {/* Эффект свечения */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
            style={{
              background: 'radial-gradient(rgb(126, 196, 229) -200%, transparent 70%)',
            }}
          />

          {/* Контент */}
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-normal text-gray-800 mb-1 sm:mb-2">10+</h2>
            <p className="text-xs sm:text-base text-gray-600">лет работы клиники</p>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-normal text-gray-800 mb-1 sm:mb-2">30+</h2>
            <p className="text-xs sm:text-base text-gray-600">квалифицированных специалистов</p>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-normal text-gray-800 mb-1 sm:mb-2">5000+</h2>
            <p className="text-xs sm:text-base text-gray-600">довольных пациентов</p>
          </div>
        </div>

        {/* Преимущества */}
        <div className="mt-20">
          <div className="mb-6 sm:mb-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold uppercase tracking-wide">Наши преимущества</h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded bg-[#648eff] sm:h-[5px]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Квалифицированные специалисты",
                description: "В нашей команде работают врачи с многолетним опытом и высокой квалификацией. Они регулярно проходят обучение и повышают квалификацию."
              },
              {
                title: "Современное оборудование",
                description: "Клиника оснащена высокотехнологичным оборудованием, позволяющим проводить точную диагностику и эффективное лечение."
              },
              {
                title: "Индивидуальный подход",
                description: "Мы уделяем внимание каждому пациенту, стараемся учитывать все его особенности и предпочтения для эффективного и комфортного лечения."
              },
              {
                title: "Комфортные условия",
                description: "Мы создали уютную атмосферу, чтобы ваше пребывание в клинике было максимально удобным и спокойным."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 sm:p-8 mx-auto w-full"
                style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  boxShadow: '0px 4px 4.8px 0px rgba(0, 0, 0, 0.25)',
                  maxWidth: '300px',
                  borderRadius: '40px',
                  height: '300px'
                }}
              >
                <h3 
                  className="text-center mb-2 sm:mb-3"
                  style={{ 
                    fontFamily: 'Inter',
                    fontSize: '18px',
                    fontWeight: 500,
                    lineHeight: '22px'
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-center text-gray-600"
                  style={{ 
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 300,
                    lineHeight: '20px',
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none'
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Дополнительная информация с кнопками */}
        <div 
          className={styles.backgroundBlock}
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01)), url("about-us/appointment-back.jpg")',
          }}
        >
          <p className={styles.backgroundText}>
            Мы предлагаем услуги в областях терапии, хирургии, стоматологии, диагностики и многих других направлениях.
            <br />            
            Наша цель — помочь вам сохранить и укрепить здоровье, обеспечить качественное медицинское обслуживание и доверительные отношения с каждым пациентом.
          </p>
          
          <p className={`${styles.backgroundText} mb-12`}>
            Приходите к нам за здоровьем, и мы сделаем все, чтобы вы чувствовали себя в надежных руках!
          </p>

          <div className="flex flex-col items-center gap-x-10 gap-y-4 min-[580px]:flex-row">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="h-auto w-full rounded-[.9375rem] bg-[#648eff]/[.7] py-4 text-base font-medium shadow-[0_0_20px_0_rgba(144,173,252,0.63)] hover:bg-[#648eff] min-[580px]:w-[15.25rem]">
                    Записаться на прием
                  </Button>
                </DialogTrigger>
                <DialogContent className="border-black/35 bg-neutral-200/35 sm:rounded-[.9375rem]">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-normal">
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
                                className="rounded-[1.25rem] border-none font-normal placeholder:text-[#c0b8b8]"
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
                                className="rounded-[1.25rem] border-none font-normal placeholder:text-[#c0b8b8]"
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
  )
}
