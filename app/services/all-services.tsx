import ServicesItems from "@/components/services-items";

const servicesItems = [
  {
    src: "/services/dentistry.png",
    title: "Стоматология",
    href: "/services/stamatology"
  },
  {
    src: "/services/diagnostics.png",
    title: "Диагностика",
    href: "#"
  },
  {
    src: "/services/analysis.png",
    title: "Анализы",
    href: "#"
  },
  {
    src: "/services/vaccination.png",
    title: "Вакцинация",
    href: "#"
  },
  {
    src: "/services/certificates.png",
    title: "Медицинские справки",
    href: "#"
  },
  {
    src: "/services/checkup.png",
    title: "Check-Up",
    href: "#"
  },
  {
    src: "/services/therapy.png",
    title: "Терапия",
    href: "#"
  },
  {
    src: "/services/consultation.png",
    title: "Консультация",
    href: "#"
  },
  {
    src: "/services/dentistry.png",
    title: "Стоматология",
    href: "/services/stamatology"
  },
  {
    src: "/services/diagnostics.png",
    title: "Диагностика",
    href: "#"
  },
  {
    src: "/services/analysis.png",
    title: "Анализы",
    href: "#"
  },
  {
    src: "/services/vaccination.png",
    title: "Вакцинация",
    href: "#"
  },
  {
    src: "/services/certificates.png",
    title: "Медицинские справки",
    href: "#"
  },
  {
    src: "/services/checkup.png",
    title: "Check-Up",
    href: "#"
  },
  {
    src: "/services/therapy.png",
    title: "Терапия",
    href: "#"
  },
  {
    src: "/services/consultation.png",
    title: "Консультация",
    href: "#"
  },
  {
    src: "/services/dentistry.png",
    title: "Стоматология",
    href: "/services/stamatology"
  },
  {
    src: "/services/diagnostics.png",
    title: "Диагностика",
    href: "#"
  },
  {
    src: "/services/analysis.png",
    title: "Анализы",
    href: "#"
  },
  {
    src: "/services/vaccination.png",
    title: "Вакцинация",
    href: "#"
  },
  {
    src: "/services/certificates.png",
    title: "Медицинские справки",
    href: "#"
  },
  {
    src: "/services/checkup.png",
    title: "Check-Up",
    href: "#"
  },
  {
    src: "/services/therapy.png",
    title: "Терапия",
    href: "#"
  },
  {
    src: "/services/consultation.png",
    title: "Консультация",
    href: "#"
  },
];

export default function AllServices() {
  return (
    <section className="pb-16 sm:pb-32">
      <div className="container !max-w-[80.5rem]">
        <h2 className="mb-[3.125rem] text-[1.6875rem] font-extrabold tracking-tight sm:text-3xl">Наши услуги</h2>
        <ServicesItems servicesItems={servicesItems} />
      </div>
    </section>
  );
}
