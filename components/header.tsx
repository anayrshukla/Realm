"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export default function Header() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            className="text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <circle cx="8" cy="8" r="2.5" fill="currentColor" />
            <circle cx="20" cy="14" r="2.5" fill="currentColor" />
            <circle cx="32" cy="20" r="2.5" fill="currentColor" />
            <circle cx="20" cy="28" r="2.5" fill="currentColor" />
            <line x1="8" y1="10.5" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="20" y1="16.5" x2="32" y2="18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="20" y1="16.5" x2="20" y2="25.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </motion.svg>
          <span className="text-2xl font-bold transition-colors group-hover:text-gray-300">Reflect</span>
        </Link>
        <ul className="flex space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link href={link.href} className="relative">
                  <motion.span
                    className={`block transition-colors ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
