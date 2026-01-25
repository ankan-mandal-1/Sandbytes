const LegalWrapper = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="min-h-screen bg-white pt-32 pb-20 px-6">
    <div className="max-w-3xl mx-auto prose prose-zinc prose-lg">
      <h1 className="text-4xl font-bold tracking-tight mb-12">{title}</h1>
      <div className="text-zinc-600 space-y-6 leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

// Privacy Policy Component
export const PrivacyPolicy = () => (
  <LegalWrapper title="Privacy Policy">
    <p>Last Updated: January 2026</p>
    <section>
      <h2 className="text-xl font-bold text-zinc-900">Information We Collect</h2>
      <p>We collect information you provide directly to us when you fill out a contact form or book a call. This includes your name, email address, and project details.</p>
    </section>
    <section>
      <h2 className="text-xl font-bold text-zinc-900">How We Use Your Data</h2>
      <p>We use the information to communicate with you about your projects and to provide high-quality services. We do not sell your data to third parties.</p>
    </section>
  </LegalWrapper>
);

// Terms and Conditions Component
export const Terms = () => (
  <LegalWrapper title="Terms and Conditions">
    <h2 className="text-xl font-bold text-zinc-900">1. Acceptance</h2>
    <p>By accessing Sandbyte site, you agree to comply with these terms. If you do not agree, please do not use our services.</p>
    <h2 className="text-xl font-bold text-zinc-900">2. Service Scope</h2>
    <p>We provide design and development services. The specific scope of work for each client is outlined in individual project agreements.</p>
  </LegalWrapper>
);

// Disclaimer Component
export const Disclaimer = () => (
  <LegalWrapper title="Disclaimer">
    <p>The information provided on this website is for general informational purposes only. While we strive for accuracy, Sandbyte site makes no guarantees regarding the results of any service provided.</p>
    <p>Success in business depends on various factors beyond our control, and we do not guarantee specific financial returns or funding success.</p>
  </LegalWrapper>
);