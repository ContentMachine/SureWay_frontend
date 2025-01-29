import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UseSWRConfigProvider from "@/config/SWRConfig";
import MagnetContextProvider from "@/context/MagnetContext";
import AppContextProvider from "@/context/AppContext";
import { ToastContextProvider } from "@/context/ToastContext";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sureway",
  description: "We help brands to amplify and inspire people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <Script
        strategy="lazyOnload"
        src="https://embed.tawk.to/679a2978825083258e0cffe6/1iip340b1"
      />

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <UseSWRConfigProvider>
          <ToastContextProvider>
            <AppContextProvider>
              <MagnetContextProvider>{children}</MagnetContextProvider>
            </AppContextProvider>
          </ToastContextProvider>
        </UseSWRConfigProvider>
      </body>
    </html>
  );
}
