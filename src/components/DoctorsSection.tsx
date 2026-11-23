import { Calendar, UserRound } from 'lucide-react';
import {
  ASSOCIATE_TEAM_PLACEHOLDERS,
  CLINIC_IMAGES,
  LEAD_DOCTOR,
} from '../data/clinicData';
import { SafeImage } from './BrandLogo';
import { Reveal } from './Reveal';

interface DoctorsSectionProps {
  onBookConsultation: () => void;
}

export function DoctorsSection({ onBookConsultation }: DoctorsSectionProps) {
  return (
    <section
      id="doctors"
      className="bg-[#F5FAF9] py-14 sm:py-22 lg:py-26"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <span className="inline-flex items-center rounded-full bg-[#DDF5EF] px-4 py-1.5 text-xs font-bold tracking-wide text-[#087E83]">
            Our Doctors
          </span>
          <h2 className="mt-3.5 font-[var(--font-display)] text-[1.75rem] leading-tight font-extrabold tracking-[-0.025em] text-[#172D35] sm:text-4xl">
            Care Led by Dedicated{' '}
            <span className="text-[#087E83]">Clinicians</span>
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4A626A] sm:text-base">
            Sample practitioner profile layout ready to be customised with your clinic team&apos;s real credentials and biographies.
          </p>
        </div>

        {/* Lead Doctor Showcase Card */}
        <Reveal className="mt-9 sm:mt-11 overflow-hidden rounded-3xl border border-[#172D35]/8 bg-white shadow-[0_18px_48px_rgba(23,45,53,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Portrait Column */}
            <div className="relative bg-[#DDF5EF]/45 lg:col-span-5">
              <SafeImage
                src={CLINIC_IMAGES.doctor}
                alt="Portrait of lead dentist at SmileCare Dental Studio wearing a white clinical coat over deep teal scrubs"
                fallbackLabel="Lead Dentist Portrait"
                className="aspect-[4/4] sm:aspect-[3/4] max-h-[420px] w-full object-cover object-top lg:max-h-none lg:h-full"
              />
            </div>

            {/* Profile Details Column */}
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:col-span-7 lg:p-12">
              <p className="text-xs font-semibold tracking-wide text-[#087E83]">
                Lead Clinician · Editable Sample Profile
              </p>

              <h3 className="mt-2 font-[var(--font-display)] text-2xl font-bold tracking-tight text-[#172D35] sm:text-3xl">
                {LEAD_DOCTOR.name}
              </h3>

              <dl className="mt-5 grid grid-cols-1 gap-4 border-y border-[#172D35]/10 py-4 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold text-[#4A626A]">
                    Clinical Scope
                  </dt>
                  <dd className="mt-1 font-[var(--font-display)] text-sm font-bold text-[#172D35] sm:text-[15px]">
                    {LEAD_DOCTOR.qualification}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-[#4A626A]">
                    Focus Area
                  </dt>
                  <dd className="mt-1 font-[var(--font-display)] text-sm font-bold text-[#172D35] sm:text-[15px]">
                    {LEAD_DOCTOR.specialisation}
                  </dd>
                </div>
              </dl>

              <p className="mt-5 text-sm leading-relaxed text-[#4A626A] sm:text-base">
                {LEAD_DOCTOR.introduction}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-medium text-[#4A626A]">
                <span className="font-semibold text-[#172D35]">Clinical Focus:</span>
                {LEAD_DOCTOR.focusAreas.map((area, index) => (
                  <span key={area} className="inline-flex items-center gap-2">
                    {index > 0 && <span aria-hidden="true">·</span>}
                    <span>{area}</span>
                  </span>
                ))}
              </div>

              <div className="mt-7">
                <button
                  type="button"
                  onClick={onBookConsultation}
                  className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-2 rounded-xl sm:rounded-full bg-[#087E83] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#066569]"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Request a Consultation
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Optional Associate Team Editable Slots */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {ASSOCIATE_TEAM_PLACEHOLDERS.map((member) => (
            <div
              key={member.id}
              className="flex items-center gap-4 rounded-2xl border border-[#172D35]/8 bg-white px-6 py-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DDF5EF] text-[#087E83]">
                <UserRound className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="font-[var(--font-display)] text-base font-bold text-[#172D35] truncate">
                  {member.name}
                </p>
                <p className="mt-0.5 text-sm text-[#4A626A] truncate">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
