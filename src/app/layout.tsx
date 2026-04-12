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

// ✅ FULL SEO + PREVIEW + GOOGLE VERIFICATION
export const metadata: Metadata = {
  metadataBase: new URL("https://kiefdot.com"),

  title: "Kief. - Hemp wear - Sri Lanka",
  description:
    "Kief crafts premium sustainable fashion from hemp and linen. Rooted in Sri Lanka. Small-batch, conscious production.",

  // ✅ GOOGLE SEARCH CONSOLE VERIFICATION
  verification: {
    google: "Dku2zrlxJdEB3z_UYIKEX4gLtST404A7D8_GOHd2Lh0",
  },

  // ✅ FAVICON
  icons: {
    icon: "/favicon.ico",
  },

  // ✅ SOCIAL PREVIEW (WhatsApp, Facebook, etc.)
  openGraph: {
    title: "Kief — From the Leaf, For the Life.",
    description:
      "Premium hemp & linen garments crafted in Sri Lanka. Conscious fashion, small-batch production.",
    url: "https://kiefdot.com",
    siteName: "Kief",
    images: [
      {
        url: "/images/preview-new.png",
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
      "Premium hemp & linen garments crafted in Sri Lanka.",
    images: ["/images/preview-new.png"],
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