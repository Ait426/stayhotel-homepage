'use client';

/**
 * Brands/Services Section - Seoul Dragon City Style
 *
 * Horizontal row of hotel service icons/brands
 */

import { Locale } from '@/types';

interface BrandsSectionProps {
  locale: Locale;
}

const services = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    name: { ko: '객실', en: 'Rooms', ja: '客室', zh: '客房' },
    desc: { ko: '프리미엄 객실', en: 'Premium Rooms', ja: 'プレミアム客室', zh: '高端客房' },
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    name: { ko: '스페셜 오퍼', en: 'Special Offers', ja: 'スペシャルオファー', zh: '特别优惠' },
    desc: { ko: '특별한 혜택', en: 'Exclusive Benefits', ja: '限定特典', zh: '专属优惠' },
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
    name: { ko: '다이닝', en: 'Dining', ja: 'ダイニング', zh: '餐饮' },
    desc: { ko: '레스토랑 & 바', en: 'Restaurant & Bar', ja: 'レストラン＆バー', zh: '餐厅和酒吧' },
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    name: { ko: '미팅 & 이벤트', en: 'Meeting & Events', ja: 'ミーティング＆イベント', zh: '会议与活动' },
    desc: { ko: '연회 & 컨퍼런스', en: 'Banquet & Conference', ja: '宴会＆カンファレンス', zh: '宴会与会议' },
  },
];

export default function BrandsSection({ locale }: BrandsSectionProps) {
  return (
    <section className="py-16 bg-white border-b border-neutral-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group text-center cursor-pointer"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 mb-4 text-neutral-400 group-hover:text-accent-500 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Name */}
              <h3 className="font-serif text-lg text-primary-900 mb-1 tracking-wide">
                {service.name[locale]}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-400">
                {service.desc[locale]}
              </p>

              {/* Underline on hover */}
              <div className="w-0 h-px bg-accent-500 mx-auto mt-4 group-hover:w-12 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
