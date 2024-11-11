'use client'
import React, { useState } from 'react'

const product =
  [
    {
      "title": "Premium Coffee Blend 1",
      "desc": "A rich and aromatic blend perfect for your morning routine.",
      img: "https://media.istockphoto.com/id/1302271960/photo/modern-espresso-coffee-machine-with-a-cup-in-interior-of-kitchen-closeup.jpg?s=2048x2048&w=is&k=20&c=g7kRqgufQJCaTo_OQ7si2iSlM952y-XKV1oozfpaXUM="
    },
    {
      "title": "Premium Coffee Blend 2",
      "desc": "A rich and aromatic blend perfect for your morning routine.",
      img: "https://images.pexels.com/photos/11341944/pexels-photo-11341944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    {
      "title": "Premium Coffee Blend 3",
      "desc": "A rich and aromatic blend perfect for your morning routine.",
      img: "https://media.istockphoto.com/id/1426212349/photo/woman-preparing-fresh-aromatic-coffee-with-modern-machine-in-office-closeup.jpg?s=2048x2048&w=is&k=20&c=2iwfjxaSh4Wy7DwEpx9y0cRtjcsf78DFR-fukJj3eLY="

    },
    {
      "title": "Premium Coffee Blend 4",
      "desc": "A rich and aromatic blend perfect for your morning routine.",
      img: 'https://images.pexels.com/photos/11069889/pexels-photo-11069889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

    },
    {
      "title": "Premium Coffee Blend 5",
      "desc": "A rich and aromatic blend perfect for your morning routine.",
      img: 'https://media.istockphoto.com/id/2156868886/photo/modern-automatic-coffee-machine-makes-latte-in-double-wall-glass-on-a-table.jpg?s=2048x2048&w=is&k=20&c=WRGFI58fMI3eN-BjZaU347ZFRBkopMarlwigBhOa28M='

    },
    {
      "title": "Premium Coffee Blend 6",
      "desc": "A rich and aromatic blend perfect for your morning routine.",
      img: 'https://media.istockphoto.com/id/1253389212/photo/coffee-machine-makes-cappuccino-coffee-in-a-transparent-cup.jpg?s=2048x2048&w=is&k=20&c=7uFN0YBgFQyujpx1WLIRTrcByk1nRbmpwtFiOeZsG9g='

    },
  ]
function CoffeProducts() {
  const [products, setProduct] = useState([...product])

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-amber-800 text-3xl font-bold text-center mb-12">Coffee Equipment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            products && products.map((i, index) => {
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
    </section>
  )
}

export default CoffeProducts