import type { Metadata } from "next";
import "./globals.css";
import {
  ZaxSans,
  ZaxCasual,
  ZaxSansSemiCondensed,
  ZaxSerif,
} from "@/components/fonts";
import Providers from "@/providers";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Your ZAXBYS",
  description:
    "The store level management portal that enables your team to grow to win while they 'Consistently create encore experiences that enrich lives, one person at a time.'",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ZaxSans.variable} ${ZaxCasual.variable} ${ZaxSansSemiCondensed.variable} ${ZaxSerif.variable} font-sans antialiased`}
      >
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
