import "./globals.css";
import Footer from "./layout/footer";
import Header from "./layout/header";
import { SITE_URL } from "./constant/unit";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "CÔNG TY TNHH ĐẦU TƯ PHÁT TRIỂN XÂY DỰNG ĐẠI TIẾN PHÁT",
  description: "Chuyên đầu tư và phát triển xây dựng tại Việt Nam.",
  verification: {
    google: "7AIi6IlmHq81QYPQ6YBBl4NayIcxJVnNMHQyLPRTD2g",
  },
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
    description: "Chuyên đầu tư và phát triển xây dựng tại Việt Nam.",
    images: "/images/favicon-light-custom.jpg",
    url: SITE_URL,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive" // Chỉ chạy sau khi trang đã tải xong
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Đại Tiến Phát",
            url: SITE_URL,
          }),
        }}
      />
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
