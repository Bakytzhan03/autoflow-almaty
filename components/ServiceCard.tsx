import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";

type ServiceCardProps = {
  service: Service;
  onSelect: (serviceId: string) => void;
};

const formatPrice = (price: number) => `${new Intl.NumberFormat("ru-RU").format(price)} ₸`;

export default function ServiceCard({ service, onSelect }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <button
      type="button"
      onClick={() => onSelect(service.id)}
      className="group flex w-full flex-col rounded-[1.75rem] border border-[var(--line)] bg-white p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-[rgba(232,63,53,0.45)] hover:shadow-[0_22px_70px_rgba(17,19,18,0.08)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-4 sm:min-h-[16rem] sm:p-6 lg:p-7"
      aria-label={`Рассчитать стоимость услуги: ${service.title}`}
    >
      <div className="mb-4 flex items-start justify-between gap-3 sm:mb-6 sm:gap-4">
        <div className="relative grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-[1.25rem] border border-[rgba(232,63,53,0.18)] bg-[rgba(232,63,53,0.07)] text-[var(--accent)] transition group-hover:bg-[var(--accent)] group-hover:text-white sm:h-17 sm:w-17">
          <span className="absolute -right-4 top-4 h-px w-14 bg-current opacity-25" aria-hidden="true" />
          <span className="absolute bottom-4 left-3 h-px w-10 bg-current opacity-25" aria-hidden="true" />
          <Icon className="relative h-8 w-8" strokeWidth={1.8} aria-hidden="true" />
        </div>
        <span className="whitespace-nowrap rounded-full border border-[var(--line)] bg-[#fbfbfa] px-3.5 py-1.5 text-sm font-black text-[var(--foreground)]">
          от {formatPrice(service.basePrice)}
        </span>
      </div>
      <h3 className="text-2xl font-black">{service.title}</h3>
      <p className="mt-2 text-base leading-7 text-neutral-600 sm:mt-4 sm:flex-1">{service.description}</p>
      <span className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-[var(--accent)] transition duration-300 group-hover:translate-x-1 group-hover:border-[var(--accent)] group-hover:bg-[rgba(232,63,53,0.08)] sm:mt-6">
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </span>
    </button>
  );
}
