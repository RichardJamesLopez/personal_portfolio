"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "About Me", href: "/about" },
]

export default function Header() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState<string | null>(
    pathname === "/about" ? "/about" : pathname === "/" ? "/#work" : null,
  )
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (pathname === "/about") {
      setActiveTab(pathname)
      return
    }

    if (pathname === "/") {
      setActiveTab("/#work")
      return
    }

    setActiveTab(null)
  }, [pathname])

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Richard Cuellar-Lopez</span>
            <Image
              className="h-8 w-auto"
              src="/Image.png"
              alt="Portfolio Logo"
              width={32}
              height={32}
              priority
            />
          </Link>
        </div>
        {pathname !== "/terms" && (
          <div className="flex items-center rounded-full bg-muted p-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setActiveTab(item.href)}
                className={`relative rounded-full px-4 py-1.5 text-sm leading-6 transition-colors ${
                  activeTab === item.href
                    ? "font-semibold text-foreground"
                    : "font-medium text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeTab === item.href && (
                  <motion.span
                    layoutId="header-nav-pill"
                    className="absolute inset-0 rounded-full bg-background shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </div>
        )}
        <div className="flex flex-1 justify-end">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  )
}
