import React from 'react'
import img2 from '../assets/img1.jpg';
import img3 from '../assets/img6.jpg';
import img4 from '../assets/img4.jpg';
import cta from '../assets/cta.jpg';
const Umrah = () => {
  return (
    <div>
     
     <div
                  className="w-full h-[600px] bg-center bg-cover"
                  style={{ backgroundImage: `url(${img3})` }}>
            
                    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-900/40">
                    <h1 className="  text-2xl text-white mb-7 lg:text-5xl"> Umrah Booking </h1> 
                    <h2 className=" text-2xl text-white lg:text-xl">With 20+ years of expertise, advanced ticketing, trusted partners, and Ministry authorization, we craft seamless pilgrimage packages</h2>
                    </div>
            
                </div>

    <section class="text-center py-12 bg-gray-100">
    <h2 class="text-3xl font-bold text-stone-700 mb-8">SERVICES WE OFFER</h2>
    <div class="flex flex-wrap justify-center gap-6">
        
        {/* <!-- Airline Ticket Card --> */}
        <div class="max-w-md bg-white border border-gray-300 rounded-lg lg:max-w-sm shadow-md overflow-hidden">
            <a href="#">
                <img class="w-full h-56 object-cover transform transition-transform duration-300 hover:scale-105" src={img2} alt="Airline Ticket" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="text-xl font-bold text-gray-900 mb-2">Normal Months Umrah </h5>
                </a>
                <p class="text-gray-600 mb-4">Book affordable airline tickets to Makkah and embark on a spiritual journey with convenient flight options from major cities worldwide.</p>
                <a href="#" class="inline-flex items-center px-4 py-2 text-white bg-stone-500 rounded-md  transition-colors">
                Read More
                </a>
            </div>
        </div>
        
        {/* <!-- Accommodation Card --> */}
        <div class="max-w-md bg-white border border-gray-300 rounded-lg lg:max-w-sm shadow-md overflow-hidden">
            
            <a href="#">
                <img class="w-full h-56 object-cover transform transition-transform duration-300 hover:scale-105" src={img4} alt="Accommodation" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="text-xl font-bold text-gray-900 mb-2">Ramadhan Umrah</h5>
                </a>
                <p class="text-gray-600 mb-4">Experience unparalleled comfort and convenience with world-class accommodation options in Makkah, just steps away from the holy sites.</p>
                <a href="#" class="inline-flex items-center px-4 py-2 text-white bg-stone-500 rounded-md  transition-colors">
                    Read More
                </a>
            </div>
        </div>
        
        {/* <!-- Hajj & Umrah Card --> */}
        <div class="max-w-md bg-white border border-gray-300 rounded-lg lg:max-w-sm shadow-md overflow-hidden">
            <a href="#">
                <img class="w-full h-56 object-cover transform transition-transform duration-300 hover:scale-105" src={img3} alt="Hajj & Umrah" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="text-xl font-bold text-gray-900 mb-2">Hajj & Umrah</h5>
                </a>
                <p class="text-gray-600 mb-4">Our agency ensures a smooth journey to Makkah with personalized packages, expert guidance, and full support for your Umrah or Hajj pilgrimage.</p>
                <a href="#" class="inline-flex items-center px-4 py-2 text-white bg-stone-500 rounded-md  transition-colors">
                Read More
                </a>
            </div>
        </div>
    </div>
</section>

    </div>
  )
}

export default Umrah