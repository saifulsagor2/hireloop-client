import type { ReactNode } from "react"

import { FooterSection } from "@/components/home/footer-section"

export default function MarketplaceLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#010102] text-white">
      {children}
      <FooterSection />
    </div>
  )
}
