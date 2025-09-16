import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dosis.fun'),
  title: "DOSIS.FUN - Survive the Streets, Build Your Empire",
  description: "Join the most ruthless survival RPG ever created. Build your underground empire from zero to kingdom with real ownership and dynamic economy.",
  keywords: "RPG, survival game, blockchain, NFT, underground, empire building",
  openGraph: {
    title: "DOSIS.FUN - Underground Survival RPG",
    description: "Survive the streets and build your empire",
    images: ["/logo.png"],
  },
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
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
