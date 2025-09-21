import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { ProductSection } from '@/components/ProductSection'
import { Newsletter } from '@/components/Newsletter'
import { Footer } from '@/components/Footer'

export const Home = () => {
  return (
    <div className="min-h-screen background-white container mx-auto px-10">
        <Navbar />
        <Hero />
        <About />
        <ProductSection />
        <Newsletter />
        <Footer />
    </div>
  );
};
