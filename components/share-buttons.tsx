"use client";

import { Button } from "@/components/ui/button";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  LineShareButton,
  RedditShareButton,
} from "react-share";
import {
  Facebook,
  Twitter,
  MessageCircle,
  Send,
  Share2,
  RssIcon as Reddit,
  Link,
} from "lucide-react";

interface ShareButtonsProps {
  shareUrl: string;
}

export function ShareButtons({ shareUrl }: ShareButtonsProps) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied!");
  };

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800">Share</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <WhatsappShareButton url={shareUrl}>
          <Button
            variant="outline"
            className="w-full bg-green-500 hover:bg-green-600 text-white border-none transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </Button>
        </WhatsappShareButton>

        <TelegramShareButton url={shareUrl}>
          <Button
            variant="outline"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white border-none transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Send className="w-5 h-5 mr-2" />
            Telegram
          </Button>
        </TelegramShareButton>

        <LineShareButton url={shareUrl}>
          <Button
            variant="outline"
            className="w-full bg-green-400 hover:bg-green-500 text-white border-none transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Share2 className="w-5 h-5 mr-2" />
            LINE
          </Button>
        </LineShareButton>

        <TwitterShareButton url={shareUrl}>
          <Button
            variant="outline"
            className="w-full bg-blue-400 hover:bg-blue-500 text-white border-none transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Twitter className="w-5 h-5 mr-2" />
            Twitter
          </Button>
        </TwitterShareButton>

        <FacebookShareButton url={shareUrl}>
          <Button
            variant="outline"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white border-none transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Facebook className="w-5 h-5 mr-2" />
            Facebook
          </Button>
        </FacebookShareButton>

        <RedditShareButton url={shareUrl}>
          <Button
            variant="outline"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white border-none transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Reddit className="w-5 h-5 mr-2" />
            Reddit
          </Button>
        </RedditShareButton>

        <Button
          variant="outline"
          className="w-full col-span-2 md:col-span-3 bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={handleCopyLink}
        >
          <Link className="w-5 h-5 mr-2" />
          Copy Link
        </Button>
      </div>
    </div>
  );
}
