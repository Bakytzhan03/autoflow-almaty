"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { whatsappUrl } from "@/lib/data";

const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Как это работает", href: "#how-it-works" },
  { label: "Отзывы", href: "#testimonials" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(246,247,245,0.86)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-4"
          aria-label="AutoFlow Almaty"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--foreground)] text-sm font-black text-white">
            AF
          </span>
          <span className="min-w-0 text-lg font-black tracking-tight">AutoFlow</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-700 lg:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full transition hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-4"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#calculator"
            className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--accent-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-4"
          >
            Рассчитать стоимость
          </a>
          <a
            href={whatsappUrl}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-3 text-sm font-bold transition hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-4"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[var(--line)] bg-white transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-4 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`border-t border-[var(--line)] bg-[var(--background)] px-4 transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 overflow-hidden py-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-2" aria-label="Мобильная навигация">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className="rounded-2xl px-4 py-3 text-base font-semibold transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#calculator"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            className="mt-2 rounded-2xl bg-[var(--accent)] px-4 py-3 text-center text-base font-bold text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
          >
            Рассчитать стоимость
          </a>
          <a
            href={whatsappUrl}
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-center text-base font-bold focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
