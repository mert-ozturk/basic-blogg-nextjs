'use client'
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
 
import Image from "next/image";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
 

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
          <Link href='/'> <Image className="h-10 w-10 mr-2" src={logo} alt="Logo" to='/' />
          </Link> 
          <Link href='/'><span className="text-xl tracking-tight">VirtualR</span></Link> 
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
          <Nav 
          containerStyles='hidden xl:flex gap-x-8 items-center'
          linkStyles='relative hover:text-primary transition-all'
          underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
          
          />
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
             <MobileNav />
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;