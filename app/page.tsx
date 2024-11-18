"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Ghost, Share2, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-400 via-pink-300 to-orange-200 p-4">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-4 top-20 h-20 w-20 rounded-full bg-purple-300/30 backdrop-blur-md"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute left-10 top-40 h-16 w-16 rounded-full bg-pink-300/30 backdrop-blur-md"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-3">
            <Ghost className="h-16 w-16 text-purple-600" />
            <h1 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-7xl font-black tracking-tight text-transparent sm:text-8xl">
              TrickPal
            </h1>
          </div>
          <p className="text-2xl font-medium text-purple-900">
            Send fun surprises to your friends!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative w-full max-w-md rounded-2xl bg-white/80 p-8 shadow-xl backdrop-blur-sm"
        >
          <div className="absolute -right-3 -top-3">
            <Sparkles className="h-8 w-8 text-purple-500" />
          </div>
          <div className="space-y-6">
            <Button
              size="lg"
              className="group relative w-full bg-gradient-to-r from-purple-600 to-pink-600 text-xl font-semibold transition-all hover:from-purple-700 hover:to-pink-700"
              asChild
            >
              <Link href="/create">
                Get Started
                <Share2 className="ml-2 h-6 w-6 transition-transform group-hover:rotate-12" />
              </Link>
            </Button>
            <p className="text-base text-purple-700">
              Over 100,000 people are already having fun with their friends!
            </p>
          </div>
        </motion.div>

        {/* Feature description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          <div className="rounded-xl bg-white/60 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-purple-800">
              Quick & Easy
            </h3>
            <p className="text-base text-purple-600">
              Create fun surprise links with just a few clicks
            </p>
          </div>
          <div className="rounded-xl bg-white/60 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-purple-800">
              Various Templates
            </h3>
            <p className="text-base text-purple-600">
              Choose from various surprise elements to match your taste
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
