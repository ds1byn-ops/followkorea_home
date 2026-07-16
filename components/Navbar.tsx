
import React, { useState, useRef, useEffect } from 'react';
import { LanguageCode } from '../App';

interface NavbarProps {
  opacity: number;
  onOpenConsult: () => void;
  onOpenNews: () => void;
  onOpenReviews: () => void;
  onScrollToAbout: () => void;
  onScrollToBusiness: () => void;
  isNewsActive?: boolean;
  isReviewsActive?: boolean;
  isSubPage?: boolean;
  onBackToHome?: () => void;
  currentLang: LanguageCode;
  onLangChange: (lang: LanguageCode) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  opacity, 
  onOpenConsult, 
  onOpenNews, 
  onOpenReviews,
  onScrollToAbout,
  onScrollToBusiness,
  isNewsActive,
  isReviewsActive,
  isSubPage, 
  onBackToHome,
  currentLang,
  onLangChange
}) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const languages: { code: LanguageCode; label: string }[] = [
    { code: 'KR', label: '한국어' },
    { code: 'EN', label: 'English' },
    { code: 'CN', label: '中文(简体)' },
    { code: 'JP', label: '日本語' },
    { code: 'ID', label: 'Indonesia' },
    { code: 'AR', label: 'العربية' },
    { code: 'KH', label: 'ភាសាខ្មែរ' },
    { code: 'VI', label: 'Tiếng Việt' },
    { code: 'RU', label: 'Русский' },
  ];

  const labels = {
    KR: { about: 'ABOUT US', business: 'BUSINESS', news: 'NEWS', contact: 'CONTACT US', consult: '상담 신청' },
    EN: { about: 'ABOUT US', business: 'BUSINESS', news: 'NEWS', contact: 'CONTACT US', consult: 'Consultation' },
    CN: { about: '关于我们', business: '业务领域', news: '新闻动态', contact: '联系我们', consult: '申请咨询' },
    JP: { about: '会社紹介', business: '事業内容', news: 'ニュース', contact: 'お問い合わせ', consult: '相談申込' },
    ID: { about: 'TENTANG KAMI', business: 'BISNIS', news: 'BERITA', contact: 'KONTAK', consult: 'Konsultasi' },
    AR: { about: 'من نحن', business: 'أعمالنا', news: 'الأخبار', contact: 'اتصل بنا', consult: 'طلب استشارة' },
    KH: { about: 'អំពីយើង', business: 'អាជីវកម្ម', news: 'ព័ត៌មាន', contact: 'ទំនាក់ទំនង', consult: 'ស្នើសុំពិគ្រោះ' },
    VI: { about: 'GIỚI THIỆU', business: 'DỊCH VỤ', news: 'TIN TỨC', contact: 'LIÊN HỆ', consult: 'Tư vấn' },
    RU: { about: 'О НАС', business: 'УСЛУГИ', news: 'НОВОСТИ', contact: 'КОНТАКТЫ', consult: 'Консультация' }
  }[currentLang];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-[70] transition-all duration-500 px-4 md:px-12 py-3 md:py-4 flex items-center justify-between"
      style={{ 
        opacity,
        transform: isSubPage ? 'none' : `translateY(${(1 - opacity) * -20}px)`,
        backgroundColor: `rgba(255, 255, 255, ${opacity * 0.98})`,
        backdropFilter: `blur(${opacity * 15}px)`,
        borderBottom: `1px solid rgba(90, 130, 194, ${opacity * 0.08})`,
        visibility: opacity <= 0 && !isSubPage ? 'hidden' : 'visible'
      }}
    >
      <div className="flex items-center gap-2 md:gap-3">
        <button onClick={onBackToHome} className="flex items-center group">
          <img 
            src="https://cdn.imweb.me/upload/S20260120a0cc4980014ac/944293da5fc36.png" 
            alt="Follow Korea Logo" 
            className="h-6 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </button>
      </div>

      <div className="hidden lg:flex items-center gap-12 text-[13px] tracking-[0.15em] font-bold text-gray-700">
        <button onClick={onScrollToAbout} className="hover:text-[#5a82c2] transition-colors relative group uppercase">
          {labels.about}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5a82c2] transition-all group-hover:w-full"></span>
        </button>
        <button onClick={onScrollToBusiness} className="hover:text-[#5a82c2] transition-colors relative group uppercase">
          {labels.business}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5a82c2] transition-all group-hover:w-full"></span>
        </button>
        <button onClick={onOpenNews} className={`hover:text-[#5a82c2] transition-colors relative group uppercase ${isNewsActive ? 'text-[#5a82c2]' : ''}`}>
          {labels.news}
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#5a82c2] transition-all ${isNewsActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </button>
        <button onClick={onOpenConsult} className="hover:text-[#5a82c2] transition-colors relative group uppercase">
          {labels.contact}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5a82c2] transition-all group-hover:w-full"></span>
        </button>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative" ref={langRef}>
          <button 
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-1.5 md:gap-2 text-gray-500 font-bold text-[14px] hover:text-[#5a82c2] transition-all bg-gray-50 px-3 md:px-4 py-2.5 rounded-lg border border-gray-100 active:scale-95"
          >
            <span className="iconify text-lg text-[#5a82c2]" data-icon="solar:global-linear"></span>
            <span>{currentLang}</span>
            <span className={`iconify transition-transform duration-300 ${isLangOpen ? 'rotate-180' : '0'}`} data-icon="solar:alt-arrow-down-linear"></span>
          </button>

          {isLangOpen && (
            <div className="absolute top-full right-0 mt-2 w-32 md:w-36 bg-white rounded-xl shadow-2xl border border-[#5a82c2]/10 py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLangChange(lang.code);
                    setIsLangOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-[14px] font-bold transition-colors flex items-center justify-between ${
                    currentLang === lang.code ? 'text-[#5a82c2] bg-[#5a82c2]/10' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {lang.label}
                  {currentLang === lang.code && <span className="iconify" data-icon="solar:check-read-linear"></span>}
                </button>
              ))}
            </div>
          )}
        </div>

        <button 
          onClick={onOpenConsult}
          className="bg-[#5a82c2] text-white px-4 md:px-8 py-2.5 md:py-3.5 rounded-full text-[11px] md:text-sm font-bold hover:bg-[#4a6da3] transition-all shadow-xl shadow-[#5a82c2]/20 flex items-center gap-1.5 md:gap-2 active:scale-95 whitespace-nowrap"
        >
          <span>{labels.consult}</span>
          <span className="iconify text-xs md:text-sm" data-icon="solar:arrow-right-up-linear"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
