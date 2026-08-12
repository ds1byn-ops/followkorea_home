import React, { useState, useEffect, useRef } from 'react';
import { LanguageCode } from '../App';

// 제휴 병원 네트워크 — 글로벌 플랫폼(followkorea.kr)의 병원 데이터·썸네일을 참조하는 큐레이션 섹션.
// 카드 8곳만 노출하고 전체 목록은 플랫폼으로 위임(병원 추가 시 플랫폼만 갱신하면 됨).

const PLATFORM_URL = 'https://followkorea.kr';
const THUMB = (f: string) => `${PLATFORM_URL}/hthumb/${f}`;

interface Hosp {
  thumb: string;
  badge?: { KR: string; EN: string; CN: string };
  name: { kr: string; en: string; zh: string };
  dept: { kr: string; en: string; zh: string };
  tags: { kr: string[]; en: string[]; zh: string[] };
}

const HOSPITALS: Hosp[] = [
  { thumb: THUMB('wonjin.jpg'), badge: { KR: 'BEST', EN: 'BEST', CN: 'BEST' },
    name: { kr: '원진성형외과피부과', en: 'Wonjin Plastic Surgery', zh: '原辰整形外科皮肤科' },
    dept: { kr: '성형외과 · 피부과 · 줄기세포', en: 'Plastic Surgery · Dermatology · Stem Cell', zh: '整形外科 · 皮肤科 · 干细胞' },
    tags: { kr: ['윤곽', '양악', '가슴'], en: ['Contouring', 'Jaw', 'Breast'], zh: ['轮廓', '正颌', '胸部'] } },
  { thumb: THUMB('ida.jpg'), badge: { KR: 'NEW', EN: 'NEW', CN: 'NEW' },
    name: { kr: '더이다의원', en: 'The ida Clinic', zh: 'ida医疗美容诊所' },
    dept: { kr: '피부 · 미용성형', en: 'Skin · Aesthetic', zh: '皮肤 · 医美' },
    tags: { kr: ['눈', '코', '리프팅'], en: ['Eye', 'Nose', 'Lifting'], zh: ['眼部', '鼻部', '提升'] } },
  { thumb: THUMB('chaum.jpg'), badge: { KR: '프리미엄', EN: 'PREMIUM', CN: '高端' },
    name: { kr: '차움의원', en: 'Chaum', zh: '차움(Chaum)医院' },
    dept: { kr: '프리미엄 건강검진', en: 'Premium Health Check-up', zh: '高端健康体检' },
    tags: { kr: ['종합검진', '항노화'], en: ['Check-up', 'Anti-aging'], zh: ['综合体检', '抗衰老'] } },
  { thumb: THUMB('kseye.jpg'),
    name: { kr: '강남조은눈안과', en: 'KS Eye Clinic', zh: '江南好眼睛眼科' },
    dept: { kr: '안과', en: 'Ophthalmology', zh: '眼科' },
    tags: { kr: ['스마일라식', '백내장'], en: ['SMILE LASIK', 'Cataract'], zh: ['全飞秒', '白内障'] } },
  { thumb: THUMB('shinsang.jpg'), badge: { KR: 'BEST', EN: 'BEST', CN: 'BEST' },
    name: { kr: '신상성형외과', en: 'Shinsang Plastic Surgery', zh: '新常整形外科' },
    dept: { kr: '성형외과 · 피부', en: 'Plastic Surgery · Skin', zh: '整形外科 · 皮肤' },
    tags: { kr: ['거상', '지방흡입'], en: ['Lifting', 'Liposuction'], zh: ['面部提升', '吸脂'] } },
  { thumb: THUMB('gu.jpg'), badge: { KR: '줄기세포', EN: 'STEM CELL', CN: '干细胞' },
    name: { kr: '지유의원', en: 'GU Clinic', zh: 'GU医院' },
    dept: { kr: '리프팅 · 필러 · 줄기세포', en: 'Lifting · Filler · Stem Cell', zh: '提升 · 填充 · 干细胞' },
    tags: { kr: ['리프팅', '줄기세포'], en: ['Lifting', 'Stem Cell'], zh: ['提升', '干细胞'] } },
  { thumb: THUMB('faceline.jpg'),
    name: { kr: '페이스라인성형외과', en: 'Faceline Plastic Surgery', zh: 'Faceline整形外科' },
    dept: { kr: '성형외과', en: 'Plastic Surgery', zh: '整形外科' },
    tags: { kr: ['윤곽', '양악'], en: ['Contouring', 'Jaw'], zh: ['轮廓', '正颌'] } },
  { thumb: THUMB('dream.jpg'), badge: { KR: '추천', EN: 'PICK', CN: '推荐' },
    name: { kr: '드림성형외과', en: 'Dream Plastic Surgery', zh: 'Dream整形外科' },
    dept: { kr: '성형외과', en: 'Plastic Surgery', zh: '整形外科' },
    tags: { kr: ['눈', '코', '가슴'], en: ['Eye', 'Nose', 'Breast'], zh: ['眼部', '鼻部', '胸部'] } },
];

// 언어 → 병원 데이터 언어 매핑 (kr/zh 외 언어는 영어 표기)
const dataLang = (lang: LanguageCode): 'kr' | 'en' | 'zh' => (lang === 'KR' ? 'kr' : lang === 'CN' ? 'zh' : 'en');
const badgeLang = (lang: LanguageCode): 'KR' | 'EN' | 'CN' => (lang === 'KR' ? 'KR' : lang === 'CN' ? 'CN' : 'EN');

const I18N: Record<LanguageCode, { eyebrow: string; title: string; sub: string; stats: [string, string][]; cats: string[]; cta: string; ctaHint: string }> = {
  KR: { eyebrow: 'Partner Hospitals', title: '강남 프리미엄 제휴 병원 네트워크', sub: '팔로우코리아가 직접 검증하고 계약한 병원들과 함께합니다. 전 병원 다국어 상담·수가 관리·사후관리 연동.',
    stats: [['26', '개 제휴 병원'], ['196', '명 소속 의료진'], ['8', '개 진료 분야'], ['10', '개 언어 지원']],
    cats: ['전체', '성형외과', '피부과', '치과', '안과', '건강검진', '줄기세포', '산부인과'], cta: '제휴 병원 26곳 전체 보기', ctaHint: '글로벌 플랫폼에서 진료진·수가·예약까지 확인하세요' },
  EN: { eyebrow: 'Partner Hospitals', title: 'Premium Partner Hospital Network in Gangnam', sub: 'Hospitals directly verified and contracted by Follow Korea — multilingual consultation, pricing, and aftercare across every partner.',
    stats: [['26', 'Partner Hospitals'], ['196', 'Medical Staff'], ['8', 'Specialties'], ['10', 'Languages']],
    cats: ['All', 'Plastic Surgery', 'Dermatology', 'Dental', 'Eye', 'Check-up', 'Stem Cell', 'OB/GYN'], cta: 'View All 26 Partner Hospitals', ctaHint: 'Doctors, pricing, and booking on our global platform' },
  CN: { eyebrow: 'Partner Hospitals', title: '江南高端合作医院网络', sub: 'Follow Korea 亲自考察并签约的合作医院 — 全部医院支持多语言咨询、价格管理与术后管理。',
    stats: [['26', '家合作医院'], ['196', '名医疗人员'], ['8', '个诊疗领域'], ['10', '种语言支持']],
    cats: ['全部', '整形外科', '皮肤科', '牙科', '眼科', '健康体检', '干细胞', '妇产科'], cta: '查看全部26家合作医院', ctaHint: '在全球平台查看医生·价格·预约' },
  JP: { eyebrow: 'Partner Hospitals', title: '江南プレミアム提携病院ネットワーク', sub: 'Follow Koreaが直接検証・契約した病院と提携。全病院で多言語相談・料金管理・アフターケアに対応。',
    stats: [['26', '提携病院'], ['196', '名の医療スタッフ'], ['8', '診療分野'], ['10', '言語対応']],
    cats: ['すべて', '美容外科', '皮膚科', '歯科', '眼科', '健康診断', '幹細胞', '産婦人科'], cta: '提携病院26院をすべて見る', ctaHint: 'グローバルプラットフォームで医師・料金・予約まで' },
  ID: { eyebrow: 'Partner Hospitals', title: 'Jaringan Rumah Sakit Mitra Premium di Gangnam', sub: 'Rumah sakit yang diverifikasi dan dikontrak langsung oleh Follow Korea — konsultasi multibahasa, harga, dan perawatan lanjutan.',
    stats: [['26', 'RS Mitra'], ['196', 'Staf Medis'], ['8', 'Spesialisasi'], ['10', 'Bahasa']],
    cats: ['Semua', 'Bedah Plastik', 'Dermatologi', 'Gigi', 'Mata', 'Medical Check-up', 'Sel Punca', 'Obgyn'], cta: 'Lihat Semua 26 RS Mitra', ctaHint: 'Dokter, harga, dan reservasi di platform global kami' },
  AR: { eyebrow: 'Partner Hospitals', title: 'شبكة المستشفيات الشريكة المتميزة في جانجنام', sub: 'مستشفيات تحققت منها Follow Korea وتعاقدت معها مباشرة — استشارات متعددة اللغات وإدارة الأسعار والرعاية اللاحقة.',
    stats: [['26', 'مستشفى شريك'], ['196', 'كادر طبي'], ['8', 'تخصصات'], ['10', 'لغات']],
    cats: ['الكل', 'جراحة التجميل', 'الجلدية', 'الأسنان', 'العيون', 'الفحص الشامل', 'الخلايا الجذعية', 'النساء والتوليد'], cta: 'عرض جميع المستشفيات الشريكة (26)', ctaHint: 'الأطباء والأسعار والحجز على منصتنا العالمية' },
  KH: { eyebrow: 'Partner Hospitals', title: 'បណ្ដាញមន្ទីរពេទ្យដៃគូលំដាប់ខ្ពស់នៅ Gangnam', sub: 'មន្ទីរពេទ្យដែល Follow Korea បានផ្ទៀងផ្ទាត់ និងចុះកិច្ចសន្យាដោយផ្ទាល់ — ការប្រឹក្សាច្រើនភាសា តម្លៃ និងការថែទាំក្រោយព្យាបាល។',
    stats: [['26', 'មន្ទីរពេទ្យដៃគូ'], ['196', 'បុគ្គលិកពេទ្យ'], ['8', 'ជំនាញ'], ['10', 'ភាសា']],
    cats: ['ទាំងអស់', 'វះកាត់កែសម្ផស្ស', 'សើស្បែក', 'ធ្មេញ', 'ភ្នែក', 'ពិនិត្យសុខភាព', 'កោសិកាដើម', 'សម្ភព'], cta: 'មើលមន្ទីរពេទ្យដៃគូទាំង 26', ctaHint: 'គ្រូពេទ្យ តម្លៃ និងការកក់ នៅលើវេទិកាសកលរបស់យើង' },
  VI: { eyebrow: 'Partner Hospitals', title: 'Mạng lưới bệnh viện đối tác cao cấp tại Gangnam', sub: 'Các bệnh viện được Follow Korea trực tiếp thẩm định và ký hợp đồng — tư vấn đa ngôn ngữ, quản lý giá và chăm sóc hậu phẫu.',
    stats: [['26', 'Bệnh viện đối tác'], ['196', 'Nhân viên y tế'], ['8', 'Chuyên khoa'], ['10', 'Ngôn ngữ']],
    cats: ['Tất cả', 'Phẫu thuật thẩm mỹ', 'Da liễu', 'Nha khoa', 'Mắt', 'Khám sức khỏe', 'Tế bào gốc', 'Sản phụ khoa'], cta: 'Xem tất cả 26 bệnh viện đối tác', ctaHint: 'Bác sĩ, bảng giá và đặt lịch trên nền tảng toàn cầu' },
  RU: { eyebrow: 'Partner Hospitals', title: 'Сеть премиальных клиник-партнёров в Каннаме', sub: 'Клиники, лично проверенные и законтрактованные Follow Korea — многоязычные консультации, цены и постпроцедурный уход.',
    stats: [['26', 'клиник-партнёров'], ['196', 'медицинских специалистов'], ['8', 'направлений'], ['10', 'языков']],
    cats: ['Все', 'Пластическая хирургия', 'Дерматология', 'Стоматология', 'Офтальмология', 'Чек-ап', 'Стволовые клетки', 'Гинекология'], cta: 'Все 26 клиник-партнёров', ctaHint: 'Врачи, цены и запись на нашей глобальной платформе' },
};

const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); ob.unobserve(e.target); } }, { threshold: 0.15 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(40px)', transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s` }}>
      {children}
    </div>
  );
};

const PartnerHospitals: React.FC<{ lang: LanguageCode }> = ({ lang }) => {
  const t = I18N[lang] || I18N.EN;
  const dl = dataLang(lang);
  const bl = badgeLang(lang);
  const krBreak = lang === 'KR' ? 'break-keep' : '';
  return (
    <section id="partner-hospitals" className="py-16 md:py-28 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto scroll-mt-24">
      <Reveal>
        <div className="text-center mb-10 md:mb-12">
          <span className="text-[#5a82c2] font-black text-sm tracking-[0.3em] uppercase mb-4 block">{t.eyebrow}</span>
          <h2 className={`text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.2] ${krBreak}`}>{t.title}</h2>
          <p className={`text-gray-400 mt-5 text-base md:text-lg font-medium max-w-2xl mx-auto ${krBreak}`}>{t.sub}</p>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {t.stats.map(([n, label], i) => (
            <div key={i} className="bg-gray-50 rounded-full px-6 py-2.5 text-sm text-gray-500 font-medium">
              <span className="text-gray-900 font-black text-base mr-1">{n}</span>{label}
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {t.cats.map((c, i) => (
            <a key={i} href={PLATFORM_URL} target="_blank" rel="noopener noreferrer"
              className={`text-[13px] px-4 py-2 rounded-full border transition-colors ${i === 0 ? 'bg-gray-900 text-white border-gray-900 font-bold' : 'border-gray-200 text-gray-500 hover:border-[#5a82c2] hover:text-[#5a82c2]'}`}>
              {c}
            </a>
          ))}
        </div>
      </Reveal>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {HOSPITALS.map((h, i) => (
          <Reveal key={i} delay={(i % 4) * 0.08}>
            <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer"
              className="group block bg-white border border-gray-100 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-gray-200/80 hover:border-[#5a82c2]/30">
              <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                <img src={h.thumb} alt={h.name[dl]} loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {h.badge && (
                  <span className="absolute top-2.5 left-2.5 bg-gray-900/85 backdrop-blur text-white text-[10px] font-black tracking-wider px-2.5 py-1 rounded-md uppercase">{h.badge[bl]}</span>
                )}
              </div>
              <div className="p-4 md:p-5">
                <h3 className={`text-[14.5px] md:text-[15.5px] font-extrabold text-gray-900 leading-snug ${krBreak}`}>{h.name[dl]}</h3>
                <p className="text-[11.5px] md:text-xs text-gray-400 font-medium mt-1">{h.dept[dl]}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {h.tags[dl].map((tg, j) => (
                    <span key={j} className="bg-gray-50 text-gray-500 text-[10.5px] font-medium px-2 py-1 rounded-md">{tg}</span>
                  ))}
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <div className="text-center mt-10 md:mt-14">
          <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold hover:bg-[#5a82c2] transition-all group shadow-xl text-sm md:text-base">
            <span>{t.cta}</span>
            <span className="iconify text-lg group-hover:translate-x-1 transition-transform" data-icon="solar:arrow-right-linear"></span>
          </a>
          <p className="text-xs text-gray-300 font-medium mt-4">{t.ctaHint}</p>
        </div>
      </Reveal>
    </section>
  );
};

export default PartnerHospitals;
