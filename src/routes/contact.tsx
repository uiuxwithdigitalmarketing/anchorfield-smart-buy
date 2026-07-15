import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import heroPicture from "@/assets/hero-contact.jpg?hero";
import { heroPreloadLink } from "@/components/hero-image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Anchorfield" },
      { name: "description", content: "Complimentary 45-minute strategy call. No obligation, no pressure — just expert advice on your Australian property mandate." },
      { property: "og:title", content: "Book a Consultation — Anchorfield" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero picture={heroPicture}
        eyebrow="Contact / Consultation"
        chapter="(00) BEGIN"
        title={<>Book a private <span className="italic text-copper">strategy call.</span></>}
        intro="45 minutes with an Anchorfield advisor. Confidential, no obligation, and often the most valuable property conversation our clients have had."
      />

      <section className="py-16 border-t border-white/5">
        <div className="container-editorial grid lg:grid-cols-12 gap-16">
          {/* Form */}
          <form className="lg:col-span-7 space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks — we'll be in touch within one business day."); }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="First name" name="first" required />
              <Field label="Last name" name="last" required />
            </div>
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
            <div>
              <label className="text-eyebrow block mb-3">Buyer profile</label>
              <select className="w-full bg-transparent border-b border-white/15 py-3 focus:outline-none focus:border-copper text-paper">
                <option className="bg-midnight">Owner-occupier</option>
                <option className="bg-midnight">Investor</option>
                <option className="bg-midnight">First home buyer</option>
                <option className="bg-midnight">Interstate buyer</option>
                <option className="bg-midnight">Expat</option>
                <option className="bg-midnight">SMSF trustee</option>
              </select>
            </div>
            <div>
              <label className="text-eyebrow block mb-3">Tell us about your mandate</label>
              <textarea
                rows={5}
                placeholder="Budget, target suburbs, timeline, and any specific goals."
                className="w-full bg-transparent border-b border-white/15 py-3 focus:outline-none focus:border-copper text-paper resize-none placeholder:text-paper/30"
              />
            </div>
            <button type="submit" className="btn-primary mt-6">
              Request consultation <ArrowRight size={14} />
            </button>
          </form>

          {/* Contact detail */}
          <aside className="lg:col-span-5 space-y-10 lg:pl-12 lg:border-l border-white/5">
            <div>
              <div className="text-eyebrow mb-4">Direct</div>
              <div className="space-y-4">
                <a href="tel:1300000000" className="flex items-center gap-4 group">
                  <Phone size={16} className="text-copper" />
                  <span className="text-2xl font-display italic group-hover:text-copper transition-colors">1300 ANCHOR</span>
                </a>
                <a href="mailto:advisor@anchorfield.com.au" className="flex items-center gap-4 group">
                  <Mail size={16} className="text-copper" />
                  <span className="text-lg group-hover:text-copper transition-colors">advisor@anchorfield.com.au</span>
                </a>
              </div>
            </div>
            <div>
              <div className="text-eyebrow mb-4">Head office</div>
              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-copper mt-1.5" />
                <div className="text-lg leading-relaxed">
                  Level 14, 500 Collins Street<br />
                  Melbourne, Victoria 3000
                </div>
              </div>
            </div>
            <div className="glass-panel p-8 rounded-sm">
              <div className="text-eyebrow mb-4">Response time</div>
              <p className="font-display italic text-2xl leading-snug">
                Every enquiry receives a personal reply within one business day.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <div className="h-24" />
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-eyebrow block mb-3">{label}{required && <span className="text-copper"> *</span>}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-white/15 py-3 focus:outline-none focus:border-copper text-paper"
      />
    </div>
  );
}
