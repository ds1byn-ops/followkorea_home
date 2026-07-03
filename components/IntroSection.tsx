
import React, { useEffect, useState } from 'react';
import { LanguageCode } from '../App';

interface IntroSectionProps {
  onAnimationComplete: () => void;
  lang: LanguageCode;
}

const IntroSection: React.FC<IntroSectionProps> = ({ onAnimationComplete, lang }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(onAnimationComplete, 2200);
    }, 300);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  const t = {
    KR: {
      line1: 'Connecting Global Patients to',
      line2: 'Korean Medical Care',
      scroll: 'Scroll Down'
    },
    EN: {
      line1: 'Connecting Global Patients to',
      line2: 'Korean Medical Care',
      scroll: 'Scroll Down'
    },
    CN: {
      line1: '连接全球患者',
      line2: '与韩国顶尖医疗',
      scroll: '向下滑动'
    }
  }[lang];

  return (
    <section className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-[#000]">
      {/* Background WebGL / Spline */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="relative w-full h-full scale-[1.05]">
          <iframe 
            src='https://my.spline.design/claritystream-aE0ubZF66AKtNGC2sqgJ04b2/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            style={{ pointerEvents: 'none', border: 'none', opacity: 0.8 }}
            title="Follow Korea 3D Background"
          ></iframe>
          
          <div className="absolute bottom-0 right-0 w-48 h-16 bg-[#000] z-20"></div>
          <div className="absolute bottom-0 left-0 w-full h-6 bg-[#000] z-20"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl">
        <div 
          className={`transition-all duration-[2000ms] cubic-bezier(0.16, 1, 0.3, 1) ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h1 
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.2] select-none text-[#f5f5f5]"
            style={{ 
              fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
              textShadow: '0 20px 80px rgba(0,0,0,0.4)'
            }}
          >
            {t.line1} <br />
            {t.line2}
          </h1>
        </div>
        
        <div 
          className={`mt-32 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col items-center gap-8">
            <span className="text-white text-[11px] font-bold tracking-[0.8em] uppercase opacity-40">{t.scroll}</span>
            <div className="relative w-[1px] h-24">
               <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent"></div>
               <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-line"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none z-5"></div>
      
      <style>{`
        @keyframes scroll-line {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        .animate-scroll-line {
          animation: scroll-line 2.5s cubic-bezier(0.19, 1, 0.22, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default IntroSection;
