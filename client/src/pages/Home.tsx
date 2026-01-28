import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import CoreAdvantages from '@/components/CoreAdvantages';
import SolutionsCarousel from '@/components/SolutionsCarousel';
import AboutSection from '@/components/AboutSection';
import NewsSection from '@/components/NewsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <CoreAdvantages />
      <SolutionsCarousel />
      <AboutSection />
      <NewsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
