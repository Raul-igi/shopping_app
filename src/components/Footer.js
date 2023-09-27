import React from 'react'
import{ImGithub} from "react-icons/im";
import{
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
}from "react-icons/fa";

import{MdLocationOn} from "react-icons/md";
import{BsPersonFill,BsPaypal} from "react-icons/bs";





import {logoLight,paymentLogo} from "../assets/index"


const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      
      <div className="max-w-sreen-xl mx-auto grid grid-cols-4">
      <div className="flex flex-col gap-7">
      <img style={{marginLeft:200}} src={logoLight} alt="logoLight" className='w-28' />
     <p style={{marginLeft:200}} className="text-white text-sm tracking-wide font-bold">nsoroslash.com</p>
      <img style={{marginLeft:200}} src={paymentLogo} alt="paymentLogo" className='w-28' />
      <div style={{marginLeft:200}} className="flex gap-5 text-lg text-gray-500">
        <ImGithub className="hover:text-white duration-300 cursor-pointer"/>
        <FaFacebookF className="hover:text-white duration-300 cursor-pointer"/>
        <FaTwitter className="hover:text-white duration-300 cursor-pointer"/>
        <FaInstagram className="hover:text-white duration-300 cursor-pointer"/>
        <FaYoutube className="hover:text-white duration-300 cursor-pointer"/>
        <FaHome className="hover:text-white duration-300 cursor-pointer"/>
      </div>
      </div>


      <div>
      <h2 style={{marginLeft:200}} className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
      <div className="text-base flex flex-col gap-2">
      <p style={{marginLeft:200}}>Nike is headquartered in Beaverton</p>
      <p style={{marginLeft:200}}>One Bowerman Drive Kn 3rd</p> 
      <p style={{marginLeft:200}}>E.mail:nsoroslash@gmail.com</p>
      <p style={{marginLeft:200}}>Website:nsoroslash@gmail.com</p>
      <p style={{marginLeft:200}}>Mobile:+250784694634</p>
      </div>
      </div>

      
      <div >
      <h2 style={{marginLeft:200}} className="text-2xl font-semibold text-white mb-4">Profile</h2>
      <div className="flex flex-col gap-2 text-base">
      <p  style={{marginLeft:200}} className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span><BsPersonFill/></span>My account</p>
      <p  style={{marginLeft:200}} className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span><BsPaypal/></span>Checkout</p>
      <p  style={{marginLeft:200}} className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span><FaHome/></span>Order tracking</p>
      <p  style={{marginLeft:200}} className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer"><span><MdLocationOn/></span>Help & Support</p>
      </div>
      </div>


      <div style={{width:400}} className="flex flex-col justify-center">
        <input 
        className="bg-transparent border px-4 py-2 text-sm"
        placeholder="E-mail"
        type="text"/>
        <button className="text-sm border text-white border-t-0 hover:bg-gray-900 ">Subscribe</button>
      </div>
      

      </div>
    </div>
  )
}

export default Footer
