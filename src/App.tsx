/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { AboutSection } from './components/AboutSection';
import { AppointmentSection } from './components/AppointmentSection';
import {
  ContactSection,
  type ContactPreviewMode,
} from './components/ContactSection';
import { DoctorsSection } from './components/DoctorsSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import { TreatmentsSection } from './components/TreatmentsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { NAV_LINKS, type TreatmentItem } from './data/clinicData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedTreatmentModal, setSelectedTreatmentModal] =
    useState<TreatmentItem | null>(null);
  const [preselectedTreatment, setPreselectedTreatment] = useState<string>('');
  const [contactPreview, setContactPreview] =
    useState<ContactPreviewMode>(null);

  const scrollToSection = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleBookSpecificTreatment = useCallback(
    (treatmentTitle: string) => {
      setSelectedTreatmentModal(null);
      setPreselectedTreatment(treatmentTitle);
      scrollToSection('appointment');
    },
    [scrollToSection]
  );

  const handleMobileQuickContact = useCallback(
    (mode: Exclude<ContactPreviewMode, null>) => {
      setContactPreview(mode);
      scrollToSection('contact');
    },
    [scrollToSection]
  );

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0 || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.3, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#172D35]">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      <main>
        <HeroSection
          onBookClick={() => scrollToSection('appointment')}
          onExploreClick={() => scrollToSection('treatments')}
        />

        <AboutSection onMeetDoctors={() => scrollToSection('doctors')} />

        <TreatmentsSection
          onLearnMore={(treatment) => setSelectedTreatmentModal(treatment)}
        />

        <WhyChooseUsSection />

        <DoctorsSection
          onBookConsultation={() => scrollToSection('appointment')}
        />

        <TestimonialsSection />

        <AppointmentSection preselectedTreatment={preselectedTreatment} />

        <ContactSection
          contactPreview={contactPreview}
          onSelectContactPreview={setContactPreview}
        />
      </main>

      <Footer
        onNavigate={scrollToSection}
        onSelectTreatment={handleBookSpecificTreatment}
      />

      {/* Compact mobile sticky quick-action bar matching reference screenshot */}
      <div
        data-testid="mobile-quick-bar"
        className="fixed inset-x-0 bottom-0 z-30 border-t border-[#172D35]/10 bg-white/96 px-3 py-2 backdrop-blur-md shadow-[0_-6px_20px_rgba(23,45,53,0.08)] lg:hidden"
      >
        <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => handleMobileQuickContact('call')}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#087E83] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#066569] whitespace-nowrap"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            Call Now
          </button>
          <button
            type="button"
            onClick={() => handleMobileQuickContact('whatsapp')}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#1E9E52] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#188444] whitespace-nowrap"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            WhatsApp
          </button>
        </div>
      </div>

      <TreatmentDetailModal
        treatment={selectedTreatmentModal}
        onClose={() => setSelectedTreatmentModal(null)}
        onBookTreatment={handleBookSpecificTreatment}
      />
    </div>
  );
}
