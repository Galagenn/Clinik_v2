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
    <div className="grid grid-cols-[repeat(auto-fit,minmax(9rem,1fr))] gap-x-3 gap-y-4 sm:gap-x-6 sm:gap-y-6">
      {servicesItems.map((servicesItem, index) => (
        <article
          key={index}
          className="rounded-[.9375rem] px-3 py-4 sm:px-5 sm:py-6 shadow-[0_0_14px_0_rgba(3,49,173,0.25)]"
        >
          <AspectRatio ratio={1 / 1} className="mb-[.9375rem]">
            <Link href={servicesItem.href || "/"}>
              <Image
                src={servicesItem.src}
                width={84}
                height={84}
                alt={servicesItem.title}
                className="size-full object-cover"
              />
            </Link>
          </AspectRatio>
          <h3 className="text-center text-xs sm:text-sm">
            <Link href={servicesItem.href || "/"} className="hover:underline">
              {servicesItem.title}
            </Link>
          </h3>
        </article>
      ))}
    </div>
  );
}
