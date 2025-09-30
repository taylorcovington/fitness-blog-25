"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/fathernson.jpeg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

function getVisibleCount() {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth < 640) return 1
  if (window.innerWidth < 1024) return 2
  if (window.innerWidth < 1280) return 3
  return 5 // show all on xl
}

export default function Photos() {
  const images = [image1, image2, image3, image4, image5]
  const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  const [visibleCount, setVisibleCount] = useState(getVisibleCount())
  const [randomIndex, setRandomIndex] = useState(0)

  useEffect(() => {
    function handleResize() {
      setVisibleCount(getVisibleCount())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (visibleCount === 1) {
      setRandomIndex(Math.floor(Math.random() * images.length))
    }
  }, [visibleCount, images.length])

  let visibleImages
  if (visibleCount === 1) {
    visibleImages = [images[randomIndex]]
  } else {
    visibleImages = images.slice(0, visibleCount)
  }

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {visibleImages.map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-9/10 w-full sm:w-[48%] md:w-[32%] lg:w-72 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 1280px) 18rem, (min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
