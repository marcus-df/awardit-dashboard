import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/sections/header";
import { Geist, Geist_Mono } from "next/font/google";
import FooterSection from "@/components/sections/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <AppSidebar />
              <main className="w-full p-2 flex flex-col">
                <div className="flex-grow">
                  <div className="flex items-center">
                    <SidebarTrigger />
                    <Header />
                  </div>
                  {children}
                </div>
                <Toaster />
                <FooterSection />
              </main>
            </SidebarProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
