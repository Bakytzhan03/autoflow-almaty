import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/data";

export default function FinalCTA() {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white p-5 shadow-[0_24px_80px_rgba(17,19,18,0.07)] sm:p-8 lg:p-12">
        <div className="grid items-center gap-7 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="min-w-0">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--accent)]">Расчёт стоимости</p>
            <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl lg:text-6xl">Узнайте стоимость ремонта</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
              Получите ориентировочную стоимость для вашего автомобиля за несколько шагов.
            </p>
          </div>
          <div className="flex min-w-0 flex-col gap-3 sm:flex-row lg:w-72 lg:flex-col">
            <a
              href="#calculator"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-7 py-4 text-center text-base font-black leading-tight text-white transition hover:bg-[var(--accent-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-4"
            >
              Рассчитать стоимость
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={whatsappUrl}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white px-7 py-4 text-center text-base font-black leading-tight transition hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-4"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
