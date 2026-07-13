"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-10 text-center text-white sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="grid gap-10 items-center md:grid-cols-[minmax(280px,2fr)_minmax(0,3fr)] lg:gap-14">
          <motion.div
            className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-lg md:max-w-none"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/richard_james_lopez_smiling_crop.jpg"
              alt="Richard Cuellar-Lopez smiling"
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 768px) 38vw, 20rem"
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.div
            className="w-full max-w-xl md:pl-4 lg:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold mb-5 text-white">I'm Rich</h3>
            <p className="text-lg text-gray-300 mb-4">
              I'm a builder at heart who is motivated by:
            </p>
            <ol className="mb-7 grid max-w-lg gap-3 text-lg text-gray-300">
              <li className="flex w-full items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-5 py-4">
                <span className="font-semibold text-white">1.</span>
                <span>Working with the best people</span>
              </li>
              <li className="flex w-full items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-5 py-4">
                <span className="font-semibold text-white">2.</span>
                <span>Tackling ultra high growth goals</span>
              </li>
              <li className="flex w-full items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-5 py-4">
                <span className="font-semibold text-white">3.</span>
                <span>Raising the bar for our digital products</span>
              </li>
            </ol>
            <p className="text-lg text-gray-300">
              See below for my timeline. 
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
