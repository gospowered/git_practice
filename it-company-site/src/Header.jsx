import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <h1>IT Company</h1>
      <nav>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
