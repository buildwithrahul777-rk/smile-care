import { HeartHandshake, ScanLine, Sofa, Stethoscope } from 'lucide-react';
import { CLINIC_IMAGES, WHY_CHOOSE_US, type WhyChooseUsItem } from '../data/clinicData';
import { SafeImage } from './BrandLogo';
import { Reveal } from './Reveal';

function FeatureIcon({ type }: { type: WhyChooseUsItem['icon'] }) {
  switch (type) {
    case 'professionals':
      return <Stethoscope className="h-5 w-5" aria-hidden="true" />;
    case 'technology':
      return <ScanLine className="h-5 w-5" aria-hidden="true" />;
    case 'patient-focused':
      return <HeartHandshake className="h-5 w-5" aria-hidden="true" />;
    case 'environment':
      return <Sofa className="h-5 w-5" aria-hidden="true" />;
  }
}

export function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      className="bg-white py-14 sm:py-22 lg:py-26"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left: Heading + 4 feature cards */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
              <span className="inline-flex items-center rounded-full bg-[#DDF5EF] px-4 py-1.5 text-xs font-bold tracking-wide text-[#087E83]">
                The SmileCare Difference
              </span>
              <h2 className="mt-3.5 font-[var(--font-display)] text-[1.75rem] leading-tight font-extrabold tracking-[-0.025em] text-[#172D35] sm:text-4xl">
                Why Patients Choose{' '}
                <span className="text-[#087E83]">SmileCare</span>
              </h2>
              <p className="mt-3.5 text-sm leading-relaxed text-[#4A626A] sm:text-base">
                Thoughtful clinical standards, calm interiors, and clear communication designed to make every appointment feel straightforward and reassuring.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {WHY_CHOOSE_US.map((feature, index) => (
                <Reveal
                  key={feature.id}
                  delayMs={index * 55}
                  className="rounded-2xl border border-[#172D35]/8 bg-[#F5FAF9] p-6 transition-all duration-200 hover:border-[#42B8A5]/45 hover:bg-white hover:shadow-[0_12px_30px_rgba(8,126,131,0.08)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DDF5EF] text-[#087E83]">
                    <FeatureIcon type={feature.icon} />
                  </div>
                  <h3 className="mt-5 font-[var(--font-display)] text-lg font-bold tracking-tight text-[#172D35]">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#4A626A]">
                    {feature.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: Modern dental suite photograph */}
          <Reveal delayMs={80} className="relative flex flex-col lg:col-span-5">
            <div className="relative flex-1 overflow-hidden rounded-[1.75rem] bg-[#F5FAF9] shadow-[0_20px_50px_rgba(23,45,53,0.1)]">
              <SafeImage
                src={CLINIC_IMAGES.suite}
                alt="Modern ergonomic treatment suite with digital diagnostic monitor at SmileCare Dental Studio"
                fallbackLabel="Modern Dental Treatment Suite"
                className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#172D35]/75 via-[#172D35]/25 to-transparent"
              />
              <div className="absolute inset-x-5 bottom-5 text-white">
                <p className="font-[var(--font-display)] text-base font-bold tracking-tight">
                  Calm, Bright Treatment Suites
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/85">
                  Natural daylight, ergonomic seating, and chairside digital imaging for transparent consultations.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
