'use client'

import React from 'react';
import { X } from 'lucide-react'

export default function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-20 w-64 bg-amber-500 text-black transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4">
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
        <nav className="mt-10">
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-brown-700">Home</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-brown-700">Coffee Products</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-brown-700">Coffee Equipment</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-brown-700">About Us</a>
          <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-brown-700">Contact Us</a>
        </nav>
      </div>
    </div>
  )
}