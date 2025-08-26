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
        <h2 className="mb-[3.125rem] text-center text-[1.6875rem] font-semibold">
          Популярные услуги
        </h2>
        <ServicesItems servicesItems={servicesItems} />
        <div className="pt-10 text-center sm:pt-[5.375rem]">
          <Link
            href="/services"
            className="inline-block rounded-[.9375rem] bg-[#82a4ff] px-10 py-3 text-lg font-medium text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transition-shadow hover:shadow-none sm:px-16 sm:py-[.875rem] sm:text-xl"
          >
            Все услуги
          </Link>
        </div>
      </div>
    </section>
  );
}
