import { useState } from "react";
import useIntersect from "../../hooks/useIntersect";
import SectionHeader from "../layout/SectionHeader";
import { CONTACT_ITEMS } from "../../data";

const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function ContactSection() {
  const [ref, visible] = useIntersect(0.1);
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);

    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm(EMPTY);
      setTimeout(() => setSent(false), 5000);
    }, 1100);
  }

  const inputCls = (field) => `
    w-full px-4 py-3 rounded-lg text-sm
    bg-slate-50 dark:bg-navy-950
    border transition-all duration-200
    ${
      errors[field]
        ? "border-red-400"
        : "border-slate-200/80 dark:border-white/[0.06]"
    }
    focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10
    outline-none text-slate-800 dark:text-white
  `;

  return (
    <section
      id="contact"
      ref={ref}
      className={`
        relative
        min-h-screen flex flex-col justify-center
        px-8 md:px-16 py-24
        bg-slate-50 dark:bg-navy-950
        section-animate ${visible ? "visible" : ""}
      `}
    >
      {/* TOP LINE */}
      <div className="absolute top-0 left-8 right-8 md:left-16 md:right-16 h-px bg-gradient-to-r from-transparent via-blue-400/25 dark:via-cyan-400/25 to-transparent" />

      {/* BOTTOM LINE */}
      <div className="absolute bottom-0 left-8 right-8 md:left-16 md:right-16 h-px bg-gradient-to-r from-transparent via-blue-400/25 dark:via-cyan-400/25 to-transparent" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Title improved — "Get In Touch" is the most overused contact title */}
        <SectionHeader eyebrow="// 04. contact" title="Let's Work Together" />

        {/* Paragraph — tighter, no repetition, response time kept as trust signal */}
        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 mt-5 mb-10">
          Have a project in mind, or just want to talk frontend? I'm open to
          new opportunities and always happy to hear what you're building.
          I reply within 24–48 hours.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-14 items-start">
          {/* LEFT — contact info cards */}
          <div className="space-y-3">
            {CONTACT_ITEMS.map((item) => {
              const isWhatsApp = item.label.toLowerCase() === "whatsapp";
              const phone = item.value?.replace(/\s+/g, "");
              const href = isWhatsApp
                ? `https://wa.me/${phone.replace("+", "")}`
                : item.href ?? null;

              const Inner = (
                <div
                  className="
                    group flex items-center gap-4 p-4 rounded-xl
                    bg-white/70 dark:bg-navy-900/40
                    backdrop-blur-md
                    border border-slate-200/70 dark:border-white/[0.06]
                    hover:border-blue-400/40
                    hover:shadow-[0_12px_30px_rgba(37,99,235,0.10)]
                    transition-all duration-300 cursor-pointer
                  "
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-950/40 flex-shrink-0">
                    <item.icon className="text-blue-600 dark:text-blue-400" />
                  </div>

                  <div className="min-w-0">
                    <p className="font-mono text-[0.6rem] tracking-[2px] uppercase text-slate-400 mb-0.5">
                      {item.label}
                    </p>
                    {/* WhatsApp shows "Send a message" instead of raw number */}
                    <p className="text-sm text-slate-700 dark:text-slate-200 truncate">
                      {isWhatsApp ? "Send a message →" : item.value}
                    </p>
                  </div>
                </div>
              );

              return href ? (
                <a
                  key={item.label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  {Inner}
                </a>
              ) : (
                <div key={item.label}>{Inner}</div>
              );
            })}
          </div>

          {/* RIGHT — contact form */}
          <div
            className="
              relative rounded-2xl p-7
              bg-white dark:bg-navy-900
              border border-slate-200/80 dark:border-white/[0.06]
              shadow-[0_15px_50px_rgba(0,0,0,0.05)]
            "
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-500">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Message sent
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                  Thanks for reaching out — I'll get back to you within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputCls("name")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[0.65rem] text-red-400 font-mono">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      name="email"
                      placeholder="Your email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputCls("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[0.65rem] text-red-400 font-mono">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputCls("subject")}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-[0.65rem] text-red-400 font-mono">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputCls("message")} resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[0.65rem] text-red-400 font-mono">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="
                    w-full py-3.5 rounded-lg
                    bg-blue-600 hover:bg-blue-500
                    text-white font-mono text-xs uppercase tracking-widest
                    transition-all duration-200
                    disabled:opacity-60 disabled:cursor-not-allowed
                    flex items-center justify-center gap-2
                    hover:-translate-y-0.5 active:translate-y-0
                  "
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}