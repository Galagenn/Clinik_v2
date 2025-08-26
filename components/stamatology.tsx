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
            <section className="bg-[#F5F5F5] rounded-[15px] max-w-[1340px] mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
                    <div className="w-full lg:w-[44%] p-3 lg:p-[45px_0_45px_45px]">
                        <h1 className="font-montserrat text-[18px] sm:text-[20px] leading-[22px] sm:leading-[24.38px] font-light mb-6 sm:mb-[60px]">
                            Стоматология: забота о здоровье зубов и десен
                        </h1>

                        <p className="font-montserrat text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24.38px] font-extralight text-gray-600 mb-4 sm:mb-6 ">
                            Стоматология — это отрасль медицины, посвященная диагностике, лечению и профилактике заболеваний зубов, десен и полости рта.
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

                    <div className="relative w-full lg:w-[56%] h-[280px]">
                        <img
                            src="/stamatology/slide-Photoroom.png"
                            alt="Стоматологические инструменты"
                            className="object-contain w-full h-full"
                        />
                    </div>
                </div>
            </section>


            <section className="mt-16 px-4 sm:px-6">
                <h2 className="text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24.38px] mb-6 sm:mb-8 font-montserrat font-extralight">
                    Наши специалисты по стоматологии
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="bg-[#F5F5F5] p-6 rounded-[15px] flex flex-col items-center w-full max-w-[300px] h-auto lg:h-[527px]">
                            <Image
                                src={doctor.image}
                                alt={doctor.name}
                                width={100}
                                height={100}
                                className="rounded-full mb-4 object-cover w-[100px] h-[100px]"
                            />

                            <h3 className="font-montserrat font-extralight text-[18px] sm:text-[22px] leading-[22px] sm:leading-[26.82px] text-center mb-1 sm:mb-2">
                                {doctor.name}
                            </h3>

                            <p className="font-montserrat font-extralight text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.5px] text-gray-600 text-center mb-1 sm:mb-2 doctor-position">
                                {doctor.position}
                            </p>

                            <p className="font-montserrat font-extralight text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.5px] text-gray-600 text-center mb-2 doctor-specialization mt-3 sm:mt-[20px]">
                                {doctor.specialization}
                            </p>

                            <p className="font-montserrat font-extralight text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.5px] text-gray-600 text-center mb-2 doctor-experience">
                                {doctor.experience}
                            </p>

                            <p className="font-montserrat font-extralight text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.5px] text-gray-600 text-center mb-3 sm:mb-4">
                                {doctor.schedule}
                            </p>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="max-w-[198px] h-[51px] w-full flex items-center justify-center bg-[#648EFFB2] text-white rounded-[10px] hover:bg-blue-500 transition-colors mt-[37px]">
                                        Записаться
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
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16 px-4 sm:px-6">
                <h2 className="font-montserrat font-extralight text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24.38px] mb-6 sm:mb-8">
                    Основные направления стоматологии:
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 justify-items-center">
                    {directions.map((direction, index) => (
                        <div key={index} className="bg-[#F4F4F4] p-6 rounded-[15px] w-full max-w-[238px] h-auto lg:h-[294px] shadow-[0px_4px_4px_0px_#00000040]">
                            <h3 className="font-montserrat font-extralight text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.5px] mb-2 sm:mb-3">
                                {direction.title}
                            </h3>

                            <p className="font-montserrat font-extralight text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19.5px] text-gray-600">
                                {direction.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-16 mb-[120px] px-4 sm:px-6">
                <h2 className="font-montserrat font-extralight text-[16px] sm:text-[20px] leading-[20px] sm:leading-[24.38px] mb-6 sm:mb-8">
                    Советы по уходу за зубами:
                </h2>

                <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-[3.51%]">
                    <div className="w-full lg:w-[41.3%] flex justify-center lg:justify-start">
                        <Image
                            src="/stamatology/teeth.png"
                            alt="Уход за зубами"
                            width={750}
                            height={280}
                            className="object-contain w-full"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col gap-4 lg:gap-[20px]">
                            {dentalCareAdvices.map((advice, index) => (
                                <div 
                                    key={index} 
                                    className="bg-gray-50 p-4 rounded-[10px] flex items-start w-full max-w-[759px] min-h-[62px]"
                                >
                                    <span className="text-blue-400 mr-3 flex-shrink-0">•</span>
                                    <p className="text-gray-600 font-montserrat font-extralight text-[14px] sm:text-[16px]">{advice.tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Stomatology;
