import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='bg-[#67c7b9] text-black-100/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
          <div className='max-w-80'>
            <img src={assets.logo} alt="AtStay logo" className='mb-4 h-8 md:h-9 invert opacity-80' />
            <p className='text-sm'>
              AtStay is your gateway to exclusive and luxurious accommodations around the world. Discover unique stays, personalized service, and unforgettable experiences with us.
            </p>
            <div className='flex items-center gap-3 mt-4'>
              <a href="#" aria-label="Visit our Instagram" className="hover:opacity-70 transition-opacity">
                <img src={assets.instagramIcon} alt='Instagram' className='w-6' />
              </a>
              <a href="#" aria-label="Visit our Facebook" className="hover:opacity-70 transition-opacity">
                <img src={assets.facebookIcon} alt="Facebook" className='w-6' />
              </a>
              <a href="#" aria-label="Visit our Twitter" className="hover:opacity-70 transition-opacity">
                <img src={assets.twitterIcon} alt="Twitter" className='w-6' />
              </a>
              <a href="#" aria-label="Visit our LinkedIn" className="hover:opacity-70 transition-opacity">
                <img src={assets.linkendinIcon} alt="LinkedIn" className='w-6' />
              </a>
            </div>
          </div>

          <div>
            <p className='font-playfair text-lg text-gray-800'>COMPANY</p>
            <ul className='mt-3 flex flex-col gap-2 text-sm'>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/press">Press</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="">Partners</a></li>
            </ul>
          </div>

          <div>
            <p className='font-playfair text-lg text-gray-800'>SUPPORT</p>
            <ul className='mt-3 flex flex-col gap-2 text-sm'>
              <li><a href="/help-center">Help Center</a></li>
              <li><a href="safety-information">Safety Information</a></li>
              <li><Link to="/refund-policy">Cancellation Options</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="/accessibility">Accessibility</a></li>
            </ul>
          </div>

          <div className='max-w-80'>
            <p className='font-playfair text-lg text-gray-800'>STAY UPDATED</p>
            <p className='mt-3 text-sm'>
              Subscribe to our newsletter for inspiration and special offers.
            </p>
            <div className='flex items-center mt-4'>
              <input type="email" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
              <button aria-label="Subscribe" className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                <img src={assets.arrowIcon} alt="" className='w-3.5 invert' />
              </button>
            </div>
          </div>
        </div>

        <hr className='border-gray-300 mt-8' />

        <div className='flex flex-col md:flex-row gap-3 items-center justify-between py-5'>
          <p>© {new Date().getFullYear()} AtStay. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-5 md:gap-8 text-base text-gray-800">
            <Link to="/privacy-policy" className="hover:text-orange-600 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-orange-600 transition">Terms & Conditions</Link>
            <Link to="/refund-policy" className="hover:text-orange-600 transition">Refund Policy</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer