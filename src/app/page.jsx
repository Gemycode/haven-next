
// 'use client'
import React from 'react'
import Coff from '../pages/CoffeProducts'
import About from '../pages/aboutUs'
import Layout from '../Layout'
import Image from 'next/image'
import location from '../../public/assets/images/pngtree-world-map-filled-with-coffee-beans-coffee-beans-worldwide-flavor-photo-image_19380444.jpg'

import header from '../../public/assets/images/wallpaperflare.com_wallpaper (6).jpg'
// import about from '../../public/assets/images/wallpaperflare.com_wallpaper (7).jpg'
// import Contact from '../pages/contact'
import Machine from '../pages/CoffeMachine'

// import type { Metadata } from 'next'
 
// export const metadata: Metadata = {
//   title: 'Next.js',
// }
export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-black">
        <Image
          src={header}
          alt="Coffee beans"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 text-center">
          <marquee direction="left" className="text-5xl rounded-3xl font-bold mb-4 bg-gradient-to-tr  ">Welcome to Coffee Haven</marquee>
          <marquee direction="right" className="text-xl mb-8">Discover the perfect brew for your soul</marquee>
          {/* <h1 className="text-5xl font-bold mb-4">Welcome to Coffee Haven</h1> */}
          {/* <p className="text-xl mb-8">Discover the perfect brew for your soul</p> */}
          <a href="#" className="hover:opacity-75 bg-amber-500 text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-brown-700 transition duration-300">
            Shop Now
          </a>
        </div>
      </section>

      {/* Coffee Products Section */}

      <section>
        <Coff />
      </section>

      {/* Coffee Equipment Section */}
      <section className="py-16 bg-gray-100">
        <Machine />
      </section>

      {/* About Us Section */}
      <section>
        <About />
      </section>


      {/* Contact Us Section */}
      <section className="py-16 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-amber-800 text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-amber-950 text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-amber-800 mb-4">Have questions or feedback? We'd love to hear from you!</p>
              <ul className="space-y-2">
                <li className="text-amber-950 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  abdallagamalph@gmail.com
                </li>
                <li className="text-amber-950 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brown-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  +1 (555) 123-45
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-amber-950 text-xl font-semibold mb-4">Visit Our Store</h3>
              <p className="text-amber-800 mb-4">123 Coffee Street, Brewville, CA 90210</p>
              <Image
                src={location}
                alt="Store Location"
                width={400}
                height={200}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold mb-4 text-amber-900"> Send Message For Us </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="px-5 text-amber-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring-brown-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email </label>
              <input type="email" mailto="abdallagamalpg@gmail.com" id="email" name="email" className="px-5 text-amber-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring-brown-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Send Message</label>
              <textarea id="message" name="message" rows={4} className="p-5 text-amber-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring-brown-500"></textarea>
            </div>
            <div>
              <button type="submit" className="bg-amber-500 inline-flex justify-center  py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black  hover:bg-brown-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}