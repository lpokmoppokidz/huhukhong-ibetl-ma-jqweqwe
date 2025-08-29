import React from 'react'
import './style/Header.scss'
import { FaSearch } from 'react-icons/fa'
import Button from '../Button/Button'
const Header = () => {
  const dataAuth=[
    {text:"login", class:"auth__btn auth__btn--login", id:"loginBtn"},
    {text:"signup", class:"auth__btn auth__btn--signup", id:"signupBtn"}
  ]
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
          <Button name="search__btn" id="searchBtn" text="Search" />
        </div>
      </div>
      <div className="header__auth">
        {dataAuth.map((item, index) => (
        <a className={item.class} id={item.id} key={item.id}>
          {item.text}
        </a>
))}
      </div>
    </div>
  )
}

export default Header