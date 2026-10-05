import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { profile } from "@/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.fullName} | Portfolio Full Stack`,
  description: profile.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
