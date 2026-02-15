export default function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-primary-foreground mb-4">Privacy Policy</h1>
          <p className="text-primary-foreground/80">Last updated: February 2025</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="bg-card rounded-xl p-8 shadow-card space-y-6">
          {[
            { title: "1. Information We Collect", content: "We collect information you provide directly, including name, email address, shipping address, and payment details. We also collect browsing data and usage analytics to improve our services." },
            { title: "2. How We Use Your Information", content: "Your information is used to process orders, provide customer support, send order updates, and improve our services. We may send promotional emails with your consent." },
            { title: "3. Information Sharing", content: "We do not sell your personal information. We share data only with trusted service providers who help us process payments, ship orders, and improve our platform." },
            { title: "4. Data Security", content: "We implement industry-standard security measures including SSL encryption, secure servers, and regular security audits to protect your personal information." },
            { title: "5. Cookies", content: "We use cookies to enhance your browsing experience, remember your preferences, and analyze site traffic. You can manage cookie preferences through your browser settings." },
            { title: "6. Your Rights", content: "You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time by contacting us." },
            { title: "7. Children's Privacy", content: "Our services are not directed to children under 13. We do not knowingly collect personal information from children." },
            { title: "8. Contact Us", content: "If you have questions about our privacy practices, please contact us at privacy@shopmax.com or call +250 791 320 785." },
          ].map((section, i) => (
            <div key={i}>
              <h2 className="text-lg font-bold text-foreground mb-2">{section.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
