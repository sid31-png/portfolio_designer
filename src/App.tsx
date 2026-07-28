import { Routes, Route } from 'react-router-dom';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { TabNav } from '@/components/nav/TabNav';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Work from '@/pages/Work';
import CaseStudy from '@/pages/CaseStudy';
import About from '@/pages/About';
import Resume from '@/pages/Resume';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <>
      <AnimatedBackground />
      <ScrollToTop />
      <TabNav />
      <main id="main" className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
