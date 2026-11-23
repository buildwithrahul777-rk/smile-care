import { ArrowRight, Check } from 'lucide-react';
import { CLINIC_IMAGES } from '../data/clinicData';
import { SafeImage } from './BrandLogo';
import { Reveal } from './Reveal';

interface AboutSectionProps {
  onMeetDoctors: () => void;
}

const CLINIC_PILLARS = [
  'Unhurried appointments with clear, reassuring treatment explanations',
  'Contemporary digital imaging and gentle clinical tools for patient comfort',
  'Bright, serene studio interior thoughtfully designed to put visitors at ease',
];

export function AboutSection({ onMeetDoctors }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="bg-[#F5FAF9] py-12 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
          {/* Heading & copy first on mobile (matching reference screenshot flow), right column on desktop */}
          <Reveal className="order-1 lg:order-2 lg:col-span-6">
            <div className="text-center lg:text-left">
              <h2 className="font-[var(--font-display)] text-[1.75rem] leading-tight font-extrabold tracking-[-0.025em] text-[#172D35] sm:text-4xl">
                Your Smile Deserves{' '}
                <span className="text-[#087E83]">Expert Care</span>
              </h2>
              <div
                aria-hidden="true"
                className="mx-auto mt-3.5 h-0.5 w-11 rounded-full bg-[#087E83] lg:mx-0"
              />
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#4A626A] sm:text-base lg:mx-0">
                At SmileCare Dental Studio, we provide comprehensive and gentle dental care in a comfortable and modern environment designed around your peace of mind.
              </p>
            </div>

            <ul className="mt-6 space-y-3 text-left">
              {CLINIC_PILLARS.map((pillar) => (
                <li key={pillar} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DDF5EF] text-[#087E83]">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.6} aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-relaxed text-[#172D35] sm:text-[15px]">
                    {pillar}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={onMeetDoctors}
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#087E83] transition-colors hover:text-[#066569]"
              >
                Meet Our Dental Team
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </Reveal>

          {/* Prominent clinic interior image */}
          <Reveal delayMs={70} className="order-2 lg:order-1 relative lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl bg-white p-2 shadow-[0_18px_46px_rgba(23,45,53,0.09)]">
              <SafeImage
                src={CLINIC_IMAGES.interior}
                alt="Sunlit minimalist reception lounge at SmileCare Dental Studio with natural oak and soft mint accents"
                fallbackLabel="SmileCare Dental Studio Interior"
                className="aspect-[16/10] sm:aspect-[4/3] w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
