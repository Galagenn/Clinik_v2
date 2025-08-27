import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contacts() {
  return (
    <section className="pb-16 md:pb-[8.875rem]">
      <div className="container">
        <Heading className="mb-[1.875rem] sm:mb-[3.75rem]">
          Способы связи с нами
        </Heading>
      </div>
      <div className="container flex !max-w-[83.875rem] flex-col gap-4 xl:flex-row">
        <div>
          <div className="mb-10 grid grid-cols-1 gap-x-9 gap-y-[2.375rem] text-[.9375rem] sm:grid-cols-2">
            <div>
              <div className="mb-5 flex items-center gap-[.625rem] before:size-[2.8125rem] before:bg-[url('/contacts/icons/location.png')] before:bg-no-repeat">
                Наше местоположение
              </div>
              <ul className="space-y-4">
                <li>
                  <p>Абылай хан көшесі, 45, Астана, Қазақстан, 050000</p>
                </li>
                <li>
                  <p>Тәуелсіздік даңғылы, 120, Астана, Қазақстан, 010000</p>
                </li>
                <li>
                  <p>Байтерек көшесі, 18, Астана, Қазақстан, 160000</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-[1.5625rem] flex items-center gap-[.625rem] before:size-[2.1875rem] before:bg-[url('/contacts/icons/contacts.png')] before:bg-no-repeat">
                Номера операторов
              </div>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+77011234567" className="hover:underline">
                    +7 (701) 123-45-67
                  </a>
                </li>
                <li>
                  <a href="tel:+77027654321" className="hover:underline">
                    +7 (702) 765-43-21
                  </a>
                </li>
                <li>
                  <a href="tel:+77479876543" className="hover:underline">
                    +7 (747) 987-65-43
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-5 flex items-center gap-[.625rem] before:size-[3.4375rem] before:bg-[url('/contacts/icons/gmail.png')] before:bg-no-repeat">
                Электронная почта клиники
              </div>
              <a
                href="mailto:contact@nameclinic.kz"
                className="hover:underline"
              >
                contact@nameclinic.kz
              </a>
            </div>
            <div>
              <div className="mb-7 flex items-center gap-[.625rem] before:size-[2.375rem] before:bg-[url('/contacts/icons/whatsapp.png')] before:bg-no-repeat">
                Наш WhatsApp
              </div>
              <div className="space-y-4">
                <p>Имя: Айгерим Жуманиязова</p>
                <p>Номер WhatsApp: +7 (707) 555-66-77</p>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d32529.037852065707!2d71.4841102327599!3d51.155424765229924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2skz!4v1737716866307!5m2!1sru!2skz"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[21.875rem] w-full rounded-2xl border border-border shadow-sm xl:max-w-[43.75rem]"
          ></iframe>
        </div>
        <div>
          <h3 className="mb-7 text-2xl font-semibold tracking-tight sm:mb-[3.5625rem] sm:text-4xl">
            Отправить нам сообщение
          </h3>
          <form action="#">
            <div className="mb-[1.875rem] space-y-[1.4375rem]">
              <Input
                required
                placeholder="Введите свое имя"
                className="h-auto rounded-xl border-input p-3 text-[.8125rem] font-normal placeholder:text-[#9aa3ab] focus-visible:ring-2 focus-visible:ring-primary sm:p-5"
              />
              <Input
                required
                placeholder="Введите свою фамилию"
                className="h-auto rounded-xl border-input p-3 text-[.8125rem] font-normal placeholder:text-[#9aa3ab] focus-visible:ring-2 focus-visible:ring-primary sm:p-5"
              />
              <Textarea
                placeholder="Напишите свое сообщение здесь"
                className="rounded-xl border-input px-3 py-2 text-[.8125rem] font-normal placeholder:text-[#9aa3ab] focus-visible:ring-2 focus-visible:ring-primary sm:px-5 sm:py-[.9375rem]"
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-xl bg-primary px-[2.75rem] py-3 font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 min-[480px]:w-auto"
            >
              Отправить
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
