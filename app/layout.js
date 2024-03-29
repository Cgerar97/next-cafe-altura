import { Inter } from 'next/font/google'
import { Outfit } from 'next/font/google'
import './globals.css'
import { NavBar } from './Navbar/page'
import Footer from './Footer/page'
import { ProductProvider } from './context/Context'
import CopyRightFooter from './componentes/CopyRightFooter'
const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ProductProvider>
          <NavBar />
          {children}
          <CopyRightFooter />
        </ProductProvider>
      </body>
    </html>
  )
}
