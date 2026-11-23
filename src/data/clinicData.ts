export type TreatmentCategory = 'all' | 'preventive-restorative' | 'orthodontics-cosmetic';

export type TreatmentIconKey =
  | 'cleaning'
  | 'implants'
  | 'root-canal'
  | 'whitening'
  | 'aligners'
  | 'cosmetic';

export interface TreatmentItem {
  id: string;
  number: string;
  title: string;
  category: Exclude<TreatmentCategory, 'all'>;
  categoryLabel: string;
  shortDescription: string;
  detailedOverview: string;
  whatToExpect: string[];
  estimatedVisit: string;
  icon: TreatmentIconKey;
  image: string;
  imageAlt: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: 'professionals' | 'technology' | 'patient-focused' | 'environment';
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  treatmentLabel: string;
  quote: string;
  rating: number;
}

export const CLINIC_IMAGES = {
  hero: '/src/assets/images/hero_patient_smile_right_1795449968790.jpg',
  interior: '/src/assets/images/clinic_interior_studio_1795445332529.jpg',
  doctor: '/src/assets/images/lead_dentist_portrait_1795445331277.jpg',
  suite: '/src/assets/images/modern_dental_suite_1795445330273.jpg',
  treatments: {
    cleaning: '/src/assets/images/treatment_teeth_cleaning_1795449968021.jpg',
    implants: '/src/assets/images/treatment_dental_implants_1795449968485.jpg',
    rootCanal: '/src/assets/images/treatment_root_canal_1795449968790.jpg',
    whitening: '/src/assets/images/treatment_teeth_whitening_1795449969831.jpg',
    aligners: '/src/assets/images/treatment_braces_aligners_1795449966776.jpg',
    cosmetic: '/src/assets/images/treatment_cosmetic_dentistry_1795449968582.jpg',
  },
} as const;

export const CLINIC_BRAND = {
  name: 'SmileCare Dental Studio',
  tagline: 'Modern Smile Care',
  heroKicker: 'YOUR SMILE, OUR PRIORITY',
  heroHeadline: 'A Healthier Smile Starts Here.',
  heroSubtitle:
    'Experience comfortable, personalised dental care with modern treatments designed around your smile.',
};

export const HERO_TRUST_INDICATORS = [
  {
    id: 'hygiene',
    title: 'Safe & Hygienic Care',
    icon: 'hygiene' as const,
  },
  {
    id: 'team',
    title: 'Experienced Team',
    icon: 'team' as const,
  },
  {
    id: 'technology',
    title: 'Modern Technology',
    icon: 'technology' as const,
  },
];

export const TREATMENTS: TreatmentItem[] = [
  {
    id: 'teeth-cleaning',
    number: '01',
    title: 'Teeth Cleaning',
    category: 'preventive-restorative',
    categoryLabel: 'Preventive Care',
    shortDescription:
      'Remove plaque and keep your teeth healthy and fresh.',
    detailedOverview:
      'Routine hygiene visits support long-term oral health by gently removing plaque and surface buildup in areas daily brushing can miss. Your clinician checks gum wellness and shares simple tailored home-care tips.',
    whatToExpect: [
      'Thorough visual check of teeth and gum comfort',
      'Gentle scaling and polishing for a clean, smooth finish',
      'Personalised preventive guidance for everyday care',
    ],
    estimatedVisit: 'Approx. 45–60 minutes (sample estimate)',
    icon: 'cleaning',
    image: CLINIC_IMAGES.treatments.cleaning,
    imageAlt: 'Dental clinician performing gentle teeth cleaning with a mirror and scaler',
  },
  {
    id: 'dental-implants',
    number: '02',
    title: 'Dental Implants',
    category: 'preventive-restorative',
    categoryLabel: 'Restorative Care',
    shortDescription:
      'A long-lasting solution for missing teeth.',
    detailedOverview:
      'Dental implants provide a stable, natural-feeling foundation for replacement crowns or bridges. Every plan begins with careful digital imaging and a transparent walk-through of each stage.',
    whatToExpect: [
      'Detailed consultation and digital imaging assessment',
      'Step-by-step personalised restoration timeline',
      'Custom-matched ceramic crown crafted for natural harmony',
    ],
    estimatedVisit: 'Multi-visit treatment plan (sample estimate)',
    icon: 'implants',
    image: CLINIC_IMAGES.treatments.implants,
    imageAlt: 'Close-up model of a porcelain dental crown mounted on a precision titanium implant',
  },
  {
    id: 'root-canal-treatment',
    number: '03',
    title: 'Root Canal Treatment',
    category: 'preventive-restorative',
    categoryLabel: 'Restorative Care',
    shortDescription:
      'Relieve tooth pain and save your natural tooth.',
    detailedOverview:
      'Modern endodontic care focuses on gentle comfort and preserving your natural tooth structure. With calm anaesthesia and careful sealing, treatment helps restore comfortable biting.',
    whatToExpect: [
      'Diagnostic review and gentle local numbing for comfort',
      'Careful cleaning and sealing of the inner tooth canal',
      'Follow-up restoration guidance to protect tooth strength',
    ],
    estimatedVisit: 'Approx. 60–90 minutes (sample estimate)',
    icon: 'root-canal',
    image: CLINIC_IMAGES.treatments.rootCanal,
    imageAlt: 'Clean anatomical illustration showing precision root canal preservation',
  },
  {
    id: 'teeth-whitening',
    number: '04',
    title: 'Teeth Whitening',
    category: 'orthodontics-cosmetic',
    categoryLabel: 'Cosmetic Care',
    shortDescription:
      'Get a brighter, more confident smile.',
    detailedOverview:
      'Clinically guided whitening consultations assess enamel sensitivity and help you choose between in-studio or supervised take-home brightening options suited to your smile goals.',
    whatToExpect: [
      'Shade evaluation and enamel sensitivity check',
      'Protective gum barrier and measured brightening session',
      'Simple aftercare tips to preserve natural brightness',
    ],
    estimatedVisit: 'Approx. 45–60 minutes (sample estimate)',
    icon: 'whitening',
    image: CLINIC_IMAGES.treatments.whitening,
    imageAlt: 'Close-up of a bright, naturally radiant white smile',
  },
  {
    id: 'braces-and-aligners',
    number: '05',
    title: 'Braces & Aligners',
    category: 'orthodontics-cosmetic',
    categoryLabel: 'Orthodontics',
    shortDescription:
      'Discreet aligners and modern care for balanced alignment.',
    detailedOverview:
      'Orthodontic consultations explore clear removable aligners and modern brackets tailored for teens and adults. Digital scans help you preview your proposed alignment pathway before starting.',
    whatToExpect: [
      'Bite evaluation and digital smile scan consultation',
      'Clear comparison of aligner and orthodontic options',
      'Comfortable scheduled check-ins throughout your plan',
    ],
    estimatedVisit: 'Personalised multi-month plan (sample estimate)',
    icon: 'aligners',
    image: CLINIC_IMAGES.treatments.aligners,
    imageAlt: 'Transparent modern clear orthodontic aligners resting on a clean studio tray',
  },
  {
    id: 'cosmetic-dentistry',
    number: '06',
    title: 'Cosmetic Dentistry',
    category: 'orthodontics-cosmetic',
    categoryLabel: 'Cosmetic Care',
    shortDescription:
      'Subtle veneers and bonding crafted for natural harmony.',
    detailedOverview:
      'Aesthetic dental treatments such as conservative bonding, contouring, and custom veneers are planned collaboratively to complement your natural facial proportions.',
    whatToExpect: [
      'Collaborative smile consultation and photo review',
      'Conservative options explained clearly with zero pressure',
      'Careful shade and shape matching for authentic results',
    ],
    estimatedVisit: 'Custom consultation plan (sample estimate)',
    icon: 'cosmetic',
    image: CLINIC_IMAGES.treatments.cosmetic,
    imageAlt: 'Smiling patient with balanced, natural-looking cosmetic dental results in a sunlit studio',
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'experienced-professionals',
    title: 'Experienced Dental Professionals',
    description:
      'A dedicated clinical team committed to clear explanations, gentle chairside technique, and thoughtful preventive guidance.',
    icon: 'professionals',
  },
  {
    id: 'modern-technology',
    title: 'Modern Dental Technology',
    description:
      'Contemporary digital diagnostics and streamlined equipment designed to make consultations clearer and visits smoother.',
    icon: 'technology',
  },
  {
    id: 'patient-focused',
    title: 'Patient-Focused Treatment',
    description:
      'Every care plan is tailored around your goals, comfort preferences, and schedule—never rushed or one-size-fits-all.',
    icon: 'patient-focused',
  },
  {
    id: 'comfortable-environment',
    title: 'Comfortable Clinic Environment',
    description:
      'A sunlit, serene studio interior thoughtfully designed to feel calm and welcoming from reception to the treatment chair.',
    icon: 'environment',
  },
];

export const LEAD_DOCTOR = {
  name: 'Lead Dental Practitioner',
  qualification: 'General & Preventive Dentistry (Editable)',
  specialisation: 'Restorative & Aesthetic Smile Care (Editable)',
  introduction:
    'Great dental care begins with listening attentively and explaining every option in clear, everyday language. Focused on gentle chairside technique and long-term oral wellness, our lead clinician welcomes patients of all ages into a calm, unhurried studio setting.',
  focusAreas: [
    'Preventive Care',
    'Restorative Dentistry',
    'Aesthetic Smile Planning',
  ],
};

export const ASSOCIATE_TEAM_PLACEHOLDERS = [
  {
    id: 'associate-1',
    name: 'Associate Dental Clinician',
    role: 'Orthodontics & Clear Aligners · Sample Team Slot',
  },
  {
    id: 'associate-2',
    name: 'Oral Hygiene Specialist',
    role: 'Preventive Care & Gum Wellness · Sample Team Slot',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'demo-review-1',
    patientName: 'Preventive Care Visitor',
    treatmentLabel: 'Teeth Cleaning · Sample Review',
    quote:
      '"From the calm reception lounge to the gentle cleaning session, every step was explained clearly so I felt completely relaxed throughout my visit."',
    rating: 5,
  },
  {
    id: 'demo-review-2',
    patientName: 'Orthodontic Consultation Visitor',
    treatmentLabel: 'Braces & Aligners · Sample Review',
    quote:
      '"The studio feels bright and welcoming rather than clinical. Reviewing digital scans made understanding my aligner options simple and reassuring."',
    rating: 5,
  },
  {
    id: 'demo-review-3',
    patientName: 'Cosmetic Care Visitor',
    treatmentLabel: 'Teeth Whitening · Sample Review',
    quote:
      '"Thoughtful, unhurried care with genuine attention to sensitivity and comfort. I appreciated the clear aftercare advice and warm follow-up."',
    rating: 5,
  },
];

export const CONTACT_PLACEHOLDERS = {
  address: '120 Wellness Way, Suite 200, Sample City',
  phone: '+1 (555) 010-2400',
  whatsapp: '+1 (555) 010-2499',
  email: 'care@smilecaredental.example',
  openingHours: [
    { days: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
    { days: 'Saturday', hours: '9:00 AM – 2:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ],
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About Us', href: '#about', id: 'about' },
  { label: 'Treatments', href: '#treatments', id: 'treatments' },
  { label: 'Our Doctors', href: '#doctors', id: 'doctors' },
  { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { label: 'Contact', href: '#contact', id: 'contact' },
] as const;
