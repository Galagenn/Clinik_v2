import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllDoctorIds, getDoctorById } from "../data";

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  return getAllDoctorIds().map((id) => ({ id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const doctor = getDoctorById(params.id);
  if (!doctor) {
    return { title: "Врач не найден" };
  }
  return {
    title: `${doctor.name} — ${doctor.role}`,
    description: `${doctor.name}: ${doctor.specialization}. Опыт: ${doctor.exp}. Запись на прием.`,
  };
}

export default function DoctorPage({ params }: Props) {
  const doctor = getDoctorById(params.id);
  if (!doctor) {
    notFound();
  }

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
                <Link href="/doctors" className="hover:underline">Врачи</Link>
                <span className="mx-2">/</span>
                <span className="text-foreground">{doctor.name}</span>
              </nav>
              <div className="grid items-start gap-8 md:grid-cols-5">
                <div className="md:col-span-2">
                  <div className="relative overflow-hidden rounded-2xl ring-1 ring-border">
                    <Image
                      src={doctor.img}
                      alt={doctor.name}
                      width={1000}
                      height={1200}
                      className="h-auto w-full object-cover"
                    />
                    <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-primary">
                      ⭐ {doctor.rating}
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h1 className="text-3xl font-bold sm:text-4xl">{doctor.name}</h1>
                  <div className="mt-1 text-foreground/70">{doctor.role}</div>
                  {doctor.tags && doctor.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {doctor.tags.map((t) => (
                        <span key={t} className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground/80">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-foreground/80">
                    <div>Опыт: <span className="font-semibold text-foreground">{doctor.exp}</span></div>
                    <div>Прием: <span className="font-semibold text-foreground">{doctor.price}</span></div>
                    <div>Образование: <span className="font-semibold text-foreground">{doctor.education}</span></div>
                    <div>График: <span className="font-semibold text-foreground">{doctor.schedule}</span></div>
                  </div>
                  {doctor.languages && doctor.languages.length > 0 && (
                    <div className="mt-3 text-sm text-foreground/70">Языки приема: {doctor.languages.join(", ")}</div>
                  )}
                  <p className="mt-6 text-base leading-7 text-foreground/80">{doctor.about}</p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border p-5">
                      <div className="text-lg font-semibold">Услуги</div>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/70">
                        {doctor.services.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-border p-5">
                      <div className="text-lg font-semibold">Достижения</div>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/70">
                        {doctor.achievements.map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {doctor.nextSlots && doctor.nextSlots.length > 0 && (
                    <div className="mt-8 rounded-2xl border border-border p-5">
                      <div className="text-lg font-semibold">Ближайшие слоты</div>
                      <div className="mt-3 flex flex-wrap gap-2 text-sm">
                        {doctor.nextSlots.map((slot) => (
                          <span key={slot} className="rounded-xl border border-border bg-muted px-3 py-1 text-foreground/80">{slot}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {doctor.prices && doctor.prices.length > 0 && (
                    <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                      <div className="grid grid-cols-3 bg-muted px-4 py-3 text-xs text-foreground/60 sm:text-sm">
                        <div>Услуга</div>
                        <div>Описание</div>
                        <div className="text-right">Цена</div>
                      </div>
                      {doctor.prices.map((p) => (
                        <div key={p.title} className="grid grid-cols-3 items-center px-4 py-3 text-sm ring-1 ring-border/60 first:ring-0">
                          <div className="font-medium">{p.title}</div>
                          <div className="text-foreground/70">{p.description ?? "—"}</div>
                          <div className="text-right font-semibold">{p.amount}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {doctor.reviews && doctor.reviews.length > 0 && (
                    <div className="mt-8">
                      <div className="mb-3 flex items-end justify-between">
                        <h2 className="text-lg font-semibold">Отзывы пациентов</h2>
                        <Link href="/reviews" className="text-sm text-foreground/60 hover:text-foreground">Все отзывы</Link>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {doctor.reviews.map((r) => (
                          <div key={r.author + r.text.slice(0, 8)} className="rounded-2xl border border-border p-4">
                            <div className="mb-1 flex items-center gap-1 text-yellow-500">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i} className={`text-sm ${i < r.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                              ))}
                            </div>
                            <div className="text-sm text-foreground/80">{r.text}</div>
                            <div className="mt-2 text-xs text-foreground/60">— {r.author}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link href="#book" className="rounded-xl bg-primary px-6 py-3 text-center text-white shadow-sm transition-colors hover:bg-primary/90">
                      Записаться на прием
                    </Link>
                    <Link href="/doctors" className="rounded-xl bg-muted px-6 py-3 text-center text-foreground shadow-sm transition-colors hover:bg-muted/80">
                      Все врачи
                    </Link>
                  </div>
                </div>
              </div>

              {/* Похожие специалисты */}
              <div className="mt-12">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Похожие специалисты</h2>
                  <Link href="/doctors" className="text-sm text-foreground/60 hover:text-foreground">Смотреть всех</Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {/** Simple pick: next two IDs cyclically */}
                  {[1,2,3].map((i) => i.toString()).filter((i) => i !== doctor.id).slice(0, 3).map((id) => getDoctorById(id)).filter(Boolean).map((d) => (
                    <Link key={(d as any)!.id} href={`/doctors/${(d as any)!.id}`} className="overflow-hidden rounded-2xl border border-border transition-all hover:-translate-y-0.5">
                      <div className="relative">
                        <Image src={(d as any)!.img} alt={(d as any)!.name} width={800} height={600} className="h-40 w-full object-cover" />
                        <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-0.5 text-xs font-semibold text-primary">⭐ {(d as any)!.rating}</div>
                      </div>
                      <div className="p-4">
                        <div className="text-sm font-semibold">{(d as any)!.name}</div>
                        <div className="text-xs text-foreground/60">{(d as any)!.role}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA duplicate for anchor target */}
        <section id="book" className="relative isolate overflow-hidden">
          <div className="container">
            <div className="mx-auto max-w-6xl rounded-3xl bg-black px-6 py-12 text-white sm:px-10 sm:py-16">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-semibold sm:text-3xl">Запишитесь к {doctor.name}</h3>
                  <p className="mt-3 text-white/70">Оставьте контакты — администратор перезвонит и согласует удобное время приема.</p>
                </div>
                <form className="grid gap-3 sm:grid-cols-2">
                  <input placeholder="Имя" className="h-11 rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-white/30" />
                  <input placeholder="Телефон" className="h-11 rounded-xl bg-white/10 px-4 text-sm outline-none ring-1 ring-white/10 placeholder:text-white/50 focus:ring-white/30" />
                  <button className="col-span-1 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:col-span-2">
                    Отправить заявку
                  </button>
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


