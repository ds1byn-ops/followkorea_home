
import React, { useEffect, useRef, useState } from 'react';
import { LanguageCode } from '../App';

// 기존 MainContent의 Reveal과 동일한 스크롤 등장 애니메이션 (공용)
const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
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
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(40px)',
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const pick = <T,>(map: Record<string, T>, lang: LanguageCode): T => (map as any)[lang] ?? map.EN;

/* ─────────────────────────── ROADMAP ─────────────────────────── */
export const RoadmapSection: React.FC<{ lang: LanguageCode }> = ({ lang }) => {
  const T: Record<'KR' | 'EN' | 'CN', any> = {
    KR: {
      title: '2026 하반기 실행 타임라인',
      items: [
        { m: '7월', t: '글로벌·중국전용 버전 오픈 · 강남펄스 제작 착수' },
        { m: '8월', t: '중국법인(WFOE) 설립 완료' },
        { m: '9월', t: '바이두 검색 등록 · 중국 SNS 첫 수주' },
        { m: '11월', t: '중국 SNS 월 5,000만원 궤도 진입' },
        { m: '12월', t: '위챗 미니 완료 · 강남펄스 50개 병원 · 런레이트 1.45억' },
      ],
    },
    EN: {
      title: 'H2 2026 Execution Timeline',
      items: [
        { m: 'Jul', t: 'Global & China editions launch · Gangnam Pulse build begins' },
        { m: 'Aug', t: 'China entity (WFOE) established' },
        { m: 'Sep', t: 'Baidu search registration · first China SNS deal' },
        { m: 'Nov', t: 'China SNS reaches ₩50M/mo run-rate' },
        { m: 'Dec', t: 'WeChat Mini live · 50 Pulse clinics · ₩145M run-rate' },
      ],
    },
    CN: {
      title: '2026下半年执行时间线',
      items: [
        { m: '7月', t: '全球版·中国专用版上线 · 江南Pulse启动开发' },
        { m: '8月', t: '中国法人（WFOE）设立完成' },
        { m: '9月', t: '百度搜索登记 · 中国社媒首单' },
        { m: '11月', t: '中国社媒进入月5,000万运营轨道' },
        { m: '12月', t: '微信小程序完成 · 江南Pulse 50家医院 · 运营率1.45亿' },
      ],
    },
  };
  const t = pick(T, lang);

  return (
    <section id="roadmap" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-[#111827] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <span className="text-[#5a82c2] font-black text-sm tracking-[0.3em] uppercase mb-4 block">Execution Roadmap</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-[1.4] tracking-tight mb-14 md:mb-20">{t.title}</h2>
        </Reveal>

        {/* Desktop: horizontal timeline / Mobile: vertical */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4">
          <div className="hidden md:block absolute top-[7px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#5a82c2] to-[#5a82c2]/20"></div>
          {t.items.map((it: any, idx: number) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="relative md:pr-4">
                <div className="w-4 h-4 rounded-full bg-[#5a82c2] ring-4 ring-[#5a82c2]/20 mb-5 md:mb-6"></div>
                <div className="text-xl md:text-2xl font-black text-white tracking-tight mb-2">{it.m}</div>
                <p className="text-[13px] md:text-sm text-gray-400 leading-relaxed font-medium">{it.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─────────────────────────── P&L / PERFORMANCE ─────────────────────────── */
export const PnlSection: React.FC<{ lang: LanguageCode }> = ({ lang }) => {
  const T: Record<'KR' | 'EN' | 'CN', any> = {
    KR: {
      title: '통합 매출 · 수익 요약',
      k: [
        { v: '6.0억', l: '2026 하반기 총매출 (직접매출)' },
        { v: '2.67억', l: '영업이익 · 블렌디드 이익률 45%' },
        { v: '1.45억/월', l: '12월 런레이트 (연환산 17.4억)' },
      ],
      head: ['프로젝트', '매출 모델', '하반기 매출', '이익률', '하반기 이익'],
      rows: [
        ['P1 왕홍 병원수수료', '시술 수수료 15~30%', '40,200', '40%', '16,080'],
        ['P4 강남펄스 SaaS', '구독 (기준 시나리오)', '5,140', '85%', '4,370'],
        ['P5 중국 SNS 홍보대행', '홍보 프로그램 수주', '14,500', '50%', '7,250'],
      ],
      total: ['합계 (직접매출·순이익)', '', '59,840', '45%', '26,680'],
      note: '※ 단위 만원 · 계획 기준 추정치 · P2(유입 인프라)·P3(중국 투자단계)는 합계 매출 제외 · P4는 월 구독 20만원 기준 시나리오',
    },
    EN: {
      title: 'Consolidated Revenue & Profit',
      k: [
        { v: '₩600M', l: 'H2 2026 total revenue (direct)' },
        { v: '₩267M', l: 'Operating profit · 45% blended margin' },
        { v: '₩145M/mo', l: 'December run-rate (₩1.74B annualized)' },
      ],
      head: ['Project', 'Revenue model', 'H2 revenue', 'Margin', 'H2 profit'],
      rows: [
        ['P1 Wanghong clinic fees', 'Procedure fee 15–30%', '40,200', '40%', '16,080'],
        ['P4 Gangnam Pulse SaaS', 'Subscription (base case)', '5,140', '85%', '4,370'],
        ['P5 China SNS marketing', 'Promotion program deals', '14,500', '50%', '7,250'],
      ],
      total: ['Total (direct revenue · net profit)', '', '59,840', '45%', '26,680'],
      note: '※ Units ₩10K · planning estimates · P2 (traffic) and P3 (China investment stage) excluded from total · P4 uses the ₩200K/mo base case',
    },
    CN: {
      title: '综合营收 · 利润概要',
      k: [
        { v: '6.0亿', l: '2026下半年总营收（直接营收）' },
        { v: '2.67亿', l: '营业利润 · 综合利润率45%' },
        { v: '1.45亿/月', l: '12月运营率（年化17.4亿）' },
      ],
      head: ['项目', '营收模式', '下半年营收', '利润率', '下半年利润'],
      rows: [
        ['P1 网红医院佣金', '诊疗佣金15~30%', '40,200', '40%', '16,080'],
        ['P4 江南Pulse SaaS', '订阅（基准情景）', '5,140', '85%', '4,370'],
        ['P5 中国社媒营销代理', '推广项目承接', '14,500', '50%', '7,250'],
      ],
      total: ['合计（直接营收·净利润）', '', '59,840', '45%', '26,680'],
      note: '※ 单位万韩元 · 计划估算值 · P2（流量基础）与P3（中国投资阶段）不计入合计 · P4按月订阅20万韩元基准情景',
    },
  };
  const t = pick(T, lang);

  return (
    <section id="performance" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-gray-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <Reveal>
          <span className="text-[#5a82c2] font-black text-sm tracking-[0.3em] uppercase mb-4 block">Performance</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.4] tracking-tight mb-10 md:mb-14">{t.title}</h2>
        </Reveal>

        {/* 3 big numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-8 md:mb-10">
          {t.k.map((c: any, i: number) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 h-full">
                <div className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">{c.v}</div>
                <div className="text-[13px] md:text-sm text-gray-400 font-bold mt-3 leading-relaxed">{c.l}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* P&L table */}
        <Reveal delay={0.15}>
          <div className="rounded-[1.5rem] md:rounded-[2rem] border border-gray-200 bg-white overflow-x-auto">
            <table className="w-full border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-[#5a82c2] text-white">
                  {t.head.map((h: string, i: number) => (
                    <th key={i} className={`px-5 md:px-6 py-4 text-[12px] md:text-[13px] font-bold tracking-wide ${i > 1 ? 'text-right' : 'text-left'}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.rows.map((r: string[], ri: number) => (
                  <tr key={ri} className="border-t border-gray-100">
                    {r.map((cell, ci) => (
                      <td key={ci} className={`px-5 md:px-6 py-4 text-[13px] md:text-sm ${ci === 0 ? 'font-bold text-gray-900' : ci > 1 ? 'text-right tabular-nums font-semibold text-gray-700' : 'text-gray-500'}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t-2 border-[#5a82c2]/20 bg-[#5a82c2]/5">
                  {t.total.map((cell: string, ci: number) => (
                    <td key={ci} className={`px-5 md:px-6 py-4 text-[13px] md:text-sm font-black text-gray-900 ${ci > 1 ? 'text-right tabular-nums' : ''}`}>{cell}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
        <p className="text-[11px] md:text-xs text-gray-400 mt-5 leading-relaxed">{t.note}</p>
      </div>
    </section>
  );
};
