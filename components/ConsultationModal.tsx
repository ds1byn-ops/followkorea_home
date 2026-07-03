
import React, { useEffect, useState } from 'react';
import { LanguageCode } from '../App';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: LanguageCode;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose, lang }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPrivacyDetail, setShowPrivacyDetail] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    email: '',
    content: ''
  });

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => {
        setIsAnimating(false);
        setShowPrivacyDetail(false);
      }, 300);
      if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'auto';
      }
    }
  }, [isOpen]);

  const t = {
    KR: {
      badge: 'Get in Touch', title: '상담 신청', sub: 'Follow Korea의 전문 컨설턴트가 최적의 솔루션을 제안해 드립니다.',
      name: '이름', tel: '연락처', email: '이메일', content: '문의 내용',
      namePlaceholder: '성함을 입력해주세요', telPlaceholder: '010-0000-0000', emailPlaceholder: 'example@email.com', contentPlaceholder: '상담 내용을 입력해주세요',
      agree: '개인정보 수집 및 이용에 동의합니다.', detail: '자세히 보기', submit: '상담 신청하기', submitting: '전송 중...',
      success: '상담 신청이 정상적으로 접수되었습니다.\n담당자가 확인 후 빠르게 연락드리겠습니다.', error: '전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.', alertAgree: '개인정보 수집 및 이용에 동의해주세요.'
    },
    EN: {
      badge: 'Get in Touch', title: 'Consultation Request', sub: 'Our expert consultants will provide the best solution for you.',
      name: 'Name', tel: 'Phone', email: 'Email', content: 'Message',
      namePlaceholder: 'Your full name', telPlaceholder: 'Include country code', emailPlaceholder: 'example@email.com', contentPlaceholder: 'Describe your requirements',
      agree: 'I agree to the collection and use of personal information.', detail: 'View Details', submit: 'Submit Request', submitting: 'Sending...',
      success: 'Your consultation request has been successfully received.\nA representative will contact you shortly.', error: 'An error occurred. Please try again later.', alertAgree: 'Please agree to the privacy policy.'
    },
    CN: {
      badge: 'Get in Touch', title: '申请咨询', sub: 'Follow Korea 的专业顾问将为您提供最佳解决方案。',
      name: '姓名', tel: '联系电话', email: '电子邮箱', content: '咨询内容',
      namePlaceholder: '请输入姓名', telPlaceholder: '请输入联系方式', emailPlaceholder: 'example@email.com', contentPlaceholder: '请输入详细咨询内容',
      agree: '我同意收集和使用个人信息。', detail: '查看详情', submit: '提交申请', submitting: '正在发送...',
      success: '咨询申请已成功受理。\n负责人将尽快与您联系。', error: '发送时出错，请稍后再试。', alertAgree: '请同意个人信息收集及利用协议。'
    }
  }[lang];

  if (!isOpen && !isAnimating) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAgreed) {
      alert(t.alertAgree);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xlgngwaw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.tel,
          email: formData.email,
          message: formData.content,
          _subject: `[팔로우코리아] 신규 상담 신청 - ${formData.name}님`,
          submittedAt: new Date().toLocaleString()
        })
      });

      if (response.ok) {
        alert(t.success);
        setFormData({ name: '', tel: '', email: '', content: '' });
        setIsAgreed(false);
        onClose();
      } else {
        alert(t.error);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose}></div>
      <div className={`relative w-full max-w-xl bg-white rounded-[3rem] shadow-2xl overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-12 scale-95'}`}>
        <button onClick={onClose} className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-gray-900 transition-all shadow-sm hover:scale-110 active:scale-90">
          <span className="iconify text-3xl" data-icon="solar:close-circle-linear"></span>
        </button>

        <div className="p-8 md:p-14 max-h-[90vh] overflow-y-auto">
          <div className="mb-10 text-center">
            <span className="text-[#5a82c2] font-black text-xs tracking-[0.3em] uppercase mb-4 block">{t.badge}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{t.title}</h2>
            <p className="text-gray-400 mt-4 text-sm md:text-base font-medium">{t.sub}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">{t.name}</label>
                <input 
                  required 
                  type="text" 
                  name="name"
                  disabled={isSubmitting}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.namePlaceholder} 
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#5a82c2]/20 focus:border-[#5a82c2] transition-all disabled:opacity-50" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">{t.tel}</label>
                <input 
                  required 
                  type="tel" 
                  name="tel"
                  disabled={isSubmitting}
                  value={formData.tel}
                  onChange={handleChange}
                  placeholder={t.telPlaceholder} 
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#5a82c2]/20 focus:border-[#5a82c2] transition-all disabled:opacity-50" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">{t.email}</label>
              <input 
                required 
                type="email" 
                name="email"
                disabled={isSubmitting}
                value={formData.email}
                onChange={handleChange}
                placeholder={t.emailPlaceholder} 
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#5a82c2]/20 focus:border-[#5a82c2] transition-all disabled:opacity-50" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">{t.content}</label>
              <textarea 
                required 
                rows={4} 
                name="content"
                disabled={isSubmitting}
                value={formData.content}
                onChange={handleChange}
                placeholder={t.contentPlaceholder} 
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#5a82c2]/20 focus:border-[#5a82c2] transition-all resize-none disabled:opacity-50"
              ></textarea>
            </div>
            
            <div className="flex items-start gap-4 px-1 py-3">
              <div 
                className={`relative w-7 h-7 rounded-lg cursor-pointer transition-all duration-200 border flex items-center justify-center shadow-sm ${isAgreed ? 'bg-[#5a82c2] border-[#5a82c2] scale-105' : 'bg-sky-50 border-sky-100 hover:border-[#5a82c2]/50'} ${isSubmitting ? 'pointer-events-none opacity-50' : ''}`} 
                onClick={() => !isSubmitting && setIsAgreed(!isAgreed)}
              >
                <span 
                  className={`iconify text-white text-xl transition-all duration-300 transform ${isAgreed ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-12'}`} 
                  data-icon="solar:check-bold"
                ></span>
              </div>
              <div className="text-xs md:text-sm leading-6">
                <label className="font-semibold text-gray-500 cursor-pointer select-none" onClick={() => !isSubmitting && setIsAgreed(!isAgreed)}>
                  {t.agree}
                </label>
                <button type="button" onClick={() => setShowPrivacyDetail(true)} className="ml-3 text-gray-300 underline hover:text-[#5a82c2] transition-colors font-medium disabled:opacity-50" disabled={isSubmitting}>{t.detail}</button>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#5a82c2] text-white py-6 rounded-2xl font-bold hover:bg-[#4a6da3] transition-all shadow-xl shadow-[#5a82c2]/20 active:scale-[0.98] mt-6 flex items-center justify-center gap-3 text-base md:text-lg disabled:bg-gray-400 disabled:shadow-none"
            >
              {isSubmitting ? (
                <>
                  <span className="iconify animate-spin" data-icon="solar:restart-linear"></span>
                  <span>{t.submitting}</span>
                </>
              ) : (
                <>
                  <span>{t.submit}</span>
                  <span className="iconify text-2xl" data-icon="solar:arrow-right-linear"></span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
