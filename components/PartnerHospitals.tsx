import React, { useState, useEffect, useRef } from 'react';
import { LanguageCode } from '../App';
import { HOSPITAL_DATA, HospDetail } from './hospitalData';

// 제휴 병원 네트워크 — 글로벌 플랫폼(followkorea.kr)의 병원 데이터 스냅샷을 내장한 큐레이션 섹션.
// 카드 클릭 시 홈페이지 안에서 상세 모달 표시(외부 이동 없음). 수가표·병원 홈페이지 링크는 노출하지 않음.

const THUMB_BASE = 'https://followkorea.kr/';

// 병원 카드 배지 색상 — 마케팅 배지(BEST·추천·인기·NEW·VIP·프리미엄)는 색으로 구분하고,
// 진료 분야 배지(줄기세포·검진전문 등)는 한 가지 차분한 톤으로 통일해 화면이 산만해지지 않게 한다.
// Tailwind JIT는 소스에 적힌 문자열 그대로만 클래스를 생성한다.
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

// 초기 노출 12곳(4×3 그리드) — 2026-09-17 사용자 지시로 갯수 고정
const FEATURED: string[] = [
  '신상성형외과', 'VC성형외과의원', '드림성형외과', '글로비성형외과', '삼성서울병원',
  '더이다의원', '차움', '원진성형외과피부과의원', '타토아의원', '포브의원', '차이성형외과',
  '멜론성형외과',
];

// 카테고리 필터 — 병원 cat 값의 부분일치로 매칭
// '기타 서비스' = 헤어살롱·뷰티살롱·사진 스튜디오 등 비의료 제휴처(라이프스타일) — 병원과 구분해 별도 그룹으로 표시
const CAT_KEYS = ['all', '피부·성형', '줄기세포', '안과', '여성의학', '체형', '다이어트', '항노화', '한방', '치과', '검진', '신경과', '하지정맥류'] as const;
const LIFE_CAT = '기타 서비스';
type CatKey = typeof CAT_KEYS[number];

// 지역 필터 (2026-10-24) — 병원 loc에서 지역 자동 추출, 병원 있는 지역만 칩 표시
const REGION_KEYS = ['all', '서울', '경기·인천', '부산', '제주', '대구'] as const;
type RegionKey = typeof REGION_KEYS[number];
const REGION_LABELS: Record<RegionKey, Record<LanguageCode, string>> = {
  'all':      { KR: '전국', EN: 'All', CN: '全国', JP: '全国', ID: 'Semua', AR: 'الكل', KH: 'ទាំងអស់', VI: 'Toàn quốc', RU: 'Все' },
  '서울':     { KR: '서울', EN: 'Seoul', CN: '首尔', JP: 'ソウル', ID: 'Seoul', AR: 'سيول', KH: 'សេអ៊ូល', VI: 'Seoul', RU: 'Сеул' },
  '경기·인천': { KR: '경기·인천', EN: 'Gyeonggi·Incheon', CN: '京畿·仁川', JP: '京畿·仁川', ID: 'Gyeonggi·Incheon', AR: 'كيونغي·إنتشون', KH: 'Gyeonggi', VI: 'Gyeonggi·Incheon', RU: 'Кёнгидо·Инчхон' },
  '부산':     { KR: '부산', EN: 'Busan', CN: '釜山', JP: '釜山', ID: 'Busan', AR: 'بوسان', KH: 'Busan', VI: 'Busan', RU: 'Пусан' },
  '제주':     { KR: '제주', EN: 'Jeju', CN: '济州', JP: '済州', ID: 'Jeju', AR: 'جيجو', KH: 'Jeju', VI: 'Jeju', RU: 'Чеджу' },
  '대구':     { KR: '대구', EN: 'Daegu', CN: '大邱', JP: '大邱', ID: 'Daegu', AR: 'دايغو', KH: 'Daegu', VI: 'Daegu', RU: 'Тэгу' },
};
const regionOf = (h: HospDetail): RegionKey => {
  const s = (((h.loc && (h.loc as any).ko) || '') + ' ' + ((h.loc && (h.loc as any).en) || '')).toLowerCase();
  if (/부산|busan/.test(s)) return '부산';
  if (/제주|jeju/.test(s)) return '제주';
  if (/대구|daegu/.test(s)) return '대구';
  if (/부천|경기|인천|수원|성남|고양|용인|안양|김포|화성|의정부|광명|시흥|평택|bucheon|gyeonggi|incheon|suwon/.test(s)) return '경기·인천';
  return '서울';
};

// 공식 등록·참가 기관 (제휴 서비스 섹션의 외부 링크 설명 카드, 2026-10-24) — 예약이 아니라 해당 공식 사이트로 이동
const OFFICIAL_ORGS_TITLE: Record<string, string> = {
  KR: '공식 등록·참가 기관', EN: 'Official Registration & Partners', CN: '官方登记·参与机构', JP: '公式登録·参加機関',
  ID: 'Registrasi Resmi & Mitra', AR: 'التسجيل الرسمي والشركاء', KH: 'ការចុះឈ្មោះផ្លូវការ', VI: 'Đăng ký chính thức & Đối tác', RU: 'Офиц. регистрация и партнёры',
};
const OFFICIAL_ORGS: { id: string; tag: string; url: string; name: Record<string, string>; desc: Record<string, string> }[] = [
  {
    id: 'sitmmt', tag: 'B2B TRAVEL MART', url: 'https://sitmmt.org/sitmmt',
    name: {
      KR: 'SITMMT 서울의료관광 국제트래블마트', EN: "SITMMT – Seoul Int'l Travel Mart for Medical Tourism",
      CN: 'SITMMT 首尔国际医疗观光旅游展', JP: 'SITMMT ソウル国際医療観光トラベルマート',
    },
    desc: {
      KR: '서울시·한국보건산업진흥원이 주최하는 외국인환자 유치 B2B 국제 트래블마트로, 해외 바이어와 국내 의료·유치기관이 1:1 비즈니스 매칭을 진행합니다.',
      EN: 'A B2B international travel mart for inbound medical tourism hosted in Seoul, connecting overseas buyers with Korean medical & facilitation providers through 1:1 business matching.',
      CN: '由首尔市·韩国保健产业振兴院主办的外国患者招引B2B国际旅游展，海外买家与韩国医疗·招引机构进行1对1商务配对。',
      JP: 'ソウル市·韓国保健産業振興院が主催する外国人患者誘致のB2B国際トラベルマート。海外バイヤーと韓国の医療·誘致機関が1対1の商談を行います。',
    },
  },
  {
    id: 'medicalkorea', tag: 'OFFICIAL REGISTRY · KHIDI', url: 'https://www.medicalkorea.or.kr/korp/main.do',
    name: {
      KR: 'MEDICAL KOREA 외국인환자 유치정보시스템', EN: 'MEDICAL KOREA – Foreign Patient Attraction System (KHIDI)',
      CN: 'MEDICAL KOREA 外国患者招引信息系统（KHIDI）', JP: 'MEDICAL KOREA 外国人患者誘致情報システム（KHIDI）',
    },
    desc: {
      KR: '한국보건산업진흥원(KHIDI)이 운영하는 외국인환자 유치기관 공식 등록·관리 시스템입니다. 팔로우코리아는 정식 등록된 외국인환자 유치사업자입니다.',
      EN: 'The official registration & management system for foreign-patient attraction agencies, operated by KHIDI. Follow Korea is an officially registered foreign-patient attraction business.',
      CN: '由韩国保健产业振兴院（KHIDI）运营的外国患者招引机构官方登记·管理系统。Follow Korea为正式登记的外国患者招引企业。',
      JP: '韓国保健産業振興院（KHIDI）が運営する外国人患者誘致機関の公式登録·管理システム。Follow Koreaは正式登録された外国人患者誘致事業者です。',
    },
  },
  {
    id: 'kha', tag: 'KOREAN HOSPITAL ASSOCIATION', url: 'https://www.kha.or.kr/kha_home/index.do',
    name: {
      KR: '대한병원협회 (KHA)', EN: 'Korean Hospital Association (KHA)',
      CN: '大韩医院协会 (KHA)', JP: '大韓病院協会 (KHA)',
    },
    desc: {
      KR: '전국 병원을 대표하는 대한병원협회 공식 사이트. 병원 정책·제도, 의료 질 향상과 국제 교류를 이끄는 대한민국 병원계 대표 단체입니다.',
      EN: 'Official site of the Korean Hospital Association, the representative body of hospitals in Korea leading hospital policy, quality improvement and international exchange.',
      CN: '代表韩国全国医院的大韩医院协会官方网站，引领医院政策制度、医疗质量提升与国际交流的韩国医院界代表机构。',
      JP: '韓国全国の病院を代表する大韓病院協会の公式サイト。病院政策·制度、医療の質向上と国際交流をリードする韓国病院界の代表団体です。',
    },
  },
  {
    id: 'whc2026', tag: 'WHC 2026 · SEOUL', url: 'https://worldhospitalcongress.org/ko/',
    name: {
      KR: '제49차 세계병원대회 (WHC 2026, 서울)', EN: '49th IHF World Hospital Congress (WHC 2026, Seoul)',
      CN: '第49届世界医院大会 (WHC 2026, 首尔)', JP: '第49回世界病院大会 (WHC 2026, ソウル)',
    },
    desc: {
      KR: '국제병원연맹(IHF)과 대한병원협회가 공동 주최하는 세계 최대 병원·보건의료 국제학술대회. 2026년 10월 20~22일 서울 코엑스 마곡에서 90개국 2,000여 명이 참가합니다.',
      EN: "The world's leading congress for hospital & healthcare leaders, co-hosted by the IHF and the Korean Hospital Association. Seoul (COEX Magok), Oct 20–22, 2026, with 2,000+ delegates from 90 countries.",
      CN: '由国际医院联盟(IHF)与大韩医院协会共同主办的全球顶级医院·医疗保健国际学术大会。2026年10月20~22日于首尔COEX麻谷举办，来自90个国家的2,000余名代表参加。',
      JP: '国際病院連盟(IHF)と大韓病院協会が共同主催する世界最大の病院·ヘルスケア国際学術大会。2026年10月20~22日、ソウル·COEXマゴクにて90か国·2,000名以上が参加します。',
    },
  },
];

const dataLang = (lang: LanguageCode): 'kr' | 'en' | 'zh' => (lang === 'KR' ? 'kr' : lang === 'CN' ? 'zh' : 'en');
const locLang = (lang: LanguageCode): 'ko' | 'en' | 'zh' => (lang === 'KR' ? 'ko' : lang === 'CN' ? 'zh' : 'en');

interface Labels {
  eyebrow: string; title: string; sub: string;
  statHosp: string; statDoc: string; statField: string; statLang: string;
  cats: Record<CatKey, string>;
  showAll: string; collapse: string;
  svcEyebrow: string; svcTitle: string; svcSub: string;
  mOverview: string; mTreats: string; mDoctors: string; mHours: string; mLoc: string; mClose: string;
}

const I18N: Record<LanguageCode, Labels> = {
  KR: { eyebrow: 'Partner Hospitals', title: '강남 프리미엄 제휴 병원 네트워크', sub: '팔로우코리아가 직접 검증하고 계약한 병원들과 함께합니다. 전 병원 다국어 상담·사후관리 연동.',
    statHosp: '개 제휴 병원', statDoc: '명 소속 의료진', statField: '개 진료 분야', statLang: '개 언어 지원',
    cats: { all: '전체', '피부·성형': '피부·성형', 줄기세포: '줄기세포', 안과: '안과', 여성의학: '여성의학', 체형: '체형', 다이어트: '다이어트', 항노화: '항노화', 한방: '한방', 치과: '치과', 검진: '건강검진', 하지정맥류: '하지정맥류', 신경과: '신경과' },
    showAll: '제휴 병원 전체 보기', collapse: '접기',
    svcEyebrow: 'Partner Services', svcTitle: '제휴 서비스 — 헤어·뷰티·스튜디오', svcSub: '병원이 아닌 라이프스타일 제휴처 · 시술 전후 헤어·메이크업·촬영을 연결해 드립니다',
    mOverview: '소개', mTreats: '주요 시술', mDoctors: '진료진', mHours: '진료 시간', mLoc: '위치', mClose: '닫기' },
  EN: { eyebrow: 'Partner Hospitals', title: 'Premium Partner Hospital Network in Gangnam', sub: 'Hospitals directly verified and contracted by Follow Korea — multilingual consultation and aftercare across every partner.',
    statHosp: 'Partner Hospitals', statDoc: 'Medical Staff', statField: 'Specialties', statLang: 'Languages',
    cats: { all: 'All', '피부·성형': 'Skin & Plastic Surgery', 줄기세포: 'Stem Cell', 안과: 'Eye', 여성의학: "Women's Health", 체형: 'Body', 다이어트: 'Diet', 항노화: 'Anti-aging', 한방: 'Korean Med', 치과: 'Dental', 검진: 'Health Checkup', 하지정맥류: 'Varicose Veins', 신경과: 'Neurology' },
    showAll: 'View All Partner Hospitals', collapse: 'Collapse',
    svcEyebrow: 'Partner Services', svcTitle: 'Partner Services — Hair · Beauty · Studio', svcSub: 'Non-medical lifestyle partners for hair, makeup and photo shoots around your treatment',
    mOverview: 'About', mTreats: 'Key Procedures', mDoctors: 'Medical Team', mHours: 'Hours', mLoc: 'Location', mClose: 'Close' },
  CN: { eyebrow: 'Partner Hospitals', title: '江南高端合作医院网络', sub: 'Follow Korea 亲自考察并签约的合作医院 — 全部医院支持多语言咨询与术后管理。',
    statHosp: '家合作医院', statDoc: '名医疗人员', statField: '个诊疗领域', statLang: '种语言支持',
    cats: { all: '全部', '피부·성형': '皮肤·整形', 줄기세포: '干细胞', 안과: '眼科', 여성의학: '女性医学', 체형: '体型', 다이어트: '减肥', 항노화: '抗衰老', 한방: '韩方', 치과: '牙科', 검진: '健康体检', 하지정맥류: '下肢静脉曲张', 신경과: '神经内科' },
    showAll: '查看全部合作医院', collapse: '收起',
    svcEyebrow: 'Partner Services', svcTitle: '合作服务 — 美发·美容·摄影', svcSub: '非医疗类生活方式合作伙伴 · 围绕诊疗日程安排美发、化妆与写真拍摄',
    mOverview: '介绍', mTreats: '主要项目', mDoctors: '医疗团队', mHours: '营业时间', mLoc: '位置', mClose: '关闭' },
  JP: { eyebrow: 'Partner Hospitals', title: '江南プレミアム提携病院ネットワーク', sub: 'Follow Koreaが直接検証・契約した病院と提携。全病院で多言語相談・アフターケアに対応。',
    statHosp: '提携病院', statDoc: '名の医療スタッフ', statField: '診療分野', statLang: '言語対応',
    cats: { all: 'すべて', '피부·성형': '皮膚・整形', 줄기세포: '幹細胞', 안과: '眼科', 여성의학: '婦人科', 체형: 'ボディ', 다이어트: 'ダイエット', 항노화: 'アンチエイジング', 한방: '韓方', 치과: '歯科', 검진: '健康診断', 하지정맥류: '下肢静脈瘤', 신경과: '神経内科' },
    showAll: '提携病院をすべて見る', collapse: '閉じる',
    svcEyebrow: 'Partner Services', svcTitle: '提携サービス — ヘア・ビューティー・スタジオ', svcSub: '医療機関ではないライフスタイル提携先 · 施術前後のヘア・メイク・撮影を手配',
    mOverview: '紹介', mTreats: '主な施術', mDoctors: '医療スタッフ', mHours: '診療時間', mLoc: '所在地', mClose: '閉じる' },
  ID: { eyebrow: 'Partner Hospitals', title: 'Jaringan Rumah Sakit Mitra Premium di Gangnam', sub: 'Rumah sakit yang diverifikasi dan dikontrak langsung oleh Follow Korea — konsultasi multibahasa dan perawatan lanjutan.',
    statHosp: 'RS Mitra', statDoc: 'Staf Medis', statField: 'Spesialisasi', statLang: 'Bahasa',
    cats: { all: 'Semua', '피부·성형': 'Kulit & Bedah Plastik', 줄기세포: 'Sel Punca', 안과: 'Mata', 여성의학: 'Kesehatan Wanita', 체형: 'Tubuh', 다이어트: 'Diet', 항노화: 'Anti-aging', 한방: 'Pengobatan Korea', 치과: 'Gigi', 검진: 'Medical Check Up', 하지정맥류: 'Varises', 신경과: 'Neurologi' },
    showAll: 'Lihat Semua RS Mitra', collapse: 'Tutup',
    svcEyebrow: 'Partner Services', svcTitle: 'Layanan Mitra — Salon · Kecantikan · Studio', svcSub: 'Mitra gaya hidup non-medis: salon, rias, dan studio foto seputar jadwal perawatan Anda',
    mOverview: 'Tentang', mTreats: 'Prosedur Utama', mDoctors: 'Tim Medis', mHours: 'Jam Buka', mLoc: 'Lokasi', mClose: 'Tutup' },
  AR: { eyebrow: 'Partner Hospitals', title: 'شبكة المستشفيات الشريكة المتميزة في جانجنام', sub: 'مستشفيات تحققت منها Follow Korea وتعاقدت معها مباشرة — استشارات متعددة اللغات ورعاية لاحقة.',
    statHosp: 'مستشفى شريك', statDoc: 'كادر طبي', statField: 'تخصصات', statLang: 'لغات',
    cats: { all: 'الكل', '피부·성형': 'البشرة والتجميل', 줄기세포: 'الخلايا الجذعية', 안과: 'العيون', 여성의학: 'صحة المرأة', 체형: 'نحت الجسم', 다이어트: 'التخسيس', 항노화: 'مكافحة الشيخوخة', 한방: 'الطب الكوري', 치과: 'الأسنان', 검진: 'الفحص الطبي', 하지정맥류: 'الدوالي', 신경과: 'الأعصاب' },
    showAll: 'عرض جميع المستشفيات الشريكة', collapse: 'طيّ',
    svcEyebrow: 'Partner Services', svcTitle: 'خدمات شريكة — صالونات وتجميل واستوديو', svcSub: 'شركاء نمط حياة غير طبيين: تصفيف الشعر والمكياج والتصوير حول موعد علاجك',
    mOverview: 'نبذة', mTreats: 'الإجراءات الرئيسية', mDoctors: 'الفريق الطبي', mHours: 'ساعات العمل', mLoc: 'الموقع', mClose: 'إغلاق' },
  KH: { eyebrow: 'Partner Hospitals', title: 'បណ្ដាញមន្ទីរពេទ្យដៃគូលំដាប់ខ្ពស់នៅ Gangnam', sub: 'មន្ទីរពេទ្យដែល Follow Korea បានផ្ទៀងផ្ទាត់ និងចុះកិច្ចសន្យាដោយផ្ទាល់ — ការប្រឹក្សាច្រើនភាសា និងការថែទាំក្រោយព្យាបាល។',
    statHosp: 'មន្ទីរពេទ្យដៃគូ', statDoc: 'បុគ្គលិកពេទ្យ', statField: 'ជំនាញ', statLang: 'ភាសា',
    cats: { all: 'ទាំងអស់', '피부·성형': 'ស្បែក & កែសម្ផស្ស', 줄기세포: 'កោសិកាដើម', 안과: 'ភ្នែក', 여성의학: 'សុខភាពស្ត្រី', 체형: 'រាងកាយ', 다이어트: 'សម្រកទម្ងន់', 항노화: 'ប្រឆាំងភាពចាស់', 한방: 'ឱសថកូរ៉េ', 치과: 'ធ្មេញ', 검진: 'ពិនិត្យសុខភាព', 하지정맥류: 'សរសៃឈាមរីក', 신경과: 'ប្រព័ន្ធសរសៃប្រសាទ' },
    showAll: 'មើលមន្ទីរពេទ្យដៃគូទាំងអស់', collapse: 'បិទ',
    svcEyebrow: 'Partner Services', svcTitle: 'សេវាកម្មដៃគូ — សក់ · សម្រស់ · ស្ទូឌីយោ', svcSub: 'ដៃគូរបៀបរស់នៅមិនមែនវេជ្ជសាស្ត្រ៖ សាឡនសក់ ការតុបតែង និងស្ទូឌីយោថតរូប',
    mOverview: 'អំពី', mTreats: 'សេវាសំខាន់ៗ', mDoctors: 'ក្រុមគ្រូពេទ្យ', mHours: 'ម៉ោងធ្វើការ', mLoc: 'ទីតាំង', mClose: 'បិទ' },
  VI: { eyebrow: 'Partner Hospitals', title: 'Mạng lưới bệnh viện đối tác cao cấp tại Gangnam', sub: 'Các bệnh viện được Follow Korea trực tiếp thẩm định và ký hợp đồng — tư vấn đa ngôn ngữ và chăm sóc hậu phẫu.',
    statHosp: 'Bệnh viện đối tác', statDoc: 'Nhân viên y tế', statField: 'Chuyên khoa', statLang: 'Ngôn ngữ',
    cats: { all: 'Tất cả', '피부·성형': 'Da liễu & Thẩm mỹ', 줄기세포: 'Tế bào gốc', 안과: 'Mắt', 여성의학: 'Sức khỏe phụ nữ', 체형: 'Vóc dáng', 다이어트: 'Giảm cân', 항노화: 'Chống lão hóa', 한방: 'Y học Hàn Quốc', 치과: 'Nha khoa', 검진: 'Khám sức khỏe', 하지정맥류: 'Suy giãn tĩnh mạch', 신경과: 'Thần kinh' },
    showAll: 'Xem tất cả bệnh viện đối tác', collapse: 'Thu gọn',
    svcEyebrow: 'Partner Services', svcTitle: 'Dịch vụ đối tác — Tóc · Làm đẹp · Studio', svcSub: 'Đối tác phong cách sống ngoài y tế: salon tóc, trang điểm và studio ảnh quanh lịch điều trị',
    mOverview: 'Giới thiệu', mTreats: 'Dịch vụ chính', mDoctors: 'Đội ngũ y tế', mHours: 'Giờ làm việc', mLoc: 'Vị trí', mClose: 'Đóng' },
  RU: { eyebrow: 'Partner Hospitals', title: 'Сеть премиальных клиник-партнёров в Каннаме', sub: 'Клиники, лично проверенные и законтрактованные Follow Korea — многоязычные консультации и постпроцедурный уход.',
    statHosp: 'клиник-партнёров', statDoc: 'медицинских специалистов', statField: 'направлений', statLang: 'языков',
    cats: { all: 'Все', '피부·성형': 'Кожа и пластика', 줄기세포: 'Стволовые клетки', 안과: 'Офтальмология', 여성의학: 'Женское здоровье', 체형: 'Тело', 다이어트: 'Похудение', 항노화: 'Anti-age', 한방: 'Корейская медицина', 치과: 'Стоматология', 검진: 'Чекап', 하지정맥류: 'Варикоз', 신경과: 'Неврология' },
    showAll: 'Все клиники-партнёры', collapse: 'Свернуть',
    svcEyebrow: 'Partner Services', svcTitle: 'Партнёрские сервисы — салоны и студии', svcSub: 'Немедицинские lifestyle-партнёры: парикмахерские, макияж и фотостудии рядом с вашими процедурами',
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
        <div className="w-full h-full flex items-center justify-center bg-gray-50"><span className="text-4xl font-black tracking-tight text-[#5a82c2]/35">{(h.name[dl] || '').trim().charAt(0)}</span></div>
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
  const [region, setRegion] = useState<RegionKey>('all');
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

  const isLife = (h: HospDetail) => h.cat.includes(LIFE_CAT);
  // 제휴 병원(의료기관)과 제휴 서비스(헤어·뷰티·스튜디오)를 분리 — 서비스는 아래 별도 그룹에만 표시
  const HOSPITALS = HOSPITAL_DATA.filter(h => !isLife(h));
  const SERVICES = HOSPITAL_DATA.filter(isLife);
  const presentRegions = REGION_KEYS.filter(r => r === 'all' || HOSPITALS.some(h => regionOf(h) === r));
  const showRegions = presentRegions.length >= 3; // 전국 + 실제 지역 2개 이상일 때만 지역 행 노출
  const filtered = HOSPITALS.filter(h => (cat === 'all' || h.cat.includes(cat)) && (region === 'all' || regionOf(h) === region));
  const featured = FEATURED.map(n => HOSPITALS.find(h => h.name.kr === n)).filter(Boolean) as HospDetail[];
  const list = (cat !== 'all' || region !== 'all' || expanded) ? filtered : featured;

  const nHosp = HOSPITALS.length;
  const nDoc = HOSPITALS.reduce((a, h) => a + h.doctors.length, 0);
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
      {showRegions && (
        <Reveal delay={0.17}>
          <div className="flex flex-wrap justify-center items-center gap-2 mb-10 -mt-4">
            <span className="text-[12px] text-gray-400 font-bold mr-1">{lang === 'KR' ? '지역' : lang === 'CN' ? '地区' : lang === 'JP' ? '地域' : 'Region'}</span>
            {presentRegions.map((r) => (
              <button key={r} type="button" onClick={() => setRegion(r)}
                className={`text-[13px] px-4 py-2 rounded-full border transition-colors ${region === r ? 'bg-[#5a82c2] text-white border-[#5a82c2] font-bold' : 'border-gray-200 text-gray-500 hover:border-[#5a82c2] hover:text-[#5a82c2]'}`}>
                {REGION_LABELS[r][lang] || REGION_LABELS[r].EN}
              </button>
            ))}
          </div>
        </Reveal>
      )}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {list.map((h, i) => (
          <Reveal key={h.name.kr} delay={(i % 4) * 0.08}>
            <HospCard h={h} dl={dl} krBreak={krBreak} onOpen={() => setSelected(h)} />
          </Reveal>
        ))}
      </div>
      {cat === 'all' && region === 'all' && (
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

      {/* 제휴 서비스 — 병원이 아닌 라이프스타일 제휴처(헤어·뷰티·스튜디오) 별도 그룹 */}
      {SERVICES.length > 0 && (
        <div className="mt-20 md:mt-28 pt-14 md:pt-20 border-t border-gray-100">
          <Reveal>
            <div className="text-center mb-10 md:mb-12">
              <span className="text-[#5a82c2] font-black text-sm tracking-[0.3em] uppercase mb-4 block">{t.svcEyebrow}</span>
              <h3 className={`text-2xl md:text-4xl font-black text-gray-900 tracking-tight leading-[1.2] ${krBreak}`}>{t.svcTitle}</h3>
              <p className={`text-gray-400 mt-4 text-base md:text-lg font-medium max-w-2xl mx-auto ${krBreak}`}>{t.svcSub}</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {SERVICES.map((h, i) => (
              <Reveal key={h.name.kr} delay={(i % 4) * 0.08}>
                <HospCard h={h} dl={dl} krBreak={krBreak} onOpen={() => setSelected(h)} />
              </Reveal>
            ))}
          </div>
          {/* 공식 등록·참가 기관 — 외부 공식 사이트로 이동하는 설명 카드 (2026-10-24) */}
          <Reveal delay={0.1}>
            <div className="mt-12 md:mt-16">
              <h4 className={`text-center text-[13px] font-black text-gray-400 tracking-[0.22em] uppercase mb-6 ${krBreak}`}>{OFFICIAL_ORGS_TITLE[lang] || OFFICIAL_ORGS_TITLE.EN}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto">
                {OFFICIAL_ORGS.map((o) => (
                  <a key={o.id} href={o.url} target="_blank" rel="noopener noreferrer"
                    className="group block rounded-2xl border border-gray-200 bg-white p-5 md:p-6 hover:border-[#5a82c2] hover:shadow-lg transition-all">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[10.5px] font-black text-[#5a82c2] tracking-wider uppercase">{o.tag}</span>
                      <span className="iconify text-lg text-gray-300 group-hover:text-[#5a82c2] transition-colors" data-icon="solar:arrow-right-up-linear"></span>
                    </div>
                    <div className={`font-black text-gray-900 text-[15px] md:text-base mb-2 leading-snug ${krBreak}`}>{o.name[lang] || o.name.EN}</div>
                    <p className={`text-gray-500 text-[13px] leading-relaxed ${krBreak}`}>{o.desc[lang] || o.desc.EN}</p>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
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
                  <div className="w-full h-full flex items-center justify-center bg-gray-50"><span className="text-6xl font-black tracking-tight text-[#5a82c2]/35">{(selected.name[dl] || '').trim().charAt(0)}</span></div>
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
