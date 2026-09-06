import { Check } from "lucide-react";

type CalculatorStepProps = {
  title: string;
  description: string;
  options: Array<{
    id: string;
    label: string;
    detail?: string;
  }>;
  selectedId: string | null;
  onSelect: (id: string) => void;
  compact?: boolean;
};

export default function CalculatorStep({
  title,
  description,
  options,
  selectedId,
  onSelect,
  compact = false,
}: CalculatorStepProps) {
  return (
    <div className="animate-[fadeIn_240ms_ease-out]">
      <h3 className="text-2xl font-black leading-8 tracking-normal sm:text-3xl sm:leading-9">{title}</h3>
      <p className="mt-2 text-base leading-6 text-neutral-600 sm:mt-3 sm:leading-7">{description}</p>
      <div className={`mt-5 grid sm:mt-7 ${compact ? "gap-2 sm:gap-2.5" : "gap-2.5 sm:gap-3"}`}>
        {options.map((option) => {
          const isSelected = selectedId === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option.id)}
              className={`flex w-full items-center justify-between gap-4 rounded-2xl border text-left transition focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 ${
                compact ? "min-h-14 px-4 py-2.5 sm:min-h-16 sm:py-3" : "min-h-16 p-4 sm:min-h-18 sm:p-5"
              } ${
                isSelected
                  ? "border-[var(--accent)] bg-[rgba(232,63,53,0.08)]"
                  : "border-[var(--line)] bg-white hover:border-neutral-300 hover:bg-neutral-50"
              }`}
              aria-pressed={isSelected}
            >
              <span>
                <span className="block text-base font-black">{option.label}</span>
                {option.detail ? (
                  <span className="mt-1 block text-sm leading-6 text-neutral-600">{option.detail}</span>
                ) : null}
              </span>
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border ${
                  isSelected ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-neutral-300"
                }`}
                aria-hidden="true"
              >
                {isSelected ? <Check className="h-4 w-4" /> : null}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
