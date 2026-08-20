import React, { useState, useEffect, useRef } from 'react';
import { LanguageCode } from '../App';
import { HOSPITAL_DATA, HospDetail } from './hospitalData';

// 제휴 병원 네트워크 — 글로벌 플랫폼(followkorea.kr)의 병원 데이터 스냅샷을 내장한 큐레이션 섹션.
// 카드 클릭 시 홈페이지 안에서 상세 모달 표시(외부 이동 없음). 수가표·병원 홈페이지 링크는 노출하지 않음.

const THUMB_BASE = 'https://followkorea.kr/';

// 병원 카드 배지 색상 — 마케팅 배지(BEST·추천·인기·NEW·VIP·프리미엄)는 색으로 구분하고,
// 진료 분야 배지(줄기세포·검진전문 등)는 한 가지 차분한 톤으로 통일해 화면이 산만해지지 않게 한다.
// ⚠ Tailwind JIT는 소스에 적힌 문자열 그대로만 클래스를 생성한다.
//    조합(`bg-amber-500` + `/90`)으로 만들면 클래스가 누락되므로 완성형으로 적어둘 것.
const BADGE_COLOR: Record<string, string> = {
  'BEST': 'bg-amber-500/90',
  '추천': 'bg-[#5a82c2]/90',
  '인기': 'bg-rose-500/90',
  'NEW': 'bg-emerald-600/90',
  'VIP': 'bg-violet-600/90',
  '프리미엄': 'bg-neutral-900/90',
};
const BADGE_DEFAULT = 'bg-slate-700/90';
const badgeCls = (badge?: string) =>
  `${BADGE_COLOR[badge || ''] || BADGE_DEFAULT} backdrop-blur text-white text-[10px] font-black tracking-wider px-2.5 py-1 rounded-md uppercase shadow-sm`;

// 초기 노출 8곳 — 2026-08-20 사용자 지시로 주력 병원을 앞으로 배치
const FEATURED: string[] = [
  '신상성형외과', 'VC성형외과의원', '드림성형외과', '글로비성형외과', 'KMI한국의학연구소 강남센터',
  '더이다의원', '차움', '원진성형외과피부과의원',
];

// 카테고리 필터 — 병원 cat 값의 부분일치로 매칭
const CAT_KEYS = ['all', '성형외과', '피부', '줄기세포', '안과', '여성의학', '체형', '항노화', '한방', '치과', '검진', '신경과'] as const;
type CatKey = typeof CAT_KEYS[number];

const dataLang = (lang: LanguageCode): 'kr' | 'en' | 'zh' => (lang === 'KR' ? 'kr' : lang === 'CN' ? 'zh' : 'en');
const locLang = (lang: LanguageCode): 'ko' | 'en' | 'zh' => (lang === 'KR' ? 'ko' : lang === 'CN' ? 'zh' : 'en');

interface Labels {
  eyebrow: string; title: string; sub: string;
  statHosp: string; statDoc: string; statField: string; statLang: string;
  cats: Record<CatKey, string>;
  showAll: string; collapse: string;
  mOverview: string; mTreats: string; mDoctors: string; mHours: string; mLoc: string; mClose: string;
}

const I18N: Record<LanguageCode, Labels> = {
  KR: { eyebrow: 'Partner Hospitals', title: '강남 프리미엄 제휴 병원 네트워크', sub: '팔로우코리아가 직접 검증하고 계약한 병원들과 함께합니다. 전 병원 다국어 상담·사후관리 연동.',
    statHosp: '개 제휴 병원', statDoc: '명 소속 의료진', statField: '개 진료 분야', statLang: '개 언어 지원',
    cats: { all: '전체', 성형외과: '성형외과', 피부: '피부', 줄기세포: '줄기세포', 안과: '안과', 여성의학: '여성의학', 체형: '체형', 항노화: '항노화', 한방: '한방', 치과: '치과', 검진: '건강검진', 신경과: '신경과' },
    showAll: '제휴 병원 전체 보기', collapse: '접기',
    mOverview: '소개', mTreats: '주요 시술', mDoctors: '진료진', mHours: '진료 시간', mLoc: '위치', mClose: '닫기' },
  EN: { eyebrow: 'Partner Hospitals', title: 'Premium Partner Hospital Network in Gangnam', sub: 'Hospitals directly verified and contracted by Follow Korea — multilingual consultation and aftercare across every partner.',
    statHosp: 'Partner Hospitals', statDoc: 'Medical Staff', statField: 'Specialties', statLang: 'Languages',
    cats: { all: 'All', 성형외과: 'Plastic Surgery', 피부: 'Skin', 줄기세포: 'Stem Cell', 안과: 'Eye', 여성의학: "Women's Health", 체형: 'Body', 항노화: 'Anti-aging', 한방: 'Korean Med', 치과: 'Dental', 검진: 'Health Checkup', 신경과: 'Neurology' },
    showAll: 'View All Partner Hospitals', collapse: 'Collapse',
    mOverview: 'About', mTreats: 'Key Procedures', mDoctors: 'Medical Team', mHours: 'Hours', mLoc: 'Location', mClose: 'Close' },
  CN: { eyebrow: 'Partner Hospitals', title: '江南高端合作医院网络', sub: 'Follow Korea 亲自考察并签约的合作医院 — 全部医院支持多语言咨询与术后管理。',
    statHosp: '家合作医院', statDoc: '名医疗人员', statField: '个诊疗领域', statLang: '种语言支持',
    cats: { all: '全部', 성형외과: '整形外科', 피부: '皮肤', 줄기세포: '干细胞', 안과: '眼科', 여성의학: '女性医学', 체형: '体型', 항노화: '抗衰老', 한방: '韩方', 치과: '牙科', 검진: '健康体检', 신경과: '神经内科' },
    showAll: '查看全部合作医院', collapse: '收起',
    mOverview: '介绍', mTreats: '主要项目', mDoctors: '医疗团队', mHours: '营业时间', mLoc: '位置', mClose: '关闭' },
  JP: { eyebrow: 'Partner Hospitals', title: '江南プレミアム提携病院ネットワーク', sub: 'Follow Koreaが直接検証・契約した病院と提携。全病院で多言語相談・アフターケアに対応。',
    statHosp: '提携病院', statDoc: '名の医療スタッフ', statField: '診療分野', statLang: '言語対応',
    cats: { all: 'すべて', 성형외과: '美容外科', 피부: '皮膚', 줄기세포: '幹細胞', 안과: '眼科', 여성의학: '婦人科', 체형: 'ボディ', 항노화: 'アンチエイジング', 한방: '韓方', 치과: '歯科', 검진: '健康診断', 신경과: '神経内科' },
    showAll: '提携病院をすべて見る', collapse: '閉じる',
    mOverview: '紹介', mTreats: '主な施術', mDoctors: '医療スタッフ', mHours: '診療時間', mLoc: '所在地', mClose: '閉じる' },
  ID: { eyebrow: 'Partner Hospitals', title: 'Jaringan Rumah Sakit Mitra Premium di Gangnam', sub: 'Rumah sakit yang diverifikasi dan dikontrak langsung oleh Follow Korea — konsultasi multibahasa dan perawatan lanjutan.',
    statHosp: 'RS Mitra', statDoc: 'Staf Medis', statField: 'Spesialisasi', statLang: 'Bahasa',
    cats: { all: 'Semua', 성형외과: 'Bedah Plastik', 피부: 'Kulit', 줄기세포: 'Sel Punca', 안과: 'Mata', 여성의학: 'Kesehatan Wanita', 체형: 'Tubuh', 항노화: 'Anti-aging', 한방: 'Pengobatan Korea', 치과: 'Gigi', 검진: 'Medical Check Up', 신경과: 'Neurologi' },
    showAll: 'Lihat Semua RS Mitra', collapse: 'Tutup',
    mOverview: 'Tentang', mTreats: 'Prosedur Utama', mDoctors: 'Tim Medis', mHours: 'Jam Buka', mLoc: 'Lokasi', mClose: 'Tutup' },
  AR: { eyebrow: 'Partner Hospitals', title: 'شبكة المستشفيات الشريكة المتميزة في جانجنام', sub: 'مستشفيات تحققت منها Follow Korea وتعاقدت معها مباشرة — استشارات متعددة اللغات ورعاية لاحقة.',
    statHosp: 'مستشفى شريك', statDoc: 'كادر طبي', statField: 'تخصصات', statLang: 'لغات',
    cats: { all: 'الكل', 성형외과: 'جراحة التجميل', 피부: 'الجلدية', 줄기세포: 'الخلايا الجذعية', 안과: 'العيون', 여성의학: 'صحة المرأة', 체형: 'نحت الجسم', 항노화: 'مكافحة الشيخوخة', 한방: 'الطب الكوري', 치과: 'الأسنان', 검진: 'الفحص الطبي', 신경과: 'الأعصاب' },
    showAll: 'عرض جميع المستشفيات الشريكة', collapse: 'طيّ',
    mOverview: 'نبذة', mTreats: 'الإجراءات الرئيسية', mDoctors: 'الفريق الطبي', mHours: 'ساعات العمل', mLoc: 'الموقع', mClose: 'إغلاق' },
  KH: { eyebrow: 'Partner Hospitals', title: 'បណ្ដាញមន្ទីរពេទ្យដៃគូលំដាប់ខ្ពស់នៅ Gangnam', sub: 'មន្ទីរពេទ្យដែល Follow Korea បានផ្ទៀងផ្ទាត់ និងចុះកិច្ចសន្យាដោយផ្ទាល់ — ការប្រឹក្សាច្រើនភាសា និងការថែទាំក្រោយព្យាបាល។',
    statHosp: 'មន្ទីរពេទ្យដៃគូ', statDoc: 'បុគ្គលិកពេទ្យ', statField: 'ជំនាញ', statLang: 'ភាសា',
    cats: { all: 'ទាំងអស់', 성형외과: 'វះកាត់កែសម្ផស្ស', 피부: 'សើស្បែក', 줄기세포: 'កោសិកាដើម', 안과: 'ភ្នែក', 여성의학: 'សុខភាពស្ត្រី', 체형: 'រាងកាយ', 항노화: 'ប្រឆាំងភាពចាស់', 한방: 'ឱសថកូរ៉េ', 치과: 'ធ្មេញ', 검진: 'ពិនិត្យសុខភាព', 신경과: 'ប្រព័ន្ធសរសៃប្រសាទ' },
    showAll: 'មើលមន្ទីរពេទ្យដៃគូទាំងអស់', collapse: 'បិទ',
    mOverview: 'អំពី', mTreats: 'សេវាសំខាន់ៗ', mDoctors: 'ក្រុមគ្រូពេទ្យ', mHours: 'ម៉ោងធ្វើការ', mLoc: 'ទីតាំង', mClose: 'បិទ' },
  VI: { eyebrow: 'Partner Hospitals', title: 'Mạng lưới bệnh viện đối tác cao cấp tại Gangnam', sub: 'Các bệnh viện được Follow Korea trực tiếp thẩm định và ký hợp đồng — tư vấn đa ngôn ngữ và chăm sóc hậu phẫu.',
    statHosp: 'Bệnh viện đối tác', statDoc: 'Nhân viên y tế', statField: 'Chuyên khoa', statLang: 'Ngôn ngữ',
    cats: { all: 'Tất cả', 성형외과: 'PT thẩm mỹ', 피부: 'Da liễu', 줄기세포: 'Tế bào gốc', 안과: 'Mắt', 여성의학: 'Sức khỏe phụ nữ', 체형: 'Vóc dáng', 항노화: 'Chống lão hóa', 한방: 'Y học Hàn Quốc', 치과: 'Nha khoa', 검진: 'Khám sức khỏe', 신경과: 'Thần kinh' },
    showAll: 'Xem tất cả bệnh viện đối tác', collapse: 'Thu gọn',
    mOverview: 'Giới thiệu', mTreats: 'Dịch vụ chính', mDoctors: 'Đội ngũ y tế', mHours: 'Giờ làm việc', mLoc: 'Vị trí', mClose: 'Đóng' },
  RU: { eyebrow: 'Partner Hospitals', title: 'Сеть премиальных клиник-партнёров в Каннаме', sub: 'Клиники, лично проверенные и законтрактованные Follow Korea — многоязычные консультации и постпроцедурный уход.',
    statHosp: 'клиник-партнёров', statDoc: 'медицинских специалистов', statField: 'направлений', statLang: 'языков',
    cats: { all: 'Все', 성형외과: 'Пластика', 피부: 'Кожа', 줄기세포: 'Стволовые клетки', 안과: 'Офтальмология', 여성의학: 'Женское здоровье', 체형: 'Тело', 항노화: 'Anti-age', 한방: 'Корейская медицина', 치과: 'Стоматология', 검진: 'Чекап', 신경과: 'Неврология' },
    showAll: 'Все клиники-партнёры', collapse: 'Свернуть',
    mOverview: 'О клинике', mTreats: 'Основные процедуры', mDoctors: 'Врачи', mHours: 'Часы работы', mLoc: 'Расположение', mClose: 'Закрыть' },
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

const HospCard: React.FC<{ h: HospDetail; dl: 'kr' | 'en' | 'zh'; krBreak: string; onOpen: () => void }> = ({ h, dl, krBreak, onOpen }) => (
  <button type="button" onClick={onOpen}
    className="group block w-full text-left bg-white border border-gray-100 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-gray-200/80 hover:border-[#5a82c2]/30 cursor-pointer">
    <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
      {h.thumb ? (
        <img src={THUMB_BASE + h.thumb} alt={h.name[dl]} loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-4xl bg-gray-50">{h.icon || '🏥'}</div>
      )}
      {h.badge && (
        <span className={`absolute top-2.5 left-2.5 ${badgeCls(h.badge)}`}>{h.badge}</span>
      )}
    </div>
    <div className="p-4 md:p-5">
      <h3 className={`text-[14.5px] md:text-[15.5px] font-extrabold text-gray-900 leading-snug ${krBreak}`}>{h.name[dl]}</h3>
      <p className="text-[11.5px] md:text-xs text-gray-400 font-medium mt-1">{h.dept[dl]}</p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {h.treats[dl].slice(0, 3).map((tg, j) => (
          <span key={j} className="bg-gray-50 text-gray-500 text-[10.5px] font-medium px-2 py-1 rounded-md">{tg}</span>
        ))}
      </div>
    </div>
  </button>
);

const PartnerHospitals: React.FC<{ lang: LanguageCode }> = ({ lang }) => {
  const t = I18N[lang] || I18N.EN;
  const dl = dataLang(lang);
  const ll = locLang(lang);
  const krBreak = lang === 'KR' ? 'break-keep' : '';
  const [cat, setCat] = useState<CatKey>('all');
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<HospDetail | null>(null);

  // 모달 열림 중 배경 스크롤 잠금 + ESC 닫기
  useEffect(() => {
    if (!selected) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
  }, [selected]);

  const filtered = cat === 'all' ? HOSPITAL_DATA : HOSPITAL_DATA.filter(h => h.cat.includes(cat));
  const featured = FEATURED.map(n => HOSPITAL_DATA.find(h => h.name.kr === n)).filter(Boolean) as HospDetail[];
  const list = cat !== 'all' || expanded ? filtered : featured;

  const nHosp = HOSPITAL_DATA.length;
  const nDoc = HOSPITAL_DATA.reduce((a, h) => a + h.doctors.length, 0);
  // 진료 분야 수는 카테고리 필터에서 자동 산출 (분야 추가 시 숫자를 따로 고치지 않도록)
  const stats: [string, string][] = [[String(nHosp), t.statHosp], [String(nDoc), t.statDoc], [String(CAT_KEYS.length - 1), t.statField], ['10', t.statLang]];

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
          {stats.map(([n, label], i) => (
            <div key={i} className="bg-gray-50 rounded-full px-6 py-2.5 text-sm text-gray-500 font-medium">
              <span className="text-gray-900 font-black text-base mr-1">{n}</span>{label}
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CAT_KEYS.map((c) => (
            <button key={c} type="button" onClick={() => setCat(c)}
              className={`text-[13px] px-4 py-2 rounded-full border transition-colors ${cat === c ? 'bg-gray-900 text-white border-gray-900 font-bold' : 'border-gray-200 text-gray-500 hover:border-[#5a82c2] hover:text-[#5a82c2]'}`}>
              {t.cats[c]}
            </button>
          ))}
        </div>
      </Reveal>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {list.map((h, i) => (
          <Reveal key={h.name.kr} delay={(i % 4) * 0.08}>
            <HospCard h={h} dl={dl} krBreak={krBreak} onOpen={() => setSelected(h)} />
          </Reveal>
        ))}
      </div>
      {cat === 'all' && (
        <Reveal delay={0.2}>
          <div className="text-center mt-10 md:mt-14">
            <button type="button" onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold hover:bg-[#5a82c2] transition-all group shadow-xl text-sm md:text-base">
              <span>{expanded ? t.collapse : `${t.showAll} (${nHosp})`}</span>
              <span className={`iconify text-lg transition-transform ${expanded ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} data-icon="solar:alt-arrow-down-linear"></span>
            </button>
          </div>
        </Reveal>
      )}

      {/* 병원 상세 모달 — 홈페이지 내에서 표시, 외부 이동 없음 */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center" onClick={() => setSelected(null)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div onClick={(e) => e.stopPropagation()}
            className="relative bg-white w-full md:max-w-2xl max-h-[92vh] md:max-h-[85vh] rounded-t-3xl md:rounded-3xl overflow-hidden flex flex-col shadow-2xl">
            <div className="relative shrink-0">
              <div className="aspect-[16/8] bg-gray-100 overflow-hidden">
                {selected.thumb ? (
                  <img src={THUMB_BASE + selected.thumb} alt={selected.name[dl]} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl bg-gray-50">{selected.icon || '🏥'}</div>
                )}
              </div>
              <button type="button" onClick={() => setSelected(null)} aria-label={t.mClose}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center hover:bg-black/70 transition-colors">
                <span className="iconify text-lg" data-icon="solar:close-circle-linear"></span>
              </button>
              {selected.badge && (
                <span className={`absolute top-3 left-3 ${badgeCls(selected.badge)}`}>{selected.badge}</span>
              )}
            </div>
            <div className="overflow-y-auto p-6 md:p-8">
              <h3 className={`text-xl md:text-2xl font-black text-gray-900 ${krBreak}`}>{selected.name[dl]}</h3>
              <p className="text-sm text-gray-400 font-medium mt-1">{selected.dept[dl]}</p>
              <div className="flex items-center gap-2 mt-3 text-xs text-gray-500 font-medium">
                <span className="iconify text-[#5a82c2]" data-icon="solar:map-point-linear"></span>
                <span>{selected.loc[ll]}</span>
              </div>

              {selected.overview[dl] && (
                <div className="mt-6">
                  <h4 className="text-xs font-black tracking-[0.2em] uppercase text-[#5a82c2] mb-2">{t.mOverview}</h4>
                  <p className={`text-sm text-gray-600 leading-relaxed ${krBreak}`}>{selected.overview[dl]}</p>
                </div>
              )}

              {selected.treats[dl].length > 0 && (
                <div className="mt-6">
                  <h4 className="text-xs font-black tracking-[0.2em] uppercase text-[#5a82c2] mb-2">{t.mTreats}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.treats[dl].map((tg, j) => (
                      <span key={j} className="bg-gray-50 text-gray-600 text-xs font-medium px-2.5 py-1.5 rounded-lg">{tg}</span>
                    ))}
                  </div>
                </div>
              )}

              {selected.doctors.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-xs font-black tracking-[0.2em] uppercase text-[#5a82c2] mb-3">{t.mDoctors} · {selected.doctors.length}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selected.doctors.map((d, j) => (
                      <div key={j} className="bg-gray-50 rounded-xl px-4 py-3">
                        <p className="text-sm font-bold text-gray-900">{d.name} <span className="text-xs font-medium text-gray-400 ml-1">{d.title}</span></p>
                        {d.spec.length > 0 && (
                          <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">{d.spec.join(' · ')}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selected.hours && (
                <div className="mt-6 mb-2">
                  <h4 className="text-xs font-black tracking-[0.2em] uppercase text-[#5a82c2] mb-2">{t.mHours}</h4>
                  <p className="text-sm text-gray-600">{selected.hours}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PartnerHospitals;
