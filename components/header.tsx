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
    <header className="sticky top-0 z-30">
      <div className="bg-neutral-100">
        <div
          className={cn(
            "container relative z-10 flex min-h-20 items-center justify-between gap-4 border-b border-black/5 lg:min-h-[7.375rem]",
            isMenuOpen && "bg-white",
          )}
        >
          <div className="flex items-center gap-x-5 xl:gap-x-[3.125rem]">
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
          <div className="flex items-center gap-x-5 lg:gap-x-[2.3125rem]">
            {isMobile ? (
              <Button
                size="icon"
                className="size-[2.8125rem] rounded-[.9375rem] bg-[#ebebeb] text-[#cfcdcd] hover:bg-[#2a5adb]/[.56] hover:text-white [&_svg]:size-6"
              >
                <SearchIcon />
              </Button>
            ) : (
              <div className="relative xl:w-[22.25rem]">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#cfcdcd]" />
                <Input
                  placeholder="введите запрос"
                  className="h-[2.8125rem] rounded-[.9375rem] bg-[#ebebeb] pl-14 text-xs font-normal placeholder:text-xs placeholder:uppercase placeholder:text-[#a8a5a5]"
                />
              </div>
            )}
            <Link
              href="/"
              className={cn(
                "inline-block rounded-[.9375rem] bg-[#2a5adb]/[.56] text-white shadow-inner drop-shadow-xl",
                isMobile
                  ? "inline-flex size-[2.8125rem] items-center justify-center"
                  : "px-[1.625rem] py-[.875rem] text-sm font-semibold uppercase",
              )}
            >
              {isMobile ? <User /> : "личный кабинет"}
            </Link>
            <Button
              size="icon"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="size-[2.8125rem] rounded-[.9375rem] bg-[#2a5adb]/[.56] shadow-inner drop-shadow-xl hover:bg-[#2a5adb]/[.8] md:hidden [&_svg]:size-6"
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </Button>
          </div>
        </div>
      </div>
      <Navbar isMenuOpen={isMenuOpen} />
    </header>
  );
}
