import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EvoInterview: AI-Powered Mock Interviews",
  description:
    "EvoInterview is an AI-powered platform that helps you evolve your skills with mock interviews. Prepare for your job interviews with our AI.",
  keywords: [
    "AI",
    "Mock Interviews",
    "Interview Preparation",
    "Job Skills",
    "Career Development",
    "EvoInterview",
    "AI Interview Practice",
    "Technical Interviews",
    "Behavioral Interviews",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "EvoInterview: AI-Powered Mock Interviews",
    description:
      "EvoInterview is an AI-powered platform that helps you evolve your skills with mock interviews. Prepare for your job interviews with our AI.",
    url: "https://www.evointerview.com", // Replace with your actual URL
    siteName: "EvoInterview",
    images: [
      {
        url: "https://www.evointerview.com/logo.svg", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "EvoInterview - AI Mock Interviews",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": "large",
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "EvoInterview: AI-Powered Mock Interviews",
    description:
      "EvoInterview is an AI-powered platform that helps you evolve your skills with mock interviews. Prepare for your job interviews with our AI.",
    images: ["https://evointerview.com/twitter-logo.jpg"], // Replace with your actual Twitter image URL
    card: "summary_large_image",
  },
  verification: {
    google: "google",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased pattern`}>
        {children}

        <Toaster />
      </body>
    </html>
  );
}
