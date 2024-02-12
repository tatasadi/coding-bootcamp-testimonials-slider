'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import iconPrev from '@/public/images/icon-prev.svg'
import iconNext from '@/public/images/icon-next.svg'
import patternQuotes from '@/public/images/pattern-quotes.svg'
import patternCurve from '@/public/images/pattern-curve.svg'

const cards = [
  {
    imgSrc: '/images/image-tanya.jpg',
    text: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    name: 'Tanya Sinclair',
    role: 'UX Engineer',
  },
  // {
  //   imgSrc: '/images/image-john.jpg',
  //   text: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
  //   name: 'John Tarkpor',
  //   role: 'Junior Front-end Developer',
  // },
]

const TestimonialCardComponent: React.FC = () => {
  const [current, setCurrent] = useState(cards[0])

  return (
    <article className="relative">
      <div className="relative z-10 flex flex-col lg:flex-row">
        <div className="relative w-full p-6 lg:order-2 lg:p-0 lg:pr-[4.5625rem] lg:pt-[3.125rem]">
          <div className="mx-auto h-[19.25rem] w-[20.4375rem] bg-[url('/images/pattern-bg.svg')] bg-contain bg-no-repeat pt-7 lg:h-[41.0625rem] lg:w-[43.5625rem]">
            <div className="relative z-10 mx-auto h-[16rem] w-[16rem] rounded-lg shadow-lg lg:mx-0 lg:ml-[4.0625rem] lg:mt-[2.1rem] lg:h-[33.75rem] lg:w-[33.75rem] lg:shadow-2xl">
              <Image
                src={current.imgSrc}
                alt={current.name}
                width={540}
                height={540}
                className="rounded-lg"
              />
            </div>
            <div className="relative z-20 -mt-[1.125rem] flex h-10 justify-center lg:-mt-[1.65rem] lg:ml-[7.9375rem] lg:h-14 lg:justify-start">
              <button className="flex w-10 items-center justify-center rounded-l-full bg-white shadow-lg lg:w-14 lg:shadow-2xl">
                <Image src={iconPrev} alt="Previous" width={10} height={10} />
              </button>
              <button className="flex w-10 items-center justify-center rounded-r-full bg-white shadow-lg lg:w-14 lg:shadow-2xl">
                <Image src={iconNext} alt="Previous" width={10} height={10} />
              </button>
            </div>
          </div>
        </div>
        <div className="relative mt-8 lg:order-1 lg:mt-[17.375rem]">
          <div className="absolute -top-[1.5625rem] flex w-full justify-center lg:-top-16 lg:ml-[16.25rem] lg:justify-start">
            <div className="h-[3.125rem] w-[3.75rem] lg:h-[6.25rem] lg:w-[7.5rem]">
              <Image
                src={patternQuotes}
                alt="pattern Quotes"
                width={120}
                height={100}
              />
            </div>
          </div>
          <div className="px-7 text-center lg:p-0">
            <p className="relative z-20 text-lg font-light leading-6 text-dark-blue lg:ml-[2.2rem] lg:translate-x-[8.125rem] lg:text-left lg:text-[2rem] lg:leading-[2.75rem]">
              {current.text}
            </p>
            <div className="flex flex-col items-center lg:ml-[10.3125rem] lg:mt-8 lg:flex-row lg:gap-2">
              <h2 className="mt-5 text-[0.9375rem] font-bold leading-5 text-dark-blue lg:mt-0 lg:text-xl lg:leading-[2.375rem]">
                {current.name}
              </h2>
              <h3 className="text-[0.9375rem] font-medium leading-5 text-grayish-blue lg:text-xl lg:leading-[2.375rem]">
                {current.role}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bottom-0 left-0 z-0 h-[4.5rem] w-[17.8125rem] lg:h-[9.4375rem] lg:w-[38.125rem] lg:-translate-y-16">
        <Image
          src={patternCurve}
          alt="pattern Curve"
          width={610}
          height={151}
        />
      </div>
    </article>
  )
}

export default TestimonialCardComponent
