
import { offers } from '@/config/events';

interface EventsPageProps {
    params: { locale: string };
}

export async function generateMetadata({ params }: EventsPageProps) {
    return {
        title: { ko: '이벤트 & 프로모션', en: 'Events & Promotions', ja: 'イベント＆プロモーション', zh: '活动与优惠' }[params.locale] || 'Events & Promotions',
        description: { ko: '특별한 혜택들을 만나보세요.', en: 'Discover our special offers.', ja: '特別な特典をご覧ください。', zh: '发现我们的特别优惠。' }[params.locale] || 'Discover our special offers.',
    };
}

export default async function EventsPage({ params }: EventsPageProps) {
    const { locale } = params;

    return (
        <div className="min-h-screen bg-neutral-50 pb-20">
            {/* Header Section */}
            <section className="relative h-[65vh] min-h-[500px] flex items-end justify-center overflow-hidden bg-primary-900 pb-16">
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-white mb-6 tracking-wide">
                        Events & Promotions
                    </h1>
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-12 h-px bg-accent-500" />
                        <div className="w-1.5 h-1.5 rotate-45 bg-accent-500" />
                        <div className="w-12 h-px bg-accent-500" />
                    </div>
                    <p className="text-white/80 text-lg font-light max-w-2xl mx-auto tracking-wide">
                        {{ ko: '특별한 순간을 위한 준비된 혜택을 확인하세요.', en: 'Discover exclusive benefits prepared for your special moments.', ja: '特別なひとときのためにご用意した特典をご覧ください。', zh: '发现为您特别时刻准备的专属优惠。' }[locale]}
                    </p>
                </div>
            </section>

            {/* Events List Section */}
            <div className="container mx-auto px-6 -mt-16 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offers.map((offer) => (
                        <div
                            key={offer.id}
                            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col"
                        >
                            {/* Image */}
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                    src={offer.image}
                                    alt={offer.title[locale as 'ko' | 'en' | 'ja' | 'zh']}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-gray-600 rounded-full uppercase tracking-wider">
                                    {offer.type}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <span className="text-xs text-accent-600 tracking-widest uppercase mb-2 block font-medium">
                                    {offer.subtitle[locale as 'ko' | 'en' | 'ja' | 'zh']}
                                </span>
                                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                                    {offer.title[locale as 'ko' | 'en' | 'ja' | 'zh']}
                                </h3>
                                <p className="text-gray-500 text-sm mb-4 flex-1">
                                    {offer.desc[locale as 'ko' | 'en' | 'ja' | 'zh']}
                                </p>

                                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-400">
                                    <span>{offer.period[locale as 'ko' | 'en' | 'ja' | 'zh']}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
