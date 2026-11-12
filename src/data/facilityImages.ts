export interface FacilityImage {
  id: string;
  title: string;
  category: 'fermentation' | 'lab' | 'cleanroom' | 'utilities';
  categoryLabel: string;
  description: string;
  src: string;
}

export const facilityImages: FacilityImage[] = [
  {
    id: 'bioreactor-cascade-1',
    title: 'Automated Pilot & Commercial Bioreactors',
    category: 'fermentation',
    categoryLabel: 'Fermentation Plant',
    description: 'Stainless steel bioreactor cascades with automated temperature, pH, agitation, and dissolved oxygen controls.',
    src: '/images/WhatsApp Image 2026-10-23 at 9.53.22 AM (1).jpeg',
  },
  {
    id: 'fermentation-mezzanine',
    title: 'Multi-Kiloliter Production Fermenter',
    category: 'fermentation',
    categoryLabel: 'Fermentation Plant',
    description: 'Suspended high-capacity industrial fermenter vessel (A-RE-102) with sanitary piping and cleanroom flooring.',
    src: '/images/WhatsApp Image 2026-10-23 at 9.53.25 AM.jpeg',
  },
  {
    id: 'laminar-biosafety',
    title: 'Class II Biosafety & Inoculation Cabinet',
    category: 'cleanroom',
    categoryLabel: 'Sterile Cleanrooms',
    description: 'HEPA-filtered laminar airflow workstation for sterile microbial strain inoculation and culture maintenance.',
    src: '/images/WhatsApp Image 2026-10-23 at 9.53.20 AM.jpeg',
  },
  {
    id: 'analytical-lab-1',
    title: 'Microbiology & Quality Testing Laboratory',
    category: 'lab',
    categoryLabel: 'Analytical & QC Lab',
    description: 'Equipped with precision microscopes, analytical digital balances, spectrophotometers, and incubation stations.',
    src: '/images/WhatsApp Image 2026-10-23 at 9.53.21 AM.jpeg',
  },
  {
    id: 'industrial-steam-utility',
    title: 'High-Capacity Steam Generation & Boiler Unit',
    category: 'utilities',
    categoryLabel: 'Utilities & Plant Infrastructure',
    description: 'Dedicated multi-ton industrial steam boilers and utility piping powering sterilization and continuous fermentation.',
    src: '/images/WhatsApp Image 2026-10-23 at 9.53.37 AM.jpeg',
  },
  {
    id: 'bioreactor-piping-system',
    title: 'Sanitary Process Piping & Filtration Loop',
    category: 'fermentation',
    categoryLabel: 'Fermentation Plant',
    description: 'Pharmaceutical-grade 316L stainless steel loop with CIP (Clean-in-Place) and SIP (Sterilize-in-Place) automation.',
    src: '/images/WhatsApp Image 2026-10-23 at 9.53.22 AM (2).jpeg',
  },
  {
    id: 'instrumentation-bench',
    title: 'Analytical Instrumentation Station',
    category: 'lab',
    categoryLabel: 'Analytical & QC Lab',
    description: 'Benchtop analytical instrumentation for raw material verification, in-process testing, and batch release assays.',
    src: '/images/WhatsApp Image 2026-10-23 at 9.53.21 AM (1).jpeg',
  },
  {
    id: 'fermentation-vessels-close',
    title: 'Secondary Fermentation Cascade Unit',
    category: 'fermentation',
    categoryLabel: 'Fermentation Plant',
    description: 'Intermediate volume seed and growth fermenters designed for high-density actinomycete culture scale-up.',
    src: '/images/WhatsApp Image 2026-10-23 at 9.53.23 AM.jpeg',
  },
  {
    id: 'sterile-filtration-unit',
    title: 'Downstream Harvest & Microfiltration',
    category: 'cleanroom',
    categoryLabel: 'Sterile Cleanrooms',
    description: 'Precision separation and filtration equipment isolating high-purity Fusidic Acid crystals from microbial broth.',
    src: '/images/WhatsApp Image 2026-10-23 at 9.53.24 AM.jpeg',
  },
  {
    id: 'utilities-cooling-water',
    title: 'Chilled Water & Air Compression Plant',
    category: 'utilities',
    categoryLabel: 'Utilities & Plant Infrastructure',
    description: 'Heavy-duty refrigeration and oil-free sterile air compressors supplying pure oxygenated air to deep culture fermenters.',
    src: '/images/WhatsApp Image 2026-10-23 at 9.53.36 AM.jpeg',
  },
  {
    id: 'cleanroom-packaging',
    title: 'Sterile Powder Processing & Micronization Room',
    category: 'cleanroom',
    categoryLabel: 'Sterile Cleanrooms',
    description: 'Controlled environment area for particle-size reduction, ultra-fine micronization, and sealed pharmaceutical packaging.',
    src: '/images/WhatsApp Image 2026-10-23 at 9.53.26 AM.jpeg',
  },
  {
    id: 'qc-testing-setup',
    title: 'Physical & Chemical Analysis Lab',
    category: 'lab',
    categoryLabel: 'Analytical & QC Lab',
    description: 'Dedicated testing facility verifying purity, related substances, particle size distribution, and microbial limits.',
    src: '/images/WhatsApp Image 2026-10-23 at 9.53.27 AM.jpeg',
  },
];
