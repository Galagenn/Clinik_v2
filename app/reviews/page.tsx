import BreadcrumbSection from "@/components/breadcrumb";
import Enroll from "@/components/enroll";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

export default function ReviewsPage() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <BreadcrumbSection breadcrumbPage="Отзывы" />
        <section>
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-12 sm:py-16">
              <div className="mb-6 flex items-end justify-between">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Отзывы наших пациентов</h2>
                <Link href="/" className="text-sm text-foreground/60 transition-colors hover:text-foreground">Оставить отзыв</Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {["Очень внимательные врачи.", "Комфортно и без очередей.", "Записался онлайн — удобно.", "Диагностика на уровне, все объяснили.", "Честные цены, без лишнего.", "Уютная клиника, приятный персонал."].map((text, idx) => (
                  <div key={idx} className="rounded-2xl border border-border p-6 text-sm text-foreground/80">
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Enroll />
      </main>
      <Footer />
    </div>
  );
}
