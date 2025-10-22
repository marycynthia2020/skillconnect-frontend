import React from 'react'

const AboutPage = () => {
  return (
   <section className='w-full'>
      <div className='max-w-[1440px] mx-auto px-5 grid grid-cols-6 gap-4'>
        {/* first div */}
        <div className='col-span-4 '>
          <p className="text-sm font-medium tracking-wider uppercase mb-4 text-[#f38049] ">
            about us
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Our Working <span className="">Process</span>
          </h2>
          <h4 className="text-xl  md:text-2xl  text-balance opacity-70 ">
            We give artisans the visibility they deserve and helps clients find
            trusted talents right in their neighborhood.
          </h4>
        </div>

        {/* image div inside */}
        <div>
          {/* first with etsr */}
          <div className='flex flex-col-reverse md:flex-col gap-4'>
            <h2 className="text-2xl md:text-3xl font-medium capitalize">
            best chooksing
          </h2>
          <p className="text-xl  md:text-2xl  text-balance opacity-70 ">
            verified artisans in your neighborhood who are ready to get your work done promptly and efficiently.
          </p>
          </div>

          {/* second without text */}
        </div>
        {/* second div */}
        <div className='col-span-2'>

        </div>
      </div>
   </section>
  )
}

export default AboutPage