import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllServiceSlugs, getServiceBySlug, services } from "../data";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Услуга не найдена" };
  return {
    title: `${service.title} — услуги клиники`,
    description: `${service.description}. Цены ${service.priceFrom ?? "по запросу"}.`,
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const related = (service.related ?? [])
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-white">
          <div className="container">
            <div className="mx-auto !max-w-[88rem] py-10 sm:py-16">
              <nav className="mb-6 text-sm text-foreground/60">
                <Link href="/" className="hover:underline">Главная</Link>
                <span className="mx-2">/</span>
                <Link href="/services" className="hover:underline">Услуги</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">{service.title}</span>
              </nav>

              <div className="grid items-start gap-8 md:grid-cols-5">
                <div className="md:col-span-2">
                  <div className="relative overflow-hidden rounded-2xl ring-1 ring-border">
                    <Image src={service.cover ?? service.icon} alt={service.title} width={1000} height={800} className="h-auto w-full object-cover" />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h1 className="text-3xl font-bold sm:text-4xl">{service.title}</h1>
                  <div className="mt-2 text-foreground/70">{service.description}</div>
                  {service.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.tags.map((t) => (
                        <span key={t} className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground/80">{t}</span>
                      ))}
                    </div>
                  )}

                  {service.longDescription && (
                    <p className="mt-6 text-base leading-7 text-foreground/80">{service.longDescription}</p>
                  )}

                  {service.includes && service.includes.length > 0 && (
                    <div className="mt-8 rounded-2xl border border-border p-5">
                      <div className="text-lg font-semibold">Что входит</div>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/70">
                        {service.includes.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.prices && service.prices.length > 0 && (
                    <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                      <div className="grid grid-cols-3 bg-muted px-4 py-3 text-xs text-foreground/60 sm:text-sm">
                        <div>Услуга</div>
                        <div>Описание</div>
                        <div className="text-right">Цена</div>
                      </div>
                      {service.prices.map((p) => (
                        <div key={p.title} className="grid grid-cols-3 items-center px-4 py-3 text-sm ring-1 ring-border/60 first:ring-0">
                          <div className="font-medium">{p.title}</div>
                          <div className="text-foreground/70">{p.description ?? "—"}</div>
                          <div className="text-right font-semibold">{p.amount}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link href="#book" className="rounded-xl bg-primary px-6 py-3 text-center text-white shadow-sm transition-colors hover:bg-primary/90">Записаться</Link>
                    <Link href="/services" className="rounded-xl bg-muted px-6 py-3 text-center text-foreground shadow-sm transition-colors hover:bg-muted/80">Все услуги</Link>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>

        {/* CTA anchor */}
        <section id="book" className="relative isolate overflow-hidden">
          <div className="container">
            <div className="mx-auto max-w-6xl rounded-3xl bg-black px-6 py-12 text-white sm:px-10 sm:py-16">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-semibold sm:text-3xl">Запишитесь на услугу: {service.title}</h3>
                  <p className="mt-3 text-white/70">Оставьте контакты — администратор перезвонит и подберет удобное время.</p>
                </div>
                <form className="grid gap-3 sm:grid-cols-2">
                  <input placeholder="Имя" className="h-11 rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-white/30" />
                  <input placeholder="Телефон" className="h-11 rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-white/30" />
                  <button className="col-span-1 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:col-span-2">Отправить заявку</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


