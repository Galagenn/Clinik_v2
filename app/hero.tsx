"use client";

import Link from "next/link";
import Image from "next/image";
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
import { AspectRatio } from "@/components/ui/aspect-ratio";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Имя должно содержать не менее 3 символов.",
  }),
  phoneNumber: z.string().min(11, {
    message: "В номере телефона должно быть не менее 11 цифр.",
  }),
});

export default function Hero() {
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
    <section className="pb-[2.3125rem] pt-[1.875rem] sm:pb-[4.625rem] sm:pt-[3.75rem]">
      <div className="container">
        <div className="flex flex-col-reverse items-center justify-between gap-4 rounded-[3.125rem] bg-neutral-100 pb-6 pl-[.625rem] pr-[.625rem] pt-5 min-[992px]:flex-row min-[992px]:pb-2 min-[992px]:pl-[3.3125rem]">
          <div className="min-[992px]:basis-[38.4375rem]">
            <div className="mb-[1.875rem]">
              <h1 className="mb-5 text-3xl font-light uppercase sm:mb-[1.875rem] sm:text-5xl md:text-[4rem]">
                clinic name
              </h1>
              <div className="space-y-10 text-sm sm:text-base min-[992px]:space-y-20">
                <p>
                  Добро пожаловать в нашу клинику! Мы — современное медицинское
                  учреждение, предлагающее комплексные услуги для взрослых и
                  детей. Наша миссия — обеспечивать высококачественную и
                  доступную медицинскую помощь, сохраняя здоровье и улучшая
                  качество жизни наших пациентов.
                </p>
                <p>
                  Записаться на прием легко! <br /> Мы предлагаем удобные
                  условия для записи — оставьте заявку на сайте или позвоните
                  нам. Наша команда готова помочь вам в любое время.
                </p>
              </div>
            </div>
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
          <div className="w-full max-w-[37.5rem] self-start">
            <AspectRatio ratio={600 / 578}>
              <Image
                src="/nurse.png"
                width={600}
                height={578}
                alt="hero"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
                className="h-auto w-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}
