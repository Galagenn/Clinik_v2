"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { StaticImageData } from "next/image";
import avatar from "/public/testimonials/avatar.jpg";
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

interface Doctor {
    name: string;
    position: string;
    specialization: string;
    experience: string;
    schedule: string;
    image: StaticImageData | string; // Поддержка и локальных изображений, и URL
}

const doctors: Doctor[] = [
    {
        name: 'Анна Сергеевна Морозова',
        position: 'терапевт, врач высшей категории',
        specialization: 'Специализация "лечение хронических заболеваний, гастроэнтерология"',
        experience: 'Опыт работы: 15 лет',
        schedule: 'График приема: Пн/Пт: 09:00',
        image: avatar
    },
    {
        name: 'Анна Сергеевна Морозова',
        position: 'терапевт, врач высшей категории',
        specialization: 'Специализация "лечение хронических заболеваний, гастроэнтерология"',
        experience: 'Опыт работы: 15 лет',
        schedule: 'График приема: Пн/Пт: 09:00',
        image: avatar
    },
    {
        name: 'Анна Сергеевна Морозова',
        position: 'терапевт, врач высшей категории',
        specialization: 'Специализация "лечение хронических заболеваний, гастроэнтерология"',
        experience: 'Опыт работы: 15 лет',
        schedule: 'График приема: Пн/Пт: 09:00',
        image: avatar
    },
    {
        name: 'Анна Сергеевна Морозова',
        position: 'терапевт, врач высшей категории',
        specialization: 'Специализация "лечение хронических заболеваний, гастроэнтерология"',
        experience: 'Опыт работы: 15 лет',
        schedule: 'График приема: Пн/Пт: 09:00',
        image: avatar
    }
];

interface Direction {
    title: string;
    description: string;
}

const directions: Direction[] = [
    {
        title: 'Терапевтическая стоматология',
        description: 'Это лечение заболеваний зубов, таких как кариес, пульпит и периодонтит.'
    },
    {
        title: 'Ортопедическая стоматология',
        description: 'Она направлена на восстановление утраченных зубов и исправление дефектов зубного ряда с помощью протезов, коронок, мостов и имплантатов.'
    },
    {
        title: 'Ортодонтия',
        description: 'Сфера, связанная с исправлением прикуса и выравниванием зубов. Ортодонты используют брекеты, элайнеры и другие устройства.'
    },
    {
        title: 'Хирургическая стоматология',
        description: 'Здесь проводится удаление зубов, операции по имплантации и лечение воспалительных процессов в полости рта.'
    },
    {
        title: 'Детская стоматология',
        description: 'Забота о здоровье зубов у детей, начиная с момента появления первых зубов.'
    }
];

interface DentalCare {
    tip: string;
}

const dentalCareAdvices: DentalCare[] = [
    {
        tip: 'Чистите зубы дважды в день щеткой средней жесткости.'
    },
    {
        tip: 'Используйте зубную нить и ополаскиватели для рта.'
    },
    {
        tip: 'Ограничьте употребление сахара и газированных напитков.'
    },
    {
        tip: 'Посещайте стоматолога не реже двух раз в год для профилактики.'
    }
];

// Добавить схему валидации
const formSchema = z.object({
    name: z.string().min(3, {
        message: "Имя должно содержать не менее 3 символов.",
    }),
    phoneNumber: z.string().min(11, {
        message: "В номере телефона должно быть не менее 11 цифр.",
    }),
});

const Stomatology: React.FC = () => {
    // Добавить хук формы
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phoneNumber: "",
        },
    });

    // Добавить обработчик отправки
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <>
            {/* Hero */}
            <section className="rounded-3xl bg-gradient-to-br from-white via-[#f6fbff] to-[#eaf6ff] px-4 py-8 shadow-premium sm:px-6">
                <div className="pointer-events-none relative -z-10 opacity-70 [background-image:radial-gradient(900px_450px_at_80%_20%,rgba(42,157,244,0.14),transparent),radial-gradient(700px_350px_at_20%_80%,rgba(0,191,166,0.12),transparent)]" />
                <div className="mx-auto grid max-w-[1340px] items-center gap-8 lg:grid-cols-2">
                    <div className="p-3 lg:p-10">
                        <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
                            Стоматология: здоровье зубов и десен без стресса
                        </h1>
                        <p className="mt-3 text-sm text-foreground/70 sm:text-base">
                            Диагностика, терапия, ортодонтия и хирургия в одном месте. Современное оборудование, внимательные врачи, прозрачные цены.
                        </p>
                        <div className="mt-6 flex flex-col items-center gap-4 min-[580px]:flex-row">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="h-auto w-full rounded-xl bg-primary px-6 py-4 text-base font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-primary/90 min-[580px]:w-[15.25rem]">
                                        Записаться на прием
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="border-border bg-white sm:rounded-xl">
                                    <DialogHeader>
                                        <DialogTitle className="text-xl font-semibold">Записаться к нам:</DialogTitle>
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
                                            <Button type="submit" className="w-full rounded-xl bg-secondary text-lg font-semibold text-white shadow-premium transition-transform hover:-translate-y-0.5 hover:bg-secondary/90">
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
                    <div className="relative h-[260px] w-full sm:h-[320px]">
                        <Image
                            src="/stamatology/slide-Photoroom.png"
                            alt="Стоматологические инструменты"
                            fill
                            sizes="(max-width: 1024px) 100vw, 56vw"
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Doctors */}
            <section className="mt-12 px-4 sm:px-6">
                <div className="mx-auto max-w-[1340px]">
                    <h2 className="mb-6 text-2xl font-extrabold tracking-tight sm:text-3xl">International Clinic of Asia</h2>
                    <p className="mb-4 text-sm text-foreground/60">Наши стоматологи - профессиональное лечение зубов и полости рта</p>
                    <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {doctors.map((doctor, index) => (
                            <div key={index} className="flex h-auto w-full max-w-[300px] flex-col items-center rounded-2xl border border-border bg-white p-6 shadow-soft">
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    width={100}
                                    height={100}
                                    className="mb-4 h-[100px] w-[100px] rounded-full object-cover"
                                />
                                <h3 className="mb-1 text-center text-[18px] font-semibold sm:text-[22px]">
                                    {doctor.name}
                                </h3>
                                <p className="mb-1 text-center text-xs text-foreground/70 sm:text-sm">
                                    {doctor.position}
                                </p>
                                <p className="mt-3 mb-2 text-center text-xs text-foreground/70 sm:text-sm">
                                    {doctor.specialization}
                                </p>
                                <p className="mb-2 text-center text-xs text-foreground/70 sm:text-sm">{doctor.experience}</p>
                                <p className="mb-4 text-center text-xs text-foreground/70 sm:text-sm">{doctor.schedule}</p>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className="mt-auto h-[46px] w-full max-w-[198px] rounded-xl bg-primary text-white transition-colors hover:bg-primary/90">
                                            Записаться
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="border-border bg-white sm:rounded-xl">
                                        <DialogHeader>
                                            <DialogTitle className="text-xl font-semibold">Записаться к нам:</DialogTitle>
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
                                                <Button type="submit" className="w-full rounded-xl bg-secondary text-lg font-semibold text-white shadow-premium transition-transform hover:-translate-y-0.5 hover:bg-secondary/90">
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Directions */}
            <section className="mt-12 px-4 sm:px-6">
                <div className="mx-auto max-w-[1340px]">
                    <h2 className="mb-6 text-2xl font-extrabold tracking-tight sm:text-3xl">Направления</h2>
                    <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-5">
                        {directions.map((direction, index) => (
                            <div key={index} className="h-auto w-full max-w-[238px] rounded-2xl border border-border bg-white p-6 shadow-soft">
                                <h3 className="mb-2 text-[14px] font-semibold sm:text-[16px]">{direction.title}</h3>
                                <p className="text-[14px] text-foreground/70 sm:text-[16px]">{direction.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="mt-12 px-4 sm:px-6">
                <div className="mx-auto max-w-[1340px]">
                    <h2 className="mb-4 text-2xl font-extrabold tracking-tight sm:text-3xl">Цены</h2>
                    <div className="overflow-hidden rounded-2xl border border-border">
                        <div className="grid grid-cols-3 bg-muted px-4 py-3 text-sm text-foreground/60">
                            <div>Услуга</div>
                            <div>Описание</div>
                            <div className="text-right">Цена</div>
                        </div>
                        {[ 
                            ["Первичная консультация", "Осмотр, рекомендации", "7 000 тг"],
                            ["Гигиена полости рта", "Профессиональная чистка", "18 000 тг"],
                            ["Пломба композитная", "Восстановление формы", "22 000 тг"],
                            ["Отбеливание", "Профессиональная система", "45 000 тг"],
                        ].map((row, i) => (
                            <div key={i} className="grid grid-cols-3 items-center px-4 py-4 text-sm ring-1 ring-border/60 first:ring-0">
                                <div className="font-medium">{row[0]}</div>
                                <div className="text-foreground/70">{row[1]}</div>
                                <div className="text-right font-semibold">{row[2]}</div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-2 text-xs text-foreground/60">Итоговая стоимость зависит от диагноза и объема лечения.</p>
                </div>
            </section>

            {/* Tips */}
            <section className="mt-12 px-4 sm:px-6">
                <div className="mx-auto flex max-w-[1340px] flex-col items-start justify-between gap-8 lg:flex-row lg:gap-[3.51%]">
                    <div className="w-full lg:w-[41.3%]">
                        <Image
                            src="/stamatology/teeth.png"
                            alt="Уход за зубами"
                            width={750}
                            height={280}
                            className="w-full object-contain"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="mb-4 text-2xl font-extrabold tracking-tight sm:text-3xl">Советы по уходу</h2>
                        <div className="flex flex-col gap-4 lg:gap-5">
                            {dentalCareAdvices.map((advice, index) => (
                                <div key={index} className="flex min-h-[62px] w-full max-w-[759px] items-start rounded-2xl bg-gray-50 p-4">
                                    <span className="mr-3 flex-shrink-0 text-blue-400">•</span>
                                    <p className="text-sm text-foreground/70 sm:text-base">{advice.tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="mt-12 mb-24 px-4 sm:px-6">
                <div className="mx-auto max-w-[1340px]">
                    <h2 className="mb-4 text-2xl font-extrabold tracking-tight sm:text-3xl">FAQ</h2>
                    <div className="grid gap-3 md:grid-cols-2">
                        {[
                            { q: "Больно ли лечить кариес?", a: "Мы используем современную анестезию и щадящие методики — лечение проходит комфортно." },
                            { q: "Сколько длится прием?", a: "Первичный прием 20–40 минут, в зависимости от задачи." },
                            { q: "Нужна ли подготовка к чистке?", a: "Нет, достаточно стандартной гигиены. Врач все объяснит на месте." },
                            { q: "Делаете ли лечение в рассрочку?", a: "Доступна у партнеров. Уточняйте у администратора." },
                        ].map((item, i) => (
                            <details key={i} className="group rounded-2xl border border-border p-5">
                                <summary className="cursor-pointer list-none text-base font-medium">{item.q}</summary>
                                <div className="mt-2 text-sm text-foreground/70">{item.a}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Stomatology;
