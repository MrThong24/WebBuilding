import Head from "next/head";
import "./globals.css";
import Footer from "./layout/footer";
import Header from "./layout/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-white">
          <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
          <Header />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
