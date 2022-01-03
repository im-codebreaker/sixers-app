import React from 'react';
import './Header.scss';
import logo from '../assets/medias/logo_sixers.svg';

export default function Header() {
  return (
    <header className='App-header'>
      <nav className='navbar' role='navigation'>
        <input id='navbarInput' className='navbar-input' type='checkbox' />

        <img
          src={logo}
          className='logo'
          width='50px'
          height='50px '
          alt='Logo officile des Philadelphia 76ers'
        />

        <div className='navbar-burger'>
          <label htmlFor='navbarInput'>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </label>
        </div>

        <ul className='navbar-menu'>
          <li className='navbar-menu_item'>
            <a className='navbar-menu_item-links' href='/'>
              Link 1
            </a>
          </li>
          <li className='navbar-menu_item'>
            <a className='navbar-menu_item-links' href='/'>
              Link 2
            </a>
          </li>
          <li className='navbar-menu_item'>
            <a className='navbar-menu_item-links' href='/'>
              Link 3
            </a>
          </li>
          <li className='navbar-menu_item'>
            <a className='navbar-menu_item-links' href='/'>
              Link 4
            </a>
          </li>
          <li className='navbar-menu_item'>
            <a className='navbar-menu_item-links' href='/'>
              Link 5
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
