"use client"

import Header from "@/components/header"
import { Manrope } from "next/font/google"
import { motion } from "framer-motion"

const manrope = Manrope({ subsets: ["latin"] })

export default function FeaturesPage() {
  const features = [
    {
      title: "Time-Travel Debugging",
      description:
        "Rewind agent execution to any point and see exactly what happened at each step with full provenance tracking.",
    },
    {
      title: "Editable Memory",
      description:
        "Edit agent decisions like a document. Change inputs, adjust logic, and test outcomes without replaying from scratch.",
    },
    {
      title: "Side-by-Side Testing",
      description:
        "Run A/B tests on different versions of your agent workflows and compare results instantly to validate changes safely.",
    },
    {
      title: "Git-Like Merging",
      description:
        "Version control for your agent state. Merge branches, resolve conflicts, and maintain a complete audit trail of changes.",
    },
    {
      title: "Safe Rollouts",
      description:
        "Deploy agent updates with confidence using policy rules and automatic validation before production deployment.",
    },
    {
      title: "100% Event Recording",
      description:
        "Every agent action, tool call, and decision is recorded. No black-box telemetry—complete visibility into your workflows.",
    },
  ]

  return (
    <div className={`min-h-screen bg-black text-white ${manrope.className}`}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold mb-6">Powerful Features for Agent Control</h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Everything you need to debug, test, and safely deploy agentic workflows with version control and complete
          visibility.
        </p>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="border border-gray-700 rounded-lg p-8 bg-gradient-to-br from-gray-900 to-black hover:border-gray-500 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
            >
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to take control of your agent workflows?</h2>
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
        <p>&copy; 2025 Reflect. All rights reserved.</p>
      </footer>
    </div>
  )
}
