"use client";

import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Phone, Mail, Globe, MapPin, Send } from "lucide-react";

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
    { icon: Phone, label: "+243 846 870 811 / +243 999 979 173 / +243 995 941 338" },
    { icon: Mail, label: "ccne-rdc23@gmail.com", href: "mailto:ccne-rdc23@gmail.com" },
    { icon: Globe, label: "www.ccne-rdc.com", href: "https://www.ccne-rdc.com" },
    { icon: MapPin, label: "16 Avenue Londola, Commune de Lingwala, Kinshasa, RDC" },
  ];

  return (
    <section id="contact" className="relative py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full border border-[#C5A55A]/30 bg-[#C5A55A]/5 text-[#C5A55A] text-xs font-semibold tracking-widest uppercase">
              {t.nav.contact}
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col justify-between h-full">
            <div className="space-y-8">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="group flex items-start gap-6 p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg hover:border-transparent transition-all duration-300">
                    <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-[#003DA5]/5 text-[#003DA5] group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 pt-1">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-gray-600 hover:text-[#003DA5] transition-colors text-base font-medium leading-relaxed block"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-base font-medium leading-relaxed">
                          {item.label}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map embed - Styled */}
            <div className="mt-8 rounded-3xl overflow-hidden border border-gray-200 shadow-sm h-64 relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.5!2d15.3!3d-4.32!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3130a1a3e8c1%3A0x5e3f8e51c5b5a3e!2sLingwala%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1700000000000!5m2!1sfr!2scd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CCNE-RDC Location"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Contact form - Apple style inputs */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-[2.5rem] p-8 sm:p-12 border border-gray-100 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border-0 bg-white px-5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#003DA5] text-base transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border-0 bg-white px-5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#003DA5] text-base transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    {t.contact.form.company}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-2xl border-0 bg-white px-5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#003DA5] text-base transition-all duration-200"
                    placeholder="Entreprise Ltd"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    {t.contact.form.country}
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full rounded-2xl border-0 bg-white px-5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#003DA5] text-base transition-all duration-200"
                    placeholder="République Démocratique du Congo"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    {t.contact.form.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border-0 bg-white px-5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#003DA5] text-base transition-all duration-200"
                    placeholder="Demande de partenariat"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border-0 bg-white px-5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#003DA5] text-base transition-all duration-200 resize-none"
                    placeholder="Votre message..."
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#003DA5] px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-[#002d7a] hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Send className="h-5 w-5" />
                  {t.contact.form.send}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
