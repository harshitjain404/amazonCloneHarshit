import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {


  const [{basket , user},  dispatch] = useStateValue();
// console.log(user);

const handleAuthentication = ()=>{
  if (user) {
    auth.signOut()
  }
}
return (
    <nav className="header">
      <Link to="/">

        <img src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          className="header__logo "
          alt="" />
      </Link>
      <div className="header__search">
        <input type=" text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon " ></SearchIcon>
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionOne">Hello Guest</span>
          <span className="header__optionTwo">{user ? 'Sign Out' : ' Sign In'} </span>
        </div>
         </Link>

        <div className="header__option">
          <span className="header__optionOne">Returns</span>
          <span className="header__optionTwo">& Orders</span></div>
        <div className="header__option">
          <span className="header__optionOne">Your</span>
          <span className="header__optionTwo">Prime</span></div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />


<span className="header__optionlineTwo header__basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
  {/* <h1>{basket.lenght}</h1> */}
    </nav>
  )
}

export default Header
