import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

interface ServicesItemsProps {
  servicesItems: {
    src: string;
    title: string;
    href?: string;
  }[];
}

export default function ServicesItems({ servicesItems }: ServicesItemsProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(9.5rem,1fr))] gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-7">
      {servicesItems.map((servicesItem, index) => (
        <article
          key={index}
          className="group rounded-2xl border border-border bg-white/90 px-4 py-5 shadow-soft ring-1 ring-transparent transition-all duration-300 ease-out sm:px-6 sm:py-7 hover:-translate-y-1 hover:shadow-premium hover:ring-primary/10"
        >
          <AspectRatio ratio={1 / 1} className="mb-4">
            <Link href={servicesItem.href || "/"}>
              <Image
                src={servicesItem.src}
                width={84}
                height={84}
                alt={servicesItem.title}
                className="size-full object-contain transition-transform group-hover:scale-[1.06]"
              />
            </Link>
          </AspectRatio>
          <h3 className="text-center text-sm font-semibold text-foreground sm:text-base">
            <Link
              href={servicesItem.href || "/"}
              className="text-foreground/80 transition-colors hover:text-primary"
            >
              {servicesItem.title}
            </Link>
          </h3>
        </article>
      ))}
    </div>
  );
}
