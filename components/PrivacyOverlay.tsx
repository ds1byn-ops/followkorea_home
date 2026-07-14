
import React from 'react';
import { LanguageCode } from '../App';

interface PrivacyOverlayProps {
  onClose: () => void;
  lang: LanguageCode;
}

const PrivacyOverlay: React.FC<PrivacyOverlayProps> = ({ onClose, lang }) => {
  const t = {
    KR: { title: '개인정보처리방침', back: '메인으로 돌아가기' },
    EN: { title: 'Privacy Policy', back: 'Back to Main' },
    CN: { title: '隐私政策', back: '返回首页' },
    JP: { title: 'プライバシーポリシー', back: 'メインに戻る' },
    ID: { title: 'Kebijakan Privasi', back: 'Kembali ke Utama' },
    AR: { title: 'سياسة الخصوصية', back: 'العودة إلى الرئيسية' },
    KH: { title: 'គោលការណ៍ភាពឯកជន', back: 'ត្រឡប់ទៅទំព័រដើម' },
    VI: { title: 'Chính sách bảo mật', back: 'Về trang chính' },
    RU: { title: 'Политика конфиденциальности', back: 'На главную' }
  }[lang];

  return (
    <div className="bg-white min-h-screen pt-32 pb-32 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <span className="text-[#5a82c2] font-black text-xs tracking-[0.4em] uppercase mb-4 block">Follow Korea Privacy</span>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">{t.title}</h1>
        </div>

        <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 text-gray-600 text-sm md:text-base leading-relaxed space-y-10 font-medium border border-gray-100 shadow-sm">
          <p className="text-gray-900 font-bold border-l-4 border-[#5a82c2] pl-4">
            팔로우코리아(이하 ‘회사’라 한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.
          </p>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제1조 (개인정보의 처리목적)</h3>
            <p className="mb-4">회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
            <div className="space-y-4 ml-2">
              <div>
                <h4 className="font-bold text-gray-800">1. 홈페이지 회원 가입 및 관리</h4>
                <p className="text-gray-500 text-sm">회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증, 회원자격 유지․관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정 이용 방지, 만 14세 미만 아동의 개인정보처리 시 법정대리인의 동의 여부 확인, 각종 고지․통지, 고충 처리 등을 목적으로 개인정보를 처리합니다.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">2. 재화 또는 서비스 제공</h4>
                <p className="text-gray-500 text-sm">물품 배송, 서비스 제공, 계약서 및 청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금 결제 및 정산, 채권추심 등을 목적으로 개인정보를 처리합니다.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">3. 고충 처리</h4>
                <p className="text-gray-500 text-sm">민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지, 처리 결과 통보 등의 목적으로 개인정보를 처리합니다.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제2조 (개인정보의 처리 및 보유기간)</h3>
            <p>① 회사는 법령에 따른 개인정보 보유, 이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용 기간 내에서 개인정보를 처리, 보유합니다.</p>
            <p>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
            <div className="mt-4 space-y-4 ml-2">
              <div>
                <p className="font-bold text-gray-800">1. 홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴 시까지</p>
                <p className="text-gray-500 text-xs mt-1">다만, 수사 진행 중인 경우 수사 종료 시까지, 채권/채무 관계 잔존 시 정산 완료 시까지 보관합니다.</p>
              </div>
              <div>
                <p className="font-bold text-gray-800">2. 재화 또는 서비스 제공 : 재화․서비스 공급완료 및 요금결제․정산 완료 시까지</p>
                <p className="text-gray-500 text-xs mt-1">상거래 관련 기록은 법령에 따라 최대 5년(계약/청약철회 등), 통신사실확인자료는 최대 1년 보관합니다.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제5조 (정보주체 및 법정대리인의 권리와 그 행사 방법)</h3>
            <p>① 정보주체는 회사에 대해 언제든지 개인정보 열람 요구, 정정 요구, 삭제 요구, 처리정지 요구 등의 권리를 행사할 수 있습니다.</p>
            <p>② 제1항에 따른 권리 행사는 서면, 전화, 전자우편 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제6조 (처리하는 개인정보 항목)</h3>
            <p>회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
            <p className="mt-2 ml-2 font-bold text-[#5a82c2]">1. 홈페이지 회원 가입 및 관리 (필수항목 : 성명, 전화번호, 이메일주소 등)</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제7조 (개인정보의 파기)</h3>
            <p>① 회사는 개인정보 보유 기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
            <p>② 파기 시 전자적 파일은 복구가 불가능한 방법으로 영구 삭제하며, 종이 문서는 분쇄하거나 소각합니다.</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제8조 (개인정보의 안전성 확보조치)</h3>
            <p>회사는 내부관리계획 수립, 접근 권한 관리, 보안프로그램 설치, 물리적 접근 통제 등 안전성 확보를 위한 기술적/관리적 조치를 시행하고 있습니다.</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제9조 (개인정보 자동 수집 장치의 설치∙운영 및 거부에 관한 사항)</h3>
            <p>회사는 이용자에게 맞춤 서비스를 제공하기 위해 ‘쿠키(cookie)’를 사용합니다. 이용자는 웹 브라우저 옵션 설정을 통해 쿠키 허용 또는 차단을 선택할 수 있습니다.</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제13조 (개인정보 보호책임자 및 회사 정보)</h3>
            <p className="mb-2">회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보 주체의 문의·불만처리·피해구제 등을 위하여 아래와 같이 개인정보 보호책임자 및 회사 정보를 지정·공개합니다.</p>
            <div className="ml-2 space-y-1">
              <p>상호: 팔로우코리아 · 대표: 하장환</p>
              <p>주소: 서울특별시 서초구 강남대로 373, 13층 116호</p>
              <p>사업자등록번호: 696-86-03627</p>
              <p>개인정보 보호책임자 / 문의 이메일: contact@followkorea.co.kr</p>
            </div>
          </section>

          <div className="pt-8 border-t border-gray-200 text-xs text-gray-400">
            <p className="font-bold text-gray-500 mb-1">제14조 (개인정보 처리방침 시행 및 변경)</p>
            <p>이 개인정보 처리방침은 2026.01.29. 부터 적용됩니다.</p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <button 
            onClick={onClose} 
            className="inline-flex items-center gap-4 text-gray-400 hover:text-[#5a82c2] font-black tracking-widest uppercase transition-all group"
          >
            <span className="iconify text-3xl group-hover:-translate-x-3 transition-transform" data-icon="solar:alt-arrow-left-linear"></span>
            <span className="text-sm md:text-lg">{t.back}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyOverlay;
