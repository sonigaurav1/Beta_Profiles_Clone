import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import HowToUse from './components/HowToUse'
import Footer from './components/Footer'

function App() {
    useEffect(()=>{
        if(window.innerWidth < 1000){
            alert("This website is a clone of https://betaprofiles.dev. Made for laptop viewport only not available in mobile viewport now.")
        }
    },[])
    return (
        <>
            <Navbar />
            <Hero />
            <Cards />
            <HowToUse />
            <Footer />
        </>
    )
}

export default App
