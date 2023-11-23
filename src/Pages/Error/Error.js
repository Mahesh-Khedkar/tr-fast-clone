import React from 'react'
import { Link } from 'react-router-dom'
import "../Error/Error.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
const Error = () => {
  return (
    <div>
    <Navbar/>
    <div className="error-container">
    <div className='error-img'>
        <h3>oh Nuts!</h3>
      <img src="https://www.trfastenings.com/Content/Images/nuts.png" alt="" />
    </div>
    <div className="error-mgs">
        <p>Sorry the page you are looking for cannot be found.</p>
        <p>The page has either been moved or deleted.</p>
        <p>Visit our <Link to={"/"}>home page</Link></p>
        <p>Or try searching instead.</p>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Error
