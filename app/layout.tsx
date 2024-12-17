import type { Metadata } from "next";
import localFont from "next/font/local";
import { Theme} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
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
  title: "Coffee Finder: Discover Your Perfect Brew",
  description: "xplore a wide variety of coffee options tailored to your taste. Find your perfect coffee brew, from bold espresso to smooth lattes, and everything in between!",
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
        <Theme accentColor="gold">
          <main className="px-5 pt-16 h-full">
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
