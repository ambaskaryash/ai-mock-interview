import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EvoInterview: Ace Your Next Interview with AI-Powered Practice",
  description:
    "EvoInterview uses AI to provide realistic mock interviews, personalized feedback, and targeted practice to help you land your dream job. Prepare for technical and behavioral interviews with confidence.",
  keywords: [
    "AI interview practice",
    "mock interview",
    "job interview preparation",
    "AI powered interview",
    "technical interview practice",
    "behavioral interview practice",
    "interview skills",
    "interview coaching",
    "career development",
    "job search",
    "EvoInterview",
    "AI mock interview",
    "virtual interview practice",
    "interview feedback",
    "practice interviews",
    "interview prep",
    "interview simulator",
    "AI interview prep",
    "improve interview skills",
    "get a job",
    "job interview tips",
    "interview questions and answers",
    "behavioral interview questions and answers", // Added
    "technical interview tips for software engineers", // Added
    "how to answer common interview questions", // Added
    "common interview questions and answers", // Added
    "best interview tips", // Added
    "ace your next interview", // Added
    "prepare for job interviews", // Added
    "improve your interview skills", // Added
    "job interview preparation tips", // Added
    "technical interview questions and answers", // Added
    "behavioral interview questions examples", // Added
    "top interview questions", // Added
    "difficult interview questions", // Added
    "how to answer behavioral interview questions", // Added
    "how to answer technical interview questions", // Added
    "mock interview questions and answers", // Added
    "free mock interviews", // Added
    "online mock interviews", // Added
    "AI-powered interview practice", // Added
    "AI interview simulator", // Added
    "realistic mock interviews", // Added
    "personalized interview feedback", // Added
    "targeted interview practice", // Added
  ],
  authors: [{ name: "Novitas WebWorks" }],
  openGraph: {
    title: "EvoInterview: Ace Your Next Interview with AI-Powered Practice",
    description:
      "EvoInterview uses AI to provide realistic mock interviews, personalized feedback, and targeted practice to help you land your dream job. Prepare for technical and behavioral interviews with confidence.",
    url: "https://evointerview.com",
    siteName: "EvoInterview",
    images: [
      {
        url: "https://www.evointerview.com/logo.svg",
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
    title: "EvoInterview: Ace Your Next Interview with AI-Powered Practice",
    description:
      "EvoInterview uses AI to provide realistic mock interviews, personalized feedback, and targeted practice to help you land your dream job. Prepare for technical and behavioral interviews with confidence.",
    images: ["https://www.evointerview.com/twitter-image.jpg"],
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
