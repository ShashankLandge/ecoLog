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
        'https://media.istockphoto.com/id/1135522185/photo/recycling-for-a-healthier-planet.jpg?s=612x612&w=0&k=20&c=2dsZUtv4PnLPNbitWCbjkjKZyoGox3ed_ajY5blWZIY=',
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
        'https://nordsense.com/wp-content/uploads/2022/07/The-Waste-Hierarchy-1024x1024.png',
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
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8lGDQskyI1RND5dsu0MVsLoubekIM_FMZl4XbI9Bhw&s',
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
        'data:image/jpeg;base64,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',
    },
    {
      category: 'Recycle',
      title: 'The Importance of Plastic Recycling for a Cleaner Environment',
      description: 'Explore the significance of recycling plastic and its positive impact on the environment.',
      author: 'Maria Rodriguez',
      date: '22 March 2023',
      avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
      poster:
        'https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2020/07/WasteManagement9.png',
    },
    {
      category: 'Waste Management',
      title: 'Efficient Waste Collection Techniques for Urban Areas',
      description: 'Discover efficient waste collection techniques to keep urban areas clean and hygienic.',
      author: 'Alex Johnson',
      date: '19 March 2023',
      avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
      poster:
        'https://miro.medium.com/v2/resize:fit:612/1*n3eEhYkxne4zfovTbtsgJA.jpeg',
    },
    {
      category: 'Waste Reduction',
      title: 'Minimizing Food Waste: Practical Tips for Every Household',
      description: 'Learn practical tips to minimize food waste and contribute to a sustainable future.',
      author: 'Thomas Lee',
      date: '16 March 2023',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      poster:
        'https://www.shutterstock.com/shutterstock/photos/1165734670/display_1500/stock-vector-reduce-reuse-recycle-waste-garbage-collection-recycling-trash-trash-can-paper-metal-organic-1165734670.jpg',
    },
    {
      category: 'Green Technologies',
      title: 'The Role of Renewable Energy in Sustainable Development',
      description: 'Explore how renewable energy sources can contribute to sustainable development worldwide.',
      author: 'Jessica Kim',
      date: '13 March 2023',
      avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
      poster:
        'https://cdn3.vectorstock.com/i/1000x1000/84/67/recycling-at-home-reuse-reduce-waste-sticker-vector-43488467.jpg',
    },
    {
      category: 'Recycle',
      title: 'Creative Upcycling Ideas to Give New Life to Old Items',
      description: 'Discover creative ways to upcycle old items and reduce waste through recycling.',
      author: 'Michael Johnson',
      date: '10 March 2023',
      avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
      poster:
        'https://inxee.com/blog/wp-content/uploads/2016/02/Green-technology-for-a-much-greener-earth.jpg',
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
            Learn to Recycle waste and waste management  <p className='text-orange-600 '>आत्मनिर्भर भारत</p>
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
