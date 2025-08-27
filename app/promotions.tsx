import Link from "next/link";

export default function Promotions() {
  return (
    <section className="pb-12 pt-9 sm:pb-20 sm:pt-16">
      <div className="container">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 min-[475px]:flex-row min-[475px]:items-center">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">Актуальные акции</h2>
            <p className="text-foreground/60">Всего: 10</p>
          </div>
          <Link
            href="/sales"
            className="w-full rounded-xl bg-primary px-6 py-3 text-center text-base font-semibold text-white shadow-premium transition-transform hover:-translate-y-0.5 hover:bg-primary/90 min-[475px]:w-auto"
          >
            Все акции
          </Link>
        </div>
        <div className="mx-auto grid max-w-[80.625rem] gap-5 sm:gap-6 min-[545px]:grid-cols-2 min-[830px]:grid-cols-3 min-[1166px]:grid-cols-4">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-white to-[#f2fbff] p-6 text-foreground/80 shadow-soft ring-1 ring-transparent transition-all hover:-translate-y-1 hover:shadow-premium hover:ring-primary/10">
            <h3 className="mb-3 text-xl font-semibold">
              Весь декабрь
            </h3>
            <p className="mb-6">Скидка 20% на анализы</p>
            <Link
              href="/sales"
              className="inline-block rounded-xl bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-secondary/90"
            >
              Подробнее
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-to-br from-white to-[#f2fbff] p-6 text-foreground/80 shadow-soft ring-1 ring-transparent transition-all hover:-translate-y-1 hover:shadow-premium hover:ring-primary/10">
            <h3 className="mb-3 text-xl font-semibold">
              Весь декабрь
            </h3>
            <p className="mb-6">Скидка 20% на анализы</p>
            <Link
              href="/sales"
              className="inline-block rounded-xl bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-secondary/90"
            >
              Подробнее
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-to-br from-white to-[#f2fbff] p-6 text-foreground/80 shadow-soft ring-1 ring-transparent transition-all hover:-translate-y-1 hover:shadow-premium hover:ring-primary/10">
            <h3 className="mb-3 text-xl font-semibold">
              Весь декабрь
            </h3>
            <p className="mb-6">Скидка 20% на анализы</p>
            <Link
              href="/sales"
              className="inline-block rounded-xl bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-secondary/90"
            >
              Подробнее
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-to-br from-white to-[#f2fbff] p-6 text-foreground/80 shadow-soft ring-1 ring-transparent transition-all hover:-translate-y-1 hover:shadow-premium hover:ring-primary/10">
            <h3 className="mb-3 text-xl font-semibold">
              Весь декабрь
            </h3>
            <p className="mb-6">Скидка 20% на анализы</p>
            <Link
              href="/sales"
              className="inline-block rounded-xl bg-secondary px-4 py-2 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-secondary/90"
            >
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
