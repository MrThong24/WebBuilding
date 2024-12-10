import "./globals.css";
import Footer from "./layout/footer";
import Header from "./layout/header";
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
