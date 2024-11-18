"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShareButtons } from "@/components/share-buttons";
import { deceptionContents, jumpscareContents } from "@/lib/contents";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, ArrowLeft } from "lucide-react";

export const runtime = "edge";

export default function PreviewPage({
  searchParams,
}: {
  searchParams: { content?: string; jumpscare?: string };
}) {
  // const [isJumpscareVisible, setIsJumpscareVisible] = useState(false);

  if (!searchParams.content || !searchParams.jumpscare) {
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

  const deceptionContent = deceptionContents.find(
    (content) => content.id === searchParams.content
  );
  const jumpscareContent = jumpscareContents.find(
    (content) => content.id === searchParams.jumpscare
  );

  if (!deceptionContent || !jumpscareContent) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-400 via-pink-300 to-orange-200 p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md space-y-6 rounded-2xl bg-white/90 p-8 text-center shadow-xl backdrop-blur-sm"
        >
          <AlertTriangle className="mx-auto h-16 w-16 text-red-500" />
          <h1 className="text-2xl font-bold text-red-600">Invalid Content</h1>
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

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const shareUrl = `${baseUrl}/share/${searchParams.content}/${searchParams.jumpscare}`;

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-orange-200 p-4 md:p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-2 text-center"
        >
          <h1 className="text-3xl font-bold text-purple-900 md:text-4xl">
            Final Preview
          </h1>
          <p className="text-lg text-purple-700">
            Check your selected content and share it
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden bg-white/90 p-6 shadow-xl backdrop-blur-sm">
              <h2 className="mb-4 text-2xl font-semibold text-purple-800">
                Trick Content
              </h2>
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-xs font-medium text-white">
                  {deceptionContent.category}
                </div>
                <h3 className="text-lg font-medium text-purple-700">
                  {deceptionContent.title}
                </h3>
                <p className="text-purple-600">
                  {deceptionContent.description}
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="overflow-hidden bg-white/90 p-6 shadow-xl backdrop-blur-sm">
              <h2 className="mb-4 text-2xl font-semibold text-purple-800">
                Jump Scare Content
              </h2>
              <div className="space-y-4">
                <div className="relative mx-auto aspect-square w-full max-w-[300px] overflow-hidden rounded-lg">
                  <AnimatePresence>
                    <motion.div
                      key="jumpscare"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={jumpscareContent.thumbnail}
                        alt={jumpscareContent.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-purple-700">
                    {jumpscareContent.title}
                  </h3>
                  <p className="text-purple-600">
                    {jumpscareContent.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <ShareButtons shareUrl={shareUrl} />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
