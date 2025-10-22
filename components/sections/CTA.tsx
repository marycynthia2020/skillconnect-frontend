import React from 'react'
import GetStartedButton from '../GetStartedButton'

const CTA = () => {
  return (
     <section className="w-full mt-10 md:mt-20 py-10 ">
        <div className="mx-auto max-w-[1440px] text-center space-y-8 px-5">

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-balance capitalize">
            Ready to Find your first client or hire an artisan?
          </h2>

          {/* CTA Description */}
          <p className="text-lg leading-relaxed max-w-2xl mx-auto opacity-50">
            Join a community where skills meet opportunity. Whether you're hiring or offering your craft, SkillConnect gets you started fast.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center pt-4 sm:max-w-[300px] mx-auto  ">
           <GetStartedButton />
          </div>

          {/* Optional: Accent line with orange */}
          <div className="flex justify-center pt-8">
            <div className="w-16 h-1 bg-[#000c54] rounded-full"></div>
          </div>
        </div>
      </section>
  )
}

export default CTA