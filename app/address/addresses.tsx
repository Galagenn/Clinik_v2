export default function Addresses() {
  return (
    <section className="pb-10 sm:pb-20 md:pb-40">
      <div className="container">
        <h2 className="mb-8 sm:mb-[4.6875rem] text-2xl font-semibold tracking-tight">Наши адреса</h2>
      </div>
      <div className="container grid !max-w-[69.5rem] grid-cols-1 gap-x-6 md:grid-cols-[4fr,1fr] justify-between">
        <p className="mb-6 sm:mb-[3.75rem] text-foreground/70">Адреса:</p>
        <p className="mb-6 sm:mb-[3.75rem] text-foreground/70 md:justify-self-end">Номера телефона</p>
        <ul className="space-y-4 break-words">
          <li>
            <p>Абылай хан көшесі, 45, Астана, Қазақстан, 050000</p>
          </li>
          <li>
            <p>Тәуелсіздік даңғылы, 120, Астана, Қазақстан, 010000</p>
          </li>
          <li>
            <p>Байтерек көшесі, 18, Астана, Қазақстан, 160000</p>
          </li>
          <li>
            <p>Жібек Жолы көшесі, 77А, Қарағанды, Қазақстан, 100000</p>
          </li>
          <li>
            <p>Абай даңғылы, 10, Өскемен, Қазақстан, 070000</p>
          </li>
          <li>
            <p>Қазақ хандығы көшесі, 33, Ақтау, Қазақстан, 130000</p>
          </li>
          <li>
            <p>Әл-Фараби даңғылы, 50, Түркістан, Қазақстан, 161200</p>
          </li>
          <li>
            <p>Мәңгілік Ел көшесі, 99, Павлодар, Қазақстан, 140000</p>
          </li>
          <li>
            <p>Наурызбай батыр көшесі, 5, Талдықорған, Қазақстан, 040000</p>
          </li>
          <li>
            <p>Алтын Орда көшесі, 22, Атырау, Қазақстан, 060000</p>
          </li>
        </ul>
        <ul className="space-y-4 md:justify-self-end">
          <li>
            <a href="tel:+77051112233" className="text-primary hover:underline">+7 (705) 111-22-33</a>
          </li>
          <li>
            <a href="tel:+77074445566" className="text-primary hover:underline">+7 (707) 444-55-66</a>
          </li>
          <li>
            <a href="tel:+77478889900" className="text-primary hover:underline">+7 (747) 888-99-00</a>
          </li>
          <li>
            <a href="tel:+77011234567" className="text-primary hover:underline">+7 (701) 123-45-67</a>
          </li>
          <li>
            <a href="tel:+77082223344" className="text-primary hover:underline">+7 (708) 222-33-44</a>
          </li>
          <li>
            <a href="tel:+77775556677" className="text-primary hover:underline">+7 (777) 555-66-77</a>
          </li>
          <li>
            <a href="tel:+77019876543" className="text-primary hover:underline">+7 (701) 987-65-43</a>
          </li>
          <li>
            <a href="tel:+77023456789" className="text-primary hover:underline">+7 (702) 345-67-89</a>
          </li>
          <li>
            <a href="tel:+77476543210" className="text-primary hover:underline">+7 (747) 654-32-10</a>
          </li>
          <li>
            <a href="tel:+77751112211" className="text-primary hover:underline">+7 (775) 111-22-11</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
