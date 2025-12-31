'use client'

// src/components/Carrusel.jsx
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Carrusel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex(
            prevIndex => (prevIndex - 1 + images.length) % images.length,
        )
    }

    const goToSlide = index => {
        setCurrentIndex(index)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(interval)
    }, [currentIndex])

    return (
        <div
            id='default-carousel'
            className='relative w-full'
            data-carousel='slide'
        >
            <div className='relative h-56 overflow-hidden rounded-2xl border border-triskgold/20 bg-black/30 shadow-lg md:h-[26rem]'>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute h-full w-full transition-opacity duration-700 ease-in-out ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        data-carousel-item
                    >
                        <Image
                            src={image}
                            className='block h-full w-full object-cover'
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
            <div className='absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse'>
                {images.map((_, index) => (
                    <button
                        key={index}
                        type='button'
                        className={`h-3 w-3 rounded-full border border-triskgold/50 ${
                            index === currentIndex ? 'bg-triskgold' : (
                                'bg-white/30'
                            )
                        }`}
                        aria-current={index === currentIndex}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>
            <button
                type='button'
                className='group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none'
                onClick={prevSlide}
            >
                <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-triskgold/20 group-hover:bg-triskgold/40 group-focus:outline-none group-focus:ring-4 group-focus:ring-triskgold/50'>
                    <svg
                        className='h-4 w-4 text-white rtl:rotate-180'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 6 10'
                    >
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M5 1 1 5l4 4'
                        />
                    </svg>
                    <span className='sr-only'>Previous</span>
                </span>
            </button>
            <button
                type='button'
                className='group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none'
                onClick={nextSlide}
            >
                <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-triskgold/20 group-hover:bg-triskgold/40 group-focus:outline-none group-focus:ring-4 group-focus:ring-triskgold/50'>
                    <svg
                        className='h-4 w-4 text-white rtl:rotate-180'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 6 10'
                    >
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='m1 9 4-4-4-4'
                        />
                    </svg>
                    <span className='sr-only'>Next</span>
                </span>
            </button>
        </div>
    )
}
