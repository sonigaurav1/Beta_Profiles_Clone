/* eslint-disable react/prop-types */
import React from 'react'

const NewsInfoCard = ({ logo, title, subTitle, href }) => {
    return (
        <article className="mx-3 flex w-1/2 items-center gap-12 rounded-xl bg-gray-bg px-12 py-8">
            <img src={logo} alt="" className="size-24" />
            <div className="">
                <h1 className="bold-text mb-2">{title}</h1>
                <p className="news-small-text mb-4 font-normal">{subTitle}</p>
                <button className="blue-btn">
                    Learn more
                </button>
            </div>
        </article>
    )
}

export default NewsInfoCard
