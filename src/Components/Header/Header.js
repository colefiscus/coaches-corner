import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <h1>Coach's Corner</h1>
      <section className='header-buttons'>
        <button>
          Profile
        </button>
        <button>
          Logout
        </button>
      </section>
    </header>
  )
}

export default Header;