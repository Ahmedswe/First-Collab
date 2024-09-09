import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedin, FaFacebook, FaSquareInstagram } from "react-icons/fa6";

function Footer_section() {
  return (
    <>
      <section className="flex flex-wrap justify-center md:justify-between px-8 text-black mt-20">
        {/* About Section */}
        <div className="w-full md:w-1/4 mb-3 flex flex-col items-center md:items-start">
          <h1 className="text-lg font-bold mb-3">About</h1>
          <ul className="flex flex-col items-center md:items-start">
            <li className="hover:text-purple-500 cursor-pointer mb-2">Testimonial</li>
            <li className="hover:text-purple-500 cursor-pointer mb-2">Profile</li>
            <li className="hover:text-purple-500 cursor-pointer mb-2">Partners</li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="w-full md:w-1/4 mb-3 flex flex-col items-center md:items-start">
          <h1 className="text-lg font-bold mb-3">Services</h1>
          <ul className="flex flex-col items-center md:items-start">
            <li className="hover:text-purple-500 cursor-pointer mb-2">Web Development</li>
            <li className="hover:text-purple-500 cursor-pointer mb-2">Copy Writing</li>
            <li className="hover:text-purple-500 cursor-pointer mb-2">UI/UX Design</li>
            <li className="hover:text-purple-500 cursor-pointer mb-2">Social Media Marketing</li>
            <li className="hover:text-purple-500 cursor-pointer mb-2">SEO Ranking</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/4 mb-3 flex flex-col items-center md:items-start">
          <h1 className="text-lg font-bold mb-3">Contact</h1>
          <ul className="flex flex-col items-center md:items-start">
            <li className="mb-2">
              <a href="mailto:ab2034941@gmail.com" className="hover:text-purple-500">
                ab2034941@gmail.com
              </a>
            </li>
            <li className="hover:text-purple-500">03034606113</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="w-full md:w-1/4 mb-3 flex flex-col items-center md:items-start mt-8 md:mt-0">
          <h1 className="text-lg font-bold mb-3">FOLLOW US</h1>
          <div className="flex space-x-4">
              <TiSocialTwitter size={30} />
              <FaFacebook size={30} />
              <FaSquareInstagram size={30} />
              <FaLinkedin size={30} />
            
          </div>
        </div>
      </section>

      {/* Footer Text */}
      <div className="text-center mt-8">
        <h4>© 2024 Pen-and-byte. All rights reserved.</h4>
      </div>
    </>
  );
}

export default Footer_section;
