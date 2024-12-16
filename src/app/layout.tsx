import "./globals.css";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Head from "next/head"; // Thêm import này
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "daitienphatcons",
  description: "daitienphatcons",
  icons: {
    icon: [
      {
        url: "/images/favicon-light.png",
        href: "/images/favicon-light.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon-light.png" />
      </Head>
      <body>
        <div className="bg-white">
          <Header />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
