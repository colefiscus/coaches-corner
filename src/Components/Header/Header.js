import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header class='header'>
      <h1>Coach's Corner</h1>
      <section class='header-buttons'>
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