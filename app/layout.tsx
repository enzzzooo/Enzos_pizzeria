import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Enzo's Pizzeria",
  description: "Gourmet Pizzas served fresh daily!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(fontHeading.variable, fontBody.variable)}>
        {children}
      </body>
    </html>
  );
}
