'use client';

/**
 * Features Section - Seoul Dragon City Style
 *
 * Elegant feature cards with sophisticated icons
 */

import { useTranslations } from '@/lib/translations';
import { Locale } from '@/types';

interface FeaturesSectionProps {
  locale: Locale;
}

const features = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    titleKey: 'feature1Title',
    descKey: 'feature1Desc',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    titleKey: 'feature2Title',
    descKey: 'feature2Desc',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    titleKey: 'feature3Title',
    descKey: 'feature3Desc',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    titleKey: 'feature4Title',
    descKey: 'feature4Desc',
  },
];

export default function FeaturesSection({ locale }: FeaturesSectionProps) {
  const t = useTranslations('home');

  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-medium text-accent-500 uppercase tracking-[0.3em] mb-4">
            {{ ko: '시설 및 서비스', en: 'Facilities & Services', ja: '施設・サービス', zh: '设施与服务' }[locale]}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-primary-900 tracking-wide mb-6">
            {t('whyChooseUs')}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-accent-500" />
            <div className="w-1.5 h-1.5 rotate-45 bg-accent-500" />
            <div className="w-12 h-px bg-accent-500" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-10 text-center group hover:bg-primary-900 transition-all duration-500"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 text-accent-500 group-hover:text-white transition-colors duration-500">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl text-primary-900 group-hover:text-white mb-4 transition-colors duration-500 tracking-wide">
                {t(feature.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-500 group-hover:text-white/70 leading-relaxed transition-colors duration-500">
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
