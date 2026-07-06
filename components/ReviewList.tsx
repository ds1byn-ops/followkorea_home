
import React from 'react';
import { LanguageCode } from '../App';

interface ReviewListProps {
  onClose: () => void;
  lang: LanguageCode;
}

const ReviewList: React.FC<ReviewListProps> = ({ onClose, lang }) => {
  // Add multi-language translations for ReviewList component
  const t = {
    KR: { 
      badge: 'Social Presence', 
      title: '글로벌 인플루언서 리뷰', 
      sub: '팔로우코리아와 함께한 글로벌 인플루언서들의 \n 진솔한 의료 관광 경험을 만나보세요.', 
      back: '메인 페이지로 돌아가기' 
    },
    EN: { 
      badge: 'Social Presence', 
      title: 'Global Influencer Reviews', 
      sub: 'Discover sincere medical tourism experiences \n from global influencers with Follow Korea.', 
      back: 'Back to Main Page' 
    },
    CN: { 
      badge: 'Social Presence', 
      title: '全球网红评论', 
      sub: '发现全球网红与 Follow Korea 一同开启的 \n 真诚医疗旅游体验。', 
      back: '返回首页' 
    },
    JP: {
      badge: 'Social Presence',
      title: 'グローバルインフルエンサーレビュー',
      sub: 'Follow Koreaと共にした世界のインフルエンサーたちの \n 率直な医療ツアー体験をご覧ください。',
      back: 'メインページに戻る'
    },
    ID: {
      badge: 'Social Presence',
      title: 'Ulasan Influencer Global',
      sub: 'Temukan pengalaman wisata medis yang tulus \n dari para influencer global bersama Follow Korea.',
      back: 'Kembali ke Halaman Utama'
    },
    AR: {
      badge: 'Social Presence',
      title: 'تقييمات المؤثرين العالميين',
      sub: 'اكتشف تجارب السياحة العلاجية الصادقة \n للمؤثرين العالميين مع Follow Korea.',
      back: 'العودة إلى الصفحة الرئيسية'
    },
    KH: {
      badge: 'Social Presence',
      title: 'ការវាយតម្លៃពីអ្នកមានឥទ្ធិពលសកល',
      sub: 'ស្វែងយល់ពីបទពិសោធន៍ទេសចរណ៍វេជ្ជសាស្ត្រដ៏ស្មោះត្រង់ \n របស់អ្នកមានឥទ្ធិពលសកលជាមួយ Follow Korea។',
      back: 'ត្រឡប់ទៅទំព័រដើម'
    },
    VI: {
      badge: 'Social Presence',
      title: 'Đánh giá từ Influencer toàn cầu',
      sub: 'Khám phá trải nghiệm du lịch y tế chân thực \n của các influencer toàn cầu cùng Follow Korea.',
      back: 'Về trang chính'
    },
    RU: {
      badge: 'Social Presence',
      title: 'Отзывы мировых блогеров',
      sub: 'Откройте искренние впечатления о медицинском туризме \n от блогеров со всего мира вместе с Follow Korea.',
      back: 'Вернуться на главную'
    }
  }[lang];

  const reviewsData = [
    { 
      user: "@FollowKorea", 
      followers: "1.2M", 
      vimeoId: "1160923982",
      caption: "The Best K-Medical Tour with Follow Korea! ❤️",
      likes: "124K"
    },
    { 
      user: "@FollowKorea", 
      followers: "850K", 
      vimeoId: "1162067195",
      caption: "VIP treatment from arrival to departure. Truly amazing!",
      likes: "89K"
    },
    { 
      user: "@FollowKorea", 
      followers: "2.1M", 
      vimeoId: "1162067112",
      caption: "Professional doctors and perfect coordination. Zero worries!",
      likes: "312K"
    },
    { 
      user: "@FollowKorea", 
      followers: "420K", 
      vimeoId: "1160924028",
      caption: "Feeling refreshed and healthy after my visit. ✨",
      likes: "45K"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Header Section */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <span className="text-[#5a82c2] font-black text-xs md:text-sm tracking-[0.4em] uppercase mb-6 block animate-in slide-in-from-bottom-2 duration-700">{t.badge}</span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-[1.2] animate-in slide-in-from-bottom-4 duration-700 delay-100 whitespace-pre-line">
            {t.title}
          </h1>
          <p className="text-gray-400 mt-8 text-lg md:text-xl max-w-2xl font-medium animate-in slide-in-from-bottom-6 duration-700 delay-200 whitespace-pre-line">
            {t.sub}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reviewsData.map((story, idx) => (
            <div 
              key={idx}
              className="group animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-black shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
                <div className="absolute inset-0 w-full h-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                  <iframe
                    src={`https://player.vimeo.com/video/${story.vimeoId}?autoplay=1&loop=1&background=1&muted=1&autopause=0`}
                    className="w-full h-full absolute top-0 left-0 object-cover"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title={`Review video ${idx}`}
                  ></iframe>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
                
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#5a82c2] p-0.5">
                    <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center text-[10px] font-bold text-white">
                      {story.user[1].toUpperCase()}
                    </div>
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold tracking-tight">{story.user}</p>
                    <p className="text-[#5a82c2] text-[10px] font-black">{story.followers} Followers</p>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-5 rounded-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-xs leading-relaxed font-medium mb-3 line-clamp-2">
                      {story.caption}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1.5">
                        <span className="iconify text-pink-500 text-sm" data-icon="solar:heart-bold"></span>
                        <span className="text-white text-[10px] font-bold">{story.likes}</span>
                      </div>
                      <span className="iconify text-white/50 text-xl" data-icon="solar:play-circle-linear"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Home CTA */}
      <div className="mt-32 md:mt-48 text-center px-6">
        <button 
          onClick={onClose}
          className="inline-flex items-center gap-3 text-gray-400 hover:text-[#5a82c2] font-black tracking-widest uppercase transition-all group"
        >
          <span className="iconify text-2xl group-hover:-translate-x-2 transition-transform" data-icon="solar:alt-arrow-left-linear"></span>
          <span className="text-sm md:text-base">{t.back}</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewList;
