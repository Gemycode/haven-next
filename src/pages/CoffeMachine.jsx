'use client'

import React, { useState } from 'react'
const coffeType =
    [
        {
            "title": "Turkish Coffe",
            "desc": "the best type for your taste",
            img: "https://media.istockphoto.com/id/1349239413/photo/shot-of-coffee-beans-and-a-cup-of-black-coffee-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=ZFThzn27DAj2KeVlLdt3_E6RJZ2sbw2g4sDyO7mYvqk="
        },
        {
            'title': "Turkish Coffe",
            'desc': "the best type for your taste",
            img: "https://media.istockphoto.com/id/1324007866/photo/coffee-beans-with-wooden-scoop.jpg?s=612x612&w=0&k=20&c=E7ssqVrtwf53EVhTAtlUT4-v0IXFZWH4OV330Ebmv-0="
        },
        {
            'title': "Turkish Coffe",
            'desc': "the best type for your taste",
            img: "https://media.istockphoto.com/id/1271386167/photo/coffee.jpg?s=612x612&w=0&k=20&c=5gWShBS-lSa_ycm1_olcm9wric7dKYNMMm8Q780-A74="

        },
        {
            'title': "Turkish Coffe",
            'desc': "the best type for your taste",
            img: "https://media.istockphoto.com/id/1609330991/photo/steaming-coffee-beans-on-a-black-background.jpg?s=612x612&w=0&k=20&c=9l2o9Fmb9VRgOq4XsdeRDUV86IgtOOWJIyYb_5yUgf8="
        },
        {
            'title': "Turkish Coffe",
            'desc': "the best type for your taste",
            img: "https://media.istockphoto.com/id/468607708/photo/fair-trade-farming-is-best-for-coffee-bean-produce.jpg?s=612x612&w=0&k=20&c=sf7xRjUTiLWVdyP3lUHAgtkNa6ckqm-_cC89MG1PtGs="
        },
        {
            'title': "Turkish Coffe",
            'desc': "the best type for your taste",
            img: "https://media.istockphoto.com/id/533840078/photo/coffee-ground-in-portafilter-for-espresso.jpg?s=612x612&w=0&k=20&c=FRIHEE1EpdKJu7DpYsqrJUWDjvNceF6w6s7-NwtuIhg="
        },

        {
            'title': "Turkish Coffe",
            'desc': "the best type for your taste",
            img: "https://media.istockphoto.com/id/1328838202/photo/arabica-and-robusta-coffee-bean-on-splash-coffee.jpg?s=612x612&w=0&k=20&c=mwo9S3tBzPe2if7FWQZFIrfYP_MJuzl1PNaU7J9XCkg="
        },

        {
            'title': "Turkish Coffe",
            'desc': "the best type for your taste",
            img: "https://media.istockphoto.com/id/157528129/photo/mug-on-plate-filled-with-coffee-surrounded-by-coffee-beans.jpg?s=612x612&w=0&k=20&c=W_za-myO9QP_dimiJeZXsR4G2GHjrdo0RTyO3yVhopQ="
        },

    ]


function CoffeMachine() {
    const [types, setTypes] = useState([...coffeType])

    return (



        <div className='mt-5'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-amber-800 text-3xl font-bold text-center mb-12">Coffee Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        types && types.map((i, index) => {
                            return (

                                <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                                    <img src={i.img}
                                        width={400}
                                        height={300}
                                        className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <h3 className="text-amber-800 text-xl font-semibold mb-2">{i.title}</h3>
                                        <p className="text-amber-950 mb-4">{i.desc}</p>
                                        <a href="#" className=" text-amber-800 text-brown-600 font-semibold hover:text-brown-700">Learn More</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default CoffeMachine