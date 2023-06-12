import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bold text-accent">
        Lucas Sola
      </a>
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#a-propos">A propos</a>
          </li>
          <li>
            <a href="/#realisations">Projets</a>
          </li>
          <li>
            <a href="/#competences">Compétences</a>
          </li>
          <li>
            <a href="#resume -link" target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )


}

export default Header;
