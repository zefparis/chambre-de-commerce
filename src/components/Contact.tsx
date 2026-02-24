"use client";

import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Phone, Mail, Globe, MapPin, Send, ArrowRight } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    { icon: Phone, title: "Téléphone", label: "+243 846 870 811", sublabel: "+243 999 979 173 / +243 995 941 338" },
    { icon: Mail, title: "Email", label: "ccne-rdc23@gmail.com", href: "mailto:ccne-rdc23@gmail.com" },
    { icon: Globe, title: "Site web", label: "www.ccne-rdc.com", href: "https://www.ccne-rdc.com" },
    { icon: MapPin, title: "Adresse", label: "16 Avenue Londola, Lingwala", sublabel: "Kinshasa, RDC" },
  ];

  return (
    <section id="contact" className="relative py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full border border-[#C5A55A]/30 bg-[#C5A55A]/5 text-[#C5A55A] text-xs font-semibold tracking-widest uppercase">
              {t.nav.contact}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Split layout card */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <div className="grid lg:grid-cols-5">
            
            {/* Left panel — dark with contact info */}
            <div className="lg:col-span-2 bg-[#0a1628] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
              {/* Decorative gradient blob */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#003DA5]/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#C5A55A]/20 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold mb-2">Parlons de votre projet</h3>
                <p className="text-white/60 text-sm mb-8">Notre équipe est disponible pour vous accompagner dans votre démarche d&apos;investissement.</p>

                <div className="space-y-5">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300">
                        <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-[#003DA5] text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-1">{item.title}</p>
                          <p className="text-white text-sm font-medium truncate">{item.label}</p>
                          {item.sublabel && (
                            <p className="text-white/50 text-xs mt-0.5">{item.sublabel}</p>
                          )}
                        </div>
                      </div>
                    );
                    return item.href ? (
                      <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">{content}</a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>
              </div>

              {/* Map */}
              <div className="relative z-10 mt-6 rounded-2xl overflow-hidden h-40 border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.5!2d15.3!3d-4.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130a1a3e8c1%3A0x5e3f8e51c5b5a3e!2sLingwala%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1700000000000!5m2!1sfr!2scd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CCNE-RDC Location"
                  className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            {/* Right panel — form */}
            <div className="lg:col-span-3 bg-[#fafafa] p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#003DA5]/10 text-[#003DA5]">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-gray-900">Envoyez-nous un message</h3>
                  <p className="text-gray-500 text-xs">Réponse garantie sous 48h</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                      {t.contact.form.name} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border-0 bg-white px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-[#003DA5] text-sm transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                      {t.contact.form.email} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border-0 bg-white px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-[#003DA5] text-sm transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                      {t.contact.form.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-xl border-0 bg-white px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-[#003DA5] text-sm transition-all duration-200"
                      placeholder="Entreprise Ltd"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                      {t.contact.form.country}
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full rounded-xl border-0 bg-white px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-[#003DA5] text-sm transition-all duration-200"
                      placeholder="RDC"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                    {t.contact.form.subject} *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-0 bg-white px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-[#003DA5] text-sm transition-all duration-200"
                    placeholder="Demande de partenariat"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">
                    {t.contact.form.message} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-0 bg-white px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-[#003DA5] text-sm transition-all duration-200 resize-none"
                    placeholder="Décrivez votre projet d'investissement..."
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-gray-400">* Champs obligatoires</p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#003DA5] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[#002d7a] hover:shadow-xl hover:gap-3 transition-all duration-300"
                  >
                    {t.contact.form.send}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
