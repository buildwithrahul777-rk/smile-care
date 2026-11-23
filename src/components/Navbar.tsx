import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/clinicData';
import { BrandLogoMark } from './BrandLogo';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault();
    setMobileOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-md border-b border-[#172D35]/10 shadow-[0_4px_20px_rgba(23,45,53,0.06)]'
          : 'bg-white/95 backdrop-blur-sm border-b border-[#172D35]/6'
      }`}
    >
      <div className="mx-auto flex h-14 sm:h-16 max-w-[1240px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand wordmark matching reference mobile lockup */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:rounded-lg"
        >
          <BrandLogoMark className="h-8 w-8 sm:h-9 sm:w-9 shrink-0" />
          <span className="flex flex-col leading-tight sm:flex-row sm:items-baseline sm:gap-1.5">
            <span className="font-[var(--font-display)] text-[15px] sm:text-lg font-extrabold tracking-tight text-[#172D35]">
              SmileCare
            </span>
            <span className="font-[var(--font-display)] text-[12px] sm:text-lg font-semibold sm:font-bold tracking-tight text-[#4A626A] sm:text-[#172D35]">
              Dental Studio
            </span>
          </span>
        </a>

        {/* Zone 2: Desktop navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#4A626A]"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  isActive
                    ? 'text-[#087E83] font-semibold'
                    : 'hover:text-[#172D35]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-[#087E83] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA & Mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#appointment"
            onClick={(e) => handleLinkClick(e, 'appointment')}
            className="hidden lg:inline-flex items-center justify-center rounded-full bg-[#087E83] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#066569] active:scale-[0.98] whitespace-nowrap shrink-0 shadow-[0_6px_16px_rgba(8,126,131,0.22)]"
          >
            Book Appointment
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#087E83] transition-colors hover:bg-[#F5FAF9] lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" strokeWidth={2.2} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={2.2} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="border-t border-[#172D35]/10 bg-white px-4 pb-5 pt-3 shadow-xl lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`flex min-h-[44px] items-center rounded-xl px-4 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#DDF5EF]/75 text-[#087E83] font-semibold'
                      : 'text-[#172D35] hover:bg-[#F5FAF9]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#appointment"
              onClick={(e) => handleLinkClick(e, 'appointment')}
              className="mt-3 flex min-h-[46px] items-center justify-center rounded-xl bg-[#087E83] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#066569]"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
