import React from 'react'
import { Images } from '../Assets/Images'
const ListOfCourse = () => {
    const Img=[Images.learn1,Images.learn2,Images.learn3,Images.learn4,Images.learn5]
    const Description=['Understandind Dementis','How to use tool', 'CPR','CPR',"Hello World"]
  return (
    <div  >
        {
            Img.map((item,index)=>{
                return(
                    <div className='bg-white px-4 py-6 my-4 rounded-lg flex' >

                    
                    <div className='w-[100px] h-100px '>
                    <img src={item}/>
                    </div>
                <div className='ml-5'>
                <h3 className='font-bold'>{Description[index]}</h3>
                <p>Descriptiono of <br/>Courses</p>
                </div>
                </div>
                )
            })
        }
        
        
    </div>
  )
}

export default ListOfCourse