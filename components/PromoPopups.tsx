import React, { useEffect, useState } from 'react';
import type { LanguageCode } from '../App';

// 홍보 팝업 2종(삼성서울병원 입점 · KIMES BUSAN 2026)을 한 오버레이에 나란히 표시 — 2026-09-18
// 각 카드별 노출 종료일·'오늘 하루 보지 않기' 독립 동작, 모바일에서는 세로 스택.
const SMC_HIDE_KEY = 'smc_popup_hide_until';
const SMC_SHOW_UNTIL = '2026-09-30';
const KIMES_HIDE_KEY = 'kimes2026_hide_until';
const KIMES_SHOW_UNTIL = '2026-10-25';

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
    badge: '전시회 참가 안내', title: 'KIMES BUSAN 2026', sub: '2026. 10. 23(금) ~ 10. 25(일) · BEXCO 부산 · J405 부스',
    desc: '팔로우코리아가 부산 국제 의료기기·병원설비 전시회에 참가합니다.\n부스에 방문하시면 아래 내용을 직접 시연해 드립니다.',
    items: ['해외환자 유치 플랫폼 · 65개 제휴 병원', '병원 운영 SaaS 강남펄스 실화면 데모', '왕홍·KOL+KOC 중국 마케팅 · 중국 진출 상담'],
    cta: '카카오톡으로 미팅 예약',
    invite: '카카오톡으로 미팅을 요청하시면 전시회 초대권을 보내드립니다.',
    today: '오늘 하루 보지 않기', close: '닫기',
  },
  EN: {
    badge: 'Exhibition Notice', title: 'KIMES BUSAN 2026', sub: 'Oct 23 (Fri) – 25 (Sun), 2026 · BEXCO, Busan · Booth J405',
    desc: 'Follow Korea is exhibiting at KIMES Busan.\nVisit our booth for a live demo of:',
    items: ['International patient platform · 65 partner hospitals', 'Gangnam Pulse clinic SaaS live demo', 'China marketing (Wanghong · KOL+KOC) consulting'],
    cta: 'Book a meeting via KakaoTalk',
    invite: 'Request a meeting on KakaoTalk and we will send you a free exhibition pass.',
    today: 'Don’t show again today', close: 'Close',
  },
  CN: {
    badge: '展会参展通知', title: 'KIMES BUSAN 2026', sub: '2026.10.23(周五) ~ 10.25(周日) · 釜山 BEXCO · J405展位',
    desc: 'Follow Korea 将参加釜山国际医疗器械展。\n欢迎莅临展位，现场演示：',
    items: ['海外患者引流平台 · 65家合作医院', '医院运营SaaS 江南Pulse 实机演示', '网红·KOL+KOC 中国营销 · 中国市场进入咨询'],
    cta: '通过KakaoTalk预约洽谈',
    invite: '通过KakaoTalk预约洽谈，我们将为您发送展会邀请券。',
    today: '今日不再显示', close: '关闭',
  },
};

const kstToday = () => new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);

function initialVisible(hideKey: string, showUntil: string): boolean {
  const today = kstToday();
  if (today > showUntil) return false;
  try {
    const hideUntil = localStorage.getItem(hideKey);
    if (hideUntil && hideUntil >= today) return false;
  } catch { /* ignore */ }
  return true;
}

const Card: React.FC<{
  t: CardText; grad: string; accent: string; ctaText?: string;
  onClose: () => void; onHideToday: () => void;
}> = ({ t, grad, accent, ctaText = 'text-white', onClose, onHideToday }) => (
  <div className="relative w-full max-w-md rounded-3xl overflow-hidden bg-white shadow-2xl flex flex-col">
    <div className="relative px-7 pt-7 pb-6 text-white" style={{ background: grad }}>
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
          <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-800">
            <span className="mt-[3px] flex-none w-4 h-4 rounded-full text-white text-[10px] font-bold flex items-center justify-center" style={{ background: accent }}>✓</span>
            {it}
          </li>
        ))}
      </ul>
      <a href="https://pf.kakao.com/_xfZxjiX/chat" target="_blank" rel="noopener noreferrer"
        className={`mt-5 block w-full text-center rounded-xl py-3 font-bold text-[14.5px] ${ctaText}`}
        style={{ background: accent === '#5a82c2' ? '#FEE500' : accent }}>
        {t.cta}
      </a>
      {t.invite && <p className="mt-2.5 text-center text-[12px] text-gray-500">{t.invite}</p>}
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

  useEffect(() => {
    const id = setTimeout(() => {
      setSmc(initialVisible(SMC_HIDE_KEY, SMC_SHOW_UNTIL));
      setKimes(initialVisible(KIMES_HIDE_KEY, KIMES_SHOW_UNTIL));
      setReady(true);
    }, 800);
    return () => clearTimeout(id);
  }, []);

  if (!ready || (!smc && !kimes)) return null;

  const hide = (key: string, setter: (v: boolean) => void) => () => {
    try { localStorage.setItem(key, kstToday()); } catch { /* ignore */ }
    setter(false);
  };
  const closeAll = () => { setSmc(false); setKimes(false); };

  const smcT = SMC_TEXT[lang] || SMC_TEXT.EN;
  const kimesT = KIMES_TEXT[lang] || KIMES_TEXT.EN;

  return (
    <div className="fixed inset-0 z-[90] overflow-y-auto" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" onClick={closeAll} />
      <div className="relative min-h-full flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-5 p-4 py-8">
        {smc && (
          <Card t={smcT}
            grad="linear-gradient(135deg, #02305F 0%, #034EA2 55%, #2F74C9 100%)"
            accent="#034EA2"
            onClose={() => setSmc(false)}
            onHideToday={hide(SMC_HIDE_KEY, setSmc)} />
        )}
        {kimes && (
          <Card t={kimesT}
            grad="linear-gradient(135deg, #16224d 0%, #2c437e 55%, #5a82c2 100%)"
            accent="#5a82c2"
            ctaText="text-[#1a1a1a]"
            onClose={() => setKimes(false)}
            onHideToday={hide(KIMES_HIDE_KEY, setKimes)} />
        )}
      </div>
    </div>
  );
};

export default PromoPopups;
