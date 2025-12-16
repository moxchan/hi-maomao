import type { Metadata } from "next";
import "./styles/globals.css";
import { Footer, Header } from "./components";
import { dynaPuff } from "./fonts";

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
      <body className={dynaPuff.className}>
        <header>
          <Header />
        </header>
        <main style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
