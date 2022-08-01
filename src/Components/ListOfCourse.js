import React,{useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"
import { courses } from '../Assets/Image/courses'
const ListOfCourse = (props) => {
    const navigate = useNavigate()
    const [sorted,setSorted]=useState([courses])
const handleRoute=(type)=>{
    if(type==="Visual"){
        navigate("/visual")
    }
    if(type==="Video")
    {
        navigate("/audio")
    }
    if(type==="Kinesthetic"){
        navigate("")
    }


}
    
useEffect(()=>{
    let item=[];
    item=courses.filter((items,index)=>{
        if(props.data==='All'){
            return items
        }
        else{
            return items.category===props.data
        }
    }
    
    
    )
    setSorted(item)
},[props.data])

console.log(sorted)

  return (
    <div  className='mx-4' >
        {
            sorted.map((item,index)=>{
                return(
                    <div className='bg-white px-4 py-6 my-4 rounded-lg flex'onClick={()=>handleRoute(item.type)} >

                    
                    <div className='w-[100px] h-100px '>
                    <img src={item.img}/>
                    </div>
                <div className='ml-5'>
                <h3 className='font-bold'>{item.Title}</h3>
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