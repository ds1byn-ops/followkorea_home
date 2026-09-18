import React, { useEffect, useState } from 'react';
import type { LanguageCode } from '../App';

// KIMES BUSAN 2026 참가 홍보 팝업 — 2026-09-17 추가, 행사 종료(10/25) 후 자동 미노출
const HIDE_KEY = 'kimes2026_hide_until';
const EVENT_END = '2026-10-25';

const TEXT: Record<string, { badge: string; title: string; date: string; place: string; desc: string; items: string[]; cta: string; invite: string; today: string; close: string }> = {
  KR: {
    badge: '전시회 참가 안내',
    title: 'KIMES BUSAN 2026',
    date: '2026. 10. 23(금) ~ 10. 25(일)',
    place: 'BEXCO 부산 · J405 부스',
    desc: '팔로우코리아가 부산 국제 의료기기·병원설비 전시회에 참가합니다.\n부스에 방문하시면 아래 내용을 직접 시연해 드립니다.',
    items: ['해외환자 유치 플랫폼 · 65개 제휴 병원', '병원 운영 SaaS 강남펄스 실화면 데모', '왕홍·KOL+KOC 중국 마케팅 · 중국 진출 상담'],
    cta: '카카오톡으로 미팅 예약',
    invite: '카카오톡으로 미팅을 요청하시면 전시회 초대권을 보내드립니다.',
    today: '오늘 하루 보지 않기',
    close: '닫기',
  },
  EN: {
    badge: 'Exhibition Notice',
    title: 'KIMES BUSAN 2026',
    date: 'Oct 23 (Fri) – 25 (Sun), 2026',
    place: 'BEXCO, Busan · Booth J405',
    desc: 'Follow Korea is exhibiting at KIMES Busan.\nVisit our booth for a live demo of:',
    items: ['International patient platform · 65 partner hospitals', 'Gangnam Pulse clinic SaaS live demo', 'China marketing (Wanghong · KOL+KOC) consulting'],
    cta: 'Book a meeting via KakaoTalk',
    invite: 'Request a meeting on KakaoTalk and we will send you a free exhibition pass.',
    today: 'Don’t show again today',
    close: 'Close',
  },
  CN: {
    badge: '展会参展通知',
    title: 'KIMES BUSAN 2026',
    date: '2026.10.23(周五) ~ 10.25(周日)',
    place: '釜山 BEXCO · J405展位',
    desc: 'Follow Korea 将参加釜山国际医疗器械展。\n欢迎莅临展位，现场演示：',
    items: ['海外患者引流平台 · 65家合作医院', '医院运营SaaS 江南Pulse 实机演示', '网红·KOL+KOC 中国营销 · 中国市场进入咨询'],
    cta: '通过KakaoTalk预约洽谈',
    invite: '通过KakaoTalk预约洽谈，我们将为您发送展会邀请券。',
    today: '今日不再显示',
    close: '关闭',
  },
};

const KimesPopup: React.FC<{ lang: LanguageCode }> = ({ lang }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const today = new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);
    if (today > EVENT_END) return; // 행사 종료 후 미노출
    try {
      const hideUntil = localStorage.getItem(HIDE_KEY);
      if (hideUntil && hideUntil >= today) return;
    } catch { /* ignore */ }
    const id = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(id);
  }, []);

  if (!open) return null;
  const t = TEXT[lang] || TEXT.EN;

  const hideToday = () => {
    try {
      const today = new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);
      localStorage.setItem(HIDE_KEY, today);
    } catch { /* ignore */ }
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-md rounded-3xl overflow-hidden bg-white shadow-2xl animate-[fadeIn_0.35s_ease]">
        {/* header */}
        <div className="relative px-7 pt-8 pb-7 text-white" style={{ background: 'linear-gradient(135deg, #16224d 0%, #2c437e 55%, #5a82c2 100%)' }}>
          <div className="absolute -right-8 -top-10 w-44 h-44 rounded-full bg-white/10" />
          <div className="absolute right-10 bottom-2 w-16 h-16 rounded-full bg-white/10" />
          <span className="inline-block text-[11px] tracking-widest font-semibold bg-white/15 border border-white/30 rounded-full px-3 py-1 mb-4">{t.badge}</span>
          <h2 className="text-3xl font-extrabold tracking-tight">{t.title}</h2>
          <p className="mt-2 text-sm text-white/90 font-medium">{t.date} · {t.place}</p>
        </div>
        {/* body */}
        <div className="px-7 py-6">
          <p className="text-[13.5px] leading-relaxed text-gray-700 whitespace-pre-line">{t.desc}</p>
          <ul className="mt-4 space-y-2.5">
            {t.items.map((it, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-gray-800">
                <span className="mt-[3px] flex-none w-4 h-4 rounded-full text-white text-[10px] font-bold flex items-center justify-center" style={{ background: '#5a82c2' }}>✓</span>
                {it}
              </li>
            ))}
          </ul>
          <a
            href="https://pf.kakao.com/_xfZxjiX/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block w-full text-center rounded-xl py-3.5 font-bold text-[15px] text-[#1a1a1a]"
            style={{ background: '#FEE500' }}
          >
            {t.cta}
          </a>
          <p className="mt-3 text-center text-[12.5px] text-gray-500">{t.invite}</p>
        </div>
        {/* footer */}
        <div className="flex items-center justify-between border-t border-gray-100 px-7 py-3.5 text-[12.5px] text-gray-500">
          <button type="button" onClick={hideToday} className="hover:text-gray-800">{t.today}</button>
          <button type="button" onClick={() => setOpen(false)} className="font-semibold text-gray-700 hover:text-black">{t.close}</button>
        </div>
      </div>
    </div>
  );
};

export default KimesPopup;
