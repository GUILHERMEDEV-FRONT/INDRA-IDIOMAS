import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import AboutUs from './components/AboutUs';
import StudentGallery from './components/StudentGallery';
import Translation from './components/Translation';
import Ebooks from './components/Ebooks';
import Faq from './components/Faq';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal overflow-x-hidden selection:bg-brand-peach selection:text-white">
      {/* Structural Headers and navigation */}
      <Header />
      
      {/* Main Sections */}
      <main className="relative">
        <Hero />
        <Courses />
        <AboutUs />
        <StudentGallery />
        <Translation />
        <Ebooks />
        <Faq />
        <ContactForm />
      </main>

      {/* Legal regulations, branding credentials */}
      <Footer />
    </div>
  );
}
