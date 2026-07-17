
import React, { useEffect, useRef, useState } from 'react';
import { LanguageCode } from '../App';

// 기존 MainContent의 Reveal과 동일한 스크롤 등장 애니메이션 (자체 포함)
const Reveal: React.FC<{ children: React.ReactNode; delay?: number; width?: '100%' | 'fit-content' }> = ({ children, delay = 0, width = '100%' }) => {
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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(40px)',
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

interface BusinessSectionProps {
  lang: LanguageCode;
}

const BusinessSection: React.FC<BusinessSectionProps> = ({ lang }) => {
  const T: Record<'KR' | 'EN' | 'CN', any> = {
    KR: {
      title: '5대 프로젝트',
      sub: '현행 왕홍 매출을 축으로, 유입·반복·고수익 사업으로 단계적으로 확장합니다.',
      featured: {
        tag: '현행 주력',
        name: '왕홍(가이드) 병원 수수료',
        desc: '왕홍·가이드가 소개한 중국 환자가 제휴 병원에서 시술하면 수수료를 정산받는, 현재 매출의 핵심 축입니다.',
      },
      items: [
        { no: '02', tag: '유입 인프라', name: '강남팔로우 글로벌', desc: '10개 언어 해외환자 플랫폼(followkorea.kr)으로 해외환자를 직접 유치하고 국내 병원 입점을 홍보합니다.', metric: '7월 오픈 · 저비용 상시 운영', icon: 'solar:global-bold-duotone' },
        { no: '03', tag: '시장 진입', name: '중국전용 · 중국법인', desc: 'gnfollow.com/.cn 중국 플랫폼과 WFOE 법인·바이두·위챗 미니프로그램 인프라를 순차 구축합니다.', metric: '8월 법인 설립 · 본격 매출 2027', icon: 'solar:buildings-3-bold-duotone' },
        { no: '04', tag: '신규 반복매출', name: '강남펄스 SaaS', desc: '병원용 차트·예약·CRM SaaS를 자체 개발. 입점비 무료 + 기능·단계별 월 구독으로 과금합니다.', metric: '12월 50개 병원 · MRR 1,000만', icon: 'solar:chart-square-bold-duotone' },
        { no: '05', tag: '신규 고수익', name: '중국 SNS 홍보대행', desc: '샤오홍슈·도우인·틱톡·웨이보를 운영해 국내 병원 홍보 프로그램을 건당 500~1,000만원 규모로 수주합니다.', metric: '11월~ 월 5,000만 목표', icon: 'solar:smartphone-2-bold-duotone' },
      ],
    },
    EN: {
      title: 'Five Businesses',
      sub: 'Anchored by current wanghong revenue, we expand into traffic, recurring and high-margin businesses in stages.',
      featured: {
        tag: 'Core Revenue',
        name: 'Wanghong (Guide) Clinic Fees',
        desc: 'When Chinese patients referred by wanghong and guides receive procedures at partner clinics, we settle a referral fee — our core revenue today.',
      },
      items: [
        { no: '02', tag: 'Infrastructure', name: 'Gangnam Follow Global', desc: 'A 10-language overseas-patient platform (followkorea.kr) that acquires patients directly and promotes clinic onboarding.', metric: 'Launched Jul · low-cost, always-on', icon: 'solar:global-bold-duotone' },
        { no: '03', tag: 'Market Entry', name: 'China Edition & Entity', desc: 'Building the gnfollow.com/.cn platform plus a WFOE entity, Baidu and WeChat Mini Program infrastructure in sequence.', metric: 'Entity in Aug · full revenue 2027', icon: 'solar:buildings-3-bold-duotone' },
        { no: '04', tag: 'Recurring Revenue', name: 'Gangnam Pulse SaaS', desc: 'A self-built clinic SaaS for charts, booking and CRM. Free onboarding plus tiered monthly subscription by feature.', metric: '50 clinics by Dec · ₩10M MRR', icon: 'solar:chart-square-bold-duotone' },
        { no: '05', tag: 'High-margin', name: 'China SNS Marketing', desc: 'Operating Xiaohongshu, Douyin, TikTok and Weibo to win clinic promotion programs at ₩5–10M each.', metric: '₩50M/mo target from Nov', icon: 'solar:smartphone-2-bold-duotone' },
      ],
    },
    CN: {
      title: '五大业务',
      sub: '以现有网红营收为核心，分阶段拓展至流量、复购与高收益业务。',
      featured: {
        tag: '现有主力',
        name: '网红（导游）医院佣金',
        desc: '由网红及导游介绍的中国患者在合作医院就诊时，按约定结算佣金，是目前营收的核心。',
      },
      items: [
        { no: '02', tag: '流量基础', name: '江南Follow全球版', desc: '以10种语言的海外患者平台（followkorea.kr）直接获客，并向国内医院推广入驻。', metric: '7月上线 · 低成本常态运营', icon: 'solar:global-bold-duotone' },
        { no: '03', tag: '市场进入', name: '中国专用版 · 中国法人', desc: '依次建设 gnfollow.com/.cn 中国平台及WFOE法人、百度、微信小程序基础设施。', metric: '8月设立法人 · 营收2027', icon: 'solar:buildings-3-bold-duotone' },
        { no: '04', tag: '新增复购营收', name: '江南Pulse SaaS', desc: '自主开发面向医院的病历·预约·CRM SaaS。入驻免费，按功能与阶段收取月订阅费。', metric: '12月50家医院 · MRR 1,000万', icon: 'solar:chart-square-bold-duotone' },
        { no: '05', tag: '新增高收益', name: '中国社媒营销代理', desc: '运营小红书、抖音、TikTok、微博，为国内医院承接每单500~1,000万韩元的推广项目。', metric: '11月起月5,000万目标', icon: 'solar:smartphone-2-bold-duotone' },
      ],
    },
  };

  // KR/EN/CN 외 언어는 영어로 폴백 (기존 사이트 9개국어 중 우선 3개 지원)
  const t = (T as any)[lang] ?? T.EN;

  // 프로젝트별 외부 링크 (언어 공통). 03 중국법인 홈페이지는 개설 후 URL 입력.
  const LINKS: Record<string, string> = {
    '02': 'https://followkorea.kr',
    '03': 'https://gnfollow.com',
    '04': 'https://gnpulse.kr/demo',
    '05': 'https://gnpulse.kr',
  };

  return (
    <section id="business" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#5a82c2] font-black text-sm tracking-[0.3em] uppercase mb-4 block">Business Portfolio</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.4] tracking-tight">{t.title}</h2>
            </div>
            <p className="text-gray-400 font-medium text-base md:text-lg max-w-md leading-relaxed">{t.sub}</p>
          </div>
        </Reveal>

        {/* Featured — Project 01 */}
        <Reveal delay={0.1}>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[300px] md:min-h-[420px] shadow-2xl group">
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <iframe
                  className="absolute top-1/2 left-1/2 w-[177.77vh] h-[100vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 scale-125"
                  src="https://player.vimeo.com/video/1160923982?autoplay=1&loop=1&background=1&muted=1&autopause=0"
                  title="Wanghong Content"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                <span className="inline-block text-[11px] font-black text-white bg-[#5a82c2] px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">Project 01 · {t.featured.tag}</span>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight whitespace-pre-line drop-shadow-lg">{t.featured.name}</h3>
              </div>
            </div>

            <div className="flex flex-col justify-center py-2">
              <p className="text-gray-500 text-[15px] md:text-lg leading-relaxed font-medium">{t.featured.desc}</p>
            </div>
          </div>
        </Reveal>

        {/* Project 02 – 05 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.items.map((item: any, idx: number) => {
            const href = LINKS[item.no];
            const card = (
              <div className="relative h-full p-8 md:p-10 rounded-[2rem] bg-[#F4F7FA] border border-transparent hover:border-[#5a82c2]/20 hover:bg-white hover:shadow-xl transition-all duration-500 group overflow-hidden flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl md:text-5xl font-black text-[#5a82c2]/10 group-hover:text-[#5a82c2]/20 transition-colors leading-none">{item.no}</span>
                  <span className="iconify text-3xl md:text-4xl text-[#5a82c2]" data-icon={item.icon}></span>
                </div>
                <span className="inline-block self-start text-[11px] font-black text-[#5a82c2] bg-[#5a82c2]/10 px-3 py-1 rounded-full uppercase tracking-wider mb-3">{item.tag}</span>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-3 break-keep">{item.name}</h4>
                <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-500 font-medium flex-1">{item.desc}</p>
                {href && (
                  <div className="mt-6 pt-5 border-t border-gray-200/70 flex items-center justify-end">
                    <span className="iconify text-[#5a82c2] text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-icon="solar:arrow-right-up-linear"></span>
                  </div>
                )}
              </div>
            );
            return (
              <Reveal key={item.no} delay={idx * 0.1}>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer">{card}</a>
                ) : card}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
