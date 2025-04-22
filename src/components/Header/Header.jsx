import React from "react";
import lawBDLogo from "../../assets/logo-main.svg";
import manuIcon from "../../assets/menu-icon.svg";
import { NavLink } from "react-router";

const Header = () => {
  const contactButton = (
    <button className="bg-[#0EA106] text-white py-4 px-8 rounded-full hover:bg-[#2563EB] transition duration-300 ease-in-out">
      Contact Now
    </button>
  );

  return (
    <header className="h-[104px] bg-white ">
      <div className="max-w-[1300px] mx-auto px-2.5 flex justify-between items-center h-full">
        <span>
          <img src={lawBDLogo} alt="main-logo" />
        </span>

        <nav className="hidden lg:flex gap-12 text-[18px] font-medium text-[#575757]">
          <NavLink to="/" className="hover:text-[#0EA106]">
            Home
          </NavLink>
          <NavLink to="/my-bookings" className="hover:text-[#0EA106]">
            My-Bookings
          </NavLink>
          <NavLink to="/blogs" className="hover:text-[#0EA106]">
            Blogs
          </NavLink>
          <NavLink to="/contact" className="hover:text-[#0EA106]">
            Contact Us
          </NavLink>
        </nav>

        <div className="hidden lg:block">{contactButton}</div>

        <span className="mobile-menu block lg:hidden">
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="">
              <img src={manuIcon} alt="menu" className="" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-black text-[18px] font-medium text-white flex gap-5 rounded-box z-1 w-56 p-5 shadow-sm"
            >
              <NavLink to="/" className="hover:text-[#0EA106]">
                Home
              </NavLink>
              <NavLink to="/my-bookings" className="hover:text-[#0EA106]">
                My-Bookings
              </NavLink>
              <NavLink to="/services" className="hover:text-[#0EA106]">
                Blogs
              </NavLink>
              <NavLink to="/contact" className="hover:text-[#0EA106]">
                Contact Us
              </NavLink>
              <div className="block lg:hidden mt-2.5 w-full">{contactButton}</div>
            </ul>
          </div>
        </span>
      </div>
    </header>
  );
};

export default Header;
