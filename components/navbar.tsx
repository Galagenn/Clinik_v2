import Link from "next/link";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface NavbarProps {
  isMenuOpen: boolean;
  onClose: () => void;
}

const menuList = [
  {
    id: 1,
    name: "О клинике",
    href: "/about-us",
  },
  {
    id: 2,
    name: "Услуги",
    href: "/services",
  },
  {
    id: 3,
    name: "Акции",
    href: "/sales",
  },
  {
    id: 4,
    name: "Врачи",
    href: "/doctors",
  },
  {
    id: 5,
    name: "Отзывы",
    href: "/reviews",
  },
  {
    id: 6,
    name: "Контакты",
    href: "/contacts",
  },
  {
    id: 7,
    name: "Адрес",
    href: "/address",
  },
];

export default function Navbar({ isMenuOpen, onClose }: NavbarProps) {
  return (
    <div
      className={cn("hidden md:block md:shadow-sm", {
        "fixed inset-0 z-40 block md:hidden": isMenuOpen,
      })}
    >
      {isMenuOpen && (
        <button
          aria-label="Закрыть меню"
          onClick={onClose}
          className="fixed inset-0 -z-10 bg-black/40 backdrop-blur-sm"
        />
      )}
      <div
        className={cn(
          "container !max-w-[73.25rem] space-y-4",
          // Mobile panel styles
          "md:static md:bg-transparent",
          isMenuOpen
            ? "fixed inset-x-0 top-0 bg-white pb-4 pt-20 shadow-sm transition-transform duration-300 ease-out translate-y-0"
            : "-translate-y-full md:translate-y-0",
        )}
      >
        {isMenuOpen && (
          <button
            aria-label="Закрыть меню"
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-xl bg-muted text-foreground/70 shadow-soft transition-colors hover:bg-primary hover:text-white md:hidden"
          >
            <X className="size-5" />
          </button>
        )}
        <nav>
          <ul className="flex min-h-12 flex-col items-center justify-between gap-4 md:flex-row">
            {menuList.map((menuItem) => (
              <li key={menuItem.id}>
                <Link
                  href={menuItem.href}
                  onClick={isMenuOpen ? onClose : undefined}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-foreground/80 transition-all hover:-translate-y-0.5 hover:bg-muted hover:text-foreground"
                >
                  {menuItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {isMenuOpen && (
          <div className="text-center">
            <p className="text-sm">
              Круглосуточная запись и консультация по телефону:
            </p>
            <a
              href="tel:+77070700077"
              className="text-sm font-semibold text-primary underline lg:text-base"
            >
              +7 707 070 00 77
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
