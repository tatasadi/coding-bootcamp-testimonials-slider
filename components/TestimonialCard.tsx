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
      <div className="relative w-full p-6">
        <div className="mx-auto h-[19.25rem] w-[20.4375rem] bg-[url('/images/pattern-bg.svg')] bg-contain bg-no-repeat pt-7">
          <div className="relative z-10 mx-auto h-[16rem] w-[16rem] rounded-lg shadow-lg">
            <Image
              src={current.imgSrc}
              alt={current.name}
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="relative z-20 -mt-[1.125rem] flex h-10 justify-center">
            <button className="flex w-10 items-center justify-center rounded-l-full bg-white shadow-lg">
              <Image src={iconPrev} alt="Previous" width={10} height={10} />
            </button>
            <button className="flex w-10 items-center justify-center rounded-r-full bg-white shadow-lg">
              <Image src={iconNext} alt="Previous" width={10} height={10} />
            </button>
          </div>
        </div>
      </div>
      <div className="relative mt-8 ">
        <div className="absolute -top-[1.5625rem] flex w-full justify-center">
          <Image
            src={patternQuotes}
            alt="pattern Quotes"
            width={60}
            height={50}
          />
        </div>
        <div className="px-7 text-center">
          <p className="text-lg font-light leading-6 text-dark-blue">
            {current.text}
          </p>
          <h2 className="mt-5 text-[0.9375rem] font-bold leading-5 text-dark-blue">
            {current.name}
          </h2>
          <h3 className="text-[0.9375rem] font-medium leading-5 text-grayish-blue">
            {current.role}
          </h3>
        </div>
      </div>
      <Image
        src={patternCurve}
        alt="pattern Curve"
        className="relative bottom-0 left-0"
        width={285}
        height={72}
      />
    </article>
  )
}

export default TestimonialCardComponent
