import React from 'react'

const Header = () => {
    const nav=['All','Easy', 'Intermediate','Advanced']
  return (
    <div>
        <nav className='w-full'>
            <ul className='flex justify-between px-24 w-full my-7 text-1xl font-semibold text-gray-300 '>
                {
                    nav.map((item,index)=>{
                        return (
                            
                            <li className='mx-5'>{item}</li>
                            
                        )
                    })
                }
            </ul>
        </nav>
    </div>
  )
}

export default Header