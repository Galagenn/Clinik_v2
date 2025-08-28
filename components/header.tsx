"use client";

import Link from "next/link";
import { MenuIcon, SearchIcon, User, X } from "lucide-react";
import { Input } from "./ui/input";
import { useIsMobile } from "./hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Navbar, { menuList } from "./navbar";
import Logo from "./logo";
import { useIsMenuOpen } from "./hooks/use-menu-open";

export default function Header() {
  const isMobile = useIsMobile(915);
  const { isMenuOpen, setIsMenuOpen } = useIsMenuOpen();

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="relative" style={{ zIndex: 1000 }}>
        <div
          className={cn(
            "container relative z-10 flex min-h-14 items-center justify-between gap-3 lg:min-h-16",
            isMenuOpen && "bg-white",
          )}
        >
          <div className="flex items-center gap-x-3 xl:gap-x-6">
            <Logo />
            <div className="hidden xl:block">
              <a href="tel:+77070700077" className="text-sm font-medium text-foreground/80 hover:text-foreground">
                +7 707 070 00 77
              </a>
            </div>
          </div>
          <nav className="hidden md:block max-w-full flex-1">
            <ul className="flex items-center gap-1 lg:gap-1.5 overflow-x-auto whitespace-nowrap">
              {menuList.map((menuItem) => (
                <li key={menuItem.id}>
                  <Link href={menuItem.href} className="rounded-xl px-2.5 py-2 text-xs font-semibold text-foreground/80 transition-colors hover:bg-muted hover:text-foreground lg:px-3 lg:text-sm">
                    {menuItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-x-2 lg:gap-x-3">
            {isMobile ? (
              <Button
                size="icon"
                className="size-9 rounded-xl bg-muted text-foreground/60 shadow-soft transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white [&_svg]:size-5"
                aria-label="Поиск"
              >
                <SearchIcon />
              </Button>
            ) : (
              <div className="relative hidden xl:block xl:w-72">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50" />
                <Input
                  placeholder="введите запрос"
                  className="h-9 rounded-xl bg-muted pl-10 text-xs font-normal placeholder:text-[10px] placeholder:uppercase placeholder:text-foreground/50 focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>
            )}
            <Link
              href="#book"
              className={cn(
                "hidden rounded-xl bg-black px-3 py-2 text-xs font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-black/90 md:inline-block",
              )}
            >
              Записаться
            </Link>
            <Link
              href="/"
              className={cn(
                "inline-block rounded-xl bg-muted text-foreground shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-muted/80",
                isMobile
                  ? "inline-flex size-9 items-center justify-center"
                  : "px-3 py-2 text-xs font-semibold",
              )}
              aria-label="Личный кабинет"
            >
              {isMobile ? <User /> : "Личный кабинет"}
            </Link>
            <Button
              size="icon"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="size-9 rounded-xl bg-primary text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-primary/90 md:hidden [&_svg]:size-5"
              aria-label="Открыть меню"
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </Button>
          </div>
        </div>
        <div className="border-b border-border/50" />
      </div>
      <Navbar isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
