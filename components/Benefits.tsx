import { ClipboardCheck, MessageCircleOff, MousePointer2, Send } from "lucide-react";

const benefits = [
  {
    title: "Цена известна заранее",
    description: "Получите ориентировочный диапазон стоимости ещё до визита в СТО.",
    icon: ClipboardCheck,
  },
  {
    title: "Без звонка менеджеру",
    description: "Рассчитайте стоимость самостоятельно в удобное для вас время.",
    icon: MessageCircleOff,
  },
  {
    title: "Понятный процесс",
    description: "Выберите услугу, тип автомобиля и сложность работы — всё по шагам.",
    icon: MousePointer2,
  },
  {
    title: "Сразу следующий шаг",
    description: "После расчёта можно оставить заявку или сразу написать в WhatsApp.",
    icon: Send,
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#f9faf8] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--accent)]">
              ПОЧЕМУ AUTOFLOW
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-normal text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Меньше вопросов. Больше понимания до визита.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-neutral-600 lg:justify-self-end">
            AutoFlow помогает заранее понять порядок стоимости и следующий шаг — без долгих звонков и
            лишней переписки.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="group relative flex min-h-0 flex-col overflow-hidden rounded-[2rem] border border-black/[0.07] bg-white p-5 shadow-[0_20px_70px_rgba(17,19,18,0.045)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(232,63,53,0.3)] hover:shadow-[0_26px_80px_rgba(17,19,18,0.07)] sm:min-h-[15.5rem] sm:p-6 lg:p-7"
              >
                <div className="absolute inset-x-7 top-0 h-1 rounded-b-full bg-[var(--accent)] opacity-90" />

                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-[1.25rem] border border-[rgba(232,63,53,0.16)] bg-[rgba(232,63,53,0.06)] text-[var(--accent)] transition duration-300 group-hover:bg-[var(--accent)] group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="text-sm font-black text-neutral-300">{String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="mt-5 pt-0 sm:mt-8">
                  <h3 className="max-w-[13rem] text-2xl font-black leading-tight text-[var(--foreground)]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-neutral-600 sm:mt-4">{benefit.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
