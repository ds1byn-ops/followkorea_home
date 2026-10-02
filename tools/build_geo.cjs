// GEO(AI 검색 노출)용 정적 파일 생성 — followkorea.co.kr
// 실행: node tools/build_geo.cjs  → public/faq/*.html, public/llms.txt, public/sitemap.xml
// 회사 정보(법인·등록번호)가 바뀌면 ORG만 고치고 다시 실행한 뒤 커밋한다. index.html의 JSON-LD도 같은 값을 쓴다.
// 이 FAQ는 병원·파트너 대상(B2B) 안내다. 환자 모집 문구는 넣지 않는다(외국인환자 유치 국내광고 금지).
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BASE = 'https://followkorea.co.kr';
const TODAY = new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);

const ORG = {
  nameEn: 'Follow Korea Co., Ltd.', nameKo: '주식회사 팔로우코리아',
  regNo: 'A-2026-01-01-06622', regPeriod: '2026.01.21–2029.01.20', travelNo: '2026-000022',
  addrKo: '서울특별시 서초구 강남대로 373, 13층 116호',
  addrEn: '13F-116, 373 Gangnam-daero, Seocho-gu, Seoul, Republic of Korea',
  addrZh: '韩国首尔特别市瑞草区江南大路373号13层116室',
  email: 'contact@followkorea.co.kr', kakao: 'https://pf.kakao.com/_xfZxjiX', kakaoId: '@followkorea2026',
};

const FAQ = {
  ko: [
    ['팔로우코리아는 어떤 회사인가요?', `${ORG.nameKo}는 보건복지부에 등록된 외국인환자 유치업체(제${ORG.regNo}호)이자 종합여행업(제${ORG.travelNo}호) 등록 업체입니다. 해외 환자와 국내 제휴 의료기관을 연결하고, 왕홍·KOC 기반 중국 마케팅, 다국어 의료관광 플랫폼(강남팔로우), 병원 운영 시스템(강남펄스)을 함께 운영합니다.`],
    ['병원은 어떻게 제휴할 수 있나요?', `홈페이지 상담 신청이나 ${ORG.email}로 문의하시면 담당자가 진료 분야와 유치 희망 국가를 확인한 뒤 유치 계약을 진행합니다. 계약 후 병원 소개와 수가표를 등록하면 다국어 플랫폼(followkorea.kr, 중국어 gnfollow.com) 노출과 파트너(왕홍·가이드·해외 에이전시) 네트워크 연결이 시작됩니다. 수수료 조건은 진료 분야별로 개별 협의합니다.`],
    ['어느 나라 환자를 유치하나요?', '중국·대만·홍콩 등 중화권을 중심으로 일본, 베트남·태국·인도네시아 등 동남아, 몽골, 러시아, 중동, 미주 환자를 유치합니다. 플랫폼은 10개 언어로 운영되며 통역·동행·공항 픽업까지 지원합니다.'],
    ['왕홍 마케팅은 어떻게 진행되나요?', '중국 왕홍·KOC가 병원을 방문해 시술을 받고 샤오홍슈·더우인에 방문 후기를 올리는 방식입니다. 게시물 수에 따라 단계별 프로그램으로 운영하며, 게시 진척과 캡처를 병원과 공유합니다. 중국 의료광고 규정에 맞춰 가격·효과를 단정하는 표현은 쓰지 않습니다.'],
    ['강남펄스는 무엇인가요?', '외국인 환자를 받는 병원을 위한 운영 시스템입니다. 예약·접수, 환자 CRM, 상담·견적, 수납, 에이전시·소개자 정산, 한국보건산업진흥원 유치실적 보고 양식 작성, 인스타그램·페이스북 DM 상담 인박스를 한 곳에서 처리합니다. gnpulse.kr/demo/ 에서 데모를 신청할 수 있습니다.'],
    ['왕홍·가이드·해외 에이전시도 파트너로 참여할 수 있나요?', '네. gnpulse.kr/join/ 에서 가입하면 승인 후 파트너 포털에서 제휴병원 수가표 열람, 예약 신청, 정산 내역 확인을 할 수 있습니다. 소개 실적에 따라 수수료 등급이 오릅니다.'],
    ['등록된 유치업체와 일해야 하는 이유는 무엇인가요?', '의료법상 외국인 환자를 병원에 소개하고 대가를 받는 일은 등록된 유치업체만 할 수 있습니다. 등록 업체를 거치면 병원과 파트너 모두 무등록 알선에 따른 법적 위험 없이 정산·세무 처리를 할 수 있습니다.'],
    ['연락처는 어떻게 되나요?', `이메일 ${ORG.email}, 카카오톡 채널 ${ORG.kakaoId}(${ORG.kakao}), 주소 ${ORG.addrKo}입니다.`],
  ],
  en: [
    ['What is Follow Korea?', `${ORG.nameEn} is a foreign patient attraction agency registered with Korea's Ministry of Health and Welfare (Reg. No. ${ORG.regNo}) and a licensed general travel agency (No. ${ORG.travelNo}). It connects international patients with licensed partner clinics in Korea and runs China influencer (Wanghong/KOC) marketing, the multilingual medical travel platform Gangnam Follow, and the clinic operations system Gangnam Pulse.`],
    ['How can a Korean clinic partner with Follow Korea?', `Send an inquiry through the website or to ${ORG.email}. We confirm your specialties and target countries, then sign an attraction agreement. After your clinic profile and price list are registered, you are listed on our multilingual platforms (followkorea.kr and the Chinese site gnfollow.com) and connected to our partner network of influencers, guides and overseas agencies. Commission terms are agreed per specialty.`],
    ['Which countries do patients come from?', 'Mainly Greater China (mainland China, Taiwan, Hong Kong), plus Japan, Southeast Asia (Vietnam, Thailand, Indonesia), Mongolia, Russia, the Middle East and the Americas. The platform runs in 10 languages, with interpretation, escort and airport pickup.'],
    ['How does Wanghong (Chinese influencer) marketing work?', 'Chinese influencers and KOCs visit the clinic, receive a treatment and post visit reviews on Xiaohongshu (RED) and Douyin. Programs are tiered by number of posts, and posting progress and screenshots are shared with the clinic. Posts follow Chinese medical advertising rules and avoid price or outcome claims.'],
    ['What is Gangnam Pulse?', 'A clinic operations system for clinics serving international patients: appointments and check-in, patient CRM, consultations and quotes, payments, agency and referrer settlement, KHIDI patient attraction reports, and an Instagram/Facebook DM inbox. Demo requests: gnpulse.kr/demo/.'],
    ['Can influencers, guides and overseas agencies join as partners?', 'Yes. Sign up at gnpulse.kr/join/. Once approved, the partner portal lets you view partner clinic price lists, request bookings and check settlements. Commission tiers rise with referral volume.'],
    ['Why work with a registered patient attraction agency?', 'Under Korean medical law, only registered agencies may refer foreign patients to clinics for a fee. Working through a registered agency lets clinics and partners settle payments and taxes without the legal risk of unregistered brokering.'],
    ['How do I contact Follow Korea?', `Email ${ORG.email}, KakaoTalk channel ${ORG.kakaoId} (${ORG.kakao}). Address: ${ORG.addrEn}.`],
  ],
  zh: [
    ['Follow Korea 是一家什么样的公司？', `${ORG.nameEn} 是在韩国保健福祉部登记的外国患者招揽机构（登记号 ${ORG.regNo}），同时持有综合旅行业执照（第 ${ORG.travelNo} 号）。公司为海外客户对接韩国正规合作医疗机构，并运营网红·KOC 中国营销、多语种医疗旅游平台（江南FOLLOW）以及医院运营系统（江南Pulse）。`],
    ['旅行社或机构如何与 Follow Korea 合作？', '可在 gnpulse.kr/join/ 注册成为合作伙伴，审核通过后即可在合作伙伴后台查看合作医院价目表、提交预约申请、查询结算明细。佣金等级随介绍业绩提升。'],
    ['合作医院覆盖哪些领域？', '以首尔江南为中心，涵盖皮肤科、整形外科、健康体检、牙科、眼科、女性医学、干细胞、骨科·脊柱等领域的正规医疗机构，提供中文咨询、翻译陪同与机场接送。'],
    ['网红营销是如何进行的？', '中国网红·KOC 到访合作医院体验项目后，在小红书、抖音发布到访笔记。按发布数量分阶段执行，并与医院共享发布进度与截图。内容遵守中国医疗广告相关规定，不使用价格、疗效等断言性表述。'],
    ['为什么要与登记的招揽机构合作？', '根据韩国医疗法，只有登记的招揽机构才能有偿向医院介绍外国患者。通过登记机构合作，医院与合作伙伴都能合规完成结算与税务处理，避免无资质中介的法律风险。'],
    ['如何联系 Follow Korea？', `邮箱 ${ORG.email}，KakaoTalk 频道 ${ORG.kakaoId}，地址：${ORG.addrZh}。`],
  ],
};

const UI = {
  ko: { file: 'index.html', lang: 'ko', title: '자주 묻는 질문 — 외국인환자 유치·병원 제휴·파트너 | 팔로우코리아', h1: '자주 묻는 질문', intro: '병원 제휴, 외국인 환자 유치 마케팅, 병원 운영 시스템 강남펄스, 파트너 참여에 대한 안내입니다. 팔로우코리아는 보건복지부 등록 외국인환자 유치업체입니다.', home: '홈으로', cta: '상담 신청' },
  en: { file: 'en.html', lang: 'en', title: 'FAQ — Clinic partnership, patient attraction & partners | Follow Korea', h1: 'Frequently Asked Questions', intro: 'About clinic partnerships, international patient marketing, the Gangnam Pulse clinic system and our partner program. Follow Korea is a foreign patient attraction agency registered with the Korean Ministry of Health and Welfare.', home: 'Home', cta: 'Contact us' },
  zh: { file: 'zh.html', lang: 'zh-CN', title: '常见问题 — 合作伙伴与医院合作 | Follow Korea', h1: '常见问题', intro: '关于合作伙伴计划、合作医院与网红营销的说明。Follow Korea 是韩国保健福祉部登记的外国患者招揽机构。', home: '首页', cta: '联系我们' },
};

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const url = (k) => `${BASE}/faq/${UI[k].file === 'index.html' ? '' : UI[k].file}`;
const alternates = [['ko', 'ko'], ['en', 'en'], ['zh', 'zh']].map(([k, h]) => `<link rel="alternate" hreflang="${h}" href="${url(k)}">`).join('\n') + `\n<link rel="alternate" hreflang="x-default" href="${url('en')}">`;

const orgLd = {
  '@context': 'https://schema.org', '@type': ['Organization', 'TravelAgency'], '@id': BASE + '/#org',
  name: ORG.nameEn, alternateName: [ORG.nameKo, '팔로우코리아', 'Follow Korea'], url: BASE + '/', email: ORG.email,
  logo: BASE + '/fk-logo-r.png',
  address: { '@type': 'PostalAddress', streetAddress: '373 Gangnam-daero, 13F-116', addressLocality: 'Seocho-gu', addressRegion: 'Seoul', addressCountry: 'KR' },
  identifier: [
    { '@type': 'PropertyValue', name: 'Foreign Patient Attraction Agency Registration (Ministry of Health and Welfare, Korea)', value: ORG.regNo },
    { '@type': 'PropertyValue', name: 'General Travel Agency Registration', value: ORG.travelNo },
  ],
  sameAs: ['https://followkorea.kr/', 'https://gnfollow.com/', 'https://gnpulse.kr/', ORG.kakao],
};

const CSS = `*{box-sizing:border-box}body{margin:0;font-family:Pretendard,-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans KR','Noto Sans SC','Microsoft YaHei',sans-serif;color:#1e1e1e;background:#f6f8fb;line-height:1.75}
a{color:#3b66ad}header,main,footer{max-width:820px;margin:0 auto;padding:0 20px}header{padding-top:22px;display:flex;justify-content:space-between;align-items:center}
.brand{font-weight:800;color:#5a82c2;text-decoration:none;font-size:18px}.cta{background:#5a82c2;color:#fff;text-decoration:none;padding:9px 16px;border-radius:10px;font-weight:700;font-size:14px}
h1{font-size:28px;margin:28px 0 8px}.intro{color:#4b5563}.langs{font-size:13px}.langs a{margin-right:10px}
.qa{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:14px 18px;margin:12px 0}.qa h2{font-size:17px;margin:0 0 6px}
footer{font-size:12.5px;color:#6b7280;padding:34px 20px 46px;margin-top:28px;border-top:1px solid #e5e7eb}`;

function faqHtml(k) {
  const ui = UI[k];
  const qa = FAQ[k];
  const ld = [orgLd, { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: ui.lang, mainEntity: qa.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }];
  return `<!doctype html>
<html lang="${ui.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(ui.title)}</title>
<meta name="description" content="${esc(ui.intro)}">
<link rel="canonical" href="${url(k)}">
${alternates}
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(ui.title)}">
<meta property="og:description" content="${esc(ui.intro)}">
<meta property="og:url" content="${url(k)}">
<meta property="og:image" content="${BASE}/og-image.png">
<link rel="icon" href="/favicon.ico">
<style>${CSS}</style>
${ld.map((o) => '<script type="application/ld+json">' + JSON.stringify(o) + '</script>').join('\n')}
</head>
<body>
<header><a class="brand" href="/">FOLLOW KOREA</a><a class="cta" href="/">${esc(ui.cta)}</a></header>
<main>
<h1>${esc(ui.h1)}</h1>
<p class="intro">${esc(ui.intro)}</p>
<p class="langs"><a href="/faq/">한국어</a><a href="/faq/en.html">English</a><a href="/faq/zh.html">中文</a></p>
${qa.map(([q, a]) => `<section class="qa"><h2>${esc(q)}</h2><p>${esc(a)}</p></section>`).join('\n')}
</main>
<footer>
${esc(ORG.nameKo)} (${esc(ORG.nameEn)}) · 외국인환자 유치업 등록 제${ORG.regNo}호 (${ORG.regPeriod}) · 종합여행업 제${ORG.travelNo}호<br>
${esc(ORG.addrKo)} · <a href="mailto:${ORG.email}">${ORG.email}</a><br>
Updated ${TODAY}
</footer>
</body>
</html>
`;
}

function write(rel, content) {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
  console.log('  wrote', rel);
}

Object.keys(UI).forEach((k) => write('public/faq/' + UI[k].file, faqHtml(k)));

const faqAlt = ['ko', 'en', 'zh'].map((k) => `<xhtml:link rel="alternate" hreflang="${k}" href="${url(k)}"/>`).join('');
write('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url><loc>${BASE}/</loc><lastmod>${TODAY}</lastmod><priority>1.0</priority></url>
  <url><loc>${url('ko')}</loc><lastmod>${TODAY}</lastmod><priority>0.8</priority>${faqAlt}</url>
  <url><loc>${url('en')}</loc><lastmod>${TODAY}</lastmod><priority>0.8</priority>${faqAlt}</url>
  <url><loc>${url('zh')}</loc><lastmod>${TODAY}</lastmod><priority>0.8</priority>${faqAlt}</url>
  <url><loc>${BASE}/b2c/</loc><lastmod>${TODAY}</lastmod><priority>0.9</priority></url>
  <url><loc>${BASE}/tricare/</loc><lastmod>${TODAY}</lastmod><priority>0.8</priority></url>
</urlset>
`);

write('public/llms.txt', `# Follow Korea (팔로우코리아)

> ${ORG.nameEn} (${ORG.nameKo}) is a foreign patient attraction agency registered with Korea's Ministry of Health and Welfare (Reg. No. ${ORG.regNo}, valid ${ORG.regPeriod}) and a licensed general travel agency (No. ${ORG.travelNo}). It connects international patients with licensed partner clinics in Seoul (mainly Gangnam), runs Chinese influencer (Wanghong/KOC) marketing for clinics, operates the multilingual medical travel platforms Gangnam Follow (followkorea.kr) and 江南FOLLOW (gnfollow.com), and provides the clinic operations system Gangnam Pulse.

- Address: ${ORG.addrEn}
- Contact: ${ORG.email} · KakaoTalk ${ORG.kakaoId}

## Pages
- [FAQ (Korean)](${url('ko')}): clinic partnership, patient attraction marketing, Gangnam Pulse, partner program, licensing
- [FAQ (English)](${url('en')})
- [FAQ (Chinese)](${url('zh')})
- [Gangnam Follow — international patient platform](https://followkorea.kr/): partner clinic directory and patient FAQ in 8 languages (https://followkorea.kr/info/clinics-en.html, https://followkorea.kr/info/faq-en.html)
- [江南FOLLOW — Chinese patient platform](https://gnfollow.com/)
- [Gangnam Pulse demo — clinic operations system](https://gnpulse.kr/demo/)
- [Partner sign-up (influencers, guides, agencies)](https://gnpulse.kr/join/)
- [TRICARE patients (US military in Korea)](${BASE}/tricare/)

## Notes
- Clinic commission terms and patient prices are agreed individually and are not published.
- Follow Korea refers patients only to licensed medical institutions in Korea.
`);
console.log('완료');
