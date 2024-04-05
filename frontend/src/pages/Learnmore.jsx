'use client'

import React from 'react'


const posts = [
    {
      category: 'Recycle',
      title: '10 Tips for Effective Recycling at Home',
      description: 'Discover practical ways to recycle efficiently and reduce waste in your household.',
      author: 'Thomas Lee',
      date: '3 April 2023',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      poster:
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
    },
    {
      category: 'Waste Management',
      title: 'Strategies for Implementing Sustainable Waste Management Practices',
      description:
        'Learn effective strategies for managing waste sustainably and creating healthier communities.',
      author: 'John Smith',
      date: '1 April 2023',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      poster:
        'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    },
    {
      category: 'Waste Reduction',
      title: 'Reducing Waste in the Workplace: Practical Tips for Businesses',
      description:
        'Discover practical tips and strategies for businesses to reduce waste and promote sustainability.',
      author: 'Sarah Brown',
      date: '28 March 2023',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      poster:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
    {
      category: 'Green Technologies',
      title: 'Exploring the Latest Green Technologies for Environmental Conservation',
      description:
        'Learn about the latest advancements in green technologies and their impact on environmental conservation.',
      author: 'David Kim',
      date: '25 March 2023',
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
      poster:
        'https://images.unsplash.com/photo-1591228127791-8e2eaefebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
    {
      category: 'Recycle',
      title: 'The Importance of Plastic Recycling for a Cleaner Environment',
      description: 'Explore the significance of recycling plastic and its positive impact on the environment.',
      author: 'Maria Rodriguez',
      date: '22 March 2023',
      avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
      poster:
        'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
    {
      category: 'Waste Management',
      title: 'Efficient Waste Collection Techniques for Urban Areas',
      description: 'Discover efficient waste collection techniques to keep urban areas clean and hygienic.',
      author: 'Alex Johnson',
      date: '19 March 2023',
      avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
      poster:
        'https://images.unsplash.com/photo-1663616132598-e9a1ee3ad186?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
    {
      category: 'Waste Reduction',
      title: 'Minimizing Food Waste: Practical Tips for Every Household',
      description: 'Learn practical tips to minimize food waste and contribute to a sustainable future.',
      author: 'Thomas Lee',
      date: '16 March 2023',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      poster:
        'https://images.unsplash.com/photo-1426260193283-c4daed7c2024?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80',
    },
    {
      category: 'Green Technologies',
      title: 'The Role of Renewable Energy in Sustainable Development',
      description: 'Explore how renewable energy sources can contribute to sustainable development worldwide.',
      author: 'Jessica Kim',
      date: '13 March 2023',
      avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
      poster:
        'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
    {
      category: 'Recycle',
      title: 'Creative Upcycling Ideas to Give New Life to Old Items',
      description: 'Discover creative ways to upcycle old items and reduce waste through recycling.',
      author: 'Michael Johnson',
      date: '10 March 2023',
      avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
      poster:
        'https://plus.unsplash.com/premium_photo-1663012880499-47f1ca50459d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
  ];
  

export default function Learnmore() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
     
      <div className="mx-auto max-w-7xl px-2 pt-6">
        <div className="flex flex-col space-y-8  ">
          <p className=" text-lg  font-semibold   text-gray-900 md:text-3xl md:leading-10">
            Learn to Recycle waste and waste management  <p className='text-orange-600 '>आत्मनिर्भर बनो</p>
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
          Empowering Sustainability: Recycling for a Greener Future, and Efficient Waste Management for Healthier Communities. Its your responsibility to keep your surrounding clean and recycle the most of it.
          </p>
          <div className="mt-6 flex w-full items-center space-x-2 md:w-1/3">
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="Search  Related  Blogs"
            ></input>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Search
            </button>
          </div>
        </div>
        <div className="mt-3 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row">
          <div className="flex w-full items-end border-b border-gray-300">
            {['Recycle', 'Waste Management ', 'Waste Reduction', 'Green Technologies'].map(
              (filter, index) => (
                <div
                  className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black"
                  key={filter}
                >
                  {filter}
                </div>
              )
            )}
          </div>
        </div>
        {/* posts */}
        <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="border font-medium ">
              <img src={post.poster} className="aspect-video w-full rounded-md" alt="" />
              <div className="min-h-min p-3">
                <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                  #{post.category}
                </p>
                <p className="mt-4 flex-1 text-base font-semibold text-gray-900">{post.title}</p>
                <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                  {post.description}
                </p>
                <div className="mt-4 flex space-x-3 ">
                  <img className="h-full w-10 rounded-lg" src={post.avatar} alt={post.author} />
                  <div>
                    <p className="text-sm font-semibold leading-tight text-gray-900">
                      {post.author}
                    </p>
                    <p className="text-sm leading-tight text-gray-600">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full border-t border-gray-300">
          <div className="mt-2 flex items-center justify-between">
            <div className="hidden md:block">
              <p>
                showing <strong>1</strong> to <strong>10</strong> of <strong>20</strong> results
              </p>
            </div>
            <div className="space-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="mx-auto mt-12 max-w-7xl bg-gray-50">
       
      </div>
    </div>
  )
}
