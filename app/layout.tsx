import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adithya-nachiyappan.vercel.app"),
  title: "S Adithya Nachiyappan — Machine Learning Engineer & Software Developer",
  description:
    "Machine Learning Engineer & Software Developer specializing in computer vision, deepfake detection, RAG pipelines, and data infrastructure. B.Tech IT student at VIT Vellore.",
  keywords: [
    "Machine Learning Engineer", "Computer Vision", "Deep Learning",
    "PyTorch", "TensorFlow", "RAG", "S Adithya Nachiyappan", "VIT Vellore",
  ],
  authors: [{ name: "S Adithya Nachiyappan" }],
  creator: "S Adithya Nachiyappan",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://adithya-nachiyappan.vercel.app",
    title: "S Adithya Nachiyappan — Machine Learning Engineer & Software Developer",
    description: "Building intelligent systems at the intersection of computer vision, deepfake detection, RAG pipelines, and production backend infrastructure.",
    siteName: "S Adithya Nachiyappan Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "S Adithya Nachiyappan" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "S Adithya Nachiyappan — Machine Learning Engineer & Software Developer",
    description: "Building intelligent systems at the intersection of computer vision, deepfake detection, RAG pipelines, and production backend infrastructure.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "S Adithya Nachiyappan",
  jobTitle: "Machine Learning Engineer & Software Developer",
  url: "https://adithya-nachiyappan.vercel.app",
  sameAs: [
    "https://www.linkedin.com/in/adithya-nachiyappan/",
    "https://github.com/Nachi2006",
  ],
  alumniOf: { "@type": "EducationalOrganization", name: "Vellore Institute of Technology" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased selection:bg-white/20 selection:text-white">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
