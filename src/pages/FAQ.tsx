import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How do I place an order?", a: "Simply browse our products, add items to your cart, and proceed to checkout. Follow the steps to enter your shipping and payment details to complete your purchase." },
  { q: "What payment methods do you accept?", a: "We accept Visa, Mastercard, American Express, PayPal, and bank transfers. All payments are processed securely with SSL encryption." },
  { q: "How long does shipping take?", a: "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business day delivery. International orders may take 10-14 business days." },
  { q: "What is your return policy?", a: "We offer a 30-day return policy on all unused items in original packaging. Simply contact our support team to initiate a return." },
  { q: "Do you offer free shipping?", a: "Yes! We offer free standard shipping on all orders over $50. Orders under $50 have a flat shipping rate of $4.99." },
  { q: "How can I track my order?", a: "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website." },
  { q: "Can I cancel or modify my order?", a: "Orders can be cancelled or modified within 2 hours of placement. After that, please contact our support team and we'll do our best to accommodate your request." },
  { q: "Do you ship internationally?", a: "Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by destination." },
];

export default function FAQPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-hero-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-primary-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-primary-foreground/80">Find answers to commonly asked questions below.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl px-6 shadow-card border-0">
              <AccordionTrigger className="text-left font-bold text-foreground hover:text-primary hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
