
import React, { useState, useEffect } from 'react';
import IntroSection from './components/IntroSection';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import ConsultationModal from './components/ConsultationModal';
import NewsList from './components/NewsList';
import ReviewList from './components/ReviewList';
import TermsOverlay from './components/TermsOverlay';
import PrivacyOverlay from './components/PrivacyOverlay';

export type LanguageCode = 'KR' | 'EN' | 'CN';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [canScroll, setCanScroll] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<LanguageCode>('EN');

  useEffect(() => {
    const handleScroll = () => {
      if (!isNewsOpen && !isReviewsOpen && !isTermsOpen && !isPrivacyOpen) {
        setScrollY(window.scrollY);
      }
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isNewsOpen, isReviewsOpen, isTermsOpen, isPrivacyOpen]);

  useEffect(() => {
    const isAnyOverlayOpen = isNewsOpen || isReviewsOpen || isTermsOpen || isPrivacyOpen;
    if (!canScroll || isAnyOverlayOpen) {
      document.body.style.overflow = 'hidden';
      if (!isAnyOverlayOpen) window.scrollTo(0, 0);
    } else {
      if (!isConsultOpen) {
        document.body.style.overflow = 'auto';
      }
    }
  }, [canScroll, isConsultOpen, isNewsOpen, isReviewsOpen, isTermsOpen, isPrivacyOpen]);

  const transitionProgress = Math.min(scrollY / (windowHeight * 0.8 || 1), 1);
  const introOpacity = 1 - transitionProgress;
  const contentOpacity = transitionProgress;
  const introScale = 1 + transitionProgress * 0.1;

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
  }

  const handleOpenPrivacy = () => {
    setIsPrivacyOpen(true);
    setIsTermsOpen(false);
    setIsNewsOpen(false);
    setIsReviewsOpen(false);
    window.scrollTo(0, 0);
  }

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

  return (
    <div className={`relative bg-[#000] ${(isNewsOpen || isReviewsOpen || isTermsOpen || isPrivacyOpen) ? 'h-screen overflow-hidden' : 'min-h-[200vh]'}`}>
      <Navbar 
        opacity={(isNewsOpen || isReviewsOpen || isTermsOpen || isPrivacyOpen) ? 1 : contentOpacity} 
        onOpenConsult={openConsultation} 
        onOpenNews={handleOpenNews}
        onOpenReviews={handleOpenReviews}
        onScrollToAbout={scrollToAbout}
        isNewsActive={isNewsOpen}
        isReviewsActive={isReviewsOpen}
        isSubPage={isNewsOpen || isReviewsOpen || isTermsOpen || isPrivacyOpen}
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

      {/* Fixed Intro Section with Spline 3D */}
      {!(isNewsOpen || isReviewsOpen || isTermsOpen || isPrivacyOpen) && (
        <div 
          className="fixed inset-0 z-0 transition-all duration-300 ease-out pointer-events-none"
          style={{ 
            opacity: introOpacity,
            transform: `scale(${introScale})`,
            visibility: introOpacity <= 0 ? 'hidden' : 'visible'
          }}
        >
          <IntroSection lang={currentLang} onAnimationComplete={() => setCanScroll(true)} />
        </div>
      )}

      {/* Main Content that pushes up from the bottom */}
      {!(isNewsOpen || isReviewsOpen || isTermsOpen || isPrivacyOpen) && (
        <div 
          className="relative z-10 w-full bg-white"
          style={{ marginTop: '100vh' }}
        >
          <div 
            className="transition-opacity duration-1000 ease-in-out"
            style={{ opacity: contentOpacity }}
          >
            <MainContent 
              lang={currentLang}
              onOpenConsult={openConsultation} 
              onOpenNews={handleOpenNews} 
              onOpenReviews={handleOpenReviews}
              onOpenTerms={handleOpenTerms}
              onOpenPrivacy={handleOpenPrivacy}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
