import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Never have I BINGO",
  description: "Sensory Minds Front-End Coding Challenge",
};

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${courier.className} antialiased`}>{children}</body>
    </html>
  );
}
