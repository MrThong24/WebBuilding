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
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
