"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

export default function Offers() {
  return (
    <section className="bg-neutral-100 pb-[1.125rem] pt-[3.75rem]">
      <div className="container">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="mb-10 md:mb-20 lg:mb-32">
            <div>
              <h2 className="mb-12 text-2xl font-bold sm:text-3xl md:mb-[4.625rem] md:text-5xl">
                Акции и специальные предложения
              </h2>
              <div className="text-base sm:text-lg md:text-2xl">
                <p>Первичная консультация со скидкой</p>
                <ul>
                  <li className="relative pl-9 before:absolute before:left-[1.125rem] before:content-['•']">
                    Описание: Получите скидку 20% на первую консультацию у
                    любого специалиста клиники!
                  </li>
                  <li className="relative pl-9 before:absolute before:left-[1.125rem] before:content-['•']">
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
