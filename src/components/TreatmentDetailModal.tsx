import { useEffect } from 'react';
import { Calendar, Check, Clock, X } from 'lucide-react';
import type { TreatmentItem } from '../data/clinicData';
import { SafeImage, TreatmentIcon } from './BrandLogo';

interface TreatmentDetailModalProps {
  treatment: TreatmentItem | null;
  onClose: () => void;
  onBookTreatment: (treatmentTitle: string) => void;
}

export function TreatmentDetailModal({
  treatment,
  onClose,
  onBookTreatment,
}: TreatmentDetailModalProps) {
  useEffect(() => {
    if (!treatment) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [treatment, onClose]);

  if (!treatment) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="treatment-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#172D35]/55 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white shadow-[0_28px_70px_rgba(23,45,53,0.22)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top treatment photograph */}
        <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-[#F5FAF9]">
          <SafeImage
            src={treatment.image}
            alt={treatment.imageAlt}
            fallbackLabel={treatment.title}
            className="h-full w-full object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close treatment details"
            className="absolute top-3.5 right-3.5 flex h-10 w-10 items-center justify-center rounded-full bg-white/92 text-[#172D35] shadow-md backdrop-blur-sm transition-colors hover:bg-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="px-5 pt-0 pb-6 sm:px-8 sm:pb-8">
          <div className="flex items-end gap-3.5">
            <div className="-mt-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#087E83] text-white ring-4 ring-white shadow-sm">
              <TreatmentIcon
                type={treatment.icon}
                accentColor="#DDF5EF"
                className="h-6 w-6"
              />
            </div>
            <div className="pt-2">
              <p className="text-xs font-semibold text-[#087E83]">
                {treatment.categoryLabel}
              </p>
              <h3
                id="treatment-modal-title"
                className="font-[var(--font-display)] text-xl sm:text-2xl font-bold text-[#172D35]"
              >
                {treatment.title}
              </h3>
            </div>
          </div>

          <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-[#4A626A]">
            {treatment.detailedOverview}
          </p>

          <div className="mt-5 rounded-2xl bg-[#F5FAF9] p-4 sm:p-5">
            <h4 className="font-[var(--font-display)] text-sm font-bold text-[#172D35]">
              What to Expect During Your Visit
            </h4>
            <ul className="mt-3 space-y-2.5">
              {treatment.whatToExpect.map((step) => (
                <li key={step} className="flex items-start gap-2.5 text-sm text-[#172D35]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DDF5EF] text-[#087E83]">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-[#4A626A]">
            <Clock className="h-4 w-4 text-[#087E83]" aria-hidden="true" />
            <span>Typical visit duration: {treatment.estimatedVisit}</span>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-[#172D35]/10 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="min-h-[44px] rounded-full border border-[#172D35]/15 px-5 py-2.5 text-sm font-semibold text-[#172D35] transition-colors hover:bg-[#F5FAF9]"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => onBookTreatment(treatment.title)}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#087E83] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#066569]"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Book This Treatment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
