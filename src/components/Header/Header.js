import React from 'react'
import './Header.scss'
import { FaSearch } from 'react-icons/fa'
const Header = () => {
  return (
    <div className="header">
      <a href="#" className="header__logo">
        <div className="header__logo-icon">L</div>
        <span className="header__logo-text">Logo</span>
      </a>
      <div className="header__search">
        <div className="search__wrapper">
          <input
            type="text"
            className="search__input"
            placeholder="Search anything..."
            id="searchInput"
          />
          
          <FaSearch className='search__icon'/>
          <button className="search__btn" id="searchBtn">Search</button>
        </div>
      </div>
      <div className="header__auth">
        <a href="#" className="auth__btn auth__btn--login" id="loginBtn">
          Login
        </a>
        <a href="#" className="auth__btn auth__btn--signup" id="signupBtn">
          Sign Up
        </a>
      </div>
    </div>
  )
}

export default Header