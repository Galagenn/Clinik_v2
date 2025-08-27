import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="shrink-0 basis-12 lg:basis-16">
      <Image
        src="/logo.png"
        width={64}
        height={64}
        alt="логотип"
        placeholder="blur"
        blurDataURL="/logo.png"
        className="w-12 h-12 lg:w-16 lg:h-16"
      />
    </Link>
  );
}
