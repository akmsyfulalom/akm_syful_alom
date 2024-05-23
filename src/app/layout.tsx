import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import Providers from "@/providers/Provider";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme/theme-provider";
// const inter = Inter({ subsets: ["latin"] });

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AKM SYFUL ALOM - Portfolio",
  description:
    "As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in Full Stack Web App Development.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Providers>
      <html lang="en">
        <body className={spaceGrotesk.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />

            {children}
          </ThemeProvider>
        </body>
      </html>
    </Providers>
  );
}
