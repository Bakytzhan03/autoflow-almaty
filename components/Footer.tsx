import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/data";

const footerNav = [
  { label: "Услуги", href: "#services" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Как это работает", href: "#how-it-works" },
  { label: "Отзывы", href: "#testimonials" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-y-5 gap-x-8 sm:gap-y-7 md:grid-cols-[minmax(0,1fr)_minmax(11rem,14rem)] lg:grid-cols-[minmax(18rem,1fr)_minmax(10rem,14rem)_max-content] lg:gap-x-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--foreground)] text-sm font-black text-white">
              AF
            </span>
            <span className="text-lg font-black">AutoFlow</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-600 sm:text-base">
            Алматы. Телефон: +7 700 000 00 00. Ежедневно 09:00-20:00.
          </p>
        </div>

        <nav className="grid gap-0 text-sm font-bold text-neutral-700 sm:gap-2.5 sm:text-base" aria-label="Навигация в футере">
          {footerNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex min-h-11 items-center transition hover:text-[var(--accent)] sm:block sm:min-h-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-start md:col-span-2 lg:col-span-1 lg:justify-self-end">
          <a
            href={whatsappUrl}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 text-sm font-black transition hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-4 sm:text-base"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
      <div className="mx-auto mt-5 max-w-6xl border-t border-[var(--line)] pt-3 text-sm font-medium text-neutral-500 sm:mt-7 sm:pt-4">
        © 2026 AutoFlow Almaty
      </div>
    </footer>
  );
}
