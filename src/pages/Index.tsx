import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Statistics from '@/components/Statistics';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Statistics />
        <Testimonials />
        <FAQ />
        <Download />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
