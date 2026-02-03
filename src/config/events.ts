export type TabType = 'all' | 'room' | 'dining' | 'event';

export interface Offer {
    id: number;
    type: TabType;
    image: string;
    title: { ko: string; en: string; ja: string; zh: string };
    subtitle: { ko: string; en: string; ja: string; zh: string };
    desc: { ko: string; en: string; ja: string; zh: string };
    period: { ko: string; en: string; ja: string; zh: string };
}

export const offers: Offer[] = [
    {
        id: 1,
        type: 'room',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
        title: { ko: '얼리버드 스페셜', en: 'Early Bird Special', ja: 'アーリーバードスペシャル', zh: '早鸟特惠' },
        subtitle: { ko: '최대 30% 할인', en: 'Up to 30% OFF', ja: '最大30%OFF', zh: '最高30%折扣' },
        desc: { ko: '14일 전 예약 시 특별 할인', en: 'Book 14 days in advance', ja: '14日前のご予約で特別割引', zh: '提前14天预订享特别优惠' },
        period: { ko: '상시 운영', en: 'Always Available', ja: '常時開催', zh: '常年有效' },
    },
    {
        id: 2,
        type: 'room',
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
        title: { ko: '로맨틱 스테이', en: 'Romantic Stay', ja: 'ロマンティックステイ', zh: '浪漫之旅' },
        subtitle: { ko: '커플 패키지', en: 'Couple Package', ja: 'カップルパッケージ', zh: '情侣套餐' },
        desc: { ko: '와인 & 조식 포함', en: 'Includes wine & breakfast', ja: 'ワイン＆朝食付き', zh: '含红酒和早餐' },
        period: { ko: '상시 운영', en: 'Always Available', ja: '常時開催', zh: '常年有效' },
    },
    {
        id: 3,
        type: 'dining',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop',
        title: { ko: '시그니처 디너', en: 'Signature Dinner', ja: 'シグネチャーディナー', zh: '招牌晚餐' },
        subtitle: { ko: '파인 다이닝', en: 'Fine Dining', ja: 'ファインダイニング', zh: '精致餐饮' },
        desc: { ko: '셰프 특선 코스 요리', en: "Chef's special course", ja: 'シェフ特選コース料理', zh: '主厨特选套餐' },
        period: { ko: '매일 18:00 - 22:00', en: 'Daily 6PM - 10PM', ja: '毎日 18:00 - 22:00', zh: '每日 18:00 - 22:00' },
    },
    {
        id: 4,
        type: 'event',
        image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop',
        title: { ko: '웨딩 패키지', en: 'Wedding Package', ja: 'ウェディングパッケージ', zh: '婚礼套餐' },
        subtitle: { ko: '특별한 날을 위해', en: 'For Your Special Day', ja: '特別な日のために', zh: '为您的特别日子' },
        desc: { ko: '맞춤형 웨딩 플래닝', en: 'Customized wedding planning', ja: 'オーダーメイドウェディング', zh: '定制婚礼策划' },
        period: { ko: '상시 운영', en: 'Always Available', ja: '常時開催', zh: '常年有效' },
    },
    {
        id: 5,
        type: 'room',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
        title: { ko: '비즈니스 패키지', en: 'Business Package', ja: 'ビジネスパッケージ', zh: '商务套餐' },
        subtitle: { ko: '출장객 특별 혜택', en: 'Business Traveler Benefits', ja: 'ビジネス旅行者特典', zh: '商旅特别优惠' },
        desc: { ko: '조식 & 라운지 이용', en: 'Breakfast & Lounge access', ja: '朝食＆ラウンジ利用', zh: '含早餐和休息室使用' },
        period: { ko: '상시 운영', en: 'Always Available', ja: '常時開催', zh: '常年有效' },
    },
    {
        id: 6,
        type: 'dining',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop',
        title: { ko: '선데이 브런치', en: 'Sunday Brunch', ja: 'サンデーブランチ', zh: '周日早午餐' },
        subtitle: { ko: '주말 특선', en: 'Weekend Special', ja: '週末スペシャル', zh: '周末特选' },
        desc: { ko: '라이브 쿠킹 스테이션', en: 'Live cooking station', ja: 'ライブクッキングステーション', zh: '现场烹饪台' },
        period: { ko: '매주 일요일', en: 'Every Sunday', ja: '毎週日曜日', zh: '每周日' },
    },
];
