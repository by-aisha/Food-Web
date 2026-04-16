// import React, { useState } from 'react';
// import './Navbar.css';
// import { assets } from '../../assets/assets';
// import { Link } from 'react-router-dom';

// const Navbar = () => {

//   const [menu, setMenu] = useState("Home");
//    return (
//     <div className='navbar'>
//       <img src={assets.logo} alt="" className="logo" />
//       <ul className="navbar-menu">
//         <Link to="/" onClick={()=>setMenu("Home")} className={menu==="home"?"active":""}>Home</Link>
//         <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="menu"?"active":""}>Menu</a>
//         <a href="#app-download" onClick={()=>setMenu("Mobile-App")} className={menu==="mobile-app"?"active":""}>Mobile-App</a>
//         <a href='#footer' onClick={()=>setMenu("Contact Us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
//       </ul>
//       <div className="navbar-right">
//         <img src={assets.search_icon} alt=''></img>
//         <div className="navbar-search-icon">
//           <img src={assets.basket_icon} alt=''></img>
//           <div className="dot"></div>
//         </div>
//         <button>Sign In</button>
//       </div>
//     </div>
//   )
// }

// export default Navbar
import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("Home");

  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='navbar'>
      <Link to='/'><h1 className="navbar-title">OrderOnTheGo</h1></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("Home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href="#app-download" onClick={() => setMenu("Mobile-App")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
        <a href='#footer' onClick={() => setMenu("Contact Us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt='search' />
        <div className="navbar-search-icon">
          <Link to='/cart' > <img src={assets.basket_icon} alt='basket' /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar