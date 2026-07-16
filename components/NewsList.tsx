
import React from 'react';
import { LanguageCode } from '../App';

interface NewsListProps {
  onClose: () => void;
  lang: LanguageCode;
}

const NewsList: React.FC<NewsListProps> = ({ onClose, lang }) => {
  const t = {
    KR: { 
      badge: 'Media Center', 
      title: '팔로우코리아 소식', 
      sub: '글로벌 의료 시장의 변화와 새로운 혁신의 순간들을 공유합니다.', 
      back: '메인 페이지로 돌아가기',
      items: [
        { category: '보도자료',  title: '팔로우코리아, 글로벌 의료관광과 K-콘텐츠 융합의 신세계로', date: '2026.01.30', img: 'https://cdn.newsroad.co.kr/news/photo/202601/53565_72372_531.jpg' , url: 'https://www.newsroad.co.kr/news/articleView.html?idxno=53565'},
        { category: '보도자료', title: '팔로우코리아, 시즌2 K-뷰티 의료관광 글로벌 프로젝트 개최', date: '2025.11.13', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6bfafba46f880.jpg', url: 'https://star.mbn.co.kr/entertain/11467451?refer=portal' },
        { category: '보도자료', title: '100만 팔로우 왕홍이 영업사원이 되는 순간…팔로우코리아, K-뷰티 메디투어의 新시장 열린다', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' },
        { category: '보도자료', title: '팔로우코리아-GCNC, 국내기업 해외진출 지원 강화 위한 전략적 업무협약 체결', date: '2025.11.19', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ff65c4d98d8d0.png', url: 'https://www.enetnews.co.kr/news/articleView.html?idxno=44232' }

      ]
    },
    EN: { 
      badge: 'Media Center', 
      title: 'Follow Korea News', 
      sub: 'Sharing moments of innovation and changes in the global medical market.', 
      back: 'Back to Main Page',
      items: [
        { category: 'Press', title: 'Follow Korea Leads a New Frontier in Global Medical Tourism–K-Content Convergence', date: '2026.01.30', img: 'https://cdn.newsroad.co.kr/news/photo/202601/53565_72372_531.jpg', url: 'https://www.newsroad.co.kr/news/articleView.html?idxno=53565' },
        { category: 'Press', title: "Follow Korea Hosts Season 2 K-Beauty Medical Tourism Global Project", date: '2025.11.13', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6bfafba46f880.jpg', url: 'https://star.mbn.co.kr/entertain/11467451?refer=portal' },
        { category: 'Press', title: 'Follow Korea Opens New Markets for K-Beauty Meditours with 1M-Follower Influencers', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' },
        { category: 'Press', title: 'Follow Korea-GCNC Sign Strategic Business Agreement to Support Global Expansion', date: '2025.11.19', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ff65c4d98d8d0.png', url: 'https://www.enetnews.co.kr/news/articleView.html?idxno=44232' }
      ]
    },
    CN: { 
      badge: 'Media Center', 
      title: 'Follow Korea 动态', 
      sub: '分享全球医疗市场的变化和创新的瞬间。', 
      back: '返回首页',
      items: [
        { category: '新闻', title: '‘Follow Korea’开启全球医疗旅游与K-内容融合的新篇章', date: '2026.01.30', img: 'https://cdn.newsroad.co.kr/news/photo/202601/53565_72372_531.jpg', url: 'https://www.newsroad.co.kr/news/articleView.html?idxno=53565' },
        { category: '新闻', title: "Follow Korea 举办第二季 K-Beauty 医疗旅游全球项目", date: '2025.11.13', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6bfafba46f880.jpg', url: 'https://star.mbn.co.kr/entertain/11467451?refer=portal' },
        { category: '新闻', title: '百万粉丝网红加盟... Follow Korea 开启 K-Beauty 医疗旅游新市场', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' },
        { category: '新闻', title: 'Follow Korea 与 GCNC 签署战略合作协议，助力国内企业出海', date: '2025.11.19', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ff65c4d98d8d0.png', url: 'https://www.enetnews.co.kr/news/articleView.html?idxno=44232' }
      ]
    },
    JP: {
      badge: 'Media Center',
      title: 'Follow Korea ニュース',
      sub: 'グローバル医療市場の変化と新たなイノベーションの瞬間を共有します。',
      back: 'メインページに戻る',
      items: [
        { category: 'プレスリリース', title: 'Follow Korea、グローバル医療ツーリズムとK-コンテンツ融合の新境地へ', date: '2026.01.30', img: 'https://cdn.newsroad.co.kr/news/photo/202601/53565_72372_531.jpg', url: 'https://www.newsroad.co.kr/news/articleView.html?idxno=53565' },
        { category: 'プレスリリース', title: "Follow Korea、シーズン2 K-ビューティー医療ツーリズムグローバルプロジェクト開催", date: '2025.11.13', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6bfafba46f880.jpg', url: 'https://star.mbn.co.kr/entertain/11467451?refer=portal' },
        { category: 'プレスリリース', title: 'Follow Korea、100万フォロワーのインフルエンサーとK-ビューティー医療ツアーの新市場を開拓', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' },
        { category: 'プレスリリース', title: 'Follow Korea・GCNC、国内企業の海外進出支援強化のため戦略的業務協約を締結', date: '2025.11.19', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ff65c4d98d8d0.png', url: 'https://www.enetnews.co.kr/news/articleView.html?idxno=44232' }
      ]
    },
    ID: {
      badge: 'Media Center',
      title: 'Berita Follow Korea',
      sub: 'Berbagi momen inovasi dan perubahan di pasar medis global.',
      back: 'Kembali ke Halaman Utama',
      items: [
        { category: 'Siaran Pers', title: 'Follow Korea Memimpin Era Baru Konvergensi Wisata Medis Global dan Konten-K', date: '2026.01.30', img: 'https://cdn.newsroad.co.kr/news/photo/202601/53565_72372_531.jpg', url: 'https://www.newsroad.co.kr/news/articleView.html?idxno=53565' },
        { category: 'Siaran Pers', title: "Follow Korea Gelar Proyek Global Wisata Medis K-Beauty Musim 2", date: '2025.11.13', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6bfafba46f880.jpg', url: 'https://star.mbn.co.kr/entertain/11467451?refer=portal' },
        { category: 'Siaran Pers', title: 'Follow Korea Membuka Pasar Baru Wisata Medis K-Beauty dengan Influencer 1 Juta Pengikut', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' },
        { category: 'Siaran Pers', title: 'Follow Korea-GCNC Tandatangani Perjanjian Strategis untuk Dukung Ekspansi Global', date: '2025.11.19', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ff65c4d98d8d0.png', url: 'https://www.enetnews.co.kr/news/articleView.html?idxno=44232' }
      ]
    },
    AR: {
      badge: 'Media Center',
      title: 'أخبار Follow Korea',
      sub: 'نشارك لحظات الابتكار والتغيير في سوق الرعاية الطبية العالمي.',
      back: 'العودة إلى الصفحة الرئيسية',
      items: [
        { category: 'بيان صحفي', title: 'Follow Korea تقود آفاقاً جديدة في دمج السياحة العلاجية العالمية والمحتوى الكوري', date: '2026.01.30', img: 'https://cdn.newsroad.co.kr/news/photo/202601/53565_72372_531.jpg', url: 'https://www.newsroad.co.kr/news/articleView.html?idxno=53565' },
        { category: 'بيان صحفي', title: "Follow Korea تطلق المشروع العالمي للسياحة العلاجية للجمال الكوري الموسم الثاني", date: '2025.11.13', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6bfafba46f880.jpg', url: 'https://star.mbn.co.kr/entertain/11467451?refer=portal' },
        { category: 'بيان صحفي', title: 'Follow Korea تفتح أسواقاً جديدة للسياحة العلاجية بالتعاون مع مؤثرين لديهم مليون متابع', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' },
        { category: 'بيان صحفي', title: 'Follow Korea و GCNC توقعان اتفاقية استراتيجية لدعم التوسع العالمي للشركات المحلية', date: '2025.11.19', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ff65c4d98d8d0.png', url: 'https://www.enetnews.co.kr/news/articleView.html?idxno=44232' }
      ]
    },
    KH: {
      badge: 'Media Center',
      title: 'ព័ត៌មាន Follow Korea',
      sub: 'ចែករំលែកនូវពេលវេលានៃការច្នៃប្រឌិត និងការផ្លាស់ប្តូរនៅក្នុងទីផ្សារវេជ្ជសាស្ត្រសកល។',
      back: 'ត្រឡប់ទៅទំព័រដើម',
      items: [
        { category: 'សេចក្តីប្រកាសព័ត៌មាន', title: 'Follow Korea នាំមុខសម័យកាលថ្មីនៃការរួមបញ្ចូលទេសចរណ៍វេជ្ជសាស្ត្រសកល និងមាតិកា K', date: '2026.01.30', img: 'https://cdn.newsroad.co.kr/news/photo/202601/53565_72372_531.jpg', url: 'https://www.newsroad.co.kr/news/articleView.html?idxno=53565' },
        { category: 'សេចក្តីប្រកាសព័ត៌មាន', title: "Follow Korea រៀបចំគម្រោងសកល រដូវកាលទី2 ទេសចរណ៍វេជ្ជសាស្ត្រ K-Beauty", date: '2025.11.13', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6bfafba46f880.jpg', url: 'https://star.mbn.co.kr/entertain/11467451?refer=portal' },
        { category: 'សេចក្តីប្រកាសព័ត៌មាន', title: 'Follow Korea បើកទីផ្សារថ្មីសម្រាប់ទេសចរណ៍វេជ្ជសាស្ត្រ K-Beauty ជាមួយអ្នកមានឥទ្ធិពល 1 លាននាក់', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' },
        { category: 'សេចក្តីប្រកាសព័ត៌មាន', title: 'Follow Korea និង GCNC ចុះហត្ថលេខាលើកិច្ចព្រមព្រៀងយុទ្ធសាស្ត្រ ដើម្បីគាំទ្រការពង្រីកសកល', date: '2025.11.19', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ff65c4d98d8d0.png', url: 'https://www.enetnews.co.kr/news/articleView.html?idxno=44232' }
      ]
    },
    VI: {
      badge: 'Media Center',
      title: 'Tin tức Follow Korea',
      sub: 'Chia sẻ những khoảnh khắc đổi mới và thay đổi trong thị trường y tế toàn cầu.',
      back: 'Về trang chính',
      items: [
        { category: 'Thông cáo báo chí', title: 'Follow Korea dẫn đầu kỷ nguyên mới hội tụ Du lịch Y tế toàn cầu và Nội dung K', date: '2026.01.30', img: 'https://cdn.newsroad.co.kr/news/photo/202601/53565_72372_531.jpg', url: 'https://www.newsroad.co.kr/news/articleView.html?idxno=53565' },
        { category: 'Thông cáo báo chí', title: "Follow Korea tổ chức dự án toàn cầu Du lịch Y tế K-Beauty mùa 2", date: '2025.11.13', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6bfafba46f880.jpg', url: 'https://star.mbn.co.kr/entertain/11467451?refer=portal' },
        { category: 'Thông cáo báo chí', title: 'Follow Korea mở thị trường mới cho Du lịch Y tế K-Beauty với Influencer 1 triệu người theo dõi', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' },
        { category: 'Thông cáo báo chí', title: 'Follow Korea-GCNC ký kết thỏa thuận chiến lược hỗ trợ mở rộng ra toàn cầu', date: '2025.11.19', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ff65c4d98d8d0.png', url: 'https://www.enetnews.co.kr/news/articleView.html?idxno=44232' }
      ]
    },
    RU: {
      badge: 'Media Center',
      title: 'Новости Follow Korea',
      sub: 'Делимся моментами инноваций и изменений на мировом рынке медицины.',
      back: 'Вернуться на главную',
      items: [
        { category: 'Пресс-релиз', title: 'Follow Korea открывает новую эру слияния мирового медицинского туризма и K-контента', date: '2026.01.30', img: 'https://cdn.newsroad.co.kr/news/photo/202601/53565_72372_531.jpg', url: 'https://www.newsroad.co.kr/news/articleView.html?idxno=53565' },
        { category: 'Пресс-релиз', title: "Follow Korea проводит глобальный проект медицинского туризма K-Beauty Сезон 2", date: '2025.11.13', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6bfafba46f880.jpg', url: 'https://star.mbn.co.kr/entertain/11467451?refer=portal' },
        { category: 'Пресс-релиз', title: 'Follow Korea открывает новые рынки медтуризма K-Beauty с блогерами-миллионниками', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' },
        { category: 'Пресс-релиз', title: 'Follow Korea и GCNC подписали стратегическое соглашение для поддержки глобальной экспансии', date: '2025.11.19', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ff65c4d98d8d0.png', url: 'https://www.enetnews.co.kr/news/articleView.html?idxno=44232' }
      ]
    }
  }[lang];

  return (
    <div className="bg-white min-h-screen pt-32 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-20 md:mb-32 flex flex-col items-center text-center">
          <span className="text-[#5a82c2] font-black text-xs md:text-sm tracking-[0.4em] uppercase mb-6 block animate-in slide-in-from-bottom-2 duration-700">{t.badge}</span>
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tight leading-[1.2] animate-in slide-in-from-bottom-4 duration-700 delay-100">{t.title}</h1>
          <p className="text-gray-400 mt-8 text-lg md:text-2xl max-w-2xl font-medium animate-in slide-in-from-bottom-6 duration-700 delay-200">{t.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {t.items.map((news, idx) => (
            <div 
              key={idx} 
              className="group animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${300 + idx * 100}ms` }}
            >
              <a href={news.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm border border-gray-50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#5a82c2]/10 group-hover:-translate-y-2">
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
                    <span className="text-[11px] font-black text-[#5a82c2] uppercase tracking-widest">{news.category}</span>
                  </div>
                </div>
                <div className="px-2">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#5a82c2] transition-colors line-clamp-2">{news.title}</h4>
                  <div className="flex items-center justify-between text-gray-400 font-bold text-sm">
                    <span>{news.date}</span>
                    <span className="iconify text-xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" data-icon="solar:arrow-right-linear"></span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-40 text-center">
          <button onClick={onClose} className="inline-flex items-center gap-4 text-gray-400 hover:text-[#5a82c2] font-black tracking-widest uppercase transition-all group">
            <span className="iconify text-3xl group-hover:-translate-x-3 transition-transform" data-icon="solar:alt-arrow-left-linear"></span>
            <span className="text-sm md:text-lg">{t.back}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
