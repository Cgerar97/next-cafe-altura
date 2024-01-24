"use client"
import Image from 'next/image'
import { NavBar } from './Navbar/page'
import { Hero } from './componentes/Hero'
import { ItemsCard } from './componentes/ItemsCard'
import { ProductsCards } from './componentes/ProductsCards'
import { IntemsProductsCards } from './componentes/IntemsProductsCards'
import { ProductProvider } from './context/Context'
import { FAQ } from './componentes/FAQ'
import { FAQWrapper } from './componentes/FAQWrapper'
import { FeatureSection } from './componentes/FeatureSection'
import SplitTwoTone from './componentes/SplitTwoTone'
import Footer from './Footer/page'

export default function Home() {
  return (
    <main className=" ">
      
      <Hero/>
      <ItemsCard/>
      <IntemsProductsCards/>
      <FAQWrapper/>
    
      <FeatureSection/>
      <SplitTwoTone/>
      <Footer />
    </main>
  )
}
