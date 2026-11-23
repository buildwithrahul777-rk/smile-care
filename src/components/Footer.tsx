import { useState } from 'react';
import {
  CLINIC_BRAND,
  CONTACT_PLACEHOLDERS,
  NAV_LINKS,
  TREATMENTS,
} from '../data/clinicData';
import { BrandLogoMark } from './BrandLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectTreatment: (treatmentTitle: string) => void;
}

const SOCIAL_PLACEHOLDERS = [
  { id: 'instagram', label: 'Instagram', short: 'IG' },
  { id: 'facebook', label: 'Facebook', short: 'FB' },
  { id: 'linkedin', label: 'LinkedIn', short: 'IN' },
  { id: 'youtube', label: 'YouTube', short: 'YT' },
] as const;

export function Footer({ onNavigate, onSelectTreatment }: FooterProps) {
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  return (
    <footer className="bg-[#172D35] text-[#E6F4F1]">
      <div className="mx-auto max-w-[1240px] px-4 pt-14 pb-24 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Column 1: Brand & Demo summary */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-flex items-center gap-3"
            >
              <BrandLogoMark className="h-9 w-9 shrink-0" />
              <span className="font-[var(--font-display)] text-lg font-bold tracking-tight text-white">
                {CLINIC_BRAND.name}
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#C7D9DC]">
              Modern, comfortable dental care designed around your smile. Presented as a customisable showcase demo for dental practices.
            </p>

            {/* Social icon placeholders */}
            <div className="mt-6">
              <p className="text-xs font-semibold tracking-wide text-[#9AB6BC]">
                Social Channels (Placeholders)
              </p>
              <div className="mt-3 flex items-center gap-2.5">
                {SOCIAL_PLACEHOLDERS.map((social) => (
                  <button
                    key={social.id}
                    type="button"
                    aria-label={`${social.label} placeholder link`}
                    onClick={() =>
                      setSocialNotice(
                        `${social.label} placeholder — connect your clinic's official profile URL here.`
                      )
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-xs font-bold tracking-wide text-white transition-colors hover:border-[#42B8A5] hover:bg-[#087E83]"
                  >
                    {social.short}
                  </button>
                ))}
              </div>
              {socialNotice && (
                <p
                  role="status"
                  className="mt-3 text-xs leading-relaxed text-[#9CE3D6]"
                >
                  {socialNotice}
                </p>
              )}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-[var(--font-display)] text-sm font-bold tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.id);
                    }}
                    className="text-[#C7D9DC] transition-colors hover:text-[#42B8A5]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div className="lg:col-span-3">
            <h3 className="font-[var(--font-display)] text-sm font-bold tracking-wide text-white">
              Treatments
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {TREATMENTS.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onSelectTreatment(item.title)}
                    className="text-left text-[#C7D9DC] transition-colors hover:text-[#42B8A5]"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="font-[var(--font-display)] text-sm font-bold tracking-wide text-white">
              Contact Details
            </h3>
            <address className="mt-4 space-y-2.5 text-sm not-italic text-[#C7D9DC]">
              <p>{CONTACT_PLACEHOLDERS.address}</p>
              <p className="tabular-nums">Phone: {CONTACT_PLACEHOLDERS.phone}</p>
              <p className="tabular-nums">WhatsApp: {CONTACT_PLACEHOLDERS.whatsapp}</p>
              <p className="break-all">Email: {CONTACT_PLACEHOLDERS.email}</p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-[#9AB6BC] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {CLINIC_BRAND.name}. Demonstration showcase — all clinic details are editable placeholders.
          </p>
          <p>Modern Smile Care · Responsive Clinic Demo</p>
        </div>
      </div>
    </footer>
  );
}
