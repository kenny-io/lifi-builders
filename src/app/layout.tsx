import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LI.FI Builders Program | Accelerator for Cross-Chain Innovators",
  description: "An accelerator program for early-stage builders creating innovative products on LI.FI's cross-chain infrastructure. Quarterly showcases with $5k prizes.",
  icons: {
    icon: "/images/logo_lifi_light.png",
    apple: "/images/logo_lifi_light.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`} suppressHydrationWarning>
        <div className="fixed inset-0 bg-bg-default pointer-events-none -z-10" />
        <Nav />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
