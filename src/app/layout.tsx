import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Intersmart",
  description: "web application",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
<body suppressHydrationWarning className={`${poppins.className} antialiased min-h-screen flex flex-col`}
>        <Header />
        <main className=" relative overflow-hidden">

          {children}

        </main>

        <Footer />
      </body>
    </html>

  );
}
