import { useEffect, useState } from 'react';
import { CalendarCheck2, CheckCircle2, Info, RotateCcw } from 'lucide-react';
import { CONTACT_PLACEHOLDERS, TREATMENTS } from '../data/clinicData';
import {
  formatReadableDate,
  getTodayIsoDate,
  validateAppointmentForm,
  type AppointmentFormValues,
  type AppointmentValidationErrors,
} from '../utils/appointmentValidation';

interface AppointmentSectionProps {
  preselectedTreatment: string;
}

const TREATMENT_OPTIONS = [
  'General Consultation',
  ...TREATMENTS.map((item) => item.title),
];

export function AppointmentSection({ preselectedTreatment }: AppointmentSectionProps) {
  const minDate = getTodayIsoDate();

  const [values, setValues] = useState<AppointmentFormValues>({
    fullName: '',
    phoneNumber: '',
    treatment: preselectedTreatment || '',
    preferredDate: '',
    message: '',
  });
  const [errors, setErrors] = useState<AppointmentValidationErrors>({});
  const [submittedRequest, setSubmittedRequest] =
    useState<AppointmentFormValues | null>(null);

  useEffect(() => {
    if (preselectedTreatment) {
      setValues((prev) => ({ ...prev, treatment: preselectedTreatment }));
      setErrors((prev) => ({ ...prev, treatment: undefined }));
      setSubmittedRequest(null);
    }
  }, [preselectedTreatment]);

  const updateField = <K extends keyof AppointmentFormValues>(
    field: K,
    value: AppointmentFormValues[K]
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateAppointmentForm(values, minDate);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmittedRequest({
      ...values,
      fullName: values.fullName.trim(),
      phoneNumber: values.phoneNumber.trim(),
      message: values.message.trim(),
    });
  };

  const handleReset = () => {
    setSubmittedRequest(null);
    setValues({
      fullName: '',
      phoneNumber: '',
      treatment: '',
      preferredDate: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <section
      id="appointment"
      className="relative overflow-hidden bg-[#F5FAF9] py-14 sm:py-22 lg:py-26"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-[#DDF5EF]/80 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left column: Reassuring booking guidance */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center rounded-full bg-[#DDF5EF] px-4 py-1.5 text-xs font-bold tracking-wide text-[#087E83]">
              Appointment Request
            </span>
            <h2 className="mt-3.5 font-[var(--font-display)] text-[1.75rem] leading-tight font-extrabold tracking-[-0.025em] text-[#172D35] sm:text-4xl">
              Ready to Schedule{' '}
              <span className="text-[#087E83]">Your Visit?</span>
            </h2>
            <p className="mt-3.5 text-sm leading-relaxed text-[#4A626A] sm:text-base">
              Choose your preferred treatment and date using our interactive request form. On a live clinic deployment, submissions connect directly to your reception desk or scheduling platform.
            </p>

            <div className="mt-6 rounded-2xl border border-[#172D35]/8 bg-white p-5 sm:p-6">
              <p className="font-[var(--font-display)] text-sm font-bold text-[#172D35]">
                Sample Clinic Hours
              </p>
              <dl className="mt-4 space-y-2.5 text-sm">
                {CONTACT_PLACEHOLDERS.openingHours.map((slot) => (
                  <div
                    key={slot.days}
                    className="flex items-center justify-between gap-4 border-b border-[#172D35]/6 pb-2.5 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-[#4A626A]">{slot.days}</dt>
                    <dd className="font-semibold text-[#172D35] tabular-nums">
                      {slot.hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-2xl bg-[#DDF5EF]/65 p-4 text-xs leading-relaxed text-[#172D35]">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#087E83]" aria-hidden="true" />
              <p>
                <strong>Interactive Demo Notice:</strong> Submitting this form validates your input and shows a confirmation preview locally. No real appointment is booked and no personal data is transmitted.
              </p>
            </div>
          </div>

          {/* Right column: Interactive Form or Demo Confirmation */}
          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-[#172D35]/10 bg-white p-6 shadow-[0_20px_50px_rgba(23,45,53,0.07)] sm:p-9">
              {submittedRequest ? (
                <div
                  role="status"
                  aria-live="polite"
                  data-testid="appointment-success"
                  className="py-4"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#DDF5EF] text-[#087E83]">
                    <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 font-[var(--font-display)] text-2xl font-bold text-[#172D35]">
                    Demo Request Received
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4A626A]">
                    Thank you, <strong className="text-[#172D35]">{submittedRequest.fullName}</strong>. This is a demonstration preview—no real clinic appointment has been scheduled and no details were sent externally.
                  </p>

                  <dl className="mt-6 grid grid-cols-1 gap-4 rounded-2xl bg-[#F5FAF9] p-5 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="text-xs font-medium text-[#4A626A]">Patient Name</dt>
                      <dd className="mt-1 font-semibold text-[#172D35]">
                        {submittedRequest.fullName}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-[#4A626A]">Phone Number</dt>
                      <dd className="mt-1 font-semibold text-[#172D35] tabular-nums">
                        {submittedRequest.phoneNumber}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-[#4A626A]">Selected Treatment</dt>
                      <dd className="mt-1 font-semibold text-[#087E83]">
                        {submittedRequest.treatment}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-[#4A626A]">Preferred Date</dt>
                      <dd className="mt-1 font-semibold text-[#172D35]">
                        {formatReadableDate(submittedRequest.preferredDate)}
                      </dd>
                    </div>
                    {submittedRequest.message && (
                      <div className="sm:col-span-2">
                        <dt className="text-xs font-medium text-[#4A626A]">Additional Message</dt>
                        <dd className="mt-1 text-[#172D35]">{submittedRequest.message}</dd>
                      </div>
                    )}
                  </dl>

                  <div className="mt-7">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-[#172D35]/15 bg-white px-6 py-2.5 text-sm font-semibold text-[#172D35] transition-colors hover:border-[#087E83]/40 hover:bg-[#F5FAF9] hover:text-[#087E83]"
                    >
                      <RotateCcw className="h-4 w-4" aria-hidden="true" />
                      Submit Another Demo Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex items-center justify-between gap-4 border-b border-[#172D35]/8 pb-5">
                    <div>
                      <h3 className="font-[var(--font-display)] text-xl font-bold text-[#172D35]">
                        Book Your Consultation
                      </h3>
                      <p className="mt-1 text-xs text-[#4A626A]">
                        Fields marked with <span className="text-[#087E83]">*</span> are required.
                      </p>
                    </div>
                    <CalendarCheck2
                      className="h-6 w-6 shrink-0 text-[#087E83]"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="appointment-full-name"
                        className="block text-sm font-semibold text-[#172D35]"
                      >
                        Full Name <span className="text-[#087E83]">*</span>
                      </label>
                      <input
                        id="appointment-full-name"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="e.g. Jordan Taylor"
                        value={values.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={
                          errors.fullName ? 'appointment-full-name-error' : undefined
                        }
                        className={`mt-2 block min-h-[46px] w-full rounded-xl border bg-[#F5FAF9]/50 px-4 py-2.5 text-sm text-[#172D35] placeholder:text-[#4A626A]/65 transition-colors focus:bg-white ${
                          errors.fullName
                            ? 'border-red-600 focus:border-red-600'
                            : 'border-[#172D35]/15 focus:border-[#087E83]'
                        }`}
                      />
                      {errors.fullName && (
                        <p
                          id="appointment-full-name-error"
                          role="alert"
                          className="mt-1.5 text-xs font-medium text-red-700"
                        >
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="appointment-phone"
                        className="block text-sm font-semibold text-[#172D35]"
                      >
                        Phone Number <span className="text-[#087E83]">*</span>
                      </label>
                      <input
                        id="appointment-phone"
                        name="phoneNumber"
                        type="tel"
                        autoComplete="tel"
                        placeholder="e.g. +1 (555) 000-0100"
                        value={values.phoneNumber}
                        onChange={(e) => updateField('phoneNumber', e.target.value)}
                        aria-invalid={Boolean(errors.phoneNumber)}
                        aria-describedby={
                          errors.phoneNumber ? 'appointment-phone-error' : undefined
                        }
                        className={`mt-2 block min-h-[46px] w-full rounded-xl border bg-[#F5FAF9]/50 px-4 py-2.5 text-sm text-[#172D35] placeholder:text-[#4A626A]/65 transition-colors focus:bg-white ${
                          errors.phoneNumber
                            ? 'border-red-600 focus:border-red-600'
                            : 'border-[#172D35]/15 focus:border-[#087E83]'
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p
                          id="appointment-phone-error"
                          role="alert"
                          className="mt-1.5 text-xs font-medium text-red-700"
                        >
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Select Treatment */}
                    <div>
                      <label
                        htmlFor="appointment-treatment"
                        className="block text-sm font-semibold text-[#172D35]"
                      >
                        Select Treatment <span className="text-[#087E83]">*</span>
                      </label>
                      <select
                        id="appointment-treatment"
                        name="treatment"
                        value={values.treatment}
                        onChange={(e) => updateField('treatment', e.target.value)}
                        aria-invalid={Boolean(errors.treatment)}
                        aria-describedby={
                          errors.treatment ? 'appointment-treatment-error' : undefined
                        }
                        className={`mt-2 block min-h-[46px] w-full rounded-xl border bg-[#F5FAF9]/50 px-4 py-2.5 text-sm text-[#172D35] transition-colors focus:bg-white ${
                          errors.treatment
                            ? 'border-red-600 focus:border-red-600'
                            : 'border-[#172D35]/15 focus:border-[#087E83]'
                        }`}
                      >
                        <option value="">Choose a treatment...</option>
                        {TREATMENT_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.treatment && (
                        <p
                          id="appointment-treatment-error"
                          role="alert"
                          className="mt-1.5 text-xs font-medium text-red-700"
                        >
                          {errors.treatment}
                        </p>
                      )}
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label
                        htmlFor="appointment-date"
                        className="block text-sm font-semibold text-[#172D35]"
                      >
                        Preferred Date <span className="text-[#087E83]">*</span>
                      </label>
                      <input
                        id="appointment-date"
                        name="preferredDate"
                        type="date"
                        min={minDate}
                        value={values.preferredDate}
                        onChange={(e) => updateField('preferredDate', e.target.value)}
                        aria-invalid={Boolean(errors.preferredDate)}
                        aria-describedby={
                          errors.preferredDate ? 'appointment-date-error' : undefined
                        }
                        className={`mt-2 block min-h-[46px] w-full rounded-xl border bg-[#F5FAF9]/50 px-4 py-2.5 text-sm text-[#172D35] transition-colors focus:bg-white ${
                          errors.preferredDate
                            ? 'border-red-600 focus:border-red-600'
                            : 'border-[#172D35]/15 focus:border-[#087E83]'
                        }`}
                      />
                      {errors.preferredDate && (
                        <p
                          id="appointment-date-error"
                          role="alert"
                          className="mt-1.5 text-xs font-medium text-red-700"
                        >
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label
                      htmlFor="appointment-message"
                      className="block text-sm font-semibold text-[#172D35]"
                    >
                      Additional Message{' '}
                      <span className="font-normal text-[#4A626A]">(Optional)</span>
                    </label>
                    <textarea
                      id="appointment-message"
                      name="message"
                      rows={3}
                      placeholder="Share preferred time of day, dental concerns, or questions..."
                      value={values.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? 'appointment-message-error' : undefined
                      }
                      className={`mt-2 block w-full rounded-xl border bg-[#F5FAF9]/50 px-4 py-3 text-sm text-[#172D35] placeholder:text-[#4A626A]/65 transition-colors focus:bg-white ${
                        errors.message
                          ? 'border-red-600 focus:border-red-600'
                          : 'border-[#172D35]/15 focus:border-[#087E83]'
                      }`}
                    />
                    {errors.message && (
                      <p
                        id="appointment-message-error"
                        role="alert"
                        className="mt-1.5 text-xs font-medium text-red-700"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#087E83] px-7 py-3 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(8,126,131,0.22)] transition-all duration-150 hover:bg-[#066569] active:scale-[0.99] sm:w-auto"
                    >
                      Request Appointment
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
