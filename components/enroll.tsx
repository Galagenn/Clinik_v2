import Link from "next/link";
import Image from "next/image";
import logo from "/public/enroll/logo.png";
import nurse from "/public/nurse.png";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { AspectRatio } from "./ui/aspect-ratio";

export default function Enroll() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col justify-between gap-4 rounded-[1.25rem] bg-[#f6f3f3] p-3 sm:rounded-[3.125rem] sm:px-[1.5625rem] pt-2 sm:pt-8 md:px-[3.125rem] md:pt-[4.25rem] lg:items-end min-[1024px]:flex-row">
          <div className="lg:basis-[38.4375rem]">
            <div className="mb-6 flex items-center gap-x-3 sm:mb-[4.375rem] sm:gap-x-[3.3125rem]">
              <Link href="/" className="w-16 sm:w-20 md:w-auto">
                <Image src={logo} alt="логотип" />
              </Link>
              <h2 className="max-w-[14.8125rem] text-lg font-light uppercase min-[480px]:text-2xl sm:text-4xl md:text-5xl">
                clinic name
              </h2>
            </div>
            <form
              action="#"
              className="space-y-3 rounded-[.9375rem] bg-[#e5e5e5] px-4 py-3 sm:px-10 sm:py-5 xl:px-[3.3125rem] xl:py-[1.875rem]"
            >
              <h3 className="text-base sm:text-xl font-light">Записаться к нам:</h3>
              <Input
                type="text"
                placeholder="Имя"
                className="h-auto rounded-[1.25rem] border-none px-6 py-3 font-light text-sm sm:px-8 sm:py-[.875rem]"
              />
              <Input
                type="tel"
                placeholder="Телефон номера"
                className="h-auto rounded-[1.25rem] border-none px-6 py-3 font-light text-sm sm:px-8 sm:py-[.875rem]"
              />
              <Button className="h-auto w-full rounded-[.9375rem] bg-[#82a4ff] px-6 py-3 text-center text-base sm:text-lg font-bold uppercase text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25),inset_0_-3px_6px_3px_rgba(0,0,0,0.07)] transition-shadow hover:bg-[#82a4ff] hover:shadow-none">
                отправить
              </Button>
            </form>
          </div>
          <div className="w-full max-w-[28rem] sm:max-w-[34.375rem] lg:basis-[34.375rem]">
            <AspectRatio ratio={550 / 530}>
              <Image src={nurse} alt="nurse" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 550px" className="h-auto w-full" />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
}
