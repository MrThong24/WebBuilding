import "./globals.css";
import Footer from "./layout/footer";
import Header from "./layout/header";
import Head from "next/head";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://daitienphatcons.com"),
  title: "CÔNG TY TNHH ĐẦU TƯ PHÁT TRIỂN XÂY DỰNG ĐẠI TIẾN PHÁT",
  description: "Chuyên đầu tư và phát triển xây dựng tại Việt Nam.",
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
    url: "https://daitienphatcons.com",
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
        <title>Đại Tiến Phát - Xây Dựng & Đầu Tư</title>
        <meta name="title" content="Đại Tiến Phát - Xây Dựng & Đầu Tư" />
        <meta
          name="description"
          content="Chuyên đầu tư và phát triển xây dựng tại Việt Nam."
        />
        <meta
          name="google-site-verification"
          content="7AIi6IlmHq81QYPQ6YBBl4NayIcxJVnNMHQyLPRTD2g"
        />
        <link rel="icon" href="/images/favicon-light.png" />
      </Head>
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive" // Chỉ chạy sau khi trang đã tải xong
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Đại Tiến Phát",
            url: "https://daitienphatcons.com",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://daitienphatcons.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
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
