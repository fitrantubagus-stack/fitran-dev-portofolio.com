import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SectionId } from '../types';
import { VibeCodingComputer } from './VibeCodingComputer';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import {
  ArrowUp,
  Github,
  Linkedin,
  Instagram,
  Copy,
  Check,
  Mail,
  Send,
  User,
  AtSign,
  Tag,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Loader2,
} from 'lucide-react';

interface ContactFooterProps {
  onNavigate: (section: SectionId) => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const { t, language } = useLanguage();

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus('submitting');
    try {
      const response = await fetch('https://formsubmit.co/ajax/fitranbadrttmamtb@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          _subject: `[Portfolio] Pesan Kerja Sama dari ${name.trim()} - ${subject.trim() || 'Inquiry Proyek'}`,
          subject: subject.trim() || 'Kerja Sama Proyek',
          message: message.trim(),
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        throw new Error('Gagal mengirim via API FormSubmit');
      }
    } catch (err) {
      console.warn('Form submission fallback:', err);
      setStatus('error');
    }
  };

  const mailtoFallbackUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    subject.trim() || `Kerja Sama Proyek dari ${name.trim() || 'Klien'}`
  )}&body=${encodeURIComponent(
    `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`
  )}`;

  return (
    <footer id="contact" className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090B] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3D Vibe Coding Desktop Workstation (360° Rotatable) */}
        <ScrollReveal variant="zoom-in">
          <VibeCodingComputer className="mb-12" />
        </ScrollReveal>

        {/* Interactive Collaboration Card & Contact Form */}
        <ScrollReveal variant="fade-up" delay={60}>
          <div className="rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-gradient-to-b from-zinc-50/80 via-white to-zinc-50/40 dark:from-[#0D1117] dark:via-zinc-900/60 dark:to-[#0D1117] p-6 sm:p-10 shadow-sm transition-all">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-zinc-200/80 dark:border-zinc-800/80">
            <div className="flex items-start gap-4">
              <span className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 ring-1 ring-emerald-500/20">
                <Mail className="w-7 h-7" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-zinc-950 dark:text-white tracking-tight">
                    {t.footer.readyToBuild}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1.5 max-w-2xl leading-relaxed">
                  {t.footer.getInTouch}
                </p>
              </div>
            </div>
          </div>

          {/* Form Body */}
          <div className="pt-8">
            {status === 'success' ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-bold text-lg sm:text-xl text-zinc-950 dark:text-white">
                  {t.footer.formSuccessTitle}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-lg leading-relaxed">
                  {t.footer.formSuccessDesc}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-5 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-mono text-xs font-medium text-zinc-800 dark:text-zinc-200 transition-colors"
                >
                  {t.footer.formSendSendAnother || t.footer.formSendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-amber-800 dark:text-amber-200">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-amber-500" />
                      <span>{t.footer.formErrorDesc}</span>
                    </div>
                    <a
                      href={mailtoFallbackUrl}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-zinc-950 font-bold shrink-0 hover:bg-amber-400 transition-colors"
                    >
                      <span>Buka Aplikasi Email</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{t.footer.formName}</span>
                      <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.footer.formNamePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all font-sans"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5 flex items-center gap-1.5">
                      <AtSign className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{t.footer.formEmail}</span>
                      <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.footer.formEmailPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all font-sans"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{t.footer.formSubject}</span>
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={t.footer.formSubjectPlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all font-sans"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{t.footer.formMessage}</span>
                    <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.footer.formMessagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all font-sans resize-y"
                  />
                </div>

                {/* Action Row */}
                <div className="flex items-center justify-end pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{t.footer.formSending}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.footer.formSubmit}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          </div>
        </ScrollReveal>

        {/* Social Links & Meta Footer */}
        <div className="mt-10 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 dark:hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 dark:hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 dark:hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
            <a
              href={PERSONAL_INFO.socialLinks.googleDev}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-950 dark:hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>Google Developer</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. {t.footer.rights}</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
