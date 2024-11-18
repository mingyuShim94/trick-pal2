"use client";

import { useState } from "react";
import { jumpscareContents } from "@/lib/contents";
import { Button } from "@/components/ui/button";
import { JumpscareCard } from "@/components/jumpscare-card";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Ghost, AlertTriangle, ArrowLeft } from "lucide-react";

export const runtime = "edge";

export default function JumpscareSelectPage({
  searchParams,
}: {
  searchParams: { content?: string };
}) {
  const [selectedJumpscare, setSelectedJumpscare] = useState<string | null>(
    null
  );

  if (!searchParams.content) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-400 via-pink-300 to-orange-200 p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md space-y-6 rounded-2xl bg-white/90 p-8 text-center shadow-xl backdrop-blur-sm"
        >
          <AlertTriangle className="mx-auto h-16 w-16 text-red-500" />
          <h1 className="text-2xl font-bold text-red-600">Invalid Access</h1>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white transition-all hover:from-purple-700 hover:to-pink-700"
          >
            <Link href="/create" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Start Over
            </Link>
          </Button>
        </motion.div>
      </main>
    );
  }

  const deceptionId: string = searchParams.content;

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-orange-200 p-4 md:p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-2 text-center"
        >
          <h1 className="text-3xl font-bold text-purple-900 md:text-4xl">
            Choose a Jump Scare
          </h1>
          <p className="text-lg text-purple-700">
            Select a scary content to surprise your friend
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {jumpscareContents.map((content, index) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/create/preview?content=${deceptionId}&jumpscare=${content.id}`}
                  className="block"
                  onClick={() => setSelectedJumpscare(content.id)}
                >
                  <JumpscareCard
                    {...content}
                    deceptionId={deceptionId}
                    isSelected={selectedJumpscare === content.id}
                  />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <motion.div
        className="pointer-events-none fixed bottom-4 right-4"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Ghost className="h-12 w-12 text-purple-400" />
      </motion.div>
    </main>
  );
}
