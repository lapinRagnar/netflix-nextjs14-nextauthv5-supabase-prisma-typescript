'use client'

import Image from "next/image"
import Link from "next/link"

import Logo from '../public/netflix_logo.svg'
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";


interface linkProps {
  name: string;
  href: string;
}

const links: linkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Tv Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently Added", href: "/home/recently" },
  { name: "My List", href: "/home/user/list" },
];

const Navbar = () => {

  const pathName = usePathname()


  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between x-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href={'/home'} className="w-32">
          <Image 
            src={Logo}
            alt="Logo"
            priority
          />
        </Link>

        <ul className="hidden lg:flex gap-x-4 ml-14">
          {links.map((link, index) => (
            <div key={index}>
              { pathName === link.href ? (
                <li>
                  <Link 
                    href={link.href} 
                    className="text-white font-semibold underline decoration-2 decoration-[#e50914]"
                  >
                    {link.name}
                  </Link>
                </li>
              ): (
                <li>
                  <Link 
                    href={link.href}
                    className="text-gray-300 font-normal text-sm"  
                  >
                    {link.name}
                  </Link>
                </li>

              ) }
            </div>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-x-8">
        <Search className="w-4 h-4 cursor-pointer text-gray-300" />
        <Bell className="w-4 h-4 cursor-pointer text-gray-300" />
      </div>
    
    </div>
  )
}

export default Navbar