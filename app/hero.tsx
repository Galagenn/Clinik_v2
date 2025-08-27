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
    <section className="pb-8 pt-6 sm:pb-20 sm:pt-12">
      <div className="container">
        <div className="relative flex flex-col-reverse items-center justify-between gap-6 overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-[#f6fbff] to-[#e8f7ff] pb-6 pl-2 pr-2 pt-5 shadow-premium min-[992px]:flex-row min-[992px]:pb-4 min-[992px]:pl-12">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background-image:radial-gradient(900px_450px_at_80%_20%,rgba(42,157,244,0.20),transparent),radial-gradient(700px_350px_at_20%_80%,rgba(0,191,166,0.18),transparent)]" />
          <div className="min-[992px]:basis-[38.4375rem]">
            <div className="mb-[1.875rem]">
              <h1 className="mb-5 text-4xl font-extrabold tracking-tight sm:mb-8 sm:text-6xl md:text-[4.25rem]">
                Современная клиника для всей семьи
              </h1>
              <div className="space-y-6 text-sm leading-7 text-foreground/80 sm:text-base min-[992px]:space-y-10">
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
            <div className="flex flex-col items-center gap-x-4 gap-y-4 min-[580px]:flex-row">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="h-auto w-full rounded-xl bg-primary py-4 text-base font-semibold text-white shadow-premium transition-transform hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-primary/90 min-[580px]:w-[15.25rem]">
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
                          <FormItem className="mb-[2.625rem]">
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
                        className="w-full rounded-xl bg-secondary text-lg font-semibold text-white shadow-premium hover:-translate-y-0.5 hover:bg-secondary/90"
                      >
                        отправить
                      </Button>
                    </form>
                  </Form>
                  <DialogFooter>
                    <p className="text-center text-[.75rem] text-foreground/60">
                      Используя наш сайт, вы подтверждаете согласие с этой
                      политикой обработки персональных данных и разрешаете нам
                      обрабатывать ваши данные в соответствии с её положениями.
                    </p>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Link
                href="/"
                className="inline-block w-full rounded-xl bg-white/80 py-4 text-center font-semibold text-primary ring-1 ring-primary/20 transition-all hover:bg-white hover:ring-primary/30 min-[580px]:w-[15.25rem]"
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
                className="h-auto w-full rounded-[1.5rem] object-cover shadow-sm"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}
