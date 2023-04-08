import React from 'react'
import footer from '../../assets/images/footer.png'
export default function Footer() {
  return (
    
    <div className=' mt-10 mb-3' style={{
       background:`url(${footer})`,
       backgroundSize:'cover'
    }}>
 <footer className="footer p-10 text-neutral-content" >
    <div>
      <span className="footer-title text-[#000]">SERVICES</span> 
      <a className="link link-hover text-[#000]">Emergency Checkup</a>
      <a className="link link-hover text-[#000]">Monthly Checkup</a>
      <a className="link link-hover text-[#000]">Weekly Checkup</a>
      <a className="link link-hover text-[#000]">Deep Checkup</a>
    </div> 
    <div>
      <span className="footer-title text-[#000]">ORAL HEALTH</span> 
      <a className="link link-hover text-[#000]">Fluoride Treatment</a>
      <a className="link link-hover text-[#000]">Cavity Filling</a>
      <a className="link link-hover text-bold text-[#000]">Teath Whitening</a>

    </div> 
    <div>
      <span className="footer-title text-[#000]">OUR ADDRESS</span> 
      <a className="link link-hover text-[#000]">New York - 101010 Hudson</a>
    </div>
  </footer>
    </div>
   
  )
}
