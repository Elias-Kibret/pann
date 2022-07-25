import React from 'react'
import {AiOutlineLeft} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import Header from './Header'
import ListOfCourse from './ListOfCourse'
const Welcome = () => {
  return (
    <div className='my-6 mx-8 text-black'>
        <div className='text-white fon'><AiOutlineLeft size={25}/></div> 
        <div className='flex flex-col items-center '>
        <h1 className=' text-4xl font-bold mt-6'>Hello Pann</h1> 
                <p className='my-2'>what do you want to learn</p>
                <div className='relative'>
                    <input type='search' className='px-16 shadow-xl py-2 rounded-full'/>
                    <BiSearch size={20} className='absolute top-3 left-3'/>
                </div>
                <div>
                    <Header/>
                </div>

            </div> 
            <div>
            <h1 className='font-bold text-2xl'>Course</h1>
            <div>
                <ListOfCourse/>
            </div>
        </div>
    
    </div>
  )
}

export default Welcome