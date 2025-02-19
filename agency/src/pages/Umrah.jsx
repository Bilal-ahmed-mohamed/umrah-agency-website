import React from 'react'
import img2 from '../assets/img1.jpg';
import img3 from '../assets/img6.jpg';
import img4 from '../assets/img4.jpg';
const Umrah = () => {
  return (
    <div>
     
     <div class="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-500 px-6 sm:py-20 py-10 font-[sans-serif]">
      <div class="max-w-screen-xl mx-auto text-center text-white">
        <h1 class="text-5xl max-sm:text-3xl font-extrabold leading-tight mb-6">Welcome to Our Premium Service</h1>
        <p class="text-lg mb-12">Experience excellence like never before with our exclusive products and services.</p>
        <button type="button" class="bg-blue-600 text-white text-lg tracking-wide px-8 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl">Get Started</button>
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