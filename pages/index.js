import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar.jsx';

import Footer from '../components/HomePage/Footer.jsx';
import Slider from '../components/HomePage/Slider.jsx';
import Createbundle from '../components/HomePage/Createbundle.jsx';
import Bundlebenefits from '../components/HomePage/Bundlebenefits.jsx';
import Brands from '../components/HomePage/Brands.jsx';
import WhyChooseSection from '../components/HomePage/WhyChooseSection.jsx';
import Contact from '../components/HomePage/Contact.jsx';





export default function Home() {
  return (
    <div>

      <Head>
        <title>Boxoniq App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Slider />
      <Createbundle />

      <Bundlebenefits />
      <Brands />
      <WhyChooseSection />
      <Contact />


      <Footer />







    </div>
  )
}
