import Image from "next/image";
import avatar from "/public/testimonials/avatar.jpg";

interface TestimonialProps {
  name: string;
  description: string;
  feedback: string;
  rating?: number; // 1-5
}

export default function Testimonial({
  name,
  description,
  feedback,
  rating = 5,
}: TestimonialProps) {
  const safeRating = Math.max(1, Math.min(5, Math.round(rating)));

  const renderStars = () => {
    return (
      <div className="mb-[.75rem] inline-flex items-center gap-[2px] align-middle">
        {Array.from({ length: 5 }).map((_, index) => {
          const filled = index < safeRating;
          return (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className={`h-4 w-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10.5 13.347a1 1 0 00-1.175 0l-2.985 2.136c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.705 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          );
        })}
      </div>
    );
  };

  return (
    <div className="rounded-2xl border border-border bg-white/95 p-6 shadow-soft ring-1 ring-transparent transition-all hover:-translate-y-1 hover:shadow-premium hover:ring-primary/10">
      <div className="flex items-start gap-4">
        <Image
          src={avatar}
          alt="avatar"
          className="size-12 rounded-full object-cover ring-2 ring-primary/20"
        />
        <div className="flex-1">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-sm font-semibold text-foreground">{name}</h3>
              <p className="text-[.75rem] text-foreground/60">{description}</p>
            </div>
            {renderStars()}
          </div>
          <p className="mt-3 text-[.875rem] leading-relaxed text-foreground/80">
            “{feedback}”
          </p>
          <div className="mt-4 flex items-center gap-4 text-[.75rem] text-foreground/60">
            <span className="inline-flex items-center gap-1">✅ Приду снова</span>
            <span className="inline-flex items-center gap-1">👍 Рекомендую</span>
            <span className="inline-flex items-center gap-1">💬 Спасибо!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
