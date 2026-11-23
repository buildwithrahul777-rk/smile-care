import type { TreatmentCategory, TreatmentItem } from '../data/clinicData';

export interface AppointmentFormValues {
  fullName: string;
  phoneNumber: string;
  treatment: string;
  preferredDate: string;
  message: string;
}

export interface AppointmentValidationErrors {
  fullName?: string;
  phoneNumber?: string;
  treatment?: string;
  preferredDate?: string;
  message?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: AppointmentValidationErrors;
}

export function normalizePhoneDigits(phone: string): string {
  return phone.replace(/\D/g, '');
}

export function getTodayIsoDate(now: Date = new Date()): string {
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function validateAppointmentForm(
  values: AppointmentFormValues,
  todayIso: string = getTodayIsoDate()
): ValidationResult {
  const errors: AppointmentValidationErrors = {};

  const trimmedName = values.fullName.trim();
  if (!trimmedName) {
    errors.fullName = 'Please enter your full name.';
  } else if (trimmedName.length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.';
  }

  const trimmedPhone = values.phoneNumber.trim();
  const digits = normalizePhoneDigits(trimmedPhone);
  if (!trimmedPhone) {
    errors.phoneNumber = 'Please enter your phone number.';
  } else if (digits.length < 7 || digits.length > 15) {
    errors.phoneNumber = 'Please enter a valid phone number (7 to 15 digits).';
  }

  if (!values.treatment.trim()) {
    errors.treatment = 'Please select a dental treatment.';
  }

  const trimmedDate = values.preferredDate.trim();
  if (!trimmedDate) {
    errors.preferredDate = 'Please choose a preferred date.';
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmedDate)) {
    errors.preferredDate = 'Please select a valid calendar date.';
  } else if (trimmedDate < todayIso) {
    errors.preferredDate = 'Preferred date cannot be in the past.';
  }

  if (values.message.trim().length > 600) {
    errors.message = 'Additional message must be 600 characters or fewer.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatReadableDate(isoDate: string): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) {
    return isoDate;
  }
  const [yearStr, monthStr, dayStr] = isoDate.split('-');
  const date = new Date(Number(yearStr), Number(monthStr) - 1, Number(dayStr));
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function filterTreatments(
  treatments: TreatmentItem[],
  category: TreatmentCategory
): TreatmentItem[] {
  if (category === 'all') {
    return treatments;
  }
  return treatments.filter((item) => item.category === category);
}
