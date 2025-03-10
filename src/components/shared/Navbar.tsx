/* eslint-disable @next/next/no-img-element */
"use client"
import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => { 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const pathname = usePathname();
    const router = useRouter();

  
    const navOptions = [
      { label: "Home", path: "/" },
      { label: " Business listing", path: "/business-listing" },
      { label: "About", path: "/about" },
      { label: "Blogs", path: "/blogs" },
      { label: "Contact Us", path: "/contact" },
    ]; 
  
    // const image  = profile?.data?.profile?.startsWith("https") ? profile?.data?.profile : `${imageUrl}${profile?.data?.profile }` 
    // const userName  = profile?.data?.name 
    return (
        <div className=" text-black  bg-[#F8F8F8] w-full">
        <div className="navbar flex  py-6 container  justify-between items-center relative">
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden z-50"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <HiX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
          </button>
  
          {/* Logo */}
          <h1 className="text-3xl font-bold">Creator Briefs</h1>
          {/* Nav Menu */}
          <div
            ref={menuRef}
            className={`absolute lg:relative top-20 left-0 lg:top-0 border border-gray-400 lg:left-auto w-full lg:w-auto lg:flex flex-col lg:flex-row  lg:rounded-full lg:px-6 shadow-lg lg:shadow-none p-5 lg:p-0 space-y-4 lg:space-y-0 lg:space-x-6 transition-all duration-300 z-50 text-[16px] ${isMenuOpen ? "block bg-white" : "hidden "
              }`}
          >
            {navOptions.map((option, index) => {
              if (!option.path) {
              
                return (
                  <div
                    key={index}
                    className="nav-link flex items-center justify-center flex-col px-3 "
                  >
                    {option.label}
                  </div>
                );
              }
              
              return (
                <Link key={index} href={option.path}
  
                  className={`nav-link flex flex-col items-center justify-center px-3 py-4 rounded-lg ${pathname === option.path
                      ? "text-primary font-semibold"                
                            : "hover:text-primary "
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {option.label}
  
                </Link>
              );
            })}
          </div>
  
          {/* Right Icons */}
          <div className="nav-icons flex gap-4">  

          <div className="flex items-center gap-2" onClick={()=>router.push("/edit-profile")}> 
   <img className="lg:w-16 lg:h-16 w-12 h-12 rounded-full" src="/user2.jpg" alt="profile" /> 
   <p className="text-black text-lg lg:block hidden cursor-pointer">Jone Doe</p>
  </div> 
            {/* {  
  
  profile?.data ? <div className="flex items-center gap-2" onClick={()=>router.push("/brand-home")}> 
   <img className="lg:w-16 lg:h-16 w-12 h-12 rounded-full" src={image} alt="profile" /> 
   <p className="text-white text-lg lg:block hidden">{userName}</p>
  </div> :  <Link href="/login">
              <CmnButton className=" py-3 px-8 rounded-xl font-medium">Login</CmnButton>
            </Link>
            } */}
           
          </div>
        </div>
      </div>
    );
};

export default Navbar;