
import React, { useState, useEffect } from 'react';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import ConsultationModal from './components/ConsultationModal';
import NewsList from './components/NewsList';
import ReviewList from './components/ReviewList';
import TermsOverlay from './components/TermsOverlay';
import PrivacyOverlay from './components/PrivacyOverlay';

export type LanguageCode = 'KR' | 'EN' | 'CN' | 'JP' | 'ID' | 'AR' | 'KH' | 'VI' | 'RU';

const App: React.FC = () => {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<LanguageCode>('KR');
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const htmlLangMap: Record<LanguageCode, string> = {
      KR: 'ko', EN: 'en', CN: 'zh', JP: 'ja', ID: 'id', AR: 'ar', KH: 'km', VI: 'vi', RU: 'ru'
    };
    document.documentElement.lang = htmlLangMap[currentLang];
    document.documentElement.dir = currentLang === 'AR' ? 'rtl' : 'ltr';
  }, [currentLang]);

  const isAnyOverlayOpen = isNewsOpen || isReviewsOpen || isTermsOpen || isPrivacyOpen;

  // 스크롤 내리면 '맨 위로' 버튼 노출
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 오버레이(뉴스/약관 등)가 열렸을 때만 배경 스크롤 잠금
  useEffect(() => {
    if (!isConsultOpen) {
      document.body.style.overflow = isAnyOverlayOpen ? 'hidden' : 'auto';
    }
  }, [isAnyOverlayOpen, isConsultOpen]);

  const openConsultation = () => setIsConsultOpen(true);

  const handleOpenNews = () => {
    setIsNewsOpen(true);
    setIsReviewsOpen(false);
    setIsTermsOpen(false);
    setIsPrivacyOpen(false);
    window.scrollTo(0, 0);
  };

  const handleOpenReviews = () => {
    setIsReviewsOpen(true);
    setIsNewsOpen(false);
    setIsTermsOpen(false);
    setIsPrivacyOpen(false);
    window.scrollTo(0, 0);
  };

  const handleOpenTerms = () => {
    setIsTermsOpen(true);
    setIsNewsOpen(false);
    setIsReviewsOpen(false);
    setIsPrivacyOpen(false);
    window.scrollTo(0, 0);
  };

  const handleOpenPrivacy = () => {
    setIsPrivacyOpen(true);
    setIsTermsOpen(false);
    setIsNewsOpen(false);
    setIsReviewsOpen(false);
    window.scrollTo(0, 0);
  };

  const handleCloseAllOverlays = () => {
    setIsNewsOpen(false);
    setIsReviewsOpen(false);
    setIsTermsOpen(false);
    setIsPrivacyOpen(false);
  };

  const scrollToAbout = () => {
    handleCloseAllOverlays();
    setTimeout(() => {
      const element = document.getElementById('about-us');
      if (element) {
        const top = element.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 100);
  };

  const scrollToBusiness = () => {
    handleCloseAllOverlays();
    setTimeout(() => {
      const element = document.getElementById('business');
      if (element) {
        const top = element.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className={`relative bg-white ${isAnyOverlayOpen ? 'h-screen overflow-hidden' : ''}`}>
      <Navbar
        opacity={1}
        onOpenConsult={openConsultation}
        onOpenNews={handleOpenNews}
        onOpenReviews={handleOpenReviews}
        onScrollToAbout={scrollToAbout}
        onScrollToBusiness={scrollToBusiness}
        isNewsActive={isNewsOpen}
        isReviewsActive={isReviewsOpen}
        isSubPage={isAnyOverlayOpen}
        onBackToHome={handleCloseAllOverlays}
        currentLang={currentLang}
        onLangChange={setCurrentLang}
      />

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        lang={currentLang}
      />

      {/* Overlays */}
      {isNewsOpen && (
        <div className="fixed inset-0 z-[60] bg-white overflow-y-auto animate-in fade-in duration-500">
          <NewsList onClose={handleCloseAllOverlays} lang={currentLang} />
        </div>
      )}

      {isReviewsOpen && (
        <div className="fixed inset-0 z-[60] bg-white overflow-y-auto animate-in fade-in duration-500">
          <ReviewList onClose={handleCloseAllOverlays} lang={currentLang} />
        </div>
      )}

      {isTermsOpen && (
        <div className="fixed inset-0 z-[60] bg-white overflow-y-auto">
          <TermsOverlay onClose={handleCloseAllOverlays} lang={currentLang} />
        </div>
      )}

      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[60] bg-white overflow-y-auto">
          <PrivacyOverlay onClose={handleCloseAllOverlays} lang={currentLang} />
        </div>
      )}

      {/* Main content — Vimeo 히어로가 최상단 (Spline 인트로 제거됨) */}
      {!isAnyOverlayOpen && (
        <MainContent
          lang={currentLang}
          onOpenConsult={openConsultation}
          onOpenNews={handleOpenNews}
          onOpenReviews={handleOpenReviews}
          onOpenTerms={handleOpenTerms}
          onOpenPrivacy={handleOpenPrivacy}
        />
      )}

      {/* 맨 위로 (Back to top) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="맨 위로"
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[80] w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#5a82c2] text-white shadow-2xl shadow-[#5a82c2]/30 flex items-center justify-center hover:bg-[#4a6da3] active:scale-95 transition-all duration-300 ${showTop && !isAnyOverlayOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <span className="iconify text-2xl md:text-3xl" data-icon="solar:alt-arrow-up-linear"></span>
      </button>
    </div>
  );
};

export default App;
