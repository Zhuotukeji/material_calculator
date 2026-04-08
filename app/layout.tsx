import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "装修材料计算器 - 精准计算油漆、瓷砖、地板用量",
    template: "%s - 装修材料计算器",
  },
  description: "免费在线装修材料计算工具，帮助您准确计算油漆、瓷砖、地板等材料用量，避免浪费和不足。提供专业的装修知识文章和常见问题解答。",
  keywords: ["装修计算器", "油漆计算", "瓷砖计算", "地板计算", "材料用量", "装修材料", "家装工具"],
  authors: [{ name: "装修材料计算器" }],
  creator: "装修材料计算器",
  publisher: "装修材料计算器",
  metadataBase: new URL('https://material-calculator.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://material-calculator.vercel.app',
    title: '装修材料计算器 - 精准计算油漆、瓷砖、地板用量',
    description: '免费在线装修材料计算工具，帮助您准确计算油漆、瓷砖、地板等材料用量，避免浪费和不足。',
    siteName: '装修材料计算器',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification code here when available
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
