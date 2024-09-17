import { useState } from 'react';
import { Drawer } from 'rsuite';
import { IoMenuOutline } from "react-icons/io5";
import Button from './Button';
import logo from "../assets/logo.png";
import { FaTelegramPlane } from "react-icons/fa";

import 'rsuite/dist/rsuite.min.css';

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <nav data-aos="zoom-out" data-aos-delay="300" className=" w-10/12 mx-auto mb-4 flex flex-row text-white font-bold text-lg px-4 py-2 items-center sm:justify-around justify-between bg-transparent">
        <div className="w-1/4 sm:w-3/12 flex justify-start bg-transparent">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        <ul className="hidden md:flex w-2/4 justify-center gap-x-8 items-center bg-transparent">
          <li className="hover:opacity-70 hover:cursor-pointer">
            <a className='hover:no-underline hover:text-purple-400' onClick={(e) => {
              e.preventDefault(); // Prevent default anchor click behavior
              document.querySelector('#services').scrollIntoView({
                behavior: 'smooth'
              });
            }}>Services</a>
          </li>
          <li className="hover:opacity-70 hover:cursor-pointer">
            <a className='hover:no-underline hover:text-purple-400' onClick={(e) => {
    e.preventDefault(); // Prevent default anchor click behavior
    document.querySelector('#about').scrollIntoView({
      behavior: 'smooth'
    });
  }}>About</a>
          </li>
          <li className="hover:opacity-70 hover:cursor-pointer">
            <a className='hover:no-underline hover:text-purple-400' onClick={(e) => {
              e.preventDefault(); // Prevent default anchor click behavior
              document.querySelector('#testimonials').scrollIntoView({
                behavior: 'smooth'
              });
            }}>Testimonials</a>
          </li>
        </ul>

        <div className="w-3/12 flex justify-end items-center bg-transparent">
          <Button icon={<FaTelegramPlane className="mr-2" size={15} />} text={<span className='hidden md:block'>Contact Us</span>}></Button>

          <button  className="md:hidden p-2 bg--white flex items-center" onClick={handleOpen}>
            <IoMenuOutline size={30} />
          </button>
        </div>
      </nav>

      <Drawer  open={open} onClose={handleClose} placement="right" size="50vw">
        <Drawer.Body style={{ backgroundColor: 'rgba(0, 0, 100,.34 )' }}

        >
          <ul className="flex flex-col gap-y-4">
            <li className="hover:opacity-70 hover:cursor-pointer"><a href="#services">Services</a></li>
            <li className="hover:opacity-70 hover:cursor-pointer"><a href="#about">About</a></li>
            <li className="hover:opacity-70 hover:cursor-pointer"><a href="#testimonials">Testimonials</a></li>
          </ul>
        </Drawer.Body>
      </Drawer>
    </>
  );
}

export default NavBar;
