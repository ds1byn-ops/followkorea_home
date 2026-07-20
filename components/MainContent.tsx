
import React, { useState, useEffect, useRef } from 'react';
import { LanguageCode } from '../App';
import BusinessSection from './BusinessSection';
import { RoadmapSection, PnlSection } from './BusinessPlanSections';

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

// 우리 서비스 — 3개 제품 허브 (강남펄스 ERP / 글로벌 플랫폼 / 왕홍 마케팅)
const SVC_LINKS = ['https://gnpulse.kr/demo', 'https://followkorea.kr', 'https://gnpulse.kr'];
const AGENCY_ERP: Record<string, string> = { KR: '에이전시 관리 ERP', EN: 'Agency Management ERP', CN: '代理商管理 ERP', JP: 'エージェンシー管理 ERP', ID: 'ERP Manajemen Agensi', AR: 'نظام إدارة الوكالات', KH: 'ERP គ្រប់គ្រងភ្នាក់ងារ', VI: 'ERP Quản lý Đại lý', RU: 'ERP управления агентствами' };
const SVC_I18N: Record<string, { title: string; sub: string; items: { t: string; d: string; c: string; tag?: string }[] }> = {
  KR: { title: '병원 성장을 위한\n세 가지 솔루션', sub: '메디컬 마케팅부터 병원 운영, 글로벌 환자 유치까지 — 필요한 서비스를 바로 선택하세요.', items: [
    { t: '강남펄스 ERP', d: '예약·접수·정산·환자 CRM을 하나로. 병원 운영 올인원 시스템을 무료로 체험해 보세요.', c: '무료 데모 신청', tag: '무료 체험' },
    { t: '글로벌 환자 유치 플랫폼', d: '협력 병원과 다국어 의료관광 플랫폼. 해외 환자와 병원을 연결합니다.', c: '플랫폼 둘러보기' },
    { t: '중국 왕홍 마케팅', d: '광고는 조회수를, 왕홍은 환자를 남깁니다. 왕홍 기반 중국 환자 유치 프로그램.', c: '프로그램 보기', tag: '중국 특화' },
  ] },
  EN: { title: 'Three Solutions for\nYour Hospital’s Growth', sub: 'From medical marketing to hospital operations and global patient attraction — choose the service you need.', items: [
    { t: 'Gangnam Pulse ERP', d: 'Appointments, reception, settlement, and patient CRM in one. Try the all-in-one hospital system for free.', c: 'Free Demo', tag: 'Free Trial' },
    { t: 'Global Patient Platform', d: 'A multilingual medical tourism platform with partner hospitals, connecting global patients and clinics.', c: 'Explore Platform' },
    { t: 'China Wanghong Marketing', d: 'Ads leave views; wanghong leave patients. A wanghong-based China patient attraction program.', c: 'View Program', tag: 'China' },
  ] },
  CN: { title: '助力医院成长的\n三大解决方案', sub: '从医疗营销到医院运营，再到全球患者引进——选择您需要的服务。', items: [
    { t: '江南Pulse ERP', d: '预约·接待·结算·患者CRM一体化。免费体验医院运营一站式系统。', c: '免费演示申请', tag: '免费体验' },
    { t: '全球患者引进平台', d: '与合作医院的多语言医疗旅游平台，连接海外患者与医院。', c: '浏览平台' },
    { t: '中国网红营销', d: '广告留下浏览量，网红留下患者。基于网红的中国患者引进项目。', c: '查看项目', tag: '中国专属' },
  ] },
  JP: { title: '病院の成長のための\n3つのソリューション', sub: 'メディカルマーケティングから病院運営、グローバル患者誘致まで — 必要なサービスをお選びください。', items: [
    { t: '江南パルス ERP', d: '予約・受付・精算・患者CRMを一つに。病院運営オールインワンを無料で体験。', c: '無料デモ申込', tag: '無料体験' },
    { t: 'グローバル患者誘致プラットフォーム', d: '提携病院との多言語医療ツーリズムプラットフォーム。海外患者と病院をつなぎます。', c: 'プラットフォームを見る' },
    { t: '中国ワンホンマーケティング', d: '広告は再生数を、ワンホンは患者を残します。ワンホンによる中国患者誘致プログラム。', c: 'プログラムを見る', tag: '中国特化' },
  ] },
  ID: { title: 'Tiga Solusi untuk\nPertumbuhan Rumah Sakit Anda', sub: 'Dari pemasaran medis hingga operasional rumah sakit dan penarikan pasien global — pilih layanan yang Anda butuhkan.', items: [
    { t: 'Gangnam Pulse ERP', d: 'Janji temu, resepsi, penyelesaian, dan CRM pasien dalam satu. Coba sistem rumah sakit all-in-one gratis.', c: 'Demo Gratis', tag: 'Uji Coba Gratis' },
    { t: 'Platform Pasien Global', d: 'Platform wisata medis multibahasa dengan rumah sakit mitra, menghubungkan pasien global dan klinik.', c: 'Jelajahi Platform' },
    { t: 'Pemasaran Wanghong Tiongkok', d: 'Iklan meninggalkan tayangan; wanghong meninggalkan pasien. Program penarikan pasien Tiongkok berbasis wanghong.', c: 'Lihat Program', tag: 'Tiongkok' },
  ] },
  AR: { title: 'ثلاثة حلول\nلنمو مستشفاك', sub: 'من التسويق الطبي إلى تشغيل المستشفى واستقطاب المرضى عالمياً — اختر الخدمة التي تحتاجها.', items: [
    { t: 'Gangnam Pulse ERP', d: 'المواعيد والاستقبال والتسوية وإدارة المرضى في نظام واحد. جرّب نظام المستشفى الشامل مجاناً.', c: 'عرض تجريبي مجاني', tag: 'تجربة مجانية' },
    { t: 'منصة المرضى العالمية', d: 'منصة سياحة علاجية متعددة اللغات مع مستشفيات شريكة، تربط المرضى العالميين بالعيادات.', c: 'استكشف المنصة' },
    { t: 'تسويق وانغهونغ الصيني', d: 'الإعلانات تترك مشاهدات، ووانغهونغ يتركون مرضى. برنامج استقطاب المرضى الصينيين.', c: 'عرض البرنامج', tag: 'الصين' },
  ] },
  KH: { title: 'ដំណោះស្រាយបីយ៉ាង​សម្រាប់កំណើនមន្ទីរពេទ្យរបស់អ្នក', sub: 'ពីទីផ្សារវេជ្ជសាស្ត្រ ដល់ប្រតិបត្តិការ និងការទាក់ទងអ្នកជំងឺសកល — ជ្រើសរើសសេវាកម្មដេលអ្នកត្រូវការ។', items: [
    { t: 'Gangnam Pulse ERP', d: 'ការណាត់ជួប ការទទួល ការទូទាត់ និង CRM អ្នកជំងឺក្នុងមួយ។ សាកល្បងប្រព័ន្ធមន្ទីរពេទ្យដោយមិនគិតថ្លៃ។', c: 'សាកល្បងឥតគិតថ្លៃ', tag: 'ឥតគិតថ្លៃ' },
    { t: 'វេទិកាអ្នកជំងឺសកល', d: 'វេទិកាទេសចរណ៍វេជ្ជសាស្ត្រពហុភាសាជាមួយមន្ទីរពេទ្យដៃគូ។', c: 'រុករកវេទិកា' },
    { t: 'ទីផ្សារ Wanghong ចិន', d: 'ការផ្សាយពាណិជ្ជកម្មទុកចំនួនមើល ឯ Wanghong ទុកអ្នកជំងឺ។', c: 'មើលកម្មវិធី', tag: 'ចិន' },
  ] },
  VI: { title: 'Ba giải pháp cho\nsự phát triển của bệnh viện', sub: 'Từ marketing y tế đến vận hành bệnh viện và thu hút bệnh nhân toàn cầu — chọn dịch vụ bạn cần.', items: [
    { t: 'Gangnam Pulse ERP', d: 'Đặt lịch, tiếp nhận, thanh toán và CRM bệnh nhân trong một. Trải nghiệm hệ thống bệnh viện all-in-one miễn phí.', c: 'Dùng thử miễn phí', tag: 'Miễn phí' },
    { t: 'Nền tảng bệnh nhân toàn cầu', d: 'Nền tảng du lịch y tế đa ngôn ngữ với các bệnh viện đối tác, kết nối bệnh nhân toàn cầu và phòng khám.', c: 'Khám phá nền tảng' },
    { t: 'Marketing Wanghong Trung Quốc', d: 'Quảng cáo để lại lượt xem, wanghong để lại bệnh nhân. Chương trình thu hút bệnh nhân Trung Quốc dựa trên wanghong.', c: 'Xem chương trình', tag: 'Trung Quốc' },
  ] },
  RU: { title: 'Три решения для\nроста вашей клиники', sub: 'От медицинского маркетинга до управления клиникой и привлечения пациентов — выберите нужную услугу.', items: [
    { t: 'Gangnam Pulse ERP', d: 'Запись, приём, расчёты и CRM пациентов в одном. Попробуйте систему для клиник бесплатно.', c: 'Бесплатное демо', tag: 'Бесплатно' },
    { t: 'Глобальная платформа пациентов', d: 'Многоязычная платформа медтуризма с партнёрскими клиниками, соединяющая пациентов и клиники.', c: 'Открыть платформу' },
    { t: 'Китайский маркетинг ванхун', d: 'Реклама оставляет просмотры, ванхун — пациентов. Программа привлечения китайских пациентов через ванхун.', c: 'Смотреть программу', tag: 'Китай' },
  ] },
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
        { category: '보도자료', title: '팔로우코리아-GCNC, 국내기업 해외진출 지원 강화 위한 전략적 업무협약 체결', date: '2025.11.19', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ff65c4d98d8d0.png', url: 'https://www.enetnews.co.kr/news/articleView.html?idxno=44232' }
      ],
      ctaTitle: '지금, 글로벌 환자 유치를\n시작해보세요.', ctaBtn: '지금 바로 문의하기',
      footerAddr: '주소: 서울특별시 서초구 강남대로 373, 13층 116호',
      footerBiz: '사업자등록번호: 696-86-03627',
      footerCeo: '대표: 하장환',
      footerContact: '문의: contact@followkorea.co.kr',
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
        { category: 'Press', title: "Follow Korea Hosts Season 2 K-Beauty Medical Tourism Global Project", date: '2025.11.13', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6bfafba46f880.jpg', url: 'https://star.mbn.co.kr/entertain/11467451?refer=portal' },
        { category: 'Press', title: 'Follow Korea Opens New Markets for K-Beauty Meditours with 1M-Follower Influencers', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' }
      ],
      ctaTitle: 'Start Attracting\nGlobal Patients Now.', ctaBtn: 'Inquire Now',
      footerAddr: 'Address: 13F #116, 373 Gangnam-daero, Seocho-gu, Seoul, Korea',
      footerBiz: 'Business Registration Number: 696-86-03627',
      footerCeo: 'CEO: Ha Jang-hwan',
      footerContact: 'Contact: contact@followkorea.co.kr',
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
        { category: '新闻', title: "Follow Korea 举办第二季 K-Beauty 医疗旅游全球项目", date: '2025.11.13', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6bfafba46f880.jpg', url: 'https://star.mbn.co.kr/entertain/11467451?refer=portal' },
        { category: '新闻', title: '百万粉丝网红加盟... Follow Korea 开启 K-Beauty 医疗旅游新市场', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' }
      ],
      ctaTitle: '现在就开启\n全球患者引流之旅。', ctaBtn: '立即咨询',
      footerAddr: '地址：首尔特别市瑞草区江南大路373号，13层116号',
      footerBiz: '工商注册号: 696-86-03627',
      footerCeo: '代表: Ha Jang-hwan',
      footerContact: '联系邮箱: contact@followkorea.co.kr',
      footerCopy: 'Copyright ⓒ 2026 Follow Korea 版权所有。',
      privacy: '隐私政策', terms: '使用条款'
    },
    JP: {
      heroBadge: 'With Follow Korea',
      heroTitle: 'グローバル患者誘致のための\n病院特化型メディカルマーケティング',
      consultBtn: '1:1 無料相談',
      partnerTitle: '最高のパートナーと共に',
      programTitle: '経験が創る、\nFollow Koreaのグローバルマーケティング',
      programSub: 'Our Medical Tour Program',
      p1Title: 'グローバルインフルエンサー招請', p1Desc: '海外の著名インフルエンサーとの協業を通じて韓国医療の卓越性を世界に発信し、生き生きとした体験コンテンツを制作します。',
      p2Title: '病院・クリニック医療体験', p2Desc: '患者が韓国の先進医療システムを直接体験できる最適なツアールートとカスタマイズされた診療プロセスを提供します。',
      p3Title: '施術・検診・相談のコンテンツ化', p3Desc: '全過程を高品質な映像およびマガジンコンテンツとして制作し、医療サービスへの信頼度とアクセス性を最大化します。',
      p4Title: 'グローバル潜在患者の誘導', p4Desc: 'デジタルマーケティングとデータ分析に基づき、韓国医療を必要とするグローバル患者をターゲティングして流入を最大化します。',
      stat1: '顧客維持率', stat1Desc: 'リピート参加で証明されたパートナー満足度',
      stat2: 'グローバル患者数', stat2Desc: '医療観光の外国人が毎年増加', stat2Unit: '万人', stat2Sub: '2009~2023 基準',
      stat3: 'パートナーネットワーク', stat3Desc: '韓国最高の上級総合病院が協力パートナーとして共に歩んでいます。',
      whyTitle: 'Follow Koreaのコアマーケティング戦略',
      w1: '信頼を築く広報', w1Desc: '広告ではなく実際の体験に基づき、医療サービスへの信頼を構築します。',
      w2: 'グローバル患者中心', w2Desc: '入国から移動、専属通訳サポートまで、治療だけに専念できる環境を整えます。',
      w3: '体系的な運営システム', w3Desc: 'カスタマイズされた医療コミュニケーションで明確なプロセスを構築します。',
      socialTitle: '共にする楽しさ、\n生き生きとした現場ストーリー',
      newsTitle: 'ニュース＆お知らせ', newsMore: 'すべてのニュースを見る',
      newsItems: [
        { category: 'プレスリリース', title: 'Follow Korea、グローバル医療ツーリズムとK-コンテンツ融合の新境地へ', date: '2026.01.30', img: 'https://cdn.newsroad.co.kr/news/photo/202601/53565_72372_531.jpg', url: 'https://www.newsroad.co.kr/news/articleView.html?idxno=53565' },
        { category: 'プレスリリース', title: "Follow Korea、シーズン2 K-ビューティー医療ツーリズムグローバルプロジェクト開催", date: '2025.11.13', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6bfafba46f880.jpg', url: 'https://star.mbn.co.kr/entertain/11467451?refer=portal' },
        { category: 'プレスリリース', title: 'Follow Korea、100万フォロワーのインフルエンサーとK-ビューティー医療ツアーの新市場を開拓', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' }
      ],
      ctaTitle: '今、グローバル患者の誘致を\n始めましょう。', ctaBtn: '今すぐお問い合わせ',
      footerAddr: '住所: ソウル特別市瑞草区江南大路373、13階116号',
      footerBiz: '事業者登録番号: 696-86-03627',
      footerCeo: '代表者: Ha Jang-hwan',
      footerContact: 'お問い合わせ: contact@followkorea.co.kr',
      footerCopy: 'Copyright ⓒ 2026 Follow Korea All rights reserved.',
      privacy: 'プライバシーポリシー', terms: '利用規約'
    },
    ID: {
      heroBadge: 'With Follow Korea',
      heroTitle: 'Pemasaran Medis Khusus Rumah Sakit\nuntuk Menarik Pasien Global',
      consultBtn: 'Konsultasi Gratis 1:1',
      partnerTitle: 'Berkolaborasi dengan Mitra Terbaik',
      programTitle: 'Menciptakan Pengalaman,\nPemasaran Global Follow Korea',
      programSub: 'Our Medical Tour Program',
      p1Title: 'Undangan Influencer Global', p1Desc: 'Berkolaborasi dengan influencer global ternama untuk memperkenalkan keunggulan medis Korea ke seluruh dunia dan menciptakan konten pengalaman yang nyata.',
      p2Title: 'Pengalaman Medis Rumah Sakit & Klinik', p2Desc: 'Menyediakan rute tur optimal dan proses perawatan khusus agar pasien dapat merasakan langsung sistem medis Korea yang maju.',
      p3Title: 'Konten Perawatan & Konsultasi', p3Desc: 'Memproduksi video dan konten majalah berkualitas tinggi untuk memaksimalkan kepercayaan dan aksesibilitas layanan medis.',
      p4Title: 'Menarik Pasien Potensial Global', p4Desc: 'Menargetkan pasien global yang membutuhkan medis Korea melalui pemasaran digital dan analisis data untuk memaksimalkan arus masuk.',
      stat1: 'Tingkat Retensi', stat1Desc: 'Kepuasan mitra yang terbukti dari partisipasi ulang',
      stat2: 'Pasien Global', stat2Desc: 'Peningkatan wisatawan medis setiap tahun', stat2Unit: 'Juta', stat2Sub: 'Basis 2009~2023',
      stat3: 'Jaringan Mitra', stat3Desc: 'Rumah sakit umum terbaik Korea bekerja sama dengan kami sebagai mitra strategis.',
      whyTitle: 'Strategi Pemasaran Inti Follow Korea',
      w1: 'Promosi Berbasis Kepercayaan', w1Desc: 'Membangun kepercayaan pada layanan medis berdasarkan pengalaman nyata, bukan sekadar iklan.',
      w2: 'Berpusat pada Pasien Global', w2Desc: 'Menciptakan lingkungan yang fokus pada perawatan, dari kedatangan, transportasi, hingga dukungan penerjemah khusus.',
      w3: 'Sistem Operasi Sistematis', w3Desc: 'Membangun proses yang jelas melalui komunikasi medis yang disesuaikan.',
      socialTitle: 'Kebahagiaan Bersama,\nKisah Nyata dari Lapangan',
      newsTitle: 'Berita & Pengumuman', newsMore: 'Lihat Semua Berita',
      newsItems: [
        { category: 'Siaran Pers', title: 'Follow Korea Memimpin Era Baru Konvergensi Wisata Medis Global dan Konten-K', date: '2026.01.30', img: 'https://cdn.newsroad.co.kr/news/photo/202601/53565_72372_531.jpg', url: 'https://www.newsroad.co.kr/news/articleView.html?idxno=53565' },
        { category: 'Siaran Pers', title: "Follow Korea Gelar Proyek Global Wisata Medis K-Beauty Musim 2", date: '2025.11.13', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6bfafba46f880.jpg', url: 'https://star.mbn.co.kr/entertain/11467451?refer=portal' },
        { category: 'Siaran Pers', title: 'Follow Korea Membuka Pasar Baru Wisata Medis K-Beauty dengan Influencer 1 Juta Pengikut', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' }
      ],
      ctaTitle: 'Mulai Menarik\nPasien Global Sekarang.', ctaBtn: 'Hubungi Sekarang',
      footerAddr: 'Alamat: Lantai 13 #116, 373 Gangnam-daero, Seocho-gu, Seoul, Korea',
      footerBiz: 'Nomor Registrasi Bisnis: 696-86-03627',
      footerCeo: 'CEO: Ha Jang-hwan',
      footerContact: 'Kontak: contact@followkorea.co.kr',
      footerCopy: 'Copyright ⓒ 2026 Follow Korea All rights reserved.',
      privacy: 'Kebijakan Privasi', terms: 'Ketentuan Penggunaan'
    },
    AR: {
      heroBadge: 'With Follow Korea',
      heroTitle: 'تسويق طبي مُخصّص للمستشفيات\nلجذب المرضى من حول العالم',
      consultBtn: 'استشارة مجانية 1:1',
      partnerTitle: 'بالتعاون مع أفضل الشركاء',
      programTitle: 'نصنع التجارب،\nتسويق Follow Korea العالمي',
      programSub: 'Our Medical Tour Program',
      p1Title: 'دعوة المؤثرين العالميين', p1Desc: 'نتعاون مع مؤثرين عالميين مشهورين للتعريف بتميز الطب الكوري حول العالم وإنتاج محتوى تجريبي حيّ.',
      p2Title: 'تجربة طبية في المستشفيات والعيادات', p2Desc: 'نوفّر أفضل مسارات الجولات وعمليات علاج مُخصّصة ليختبر المرضى النظام الطبي الكوري المتقدم بأنفسهم.',
      p3Title: 'تحويل العلاج والاستشارة إلى محتوى', p3Desc: 'ننتج فيديوهات ومحتوى مجلات عالي الجودة لتعظيم الثقة وسهولة الوصول إلى الخدمات الطبية.',
      p4Title: 'استقطاب المرضى المحتملين عالمياً', p4Desc: 'نستهدف المرضى العالميين الذين يحتاجون إلى الطب الكوري عبر التسويق الرقمي وتحليل البيانات لتعظيم التدفق.',
      stat1: 'معدل الاحتفاظ', stat1Desc: 'رضا الشركاء المثبت بإعادة المشاركة',
      stat2: 'المرضى العالميون', stat2Desc: 'ازدياد السياح العلاجيين سنوياً', stat2Unit: 'مليون', stat2Sub: 'الأساس 2009~2023',
      stat3: 'شبكة الشركاء', stat3Desc: 'أفضل المستشفيات العامة في كوريا تعمل معنا كشركاء استراتيجيين.',
      whyTitle: 'استراتيجية التسويق الأساسية لـ Follow Korea',
      w1: 'ترويج مبني على الثقة', w1Desc: 'نبني الثقة في الخدمات الطبية استناداً إلى تجارب حقيقية وليس مجرد إعلانات.',
      w2: 'التركيز على المريض العالمي', w2Desc: 'نهيّئ بيئة تركّز على العلاج فقط، من الوصول والتنقل إلى دعم الترجمة المخصص.',
      w3: 'نظام تشغيل منهجي', w3Desc: 'نبني عمليات واضحة عبر تواصل طبي مُخصّص.',
      socialTitle: 'متعة التواصل،\nقصص حيّة من الميدان',
      newsTitle: 'الأخبار والإعلانات', newsMore: 'عرض كل الأخبار',
      newsItems: [
        { category: 'بيان صحفي', title: 'Follow Korea تقود آفاقاً جديدة في دمج السياحة العلاجية العالمية والمحتوى الكوري', date: '2026.01.30', img: 'https://cdn.newsroad.co.kr/news/photo/202601/53565_72372_531.jpg', url: 'https://www.newsroad.co.kr/news/articleView.html?idxno=53565' },
        { category: 'بيان صحفي', title: "Follow Korea تطلق المشروع العالمي للسياحة العلاجية للجمال الكوري الموسم الثاني", date: '2025.11.13', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6bfafba46f880.jpg', url: 'https://star.mbn.co.kr/entertain/11467451?refer=portal' },
        { category: 'بيان صحفي', title: 'Follow Korea تفتح أسواقاً جديدة للسياحة العلاجية مع مؤثرين لديهم مليون متابع', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' }
      ],
      ctaTitle: 'ابدأ الآن\nبجذب المرضى من حول العالم.', ctaBtn: 'استفسر الآن',
      footerAddr: 'العنوان: الطابق 13، مكتب 116، 373 Gangnam-daero، Seocho-gu، سيول، كوريا',
      footerBiz: 'رقم تسجيل الأعمال: 696-86-03627',
      footerCeo: 'الرئيس التنفيذي: Ha Jang-hwan',
      footerContact: 'للتواصل: contact@followkorea.co.kr',
      footerCopy: 'Copyright ⓒ 2026 Follow Korea All rights reserved.',
      privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام'
    },
    KH: {
      heroBadge: 'With Follow Korea',
      heroTitle: 'ទីផ្សារវេជ្ជសាស្ត្រតាមតម្រូវការមន្ទីរពេទ្យ\nសម្រាប់ទាក់ទាញអ្នកជំងឺសកល',
      consultBtn: 'ពិគ្រោះឥតគិតថ្លៃ 1:1',
      partnerTitle: 'រួមដៃជាមួយដៃគូល្អបំផុត',
      programTitle: 'បង្កើតបទពិសោធន៍,\nទីផ្សារសកលរបស់ Follow Korea',
      programSub: 'Our Medical Tour Program',
      p1Title: 'ការអញ្ជើញអ្នកមានឥទ្ធិពលសកល', p1Desc: 'សហការជាមួយអ្នកមានឥទ្ធិពលល្បីៗលើពិភពលោក ដើម្បីផ្សព្វផ្សាយភាពល្អឥតខ្ចោះនៃវេជ្ជសាស្ត្រកូរ៉េ និងបង្កើតមាតិកាបទពិសោធន៍ពិតប្រាកដ។',
      p2Title: 'បទពិសោធន៍វេជ្ជសាស្ត្រមន្ទីរពេទ្យ និងគ្លីនិក', p2Desc: 'ផ្តល់នូវផ្លូវទេសចរណ៍ល្អបំផុត និងដំណើរការព្យាបាលតាមតម្រូវការ ដើម្បីឱ្យអ្នកជំងឺបានជួបប្រទះប្រព័ន្ធវេជ្ជសាស្ត្រកូរ៉េទំនើប។',
      p3Title: 'ការធ្វើមាតិកាការព្យាបាល និងពិគ្រោះ', p3Desc: 'ផលិតវីដេអូ និងមាតិកាទស្សនាវដ្តីគុណភាពខ្ពស់ ដើម្បីបង្កើនទំនុកចិត្ត និងលទ្ធភាពទទួលបានសេវាវេជ្ជសាស្ត្រ។',
      p4Title: 'ការទាក់ទាញអ្នកជំងឺសក្តានុពលសកល', p4Desc: 'កំណត់គោលដៅអ្នកជំងឺសកលដែលត្រូវការវេជ្ជសាស្ត្រកូរ៉េ តាមរយៈទីផ្សារឌីជីថល និងការវិភាគទិន្នន័យ។',
      stat1: 'អត្រារក្សាអតិថិជន', stat1Desc: 'ការពេញចិត្តរបស់ដៃគូដែលបានបញ្ជាក់ដោយការចូលរួមឡើងវិញ',
      stat2: 'អ្នកជំងឺសកល', stat2Desc: 'ភ្ញៀវទេសចរណ៍វេជ្ជសាស្ត្របន្តកើនឡើងជារៀងរាល់ឆ្នាំ', stat2Unit: 'លាន', stat2Sub: 'មូលដ្ឋាន 2009~2023',
      stat3: 'បណ្តាញដៃគូ', stat3Desc: 'មន្ទីរពេទ្យទូទៅកំពូលៗរបស់កូរ៉េកំពុងសហការជាមួយយើងជាដៃគូយុទ្ធសាស្ត្រ។',
      whyTitle: 'យុទ្ធសាស្ត្រទីផ្សារស្នូលរបស់ Follow Korea',
      w1: 'ការផ្សព្វផ្សាយបង្កើតទំនុកចិត្ត', w1Desc: 'បង្កើតទំនុកចិត្តលើសេវាវេជ្ជសាស្ត្រ ផ្អែកលើបទពិសោធន៍ពិត មិនមែនគ្រាន់តែការផ្សាយពាណិជ្ជកម្មទេ។',
      w2: 'ផ្តោតលើអ្នកជំងឺសកល', w2Desc: 'បង្កើតបរិយាកាសផ្តោតលើការព្យាបាល ចាប់ពីការចូលមក ការធ្វើដំណើរ រហូតដល់ការគាំទ្រអ្នកបកប្រែឯកទេស។',
      w3: 'ប្រព័ន្ធប្រតិបត្តិការជាប្រព័ន្ធ', w3Desc: 'បង្កើតដំណើរការច្បាស់លាស់ តាមរយៈការទំនាក់ទំនងវេជ្ជសាស្ត្រតាមតម្រូវការ។',
      socialTitle: 'សុភមង្គលនៃការរួមគ្នា,\nរឿងរ៉ាវពិតប្រាកដពីទីលាន',
      newsTitle: 'ព័ត៌មាន និងសេចក្តីជូនដំណឹង', newsMore: 'មើលព័ត៌មានទាំងអស់',
      newsItems: [
        { category: 'សេចក្តីប្រកាសព័ត៌មាន', title: 'Follow Korea នាំមុខសម័យកាលថ្មីនៃការរួមបញ្ចូលទេសចរណ៍វេជ្ជសាស្ត្រសកល និងមាតិកា K', date: '2026.01.30', img: 'https://cdn.newsroad.co.kr/news/photo/202601/53565_72372_531.jpg', url: 'https://www.newsroad.co.kr/news/articleView.html?idxno=53565' },
        { category: 'សេចក្តីប្រកាសព័ត៌មាន', title: "Follow Korea រៀបចំគម្រោងសកល រដូវកាលទី2 ទេសចរណ៍វេជ្ជសាស្ត្រ K-Beauty", date: '2025.11.13', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6bfafba46f880.jpg', url: 'https://star.mbn.co.kr/entertain/11467451?refer=portal' },
        { category: 'សេចក្តីប្រកាសព័ត៌មាន', title: 'Follow Korea បើកទីផ្សារថ្មីសម្រាប់ K-Beauty ជាមួយអ្នកមានឥទ្ធិពល 1 លាននាក់', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' }
      ],
      ctaTitle: 'ចាប់ផ្តើមទាក់ទាញ\nអ្នកជំងឺសកលឥឡូវនេះ។', ctaBtn: 'សាកសួរឥឡូវនេះ',
      footerAddr: 'អាសយដ្ឋាន: ជាន់ទី 13 #116, 373 Gangnam-daero, Seocho-gu, សេអ៊ូល, កូរ៉េ',
      footerBiz: 'លេខចុះបញ្ជីអាជីវកម្ម: 696-86-03627',
      footerCeo: 'នាយកប្រតិបត្តិ: Ha Jang-hwan',
      footerContact: 'ទំនាក់ទំនង: contact@followkorea.co.kr',
      footerCopy: 'Copyright ⓒ 2026 Follow Korea All rights reserved.',
      privacy: 'គោលការណ៍ភាពឯកជន', terms: 'លក្ខខណ្ឌប្រើប្រាស់'
    },
    VI: {
      heroBadge: 'With Follow Korea',
      heroTitle: 'Marketing Y tế riêng cho bệnh viện\nđể thu hút bệnh nhân toàn cầu',
      consultBtn: 'Tư vấn miễn phí 1:1',
      partnerTitle: 'Đồng hành cùng các đối tác hàng đầu',
      programTitle: 'Tạo nên trải nghiệm,\nMarketing toàn cầu Follow Korea',
      programSub: 'Our Medical Tour Program',
      p1Title: 'Mời Influencer toàn cầu', p1Desc: 'Hợp tác với các influencer nổi tiếng toàn cầu để quảng bá sự xuất sắc của y tế Hàn Quốc và tạo nội dung trải nghiệm chân thực.',
      p2Title: 'Trải nghiệm y tế bệnh viện & phòng khám', p2Desc: 'Cung cấp lộ trình tham quan tối ưu và quy trình điều trị tùy chỉnh để bệnh nhân trực tiếp trải nghiệm hệ thống y tế tiên tiến của Hàn Quốc.',
      p3Title: 'Nội dung hóa điều trị & tư vấn', p3Desc: 'Sản xuất video và nội dung tạp chí chất lượng cao để tối đa hóa độ tin cậy và khả năng tiếp cận dịch vụ y tế.',
      p4Title: 'Thu hút bệnh nhân tiềm năng toàn cầu', p4Desc: 'Nhắm đến bệnh nhân toàn cầu cần y tế Hàn Quốc thông qua marketing kỹ thuật số và phân tích dữ liệu.',
      stat1: 'Tỷ lệ giữ chân', stat1Desc: 'Sự hài lòng của đối tác được chứng minh qua tái hợp tác',
      stat2: 'Bệnh nhân toàn cầu', stat2Desc: 'Du khách y tế tăng hàng năm', stat2Unit: 'Triệu', stat2Sub: 'Cơ sở 2009~2023',
      stat3: 'Mạng lưới đối tác', stat3Desc: 'Các bệnh viện đa khoa hàng đầu Hàn Quốc đang hợp tác với chúng tôi như đối tác chiến lược.',
      whyTitle: 'Chiến lược Marketing cốt lõi của Follow Korea',
      w1: 'Quảng bá dựa trên niềm tin', w1Desc: 'Xây dựng niềm tin vào dịch vụ y tế dựa trên trải nghiệm thực tế, không chỉ là quảng cáo.',
      w2: 'Lấy bệnh nhân toàn cầu làm trung tâm', w2Desc: 'Tạo môi trường tập trung vào điều trị, từ nhập cảnh, di chuyển đến hỗ trợ phiên dịch chuyên trách.',
      w3: 'Hệ thống vận hành bài bản', w3Desc: 'Xây dựng quy trình rõ ràng thông qua giao tiếp y tế tùy chỉnh.',
      socialTitle: 'Niềm vui đồng hành,\nCâu chuyện thực tế sống động',
      newsTitle: 'Tin tức & Thông báo', newsMore: 'Xem tất cả tin tức',
      newsItems: [
        { category: 'Thông cáo báo chí', title: 'Follow Korea dẫn đầu kỷ nguyên mới hội tụ Du lịch Y tế toàn cầu và Nội dung K', date: '2026.01.30', img: 'https://cdn.newsroad.co.kr/news/photo/202601/53565_72372_531.jpg', url: 'https://www.newsroad.co.kr/news/articleView.html?idxno=53565' },
        { category: 'Thông cáo báo chí', title: "Follow Korea tổ chức dự án toàn cầu Du lịch Y tế K-Beauty mùa 2", date: '2025.11.13', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6bfafba46f880.jpg', url: 'https://star.mbn.co.kr/entertain/11467451?refer=portal' },
        { category: 'Thông cáo báo chí', title: 'Follow Korea mở thị trường mới cho Du lịch Y tế K-Beauty với Influencer 1 triệu follower', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' }
      ],
      ctaTitle: 'Bắt đầu thu hút\nbệnh nhân toàn cầu ngay.', ctaBtn: 'Liên hệ ngay',
      footerAddr: 'Địa chỉ: Tầng 13 #116, 373 Gangnam-daero, Seocho-gu, Seoul, Hàn Quốc',
      footerBiz: 'Số đăng ký kinh doanh: 696-86-03627',
      footerCeo: 'Giám đốc: Ha Jang-hwan',
      footerContact: 'Liên hệ: contact@followkorea.co.kr',
      footerCopy: 'Copyright ⓒ 2026 Follow Korea All rights reserved.',
      privacy: 'Chính sách bảo mật', terms: 'Điều khoản sử dụng'
    },
    RU: {
      heroBadge: 'With Follow Korea',
      heroTitle: 'Индивидуальный медицинский маркетинг\nдля привлечения пациентов со всего мира',
      consultBtn: 'Бесплатная консультация 1:1',
      partnerTitle: 'Вместе с лучшими партнёрами',
      programTitle: 'Создаём впечатления,\nглобальный маркетинг Follow Korea',
      programSub: 'Our Medical Tour Program',
      p1Title: 'Приглашение мировых блогеров', p1Desc: 'Сотрудничаем с известными мировыми блогерами, чтобы рассказать миру о превосходстве корейской медицины и создать живой контент о реальном опыте.',
      p2Title: 'Медицинский опыт в больницах и клиниках', p2Desc: 'Предоставляем оптимальные маршруты и индивидуальные лечебные процессы, чтобы пациенты лично ощутили передовую медицину Кореи.',
      p3Title: 'Контент о процедурах и консультациях', p3Desc: 'Создаём качественные видео и журнальный контент, чтобы максимально повысить доверие и доступность медицинских услуг.',
      p4Title: 'Привлечение потенциальных пациентов', p4Desc: 'Нацеливаемся на пациентов со всего мира, нуждающихся в корейской медицине, с помощью цифрового маркетинга и анализа данных.',
      stat1: 'Уровень удержания', stat1Desc: 'Удовлетворённость партнёров, подтверждённая повторным участием',
      stat2: 'Мировые пациенты', stat2Desc: 'Ежегодный рост числа медицинских туристов', stat2Unit: 'млн', stat2Sub: 'База 2009~2023',
      stat3: 'Сеть партнёров', stat3Desc: 'Ведущие многопрофильные больницы Кореи сотрудничают с нами как стратегические партнёры.',
      whyTitle: 'Ключевая маркетинговая стратегия Follow Korea',
      w1: 'Продвижение на основе доверия', w1Desc: 'Формируем доверие к медицинским услугам на основе реального опыта, а не просто рекламы.',
      w2: 'Ориентация на мирового пациента', w2Desc: 'Создаём среду, сосредоточенную на лечении: от прибытия и передвижения до персонального переводчика.',
      w3: 'Системная организация', w3Desc: 'Выстраиваем чёткие процессы через индивидуальную медицинскую коммуникацию.',
      socialTitle: 'Радость единства,\nживые истории с места событий',
      newsTitle: 'Новости и объявления', newsMore: 'Все новости',
      newsItems: [
        { category: 'Пресс-релиз', title: 'Follow Korea открывает новую эру слияния мирового медтуризма и K-контента', date: '2026.01.30', img: 'https://cdn.newsroad.co.kr/news/photo/202601/53565_72372_531.jpg', url: 'https://www.newsroad.co.kr/news/articleView.html?idxno=53565' },
        { category: 'Пресс-релиз', title: "Follow Korea проводит глобальный проект медтуризма K-Beauty Сезон 2", date: '2025.11.13', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/6bfafba46f880.jpg', url: 'https://star.mbn.co.kr/entertain/11467451?refer=portal' },
        { category: 'Пресс-релиз', title: 'Follow Korea открывает новые рынки медтуризма K-Beauty с блогерами-миллионниками', date: '2025.12.05', img: 'https://cdn.imweb.me/upload/S20260120a0cc4980014ac/ca2bb530535cb.png', url: 'https://mbn.co.kr/news/entertainment/5159843' }
      ],
      ctaTitle: 'Начните привлекать\nпациентов со всего мира.', ctaBtn: 'Оставить заявку',
      footerAddr: 'Адрес: 13 этаж, офис 116, 373 Gangnam-daero, Seocho-gu, Сеул, Корея',
      footerBiz: 'Регистрационный номер: 696-86-03627',
      footerCeo: 'Генеральный директор: Ha Jang-hwan',
      footerContact: 'Контакты: contact@followkorea.co.kr',
      footerCopy: 'Copyright ⓒ 2026 Follow Korea All rights reserved.',
      privacy: 'Политика конфиденциальности', terms: 'Условия использования'
    }
  }[lang];

  const svc = SVC_I18N[lang] || SVC_I18N.EN;

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
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-[1.3] tracking-tight mb-6 drop-shadow-2xl whitespace-pre-line" style={{ color: '#F5F5F5' }}>
                {t.heroTitle}
              </h1>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="text-base md:text-xl lg:text-2xl font-medium text-white/85 mb-10 md:mb-12 max-w-2xl drop-shadow-lg">
                {({ KR: 'Connecting Global Patients to Korean Medical Care', EN: 'Connecting Global Patients to Korean Medical Care', CN: '连接全球患者与韩国顶尖医疗', JP: '世界中の患者を韓国医療へつなぐ', ID: 'Menghubungkan Pasien Global dengan Layanan Medis Korea', AR: 'نربط المرضى من حول العالم بالرعاية الطبية الكورية', KH: 'ភ្ជាប់អ្នកជំងឺទូទាំងពិភពលោក ជាមួយសេវាវេជ្ជសាស្ត្រកូរ៉េ', VI: 'Kết nối bệnh nhân toàn cầu với Y tế Hàn Quốc', RU: 'Соединяем пациентов со всего мира с медициной Кореи' } as Record<string, string>)[lang]}
              </p>
            </Reveal>
            <Reveal delay={0.5}>
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

      {/* 01-B. Our Services — 3개 제품 허브 */}
      <section id="services" className="py-16 md:py-28 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto scroll-mt-24">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="text-[#5a82c2] font-black text-sm tracking-[0.3em] uppercase mb-4 block">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight whitespace-pre-line leading-[1.2]">{svc.title}</h2>
            <p className="text-gray-400 mt-5 text-base md:text-lg font-medium max-w-2xl mx-auto">{svc.sub}</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {svc.items.map((it, i) => {
            const featured = i === 0;
            return (
            <Reveal key={i} delay={i * 0.1}>
              <a
                href={SVC_LINKS[i]}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col h-full relative rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 ${featured ? 'bg-gradient-to-br from-[#5a82c2] to-[#41608f] text-white shadow-2xl shadow-[#5a82c2]/30 hover:from-[#6b93d4] hover:to-[#466a9e] hover:shadow-[#5a82c2]/50' : 'bg-white border border-[#5a82c2]/15 shadow-xl shadow-[#5a82c2]/[0.06] hover:bg-[#eef3fb] hover:border-[#5a82c2]/45 hover:shadow-2xl hover:shadow-[#5a82c2]/20'}`}
              >
                {it.tag && <span className={`self-start text-[11px] font-black px-3 py-1.5 rounded-full mb-5 uppercase tracking-wider ${featured ? 'bg-white/20 text-white' : 'text-[#5a82c2] bg-[#5a82c2]/10'}`}>{it.tag}</span>}
                {featured ? (
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-[30px] font-black tracking-tight leading-[1.15]">{AGENCY_ERP[lang] || AGENCY_ERP.EN}</h3>
                    <span className="block text-sm font-bold text-white/70 mt-1.5">{it.t}</span>
                  </div>
                ) : (
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight transition-colors group-hover:text-[#5a82c2]">{it.t}</h3>
                )}
                <p className={`text-sm md:text-[15px] leading-relaxed font-medium flex-1 ${featured ? 'text-white/85' : 'text-gray-500'}`}>{it.d}</p>
                <span className={`mt-7 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm md:text-base transition-all group-hover:gap-3 ${featured ? 'bg-white text-[#5a82c2] group-hover:bg-blue-50' : 'bg-[#5a82c2] text-white group-hover:bg-[#4a6da3]'}`}>
                  {it.c}
                  <span className="iconify transition-transform" data-icon="solar:arrow-right-linear"></span>
                </span>
              </a>
            </Reveal>
          );})}
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

      {/* 02-1. Business Portfolio — 5대 프로젝트 (최상단 배치) */}
      <BusinessSection lang={lang} />

      {/* 02-2. Execution Roadmap — 7~12월 타임라인 */}
      {/* <RoadmapSection lang={lang} /> */}

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
                  <div className="flex items-start gap-2 mb-4 md:mb-6">
                    <span className="iconify text-lg md:text-xl text-[#5a82c2] mt-0.5 shrink-0" data-icon="solar:alt-arrow-right-linear"></span>
                    <h4 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 break-keep">{item.title}</h4>
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
                    {stat.unit && <span className={`text-xl md:text-3xl ms-1.5 font-black whitespace-pre ${stat.color === 'blue' ? 'text-white/60' : 'text-[#5a82c2]'}`}>{stat.unit}</span>}
                  </div>
                  {stat.subLabel && <p className={`text-base md:text-lg font-bold mt-2 ${stat.color === 'blue' ? 'text-white/50' : 'text-gray-400'}`}>{stat.subLabel}</p>}
                  <p className={`mt-4 md:mt-6 font-medium leading-relaxed ${stat.color === 'blue' ? 'text-[#5a82c2]/10 uppercase tracking-[0.2em] text-xs md:text-sm' : 'text-gray-500 text-base md:text-lg'}`}>{stat.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 04-1. Performance — 통합 매출·수익 요약 (실적은 하단 유지) */}
      {/* <PnlSection lang={lang} /> */}

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
                    <p className="text-white text-xl md:text-2xl font-bold mt-2">{({ KR: '세계가 주목하는 한국 의료,\n팔로우코리아가 연결합니다.', EN: 'Global attention on K-Medical,\nFollow Korea connects you.', CN: '全球聚焦的韩国医疗，\n由 Follow Korea 连接世界。', JP: '世界が注目する韓国医療、\nFollow Koreaがつなぎます。', ID: 'Medis Korea yang menjadi sorotan dunia,\nFollow Korea menghubungkan Anda.', AR: 'الطب الكوري محط أنظار العالم،\nوFollow Korea تصلك به.', KH: 'វេជ្ជសាស្ត្រកូរ៉េដែលពិភពលោកកំពុងចាប់អារម្មណ៍,\nFollow Korea ភ្ជាប់អ្នក។', VI: 'Y tế Hàn Quốc được thế giới chú ý,\nFollow Korea kết nối bạn.', RU: 'Корейская медицина в центре внимания мира,\nFollow Korea соединяет вас.' } as Record<string, string>)[lang]}</p>
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
                  <p className="flex items-start gap-2">
                    <span className="iconify text-gray-300 mt-1" data-icon="solar:medal-ribbon-star-linear"></span>
                    <span>{({KR:'외국인환자 유치업 등록',EN:'Foreign Patient Attraction License',CN:'外国患者招引业登记',JP:'外国人患者誘致業登録',ID:'Izin Penarik Pasien Asing',AR:'ترخيص استقطاب المرضى الأجانب',KH:'អាជ្ញាបណ្ណទាក់ទាញអ្នកជំងឺបរទេស',VI:'Giấy phép thu hút bệnh nhân nước ngoài',RU:'Лицензия на привлечение иностранных пациентов'} as Record<string,string>)[lang]}: 제 A-2026-01-01-06622 호 (2026.01.21~2029.01.20)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="iconify text-gray-300 mt-1" data-icon="solar:suitcase-tag-linear"></span>
                    <span>{({KR:'관광사업 등록',EN:'Tourism Business Reg.',CN:'旅游业登记',JP:'観光事業登録',ID:'Reg. Bisnis Pariwisata',AR:'تسجيل أعمال السياحة',KH:'ការចុះបញ្ជីអាជីវកម្មទេសចរណ៍',VI:'ĐK kinh doanh du lịch',RU:'Рег. турбизнеса'} as Record<string,string>)[lang]}: 종합여행업 제 2026-000022 호</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="iconify text-gray-300 mt-1" data-icon="solar:global-linear"></span>
                    <span>{({KR:'중국 현지법인',EN:'China Subsidiary',CN:'中国当地法人',JP:'中国現地法人',ID:'Anak Perusahaan Tiongkok',AR:'الشركة الفرعية في الصين',KH:'ក្រុមហ៊ុនបុត្រសម្ព័ន្ធនៅចិន',VI:'Công ty con tại Trung Quốc',RU:'Дочерняя компания в Китае'} as Record<string,string>)[lang]}: 悦集江南（上海）商务咨询有限公司</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="iconify text-gray-300 mt-1" data-icon="solar:letter-linear"></span>
                    <span>{t.footerContact}</span>
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
