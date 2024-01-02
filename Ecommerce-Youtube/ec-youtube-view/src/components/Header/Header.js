import React, { useState } from 'react';
import './Header.css'; // Importando o CSS para o Header

function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header className="header">
            <div className="logo">
                <h1>E-commerce Youtube</h1>
            </div>
            <button className="nav-toggle" onClick={toggleNav} aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button>
            <nav className={`navigation ${isNavVisible ? 'nav-visible' : ''}`}>
                <a href="/" className="nav-link">Home</a>
                <a href="/produtos" className="nav-link">Produtos</a>
                <a href="/sobre" className="nav-link">Sobre</a>
                <a href="/contato" className="nav-link">Contato</a>
            </nav>
        </header>
    );
}

export default Header;