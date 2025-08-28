import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-white">
      <div className="container grid gap-10 pb-12 pt-12 text-sm text-foreground sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="mb-4 text-base font-semibold">О клинике</h4>
          <p className="text-foreground/70">Товарищество с ограниченной ответственностью "International Clinic of Asia" – многопрофильный медицинский центр в г. Астана.</p>
        </div>
        <div>
          <h4 className="mb-4 text-base font-semibold">Контакты</h4>
          <ul className="space-y-1 text-foreground/80">
            <li>+7 (7172) 49-03-84</li>
            <li>+7 (778) 906-40-60</li>
            <li>Пн-Пт: 08:30–17:30</li>
            <li>Сб: 08:30–13:00</li>
            <li>г. Астана, ул. Мәскеу, 11А</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-base font-semibold">Пациентам</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/services" className="text-foreground/80 transition-colors hover:text-foreground">Услуги</Link>
            </li>
            <li>
              <Link href="/doctors" className="text-foreground/80 transition-colors hover:text-foreground">Врачи</Link>
            </li>
            <li>
              <Link href="/sales" className="text-foreground/80 transition-colors hover:text-foreground">Акции</Link>
            </li>
            <li>
              <Link href="/reviews" className="text-foreground/80 transition-colors hover:text-foreground">Отзывы</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-base font-semibold">Правовая информация</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="text-foreground/80 transition-colors hover:text-foreground">Политика конфиденциальности</Link>
            </li>
            <li>
              <Link href="/" className="text-foreground/80 transition-colors hover:text-foreground">Согласие на обработку ПД</Link>
            </li>
            <li>
              <Link href="/" className="text-foreground/80 transition-colors hover:text-foreground">Условия использования</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 bg-white">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-foreground/60 sm:flex-row sm:text-sm">
          <p>&copy; {new Date().getFullYear()} International Clinic of Asia. Все права защищены.</p>
          <p>Сделано с заботой о пациентах</p>
        </div>
      </div>
    </footer>
  );
}
