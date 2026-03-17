import type { Metadata } from "next";
import { Geist, Geist_Mono, Sulphur_Point } from "next/font/google";
import "./globals.css";
import "./button-gradient.css";
import Navbar from "@/components/Navbar";
import FooterConditional from "@/components/FooterConditional";

const geistSans = Sulphur_Point({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400"],
  // weight: ["300", "400", "500"], // or just one: weight: "400"
});

// const geistSans = Geist({
//   variable: "--font-primary",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-secondary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HPG Sheds & Patios",
  description: "Sheds, Patios & Outdoor Structures Built Your Way",
  icons: {
    icon: "/favicon/svg-logo-no-font.svg",
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
        <Navbar />
        {children}
        <FooterConditional />
      </body>
    </html>
  );
}
