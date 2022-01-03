import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className='App-footer'>
      <div className='footer-wrapper container'>
        <p className='footer-copyright'>
          Copyright © 2021 - Made with <span className='heart'>♥</span> by
          imcodebreaker
        </p>

        <ul className='social-networks'>
          <li>
            <a
              href='https://www.nba.com/sixers/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='sixers'></i>
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/Sixers'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='twitter'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/Sixers/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='instagram'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.facebook.com/Sixers'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='facebook'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/user/philadelphia76ers'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='youtube'></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
