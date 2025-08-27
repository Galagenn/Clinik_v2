import Image from "next/image";
import avatar from "/public/testimonials/avatar.jpg";
import stars from "/public/testimonials/icons/stars.svg";
import like from "/public/testimonials/icons/like.png";
import comment from "/public/testimonials/icons/comment.png";

interface TestimonialProps {
  name: string;
  description: string;
  feedback: string;
}

export default function Testimonial({
  name,
  description,
  feedback,
}: TestimonialProps) {
  return (
    <div className="flex flex-col gap-x-7 gap-y-3 rounded-2xl border border-border bg-white/95 px-7 py-8 shadow-soft ring-1 ring-transparent transition-all hover:-translate-y-1 hover:shadow-premium hover:ring-primary/10 min-[480px]:flex-row min-[480px]:items-center">
      <div className="shrink-0 min-[480px]:basis-[5.9375rem]">
        <div className="mb-[.875rem]">
          <Image
            src={avatar}
            alt="avatar"
            className="size-[3.125rem] rounded-full object-cover ring-2 ring-primary/20"
          />
        </div>
        <h3 className="mb-[.3125rem] text-sm font-semibold">{name}</h3>
        <p className="text-[.75rem] text-foreground/60">{description}</p>
      </div>
      <div>
        <Image src={stars} alt="stars" className="mb-[.875rem] inline-block" />
        <p className="mb-[.875rem] flex items-center gap-1 text-[.75rem] font-medium text-[#15691b] before:inline-block before:h-[.9375rem] before:w-3 before:bg-[url('/testimonials/icons/check.png')]">
          Приду на повторный прием
        </p>
        <p className="mb-[.625rem] border-b border-border pb-[.625rem] text-[.875rem] text-foreground/80">
          &quot;{feedback}&quot;
        </p>
        <div className="flex items-center gap-[1.125rem]">
          <div className="flex items-center gap-[.1875rem]">
            <Image src={like} alt="лайк" />
            <span className="text-[.75rem] text-foreground/60">5</span>
          </div>
          <Image src={comment} alt="коммент" />
        </div>
      </div>
    </div>
  );
}
