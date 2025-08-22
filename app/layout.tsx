import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Tech Rig - DOT Compliance Consulting & Business Services | Not a Government Agency",
  description:
    "Professional consulting services for transportation businesses. We help you understand DOT, MC Authority, and FMCSA requirements. Private consulting firm - not affiliated with any government agency. Call +1 (917) 909-2257 for assistance.",
  keywords: "DOT compliance consulting, MC authority assistance, FMCSA requirements help, transportation business consulting, trucking compliance services, USDOT number, MC number, trucking permits, commercial vehicle compliance, FMCSA registration assistance",
  generator: "Next.js",
  applicationName: "Tech Rig Compliance",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Tech Rig Compliance" }],
  creator: "Tech Rig Compliance",
  publisher: "Tech Rig Compliance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://techrig.org"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Tech Rig Compliance Consulting - Not a Government Agency",
    description: "Expert DOT compliance consulting and document preparation assistance. We are a private service, not affiliated with FMCSA.",
    url: "https://techrig.org",
    siteName: "Tech Rig Compliance",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Tech Rig Compliance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Rig - DOT Compliance Consulting",
    description: "Professional DOT & MC Authority consulting services. Get compliant fast with expert guidance.",
    images: ["/logo.png"],
  },
  verification: {
    google: "qmk9CNfwU_cMmTo4FaNq89hz9Tghwqk99mAyd0hxKIg",
    yandex: "yandex-verification-code", // Optional - replace if you have Yandex
    bing: "bing-verification-code", // Optional - replace if you have Bing Webmaster
  },
  category: "business",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        {/* Google Tag Manager - placed as high as possible */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W7BD5J6W');`,
          }}
        />
        {/* End Google Tag Manager */}
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" type="application/json+oembed" href="https://techrig.org/oembed.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Tech Rig" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-tap-highlight" content="no" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta httpEquiv="X-DNS-Prefetch-Control" content="on" />
      </head>
      <body className="font-body antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W7BD5J6W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}
