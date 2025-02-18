import React from 'react'
import img1 from '../assets/img5.jpg';
const About = () => {
  return (
    <div>

         <div class="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-500 px-6 sm:py-20 py-10 font-[sans-serif]">
      <div class="max-w-screen-xl mx-auto text-center text-white">
        <h1 class="text-5xl max-sm:text-3xl font-extrabold leading-tight mb-6">Welcome to Our Premium Service</h1>
        <p class="text-lg mb-12">Experience excellence like never before with our exclusive products and services.</p>
        <button type="button" class="bg-blue-600 text-white text-lg tracking-wide px-8 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl">Get Started</button>
      </div>
    </div>

    <section className='py-12 '>
        <div className=' bg-cyan-700  w-3/4 mx-auto flex flex-wrap justify-evenly gap-4 border border-red-500 py-5 '>
       
        <div class="w-full max-w-lg h-80 flex flex-col justify-evenly bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <h2 class="mt-2 text-4xl font-semibold text-gray-800 dark:text-white md:mt-0">Who We Are</h2>
                <p class="mt-2   text-gray-600 dark:text-gray-200">Habibullah Agency is a travel agency that focuses on creating lifelong memories and fostering connections through unique experiences. They specialize in Hajj and Umrah packages, vacations, cruises, travel packages, hotel accommodations, car rentals, and more. They have excellent relations with major airlines and offer overnight services, delivering tickets to any address in Kenya. They are your trusted partner in crafting seamless and memorable travel adventures.</p>   
        </div>
        <div class="max-w-lg bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden  h-80">
            <img class="w-full h-96 object-cover transform transition-transform duration-300 hover:scale-105" src={img1} alt="Airline Ticket" />
        </div>

        <div class="max-w-lg bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden  h-80">
            <img class="w-full h-96 object-cover transform transition-transform duration-300 hover:scale-105" src={img1} alt="Airline Ticket" />
        </div>
        <div class="w-full max-w-lg h-80 flex flex-col justify-evenly bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <h2 class="mt-2 text-4xl font-semibold text-gray-800 dark:text-white md:mt-0">Our Commitment </h2>
                <p class="mt-2   text-gray-600 dark:text-gray-200">As a leading travel agency, we take pride in offering a diverse range of travel experiences that cater to every wanderlust-driven soul. Whether you’re a thrill-seeker looking for adventure, a spiritual journey, a culture enthusiast eager to immerse yourself in new traditions, or a leisure traveler seeking relaxation, Marwa Travel & Tours has the perfect itinerary for you.</p>   
        </div>
        </div>
    </section>

    <section className=' bg-amber-400'>
        <div className='  w-3/4   mx-auto  flex flex-wrap justify-evenly  py-5'> 
        <div class="w-full  max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        
        <h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">Unmatched Proficiency</h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">With years of industry experience, our team of travel experts is dedicated to curating journeys that go beyond the ordinary. We understand that every traveler is unique, and our personalized approach ensures that your trip is tailored to your preferences.</p>
        
    </div> 
    <div class="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        
        <h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">Comprehensive Knowledge of the Destination</h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">Embark on a spiritually enriching with Marwa Travel & Tours, where our profound destination knowledge ensures a seamless and culturally rich journey. Our team of experts guides you through the sacred sites with reverence, providing insights into local traditions and customs.</p>
        
    </div>
     <div class="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        
        <h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">Smooth Planning and Implementation</h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-200"> At Habibullah agency, we prioritize your convenience. Our meticulous planning and attention to detail guarantee a hassle-free travel experience. From booking flights and accommodations to organizing guided tours and activities, we handle it all so you can focus on making memories.</p>
        
    </div> 
    <div class="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        
        <h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">Responsible and Sustainable Travel</h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-200">We are committed to promoting sustainable and responsible tourism practices. By partnering with eco-conscious suppliers and supporting local communities, we strive to minimize our environmental impact and contribute positively to the places we visit.</p>
        
    </div>
        </div>
    </section>


    <section className=' bg-fuchsia-800 w-full h-96 ' >
        <div className=' bg-red-600 w-3/4 mx-auto h-96 flex flex-col justify-center items-center'>
            <div className=' bg-indigo-600  h-40 flex flex-col gap-5'>
                <h1 className=' text-3xl'> Our Mission</h1>
                <p className=' text-xl'>To offer people with competent, amiable, experienced professional travel planners comprehensive travel and first-rate customer services at affordable costs. Our primary objective is to provide exceptional customer service and the best prices.</p>
            </div>
            <div className='bg-lime-600  h-40 flex flex-col gap-5'>
                <h1 className=' text-3xl'>Our Vision</h1>
                <p className=' text-xl'>The Habibullah Agency imagines a world in which travel changes people's lives and promotes a greater awareness of the various cultures that contribute to the uniqueness of our planet. Our goal is to serve as the impetus behind your most treasured travel experiences, leaving you with memories to treasure and tales to share.</p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About