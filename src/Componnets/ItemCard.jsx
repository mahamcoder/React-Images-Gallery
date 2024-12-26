import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaTrashArrowUp } from "react-icons/fa6";

const ItemCard = () => {
  return (
    <>
    <div className='flex  mt-6 shadow-md p-3 rounded-lg'>
      <div className='w-[20%]'>
        <img src="/images/girl2.jpg" alt="" srcset="" className='w-[50px] h-[50px] object-cover rounded-full' />
      </div>
      <div className='w-full'>
        <div className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold'>
          Summer
        </h3>
        <FaTrashArrowUp />
        </div>
        <div className='flex justify-between items-center mt-1'>
          <p className='text-lg text-[#A64D79] font-bold'>&300</p>
          <div className='flex items-center  gap-2 absolute right-7'>
          <FaPlus  className='p-1 border-2 text-2xl rounded-lg hover:border-none hover:bg-[#A64D79] hover:text-white transition-all ease-linear duration-300 cursor-pointer border-[#A64D79]'/>
          <span>2</span>
          <FaMinus className='p-1 border-2 text-2xl rounded-lg hover:border-none hover:bg-[#A64D79] hover:text-white transition-all ease-linear duration-300 cursor-pointer border-[#A64D79]' />
          </div>
          <div>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default ItemCard
