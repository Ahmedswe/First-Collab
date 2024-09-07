import { useState } from 'react';
import { Drawer } from 'rsuite';
import { IoMenuOutline } from "react-icons/io5";
import logo from "../assets/logo.png";
import { FaTelegramPlane } from "react-icons/fa";
import 'rsuite/dist/rsuite.min.css';

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <nav className="w-10/12 m-auto flex flex-row text-white font-bold text-lg px-4 py-2 items-center sm:justify-around justify-between bg-transparent">
        <div className="w-1/4 sm:w-3/12 flex justify-start bg-transparent">
          <img src={logo} alt="Logo" className="h-12" /> 
        </div>

        <ul className="hidden md:flex w-2/4 justify-center gap-x-8 items-center bg-transparent">
          <li className="hover:opacity-70">Services</li>
          <li className="hover:opacity-70">About</li>
          <li className="hover:opacity-70">FAQ</li>
        </ul>

        
        <div className="w-3/12 flex justify-end items-center bg-transparent">
          <button
            className=" flex items-center border border-white rounded-full px-2 py-2 bg-transparent transition-all duration-300 hover:bg-gradient-to-r hover:from-[#10054d] hover:to-[#45108a] hover:border-transparent"
          >
            <FaTelegramPlane className="mr-2"  size={15}/>
            <span className='hidden md:block'>Contact Us</span>
          </button>

          
          <button
            className="md:hidden p-2 bg--white flex items-center"
            onClick={handleOpen}
          >
            <IoMenuOutline size={30} />
          </button>
        </div>
      </nav>

      <Drawer open={open} onClose={handleClose} placement="right" size="50vw">
        <Drawer.Body>
          <ul className="flex flex-col gap-y-4">
            <li className="hover:opacity-70">Services</li>
            <li className="hover:opacity-70">About</li>
            <li className="hover:opacity-70">FAQ</li>
          </ul>
        </Drawer.Body>
      </Drawer>
    </>
  );
}

export default NavBar;
