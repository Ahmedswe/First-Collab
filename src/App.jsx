import 'rsuite/dist/rsuite.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Hero_Section from "./Sections/Hero"
import About_Section from './Sections/About';
import Card from './components/Card_1';
import Testimonials from './Sections/Testimonial';
import Services from './Sections/Services';
import About_Section_2 from './Sections/About_2';
import Footer_section from './Sections/Footer';
import Contact_section from './Sections/Contact';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <header data-aos="zoom-out-down">
        <Hero_Section></Hero_Section>
      </header>

      <main>
        <div className='w-11/12 mx-auto flex flex-wrap items-center justify-around mt-8'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>

        <About_Section></About_Section>
        <About_Section_2></About_Section_2>
        <Services></Services>
        <Contact_section></Contact_section>
        <Testimonials></Testimonials>
        <Footer_section></Footer_section>
        
        
      </main>

      <footer>

      </footer>
  
    </>
  )
}

export default App














