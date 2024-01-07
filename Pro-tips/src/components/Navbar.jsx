import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar' style={{backgroundColor:"black" ,display:"flex",alignItems:"center",justifyContent:"space-between",height:"60px"}}>
        <Link style={{textDecoration:"none",color:"white"}} to="/"><h2>Kalvium ❤️</h2></Link>
     
     <div style={{display:"flex",justifyContent:"space-between",width:"150px"}}>
        <Link style={{textDecoration:"none",color:"white"}} to="contact"><p>Contact</p></Link>
        <Link style={{textDecoration:"none",color:"white"}} to="form"><p>Formpage</p></Link>
     </div>
    </div>
  )
}

export default Navbar