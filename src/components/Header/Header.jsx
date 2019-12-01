import React, { Component } from 'react';


// import './Header.sass';

function Header() {
    return (
        <header className="header">
        <div className="header-inner">
            <nav className="header__nav">
                <a className="header__link header__link-search" href="./index.html">Search</a>
                <a className="header__link header__link-my-movies" href="./myMovies/index.html">My Movies</a>
            </nav>
            <div className="header__user">
                <span className="header__username">
                    Dima Skibin
                </span>
            </div>
        </div>
    </header>
    )
}

export default Header;