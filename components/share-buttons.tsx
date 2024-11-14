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
            alert("링크가 복사되었습니다!");
          }}
        >
          링크 복사하기
        </Button>
        <Button variant="outline" className="flex-1" asChild>
          <Link href="/create">다시 선택하기</Link>
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
          트위터로 공유
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
          페이스북으로 공유
        </Button>
      </div>
    </div>
  );
}
