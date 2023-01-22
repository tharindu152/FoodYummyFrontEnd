import './App.css';
import NaviBar from './components/Navibar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Products from './components/Products';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ScrollToTop />
      <NaviBar />
      <Hero />
      <Services />
      <Products />
      <Portfolio />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
