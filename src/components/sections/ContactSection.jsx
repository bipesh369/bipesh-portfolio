import { useState } from "react";
import useIntersect from "../../hooks/useIntersect";
import SectionHeader from "../ui/SectionHeader";
import { CONTACT_ITEMS } from "../../data";

const EMPTY = { name: "", email: "", subject: "", message: "" };

/**
 * ContactSection — info cards on the left, fully controlled
 * contact form on the right with loading and success states.
 */
export default function ContactSection() {
  const [ref, visible] = useIntersect(0.1);
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  /* Basic client-side validation */
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
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm(EMPTY);
      setTimeout(() => setSent(false), 6000);
    }, 1400);
  }

  const inputCls = (field) => `
    w-full bg-slate-50 dark:bg-navy-950
    border ${
      errors[field]
        ? "border-red-400 dark:border-red-500"
        : "border-slate-200 dark:border-white/[0.08]"
    }
    rounded-lg px-4 py-3
    text-sm text-slate-800 dark:text-white
    placeholder-slate-400 dark:placeholder-slate-600
    font-body outline-none
    focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
    transition-all duration-200
  `;

  return (
    <section
      id="contact"
      ref={ref}
      className={`
        min-h-screen flex flex-col justify-center
        px-8 md:px-16 py-24
        bg-slate-50 dark:bg-navy-950
        section-animate ${visible ? "visible" : ""}
      `}
    >
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeader eyebrow="// 04. contact" title="Get In Touch" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-start">

          {/* ── Left: Info Cards ── */}
          <div>
            <p className="text-sm leading-[1.9] text-slate-500 dark:text-slate-400 mb-7">
              I'm currently open to new opportunities. Whether you have a
              project, a question, or just want to say hello — my inbox is
              always open!
            </p>

            <div className="space-y-3">
              {CONTACT_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl
                             bg-white dark:bg-navy-900
                             border border-slate-200 dark:border-white/[0.07]
                             hover:border-blue-300 dark:hover:border-blue-700/50
                             hover:shadow-card transition-all duration-200"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center
                               bg-blue-50 dark:bg-blue-950/50
                               border border-blue-100 dark:border-blue-900/60
                               flex-shrink-0"
                  >
                    <item.icon className="text-blue-600 dark:text-blue-400 text-base" />
                  </div>

                  <div>
                    <p className="font-mono text-[0.58rem] tracking-[2px] uppercase
                                  text-slate-400 dark:text-slate-500 mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Contact Form (UNCHANGED) ── */}
          <div
            className="bg-white dark:bg-navy-900
                       border border-slate-200 dark:border-white/[0.07]
                       rounded-2xl p-7 shadow-card"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="text-5xl mb-5">✅</div>
                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Message Sent!
                </h3>
                <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed max-w-xs">
                  Thanks for reaching out, Bipesh will get back to you within
                  24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-mono text-[0.6rem] tracking-[2px] uppercase text-slate-400 dark:text-slate-500 mb-1.5">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputCls("name")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[0.68rem] text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block font-mono text-[0.6rem] tracking-[2px] uppercase text-slate-400 dark:text-slate-500 mb-1.5">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputCls("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[0.68rem] text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block font-mono text-[0.6rem] tracking-[2px] uppercase text-slate-400 dark:text-slate-500 mb-1.5">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    placeholder="Project inquiry..."
                    value={form.subject}
                    onChange={handleChange}
                    className={inputCls("subject")}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-[0.68rem] text-red-500">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block font-mono text-[0.6rem] tracking-[2px] uppercase text-slate-400 dark:text-slate-500 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputCls("message")} resize-y`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[0.68rem] text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500
                             disabled:opacity-60 disabled:cursor-not-allowed
                             text-white font-mono text-xs tracking-widest uppercase
                             shadow-[0_4px_20px_rgba(37,99,235,0.3)]
                             hover:shadow-[0_8px_28px_rgba(37,99,235,0.45)]
                             hover:-translate-y-0.5 active:translate-y-0
                             transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {sending ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending…
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