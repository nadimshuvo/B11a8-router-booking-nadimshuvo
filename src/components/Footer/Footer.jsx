import React from 'react'
import { NavLink } from 'react-router'
import logoFooter from "../../assets/logoFooter.png"
import footerDivider from "../../assets/footer-divider.png"
import facebookIcon from "../../assets/fb.png"
import xIcon from "../../assets/x.png"
import linkedInIcon from "../../assets/in.png"
import youTubeIcon from "../../assets/youTube.png"



const Footer = () => {
  return (
    <footer className='bg-[#0F0F0F] py-[100px]'>
      <div className='max-w-[1300px] mx-auto px-2.5 flex flex-col items-center justify-between gap-8'>
        <img src={logoFooter} alt="" />
        <nav className="flex gap-12 text-[18px] font-medium text-[#575757]">
          <NavLink to="/" className="hover:text-[#0EA106]">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-[#0EA106]">
            My-Bookings
          </NavLink>
          <NavLink to="/services" className="hover:text-[#0EA106]">
            Blogs
          </NavLink>
          <NavLink to="/contact" className="hover:text-[#0EA106]">
            Contact Us
          </NavLink>
        </nav>

        <div className=''>
          <img src={footerDivider} alt="divider" />
        </div>

        <div className='flex gap-6'>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={xIcon} alt="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={linkedInIcon} alt="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src={youTubeIcon} alt="" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer