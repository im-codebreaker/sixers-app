import React from 'react';
import './Header.scss';
import logo from '../assets/medias/logo_sixers.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='App-header'>
      <nav className='navbar' role='navigation'>
        <input id='navbarInput' className='navbar-input' type='checkbox' />
        <Link to='/'>
          <img
            src={logo}
            className='logo'
            width='50px'
            height='50px '
            alt='Logo officile des Philadelphia 76ers'
          />
        </Link>

        <div className='navbar-burger'>
          <label htmlFor='navbarInput'>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </label>
        </div>

        <ul className='navbar-menu'>
          <li className='navbar-menu_item'>
            <Link to='/history' className='navbar-menu_item-links'>
              History
            </Link>
          </li>
          <li className='navbar-menu_item'>
            <Link to='/roster' className='navbar-menu_item-links'>
              Roster
            </Link>
          </li>
          <li className='navbar-menu_item'>
            <Link to='/schedule' className='navbar-menu_item-links'>
              Schedule
            </Link>
          </li>
          <li className='navbar-menu_item'>
            <Link to='/stats' className='navbar-menu_item-links'>
              Stats
            </Link>
          </li>
          <li className='navbar-menu_item'>
            <Link to='/hall-of-fame' className='navbar-menu_item-links'>
              Hall of Fame
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
