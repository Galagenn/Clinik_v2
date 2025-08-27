import Link from "next/link";
import ServicesItems from "@/components/services-items";

const servicesItems = [
  {
    id: 1,
    src: "/services/dentistry.png",
    title: "Стоматология",
    href: "/services/stamatology"
  },
  {
    id: 2,
    src: "/services/diagnostics.png",
    title: "Диагностика",
  },
  {
    id: 3,
    src: "/services/analysis.png",
    title: "Анализы",
  },
  {
    id: 4,
    src: "/services/vaccination.png",
    title: "Вакцинация",
  },
  {
    id: 5,
    src: "/services/certificates.png",
    title: "Медицинские справки",
  },
  {
    id: 6,
    src: "/services/checkup.png",
    title: "Check-Up",
  },
  {
    id: 7,
    src: "/services/therapy.png",
    title: "Терапия",
  },
  {
    id: 8,
    src: "/services/consultation.png",
    title: "Консультация",
  },
];

export default function Services() {
  return (
    <section className="pb-[5.5rem] sm:pb-44">
      <div className="container !max-w-[80.5rem]">
        <h2 className="mb-[3.125rem] text-center text-[1.6875rem] font-semibold tracking-tight">
          Популярные услуги
        </h2>
        <ServicesItems servicesItems={servicesItems} />
        <div className="pt-10 text-center sm:pt-[5.375rem]">
          <Link
            href="/services"
            className="inline-block rounded-xl bg-primary px-10 py-3 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 sm:px-16 sm:py-[.875rem] sm:text-xl"
          >
            Все услуги
          </Link>
        </div>
      </div>
    </section>
  );
}
