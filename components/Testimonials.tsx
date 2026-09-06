import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--accent)]">Отзывы</p>
          <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">
            Спокойный сервис для занятых водителей
          </h2>
        </div>
        <div className="mt-6 grid gap-3 sm:gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={`${testimonial.name}-${testimonial.car}`}
              className="flex h-full flex-col rounded-[1.5rem] border border-[var(--line)] bg-white px-5 py-4 sm:px-6 sm:py-5"
            >
              <div className="flex gap-1 text-[var(--accent)]" aria-label="Оценка 5 из 5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-base leading-7 text-neutral-600 sm:mt-5 lg:flex-1">{testimonial.text}</p>
              <div className="mt-4 border-t border-[var(--line)] pt-3 sm:mt-5 sm:pt-4">
                <p className="font-black text-neutral-950">{testimonial.name}</p>
                <p className="mt-1 text-sm font-semibold text-neutral-500">{testimonial.car}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
