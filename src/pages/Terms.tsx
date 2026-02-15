export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-primary-foreground mb-4">Terms & Conditions</h1>
          <p className="text-primary-foreground/80">Last updated: February 2025</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate">
        <div className="bg-card rounded-xl p-8 shadow-card space-y-6">
          {[
            { title: "1. Acceptance of Terms", content: "By accessing and using ShopMax, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services." },
            { title: "2. Products and Pricing", content: "All products are subject to availability. Prices are displayed in USD and may change without notice. We reserve the right to correct any pricing errors." },
            { title: "3. Orders and Payment", content: "By placing an order, you agree to provide accurate billing information. We accept major credit cards and PayPal. All transactions are processed securely." },
            { title: "4. Shipping and Delivery", content: "We ship to most countries worldwide. Delivery times vary by location and shipping method selected. ShopMax is not responsible for delays caused by carriers." },
            { title: "5. Returns and Refunds", content: "We offer a 30-day return policy on unused items in original packaging. Refunds are processed within 5-7 business days of receiving the returned item." },
            { title: "6. User Accounts", content: "You are responsible for maintaining the confidentiality of your account credentials. You must notify us immediately of any unauthorized use of your account." },
            { title: "7. Intellectual Property", content: "All content on ShopMax, including images, text, and logos, is protected by intellectual property laws. Unauthorized use is prohibited." },
            { title: "8. Limitation of Liability", content: "ShopMax shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or products." },
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
