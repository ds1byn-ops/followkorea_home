# Follow Korea

글로벌 환자 유치를 위한 병원 맞춤 메디컬 마케팅 랜딩 페이지.
React 19 + TypeScript + Vite로 제작되었으며, 스타일은 Tailwind(CDN)를 사용합니다.

배포 주소: https://www.followkorea.co.kr

## 로컬 실행

**필요 사항:** Node.js 20 이상

```bash
npm install
npm run dev
```

기본 접속 주소는 http://localhost:3000 입니다.

## 프로덕션 빌드

```bash
npm run build     # 결과물이 dist/ 폴더에 생성됩니다
npm run preview   # 빌드 결과 미리보기
```

## Netlify 배포

이 저장소는 Netlify 자동 배포에 맞게 설정되어 있습니다 (`netlify.toml`).

1. [Netlify](https://app.netlify.com)에 로그인 → **Add new site → Import an existing project**
2. GitHub 저장소 `ds1byn-ops/followkorea_home` 선택
3. 빌드 설정은 `netlify.toml`에서 자동 인식됩니다.
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy** 클릭 → 빌드가 끝나면 `*.netlify.app` 임시 주소가 생성됩니다.

### 커스텀 도메인(www.followkorea.co.kr) 연결

1. Netlify 사이트 → **Domain management → Add a domain** 에서 `followkorea.co.kr` 입력
2. Netlify가 안내하는 DNS 설정을 도메인 등록업체(예: 가비아 등)에 입력합니다.
   - `www` → CNAME → Netlify가 알려주는 주소 (예: `<사이트이름>.netlify.app`)
   - 루트 도메인(`followkorea.co.kr`) → A 레코드 또는 Netlify DNS 사용
3. DNS 전파(수 분~수 시간) 후 HTTPS 인증서가 자동 발급됩니다.

## 참고

- 상담 문의 폼은 [Formspree](https://formspree.io) (`components/ConsultationModal.tsx`)로 전송됩니다. 별도의 서버나 API 키가 필요하지 않습니다.
- 폰트는 Pretendard, 아이콘은 Iconify(Solar), 스타일은 Tailwind CDN을 사용합니다.
