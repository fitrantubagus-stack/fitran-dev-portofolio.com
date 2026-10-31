import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SectionId } from '../types';
import { VibeCodingComputer } from './VibeCodingComputer';
import { GoogleDeveloperLogo } from './GoogleDeveloperLogo';
import { ScrollReveal } from './ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import { DesignTheme } from './Navbar';
import {
  ArrowUp,
  Github,
  Linkedin,
  Instagram,
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
  FileText,
  Clock,
  MapPin,
  ArrowRight,
} from 'lucide-react';

interface ContactFooterProps {
  onNavigate: (section: SectionId) => void;
  onOpenCV?: () => void;
  designTheme?: DesignTheme;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({
  onNavigate,
  onOpenCV,
  designTheme = 'modern',
}) => {
  const { t, language } = useLanguage();
  const isAnimasi = designTheme === 'clipboard';
  const isKlasik = designTheme === 'arcade';

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const quickNavLinks: { id: SectionId; label: string }[] = [
    { id: 'home', label: language === 'id' ? 'Beranda' : 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'work', label: language === 'id' ? 'Proyek' : 'Projects' },
    { id: 'certificates', label: language === 'id' ? 'Sertifikat' : 'Certificates' },
    { id: 'ecosystem', label: language === 'id' ? 'Ekosistem' : 'Ecosystem' },
    { id: 'craft-lab', label: 'Fitran CLI' },
    { id: 'contact', label: language === 'id' ? 'Kontak' : 'Contact' },
  ];

  return (
    <footer
      id="contact"
      className={`w-full pt-14 pb-0 transition-colors duration-500 ${
        isAnimasi
          ? 'border-t border-indigo-500/30 bg-[#060913] text-white'
          : isKlasik
          ? 'border-t-2 border-[#B48A3E] bg-[#F7F3E8] dark:bg-[#121110]'
          : 'border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090B]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* 3D Vibe Coding Smartphone Showcase (360° Rotatable) */}
        <ScrollReveal variant="zoom-in">
          <VibeCodingComputer className="mb-12" />
        </ScrollReveal>

        {/* Interactive Collaboration Card & Contact Form */}
        <ScrollReveal variant="fade-up" delay={60}>
          <div
            className={`p-6 sm:p-10 transition-all ${
              isAnimasi
                ? 'rounded-3xl border-2 border-indigo-500/40 bg-slate-900/90 backdrop-blur-xl shadow-[0_12px_40px_rgba(79,70,229,0.25)]'
                : isKlasik
                ? 'rounded-none border-2 border-[#B48A3E] bg-[#FDFBF7] dark:bg-[#1A1816] shadow-md'
                : 'rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-gradient-to-b from-zinc-50/80 via-white to-zinc-50/40 dark:from-[#0D1117] dark:via-zinc-900/60 dark:to-[#0D1117] shadow-sm'
            }`}
          >
            {/* Header */}
            <div
              className={`flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b ${
                isAnimasi
                  ? 'border-indigo-500/30'
                  : isKlasik
                  ? 'border-[#B48A3E]/40'
                  : 'border-zinc-200/80 dark:border-zinc-800/80'
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`p-3.5 shrink-0 ${
                    isAnimasi
                      ? 'rounded-2xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/30'
                      : isKlasik
                      ? 'rounded-none bg-[#1C1917] text-[#E5C158] border border-[#B48A3E]'
                      : 'rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20'
                  }`}
                >
                  <Mail className="w-7 h-7" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <h3
                      className={`font-heading font-extrabold text-xl sm:text-2xl tracking-tight ${
                        isAnimasi
                          ? 'text-white'
                          : isKlasik
                          ? 'font-serif text-zinc-950 dark:text-stone-100'
                          : 'text-zinc-950 dark:text-white'
                      }`}
                    >
                      {t.footer.readyToBuild}
                    </h3>
                  </div>
                  <p
                    className={`text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed ${
                      isAnimasi
                        ? 'text-slate-300'
                        : isKlasik
                        ? 'text-zinc-700 dark:text-stone-300 font-serif'
                        : 'text-zinc-600 dark:text-zinc-400'
                    }`}
                  >
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
                  <h4
                    className={`font-heading font-bold text-lg sm:text-xl ${
                      isAnimasi ? 'text-white' : 'text-zinc-950 dark:text-white'
                    }`}
                  >
                    {t.footer.formSuccessTitle}
                  </h4>
                  <p
                    className={`text-sm mt-2 max-w-lg leading-relaxed ${
                      isAnimasi ? 'text-slate-300' : 'text-zinc-600 dark:text-zinc-400'
                    }`}
                  >
                    {t.footer.formSuccessDesc}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-5 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-mono text-xs font-medium text-zinc-800 dark:text-zinc-200 transition-colors cursor-pointer"
                  >
                    {t.footer.formSendAnother}
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
                      <label
                        className={`block text-xs font-mono font-semibold mb-1.5 flex items-center gap-1.5 ${
                          isAnimasi ? 'text-slate-200' : 'text-zinc-700 dark:text-zinc-300'
                        }`}
                      >
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
                        className={`w-full px-4 py-2.5 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all font-sans ${
                          isAnimasi
                            ? 'rounded-xl border border-indigo-500/40 bg-slate-950/80 text-white'
                            : isKlasik
                            ? 'rounded-none border border-[#B48A3E]/60 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-stone-100'
                            : 'rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 text-zinc-900 dark:text-zinc-100'
                        }`}
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label
                        className={`block text-xs font-mono font-semibold mb-1.5 flex items-center gap-1.5 ${
                          isAnimasi ? 'text-slate-200' : 'text-zinc-700 dark:text-zinc-300'
                        }`}
                      >
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
                        className={`w-full px-4 py-2.5 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all font-sans ${
                          isAnimasi
                            ? 'rounded-xl border border-indigo-500/40 bg-slate-950/80 text-white'
                            : isKlasik
                            ? 'rounded-none border border-[#B48A3E]/60 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-stone-100'
                            : 'rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 text-zinc-900 dark:text-zinc-100'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label
                      className={`block text-xs font-mono font-semibold mb-1.5 flex items-center gap-1.5 ${
                        isAnimasi ? 'text-slate-200' : 'text-zinc-700 dark:text-zinc-300'
                      }`}
                    >
                      <Tag className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{t.footer.formSubject}</span>
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder={t.footer.formSubjectPlaceholder}
                      className={`w-full px-4 py-2.5 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all font-sans ${
                        isAnimasi
                          ? 'rounded-xl border border-indigo-500/40 bg-slate-950/80 text-white'
                          : isKlasik
                          ? 'rounded-none border border-[#B48A3E]/60 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-stone-100'
                          : 'rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 text-zinc-900 dark:text-zinc-100'
                      }`}
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label
                      className={`block text-xs font-mono font-semibold mb-1.5 flex items-center gap-1.5 ${
                        isAnimasi ? 'text-slate-200' : 'text-zinc-700 dark:text-zinc-300'
                      }`}
                    >
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
                      className={`w-full px-4 py-3 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all font-sans resize-y ${
                        isAnimasi
                          ? 'rounded-xl border border-indigo-500/40 bg-slate-950/80 text-white'
                          : isKlasik
                          ? 'rounded-none border border-[#B48A3E]/60 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-stone-100'
                          : 'rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 text-zinc-900 dark:text-zinc-100'
                      }`}
                    />
                  </div>

                  {/* Action Row */}
                  <div className="flex items-center justify-end pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className={`w-full sm:w-auto px-7 py-3 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer ${
                        isAnimasi
                          ? 'rounded-xl bg-gradient-to-r from-indigo-600 via-cyan-500 to-indigo-600 text-white shadow-[0_0_25px_rgba(6,182,212,0.35)]'
                          : isKlasik
                          ? 'rounded-none bg-[#1C1917] text-[#E5C158] border-2 border-[#B48A3E] hover:bg-[#B48A3E] hover:text-black'
                          : 'rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-500 hover:to-teal-500 text-white'
                      }`}
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
      </div>

      {/* ===================================================================== */}
      {/* FULL-BLEED 100% EDGE-TO-EDGE PIXEL FOOTER BOX (Inspired by SembuhMed) */}
      {/* No outer left/right/bottom margins — spans 100% viewport width        */}
      {/* ===================================================================== */}
      <div
        className={`w-full relative overflow-hidden pt-16 pb-20 transition-colors duration-500 ${
          isAnimasi
            ? 'bg-gradient-to-b from-[#090F22] to-[#050811] text-white border-t-2 border-indigo-500/40'
            : isKlasik
            ? 'bg-[#EAE2CE] dark:bg-[#181614] text-zinc-900 dark:text-stone-100 border-t-4 border-[#B48A3E]'
            : 'bg-[#EDE6D3] dark:bg-[#0D131F] text-zinc-900 dark:text-white border-t-4 border-black'
        }`}
        style={
          !isKlasik
            ? {
                backgroundImage:
                  'linear-gradient(to right, rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.035) 1px, transparent 1px)',
                backgroundSize: '18px 18px',
              }
            : undefined
        }
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          {/* 3-Column Full-Width Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12">
            {/* COLUMN 1 (Left 5 Cols): Brand Wordmark with Peeking 8-Bit Mascots + Hashtag + Bio + CTA Button */}
            <div className="md:col-span-5 space-y-4">
              {/* Brand Wordmark with Playful Peeking 8-Bit Pixel Sprites */}
              <div className="inline-flex items-end relative pt-4">
                {/* Peeking Teal 8-Bit Sprite on Left */}
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 16 16"
                  shapeRendering="crispEdges"
                  className="-mr-1.5 mb-1 shrink-0"
                >
                  <rect x="3" y="4" width="10" height="10" fill="#0D9488" />
                  <rect x="2" y="6" width="12" height="6" fill="#14B8A6" />
                  <rect x="5" y="7" width="2" height="2" fill="#0F172A" />
                  <rect x="9" y="7" width="2" height="2" fill="#0F172A" />
                  <rect x="6" y="10" width="4" height="1" fill="#0F172A" />
                </svg>

                {/* Peeking Blue 8-Bit Mascot on Top of Wordmark */}
                <svg
                  width="28"
                  height="20"
                  viewBox="0 0 16 12"
                  shapeRendering="crispEdges"
                  className="absolute -top-0.5 left-14 pointer-events-none"
                >
                  <rect x="3" y="2" width="10" height="8" fill="#2563EB" />
                  <rect x="2" y="4" width="12" height="6" fill="#3B82F6" />
                  <rect x="5" y="5" width="2" height="2" fill="#FFFFFF" />
                  <rect x="9" y="5" width="2" height="2" fill="#FFFFFF" />
                  <rect x="6" y="6" width="1" height="1" fill="#0F172A" />
                  <rect x="10" y="6" width="1" height="1" fill="#0F172A" />
                </svg>

                <span
                  className={`font-heading font-black text-3xl sm:text-4xl tracking-tight leading-none ${
                    isAnimasi
                      ? 'text-white'
                      : isKlasik
                      ? 'font-serif text-zinc-950 dark:text-stone-100'
                      : 'text-zinc-950 dark:text-white'
                  }`}
                >
                  fitran
                </span>

                {/* Peeking Orange 8-Bit Mascot on Right + .dev superscript */}
                <div className="flex flex-col items-start ml-0.5">
                  <span
                    className={`font-mono font-black text-xs leading-none mb-0.5 ${
                      isAnimasi
                        ? 'text-cyan-400'
                        : isKlasik
                        ? 'text-[#856222] dark:text-[#E5C158]'
                        : 'text-zinc-900 dark:text-yellow-300'
                    }`}
                  >
                    .dev
                  </span>
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 16 12"
                    shapeRendering="crispEdges"
                  >
                    <rect x="2" y="2" width="12" height="10" fill="#EA580C" />
                    <rect x="1" y="4" width="14" height="8" fill="#F97316" />
                    <rect x="5" y="5" width="2" height="2" fill="#0F172A" />
                    <rect x="10" y="5" width="2" height="2" fill="#0F172A" />
                  </svg>
                </div>
              </div>

              {/* Hashtag Line */}
              <p
                className={`font-heading font-extrabold text-sm sm:text-base ${
                  isAnimasi
                    ? 'text-cyan-400'
                    : isKlasik
                    ? 'text-[#856222] dark:text-[#E5C158]'
                    : 'text-[#00A884] dark:text-emerald-400'
                }`}
              >
                #DataEngineering &amp; #BackendDev
              </p>

              {/* Bio Description */}
              <p
                className={`text-sm leading-relaxed max-w-md ${
                  isAnimasi
                    ? 'text-slate-300'
                    : isKlasik
                    ? 'text-zinc-700 dark:text-stone-300'
                    : 'text-zinc-700 dark:text-zinc-300'
                }`}
              >
                {language === 'id'
                  ? 'Mahasiswa S1 Informatika Universitas Muhammadiyah Banten yang fokus mempelajari Data Engineering, Backend Development, serta arsitektur Cloud & AI.'
                  : 'Informatics Undergraduate at Universitas Muhammadiyah Banten focusing on Data Engineering, Backend Development, and Cloud & AI architecture.'}
              </p>

              {/* Prominent Pill / Pixel CTA Button for Official CV */}
              <div className="pt-2">
                {onOpenCV ? (
                  <button
                    type="button"
                    onClick={onOpenCV}
                    className={`inline-flex items-center gap-3 px-6 py-3.5 font-heading font-bold text-sm transition-all cursor-pointer ${
                      isAnimasi
                        ? 'rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-105'
                        : isKlasik
                        ? 'rounded-none bg-[#1C1917] text-[#E5C158] border-2 border-[#B48A3E] hover:bg-[#B48A3E] hover:text-black'
                        : 'rounded-full bg-[#00A884] hover:bg-[#008F6F] text-zinc-950 font-black border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#000]'
                    }`}
                  >
                    <FileText className="w-4 h-4 stroke-[2.5]" />
                    <span>Lihat / Unduh CV Resmi (PDF)</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                ) : (
                  <a
                    href="/CV-Tubagus-Fitran-Badruttamam.pdf"
                    download="CV-Tubagus-Fitran-Badruttamam.pdf"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#00A884] hover:bg-[#008F6F] text-zinc-950 font-heading font-black text-sm border-2 border-black shadow-[4px_4px_0px_#000] transition-all"
                  >
                    <FileText className="w-4 h-4 stroke-[2.5]" />
                    <span>Unduh CV Resmi (PDF)</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                )}
              </div>
            </div>

            {/* COLUMN 2 (Middle 3 Cols): JELAJAHI Navigation Links */}
            <div className="md:col-span-3 space-y-4">
              <p
                className={`font-mono text-xs font-bold uppercase tracking-[0.18em] ${
                  isAnimasi
                    ? 'text-cyan-300'
                    : isKlasik
                    ? 'text-[#856222] dark:text-[#E5C158]'
                    : 'text-zinc-500 dark:text-zinc-400'
                }`}
              >
                JELAJAHI
              </p>
              <ul className="space-y-3">
                {quickNavLinks.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => onNavigate(item.id)}
                      className={`text-sm font-heading font-bold transition-colors cursor-pointer hover:underline ${
                        isAnimasi
                          ? 'text-slate-200 hover:text-cyan-300'
                          : isKlasik
                          ? 'font-serif text-zinc-900 dark:text-stone-200 hover:text-[#B48A3E]'
                          : 'text-zinc-900 dark:text-zinc-100 hover:text-[#00A884]'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3 (Right 4 Cols): HUBUNGI & Brand-Colored Social Buttons */}
            <div className="md:col-span-4 space-y-4">
              <p
                className={`font-mono text-xs font-bold uppercase tracking-[0.18em] ${
                  isAnimasi
                    ? 'text-cyan-300'
                    : isKlasik
                    ? 'text-[#856222] dark:text-[#E5C158]'
                    : 'text-zinc-500 dark:text-zinc-400'
                }`}
              >
                HUBUNGI
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Clock
                    className={`w-4 h-4 mt-0.5 shrink-0 ${
                      isAnimasi
                        ? 'text-cyan-400'
                        : isKlasik
                        ? 'text-[#B48A3E]'
                        : 'text-[#00A884]'
                    }`}
                  />
                  <span
                    className={
                      isAnimasi
                        ? 'text-slate-300'
                        : 'text-zinc-700 dark:text-zinc-300 font-medium'
                    }
                  >
                    Senin – Minggu, Terbuka untuk Kolaborasi &amp; Diskusi
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    className={`w-4 h-4 mt-0.5 shrink-0 ${
                      isAnimasi
                        ? 'text-cyan-400'
                        : isKlasik
                        ? 'text-[#B48A3E]'
                        : 'text-[#00A884]'
                    }`}
                  />
                  <span
                    className={
                      isAnimasi
                        ? 'text-slate-300'
                        : 'text-zinc-700 dark:text-zinc-300 font-medium'
                    }
                  >
                    Kota Cilegon, Provinsi Banten, Indonesia
                  </span>
                </div>
              </div>

              {/* 4 Brand-Colored Official Social Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 font-mono text-xs">
                {/* 1. GitHub Button (#24292F) */}
                <a
                  href={PERSONAL_INFO.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#24292F] hover:bg-[#1B1F23] text-white border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#000] transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-md bg-white/10 text-white">
                      <Github className="w-4 h-4" />
                    </span>
                    <span className="font-black">GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-75 group-hover:opacity-100" />
                </a>

                {/* 2. LinkedIn Button (#0A66C2) */}
                <a
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#000] transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-md bg-white/15 text-white">
                      <Linkedin className="w-4 h-4" />
                    </span>
                    <span className="font-black">LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-75 group-hover:opacity-100" />
                </a>

                {/* 3. Instagram Button (Official Gradient) */}
                <a
                  href={PERSONAL_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:brightness-110 text-white border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#000] transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-md bg-white/20 text-white">
                      <Instagram className="w-4 h-4" />
                    </span>
                    <span className="font-black">Instagram</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100" />
                </a>

                {/* 4. Google Developer Button (Official 4-Color Google Icon) */}
                <a
                  href={PERSONAL_INFO.socialLinks.googleDev}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white hover:bg-blue-50 text-zinc-950 border-2 border-black shadow-[3px_3px_0px_#4285F4] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#4285F4] transition-all"
                >
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="p-1 rounded-md bg-blue-50 border border-blue-200 shrink-0">
                      <GoogleDeveloperLogo size={15} />
                    </span>
                    <span className="font-black text-[#1E2265] truncate">
                      Google Dev
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#4285F4] shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Horizontal Divider & Centered Copyright Bar */}
          <div
            className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
              isAnimasi
                ? 'border-indigo-500/30 text-slate-400'
                : isKlasik
                ? 'border-[#B48A3E]/40 text-zinc-700 dark:text-stone-400'
                : 'border-zinc-900/15 dark:border-white/15 text-zinc-600 dark:text-zinc-400'
            }`}
          >
            <div className="hidden sm:block w-28" />
            <p className="text-center font-medium">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. {t.footer.rights}
            </p>
            <button
              type="button"
              onClick={scrollToTop}
              className={`inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-black transition-all cursor-pointer ${
                isAnimasi
                  ? 'rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 text-cyan-300 border border-cyan-400/40'
                  : isKlasik
                  ? 'rounded-none bg-[#1C1917] text-[#E5C158] border border-[#B48A3E]'
                  : 'rounded-xl bg-[#1E2265] hover:bg-blue-900 text-yellow-300 border-2 border-black shadow-[3px_3px_0px_#000]'
              }`}
              title="Kembali ke Atas"
            >
              <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>[ ↑ TOP ]</span>
            </button>
          </div>
        </div>

        {/* Playful Peeking 8-Bit Pixel Sprites at the Very Bottom Edge (Like SembuhMed Footer) */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden">
          <div className="max-w-5xl mx-auto px-8 flex items-end justify-around">
            {/* 1. Peeking Blue Pixel Heart / Shield */}
            <svg
              width="44"
              height="26"
              viewBox="0 0 16 10"
              shapeRendering="crispEdges"
              className="translate-y-1"
            >
              <rect x="2" y="2" width="5" height="2" fill="#3B82F6" />
              <rect x="9" y="2" width="5" height="2" fill="#3B82F6" />
              <rect x="1" y="4" width="14" height="6" fill="#2563EB" />
              <rect x="4" y="5" width="2" height="2" fill="#93C5FD" />
            </svg>

            {/* 2. Peeking Emerald Pixel Plus Cross */}
            <svg
              width="42"
              height="36"
              viewBox="0 0 14 12"
              shapeRendering="crispEdges"
              className="translate-y-1"
            >
              <rect x="5" y="1" width="4" height="11" fill="#00A884" />
              <rect x="2" y="4" width="10" height="4" fill="#10B981" />
            </svg>

            {/* 3. Peeking Orange & Cream Pixel Capsule */}
            <svg
              width="52"
              height="32"
              viewBox="0 0 18 11"
              shapeRendering="crispEdges"
              className="translate-y-1 -rotate-12"
            >
              <rect x="2" y="2" width="7" height="7" fill="#F97316" />
              <rect x="9" y="2" width="7" height="7" fill="#FFFBEB" />
              <rect x="4" y="3" width="3" height="2" fill="#FDBA74" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};
