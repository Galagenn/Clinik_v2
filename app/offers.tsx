"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

export default function Offers() {
  return (
    <section className="bg-muted pb-8 pt-10 sm:pb-16 sm:pt-20">
      <div className="container">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="mb-10 md:mb-16 lg:mb-20">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border">
              <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl md:mb-10 md:text-5xl">
                Акции и специальные предложения
              </h2>
              <div className="text-base text-foreground/80 sm:text-lg md:text-2xl">
                <p className="font-medium text-foreground">Первичная консультация со скидкой</p>
                <ul className="mt-3 space-y-2">
                  <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:size-2 before:rounded-full before:bg-primary/40">
                    Описание: Получите скидку 20% на первую консультацию у
                    любого специалиста клиники!
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:size-2 before:rounded-full before:bg-primary/40">
                    Детали: Акция доступна новым пациентам. Узнайте о своем
                    здоровье и получите профессиональные рекомендации по
                    специальной цене.
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mb-10 md:mb-20 lg:mb-32">2</SwiperSlide>
          <SwiperSlide className="mb-10 md:mb-20 lg:mb-32">3</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
