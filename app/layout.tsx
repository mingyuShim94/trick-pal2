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
  title: "TrickPal - The Most Fun Way to Surprise Your Friends",
  description:
    "Did you think it was a personality test, but got surprised instead? A fun prank app to enjoy with your friends!",
  icons: {
    icon: "/images/favicon.webp",
  },
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
    title: "TrickPal - The Most Fun Way to Surprise Your Friends",
    description:
      "Did you think it was a personality test, but got surprised instead? A fun prank app to enjoy with your friends!",
    type: "website",
    locale: "en_US",
    siteName: "TrickPal",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/root_metaImg.webp`,
        width: 1200,
        height: 630,
        alt: "TrickPal Meta Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TrickPal - The Most Fun Way to Surprise Your Friends",
    description:
      "Did you think it was a personality test, but got surprised instead? A fun prank app to enjoy with your friends!",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/root_metaImg.jpeg`,
      },
    ],
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
