import { howItWorks } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--accent)]">КАК ЭТО РАБОТАЕТ</p>
          <h2 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">Три шага до записи</h2>
        </div>
        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-3">
          {howItWorks.map((item, index) => (
            <article
              key={item.number}
              className="relative rounded-[1.5rem] border border-[var(--line)] bg-white px-5 py-4 sm:p-6 lg:p-7"
            >
              <p className="text-5xl font-black text-[var(--accent)]">{item.number}</p>
              <h3 className="mt-4 text-2xl font-black sm:mt-6 lg:mt-8">{item.title}</h3>
              <p className="mt-2 text-base leading-7 text-neutral-600 sm:mt-3">{item.text}</p>
              {index < howItWorks.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-5 top-1/2 z-10 hidden w-6 -translate-y-1/2 lg:block"
                >
                  <span className="block h-px w-full bg-neutral-300" />
                  <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-neutral-300" />
                </span>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
