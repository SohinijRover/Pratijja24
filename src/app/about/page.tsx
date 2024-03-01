import React from 'react'
import Navbar from '@/components/Navbar'
import AboutPratijja from '@/components/about/AboutPratijja'
import AboutKiiT from '@/components/about/AboutKiiT'
import AboutFounder from '@/components/about/AboutFounder'

import "../../components/css/about.css"
import Footer from '@/components/Footer'

export default function page() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='aboutMain'>
                ABOUT US
            </div>
            <AboutPratijja />
            <AboutKiiT />
            <AboutFounder />
            <Footer />
        </>
    )
}
