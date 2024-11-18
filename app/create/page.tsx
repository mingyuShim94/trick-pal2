"use client";

import { useState } from "react";
import { ContentCard } from "@/components/content-card";
import { deceptionContents } from "@/lib/contents";
import Image from "next/image";
import { motion } from "framer-motion";
import { Ghost, Sparkles } from "lucide-react";

export default function CreatePage() {
  const [selectedContent, setSelectedContent] = useState<string | null>(null);
  const selectedContents = deceptionContents.slice(0, 3);

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
            Choose a content to stimulate your friend&apos;s curiosity
          </h1>
          <p className="text-lg text-purple-700">
            Choose a content to stimulate your friend&apos;s curiosity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {selectedContents.map((content, index) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={`group relative overflow-hidden rounded-2xl bg-white/90 shadow-xl transition-all hover:shadow-2xl ${
                  selectedContent === content.id ? "ring-4 ring-purple-500" : ""
                }`}
                onClick={() => setSelectedContent(content.id)}
              >
                <ContentCard {...content} />
                <div className="space-y-4 p-4">
                  <div className="overflow-hidden rounded-lg border border-purple-200">
                    <div className="relative aspect-[1200/630]">
                      <Image
                        src={content.thumbnail}
                        alt={`Preview of ${content.title}`}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="border-t border-purple-200 bg-purple-50 p-4">
                      <div className="space-y-2">
                        <h3 className="line-clamp-1 font-bold text-purple-800">
                          {content.title}
                        </h3>
                        <p className="line-clamp-2 text-sm text-purple-600">
                          {content.description}
                        </p>
                        <p className="text-xs text-purple-500">
                          trickpal.vercel.app
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-sm text-purple-600">
                    ↑ Your friend will see this preview
                  </p>
                </div>
                {selectedContent === content.id && (
                  <div className="absolute right-2 top-2">
                    <Ghost className="h-6 w-6 text-purple-500" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
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
        <Sparkles className="h-8 w-8 text-purple-400" />
      </motion.div>
    </main>
  );
}
