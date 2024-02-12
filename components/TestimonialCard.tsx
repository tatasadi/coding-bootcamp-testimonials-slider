'use client'
import Image from 'next/image'
import React, { useState } from 'react'

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
    <article className="p-6">
      <div className="mx-auto mt-7 h-64 w-64 rounded-lg">
        <Image
          src={current.imgSrc}
          alt={current.name}
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
      <div className="text-center">
        <p className="text-lg font-light leading-6 text-dark-blue">
          {current.text}
        </p>
        <h2 className="text-[0.9375rem] font-bold leading-5 text-dark-blue">
          {current.name}
        </h2>
        <h3 className="text-[0.9375rem] font-medium leading-5 text-grayish-blue">
          {current.role}
        </h3>
      </div>
    </article>
  )
}

export default TestimonialCardComponent
