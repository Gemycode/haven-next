// 'use client'
import React from 'react'
import about from '../../public/assets/images/wallpaperflare.com_wallpaper (7).jpg'
import Image from 'next/image'
function aboutUs() {
    return (
            <section className="py-16 bg-brown-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <Image
                                src={about}
                                alt="About Us"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-md"
                            />

                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <h2 className="text-amber-800 text-3xl font-bold mb-6">About Coffee Haven</h2>
                            <p className="text-gray-700 mb-6">
                                At Coffee Haven, we're passionate about bringing you the finest coffee from around the world. Our expert
                                roasters and baristas work tirelessly to ensure every cup is a perfect blend of flavor and aroma.
                            </p>
                            <a href="#" className="bg-brown-600 text-amber-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-brown-700 transition duration-300">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default aboutUs;