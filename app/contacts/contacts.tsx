import Image from "next/image";

export default function Contacts() {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="mx-auto !max-w-[88rem] py-12 sm:py-16">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">Контакты</h2>
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-2xl border border-border p-5">
                <div className="text-base font-semibold">Адрес</div>
                <div className="mt-1 text-sm text-foreground/70">г. Алматы, ул. Здоровья, 10</div>
              </div>
              <div className="rounded-2xl border border-border p-5">
                <div className="text-base font-semibold">Телефон</div>
                <div className="mt-1 text-sm text-foreground/70">+7 707 070 00 77</div>
              </div>
              <div className="rounded-2xl border border-border p-5">
                <div className="text-base font-semibold">Email</div>
                <div className="mt-1 text-sm text-foreground/70">clinic@example.com</div>
              </div>
              <div className="overflow-hidden rounded-2xl ring-1 ring-border">
                <Image src="/about-us/appointment-back.jpg" alt="Клиника" width={1200} height={800} className="h-auto w-full object-cover" />
              </div>
            </div>

            <div className="rounded-3xl bg-black px-6 py-8 text-white sm:px-8">
              <div className="mb-4">
                <div className="text-xl font-semibold">Свяжитесь с нами</div>
                <div className="mt-1 text-sm text-white/70">Оставьте контакты — перезвоним в течение 10 минут</div>
              </div>
              <form className="grid gap-3 sm:grid-cols-2">
                <input placeholder="Имя" className="h-11 rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-white/30" />
                <input placeholder="Телефон" className="h-11 rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-white/30" />
                <textarea placeholder="Сообщение" className="min-h-28 rounded-xl bg-white/10 px-4 py-3 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-white/30 sm:col-span-2" />
                <button className="col-span-1 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:col-span-2">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
