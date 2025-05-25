import type React from "react";
import type { Metadata } from "next";
import { Inter, Anta, Alumni_Sans, Georama } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const anta = Anta({ weight: "400", subsets: ["latin"] });
const alumniSansSC = Alumni_Sans({
  weight: "500",
  subsets: ["latin"],
  style: "normal",
});
const georama = Georama({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "STRIDE",
  description: "Step Into The Future Of Combat Simulation",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Georama:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alumni+Sans+SC:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Squada+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} ${anta.className} ${alumniSansSC.className} ${georama.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
