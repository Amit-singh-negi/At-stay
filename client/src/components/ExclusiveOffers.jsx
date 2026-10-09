import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
  // Show offers only if you have real, current ones
  if (!exclusiveOffers.length) return null

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-32'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <Title
          align='left'
          title='Exclusive Offers'
          subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'
        />
        <Link
          to='/rooms'
          onClick={() => window.scrollTo(0, 0)}
          className='group flex items-center gap-2 font-medium max-md:mt-12'
        >
          View All Offers
          <img src={assets.arrowIcon} alt='' className='group-hover:translate-x-1 transition-all' />
        </Link>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className='group relative flex flex-col items-start justify-between gap-1 pt-16 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center overflow-hidden'
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Dark gradient so the text stays readable */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />

            <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full'>
              {item.priceOff}% OFF
            </p>

            <div className='relative'>
              <p className='text-2xl font-medium font-playfair'>{item.title}</p>
              <p>{item.description}</p>
              {item.expiryDate && (
                <p className='text-xs text-white/80 mt-3'>Expires {item.expiryDate}</p>
              )}
            </div>

            <Link
              to='/rooms'
              onClick={() => window.scrollTo(0, 0)}
              className='relative flex items-center gap-2 font-medium mt-4 mb-5'
            >
              View Offers
              <img className='invert group-hover:translate-x-1 transition-all' src={assets.arrowIcon} alt='' />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExclusiveOffers