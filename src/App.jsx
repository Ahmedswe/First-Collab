import 'rsuite/dist/rsuite.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// Sections--------------
import Hero_Section from "./Sections/Hero"
import About_Section from './Sections/About';
import Cards from './Sections/Cards';
import Testimonials from './Sections/Testimonial';
import Services from './Sections/Services';
import About_Section_2 from './Sections/About_2';
import Footer_section from './Sections/Footer';
import ContactUs from './Sections/ContactUs';
//import Contact_section from './Sections/ContactUs';
//import ContactForm from "./components/ContactForm"
//-----------------------

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <header data-aos="zoom-out-down">
        <Hero_Section></Hero_Section>
      </header>

      <main className='scroll-smooth'>
        
        <Cards></Cards>
        <About_Section></About_Section>
        <About_Section_2></About_Section_2>
        <Services></Services>
        {/* <Contact_section></Contact_section> */}
        <ContactUs/>
        <Testimonials></Testimonials>
      </main>
      
      <footer>
        <Footer_section></Footer_section>
      </footer>
  
    </>
  )
}

export default App


// display: inline-block;
//     font-size: 56px;
//     font-weight: 700;
//     text-transform: lowercase;
//     line-height: 1em;
//     letter-spacing: -1.6px;




