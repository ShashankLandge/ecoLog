'use client'

import React from 'react'

export default function Events() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="w-full">
      
      <section className="relative overflow-hidden pt-3">
        <div className="relative">
          <div className="mx-auto max-w-xl lg:max-w-7xl">
            <div className="mx-auto mb-7 max-w-2xl text-center">
              
              <h1 className="text-3xl font-bold">Events taking place near you</h1>
            </div>
            <div className="my-18 -mx-4 flex flex-wrap px-4">
              <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/2">
                <a className="group block w-full" href="#">
                  <img
                    className="mb-5 block w-full rounded-lg"
                    src="https://gauvinsgreen.com/wp-content/uploads/2023/01/5.1-770x428.png"
                    alt=""
                  />
                  <span className="mb-2 block text-gray-500">Apr 20, 2024</span>
                  <h4 className="mb-3 text-3xl font-semibold text-gray-900">
                  E-Waste Collection Event :   <p className='text-slate-500 text-base pt-2'>Location :-  Katraj Pune Maharashtra</p>
                  </h4>
                  <p className="max-w-xl text-lg text-gray-500">
                    Its an competition open for everybody, with amazing price pool winner gets up to 10,000 Rupees.
                  </p>
                </a>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <a className="group mb-8 md:flex" href="#">
                  <img
                    className="h-40 w-48 rounded-lg"
                    src="https://www.cityofbowie.org/ImageRepository/Document?documentId=18955"
                    alt=""
                  />
                  <div className=" md:ml-6 md:mt-0">
                    <span className="mb-2 block text-gray-500">Apr 29, 2024</span>
                    <h4 className="text-xl font-semibold text-gray-900">
                    Upcycling Workshops: <p className='text-base text-gray-700'>Participants can learn how to repurpose waste materials</p> <p className='text-slate-500 text-base pt-2'>Location:- Swar Gate Pune</p>
                    </h4>
                  </div>
                </a>
                <a className="group mb-8 md:flex" href="#">
                  <img
                    className="h-40 w-48 rounded-lg"
                    src="https://unhabitatmyanmar.org/wp-content/uploads/2023/06/IMG_E6238-scaled.jpg"
                    alt=""
                  />
                  <div className="my-4 pt-2 md:ml-6 md:mt-0">
                    <span className="mb-2 block text-gray-500">May 5, 2024</span>
                    <h4 className="text-xl font-semibold text-gray-900">
                    Waste Cleanup Campaigns: <p className='text-base text-gray-700'>Events aimed at cleaning up litter and waste from public spaces such as parks, beaches, and streets.</p> <p  className='text-slate-500 text-base pt-2'>Location:- Vadgaon Budruk Pune</p>
                    </h4>
                  </div>
                </a>
                <a className="group mb-8 md:flex" href="#">
                  <img
                    className="h-40 w-48 rounded-lg"
                    src="https://apicms.thestar.com.my/uploads/images/2023/06/18/2130271.jpg"
                    alt=""
                  />
                  <div className="my-4 pt-2 md:ml-6 md:mt-0">
                    <span className="mb-2 block text-gray-500">May 28, 2022</span>
                    <h4 className="text-xl font-semibold text-gray-900">
                    Recycling Drives:  <p className='text-base text-gray-700'>Members can drop off recyclable materials such as paper, plastic, glass, and metal for proper recycling.</p>  <p  className='text-slate-500 text-base pt-2'>Location :- Khau gali Pune</p>
                    </h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="mt-14 text-center">
              <button
                type="button"
                className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                View All Posts
              </button>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-8" />
      {/* Footer */}
        </div>
  )
}
