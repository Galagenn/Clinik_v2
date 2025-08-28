import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0">
      <Image
        src="/logo.png"
        width={64}
        height={64}
        alt="логотип"
        placeholder="blur"
        blurDataURL="/logo.png"
        className="w-12 h-12 lg:w-16 lg:h-16"
      />
             <div className="block">
         <div className="text-sm font-semibold text-foreground">International Clinic of Asia</div>
         <div className="text-xs text-foreground/60">Медицинский центр</div>
       </div>
    </Link>
  );
}
