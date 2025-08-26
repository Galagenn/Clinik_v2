import Link from "next/link";

export default function Promotions() {
  return (
    <section className="pb-[4.375rem] pt-9 sm:pb-[8.75rem] sm:pt-[4.5625rem]">
      <div className="container">
        <div className="mb-[2.9375rem] flex flex-col items-start justify-between gap-4 min-[475px]:flex-row min-[475px]:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Актуальные акции</h2>
            <p>Всего: 10</p>
          </div>
          <Link
            href="/sales"
            className="w-full rounded-[.9375rem] bg-[#82a4ff] px-[2.8125rem] py-3 text-center text-xl font-medium text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25),inset_0_-3px_6px_3px_rgba(0,0,0,0.07)] transition-shadow hover:shadow-none min-[475px]:w-auto"
          >
            Все акции
          </Link>
        </div>
        <div className="mx-auto grid max-w-[80.625rem] gap-x-7 gap-y-5 min-[545px]:grid-cols-2 min-[552px]:gap-x-9 min-[830px]:grid-cols-3 min-[933px]:grid-cols-4 min-[1166px]:grid-cols-5">
          <div className="rounded-[.9375rem] bg-[#f4f4f4] px-[1.375rem] pb-[1.875rem] pt-10 text-[#847676] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
            <h3 className="mb-[1.125rem] text-[1.375rem] font-light">
              Весь декабрь
            </h3>
            <p className="mb-7 font-normal">Скидка 20% на анализы</p>
            <Link
              href="/sales"
              className="rounded-[.9375rem] bg-[#648eff]/[.63] px-[1.375rem] py-[.375rem] font-normal text-white shadow-[0_0_6px_0_rgba(144,173,252,0.63)] transition-shadow hover:shadow-none"
            >
              Подробнее
            </Link>
          </div>
          <div className="rounded-[.9375rem] bg-[#f4f4f4] px-[1.375rem] pb-[1.875rem] pt-10 text-[#847676] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
            <h3 className="mb-[1.125rem] text-[1.375rem] font-light">
              Весь декабрь
            </h3>
            <p className="mb-7 font-normal">Скидка 20% на анализы</p>
            <Link
              href="/sales"
              className="rounded-[.9375rem] bg-[#648eff]/[.63] px-[1.375rem] py-[.375rem] font-normal text-white shadow-[0_0_6px_0_rgba(144,173,252,0.63)] transition-shadow hover:shadow-none"
            >
              Подробнее
            </Link>
          </div>
          <div className="rounded-[.9375rem] bg-[#f4f4f4] px-[1.375rem] pb-[1.875rem] pt-10 text-[#847676] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
            <h3 className="mb-[1.125rem] text-[1.375rem] font-light">
              Весь декабрь
            </h3>
            <p className="mb-7 font-normal">Скидка 20% на анализы</p>
            <Link
              href="/sales"
              className="rounded-[.9375rem] bg-[#648eff]/[.63] px-[1.375rem] py-[.375rem] font-normal text-white shadow-[0_0_6px_0_rgba(144,173,252,0.63)] transition-shadow hover:shadow-none"
            >
              Подробнее
            </Link>
          </div>
          <div className="rounded-[.9375rem] bg-[#f4f4f4] px-[1.375rem] pb-[1.875rem] pt-10 text-[#847676] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
            <h3 className="mb-[1.125rem] text-[1.375rem] font-light">
              Весь декабрь
            </h3>
            <p className="mb-7 font-normal">Скидка 20% на анализы</p>
            <Link
              href="/sales"
              className="rounded-[.9375rem] bg-[#648eff]/[.63] px-[1.375rem] py-[.375rem] font-normal text-white shadow-[0_0_6px_0_rgba(144,173,252,0.63)] transition-shadow hover:shadow-none"
            >
              Подробнее
            </Link>
          </div>
          <div className="rounded-[.9375rem] bg-[#f4f4f4] px-[1.375rem] pb-[1.875rem] pt-10 text-[#847676] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
            <h3 className="mb-[1.125rem] text-[1.375rem] font-light">
              Весь декабрь
            </h3>
            <p className="mb-7 font-normal">Скидка 20% на анализы</p>
            <Link
              href="/sales"
              className="rounded-[.9375rem] bg-[#648eff]/[.63] px-[1.375rem] py-[.375rem] font-normal text-white shadow-[0_0_6px_0_rgba(144,173,252,0.63)] transition-shadow hover:shadow-none"
            >
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
