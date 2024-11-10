import React from 'react'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-black'>
      <div className='text-center'>
        <p className='heading_mini'>In-demand services</p>
        <h1 className="heading_primary">
          Optimal <span className='text-cyan-600'>Pricing</span> Strategies for You
        </h1>
      </div>
      <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center pt-[4rem] md:pt-[7rem]'>
        <PriceCard
          plane="Basic"
          price="15$"
          save="25%"
          bg="bg-yellow-700"
        />
        <PriceCard
          plane="Popular"
          price="25$"
          save="25%"
          bg="bg-red-900"
        />
        <PriceCard
          plane="Premium"
          price="35$"
          save="25%"
          bg="bg-blue-900"
        />
      </div>
    </div>
  )
}

export default Price