"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Testimonial from "./testimonial";

const reviews = [
  {
    name: "Анна Иванова",
    description: "Пациент, 24 года",
    feedback:
      "Очень довольна визитом! Врачи внимательные и компетентные. Персонал заботливый и вежливый.",
  },
  {
    name: "Анна Иванова",
    description: "Пациент, 24 года",
    feedback:
      "Очень довольна визитом! Врачи внимательные и компетентные. Персонал заботливый и вежливый.",
  },
  {
    name: "Анна Иванова",
    description: "Пациент, 24 года",
    feedback:
      "Очень довольна визитом! Врачи внимательные и компетентные. Персонал заботливый и вежливый.",
  },
  {
    name: "Анна Иванова",
    description: "Пациент, 24 года",
    feedback:
      "Очень довольна визитом! Врачи внимательные и компетентные. Персонал заботливый и вежливый.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials pb-12 pt-6 sm:pb-20 sm:pt-12">
      <div className="container flex flex-col justify-between gap-4 min-[582px]:flex-row min-[582px]:items-center">
        <h2 className="min-[650px]:text-2xl text-xl font-semibold tracking-tight">
          отзывы наших пациентов
        </h2>
        <Link
          href="/reviews"
          className="w-full rounded-xl bg-primary px-[2.8125rem] py-3 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 min-[475px]:w-auto"
        >
          Все отзывы
        </Link>
      </div>
      <Swiper
        spaceBetween={25}
        slidesPerView={2.5}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.6,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          870: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 25,
          },
        }}
        centeredSlides
        loop
        className="!pb-16 !pt-8 sm:!pb-28 sm:!pt-12 lg:!pb-40 lg:!pt-16"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <Testimonial
              name={review.name}
              description={review.description}
              feedback={review.feedback}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
