import { services } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";

type ServiceGridProps = {
  onServiceSelect: (serviceId: string) => void;
};

export default function ServiceGrid({ onServiceSelect }: ServiceGridProps) {
  return (
    <section id="services" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-18">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--accent)]">УСЛУГИ</p>
          <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
            Что нужно вашему автомобилю?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
            Выберите услугу — мы рассчитаем ориентировочную стоимость ремонта.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} onSelect={onServiceSelect} />
          ))}
        </div>
        <p className="mt-5 text-sm leading-6 text-neutral-500">
          Цены указаны для демонстрационного расчёта и не являются публичной офертой.
        </p>
      </div>
    </section>
  );
}
