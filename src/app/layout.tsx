import './globals.css'
import { Saira } from 'next/font/google'
import { ReactNode } from 'react'
import { Header } from '@/components/header'
import { DefaultProvider } from '@/components/default-provider'
import { Footer } from '@/components/footes'

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <DefaultProvider>
          <Header />
          {children}
          <Footer />
        </DefaultProvider>
      </body>
    </html>
  )
}
