"use client"

import Header from "@/components/header"
import { Manrope } from "next/font/google"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

const manrope = Manrope({ subsets: ["latin"] })

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: ["1 project", "1 seat", "500k events/month", "7-day history", "Community support"],
      cta: "Start Free",
      highlighted: false,
    },
    {
      name: "Solo Pro",
      price: "$99",
      period: "/month",
      description: "For individual developers",
      features: [
        "2 projects",
        "1-2 seats",
        "5M events/month",
        "30-day history",
        "Unlimited replays",
        "Priority support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro Team",
      price: "$1,500",
      period: "/seat/year",
      description: "For growing teams",
      features: [
        "Unlimited projects",
        "Multiple seats",
        "50M pooled events/month",
        "30-day history",
        "Team management",
        "API access",
        "Priority support",
      ],
      cta: "Contact Sales",
      highlighted: true,
    },
    {
      name: "Scale",
      price: "$2,400",
      period: "/seat/year",
      description: "For scaling organizations",
      features: [
        "Unlimited projects",
        "Multiple seats",
        "Unlimited events/month",
        "90-day history",
        "PII redaction",
        "Policy auto-merge",
        "Dedicated support",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large enterprises",
      features: [
        "Everything in Scale, plus:",
        "VPC / on-premise deployment",
        "365-day history",
        "Custom SLAs",
        "Dedicated account manager",
        "Advanced security features",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

  return (
    <div className={`min-h-screen bg-black text-white ${manrope.className}`}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-6 text-center">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center">
          Start free and scale as your team grows. Pay only for what you use.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-lg border transition-all ${
                plan.highlighted
                  ? "border-white bg-white/5 lg:scale-105"
                  : "border-gray-700 bg-gradient-to-br from-gray-900 to-black hover:border-gray-500"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: plan.highlighted ? 1.05 : 1.02, y: -4 }}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>

                <motion.button
                  className={`w-full font-bold py-3 px-6 rounded-md transition duration-300 mb-8 ${
                    plan.highlighted
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {plan.cta}
                </motion.button>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Can I use Realm for free forever?</h3>
            <p className="text-gray-300">
              Yes! The Free plan is always available with 1 project, 1 seat, and 500k events/month. Perfect for trying
              it out.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">What happens if I exceed my event limit?</h3>
            <p className="text-gray-300">
              You can upgrade your plan anytime, and we'll prorate the cost. We'll also alert you before reaching your
              limit.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Do you offer a free trial?</h3>
            <p className="text-gray-300">
              The Free plan IS our trial. Upgrade whenever you're ready without any credit card required to start.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">What does "events/month" mean?</h3>
            <p className="text-gray-300">
              An event is any action your agent takes—a tool call, decision point, or state change. We count them to
              ensure fair pricing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to streamline your agentic workflows?</h2>
        <motion.button
          className="bg-white text-black font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Join waitlist
        </motion.button>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 max-w-6xl mx-auto px-4 py-8 text-gray-400 text-sm">
        <p>&copy; 2025 Realm. All rights reserved.</p>
      </footer>
    </div>
  )
}
