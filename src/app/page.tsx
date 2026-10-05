import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'
import ScrollProgress from '@/components/ScrollProgress'
import Skills from '@/components/Skills'
import Work from '@/components/Work'

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
