
interface PageProps {
    params: { locale: string };
}

export async function generateMetadata({ params }: PageProps) {
    return {
        title: { ko: '부대시설', en: 'Facilities', ja: '施設', zh: '设施' }[params.locale] || 'Facilities',
        description: { ko: '다양한 부대시설을 즐겨보세요.', en: 'Enjoy our various facilities.', ja: '多彩な施設をお楽しみください。', zh: '享受我们的各种设施。' }[params.locale] || 'Enjoy our various facilities.',
    };
}

export default async function FacilitiesPage({ params }: PageProps) {
    const { locale } = params;

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Header Section */}
            <section className="relative h-[65vh] min-h-[500px] flex items-end justify-center overflow-hidden pb-16">
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1920&auto=format&fit=crop)', // Luxury sophisticated pool
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-900/50 to-primary-900/80" />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-white mb-6 tracking-wide">
                        Facilities
                    </h1>
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-12 h-px bg-accent-500" />
                        <div className="w-1.5 h-1.5 rotate-45 bg-accent-500" />
                        <div className="w-12 h-px bg-accent-500" />
                    </div>
                    <p className="text-white/80 text-lg font-light max-w-2xl mx-auto tracking-wide">
                        {{ ko: '최상의 휴식과 활력을 위한 공간', en: 'Spaces for ultimate relaxation and vitality', ja: '最高の休息と活力のための空間', zh: '极致休憩与活力空间' }[locale]}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Fitness Center */}
                    <div className="group relative h-96 rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
                            alt="Fitness"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                        <div className="absolute inset-x-0 bottom-0 p-8">
                            <h3 className="text-2xl font-serif text-white mb-2">Fitness Center</h3>
                            <p className="text-white/80 text-sm">Update Coming Soon</p>
                        </div>
                    </div>

                    {/* Swimming Pool */}
                    <div className="group relative h-96 rounded-lg overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop"
                            alt="Pool"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                        <div className="absolute inset-x-0 bottom-0 p-8">
                            <h3 className="text-2xl font-serif text-white mb-2">Swimming Pool</h3>
                            <p className="text-white/80 text-sm">Update Coming Soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
