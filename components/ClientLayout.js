'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

export default function ClientLayout({ children }) {
  const pathname = usePathname()
  const isJJFPortfolio = pathname === '/JJFPORTEFOLIO'
  
  return (
    <>
      {!isJJFPortfolio && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {!isJJFPortfolio && <Footer />}
    </>
  )
}
