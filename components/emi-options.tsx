"use client"

import { Check } from "lucide-react"

const emiPlans = [
  {
    months: 3,
    monthlyEMI: "₹3,367",
    totalAmount: "₹10,100",
    interestRate: "9%",
    highlight: false,
  },
  {
    months: 6,
    monthlyEMI: "₹1,684",
    totalAmount: "₹10,104",
    interestRate: "9%",
    highlight: true,
  },
  {
    months: 12,
    monthlyEMI: "₹842",
    totalAmount: "₹10,104",
    interestRate: "9%",
    highlight: false,
  },
]

export function EMIOptions() {
  return (
    <section id="emi" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Flexible EMI Plans</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the EMI tenure that works best for your budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {emiPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlight
                  ? "bg-primary text-primary-foreground shadow-xl scale-105"
                  : "bg-card border border-border text-foreground hover:shadow-lg"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <p className="text-sm opacity-75 mb-2">Tenure</p>
                <p className="text-4xl font-bold">{plan.months}</p>
                <p className="text-sm opacity-75">Months</p>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm opacity-75 mb-1">Monthly EMI</p>
                  <p className="text-2xl font-bold">{plan.monthlyEMI}</p>
                </div>
                <div>
                  <p className="text-sm opacity-75 mb-1">Total Amount</p>
                  <p className="text-xl font-semibold">{plan.totalAmount}</p>
                </div>
                <div>
                  <p className="text-sm opacity-75 mb-1">Interest Rate</p>
                  <p className="text-xl font-semibold">{plan.interestRate} p.a.</p>
                </div>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.highlight
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Choose Plan
              </button>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Check size={16} />
                  <span>No hidden charges</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} />
                  <span>Flexible repayment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} />
                  <span>Quick approval</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
