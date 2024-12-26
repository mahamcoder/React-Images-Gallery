import React from 'react'
import { IoMdClose } from "react-icons/io";
import ItemCard from './ItemCard';

const Cart = () => {
  return (
    <>
      <div className='fixed top-0 right-0 bg-gray-300 w-[30%] h-full text-black p-6'>
        <div className='flex justify-between'>
            <h1 className='text-xl font-semibold'>My Order</h1>
            <IoMdClose  className='text-3xl p-1 border-[0.5px] border-[#A64D79] rounded-lg'/>
        </div>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <div className='absolute bottom-0 mb-7'>
          <h3 className='mb-1 text-lg font-semibold'>items:</h3>
          <h3 className='mb-1 text-lg font-semibold'>Total Amount:</h3>
          <button className='text-xl bg-[#A64D79] w-[25vw] py-2 rounded-lg text-white ' >
            Checkout
          </button>
        </div>

      </div>
    </>
  )
}

export default Cart
