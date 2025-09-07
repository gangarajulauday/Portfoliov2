"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'about',
    path: '/about'
  },
  {
    name: 'services',
    path: '/services'
  },
  {
    name: 'work',
    path: '/work'
  },
  {
    name: 'contact',
    path: '/contact'
  }
]

const NavLinks = ({containerStyles}) => {
  const pathname = usePathname();
  return (
    <ul className={containerStyles}>
      {links.map((link, index) => {
        const isActive = pathname === link.path;
        return (
          <Link href={link.path} key={index} className={`text-lg uppercase px-5 py-2 rounded-full transition-colors
              ${isActive 
                ? "bg-accent text-white shadow-md w-full" 
                : "text-white hover:bg-white/10"}`}>
            <span className='relative z-10'>
              {link.name}
            </span>
          </Link>
        );
      })}
    </ul>
  )
}

export default NavLinks