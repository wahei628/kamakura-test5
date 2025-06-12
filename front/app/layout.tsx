import type { Metadata } from 'next'
import { Roboto } from "next/font/google";
import './globals.css'
import { MuiThemeProvider } from "@/components/layout/theme-provider"
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer' 


const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "kamakura-travel - 隠れたスポットを発見しよう",
  description:
    "鎌倉の地元の人だけが知る隠れたスポットを検索・共有できる旅行サポートアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} min-h-screen flex flex-col bg-surface`}
      >
        <MuiThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MuiThemeProvider>
      </body>
    </html>
  )
}
