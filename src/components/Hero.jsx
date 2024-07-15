import React from 'react'
import { OSLists } from '@/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Highlight from './Highlight'

const Hero = () => {
    useGSAP(() => {
        gsap.to('.heading', {
            y: 0,
            opacity: 1,
            duration: 1,
            scale: 1,
        })

        gsap.to('.sub-heading', {
            y: 0,
            opacity: 1,
            delay: 1,
            ease: 'power1.inOut',
        })

        gsap.to('#ctaButtons', {
            opacity: 1,
            delay: 1.5,
            scale: 1,
            ease: 'power2.inOut',
        })

        gsap.to('#OSLists', {
            opacity: 1,
            delay: 2,
            scale: 1,
            ease: 'power2.inOut',
        })
    }, [])

    return (
        <section className="pt-14">
            <div className="flex w-full justify-center">
                <div className="mx-2 max-w-max text-center">
                    <h1 className="heading">Download Beta Profiles</h1>
                    <p className="sub-heading mb-8">
                        Get what&apos;s next, now.
                    </p>
                    <div
                        id="ctaButtons"
                        className="flex scale-[5px] items-center justify-center gap-3 py-6 opacity-0"
                    >
                        <button className="gray-btn flex items-center gap-4">
                            Compatibility List
                        </button>
                        <button className="gray-btn flex items-center gap-4">
                            FAQs
                        </button>
                    </div>
                </div>
            </div>

            <div
                id="OSLists"
                className="mb-16 flex scale-[5px] justify-center opacity-0"
            >
                <div className="flex gap-10">
                    {OSLists.map(({ svg: src, name }) => (
                        <span
                            key={name}
                            className="flex flex-col justify-center space-y-4"
                        >
                            <img src={src} alt={name} className="h-10" />
                            <p className="text-small">{name}</p>
                        </span>
                    ))}
                </div>
            </div>

            <Highlight />
        </section>
    )
}

export default Hero
