import React,{useState} from 'react'
import {AiOutlineLeft} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import ListOfCourse from './ListOfCourse'
const Welcome = () => {
    const nav=['All','Easy', 'Intermediate','Advanced']
    const [sort,setSort]=useState('All')
    const [searchTitle, setSearchTitle]=useState("")
 const hanldechange=()=>{
    console.log(e.target.value)
 }
   console.log(searchTitle)
  return (
    <div className='py-10 px-6  bg-[cyan] text-black w-[414px] mx-auto'>
        <div className='text-white fon'><AiOutlineLeft size={25}/></div> 
        <div className='flex flex-col items-center '>
        <h1 className=' text-4xl font-bold mt-6'>Hello Pann</h1> 
                <p className='my-2'>what do you want to learn</p>
                <div className='relative'>
                    <input type='search' className='px-16 shadow-xl py-2 rounded-full' onChange={
                       hanldechange()
                    }/>
                    <BiSearch size={20} className='absolute top-3 left-3'/>
                </div>
                <div>
                <div>
                        <nav className='w-full'>
                            <ul className='flex justify-between px-24 w-full my-7 text-1xl font-semibold text-gray-300 '>
                                {
                                    nav.map((item,index)=>{
                                        return (
                            
                                            <button  className='mx-5 text-black' onClick={()=>{setSort(item)}}>{item}</button>
                            
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                </div>

            </div> 
            <div>
            <h1 className='font-bold text-2xl'>Course</h1>
            <div>
           <ListOfCourse data={sort} search={searchTitle} />
            </div>
        </div>
    
    </div>
  )
}

export default Welcome