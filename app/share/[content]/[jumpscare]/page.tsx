"use client";

import { useState } from "react";
import { deceptionContents, jumpscareContents } from "@/lib/contents";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { templates, type TemplateKey } from "./templates";

export default function SharePage({
  params,
}: {
  params: { content: string; jumpscare: string };
}) {
  const [showJumpscare, setShowJumpscare] = useState(false);
  const [audio] = useState(
    typeof window !== "undefined"
      ? new Audio(
          jumpscareContents.find((content) => content.id === params.jumpscare)
            ?.sound || "/sounds/jumpscares/scream.mp3"
        )
      : null
  );

  const deceptionContent = deceptionContents.find(
    (content) => content.id === params.content
  );
  const jumpscareContent = jumpscareContents.find(
    (content) => content.id === params.jumpscare
  );

  const handleComplete = () => {
    setShowJumpscare(true);
    audio?.play();
  };

  if (!deceptionContent || !jumpscareContent) {
    return (
      <main className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="max-w-md mx-auto text-center space-y-4">
          <h1 className="text-2xl font-bold text-red-600">Invalid Access</h1>
          <Button asChild>
            <Link href="/">Home</Link>
          </Button>
        </div>
      </main>
    );
  }

  const Template = templates[params.content as TemplateKey];

  return (
    <main className="min-h-screen bg-white">
      {Template && <Template onComplete={handleComplete} />}

      {showJumpscare && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={jumpscareContent.thumbnail}
              alt="Jumpscare"
              fill
              className="object-contain animate-jumpscare"
            />
          </div>
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
            <Button
              asChild
              variant="secondary"
              className="bg-white text-black hover:bg-gray-100"
            >
              <Link href="/create">Make a Friend Scare</Link>
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}
