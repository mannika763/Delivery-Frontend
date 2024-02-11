import React from 'react';
import { Link } from "react-router-dom";
import { MdLocalOffer } from "react-icons/md";



export default function NavBar() {
  return (
    <>


   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <h5 className='text-light' > <MdLocalOffer className='text-warning'/> &nbsp;&nbsp;Free Home Deliverey</h5>
    <div className="" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item"><Link className="nav-link fs-4 text-light" to="/" >Home</Link></li>
        <li className="nav-item"><Link className="nav-link fs-4 text-light" to="/AboutUs">About Us</Link></li>
        {/* <li className="nav-item"><Link className="nav-link fs-4 text-light" to="/TandC">Contact Us</Link></li> */}
      </ul>
      <div></div> 
    </div>
  
  </div>
 
</nav>
    </>
  )
}
