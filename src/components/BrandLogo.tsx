import { useState } from 'react';
import type { TreatmentIconKey } from '../data/clinicData';

interface BrandLogoMarkProps {
  className?: string;
}

export function BrandLogoMark({ className = 'h-9 w-9' }: BrandLogoMarkProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12.8 7.5C8.9 7.5 6.4 10.7 6.4 15.1C6.4 21.5 9.5 27.2 12.1 33.1C13.1 35.3 15.9 35.3 17.1 33L19.1 28.6C19.5 27.7 20.5 27.7 20.9 28.6L22.9 33C24.1 35.3 26.9 35.3 27.9 33.1C30.5 27.2 33.6 21.5 33.6 15.1C33.6 10.7 31.1 7.5 27.2 7.5C24.3 7.5 22.3 9.2 20 9.2C17.7 9.2 15.7 7.5 12.8 7.5Z"
        stroke="#087E83"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="#DDF5EF"
        fillOpacity="0.45"
      />
      <path
        d="M14.2 17.5C15.8 19.6 17.7 20.6 20 20.6C22.3 20.6 24.2 19.6 25.8 17.5"
        stroke="#42B8A5"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface TreatmentIconProps {
  type: TreatmentIconKey;
  className?: string;
  accentColor?: string;
}

export function TreatmentIcon({
  type,
  className = 'h-5 w-5',
  accentColor = 'currentColor',
}: TreatmentIconProps) {
  switch (type) {
    case 'cleaning':
      return (
        <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
          <path
            d="M9.4 5.5C7 5.5 5.5 7.5 5.5 10.2C5.5 14.2 7.4 17.8 9 21.4C9.6 22.8 11.2 22.8 11.9 21.4L13 19C13.4 18.1 14.6 18.1 15 19L16.1 21.4C16.8 22.8 18.4 22.8 19 21.4C20.6 17.8 22.5 14.2 22.5 10.2C22.5 7.5 21 5.5 18.6 5.5C16.8 5.5 15.6 6.6 14 6.6C12.4 6.6 11.2 5.5 9.4 5.5Z"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinejoin="round"
          />
          <path
            d="M22.5 4.5V7.5M21 6H24"
            stroke={accentColor}
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'implants':
      return (
        <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
          <path
            d="M8.5 6.5C8.5 4.8 9.9 3.5 11.6 3.5H16.4C18.1 3.5 19.5 4.8 19.5 6.5V9.2C19.5 11.1 18 12.6 16.1 12.6H11.9C10 12.6 8.5 11.1 8.5 9.2V6.5Z"
            stroke="currentColor"
            strokeWidth="1.9"
          />
          <path
            d="M11.5 12.6L12.3 22.6C12.4 23.7 13.1 24.5 14 24.5C14.9 24.5 15.6 23.7 15.7 22.6L16.5 12.6"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinejoin="round"
          />
          <path
            d="M11 16.2H17M11.4 19.6H16.6"
            stroke={accentColor}
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'root-canal':
      return (
        <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
          <path
            d="M9.6 5.2C7.2 5.2 5.7 7.2 5.7 9.9C5.7 13.9 7.6 17.6 9.1 21.4C9.7 22.9 11.3 22.8 12 21.4L13.1 19C13.5 18.1 14.5 18.1 14.9 19L16 21.4C16.7 22.8 18.3 22.9 18.9 21.4C20.4 17.6 22.3 13.9 22.3 9.9C22.3 7.2 20.8 5.2 18.4 5.2C16.7 5.2 15.5 6.2 14 6.2C12.5 6.2 11.3 5.2 9.6 5.2Z"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinejoin="round"
          />
          <path
            d="M14 9.5V15.5M14 13.5L11.2 19.2M14 13.5L16.8 19.2"
            stroke={accentColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'whitening':
      return (
        <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
          <path
            d="M14 4.5L15.9 10.6L22 12.5L15.9 14.4L14 20.5L12.1 14.4L6 12.5L12.1 10.6L14 4.5Z"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinejoin="round"
          />
          <path
            d="M21 19V23M19 21H23"
            stroke={accentColor}
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'aligners':
      return (
        <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
          <path
            d="M5 12C5 9.8 6.8 8 9 8H19C21.2 8 23 9.8 23 12V16C23 18.2 21.2 20 19 20H9C6.8 20 5 18.2 5 16V12Z"
            stroke="currentColor"
            strokeWidth="1.9"
          />
          <path
            d="M10.5 8V20M17.5 8V20"
            stroke={accentColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M8 14H20"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'cosmetic':
      return (
        <svg viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
          <path
            d="M5.5 13.5C7.6 17.8 10.6 20 14 20C17.4 20 20.4 17.8 22.5 13.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M7.5 13.8H20.5"
            stroke={accentColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M14 5.5V8.5M9.5 7L10.8 9.2M18.5 7L17.2 9.2"
            stroke={accentColor}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel: string;
  loading?: 'eager' | 'lazy';
}

export function SafeImage({
  src,
  alt,
  className = '',
  fallbackLabel,
  loading = 'lazy',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#DDF5EF] via-[#F5FAF9] to-[#E6F4F1] text-[#087E83] p-6 text-center ${className}`}
      >
        <BrandLogoMark className="h-12 w-12 mb-3 opacity-90" />
        <p className="text-sm font-semibold text-[#172D35]">{fallbackLabel}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
