import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TrickPal - Fun Social Media Pranks",
  description:
    "Create hilarious jump scares and prank your friends with fake social media analysis tools. Share funny moments and make memories with TrickPal!",
  keywords: [
    "social media prank",
    "jump scare",
    "friend prank",
    "funny tricks",
    "social media analysis",
    "instagram prank",
    "mbti prank",
    "celebrity lookalike",
  ],
  authors: [
    {
      name: "TrickPal Team",
    },
  ],
  openGraph: {
    title: "TrickPal - Fun Social Media Pranks",
    description:
      "Create hilarious jump scares and prank your friends with fake social media analysis tools",
    type: "website",
    locale: "en_US",
    siteName: "TrickPal",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrickPal - Fun Social Media Pranks",
    description:
      "Create hilarious jump scares and prank your friends with fake social media analysis tools",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
