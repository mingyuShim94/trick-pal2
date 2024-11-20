"use client";

import { useState, useEffect } from "react";
import { deceptionContents, jumpscareContents } from "@/lib/contents";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { templates, type TemplateKey } from "./templates";

export const runtime = "edge";

export default function SharePage({
  params,
}: {
  params: { content: string; jumpscare: string };
}) {
  const [showJumpscare, setShowJumpscare] = useState(false);
  const [displayJumpscare, setDisplayJumpscare] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const audioElement = new Audio(
        jumpscareContents.find((content) => content.id === params.jumpscare)
          ?.sound || "/sounds/jumpscares/scream.mp3"
      );
      setAudio(audioElement);
    }
  }, [params.jumpscare]);

  useEffect(() => {
    audio?.play();
    if (showJumpscare) {
      const timer = setTimeout(() => {
        setDisplayJumpscare(true);
        audio?.play();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showJumpscare, audio]);

  const deceptionContent = deceptionContents.find(
    (content) => content.id === params.content
  );
  const jumpscareContent = jumpscareContents.find(
    (content) => content.id === params.jumpscare
  );

  const handleComplete = () => {
    setShowJumpscare(true);
  };

  if (!deceptionContent || !jumpscareContent) {
    return (
      <main className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-indigo-50 to-indigo-100 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-indigo-600">Invalid Access</h1>
          <p className="text-gray-600">
            The requested content could not be found.
          </p>
          <Button
            asChild
            className="bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300"
          >
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </main>
    );
  }

  const Template = templates[params.content as TemplateKey];

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-indigo-100">
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
            {displayJumpscare && (
              <Button
                asChild
                className="bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300 transform hover:scale-105 text-3xl px-16 py-8"
              >
                <Link href="/create">Prank Your Friends!!</Link>
              </Button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
