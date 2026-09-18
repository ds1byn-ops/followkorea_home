import React, { useEffect, useState } from 'react';
import type { LanguageCode } from '../App';

// 삼성서울병원 입점 안내 팝업 — 2026-09-18 추가. 노출 종료일 지나면 자동 미노출.
const HIDE_KEY = 'smc_popup_hide_until';
const SHOW_UNTIL = '2026-10-18';

const TEXT: Record<string, { badge: string; title: string; sub: string; desc: string; items: string[]; cta: string; today: string; close: string }> = {
  KR: {
    badge: '신규 입점 안내',
    title: '삼성서울병원',
    sub: 'Samsung Medical Center · 서울 일원동',
    desc: '대한민국 대표 상급종합병원 삼성서울병원이\n팔로우코리아 협력 병원으로 합류했습니다.',
    items: ['국제진료센터 통한 다국어 진료 연계', '중증질환 협진 — 암·심장·뇌혈관·양성자치료', '프리미엄 건강검진 프로그램 예약'],
    cta: '진료·검진 상담 신청',
    today: '오늘 하루 보지 않기',
    close: '닫기',
  },
  EN: {
    badge: 'New Partner',
    title: 'Samsung Medical Center',
    sub: 'Ilwon-dong, Seoul',
    desc: 'Samsung Medical Center, Korea’s leading tertiary hospital,\nhas joined Follow Korea as a partner hospital.',
    items: ['Multilingual care via the International Healthcare Center', 'Severe-condition care — cancer, heart, brain, proton therapy', 'Premium health checkup programs'],
    cta: 'Request a Consultation',
    today: 'Don’t show again today',
    close: 'Close',
  },
  CN: {
    badge: '新入驻医院',
    title: '三星首尔医院',
    sub: 'Samsung Medical Center · 首尔逸院洞',
    desc: '韩国代表性大型综合医院——三星首尔医院\n正式加入 Follow Korea 合作医院。',
    items: ['通过国际诊疗中心提供多语言诊疗对接', '重症协诊 — 癌症·心脏·脑血管·质子治疗', '高端健康体检项目预约'],
    cta: '申请诊疗·体检咨询',
    today: '今日不再显示',
    close: '关闭',
  },
};

const SamsungPopup: React.FC<{ lang: LanguageCode; onDone: () => void }> = ({ lang, onDone }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const today = new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);
    let show = today <= SHOW_UNTIL;
    if (show) {
      try {
        const hideUntil = localStorage.getItem(HIDE_KEY);
        if (hideUntil && hideUntil >= today) show = false;
      } catch { /* ignore */ }
    }
    if (!show) { onDone(); return; }
    const id = setTimeout(() => setOpen(true), 700);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = () => { setOpen(false); onDone(); };
  const hideToday = () => {
    try {
      const today = new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);
      localStorage.setItem(HIDE_KEY, today);
    } catch { /* ignore */ }
    close();
  };

  if (!open) return null;
  const t = TEXT[lang] || TEXT.EN;

  return (
    <div className="fixed inset-0 z-[91] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" onClick={close} />
      <div className="relative w-full max-w-md rounded-3xl overflow-hidden bg-white shadow-2xl">
        {/* header — 삼성 블루 */}
        <div className="relative px-7 pt-8 pb-7 text-white" style={{ background: 'linear-gradient(135deg, #02305F 0%, #034EA2 55%, #2F74C9 100%)' }}>
          <div className="absolute -right-8 -top-10 w-44 h-44 rounded-full bg-white/10" />
          <div className="absolute right-12 bottom-1 w-14 h-14 rounded-full bg-white/10" />
          <span className="inline-block text-[11px] tracking-widest font-semibold bg-white/15 border border-white/30 rounded-full px-3 py-1 mb-4">{t.badge}</span>
          <h2 className="text-3xl font-extrabold tracking-tight">{t.title}</h2>
          <p className="mt-2 text-sm text-white/90 font-medium">{t.sub}</p>
        </div>
        {/* body */}
        <div className="px-7 py-6">
          <p className="text-[14px] leading-relaxed text-gray-800 font-semibold whitespace-pre-line">{t.desc}</p>
          <ul className="mt-4 space-y-2.5">
            {t.items.map((it, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-gray-800">
                <span className="mt-[3px] flex-none w-4 h-4 rounded-full text-white text-[10px] font-bold flex items-center justify-center" style={{ background: '#034EA2' }}>✓</span>
                {it}
              </li>
            ))}
          </ul>
          <a
            href="https://pf.kakao.com/_xfZxjiX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block w-full text-center rounded-xl py-3.5 font-bold text-[15px] text-white"
            style={{ background: '#034EA2' }}
          >
            {t.cta}
          </a>
        </div>
        {/* footer */}
        <div className="flex items-center justify-between border-t border-gray-100 px-7 py-3.5 text-[12.5px] text-gray-500">
          <button type="button" onClick={hideToday} className="hover:text-gray-800">{t.today}</button>
          <button type="button" onClick={close} className="font-semibold text-gray-700 hover:text-black">{t.close}</button>
        </div>
      </div>
    </div>
  );
};

export default SamsungPopup;
