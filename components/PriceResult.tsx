"use client";

import { MessageCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { whatsappUrl } from "@/lib/data";

type PriceResultProps = {
  minPrice: number;
  maxPrice: number;
};

const formatPrice = (price: number) => `${new Intl.NumberFormat("ru-RU").format(price)} ₸`;

export default function PriceResult({ minPrice, maxPrice }: PriceResultProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7 ");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getLocalPhoneDigits = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    let localDigits = digitsOnly;

    if (localDigits === "7" || localDigits === "8") {
      return "";
    }

    if (localDigits.length > 10 && (localDigits.startsWith("7") || localDigits.startsWith("8"))) {
      localDigits = localDigits.slice(1);
    }

    return localDigits.slice(0, 10);
  };

  const formatKazakhstanPhone = (value: string) => {
    const localDigits = getLocalPhoneDigits(value);

    if (!localDigits) {
      return "+7 ";
    }

    const code = localDigits.slice(0, 3);
    const first = localDigits.slice(3, 6);
    const second = localDigits.slice(6, 8);
    const third = localDigits.slice(8, 10);

    let formatted = `+7 (${code}`;

    if (code.length === 3) {
      formatted += ")";
    }

    if (first) {
      formatted += ` ${first}`;
    }

    if (second) {
      formatted += `-${second}`;
    }

    if (third) {
      formatted += `-${third}`;
    }

    return formatted;
  };

  const getPhoneError = (value: string) => {
    const localDigits = getLocalPhoneDigits(value);

    if (!localDigits) {
      return "Укажите телефон.";
    }

    if (localDigits.length !== 10 || /^(\d)\1{9}$/.test(localDigits)) {
      return "Введите корректный номер Казахстана.";
    }

    return undefined;
  };

  const handlePhoneChange = (value: string) => {
    setPhone(formatKazakhstanPhone(value));
    setIsSubmitted(false);

    if (errors.phone) {
      setErrors((current) => ({ ...current, phone: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = {
      name: name.trim() ? undefined : "Укажите имя.",
      phone: getPhoneError(phone),
    };

    setErrors(nextErrors);

    if (!nextErrors.name && !nextErrors.phone) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="animate-[fadeIn_240ms_ease-out]">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--accent)]">Ориентировочная стоимость</p>
      <div className="mt-4 rounded-[1.5rem] border border-[var(--line)] bg-[#f6f7f5] p-6">
        <p className="text-4xl font-black tracking-normal sm:text-5xl">
          {formatPrice(minPrice)} — {formatPrice(maxPrice)}
        </p>
        <p className="mt-4 text-base leading-7 text-neutral-600">
          Точная стоимость определяется после диагностики автомобиля.
        </p>
      </div>

      <form className="mt-8 grid gap-4" aria-label="Форма заявки" noValidate onSubmit={handleSubmit}>
        <label className="grid gap-2 text-sm font-bold text-neutral-700">
          Имя
          <input
            className="h-14 rounded-2xl border border-[var(--line)] bg-white px-4 text-base font-medium outline-none transition placeholder:text-neutral-400 focus:border-[var(--accent)] focus:ring-4 focus:ring-[rgba(232,63,53,0.12)] aria-invalid:border-[var(--accent)]"
            name="name"
            placeholder="Ваше имя"
            autoComplete="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setIsSubmitted(false);

              if (errors.name) {
                setErrors((current) => ({ ...current, name: undefined }));
              }
            }}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "request-name-error" : undefined}
          />
          {errors.name ? (
            <span id="request-name-error" className="text-xs font-bold text-[var(--accent)]">
              {errors.name}
            </span>
          ) : null}
        </label>
        <label className="grid gap-2 text-sm font-bold text-neutral-700">
          Телефон
          <input
            className="h-14 rounded-2xl border border-[var(--line)] bg-white px-4 text-base font-medium outline-none transition placeholder:text-neutral-400 focus:border-[var(--accent)] focus:ring-4 focus:ring-[rgba(232,63,53,0.12)] aria-invalid:border-[var(--accent)]"
            name="phone"
            placeholder="+7"
            autoComplete="tel"
            inputMode="tel"
            type="tel"
            value={phone}
            onChange={(event) => handlePhoneChange(event.target.value)}
            onFocus={() => {
              if (!phone.trim()) {
                setPhone("+7 ");
              }
            }}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "request-phone-error" : undefined}
          />
          {errors.phone ? (
            <span id="request-phone-error" className="text-xs font-bold text-[var(--accent)]">
              {errors.phone}
            </span>
          ) : null}
        </label>

        <div className="mt-2 grid min-w-0 gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <button
            type="submit"
            className="inline-flex min-h-14 w-full min-w-0 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-center text-base font-black leading-tight text-white transition hover:bg-[var(--accent-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-4"
          >
            <Send className="h-5 w-5" aria-hidden="true" />
            Оставить заявку
          </button>
          <a
            href={whatsappUrl}
            className="inline-flex min-h-14 w-full min-w-0 items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-3 text-center text-base font-black leading-tight transition hover:border-neutral-300 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-4"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Написать в WhatsApp
          </a>
        </div>
        {isSubmitted ? (
          <p className="text-sm font-bold text-neutral-600">Спасибо, заявка готова к отправке.</p>
        ) : null}
      </form>
    </div>
  );
}
