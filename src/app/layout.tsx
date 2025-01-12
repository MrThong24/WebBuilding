import "./globals.css";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Head from "next/head";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://daitienphatcons.com"),
  title: "CÔNG TY TNHH ĐẦU TƯ PHÁT TRIỂN XÂY DỰNG ĐẠI TIẾN PHÁT",
  description: "CÔNG TY TNHH ĐẦU TƯ PHÁT TRIỂN XÂY DỰNG ĐẠI TIẾN PHÁT",
  icons: {
    icon: [
      {
        url: "/images/favicon-light.png",
        href: "/images/favicon-light.png",
      },
    ],
  },
  openGraph: {
    title: "CÔNG TY TNHH ĐẦU TƯ PHÁT TRIỂN XÂY DỰNG ĐẠI TIẾN PHÁT",
    description: "CÔNG TY TNHH ĐẦU TƯ PHÁT TRIỂN XÂY DỰNG ĐẠI TIẾN PHÁT",
    images: "/images/favicon-light-custom.jpg",
    url: `https://daitienphatcons.com`,
    type: "website",
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
