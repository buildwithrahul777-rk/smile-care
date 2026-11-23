import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  TREATMENTS,
  type TreatmentCategory,
  type TreatmentItem,
} from '../data/clinicData';
import { filterTreatments } from '../utils/appointmentValidation';
import { SafeImage, TreatmentIcon } from './BrandLogo';
import { Reveal } from './Reveal';

interface TreatmentsSectionProps {
  onLearnMore: (treatment: TreatmentItem) => void;
}

const FILTER_OPTIONS: { id: TreatmentCategory; label: string }[] = [
  { id: 'all', label: 'All Treatments' },
  { id: 'preventive-restorative', label: 'Preventive & Restorative' },
  { id: 'orthodontics-cosmetic', label: 'Orthodontics & Cosmetic' },
];

export function TreatmentsSection({ onLearnMore }: TreatmentsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<TreatmentCategory>('all');
  const visibleTreatments = filterTreatments(TREATMENTS, activeFilter);

  return (
    <section
      id="treatments"
      className="bg-white py-14 sm:py-22 lg:py-26"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Centered header matching Screen 2 of reference screenshot */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-[#DDF5EF] px-4 py-1.5 text-xs font-bold tracking-wide text-[#087E83]">
            Our Treatments
          </span>

          <h2 className="mt-3.5 font-[var(--font-display)] text-[1.75rem] leading-tight font-extrabold tracking-[-0.025em] text-[#172D35] sm:text-4xl">
            Comprehensive Dental{' '}
            <span className="text-[#087E83]">Treatments</span>
          </h2>

          <div
            aria-hidden="true"
            className="mx-auto mt-3.5 h-0.5 w-11 rounded-full bg-[#087E83]"
          />

          <p className="mt-4 text-sm leading-relaxed text-[#4A626A] sm:text-base">
            Modern preventive, restorative, and aesthetic treatments tailored for comfort and lasting oral health.
          </p>
        </div>

        {/* Interactive Category Tabs */}
        <div className="mt-7 flex justify-center">
          <div
            role="tablist"
            aria-label="Filter dental treatments by category"
            className="inline-flex flex-wrap sm:flex-nowrap justify-center items-center gap-1 rounded-2xl border border-[#172D35]/10 bg-[#F5FAF9] p-1.5"
          >
            {FILTER_OPTIONS.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`min-h-[38px] rounded-xl px-3 sm:px-4 py-1.5 text-xs font-semibold transition-all duration-150 whitespace-nowrap shrink-0 sm:text-sm ${
                    isSelected
                      ? 'bg-[#087E83] text-white shadow-sm'
                      : 'text-[#4A626A] hover:bg-white hover:text-[#172D35]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Photo-Led Treatment Cards: 2-column grid on mobile (matching screenshot), 3-column on desktop */}
        <div
          data-testid="treatments-grid"
          className="mt-8 sm:mt-11 grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {visibleTreatments.map((treatment, index) => (
            <Reveal
              key={treatment.id}
              delayMs={Math.min(index * 45, 180)}
              className="flex"
            >
              <article className="group flex w-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-[#172D35]/8 bg-white shadow-[0_8px_28px_rgba(23,45,53,0.06)] transition-all duration-200 hover:-translate-y-1 hover:border-[#42B8A5]/50 hover:shadow-[0_18px_40px_rgba(8,126,131,0.12)]">
                {/* Real dental photography header */}
                <div className="relative overflow-hidden bg-[#F5FAF9]">
                  <SafeImage
                    src={treatment.image}
                    alt={treatment.imageAlt}
                    fallbackLabel={treatment.title}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Card content with overlapping circular teal icon badge matching screenshot */}
                <div className="relative flex flex-1 flex-col justify-between px-3.5 pt-0 pb-4 sm:px-6 sm:pb-6">
                  <div>
                    <div className="-mt-5 mb-3 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#087E83] text-white ring-4 ring-white shadow-sm">
                      <TreatmentIcon
                        type={treatment.icon}
                        accentColor="#DDF5EF"
                        className="h-5 w-5"
                      />
                    </div>

                    <h3 className="font-[var(--font-display)] text-[15px] leading-snug font-bold tracking-tight text-[#172D35] sm:text-xl">
                      {treatment.title}
                    </h3>

                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#4A626A] sm:mt-2.5 sm:text-[15px]">
                      {treatment.shortDescription}
                    </p>
                  </div>

                  <div className="mt-3.5 pt-2 sm:mt-5">
                    <button
                      type="button"
                      onClick={() => onLearnMore(treatment)}
                      aria-label={`Learn more about ${treatment.title}`}
                      className="inline-flex min-h-[36px] items-center gap-1.5 text-[12.5px] sm:text-sm font-bold text-[#087E83] underline decoration-[#087E83]/45 underline-offset-4 transition-all duration-150 group-hover:gap-2.5 hover:text-[#066569]"
                    >
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
