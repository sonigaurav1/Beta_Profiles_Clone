import React from 'react'
import NewsInfoCard from './NewsInfoCard'
import { iOS18Logo, iOS18SiriLogo } from '@/utils'
import CTACard from './CTACard'
import OS from './OS'

const Cards = () => {
    return (
        <section className="common-padding flex flex-col items-center pt-28">
            <div className="flex w-full pb-10">
                <NewsInfoCard
                    logo={iOS18Logo}
                    title="What’s New in iOS 18 Beta?"
                    subTitle="Just updated to iOS 18 Beta? Discover over 60+ new features and changes in this update."
                    href="#1"
                />
                <NewsInfoCard
                    logo={iOS18SiriLogo}
                    title="How to enable New Siri UI"
                    subTitle="Want to try out the new Siri user interface in iOS 18 Beta? Follow these steps to enable it on your device."
                    href="#"
                />
            </div>

            <CTACard />

            <OS />
        </section>
    )
}

export default Cards
