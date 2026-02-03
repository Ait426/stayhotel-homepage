'use client';

/**
 * Membership Section - Seoul Dragon City Style
 *
 * Split layout with two promotional blocks
 */

import Link from 'next/link';
import { Locale } from '@/types';

interface MembershipSectionProps {
  locale: Locale;
}

export default function MembershipSection({ locale }: MembershipSectionProps) {
  return (
    <section className="bg-primary-900">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Block - Membership */}
        <div className="relative min-h-[500px] lg:min-h-[600px] overflow-hidden group">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop)',
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-primary-900/70" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-12">
            <span className="text-accent-500 text-xs tracking-[0.3em] uppercase mb-4">
              {{ ko: '멤버십', en: 'Membership', ja: 'メンバーシップ', zh: '会员' }[locale]}
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 tracking-wide">
              {{ ko: '호텔 멤버십', en: 'Hotel Membership', ja: 'ホテルメンバーシップ', zh: '酒店会员' }[locale]}
            </h3>
            <p className="text-white/70 max-w-md mb-8 leading-relaxed">
              {{ ko: '멤버십 회원만을 위한 특별한 혜택과 할인을 경험하세요. 객실 업그레이드, 레이트 체크아웃, 포인트 적립 등 다양한 혜택이 제공됩니다.',
                 en: 'Experience exclusive benefits and discounts for members only. Room upgrades, late checkout, point accumulation and more.',
                 ja: '会員様限定の特別な特典と割引をご体験ください。客室アップグレード、レイトチェックアウト、ポイント積立など多彩な特典をご用意しています。',
                 zh: '体验会员专属的特别优惠和折扣。客房升级、延迟退房、积分累积等多种优惠等您享受。'
              }[locale]}
            </p>

            {/* Benefits List */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {{ ko: '객실 업그레이드', en: 'Room Upgrade', ja: '客室アップグレード', zh: '客房升级' }[locale]}
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {{ ko: '포인트 적립', en: 'Points', ja: 'ポイント', zh: '积分累积' }[locale]}
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {{ ko: '다이닝 할인', en: 'Dining Discount', ja: 'ダイニング割引', zh: '餐饮折扣' }[locale]}
              </div>
            </div>

            <Link
              href={`/${locale}/booking`}
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-primary-900"
            >
              {{ ko: '회원가입', en: 'Join Now', ja: '会員登録', zh: '立即加入' }[locale]}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Block - Facilities */}
        <div className="relative min-h-[500px] lg:min-h-[600px] overflow-hidden group">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop)',
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-12">
            <span className="text-accent-500 text-xs tracking-[0.3em] uppercase mb-4">
              {{ ko: '시설 안내', en: 'Facilities', ja: '施設案内', zh: '设施介绍' }[locale]}
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-6 tracking-wide">
              {{ ko: '피트니스 & 스파', en: 'Fitness & Spa', ja: 'フィットネス＆スパ', zh: '健身与水疗' }[locale]}
            </h3>
            <p className="text-white/70 max-w-md mb-8 leading-relaxed">
              {{ ko: '최신 운동 기구를 갖춘 피트니스 센터와 휴식을 위한 스파 시설을 이용해보세요. 전문 트레이너의 PT 프로그램도 제공됩니다.',
                 en: 'Experience our state-of-the-art fitness center and relaxing spa facilities. Personal training programs available.',
                 ja: '最新の運動器具を備えたフィットネスセンターとリラクゼーションスパ施設をご利用ください。パーソナルトレーニングプログラムもご用意しています。',
                 zh: '体验配备先进器材的健身中心和放松身心的水疗设施。提供私人教练课程。'
              }[locale]}
            </p>

            {/* Facilities List */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {{ ko: '피트니스 센터', en: 'Fitness Center', ja: 'フィットネスセンター', zh: '健身中心' }[locale]}
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {{ ko: '수영장', en: 'Swimming Pool', ja: 'プール', zh: '游泳池' }[locale]}
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {{ ko: '스파 & 사우나', en: 'Spa & Sauna', ja: 'スパ＆サウナ', zh: '水疗和桑拿' }[locale]}
              </div>
            </div>

            <Link
              href={`/${locale}/rooms`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-500 text-primary-900 text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white"
            >
              {{ ko: '시설 둘러보기', en: 'Explore', ja: '施設を見る', zh: '浏览设施' }[locale]}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
