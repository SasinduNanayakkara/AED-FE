import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function TrainList() {
    return (
        <div>
            <Header />
            <div className='flex justify-center'>
            <p className='text-4xl font-bold my-10'>Train List</p>
            </div>
            <Footer />
        </div>
    )
}

export default TrainList