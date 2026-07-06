
import React from 'react';
import { LanguageCode } from '../App';

interface TermsOverlayProps {
  onClose: () => void;
  lang: LanguageCode;
}

const TermsOverlay: React.FC<TermsOverlayProps> = ({ onClose, lang }) => {
  const t = {
    KR: { title: '이용약관', back: '메인으로 돌아가기' },
    EN: { title: 'Terms of Use', back: 'Back to Main' },
    CN: { title: '使用条款', back: '返回首页' },
    JP: { title: '利用規約', back: 'メインに戻る' },
    ID: { title: 'Ketentuan Penggunaan', back: 'Kembali ke Utama' },
    AR: { title: 'شروط الاستخدام', back: 'العودة إلى الرئيسية' },
    KH: { title: 'លក្ខខណ្ឌប្រើប្រាស់', back: 'ត្រឡប់ទៅទំព័រដើម' },
    VI: { title: 'Điều khoản sử dụng', back: 'Về trang chính' },
    RU: { title: 'Условия использования', back: 'На главную' }
  }[lang];

  return (
    <div className="bg-white min-h-screen pt-32 pb-32 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <span className="text-[#5a82c2] font-black text-xs tracking-[0.4em] uppercase mb-4 block">Follow Korea Legal</span>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">{t.title}</h1>
        </div>

        <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 text-gray-600 text-sm md:text-base leading-relaxed space-y-8 font-medium border border-gray-100 shadow-sm">
          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제1조 목적</h3>
            <p>본 이용약관은 “팔로우코리아”(이하 "사이트")의 서비스의 이용조건과 운영에 관한 제반 사항 규정을 목적으로 합니다.</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제2조 용어의 정의</h3>
            <p>본 약관에서 사용되는 주요한 용어의 정의는 다음과 같습니다.</p>
            <ul className="list-none space-y-2 mt-2 ml-2">
              <li>① 회원 : 사이트의 약관에 동의하고 개인정보를 제공하여 회원등록을 한 자로서, 사이트와의 이용계약을 체결하고 사이트를 이용하는 이용자를 말합니다.</li>
              <li>② 이용계약 : 사이트 이용과 관련하여 사이트와 회원간에 체결 하는 계약을 말합니다.</li>
              <li>③ 회원 아이디(이하 "ID") : 회원의 식별과 회원의 서비스 이용을 위하여 회원별로 부여하는 고유한 문자와 숫자의 조합을 말합니다.</li>
              <li>④ 비밀번호 : 회원이 부여받은 ID와 일치된 회원임을 확인하고 회원의 권익 보호를 위하여 회원이 선정한 문자와 숫자의 조합을 말합니다.</li>
              <li>⑤ 운영자 : 서비스에 홈페이지를 개설하여 운영하는 운영자를 말합니다.</li>
              <li>⑥ 해지 : 회원이 이용계약을 해약하는 것을 말합니다.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제3조 약관 외 준칙</h3>
            <p>운영자는 필요한 경우 별도로 운영정책을 공지 안내할 수 있으며, 본 약관과 운영정책이 중첩될 경우 운영정책이 우선 적용됩니다.</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제4조 이용계약 체결</h3>
            <p>① 이용계약은 회원으로 등록하여 사이트를 이용하려는 자의 본 약관 내용에 대한 동의와 가입신청에 대하여 운영자의 이용승낙으로 성립합니다.</p>
            <p>② 회원으로 등록하여 서비스를 이용하려는 자는 사이트 가입신청 시 본 약관을 읽고 아래에 있는 "동의합니다"를 선택하는 것으로 본 약관에 대한 동의 의사 표시를 합니다.</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제5조 서비스 이용 신청</h3>
            <p>① 회원으로 등록하여 사이트를 이용하려는 이용자는 사이트에서 요청하는 제반정보(이용자ID,비밀번호, 닉네임 등)를 제공해야 합니다.</p>
            <p>② 타인의 정보를 도용하거나 허위의 정보를 등록하는 등 본인의 진정한 정보를 등록하지 않은 회원은 사이트 이용과 관련하여 아무런 권리를 주장할 수 없으며, 관계 법령에 따라 처벌받을 수 있습니다.</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제6조 개인정보처리방침</h3>
            <p>사이트 및 운영자는 회원가입 시 제공한 개인정보 중 비밀번호를 가지고 있지 않으며 이와 관련된 부분은 사이트의 개인정보처리방침을 따릅니다. 운영자는 관계 법령이 정하는 바에 따라 회원등록정보를 포함한 회원의 개인정보를 보호하기 위하여 노력합니다.</p>
            <p className="mt-2 font-semibold">회원의 개인정보보호에 관하여 관계법령 및 사이트가 정하는 개인정보처리방침에 정한 바에 따릅니다.</p>
            <p className="mt-2 text-gray-400">단, 회원의 귀책 사유로 인해 노출된 정보에 대해 운영자는 일체의 책임을 지지 않습니다. 운영자는 회원이 미풍양속에 저해되거나 국가안보에 위배되는 게시물 등 위법한 게시물을 등록 · 배포할 경우 관련 기관의 요청이 있을 시 회원의 자료를 열람 및 해당 자료를 관련 기관에 제출할 수 있습니다.</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제7조 운영자의 의무</h3>
            <p>① 운영자는 이용회원으로부터 제기되는 의견이나 불만이 정당하다고 인정할 경우에는 가급적 빨리 처리하여야 합니다. 다만, 개인적인 사정으로 신속한 처리가 곤란한 경우에는 사후에 공지 또는 이용회원에게 쪽지, 전자우편 등을 보내는 등 최선을 다합니다.</p>
            <p>② 운영자는 계속적이고 안정적인 사이트 제공을 위하여 설비에 장애가 생기거나 유실된 때에는 이를 지체 없이 수리 또는 복구할 수 있도록 사이트에 요구할 수 있습니다. 다만, 천재지변 또는 사이트나 운영자에 부득이한 사유가 있는 경우, 사이트 운영을 일시 정지할 수 있습니다.</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제8조 회원의 의무</h3>
            <p>① 회원은 본 약관에서 규정하는 사항과 운영자가 정한 제반 규정, 공지사항 및 운영정책 등 사이트가 공지하는 사항 및 관계 법령을 준수하여야 하며, 기타 사이트의 업무에 방해가 되는 행위, 사이트의 명예를 손상하는 행위를 해서는 안 됩니다.</p>
            <p>② 회원은 사이트의 명시적 동의가 없는 한 서비스의 이용 권한, 기타 이용계약상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.</p>
            <p>③ 이용고객은 아이디 및 비밀번호 관리에 상당한 주의를 기울여야 하며, 운영자나 사이트의 동의 없이 제3자에게 아이디를 제공하여 이용하게 할 수 없습니다.</p>
            <p>④ 회원은 운영자와 사이트 및 제3자의 지적 재산권을 침해해서는 안 됩니다.</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제9조 서비스 이용 시간</h3>
            <p>① 서비스 이용 시간은 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간을 원칙으로 합니다. 단, 사이트는 시스템 정기점검, 증설 및 교체를 위해 사이트가 정한 날이나 시간에 서비스를 일시중단 할 수 있으며 예정된 작업으로 인한 서비스 일시 중단은 사이트의 홈페이지에 사전에 공지하오니 수시로 참고하시길 바랍니다.</p>
            <p>② 단, 사이트는 다음 경우에 대하여 사전 공지나 예고 없이 서비스를 일시적 혹은 영구적으로 중단할 수 있습니다.</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>긴급한 시스템 점검, 증설, 교체, 고장 혹은 오동작을 일으키는 경우</li>
              <li>국가비상사태, 정전, 천재지변 등의 불가항력적인 사유가 있는 경우</li>
              <li>전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지한 경우</li>
              <li>서비스 이용의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우</li>
            </ul>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제10조 서비스 이용 해지</h3>
            <p>① 회원이 사이트와의 이용계약을 해지하고자 하는 경우에는 회원 본인이 온라인을 통하여 등록해지 신청을 하여야 합니다.</p>
            <p>② 해지 신청과 동시에 사이트가 제공하는 사이트 관련 프로그램이 회원 관리 화면에서 자동적으로 삭제됨으로 운영자는 더 이상 해지신청자의 정보를 볼 수 없습니다.</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제11조 서비스 이용 제한</h3>
            <p>회원은 다음 각호에 해당하는 행위를 하여서는 아니 되며 해당 행위를 한 경우에 사이트는 회원의 서비스 이용 제한 및 적법한 조치를 할 수 있습니다.</p>
            <p className="mt-2 text-gray-500">허위 내용 등록, 정보 도용, 운영진 사칭, 지적재산권 침해, ID 부정 사용, 개인정보 무단 수집 등</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제12조 게시물의 관리</h3>
            <p>사이트의 게시물과 자료의 관리 및 운영의 책임은 운영자에게 있습니다. 운영자는 항상 불량 게시물 및 자료에 대하여 모니터링을 하여야 하며, 불량 게시물을 발견하거나 신고를 받으면 이를 삭제할 수 있습니다.</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제14조 게시물에 대한 저작권</h3>
            <p>① 회원이 사이트 내에 게시한 게시물의 저작권은 게시한 회원에게 귀속됩니다. 또한 사이트는 게시자의 동의 없이 게시물을 상업적으로 이용할 수 없습니다.</p>
          </section>

          <section>
            <h3 className="text-gray-900 font-bold text-lg mb-4">제16조 면책</h3>
            <p>운영자는 서버 등 설비의 관리, 점검, 보수 과정에서 발생하는 불가항력적인 시스템 장애나 제3자의 공격 등으로 인한 회원의 손해에 대하여 책임을 지지 않습니다.</p>
          </section>

          <div className="pt-8 border-t border-gray-200 text-xs text-gray-400">
            <p>부칙</p>
            <p>이 약관은 &lt;2025.01.29&gt;부터 시행합니다.</p>
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

export default TermsOverlay;
