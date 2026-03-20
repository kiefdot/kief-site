import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kiefdot.com"),
  title: "Kief — From the Leaf, For the Life.",
  description:
    "Kief is a contemporary fashion brand built on hemp, linen, and conscious production. Small-batch craft rooted in Sri Lanka.",

  // ✅ FAVICON (works best with .ico)
  icons: {
    icon: "/favicon.ico",
  },

  // ✅ OPEN GRAPH (for WhatsApp, Discord, etc.)
  openGraph: {
    title: "Kief — From the Leaf, For the Life.",
    description:
      "Kief is a contemporary fashion brand built on hemp, linen, and conscious production.",
    url: "https://kiefdot.com",
    siteName: "Kief",
    images: [
      {
        url: "https://kiefdot.com/preview-new.png", // 🔥 FULL URL (important)
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  // ✅ TWITTER PREVIEW
  twitter: {
    card: "summary_large_image",
    title: "Kief — From the Leaf, For the Life.",
    description:
      "Kief is a contemporary fashion brand built on hemp, linen, and conscious production.",
    images: ["https://kiefdot.com/preview-new.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Navigation />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}