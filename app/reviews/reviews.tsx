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
        <h2 className="mb-16 text-2xl uppercase font-semibold md:mb-[6.0625rem]">
          отзывы наших пациентов
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
              className="h-auto w-full rounded-[.9375rem] bg-[#82a4ff] px-[2.125rem] py-3 text-center text-xl font-medium text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25),inset_0_-3px_6px_3px_rgba(0,0,0,0.07)] transition-shadow hover:bg-[#82a4ff] hover:shadow-none min-[475px]:w-auto"
            >
              Открыть еще
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <Button
              onClick={showLess}
              className="h-auto w-full rounded-[.9375rem] bg-[#82a4ff] px-[2.125rem] py-3 text-center text-xl font-medium text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25),inset_0_-3px_6px_3px_rgba(0,0,0,0.07)] transition-shadow hover:bg-[#82a4ff] hover:shadow-none min-[475px]:w-auto"
            >
              Скрыть
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
