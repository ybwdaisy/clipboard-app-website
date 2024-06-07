import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clipboard Manager",
  description: "Clipboard stores everything you copy on your iPhone and iPad, so it's always there whenever you need it again.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
