"use client";

import Link from "next/link";
import { MenuIcon, SearchIcon, User, X } from "lucide-react";
import { Input } from "./ui/input";
import { useIsMobile } from "./hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Navbar from "./navbar";
import Logo from "./logo";
import { useIsMenuOpen } from "./hooks/use-menu-open";

export default function Header() {
  const isMobile = useIsMobile(915);
  const { isMenuOpen, setIsMenuOpen } = useIsMenuOpen();

  return (
    <header className="sticky top-0 z-30 bg-white/70 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="relative" style={{ zIndex: 1000 }}>
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background-image:radial-gradient(600px_200px_at_10%_0%,rgba(42,157,244,0.12),transparent),radial-gradient(400px_200px_at_90%_0%,rgba(0,191,166,0.10),transparent)]" />
        <div
          className={cn(
            "container relative z-10 flex min-h-16 items-center justify-between gap-4 border-b border-border/60 lg:min-h-20",
            isMenuOpen && "bg-white",
          )}
        >
          <div className="flex items-center gap-x-4 xl:gap-x-8">
            <Logo />
            <div className="hidden sm:block">
              <p className="text-xs lg:text-sm">
                Круглосуточная запись и консультация по телефону:
              </p>
              <a
                href="tel:+77070700077"
                className="text-sm font-normal underline lg:text-base"
              >
                +7 707 070 00 77
              </a>
            </div>
          </div>
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            {isMobile ? (
              <Button
                size="icon"
                className="size-10 rounded-xl bg-muted text-[#9aa3ab] shadow-soft transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white [&_svg]:size-5"
              >
                <SearchIcon />
              </Button>
            ) : (
              <div className="relative xl:w-80">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9aa3ab]" />
                <Input
                  placeholder="введите запрос"
                  className="h-10 rounded-xl bg-muted pl-10 text-xs font-normal placeholder:text-xs placeholder:uppercase placeholder:text-[#9aa3ab] focus-visible:ring-2 focus-visible:ring-primary"
                />
              </div>
            )}
            <Link
              href="/"
              className={cn(
                "inline-block rounded-xl bg-primary text-white shadow-premium transition-transform hover:-translate-y-0.5 hover:bg-primary/90",
                isMobile
                  ? "inline-flex size-10 items-center justify-center"
                  : "px-4 py-2 text-sm font-semibold",
              )}
            >
              {isMobile ? <User /> : "личный кабинет"}
            </Link>
            <Button
              size="icon"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="size-10 rounded-xl bg-primary text-white shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-primary/90 md:hidden [&_svg]:size-5"
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </Button>
          </div>
        </div>
      </div>
      <Navbar isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
