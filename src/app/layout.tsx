import "./globals.css";
import Header from "./layout/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
