import Image from "next/image";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { visualStats, whatsappUrl } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="px-4 pb-7 pt-4 sm:px-6 sm:pb-18 sm:pt-6 lg:px-8 lg:pb-24 lg:pt-10">
      <div className="mx-auto grid max-w-7xl items-center gap-x-12 gap-y-8 md:grid-cols-[0.48fr_0.52fr] xl:gap-x-16">
        <div className="order-1 min-w-0 max-w-2xl md:order-none md:col-start-1 md:row-start-1 md:max-w-none md:self-end">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white px-3.5 py-1.5 text-xs font-bold text-neutral-700 shadow-[0_8px_22px_rgba(17,19,18,0.035)] sm:text-sm">
            <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" aria-hidden="true" />
            Расчёт стоимости за 1 минуту
          </span>

          <h1 className="mt-6 max-w-full text-[clamp(1.75rem,8vw,2.28rem)] font-black leading-[0.99] tracking-normal text-[var(--foreground)] sm:text-[3.4rem] md:text-[2.82rem] lg:mt-7 xl:text-[clamp(3.05rem,3.75vw,3.38rem)]">
            <span className="block whitespace-nowrap md:whitespace-normal xl:whitespace-nowrap">Узнайте стоимость</span>
            <span className="block whitespace-nowrap md:whitespace-normal xl:whitespace-nowrap">ремонта до визита</span>
            <span className="block whitespace-nowrap md:whitespace-normal xl:whitespace-nowrap">в СТО</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600 sm:text-xl md:max-w-lg">
            Выберите услугу, укажите автомобиль и получите ориентировочную стоимость за минуту.
          </p>
        </div>

        <div className="order-3 relative min-w-0 md:order-none md:col-start-2 md:row-span-2 md:row-start-1">
          <div className="rounded-[2rem] border border-black/[0.04] bg-white p-2 shadow-[0_20px_70px_rgba(17,19,18,0.06)] sm:p-4">
            <div className="overflow-hidden rounded-[1.5rem] bg-[#f0f1ee] p-3 sm:p-7 lg:p-8">
              <div className="flex flex-col items-start justify-between gap-2.5 lg:flex-row lg:gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-neutral-500">AUTOFLOW ALMATY</p>
                  <p className="mt-2 text-[1.6rem] font-black leading-tight sm:mt-3 sm:text-3xl">Расчёт стоимости</p>
                  <p className="mt-2 text-sm font-semibold text-neutral-500">СТО в Алматы · Цены в ₸</p>
                </div>
                <div className="rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-bold text-neutral-700 shadow-[0_8px_22px_rgba(17,19,18,0.035)] lg:shrink-0">
                  Ориентировочный расчёт
                </div>
              </div>

              <div className="mt-3 overflow-hidden rounded-[1.35rem] border border-white/80 bg-white sm:mt-8">
                <Image
                  src="/images/autoflow-hero-vehicle.png"
                  alt="Современный автомобиль и элементы расчёта стоимости ремонта"
                  width={1536}
                  height={864}
                  priority
                  className="aspect-[16/9] h-auto w-full scale-[1.16] object-cover object-center"
                />
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 min-[390px]:grid-cols-[1.05fr_1.35fr_1.1fr] sm:mt-5 sm:grid-cols-3 sm:gap-3 md:grid-cols-1 lg:grid-cols-3">
                {visualStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`min-w-0 rounded-2xl border border-white/80 bg-white/75 px-2 py-3 shadow-[0_10px_30px_rgba(17,19,18,0.04)] sm:p-4 ${
                      index === 2 ? "col-span-2 min-[390px]:col-span-1 md:col-span-1" : ""
                    }`}
                  >
                    <p className="text-[0.7rem] font-semibold leading-4 text-neutral-500 sm:text-xs">{stat.label}</p>
                    <p className="mt-1 text-[0.95rem] font-black leading-5 break-words sm:text-lg sm:leading-7">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="order-2 flex min-w-0 flex-col gap-3 sm:flex-row md:order-none md:col-start-1 md:row-start-2 md:self-start">
          <a
            href="#calculator"
            className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-[1.1rem] bg-[var(--accent)] px-5 text-base font-black text-white shadow-[0_14px_30px_rgba(232,63,53,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-dark)] hover:shadow-[0_18px_38px_rgba(232,63,53,0.26)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-4 sm:w-auto sm:px-7"
          >
            Рассчитать стоимость
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={whatsappUrl}
            className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-[1.1rem] border border-[var(--line)] bg-white px-5 text-base font-black transition duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-4 sm:w-auto sm:px-7"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
