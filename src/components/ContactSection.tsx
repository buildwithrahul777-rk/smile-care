import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  X,
} from 'lucide-react';
import { CONTACT_PLACEHOLDERS } from '../data/clinicData';

export type ContactPreviewMode = 'call' | 'whatsapp' | null;

interface ContactSectionProps {
  contactPreview: ContactPreviewMode;
  onSelectContactPreview: (mode: ContactPreviewMode) => void;
}

export function ContactSection({
  contactPreview,
  onSelectContactPreview,
}: ContactSectionProps) {
  return (
    <section id="contact" className="bg-white py-14 sm:py-22 lg:py-26">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <span className="inline-flex items-center rounded-full bg-[#DDF5EF] px-4 py-1.5 text-xs font-bold tracking-wide text-[#087E83]">
            Contact &amp; Location
          </span>
          <h2 className="mt-3.5 font-[var(--font-display)] text-[1.75rem] leading-tight font-extrabold tracking-[-0.025em] text-[#172D35] sm:text-4xl">
            Visit SmileCare{' '}
            <span className="text-[#087E83]">Dental Studio</span>
          </h2>
          <p className="mt-3.5 text-sm leading-relaxed text-[#4A626A] sm:text-base">
            Sample contact details and clinic map layout below—ready to update with your practice&apos;s live phone line, WhatsApp number, and address.
          </p>
        </div>

        <div className="mt-9 sm:mt-11 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left: Editable Contact Details + Quick Actions */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#172D35]/8 bg-[#F5FAF9] p-6 sm:p-9 lg:col-span-6">
            <dl className="space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DDF5EF] text-[#087E83]">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <dt className="text-xs font-semibold text-[#4A626A]">
                    Clinic Address
                  </dt>
                  <dd className="mt-0.5 text-sm sm:text-[15px] font-semibold text-[#172D35]">
                    {CONTACT_PLACEHOLDERS.address}
                  </dd>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DDF5EF] text-[#087E83]">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-[#4A626A]">
                      Phone Number
                    </dt>
                    <dd className="mt-0.5 text-sm sm:text-[15px] font-semibold text-[#172D35] tabular-nums">
                      {CONTACT_PLACEHOLDERS.phone}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DDF5EF] text-[#087E83]">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-[#4A626A]">
                      WhatsApp
                    </dt>
                    <dd className="mt-0.5 text-sm sm:text-[15px] font-semibold text-[#172D35] tabular-nums">
                      {CONTACT_PLACEHOLDERS.whatsapp}
                    </dd>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DDF5EF] text-[#087E83]">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <dt className="text-xs font-semibold text-[#4A626A]">
                    Email Address
                  </dt>
                  <dd className="mt-0.5 text-sm sm:text-[15px] font-semibold text-[#172D35] break-all">
                    {CONTACT_PLACEHOLDERS.email}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DDF5EF] text-[#087E83]">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="w-full">
                  <dt className="text-xs font-semibold text-[#4A626A]">
                    Opening Hours
                  </dt>
                  <dd className="mt-1 space-y-1 text-sm text-[#172D35]">
                    {CONTACT_PLACEHOLDERS.openingHours.map((slot) => (
                      <div
                        key={slot.days}
                        className="flex items-center justify-between gap-3"
                      >
                        <span className="text-[#4A626A]">{slot.days}</span>
                        <span className="font-semibold tabular-nums">
                          {slot.hours}
                        </span>
                      </div>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>

            {/* Quick Action Buttons */}
            <div className="mt-7 border-t border-[#172D35]/10 pt-5">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onSelectContactPreview('call')}
                  className="inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-full bg-[#087E83] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#066569] sm:flex-none whitespace-nowrap"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </button>

                <button
                  type="button"
                  onClick={() => onSelectContactPreview('whatsapp')}
                  className="inline-flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-full bg-[#1E9E52] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#188444] sm:flex-none whitespace-nowrap"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </button>
              </div>

              {contactPreview && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-4 flex items-start justify-between gap-3 rounded-2xl border border-[#42B8A5]/40 bg-white p-4 text-xs leading-relaxed text-[#172D35]"
                >
                  <p>
                    {contactPreview === 'call' ? (
                      <>
                        <strong>Sample Phone Action:</strong> On your live clinic site, &ldquo;Call Now&rdquo; connects directly to your reception desk ({CONTACT_PLACEHOLDERS.phone}).
                      </>
                    ) : (
                      <>
                        <strong>Sample WhatsApp Action:</strong> On your live clinic site, &ldquo;WhatsApp&rdquo; opens a direct patient chat with your clinic&apos;s WhatsApp line ({CONTACT_PLACEHOLDERS.whatsapp}).
                      </>
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={() => onSelectContactPreview(null)}
                    aria-label="Dismiss contact preview notice"
                    className="rounded-lg p-1 text-[#4A626A] hover:bg-[#F5FAF9] hover:text-[#172D35]"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right: Architectural Google Maps Embed Preview */}
          <div className="relative flex min-h-[320px] flex-col overflow-hidden rounded-3xl border border-[#172D35]/10 bg-[#F5FAF9] lg:col-span-6">
            <svg
              viewBox="0 0 640 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect width="640" height="480" fill="#EDF8F5" />
              <path d="M0 110H640M0 245H640M0 375H640" stroke="#FFFFFF" strokeWidth="14" />
              <path d="M130 0V480M320 0V480M510 0V480" stroke="#FFFFFF" strokeWidth="14" />
              <path d="M0 175L640 310" stroke="#DDF5EF" strokeWidth="10" />
              <rect x="155" y="130" width="140" height="95" rx="14" fill="#DDF5EF" />
              <rect x="345" y="265" width="145" height="90" rx="14" fill="#DDF5EF" />
              <rect x="345" y="30" width="145" height="62" rx="12" fill="#E3F4F0" />
              <circle cx="320" cy="220" r="64" fill="#42B8A5" fillOpacity="0.16" />
              <circle cx="320" cy="220" r="34" fill="#087E83" fillOpacity="0.18" />
            </svg>

            <div className="relative z-10 flex flex-1 flex-col items-center justify-center p-6 sm:p-8 text-center">
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#087E83] text-white shadow-[0_12px_28px_rgba(8,126,131,0.3)]">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </div>

              <div className="mt-4 max-w-sm rounded-2xl border border-[#172D35]/10 bg-white/95 p-5 shadow-[0_14px_34px_rgba(23,45,53,0.1)] backdrop-blur-sm">
                <p className="text-[11px] font-bold tracking-[0.12em] text-[#087E83]">
                  CLINIC MAP EMBED
                </p>
                <p className="mt-1 font-[var(--font-display)] text-lg font-bold text-[#172D35]">
                  SmileCare Dental Studio
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#4A626A]">
                  {CONTACT_PLACEHOLDERS.address}
                </p>
                <p className="mt-3 border-t border-[#172D35]/8 pt-3 text-[11px] text-[#4A626A]">
                  Connect your Google Maps clinic location embed here before launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
