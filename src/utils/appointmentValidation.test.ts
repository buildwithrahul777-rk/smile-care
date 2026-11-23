import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateAppointmentForm,
  normalizePhoneDigits,
  formatReadableDate,
  filterTreatments,
} from './appointmentValidation';
import { TREATMENTS } from '../data/clinicData';

test('normalizePhoneDigits strips formatting characters', () => {
  assert.equal(normalizePhoneDigits('+1 (555) 234-5678'), '15552345678');
  assert.equal(normalizePhoneDigits('  0412-345 678 '), '0412345678');
});

test('validateAppointmentForm rejects empty required fields', () => {
  const result = validateAppointmentForm(
    {
      fullName: '   ',
      phoneNumber: '',
      treatment: '',
      preferredDate: '',
      message: '',
    },
    '2026-11-23'
  );

  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.phoneNumber);
  assert.ok(result.errors.treatment);
  assert.ok(result.errors.preferredDate);
});

test('validateAppointmentForm rejects invalid phone length and past dates', () => {
  const result = validateAppointmentForm(
    {
      fullName: 'Alex Morgan',
      phoneNumber: '12345',
      treatment: 'Teeth Whitening',
      preferredDate: '2026-11-20',
      message: 'Morning slot preferred.',
    },
    '2026-11-23'
  );

  assert.equal(result.isValid, false);
  assert.equal(result.errors.fullName, undefined);
  assert.ok(result.errors.phoneNumber);
  assert.ok(result.errors.preferredDate);
});

test('validateAppointmentForm accepts valid future appointment request', () => {
  const result = validateAppointmentForm(
    {
      fullName: 'Priya Nair',
      phoneNumber: '+1 (555) 890-1234',
      treatment: 'Dental Implants',
      preferredDate: '2026-12-05',
      message: 'Looking for an initial consultation.',
    },
    '2026-11-23'
  );

  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('formatReadableDate formats ISO date into readable calendar string', () => {
  assert.equal(formatReadableDate('2026-12-05'), 'Sat, December 5, 2026');
});

test('filterTreatments filters categories accurately', () => {
  assert.equal(filterTreatments(TREATMENTS, 'all').length, 6);
  assert.equal(filterTreatments(TREATMENTS, 'preventive-restorative').length, 3);
  assert.equal(filterTreatments(TREATMENTS, 'orthodontics-cosmetic').length, 3);
});
