'use client'
import { Menu } from 'lucide-react'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar({ toggleSidebar }: { toggleSidebar: () => void }) {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 bg-amber-500 rounded-xl w-auto text-black z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
            <span className="ml-2 text-xl font-bold">Coffee Haven</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a className=" px-3 py-2 rounded-md text-sm font-medium hover:bg-brown-700" href='/'>Home</a>
              {/* <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                Home
              </Link> */}
              <a href="/CoffeProducts" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-brown-700">Products</a>
              {/* <Link
                href="/CoffeMachine">
              Equipment
              </Link> */}
              <a href="/CoffeMachine" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-brown-700">Equipment</a>
              <a href="/aboutUs" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-brown-700">About</a>
              {/* <Link
                className={`link ${pathname === '../aboutUs.jsx' ? 'active' : ''}`}
                href="/aboutUs"
              >
                
                About
              </Link> */}
              <a href="/" className="bg-white px-3 py-2 rounded-full text-sm font-medium hover:bg-brown-700">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
/*<nav className="fixed top-0 left-0 right-0 bg-brown-600 text-white z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
            <Link href="/" className="ml-2 text-xl font-bold">
              Coffee Haven
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-brown-700">Home</Link>
              <Link href="/products" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-brown-700">Products</Link>
              <Link href="/equipment" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-brown-700">Equipment</Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-brown-700">About</Link>
              <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-brown-700">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav> */