import React, { useEffect, useState } from 'react';
import { HOSPITAL_DATA } from './hospitalData';
// 제휴 병원 수 = 의료기관만(헤어·뷰티·스튜디오 '기타 서비스' 제외) — 병원 추가 시 숫자 자동 반영
const N_HOSP = HOSPITAL_DATA.filter(h => !h.cat.includes('기타 서비스')).length;
import type { LanguageCode } from '../App';

// 홍보 팝업 2종(삼성서울병원 입점 · KIMES BUSAN 2026)을 한 오버레이에 나란히 표시 — 2026-09-18
// 각 카드별 노출 종료일·'오늘 하루 보지 않기' 독립 동작, 모바일에서는 세로 스택.
// 2026-09-22: 추석 인사 팝업 추가(~9/26 단독 노출), 기존 3종은 9/27부터 재노출.
const SMC_HIDE_KEY = 'smc_popup_hide_until';
const SMC_SHOW_UNTIL = '2026-09-30';
const YJ_HIDE_KEY = 'yueji_popup_hide_until';
const YJ_SHOW_UNTIL = '2026-12-31';
const KIMES_HIDE_KEY = 'kimes2026_hide_until';
const KIMES_SHOW_UNTIL = '2026-10-25';
const CS_HIDE_KEY = 'chuseok2026_hide_until';
const CS_SHOW_UNTIL = '2026-09-26';
const OTHERS_SHOW_FROM = '2026-09-27'; // 추석 팝업 기간에는 나머지 팝업 숨김
// 2026-10-28: SMC(9/30)·KIMES(10/25) 노출 종료로 카드가 1장만 남아 덱이 펼쳐지지 않던 문제 —
// 신규 제휴 병원 2종을 추가하고 悦集江南 기간을 연장해 3장 덱으로 복구.
const STEM_HIDE_KEY = 'stem_popup_hide_until';
const STEM_SHOW_UNTIL = '2026-12-31';
const NEWH_HIDE_KEY = 'newhosp_popup_hide_until';
const NEWH_SHOW_UNTIL = '2026-12-31';

type CardText = { badge: string; title: string; sub: string; desc: string; items: string[]; cta: string; invite?: string; today: string; close: string };

const SMC_TEXT: Record<string, CardText> = {
  KR: {
    badge: '신규 입점 안내', title: '삼성서울병원', sub: 'Samsung Medical Center · 서울 일원동',
    desc: '대한민국 대표 상급종합병원 삼성서울병원이\n팔로우코리아 협력 병원으로 합류했습니다.',
    items: ['국제진료센터 통한 다국어 진료 연계', '중증질환 협진 — 암·심장·뇌혈관·양성자치료', '프리미엄 건강검진 프로그램 예약'],
    cta: '진료·검진 상담 신청', today: '오늘 하루 보지 않기', close: '닫기',
  },
  EN: {
    badge: 'New Partner', title: 'Samsung Medical Center', sub: 'Ilwon-dong, Seoul',
    desc: 'Samsung Medical Center, Korea’s leading tertiary hospital,\nhas joined Follow Korea as a partner hospital.',
    items: ['Multilingual care via the International Healthcare Center', 'Severe-condition care — cancer, heart, brain, proton therapy', 'Premium health checkup programs'],
    cta: 'Request a Consultation', today: 'Don’t show again today', close: 'Close',
  },
  CN: {
    badge: '新入驻医院', title: '三星首尔医院', sub: 'Samsung Medical Center · 首尔逸院洞',
    desc: '韩国代表性大型综合医院——三星首尔医院\n正式加入 Follow Korea 合作医院。',
    items: ['通过国际诊疗中心提供多语言诊疗对接', '重症协诊 — 癌症·心脏·脑血管·质子治疗', '高端健康体检项目预约'],
    cta: '申请诊疗·体检咨询', today: '今日不再显示', close: '关闭',
  },
};

const KIMES_TEXT: Record<string, CardText> = {
  KR: {
    badge: '전시회 참가 안내', title: 'KIMES BUSAN 2026', sub: '2026. 10. 23(금)~25(일) · BEXCO 부산 · J405 부스',
    desc: '팔로우코리아가 부산 국제 의료기기·병원설비 전시회에 참가합니다.\n부스에 방문하시면 아래 내용을 직접 시연해 드립니다.',
    items: [`해외환자 유치 플랫폼 · ${N_HOSP}개 제휴 병원`, '병원 운영 SaaS 강남펄스 실화면 데모', '왕홍·KOL+KOC 중국 마케팅 · 중국 진출 상담'],
    cta: '카카오톡으로 미팅 예약',
    invite: '카카오톡으로 미팅을 요청하시면 전시회 초대권을 보내드립니다.',
    today: '오늘 하루 보지 않기', close: '닫기',
  },
  EN: {
    badge: 'Exhibition Notice', title: 'KIMES BUSAN 2026', sub: 'Oct 23–25, 2026 · BEXCO Busan · Booth J405',
    desc: 'Follow Korea is exhibiting at KIMES Busan.\nVisit our booth for a live demo of:',
    items: [`International patient platform · ${N_HOSP} partner hospitals`, 'Gangnam Pulse clinic SaaS live demo', 'China marketing (Wanghong · KOL+KOC) consulting'],
    cta: 'Book a meeting via KakaoTalk',
    invite: 'Request a meeting on KakaoTalk and we will send you a free exhibition pass.',
    today: 'Don’t show again today', close: 'Close',
  },
  CN: {
    badge: '展会参展通知', title: 'KIMES BUSAN 2026', sub: '2026.10.23~25 · 釜山BEXCO · J405展位',
    desc: 'Follow Korea 将参加釜山国际医疗器械展。\n欢迎莅临展位，现场演示：',
    items: ['海外患者引流平台 · 65家合作医院', '医院运营SaaS 江南Pulse 实机演示', '网红·KOL+KOC 中国营销 · 中国市场进入咨询'],
    cta: '通过KakaoTalk预约洽谈',
    invite: '通过KakaoTalk预约洽谈，我们将为您发送展会邀请券。',
    today: '今日不再显示', close: '关闭',
  },
};


const YJ_TEXT: Record<string, CardText> = {
  KR: {
    badge: '중국 법인 설립', title: '悦集江南 상하이 법인', sub: 'Yueji Jiangnan (Shanghai) · 2026. 9. 설립',
    desc: '팔로우코리아가 중국 상하이 현지 법인을 설립했습니다.\n이제 중국 내 직접 마케팅이 가능합니다.',
    items: ['병원 중국 직접 마케팅 — 왕홍·KOL+KOC·샤오홍슈', '뷰티·화장품 브랜드 중국 진출 대행(콰징 입점)', '중국 플랫폼 계정 개설·운영 대행 상담'],
    cta: '중국 마케팅 상담 신청', today: '오늘 하루 보지 않기', close: '닫기',
  },
  EN: {
    badge: 'China Subsidiary', title: 'Yueji Jiangnan Shanghai', sub: 'Established Sep 2026, Shanghai',
    desc: 'Follow Korea has established its own subsidiary in Shanghai.\nDirect marketing inside China is now available.',
    items: ['Direct China marketing for clinics — Wanghong, KOL+KOC, Xiaohongshu', 'China market entry for beauty brands (cross-border e-commerce)', 'Chinese platform account setup & operation'],
    cta: 'Request China Marketing Consultation', today: 'Don’t show again today', close: 'Close',
  },
  CN: {
    badge: '中国法人成立', title: '悦集江南(上海)', sub: '2026年9月 于上海成立',
    desc: 'Follow Korea 在上海设立自有法人，\n现可在中国境内开展直接营销业务。',
    items: ['医院中国直营营销 — 网红·KOL+KOC·小红书', '美妆品牌中国市场进入代理(跨境电商入驻)', '中国平台账号开设·运营代理咨询'],
    cta: '申请中国营销咨询', today: '今日不再显示', close: '关闭',
  },
};

const STEM_TEXT: Record<string, CardText> = {
  KR: {
    badge: '신규 진료 분야', title: '줄기세포 · 세포치료', sub: '첨단재생의료 실시기관 네트워크',
    desc: '줄기세포·면역세포 치료 제휴 병원이 확대되었습니다.\n국내 첨단재생의료 실시기관을 포함합니다.',
    items: ['미병원 · 셀리닉 · 셀이즈랩 · 연세아이미스템 — 세포치료 중점', 'NK세포 면역치료 · 줄기세포 · 혈장교환', '사전 상담 후 치료 계획·비용 안내'],
    cta: '줄기세포 치료 상담 신청', today: '오늘 하루 보지 않기', close: '닫기',
  },
  EN: {
    badge: 'New Specialty', title: 'Stem Cell · Cell Therapy', sub: 'Advanced regenerative medicine network',
    desc: 'Our network of stem cell and immune cell therapy clinics\nhas expanded, including licensed regenerative medicine centers.',
    items: ['Mee Hospital · Cellinique · Cellis LAB · Yonsei IMIStem', 'NK cell immunotherapy · stem cells · plasma exchange', 'Treatment plan and cost guidance after consultation'],
    cta: 'Request a Stem Cell Consultation', today: 'Don’t show again today', close: 'Close',
  },
  CN: {
    badge: '新增诊疗领域', title: '干细胞 · 细胞治疗', sub: '尖端再生医疗实施机构网络',
    desc: '干细胞·免疫细胞治疗合作医院已扩充，\n其中包含韩国尖端再生医疗实施机构。',
    items: ['Mee医院 · Cellinique · Cellis LAB · 延世IMIStem — 细胞治疗中心', 'NK细胞免疫治疗 · 干细胞 · 血浆置换', '咨询后提供治疗方案与费用说明'],
    cta: '申请干细胞治疗咨询', today: '今日不再显示', close: '关闭',
  },
};

const NEWH_TEXT: Record<string, CardText> = {
  KR: {
    badge: '신규 제휴 병원', title: `제휴 병원 ${N_HOSP}곳`, sub: '2026. 10. · 진료 분야 · 지역 확대',
    desc: '10월에 제휴 병원이 크게 늘었습니다.\n새로 열린 분야와 지역을 확인해 보세요.',
    items: ['하지정맥류 · 안과 분야 신규 개설', '부산 · 제주 지역 병원 합류', '다이어트 · 바디 컨투어링 전문 의원 추가'],
    cta: '병원 추천 상담 신청', today: '오늘 하루 보지 않기', close: '닫기',
  },
  EN: {
    badge: 'New Partner Hospitals', title: `${N_HOSP} Partner Hospitals`, sub: 'Oct 2026 · New specialties & regions',
    desc: 'Our partner network grew considerably in October.\nSee the newly added specialties and regions.',
    items: ['New specialties — varicose veins & ophthalmology', 'New regions — Busan and Jeju', 'Diet & body contouring clinics added'],
    cta: 'Get a Hospital Recommendation', today: 'Don’t show again today', close: 'Close',
  },
  CN: {
    badge: '新入驻医院', title: `合作医院 ${N_HOSP}家`, sub: '2026年10月 · 诊疗领域·地区扩充',
    desc: '10月合作医院数量大幅增加，\n欢迎了解新增的诊疗领域与地区。',
    items: ['新增领域 — 下肢静脉瘤 · 眼科', '新增地区 — 釜山 · 济州', '新增减重 · 身体塑形专科医院'],
    cta: '申请医院推荐咨询', today: '今日不再显示', close: '关闭',
  },
};

const kstToday = () => new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);

function initialVisible(hideKey: string, showUntil: string, showFrom?: string): boolean {
  const today = kstToday();
  if (today > showUntil) return false;
  if (showFrom && today < showFrom) return false;
  try {
    const hideUntil = localStorage.getItem(hideKey);
    if (hideUntil && hideUntil >= today) return false;
  } catch { /* ignore */ }
  return true;
}

const KAKAO_CHAT = 'https://pf.kakao.com/_xfZxjiX/chat';

const Card: React.FC<{
  t: CardText; grad: string; accent: string; ctaText?: string; wrapClass?: string; href?: string;
  onClose: () => void; onHideToday: () => void;
}> = ({ t, grad, accent, ctaText = 'text-white', wrapClass = '', href = KAKAO_CHAT, onClose, onHideToday }) => (
  <div className={"relative w-full rounded-3xl overflow-hidden bg-white shadow-2xl ring-1 ring-black/5 flex flex-col " + wrapClass}>
    <div className="relative px-7 pt-7 pb-6 text-white min-h-[148px]" style={{ background: grad }}>
      <div className="absolute -right-8 -top-10 w-44 h-44 rounded-full bg-white/10" />
      <div className="absolute right-12 bottom-1 w-14 h-14 rounded-full bg-white/10" />
      <span className="inline-block text-[11px] tracking-widest font-semibold bg-white/15 border border-white/30 rounded-full px-3 py-1 mb-3">{t.badge}</span>
      <h2 className="text-[26px] leading-tight font-extrabold tracking-tight">{t.title}</h2>
      <p className="mt-2 text-[13px] text-white/90 font-medium">{t.sub}</p>
    </div>
    <div className="px-7 py-5 flex-1 flex flex-col">
      <p className="text-[13.5px] leading-relaxed text-gray-800 font-semibold whitespace-pre-line">{t.desc}</p>
      <ul className="mt-3.5 space-y-2.5 flex-1">
        {t.items.map((it, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-800" style={{ wordBreak: 'keep-all' }}>
            <span className="mt-[3px] flex-none w-4 h-4 rounded-full text-white text-[10px] font-bold flex items-center justify-center" style={{ background: accent }}>✓</span>
            {it}
          </li>
        ))}
      </ul>
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
        className={`mt-5 block w-full text-center rounded-xl py-3 font-bold text-[14.5px] ${ctaText}`}
        style={{ background: accent === '#5a82c2' ? '#FEE500' : accent }}>
        {t.cta}
      </a>
      <p className="mt-2.5 text-center text-[12px] text-gray-500 min-h-[18px]">{t.invite || ' '}</p>
    </div>
    <div className="flex items-center justify-between border-t border-gray-100 px-7 py-3 text-[12.5px] text-gray-500">
      <button type="button" onClick={onHideToday} className="hover:text-gray-800">{t.today}</button>
      <button type="button" onClick={onClose} className="font-semibold text-gray-700 hover:text-black">{t.close}</button>
    </div>
  </div>
);

const PromoPopups: React.FC<{ lang: LanguageCode }> = ({ lang }) => {
  const [ready, setReady] = useState(false);
  const [smc, setSmc] = useState(false);
  const [kimes, setKimes] = useState(false);
  const [yj, setYj] = useState(false);
  const [cs, setCs] = useState(false);
  const [stem, setStem] = useState(false);
  const [newh, setNewh] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setSmc(initialVisible(SMC_HIDE_KEY, SMC_SHOW_UNTIL, OTHERS_SHOW_FROM));
      setKimes(initialVisible(KIMES_HIDE_KEY, KIMES_SHOW_UNTIL, OTHERS_SHOW_FROM));
      setYj(initialVisible(YJ_HIDE_KEY, YJ_SHOW_UNTIL, OTHERS_SHOW_FROM));
      setCs(initialVisible(CS_HIDE_KEY, CS_SHOW_UNTIL));
      setStem(initialVisible(STEM_HIDE_KEY, STEM_SHOW_UNTIL, OTHERS_SHOW_FROM));
      setNewh(initialVisible(NEWH_HIDE_KEY, NEWH_SHOW_UNTIL, OTHERS_SHOW_FROM));
      setReady(true);
    }, 800);
    return () => clearTimeout(id);
  }, []);

  if (!ready || (!smc && !kimes && !yj && !cs && !stem && !newh)) return null;

  const hide = (key: string, setter: (v: boolean) => void) => () => {
    try { localStorage.setItem(key, kstToday()); } catch { /* ignore */ }
    setter(false);
  };
  const closeAll = () => { setSmc(false); setKimes(false); setYj(false); setCs(false); setStem(false); setNewh(false); };

  const smcT = SMC_TEXT[lang] || SMC_TEXT.EN;
  const kimesT = KIMES_TEXT[lang] || KIMES_TEXT.EN;
  const yjT = YJ_TEXT[lang] || YJ_TEXT.EN;
  const stemT = STEM_TEXT[lang] || STEM_TEXT.EN;
  const newhT = NEWH_TEXT[lang] || NEWH_TEXT.EN;

  // 부채꼴 카드 덱 — 보이는 카드 수에 따라 기울기·겹침·z-order 배치 (모바일은 세로 스택)
  const cards: { key: string; el: React.ReactNode }[] = [];
  if (cs) cards.push({ key: 'cs', el: (
    <div className="relative w-full rounded-3xl overflow-hidden bg-[#0b1633] shadow-2xl ring-1 ring-black/5 flex flex-col">
      <img src="/promo/chuseok-2026.webp" alt="2026 추석 인사 — 한가위 보름달처럼 풍성한 결실 맺는 명절 보내시길 바랍니다" className="block w-full h-auto" />
      <div className="flex items-center justify-between bg-white border-t border-gray-100 px-7 py-3 text-[12.5px] text-gray-500">
        <button type="button" onClick={hide(CS_HIDE_KEY, setCs)} className="hover:text-gray-800">{smcT.today}</button>
        <button type="button" onClick={() => setCs(false)} className="font-semibold text-gray-700 hover:text-black">{smcT.close}</button>
      </div>
    </div>
  )});
  if (smc) cards.push({ key: 'smc', el: (
    <Card t={smcT}
      grad="linear-gradient(135deg, #02305F 0%, #034EA2 55%, #2F74C9 100%)"
      accent="#034EA2"
      onClose={() => setSmc(false)}
      onHideToday={hide(SMC_HIDE_KEY, setSmc)} />
  )});
  if (kimes) cards.push({ key: 'kimes', el: (
    <Card t={kimesT}
      grad="linear-gradient(135deg, #16224d 0%, #2c437e 55%, #5a82c2 100%)"
      accent="#5a82c2"
      ctaText="text-[#1a1a1a]"
      onClose={() => setKimes(false)}
      onHideToday={hide(KIMES_HIDE_KEY, setKimes)} />
  )});
  if (stem) cards.push({ key: 'stem', el: (
    <Card t={stemT}
      grad="linear-gradient(135deg, #0b3a36 0%, #13685f 55%, #2ea396 100%)"
      accent="#13685f"
      href="/stem"
      onClose={() => setStem(false)}
      onHideToday={hide(STEM_HIDE_KEY, setStem)} />
  )});
  if (newh) cards.push({ key: 'newh', el: (
    <Card t={newhT}
      grad="linear-gradient(135deg, #1d2d5e 0%, #3c5ba3 55%, #5a82c2 100%)"
      accent="#3c5ba3"
      onClose={() => setNewh(false)}
      onHideToday={hide(NEWH_HIDE_KEY, setNewh)} />
  )});
  if (yj) cards.push({ key: 'yj', el: (
    <Card t={yjT}
      grad="linear-gradient(135deg, #571523 0%, #A62838 55%, #C4505C 100%)"
      accent="#A62838"
      onClose={() => setYj(false)}
      onHideToday={hide(YJ_HIDE_KEY, setYj)} />
  )});

  const fan: Record<number, string[]> = {
    1: [''],
    2: ['lg:rotate-[-3deg] lg:translate-y-2 z-10', 'lg:rotate-[3deg] lg:translate-y-2 z-20'],
    3: ['lg:rotate-[-6deg] lg:translate-y-5 lg:scale-[0.97] z-10', 'z-30', 'lg:rotate-[6deg] lg:translate-y-5 lg:scale-[0.97] z-10'],
    4: ['lg:rotate-[-8deg] lg:translate-y-7 lg:scale-[0.94] z-10', 'lg:rotate-[-3deg] lg:translate-y-1 z-20', 'lg:rotate-[3deg] lg:translate-y-1 z-20', 'lg:rotate-[8deg] lg:translate-y-7 lg:scale-[0.94] z-10'],
  };
  const wraps = fan[cards.length] || [];

  return (
    <div className="fixed inset-0 z-[90] overflow-y-auto" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px]" onClick={closeAll} />
      <div className="relative min-h-full flex items-center justify-center p-4 py-10">
       <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-0 lg:-space-x-10 w-full lg:w-auto">
        {cards.map((c, i) => (
          <div key={c.key}
            className={'relative w-full transition-all duration-300 ease-out lg:hover:!rotate-0 lg:hover:!translate-y-0 lg:hover:!scale-[1.04] hover:z-40 lg:hover:drop-shadow-[0_30px_50px_rgba(5,15,40,0.5)] ' + (c.key === 'cs' ? '' : 'max-w-[390px] lg:w-[390px] ') + (wraps[i] || '')}
            style={c.key === 'cs' ? { width: 'min(600px, 92vw, calc((100vh - 160px) * 0.8))' } : undefined}>
            {c.el}
          </div>
        ))}
       </div>
      </div>
    </div>
  );
};

export default PromoPopups;
