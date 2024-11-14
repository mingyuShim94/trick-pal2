"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ShareButtonsProps {
  shareUrl: string;
}

export function ShareButtons({ shareUrl }: ShareButtonsProps) {
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button
          className="flex-1"
          onClick={() => {
            navigator.clipboard.writeText(shareUrl);
            alert("Link copied!");
          }}
        >
          Copy Link
        </Button>
        <Button variant="outline" className="flex-1" asChild>
          <Link href="/create">Choose Again</Link>
        </Button>
      </div>
      <div className="flex gap-2">
        <Button
          className="flex-1"
          onClick={() => {
            window.open(
              `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                shareUrl
              )}`
            );
          }}
        >
          Share on Twitter
        </Button>
        <Button
          className="flex-1"
          onClick={() => {
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                shareUrl
              )}`
            );
          }}
        >
          Share on Facebook
        </Button>
      </div>
    </div>
  );
}
