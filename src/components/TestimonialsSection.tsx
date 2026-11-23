import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';
import { Reveal } from './Reveal';

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-white py-14 sm:py-22 lg:py-26"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-[#DDF5EF] px-4 py-1.5 text-xs font-bold tracking-wide text-[#087E83]">
              Patient Stories
            </span>
            <h2 className="mt-3.5 font-[var(--font-display)] text-[1.75rem] leading-tight font-extrabold tracking-[-0.025em] text-[#172D35] sm:text-4xl">
              What Our Patients{' '}
              <span className="text-[#087E83]">Say</span>
            </h2>
          </div>

          <p className="mx-auto max-w-sm text-xs leading-relaxed text-[#4A626A] sm:mx-0 sm:text-right">
            Illustrative sample testimonials. Replace with verified, consented patient reviews prior to clinic launch.
          </p>
        </div>

        <div className="mt-9 sm:mt-11 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.id} delayMs={index * 65} className="flex">
              <figure className="flex w-full flex-col justify-between rounded-3xl border border-[#172D35]/8 bg-[#F5FAF9] p-7 transition-all duration-200 hover:border-[#42B8A5]/45 hover:bg-white hover:shadow-[0_16px_38px_rgba(8,126,131,0.08)]">
                <div>
                  {/* Star graphic explicitly labelled as illustrative demo content */}
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className="flex items-center gap-1 text-[#087E83]"
                      aria-label={`${item.rating} out of 5 stars (illustrative demo graphic)`}
                    >
                      {Array.from({ length: item.rating }).map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          className="h-4 w-4 fill-[#42B8A5] text-[#42B8A5]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-medium text-[#4A626A]">
                      Illustrative demo rating
                    </span>
                  </div>

                  <blockquote className="mt-5 text-[15px] leading-relaxed text-[#172D35]">
                    {item.quote}
                  </blockquote>
                </div>

                <figcaption className="mt-7 border-t border-[#172D35]/8 pt-4">
                  <p className="font-[var(--font-display)] text-sm font-bold text-[#172D35]">
                    {item.patientName}
                  </p>
                  <p className="mt-0.5 text-xs text-[#4A626A]">
                    {item.treatmentLabel}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
