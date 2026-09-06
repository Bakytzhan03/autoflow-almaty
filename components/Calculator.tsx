"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import CalculatorStep from "@/components/CalculatorStep";
import PriceResult from "@/components/PriceResult";
import { carTypes, complexities, services } from "@/lib/data";

const STEPS_TOTAL = 4;

const roundTenge = (value: number) => Math.round(value);

const carTypeDetails: Record<string, string> = {
  sedan: "Стандартный кузов",
  crossover: "Увеличенный кузов",
  suv: "Крупный автомобиль",
  commercial: "Коммерческий транспорт",
};

type CalculatorProps = {
  initialServiceId?: string | null;
};

export default function Calculator({ initialServiceId }: CalculatorProps) {
  const [step, setStep] = useState(1);
  const [serviceId, setServiceId] = useState<string | null>(initialServiceId ?? services[0]?.id ?? null);
  const [carTypeId, setCarTypeId] = useState<string | null>(carTypes[0]?.id ?? null);
  const [complexityId, setComplexityId] = useState<string | null>(complexities[0]?.id ?? null);

  const selectedService = services.find((service) => service.id === serviceId) ?? services[0];
  const selectedCarType = carTypes.find((carType) => carType.id === carTypeId) ?? carTypes[0];
  const selectedComplexity =
    complexities.find((complexity) => complexity.id === complexityId) ?? complexities[0];

  const priceRange = useMemo(() => {
    const result =
      selectedService.basePrice * selectedCarType.coefficient * selectedComplexity.coefficient;

    return {
      min: roundTenge(result * 0.9),
      max: roundTenge(result * 1.1),
    };
  }, [selectedCarType.coefficient, selectedComplexity.coefficient, selectedService.basePrice]);

  const canGoNext =
    (step === 1 && serviceId) ||
    (step === 2 && carTypeId) ||
    (step === 3 && complexityId) ||
    step === 4;
  const stepPanelMinHeight = step === 1 ? "sm:min-h-[31rem]" : "min-h-0";

  const goNext = () => {
    if (step < STEPS_TOTAL && canGoNext) {
      setStep((value) => value + 1);
    }
  };

  const goBack = () => {
    if (step > 1) {
      setStep((value) => value - 1);
    }
  };

  return (
    <section id="calculator" className="px-3 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-5 sm:gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="lg:pt-6">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--accent)]">Калькулятор</p>
          <h2 className="mt-3 text-[2rem] font-black leading-9 tracking-normal sm:mt-4 sm:text-5xl sm:leading-none">
            Расчет стоимости без звонка менеджеру
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 sm:mt-5 sm:text-lg sm:leading-8">
            Выберите параметры ремонта. Итоговый диапазон поможет понять порядок цены до визита в СТО.
          </p>
        </div>

        <div className="min-w-0 rounded-[2rem] border border-[var(--line)] bg-white p-3 shadow-[0_24px_80px_rgba(17,19,18,0.08)] sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-3 sm:mb-6 sm:gap-4">
            <div className="text-sm font-black text-neutral-500">{step} / {STEPS_TOTAL}</div>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-100" aria-hidden="true">
              <div
                className="h-full rounded-full bg-[var(--accent)] transition-all duration-300"
                style={{ width: `${(step / STEPS_TOTAL) * 100}%` }}
              />
            </div>
          </div>

          <div
            className={`${stepPanelMinHeight} min-w-0 rounded-[1.5rem] border border-[var(--line)] bg-[#fbfbfa] p-4 sm:p-7 lg:p-8`}
          >
            {step === 1 ? (
              <CalculatorStep
                title="Какая услуга нужна?"
                description="Начните с направления работ, которое ближе всего описывает задачу."
                options={services.map((service) => ({
                  id: service.id,
                  label: service.title,
                  detail: `от ${new Intl.NumberFormat("ru-RU").format(service.basePrice)} ₸`,
                }))}
                selectedId={serviceId}
                onSelect={setServiceId}
                compact
              />
            ) : null}

            {step === 2 ? (
              <CalculatorStep
                title="Тип автомобиля"
                description="Размер и конструкция автомобиля влияют на трудоемкость работ."
                options={carTypes.map((carType) => ({
                  id: carType.id,
                  label: carType.label,
                  detail: carTypeDetails[carType.id],
                }))}
                selectedId={carTypeId}
                onSelect={setCarTypeId}
                compact
              />
            ) : null}

            {step === 3 ? (
              <CalculatorStep
                title="Сложность проблемы"
                description="Выберите сценарий, который лучше описывает текущую ситуацию."
                options={complexities.map((complexity) => ({
                  id: complexity.id,
                  label: complexity.label,
                  detail: complexity.hint,
                }))}
                selectedId={complexityId}
                onSelect={setComplexityId}
              />
            ) : null}

            {step === 4 ? <PriceResult minPrice={priceRange.min} maxPrice={priceRange.max} /> : null}
          </div>

          <div className="mt-4 flex min-w-0 flex-col-reverse gap-2.5 sm:mt-6 sm:flex-row sm:justify-between sm:gap-3">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 1}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2.5 text-sm font-black leading-tight transition hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-4 disabled:cursor-not-allowed disabled:opacity-40 sm:min-h-13 sm:px-6 sm:py-3 sm:text-base"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              Назад
            </button>
            {step < STEPS_TOTAL ? (
              <button
                type="button"
                onClick={goNext}
                disabled={!canGoNext}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-4 py-2.5 text-sm font-black leading-tight text-white transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-4 disabled:cursor-not-allowed disabled:opacity-40 sm:min-h-13 sm:px-6 sm:py-3 sm:text-base"
              >
                Далее
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--foreground)] px-4 py-2.5 text-sm font-black leading-tight text-white transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-4 sm:min-h-13 sm:px-6 sm:py-3 sm:text-base"
              >
                Новый расчет
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
