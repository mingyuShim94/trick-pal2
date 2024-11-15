"use client";

import { Button } from "@/components/ui/button";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  LineShareButton,
  RedditShareButton,
  LinkedinShareButton,
  EmailShareButton,
} from "react-share";

interface ShareButtonsProps {
  shareUrl: string;
}

export function ShareButtons({ shareUrl }: ShareButtonsProps) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied!");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-center">Share</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <WhatsappShareButton url={shareUrl}>
          <Button variant="outline" className="w-full">
            WhatsApp
          </Button>
        </WhatsappShareButton>

        <TelegramShareButton url={shareUrl}>
          <Button variant="outline" className="w-full">
            Telegram
          </Button>
        </TelegramShareButton>

        <LineShareButton url={shareUrl}>
          <Button variant="outline" className="w-full">
            LINE
          </Button>
        </LineShareButton>

        <TwitterShareButton url={shareUrl}>
          <Button variant="outline" className="w-full">
            Twitter
          </Button>
        </TwitterShareButton>

        <FacebookShareButton url={shareUrl}>
          <Button variant="outline" className="w-full">
            Facebook
          </Button>
        </FacebookShareButton>

        <RedditShareButton url={shareUrl}>
          <Button variant="outline" className="w-full">
            Reddit
          </Button>
        </RedditShareButton>

        <LinkedinShareButton url={shareUrl}>
          <Button variant="outline" className="w-full">
            LinkedIn
          </Button>
        </LinkedinShareButton>

        <EmailShareButton url={shareUrl}>
          <Button variant="outline" className="w-full">
            Email
          </Button>
        </EmailShareButton>

        <Button
          variant="outline"
          className="w-full col-span-2 md:col-span-4"
          onClick={handleCopyLink}
        >
          Copy Link
        </Button>
      </div>
    </div>
  );
}
