import React from 'react'
import { IoStar } from "react-icons/io5";

const Card = ({Data}) => {
    return (
        <div className='w-64 flex  flex-col flex-shrink-0 items-center'>
            <div className='w-full h-80 rounded-[20px] overflow-hidden'>
                <img className='w-full h-full object-cover rounded-[20px] hover:scale-110 hover:grayscale-[50%] duration-300 transition-all'  src={Data.imageUrl} alt="" srcset="" />
            </div>
            <div className='w-full flex items-center justify-between mt-2'>
                <h2 className='text-lg font-bold'>{Data.title}</h2>
                <span className='text-[#A64D79] font-semibold'>{Data.price}</span>
            </div>
            <div className='w-full flex items-center justify-between mt-2'>
                <div className='flex items-center gap-2 text-lg'> <IoStar className='inline text-yellow-300 ' /> {Data.rating}</div>
                <div>
                    <button className='px-5 py-1 bg-gray-500 rounded-lg hover:bg-[#A64D79] duration-100'>
                        Add to cart
                    </button>
                </div>
            </div>


        </div>

    )
}

export default Card
