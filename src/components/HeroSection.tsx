import { ArrowRight, CalendarDays, ShieldCheck, Users } from 'lucide-react';
import {
  CLINIC_BRAND,
  CLINIC_IMAGES,
  HERO_TRUST_INDICATORS,
} from '../data/clinicData';
import { SafeImage } from './BrandLogo';

interface HeroSectionProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

function TrustIcon({ type }: { type: 'hygiene' | 'team' | 'technology' }) {
  switch (type) {
    case 'hygiene':
      return <ShieldCheck className="h-6 w-6 text-[#087E83]" strokeWidth={1.8} aria-hidden="true" />;
    case 'team':
      return <Users className="h-6 w-6 text-[#087E83]" strokeWidth={1.8} aria-hidden="true" />;
    case 'technology':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 w-6 text-[#087E83]"
          aria-hidden="true"
        >
          <path
            d="M8.4 4.2C6 4.2 4.5 6.2 4.5 9C4.5 13 6.4 16.5 8 20.1C8.6 21.4 10.2 21.4 10.9 20.1L12 17.7C12.3 17 12.7 17 13 17.7L14.1 20.1C14.8 21.4 16.4 21.4 17 20.1C18.6 16.5 20.5 13 20.5 9C20.5 6.2 19 4.2 16.6 4.2C14.8 4.2 13.7 5.2 12.5 5.2C11.3 5.2 10.2 4.2 8.4 4.2Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M9.8 11.4L11.5 13L15.2 9.6"
            stroke="#42B8A5"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export function HeroSection({ onBookClick, onExploreClick }: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Main image-led blended hero canvas matching reference screenshot */}
      <div className="relative mx-auto max-w-[1280px]">
        {/* Full-bleed right-aligned patient photography blended softly into white/mint */}
        <div className="relative overflow-hidden bg-[#F5FAF9] lg:mx-8 lg:mt-6 lg:rounded-[2rem] lg:shadow-[0_20px_60px_rgba(23,45,53,0.08)]">
          {/* Background photograph positioned prominently on the right */}
          <div className="pointer-events-none absolute inset-0">
            <SafeImage
              src={CLINIC_IMAGES.hero}
              alt="Smiling female dental patient relaxing comfortably in a modern teal dental chair at SmileCare Dental Studio"
              fallbackLabel="SmileCare Dental Studio Patient Care"
              loading="eager"
              className="h-full w-full object-cover object-[76%_24%] sm:object-[74%_24%] lg:object-[78%_28%]"
            />

            {/* Soft white & pale-mint blend gradients so text is crisp while patient stays visually dominant */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-[46%] to-white/10 sm:via-[48%] lg:via-white/88 lg:via-[44%] lg:to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-white via-white/30 via-[20%] to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/75 to-transparent"
            />
          </div>

          {/* Foreground Hero Copy & CTAs */}
          <div className="relative z-10 px-4 pt-6 pb-8 sm:px-8 sm:pt-12 sm:pb-12 lg:px-14 lg:py-18">
            <div className="max-w-[66%] sm:max-w-[58%] lg:max-w-[540px]">
              {/* Mint badge */}
              <div className="inline-flex items-center rounded-full bg-[#DDF5EF] px-3.5 py-1.5 text-[10px] sm:text-xs font-extrabold tracking-[0.09em] text-[#087E83]">
                {CLINIC_BRAND.heroKicker}
              </div>

              {/* Main bold display headline with Deep Teal accent on "Smile" */}
              <h1 className="mt-4 font-[var(--font-display)] text-[2rem] leading-[1.09] font-extrabold tracking-[-0.03em] text-[#172D35] sm:text-[2.85rem] lg:text-[3.7rem]">
                A Healthier{' '}
                <span className="text-[#087E83]">Smile</span> Starts Here.
              </h1>

              {/* Supporting copy */}
              <p className="mt-3.5 max-w-[290px] sm:max-w-md text-[13.5px] leading-[1.55] text-[#2F464F] sm:text-base lg:text-[17px]">
                {CLINIC_BRAND.heroSubtitle}
              </p>
            </div>

            {/* Action buttons: stacked compactly on narrow mobile like reference, row on desktop */}
            <div className="mt-6 flex flex-col gap-3 max-w-[270px] sm:max-w-none sm:flex-row sm:items-center sm:gap-4 lg:mt-8">
              <button
                type="button"
                aria-label="Book an Appointment"
                onClick={onBookClick}
                className="inline-flex min-h-[48px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl sm:rounded-full bg-[#087E83] px-5 sm:px-7 py-3 text-[14px] sm:text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(8,126,131,0.28)] transition-all duration-150 hover:bg-[#066569] active:scale-[0.98] whitespace-nowrap"
              >
                <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>Book an Appointment</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-2 rounded-xl sm:rounded-full border border-[#087E83]/45 bg-white/92 px-5 sm:px-6 py-2.5 text-[14px] sm:text-[15px] font-semibold text-[#087E83] backdrop-blur-sm transition-all duration-150 hover:border-[#087E83] hover:bg-[#F5FAF9] whitespace-nowrap"
              >
                Explore Our Services
              </button>
            </div>
          </div>
        </div>

        {/* Three Trust Indicators Row matching reference screenshot */}
        <div className="mx-auto max-w-[1240px] px-4 pt-5 pb-7 sm:px-6 lg:px-8 lg:pt-8 lg:pb-10">
          <div className="grid grid-cols-3 divide-x divide-[#172D35]/10 rounded-2xl bg-white py-2 sm:py-3">
            {HERO_TRUST_INDICATORS.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-start px-2 text-center sm:flex-row sm:justify-center sm:gap-3 sm:px-4 sm:text-left"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5FAF9]">
                  <TrustIcon type={item.icon} />
                </div>
                <span className="mt-2 sm:mt-0 font-[var(--font-display)] text-[11.5px] leading-tight font-bold text-[#172D35] sm:text-sm">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle organic pale-mint wave divider flowing into About section */}
      <div aria-hidden="true" className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-full sm:h-10"
          preserveAspectRatio="none"
        >
          <path
            d="M0 24C240 56 480 0 720 26C960 52 1200 10 1440 30V54H0V24Z"
            fill="#F5FAF9"
          />
        </svg>
      </div>
    </section>
  );
}
