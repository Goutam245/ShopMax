import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Check } from "lucide-react";
import { Link } from "react-router-dom";

const steps = ["Billing", "Payment", "Confirmation"];

export default function CheckoutPage() {
  const [step, setStep] = useState(0);
  const { state, cartTotal } = useCart();

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-hero-gradient py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-extrabold text-primary-foreground">Checkout</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-10 gap-0">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                {i < step ? <Check className="h-5 w-5" /> : i + 1}
              </div>
              <span className={`mx-2 text-sm font-medium ${i <= step ? "text-foreground" : "text-muted-foreground"}`}>{s}</span>
              {i < steps.length - 1 && <div className={`w-16 h-0.5 mx-2 ${i < step ? "bg-primary" : "bg-muted"}`} />}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            {step === 0 && (
              <div className="bg-card rounded-xl p-6 shadow-card space-y-4">
                <h2 className="text-xl font-bold text-foreground mb-4">Billing Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {["First Name", "Last Name", "Email Address", "Phone Number"].map(label => (
                    <div key={label}>
                      <label className="text-sm font-medium text-foreground mb-1 block">{label}</label>
                      <input className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder={label} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Address</label>
                  <input className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Street address" />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div><label className="text-sm font-medium text-foreground mb-1 block">City</label><input className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                  <div><label className="text-sm font-medium text-foreground mb-1 block">State</label><input className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                  <div><label className="text-sm font-medium text-foreground mb-1 block">Zip Code</label><input className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" /></div>
                </div>
                <Button onClick={() => setStep(1)} className="font-bold mt-4">Continue to Payment</Button>
              </div>
            )}
            {step === 1 && (
              <div className="bg-card rounded-xl p-6 shadow-card space-y-4">
                <h2 className="text-xl font-bold text-foreground mb-4">Payment Method</h2>
                <div className="space-y-3">
                  {["Credit / Debit Card", "PayPal", "Bank Transfer"].map((method, i) => (
                    <label key={method} className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${i === 0 ? "border-primary bg-primary/5" : "border-input hover:border-primary/50"}`}>
                      <input type="radio" name="payment" defaultChecked={i === 0} className="accent-primary" />
                      <span className="text-sm font-medium text-foreground">{method}</span>
                      {i === 0 && <span className="ml-auto text-xs text-muted-foreground">Visa, Mastercard, Amex</span>}
                    </label>
                  ))}
                </div>
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 flex items-start gap-3 mt-4">
                  <Shield className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-foreground">Payment processing coming soon</p>
                    <p className="text-xs text-muted-foreground mt-1">This is a UI preview. Secure payment integration will be available in the next update.</p>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" onClick={() => setStep(0)}>Back</Button>
                  <Button onClick={() => setStep(2)} className="font-bold">Review Order</Button>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="bg-card rounded-xl p-6 shadow-card space-y-4">
                <h2 className="text-xl font-bold text-foreground mb-4">Order Confirmation</h2>
                <div className="space-y-3">
                  {state.items.map(item => (
                    <div key={item.product.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <img src={item.product.image} alt={item.product.name} className="w-12 h-12 rounded object-cover" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{item.product.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-bold text-foreground">${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                <label className="flex items-start gap-2 mt-4">
                  <input type="checkbox" className="accent-primary mt-1" />
                  <span className="text-xs text-muted-foreground">I agree to the <Link to="/terms" className="text-primary underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-primary underline">Privacy Policy</Link></span>
                </label>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                  <Button disabled className="font-bold opacity-60 cursor-not-allowed" title="Coming Soon">
                    <Lock className="h-4 w-4 mr-2" /> Complete Purchase
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-card rounded-xl p-6 shadow-card h-fit sticky top-20 space-y-3">
            <h2 className="text-lg font-bold text-foreground">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Items ({state.items.length})</span><span className="text-foreground">${cartTotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span className="text-success">Free</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Tax</span><span className="text-foreground">$0.00</span></div>
            </div>
            <div className="border-t border-border pt-3">
              <div className="flex justify-between font-bold text-foreground text-lg"><span>Total</span><span className="text-primary">${cartTotal.toFixed(2)}</span></div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
              <Lock className="h-3.5 w-3.5" /> Secure checkout powered by SSL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
