import {
  Geist,
  Instrument_Sans,
  Inter_Tight,
  Manrope,
  Plus_Jakarta_Sans,
} from "next/font/google"

import "@workspace/ui/globals.css"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  preload: false,
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  preload: false,
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  preload: false,
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["600"],
  preload: false,
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["400"],
  preload: false,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        manrope.variable,
        instrumentSans.variable,
        plusJakarta.variable,
        interTight.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
