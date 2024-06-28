import React from 'react';
import Spinner from '../components/Spinner';
import Navbar from '../components/Navbar';
import ModalSearch from '../components/ModalSearch';
import Hero from '../components/Hero';
import FeatursSection from '../components/FeatursSection';
import ProductShop from '../components/ProductShop';
import Featurs from '../components/Featurs';
import VesitableShop from '../components/VesitableShop';
import BannerSection from '../components/BannerSection';
import Fact from '../components/Fact';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Home = () => {
  return (
    <div>
      <Spinner />
      <Navbar />
      <ModalSearch />
      <Hero />
      <FeatursSection />
      <ProductShop />
      <Featurs />
      <VesitableShop />
      <BannerSection />
      <Fact />
      <Testimonial />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default Home;
