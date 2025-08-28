import Link from "next/link";
import Image from "next/image";
import logo from "/public/enroll/logo.png";
import nurse from "/public/nurse.png";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { AspectRatio } from "./ui/aspect-ratio";

export default function Enroll() {
  return (
    <section className="pb-12 pt-6 sm:pb-20 sm:pt-12">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 rounded-[2rem] bg-muted p-4 sm:px-6 sm:py-10 md:px-12 lg:items-end min-[1024px]:flex-row">
          <div className="lg:basis-[38.4375rem]">
            <div className="mb-6 flex items-center gap-x-3 sm:mb-10 sm:gap-x-8">
              <Link href="/" className="w-16 sm:w-20 md:w-auto">
                <Image src={logo} alt="логотип" />
              </Link>
              <h2 className="max-w-[28rem] text-2xl font-semibold tracking-tight min-[480px]:text-3xl sm:text-4xl md:text-5xl">
                International Clinic of Asia
              </h2>
              <p className="mt-2 text-lg text-foreground/70">
                Запишитесь на прием онлайн
              </p>
            </div>
            <form
              action="#"
              className="mx-auto max-w-xl space-y-3 rounded-2xl border border-border bg-white/80 px-4 py-4 shadow-sm backdrop-blur-sm sm:px-8 sm:py-6 xl:px-12 xl:py-6"
            >
              <h3 className="text-base font-semibold sm:text-xl">Записаться к нам:</h3>
              <Input
                type="text"
                placeholder="Имя"
                className="h-auto rounded-xl border-input px-6 py-3 text-sm font-normal placeholder:text-[#9aa3ab] focus-visible:ring-2 focus-visible:ring-primary sm:px-8 sm:py-3"
              />
              <Input
                type="tel"
                placeholder="Телефон номера"
                className="h-auto rounded-xl border-input px-6 py-3 text-sm font-normal placeholder:text-[#9aa3ab] focus-visible:ring-2 focus-visible:ring-primary sm:px-8 sm:py-3"
              />
              <Button className="h-auto w-full rounded-xl bg-primary px-6 py-3 text-center text-base font-semibold text-white shadow-sm transition-transform hover:scale-[1.01] hover:bg-primary/90 sm:text-lg">
                отправить
              </Button>
            </form>
          </div>
          <div className="w-full max-w-[28rem] sm:max-w-[34.375rem] lg:basis-[34.375rem]">
            <AspectRatio ratio={550 / 530}>
              <Image src={nurse} alt="nurse" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 550px" className="h-auto w-full rounded-2xl shadow-sm" />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}
