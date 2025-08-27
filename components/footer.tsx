import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#0b1b2b] text-white">
      <div className="container grid gap-10 pb-12 pt-12 text-sm sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="mb-4 text-base font-semibold">О клинике</h4>
          <p className="text-white/70">Центр Здоровья — современная клиника для всей семьи.</p>
        </div>
        <div>
          <h4 className="mb-4 text-base font-semibold">Контакты</h4>
          <ul className="space-y-1 text-white/80">
            <li>+7 707 070 00 77</li>
            <li>Пн-Вс: 08:00–20:00</li>
            <li>г. Алматы, ул. Здоровья, 10</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-base font-semibold">Пациентам</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/services" className="text-white/80 transition-colors hover:text-primary">Услуги</Link>
            </li>
            <li>
              <Link href="/sales" className="text-white/80 transition-colors hover:text-primary">Акции</Link>
            </li>
            <li>
              <Link href="/reviews" className="text-white/80 transition-colors hover:text-primary">Отзывы</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-base font-semibold">Правовая информация</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="text-white/80 transition-colors hover:text-primary">Политика конфиденциальности</Link>
            </li>
            <li>
              <Link href="/" className="text-white/80 transition-colors hover:text-primary">Согласие на обработку ПД</Link>
            </li>
            <li>
              <Link href="/" className="text-white/80 transition-colors hover:text-primary">Условия использования</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#0b1b2b]">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Центр Здоровья. Все права защищены.</p>
          <p>Сделано с заботой о пациентах</p>
        </div>
      </div>
    </footer>
  );
}
