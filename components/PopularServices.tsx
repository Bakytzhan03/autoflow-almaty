import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";

const formatPrice = (price: number) => `${new Intl.NumberFormat("ru-RU").format(price)} ₸`;

type PopularServicesProps = {
  onServiceSelect: (serviceId: string) => void;
};

export default function PopularServices({ onServiceSelect }: PopularServicesProps) {
  const popularServices = services.filter((service) => service.popular).slice(0, 4);

  return (
    <section className="px-4 pt-12 pb-8 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--accent)]">
            ПОПУЛЯРНЫЕ УСЛУГИ
          </p>
          <h2 className="mt-4 max-w-[36rem] text-4xl font-black tracking-normal sm:text-5xl">
            Чаще всего приезжают с этим
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
            Выберите услугу и сразу перейдите к расчёту ориентировочной стоимости.
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:mt-9 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
          {popularServices.map((service) => {
            const Icon = service.icon;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => onServiceSelect(service.id)}
                className="group flex w-full flex-col rounded-[1.75rem] border border-[var(--line)] bg-white p-4 text-left shadow-[0_18px_60px_rgba(17,19,18,0.045)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(232,63,53,0.38)] hover:shadow-[0_24px_80px_rgba(17,19,18,0.075)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-4 sm:min-h-[13.5rem] sm:p-5 lg:p-6"
                aria-label={`Рассчитать стоимость услуги: ${service.title}`}
              >
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[1.1rem] border border-[rgba(232,63,53,0.16)] bg-[rgba(232,63,53,0.06)] text-[var(--accent)] transition group-hover:bg-[var(--accent)] group-hover:text-white sm:h-13 sm:w-13">
                    <Icon className="h-6 w-6" strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[var(--line)] text-[var(--accent)] transition group-hover:translate-x-1 group-hover:border-[rgba(232,63,53,0.35)] group-hover:bg-[rgba(232,63,53,0.06)]">
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-black sm:mt-6">{service.title}</h3>
                <p className="mt-2 text-base leading-6 text-neutral-600 sm:mt-3 sm:flex-1 sm:leading-7">
                  {service.description}
                </p>
                <p className="mt-4 text-lg font-black text-[var(--foreground)] sm:mt-5">
                  от {formatPrice(service.basePrice)}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
