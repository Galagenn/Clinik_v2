import Link from "next/link";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface NavbarProps {
  isMenuOpen: boolean;
  onClose: () => void;
}

export const menuList = [
  {
    id: 1,
    name: "Услуги",
    href: "/services",
  },
  {
    id: 2,
    name: "Врачи",
    href: "/doctors",
  },
  {
    id: 3,
    name: "Акции",
    href: "/sales",
  },
  {
    id: 4,
    name: "Отзывы",
    href: "/reviews",
  },
  {
    id: 5,
    name: "О клинике",
    href: "/about-us",
  },
  {
    id: 6,
    name: "Контакты",
    href: "/contacts",
  },
];

export default function Navbar({ isMenuOpen, onClose }: NavbarProps) {
  return (
    <div
      className={cn("hidden md:hidden", {
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
          <ul className="flex min-h-12 flex-col items-stretch justify-between gap-2 md:flex-row">
            {menuList.map((menuItem) => (
              <li key={menuItem.id}>
                <Link
                  href={menuItem.href}
                  onClick={isMenuOpen ? onClose : undefined}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-foreground/80 transition-all hover:-translate-y-0.5 hover:bg-muted hover:text-foreground"
                >
                  {menuItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {isMenuOpen && (
          <div className="text-center space-y-4">
            {/* Название клиники в мобильном меню */}
            <div className="border-t border-border/40 pt-4">
              <div className="text-lg font-semibold text-foreground">International Clinic of Asia</div>
              <div className="text-sm text-foreground/60">Медицинский центр</div>
            </div>
            
            {/* Контактная информация */}
            <div>
              <p className="text-sm font-medium text-foreground/80">
                Запись и консультация по телефонам:
              </p>
              <div className="mt-2 space-y-1">
                <a
                  href="tel:+77172490384"
                  className="block text-sm font-semibold text-primary underline"
                >
                  +7 (7172) 49-03-84
                </a>
                <a
                  href="tel:+77789064060"
                  className="block text-sm font-semibold text-primary underline"
                >
                  +7 (778) 906-40-60
                </a>
              </div>
            </div>
            
            {/* Адрес и время работы */}
            <div className="text-xs text-foreground/60">
              <p>г. Астана, ул. Мәскеу, 11А</p>
              <p>Пн-Пт: 08:30–17:30, Сб: 08:30–13:00</p>
            </div>
            
            {/* Кнопка записи */}
            <div className="pt-2">
              <Link
                href="#book"
                onClick={onClose}
                className="inline-block w-full rounded-xl bg-primary px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Записаться на прием
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
