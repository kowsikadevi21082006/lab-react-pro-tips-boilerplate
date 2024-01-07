import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display: "flex",justifyContent:"space-between",background:'white',color:'black',padding:"20px"}}>
        <Link to={"/"} style={{textDecoration:'none',color:'black'}}>
            <h1 style={{cursor:'pointer'}}>KALVIUM<img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" /></h1>
        </Link>
        <div style={{display:'flex',gap:"40px"}}>
            <Link to={"/contact"} style={{textDecoration:'none',color:'black'}}>
                <h1 style={{cursor:'pointer'}}>CONTACT</h1>
            </Link>
            <Link to={"/registration"} style={{textDecoration:'none',color:'black'}}>
                <h1 style={{cursor:'pointer'}}>REGISTRATION</h1>
            </Link>
        </div>
    </div>
  )
}

export default Navbar