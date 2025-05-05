import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import TopProducts from "./components/TopProducts";
import Banner from "./components/Banner";
import Subscribe from "./components/Subscribe";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
function App() {
  useEffect(function () {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Products />
        <TopProducts />
        <Banner />
        <Subscribe />
        <Products />
        <Testimonials />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
