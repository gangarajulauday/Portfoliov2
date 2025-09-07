import React from 'react'
import NavLinks from './NavLinks'
import Logo from './Logo'
import { MdFileDownload } from "react-icons/md";


const MainNav = () => {
  return (
    <nav className="w-full pt-16">
      <div className="flex flex-col h-full items-center justify-between">
        <Logo />
        <NavLinks containerStyles="flex flex-col gap-6" />
        <a className="btn btn-lg btn-tertiary mb-16" target="_blank" href="/uday_gangarajula.pdf">
          <span>Download CV</span>
          <MdFileDownload className="text-xl" />
        </a>
      </div>
    </nav>
  );
}

export default MainNav