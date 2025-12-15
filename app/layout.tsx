import type { Metadata } from "next";
import "./styles/globals.css";
import { Footer, Header } from "./components";

export const metadata: Metadata = {
  title: "hi maomao",
  description: "deez nuts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        <main style={{ flex: 1 }}>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
