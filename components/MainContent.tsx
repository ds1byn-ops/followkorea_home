
import React, { useState, useEffect, useRef } from 'react';
import { LanguageCode } from '../App';

interface MainContentProps {
  onOpenConsult: () => void;
  onOpenNews?: () => void;
  onOpenReviews?: () => void;
  onOpenTerms?: () => void;
  onOpenPrivacy?: () => void;
  lang: LanguageCode;
}

// 스크롤 시 나타나는 애니메이션 컴포넌트
const Reveal: React.FC<{ children: React.ReactNode; width?: "fit-content" | "100%"; delay?: number }> = ({ children, width = "100%", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ 
        width, 
        position: 'relative', 
        overflow: 'visible',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(40px)',
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
      }}
    >
      {children}
    </div>
  );
};

const CountUp: React.FC<{ end: number; duration?: number; decimals?: number }> = ({ end, duration = 2000, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={countRef}>{count.toFixed(decimals)}</span>;
};

const MainContent: React.FC<MainContentProps> = ({ onOpenConsult, onOpenNews, onOpenReviews, onOpenTerms, onOpenPrivacy, lang }) => {
  const partnerLogos = [
    "https://cdn.imweb.me/upload/S20260120a0cc4980014ac/4d2307186cc14.png",
    "https://cdn.imweb.me/upload/S20260120a0cc4980014ac/80f9a0d4bdcf6.png",
    "https://cdn.imweb.me/upload/S20260120a0cc4980014ac/b16993e4344b3.png",
    "https://cdn.imweb.me/upload/S20260120a0cc4980014ac/11c1d8a45e55b.png",
    "https://cdn.imweb.me/upload/S20260120a0cc4980014ac/3ee2201e9eacf.png",
    "https://cdn.imweb.me/upload/S20260120a0cc4980014ac/5cfd8a00a0194.png",
    "https://cdn.imweb.me/upload/S20260120a0cc4980014ac/d25d08ce0239f.png",
    "https://cdn.imweb.me/upload/S20260120a0cc4980014ac/0445550657f9d.png",
    "https://cdn.imweb.me/upload/S20260120a0cc4980014ac/377ec83cf600a.png",
    "https://cdn.imweb.me/upload/S20260120a0cc4980014ac/7542baab73553.png",
    "https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6c7d5a7e1e2f5.png",
    "https://cdn.imweb.me/upload/S20260120a0cc4980014ac/4f9f49855b2da.png",
    "https://cdn.imweb.me/upload/S20260120a0cc4980014ac/a00c120b8650b.png",
    "https://cdn.imweb.me/upload/S20260120a0cc4980014ac/b717106fec9d5.png",
    "https://cdn.imweb.me/upload/S20260120a0cc4980014ac/b1694d49f34c6.png",


  ];

  const t = {
    KR: {
      heroBadge: 'With Follow Korea',
      heroTitle: '글로벌 환자 유치를 위한\n병원 맞춤 메디컬 마케팅',
      consultBtn: '1:1 무료 상담',
      partnerTitle: '최고의 파트너와 함께합니다',
      programTitle: '경험으로 만드는,\n팔로우코리아의 글로벌 마케팅',
      programSub: 'Our Medical Tour Program',
      p1Title: '글로벌 인플루언서 초청', p1Desc: '해외 유명 인플루언서와의 협업을 통해 한국 의료의 우수성을 전 세계에 알리고 생생한 체험 콘텐츠를 제작합니다.',
      p2Title: '병원·클리닉 의료 체험', p2Desc: '환자가 직접 한국의 선진 의료 시스템을 경험할 수 있는 최적의 투어 경로와 맞춤형 진료 프로세스를 제공합니다.',
      p3Title: '시술·검진·상담 콘텐츠화', p3Desc: '전 과정을 고퀄리티 영상 및 매거진 콘텐츠로 제작하여 의료 서비스에 대한 신뢰도와 접근성을 극대화합니다.',
      p4Title: '글로벌 잠재 환자 유입 유도', p4Desc: '디지털 마케팅과 데이터 분석을 기반으로 한국 의료를 필요로 하는 글로벌 환자들을 타겟팅하여 유입을 극대화합니다.',
      stat1: '고객 유지율', stat1Desc: '재참여로 증명된 파트너 만족도',
      stat2: '글로벌 환자수', stat2Desc: '의료관광 외국인 매년 증가', stat2Unit: '만 명', stat2Sub: '2009~2023 기준',
      stat3: '파트너 네트워크', stat3Desc: '한국 최고의 상급 종합병원들이 협력 파트너로 함께하고 있습니다.',
      whyTitle: '팔로우코리아의 핵심 마케팅 전략',
      w1: '신뢰를 만드는 홍보', w1Desc: '광고가 아닌 실제 체험을 기반으로 의료 서비스에 대한 신뢰를 구축합니다.',
      w2: '글로벌 환자 중심', w2Desc: '입국부터 이동, 전담 통역 지원까지 오직 치료에만 전념할 수 있는 환경을 조성합니다.',
      w3: '체계적인 운영 시스템', w3Desc: '맞춤형 의료 커뮤니케이션으로 명확한 프로세스를 구축합니다.',
      socialTitle: '함께하는 즐거움,\n생생한 현장 이야기',
      newsTitle: '뉴스 및 공지사항', newsMore: '전체 뉴스 보기',
      newsItems: [
        { category: '보도자료',  title: '팔로우코리아, 글로벌 의료관광과 K-콘텐츠 융합의 신세계로', date: '2026.01.30', img: 'https://cdn.newsroad.co.kr/news/photo/202601/53565_72372_531.jpg' , url: 'https://www.newsroad.co.kr/news/articleView.html?idxno=53565'},
        { category: '보도자료', title: '100만 팔로우 왕홍이 영업사원이 되는 순간…팔로우코리아, K-뷰티 메디투어의 新시장 열린다', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' },
        { category: '보도자료', title: '에스에이컴퍼니-GCNC, 국내기업 해외진출 지원 강화 위한 전략적 업무협약 체결', date: '2025.11.19', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ff65c4d98d8d0.png', url: 'https://www.enetnews.co.kr/news/articleView.html?idxno=44232' }
      ],
      ctaTitle: '지금, 글로벌 환자 유치를\n시작해보세요.', ctaBtn: '지금 바로 문의하기',
      footerAddr: '주소: 서울특별시 강남구 테헤란로 441, 5층 S13호 / 13층(삼성동, 송암빌딩 III)',
      footerBiz: '사업자등록번호: 696-86-03627',
      footerCopy: 'Copyright ⓒ 2026 팔로우코리아 All rights reserved.',
      privacy: '개인정보처리방침', terms: '이용약관'
    },
    EN: {
      heroBadge: 'With Follow Korea',
      heroTitle: 'Tailored Medical Marketing\nfor Global Patient Attraction',
      consultBtn: '1:1 Free Consultation',
      partnerTitle: 'Collaborating with Premier Partners',
      programTitle: 'Creating Experiences,\nFollow Korea Global Marketing',
      programSub: 'Our Medical Tour Program',
      p1Title: 'Influencer Invitation', p1Desc: 'Collaborating with global influencers to showcase Korean medical excellence and create vivid experience contents.',
      p2Title: 'Clinical Experience', p2Desc: 'Providing optimal tour routes and customized treatment processes for patients to experience advanced Korean medical systems.',
      p3Title: 'Service Content Creation', p3Desc: 'Producing high-quality videos and magazines to maximize accessibility and trust in medical services.',
      p4Title: 'Potential Patient Inflow', p4Desc: 'Targeting global patients in need of Korean medicine through digital marketing and data analysis.',
      stat1: 'Retention Rate', stat1Desc: 'Partner satisfaction proven by re-participation',
      stat2: 'Global Patients', stat2Desc: 'Annual increase in medical tourists', stat2Unit: 'M  i  l  l  i  o  n', stat2Sub: 'Base 2009~2023',
      stat3: 'Partner Network', stat3Desc: 'Korea\'s top general hospitals are working with us as strategic partners.',
      whyTitle: 'Core Marketing Strategy of Follow Korea',
      w1: 'Promotion Built on Trust', w1Desc: 'Building trust in medical services based on real experiences, not just advertisements.',
      w2: 'Patient-Centered Care', w2Desc: 'Environment focused on treatment, from entry to transportation and dedicated interpretation support.',
      w3: 'Systematic Operations', w3Desc: 'Establishing clear processes through customized medical communication.',
      socialTitle: 'Joy of Togetherness,\nVivid Field Stories',
      newsTitle: 'News & Announcements', newsMore: 'View All News',
      newsItems: [
        { category: 'Press', title: 'Follow Korea Leads a New Frontier in Global Medical Tourism–K-Content Convergence', date: '2026.01.30', img: 'https://cdn.newsroad.co.kr/news/photo/202601/53565_72372_531.jpg', url: 'https://www.newsroad.co.kr/news/articleView.html?idxno=53565' },
        { category: 'Press', title: "SA Company Hosts 'Follow Korea' Season 2 K-Beauty Medical Tourism Global Project", date: '2025.11.13', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6bfafba46f880.jpg', url: 'https://star.mbn.co.kr/entertain/11467451?refer=portal' },
        { category: 'Press', title: 'Follow Korea Opens New Markets for K-Beauty Meditours with 1M-Follower Influencers', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' }
      ],
      ctaTitle: 'Start Attracting\nGlobal Patients Now.', ctaBtn: 'Inquire Now',
      footerAddr: 'Address: 5F S13 / 13F Songam Bldg III, 441 Teheran-ro, Gangnam-gu, Seoul, Korea',
      footerBiz: 'Business Registration Number: 696-86-03627',
      footerCopy: 'Copyright ⓒ 2026 Follow Korea All rights reserved.',
      privacy: 'Privacy Policy', terms: 'Terms of Use'
    },
    CN: {
      heroBadge: 'With Follow Korea',
      heroTitle: '为医院制定专属医疗营销方案\n旨在吸引全球范围的赴韩患者',
      consultBtn: '1:1 免费咨询',
      partnerTitle: '与顶级合作伙伴同行',
      programTitle: '用经验创造价值\nFollow Korea 全球营销',
      programSub: '我们的医疗旅游项目',
      p1Title: '全球网红邀请', p1Desc: '通过与海外知名网红的合作，向全球传播韩国医疗的卓越实力，并制作真实生动的体验型内容。',
      p2Title: '医院 · 诊所医疗体验', p2Desc: '为患者量身打造亲身体验韩国先进医疗体系的最佳医疗行程与个性化诊疗流程。',
      p3Title: '诊疗咨询内容化', p3Desc: '将全过程制作成高品质影像及杂志内容，最大化提升医疗服务的信任度与可及性。',
      p4Title: '引导潜在患者流入', p4Desc: '基于数字营销与数据分析，精准锁定有韩国医疗需求的全球患者，最大化提升引流效果。',
      stat1: '客户保留率', stat1Desc: '通过再次合作验证的合作伙伴满意度',
      stat2: '全球患者数', stat2Desc: '医疗观光外国人每年持续增加', stat2Unit: '万人', stat2Sub: '2009~2023 统计',
      stat3: '合作伙伴网络', stat3Desc: '韩国顶级上级综合医院作为合作伙伴共同参与。',
      whyTitle: 'Follow Korea 的核心营销战略',
      w1: '建立信任的宣传', w1Desc: '基于真实体验而非单纯广告，建立对医疗服务的深厚信任。',
      w2: '以全球患者为中心', w2Desc: '从入境到移动，提供专属翻译支援，营造全神贯注于治疗的环境。',
      w3: '系统化的运营体系', w3Desc: '通过定制化医疗沟通建立清晰的服务流程。',
      socialTitle: '共聚的快乐\n生动的现场故事',
      newsTitle: '新闻动态', newsMore: '查看全部',
      newsItems: [
         { category: '新闻', title: '‘Follow Korea’开启全球医疗旅游与K-内容融合的新篇章', date: '2026.01.30', img: 'https://cdn.newsroad.co.kr/news/photo/202601/53565_72372_531.jpg', url: 'https://www.newsroad.co.kr/news/articleView.html?idxno=53565' },
        { category: '新闻', title: "SA Company 举办 'Follow Korea' 第二季 K-Beauty 医疗旅游全球项目", date: '2025.11.13', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6bfafba46f880.jpg', url: 'https://star.mbn.co.kr/entertain/11467451?refer=portal' },
        { category: '新闻', title: '百万粉丝网红加盟... Follow Korea 开启 K-Beauty 医疗旅游新市场', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' }
      ],
      ctaTitle: '现在就开启\n全球患者引流之旅。', ctaBtn: '立即咨询',
      footerAddr: '地址：首尔特别市江南区德黑兰路441号，5层 S13室 / 13层（三成洞，松岩大厦 III）',
      footerBiz: '工商注册号: 696-86-03627',
      footerCopy: 'Copyright ⓒ 2026 Follow Korea 版权所有。',
      privacy: '隐私政策', terms: '使用条款'
    }
  }[lang];

  return (
    <main className="bg-white">
      {/* 01. Video Hero Section */}
      <section className="bg-white px-4 md:px-8 pt-4 md:pt-8 pb-4">
        <div className="relative h-[85vh] md:h-[90vh] w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <iframe
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 scale-125"
              src="https://player.vimeo.com/video/1157091335?autoplay=1&loop=1&background=1&muted=1&autopause=0"
              title="Follow Korea Hero Video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full mb-8 self-start shadow-2xl">
                <span className="w-2 h-2 bg-[#5a82c2] rounded-full animate-pulse"></span>
                <span className="text-[13px] font-bold tracking-widest uppercase text-white">{t.heroBadge}</span>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-[1.3] tracking-tight mb-12 drop-shadow-2xl whitespace-pre-line" style={{ color: '#F5F5F5' }}>
                {t.heroTitle}
              </h1>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-5">
                <button 
                  onClick={onOpenConsult}
                  className="bg-[#5a82c2] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold hover:bg-[#4a6da3] transition-all flex items-center gap-3 group shadow-2xl shadow-[#5a82c2]/20 active:scale-95 text-sm md:text-base"
                >
                  <span>{t.consultBtn}</span>
                  <span className="iconify text-lg md:text-xl group-hover:translate-x-1 transition-transform" data-icon="solar:alt-arrow-right-linear"></span>
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 02. Partner Logo Slide */}
      <section className="py-20 bg-white border-b border-gray-50 overflow-hidden">
        <Reveal>
          <div className="mb-10 text-center">
            <p className="text-gray-400 text-xs font-bold tracking-[0.3em] uppercase mb-2">Our Partner Network</p>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">{t.partnerTitle}</h3>
          </div>
        </Reveal>
        <div className="relative flex overflow-hidden group">
          <div className="flex space-x-20 animate-infinite-scroll group-hover:pause-animation py-4">
            {partnerLogos.map((url, i) => (
              <div key={`partner-${i}`} className="flex items-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer min-w-[180px] md:min-w-[220px] justify-center px-4">
                <img src={url} alt={`Partner ${i + 1}`} className="h-10 md:h-14 w-auto object-contain" />
              </div>
            ))}
            {partnerLogos.map((url, i) => (
              <div key={`partner-dup-${i}`} className="flex items-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer min-w-[180px] md:min-w-[220px] justify-center px-4">
                <img src={url} alt={`Partner ${i + 1}`} className="h-10 md:h-14 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Medical Program Section */}
      <section id="about-us" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#5a82c2] font-black text-sm tracking-[0.3em] uppercase mb-4 block">{t.programSub}</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.6] tracking-tight whitespace-pre-line">
                {t.programTitle}
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: t.p1Title, desc: t.p1Desc, pattern: <svg className="absolute bottom-4 right-4 w-48 h-48 opacity-40 group-hover:scale-105 transition-transform duration-700" viewBox="0 0 200 200"><defs><linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: '#5a82c2', stopOpacity: 0.5 }} /><stop offset="100%" style={{ stopColor: '#5a82c2', stopOpacity: 0.1 }} /></linearGradient></defs>{[...Array(22)].map((_, i) => (<line key={i} x1={40 + i * 6.8} y1="180" x2={40 + i * 1} y2="40" stroke="url(#lineGrad)" strokeWidth="0.8" />))}</svg> },
            { title: t.p2Title, desc: t.p2Desc, pattern: <svg className="absolute bottom-6 right-6 w-44 h-44 opacity-40 group-hover:translate-x-2 transition-transform duration-1000" viewBox="0 0 200 200">{[...Array(8)].map((_, i) => (<circle key={i} cx={75 + i * 10} cy={110 - i * 8} r={42} stroke="#5a82c2" strokeWidth="0.7" fill="none" opacity={0.6 - i * 0.05} />))}</svg> },
            { title: t.p3Title, desc: t.p3Desc, pattern: <svg className="absolute bottom-6 right-6 w-44 h-44 opacity-40 group-hover:-translate-y-2 transition-transform duration-700" viewBox="0 0 200 200">{[...Array(11)].map((_, i) => (<path key={i} d="M100,30 L160,60 L100,90 L40,60 Z" transform={`translate(0, ${i * 9})`} stroke="#5a82c2" strokeWidth="0.7" fill="none" opacity={0.6 - i * 0.04} />))}</svg> },
            { title: t.p4Title, desc: t.p4Desc, pattern: <svg className="absolute bottom-4 right-4 w-48 h-48 opacity-30 group-hover:rotate-3 transition-transform duration-1000" viewBox="0 0 200 200">{[...Array(12)].map((_, i) => (<path key={i} d={`M20,${50 + i * 9} Q100,${10 + i * 9} 180,${50 + i * 9}`} stroke="#5a82c2" strokeWidth="0.5" fill="none" opacity={0.3} />))}{[...Array(12)].map((_, i) => (<path key={`v-${i}`} d={`M${30 + i * 13},45 L${30 + i * 13},155`} stroke="#5a82c2" strokeWidth="0.3" fill="none" opacity={0.15} />))}</svg> },
          ].map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="relative h-[280px] md:h-[320px] p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-[#F4F7FA] border border-transparent hover:border-[#5a82c2]/20 hover:bg-white transition-all duration-500 group overflow-hidden flex flex-col justify-start">
                <div className="text-[#5a82c2]">{item.pattern}</div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4 md:mb-6">
                    <span className="iconify text-lg md:text-xl text-[#5a82c2]" data-icon="solar:alt-arrow-right-linear"></span>
                    <h4 className="text-lg md:text-xl font-bold tracking-tight text-gray-900">{item.title}</h4>
                  </div>
                  <p className="text-[13px] md:text-[14px] leading-relaxed text-gray-500 max-w-[220px] font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 04. Impact Stats */}
      <section className="bg-gray-50 py-20 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {[
            { label: t.stat1, value: <CountUp end={70} decimals={0} />, unit: "%", desc: t.stat1Desc, icon: "solar:user-heart-bold-duotone", color: "white" },
            { label: t.stat2, value: <CountUp end={387} />, unit: t.stat2Unit, desc: t.stat2Desc, icon: "solar:shield-check-bold-duotone", color: "blue", subLabel: t.stat2Sub },
            { label: t.stat3, value: <CountUp end={24} />, unit: "+", desc: t.stat3Desc, icon: "solar:city-bold-duotone", color: "white" }
          ].map((stat, idx) => (
            <Reveal key={idx} delay={idx * 0.15}>
              <div className={`${stat.color === 'blue' ? 'bg-[#5a82c2] text-white shadow-[#5a82c2]/20' : 'bg-white text-gray-900 border-white'} p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-sm flex flex-col justify-between group hover:shadow-2xl transition-all h-[300px] md:h-[360px] border`}>
                <div className="flex justify-between items-start">
                  <span className={`text-[10px] md:text-xs font-bold tracking-[0.3em] ${stat.color === 'blue' ? 'opacity-60' : 'text-[#5a82c2]'} uppercase`}>{stat.label}</span>
                  <span className="iconify text-3xl md:text-4xl transition-colors" data-icon={stat.icon} style={{ color: stat.color === 'blue' ? 'rgba(255,255,255,0.4)' : '#5a82c2' }}></span>
                </div>
                <div>
                  <div className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter flex items-end">
                    {stat.value}
                    {stat.unit && <span className={`text-xl md:text-3xl ml-1.5 font-black whitespace-pre ${stat.color === 'blue' ? 'text-white/60' : 'text-[#5a82c2]'}`}>{stat.unit}</span>}
                  </div>
                  {stat.subLabel && <p className={`text-base md:text-lg font-bold mt-2 ${stat.color === 'blue' ? 'text-white/50' : 'text-gray-400'}`}>{stat.subLabel}</p>}
                  <p className={`mt-4 md:mt-6 font-medium leading-relaxed ${stat.color === 'blue' ? 'text-[#5a82c2]/10 uppercase tracking-[0.2em] text-xs md:text-sm' : 'text-gray-500 text-base md:text-lg'}`}>{stat.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 05. Why Follow Korea */}
      <section className="py-20 md:py-40 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <div>
            <Reveal>
              <span className="text-[#5a82c2] font-black text-sm tracking-[0.3em] uppercase mb-4 block">Why Follow Korea</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 leading-[1.7] tracking-tight whitespace-pre-line">
                {t.whyTitle}
              </h2>
            </Reveal>
            <div className="space-y-10 md:space-y-16">
              {[
                { step: "01", title: t.w1, desc: t.w1Desc, icon: "solar:tuning-square-2-bold-duotone" },
                { step: "02", title: t.w2, desc: t.w2Desc, icon: "solar:routing-2-bold-duotone" },
                { step: "03", title: t.w3, desc: t.w3Desc, icon: "solar:refresh-square-bold-duotone" },
              ].map((item, idx) => (
                <Reveal key={idx} delay={0.2 + idx * 0.1}>
                  <div className="flex gap-6 md:gap-10 group">
                    <div className="text-3xl md:text-4xl font-black text-[#5a82c2]/10 group-hover:text-[#5a82c2] transition-colors">{item.step}</div>
                    <div>
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                        <span className="iconify text-xl md:text-2xl text-[#5a82c2]" data-icon={item.icon}></span>
                        <h5 className="text-xl md:text-2xl font-bold text-gray-900">{item.title}</h5>
                      </div>
                      <p className="text-gray-400 leading-relaxed max-w-md text-base md:text-lg">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.4}>
            <div className="relative mt-12 lg:mt-0">
              <div className="absolute -inset-8 md:-inset-16 bg-[#5a82c2]/5 rounded-[3rem] md:rounded-[5rem] -z-10 rotate-3 opacity-50"></div>
              <div className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl group">
                <img src="https://cdn.imweb.me/upload/S20260120a0cc4980014ac/5c63d6411353f.jpg" className="w-full h-[500px] md:h-[700px] object-cover transition-transform duration-1000 group-hover:scale-110" alt="Clinic Lobby" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 md:p-16">
                  <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-6 md:p-8 rounded-2xl md:rounded-3xl">
                    <span className="text-white/80 font-bold uppercase tracking-widest text-[10px] md:text-xs">Expertise</span>
                    <p className="text-white text-xl md:text-2xl font-bold mt-2">{lang === 'KR' ? '세계가 주목하는 한국 의료,\n팔로우코리아가 연결합니다.' : (lang === 'EN' ? 'Global attention on K-Medical,\nFollow Korea connects you.' : '全球聚焦的韩国医疗，\n由 Follow Korea 连接世界。')}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Social Media Highlights */}
      <section className="py-20 md:py-40 bg-gray-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(#5a82c2_1px,transparent_1px)] [background-size:40px_40px]"></div>
        <div className="px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-16 md:mb-24">
              <span className="text-[#5a82c2] font-black text-sm tracking-[0.4em] uppercase mb-4 block">Social Highlights</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-[1.8] tracking-tight whitespace-pre-line">
                {t.socialTitle}
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group relative aspect-[9/16] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-black/40 border border-white/5 hover:border-[#5a82c2]/30 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#5a82c2]/20 shadow-xl">
                  <div className="absolute inset-0 w-full h-full pointer-events-none scale-105 group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100">
                    <iframe
                      src={`https://player.vimeo.com/video/${['1160923982', '1162067195', '1162067112', '1160924028'][i-1]}?autoplay=1&loop=1&background=1&muted=1&autopause=0`}
                      className="w-[100%] h-[100%] absolute top-0 left-0"
                      frameBorder="0" allow="autoplay; fullscreen" allowFullScreen style={{ objectFit: 'cover' }}
                    ></iframe>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06. News Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
              <div>
                <span className="text-[#5a82c2] font-black text-sm tracking-[0.3em] uppercase mb-4 block">Latest News</span>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.3]">{t.newsTitle}</h2>
              </div>
              <button onClick={onOpenNews} className="text-gray-400 font-bold hover:text-[#5a82c2] transition-colors flex items-center gap-2 group text-sm md:text-[15px]">
                {t.newsMore}
                <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="solar:alt-arrow-right-linear"></span>
              </button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.newsItems.map((news, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <a href={news.url} target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-sm border border-gray-100">
                    <img src={news.img} alt={news.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                      <span className="text-[11px] font-black text-[#5a82c2] uppercase tracking-wider">{news.category}</span>
                    </div>
                  </div>
                  <div className="px-2">
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#5a82c2] transition-colors line-clamp-2">{news.title}</h4>
                    <p className="text-sm text-gray-400 font-medium">{news.date}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07. CTA Section */}
      <section className="py-20 md:py-40 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-[1440px] mx-auto bg-gradient-to-br from-gray-900 to-black rounded-[3rem] md:rounded-[4.5rem] p-10 md:p-28 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
              <Reveal delay={0.2} width="fit-content">
                <span className="text-[#5a82c2] font-black text-xs md:text-sm tracking-[0.4em] uppercase mb-6 md:mb-8 block">Follow the Excellence</span>
              </Reveal>
              <Reveal delay={0.3} width="fit-content">
                <h2 className="text-2xl md:text-5xl font-black text-white mb-6 md:mb-10 tracking-tight leading-[1.3] md:leading-[1.4] whitespace-pre-line">{t.ctaTitle}</h2>
              </Reveal>
              <Reveal delay={0.5} width="fit-content">
                <button onClick={onOpenConsult} className="group relative bg-[#5a82c2] text-white px-8 md:px-16 py-4 md:py-7 rounded-full font-bold hover:bg-[#4a6da3] transition-all shadow-2xl shadow-[#5a82c2]/20 active:scale-95 text-base md:text-xl flex items-center gap-3 md:gap-4">
                  <span>{t.ctaBtn}</span>
                  <span className="iconify text-xl md:text-2xl group-hover:translate-x-2 transition-transform" data-icon="solar:arrow-right-linear"></span>
                </button>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 md:pt-40 pb-12 md:pb-16 px-6 md:px-12 lg:px-24 border-t border-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16 md:mb-24">
              <div className="max-w-xl">
                <img src="https://cdn.imweb.me/upload/S20260120a0cc4980014ac/944293da5fc36.png" alt="Footer Logo" className="h-12 md:h-16 w-auto object-contain mb-8" />
                <div className="space-y-3 md:space-y-4 text-gray-400 text-[13px] md:text-sm font-medium">
                  <p className="flex items-start gap-2">
                    <span className="iconify text-gray-300 mt-1" data-icon="solar:map-point-linear"></span>
                    <span>{t.footerAddr}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="iconify text-gray-300 mt-1" data-icon="solar:bill-list-linear"></span>
                    <span>{t.footerBiz}</span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="pt-8 md:pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <p className="text-gray-300 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-center">{t.footerCopy}</p>
            <div className="flex gap-6 md:gap-10 text-[10px] md:text-[11px] font-black text-gray-400 uppercase tracking-widest">
              <button onClick={onOpenPrivacy} className="hover:text-gray-900 transition-colors uppercase">{t.privacy}</button>
              <button onClick={onOpenTerms} className="hover:text-gray-900 transition-colors uppercase">{t.terms}</button>
            </div>
          </div>
        </div>
      </footer>
      <style>{`
        @keyframes infinite-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .animate-infinite-scroll { animation: infinite-scroll 40s linear infinite; }
        .pause-animation { animation-play-state: paused; }
        .perspective-2000 { perspective: 2000px; }
      `}</style>
    </main>
  );
};

export default MainContent;
