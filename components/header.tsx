"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import Logo from "./logo";
import { useMenuOpen } from "./hooks/use-menu-open";
import { useMobile } from "./hooks/use-mobile";
import Navbar from "./navbar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      {/* Верхняя полоса с контактами */}
      <div className="border-b border-border/40 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between py-2 text-xs text-foreground/70">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3" />
                <span>+7 (7172) 49-03-84</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <MapPin className="h-3 w-3" />
                <span>г. Астана, ул. Мәскеу, 11А</span>
              </div>
              <div className="hidden lg:flex items-center gap-2">
                <Clock className="h-3 w-3" />
                <span>Пн-Пт: 08:30–17:30</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 text-xs text-foreground/60">
                <span>Запись и консультация</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Основной хедер */}
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Логотип */}
          <Logo />

          {/* Навигация для десктопа */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              href="/services" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Услуги
            </Link>
            <Link 
              href="/doctors" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Врачи
            </Link>
            <Link 
              href="/sales" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Акции
            </Link>
            <Link 
              href="/reviews" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Отзывы
            </Link>
            <Link 
              href="/about-us" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              О клинике
            </Link>
            <Link 
              href="/contacts" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Контакты
            </Link>
          </nav>

          {/* Кнопки для десктопа */}
          <div className="hidden lg:flex items-center gap-3">
            <Link 
              href="/contacts" 
              className="rounded-lg px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Контакты
            </Link>
            <Link 
              href="#book" 
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
            >
              Записаться
            </Link>
          </div>

          {/* Мобильное меню */}
          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-foreground/70 hover:bg-muted hover:text-foreground transition-colors"
            aria-label="Открыть меню"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <Navbar isMenuOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
}
