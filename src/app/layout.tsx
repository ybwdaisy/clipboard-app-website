import "./globals.css";
import type { Metadata } from "next";
import Script from 'next/script';
import { GoogleAnalyticsProvider } from './providers';

export const metadata: Metadata = {
  title: "Clipboard Manager",
  description: "Clipboard stores everything you copy on your iPhone and iPad, so it's always there whenever you need it again.",
};

const isProd = process.env.NODE_ENV === 'production';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {isProd && (
          <>
            {/* Google Analytics */}
            <Script
              strategy="afterInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=G-780SKCM4C8"
            />
            <Script
              id="ga-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-780SKCM4C8', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        {isProd && <GoogleAnalyticsProvider />}
        {children}
      </body>
    </html>
  );
}
