"use client";

import Testimonial from "@/components/testimonial";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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

export default function Reviews() {
  const [visibleReview, setVisibleReview] = useState(8);

  const visibleFeedbacks = reviews.slice(0, visibleReview);

  function showMore() {
    setVisibleReview(reviews.length);
  }

  function showLess() {
    setVisibleReview(8);
  }

  return (
    <section className="pb-20 md:pb-[10.625rem]">
      <div className="container">
        <h2 className="mb-16 text-2xl font-semibold tracking-tight md:mb-[6.0625rem]">
          Отзывы наших пациентов
        </h2>
      </div>
      <div className="container !max-w-[83.875rem]">
        <div className="mb-10 grid grid-cols-1 gap-5 md:mb-[5.75rem] md:grid-cols-2">
          {visibleFeedbacks.map((review, index) => (
            <Testimonial
              key={index}
              name={review.name}
              description={review.description}
              feedback={review.feedback}
            />
          ))}
        </div>
        {visibleReview < reviews.length ? (
          <div className="text-center">
            <Button
              onClick={showMore}
              className="h-auto w-full rounded-xl bg-primary px-6 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-primary/90 min-[475px]:w-auto"
            >
              Открыть еще
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <Button
              onClick={showLess}
              className="h-auto w-full rounded-xl bg-primary px-6 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-primary/90 min-[475px]:w-auto"
            >
              Скрыть
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
