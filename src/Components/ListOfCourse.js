import React,{useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"
import { courses } from '../Assets/Image/courses'
const ListOfCourse = (props) => {
    const navigate = useNavigate()
    const [sorted,setSorted]=useState([courses])
const handleRoute=(type)=>{
    console.log(type)
    if(type==="Visual"){
        navigate("/visual")
    }
    else if(type==="Audio")
    {
        navigate("/audio")
    }
    else if(type==="Kinesthetic"){
        navigate("/Kinesthetic")
    }


}
    
useEffect(()=>{
    let item=[];
    item=courses.filter((items,index)=>{
        
        if(props.data==='All' ){
            return items
        }
        else{
            return items.category===props.data 
        }
    }    
    )
     if(props.search.length!==0){
        setSorted(props.search)
        
     }
     else{
         setSorted(item)
     }
   
},[props.data,props.search])


  return (
    <div  className='mx-4' >
        {
            sorted.map((item,index)=>{
                return(
                    <div key={item+index} className='bg-white px-4 py-6 my-4 rounded-lg flex'onClick={()=>handleRoute(item.type)}>
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