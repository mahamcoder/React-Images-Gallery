import React from 'react'

const Categories = () => {
    return (
        <div className='p-6 mt-6'>
            <h3 className='text-2xl'>Your Style, Our Craft</h3>
           <div className='mt-4 flex gap-4'>
           <button className='text-xl px-5 py-2 bg-gray-500 rounded-lg hover:bg-[#A64D79] duration-100'>
                ALL
            </button>
            <button className='text-xl px-5 py-2 bg-gray-500 rounded-lg hover:bg-[#A64D79] duration-100'>
               Summer
            </button>
            <button className='text-xl px-5 py-2 bg-gray-500 rounded-lg hover:bg-[#A64D79] duration-100'>
               Winter
            </button>
            <button className='text-xl px-5 py-2 bg-gray-500 rounded-lg hover:bg-[#A64D79] duration-100'>
               Shirts
            </button>
            <button className='text-xl px-5 py-2 bg-gray-500 rounded-lg hover:bg-[#A64D79] duration-100'>
              Jeans
            </button>
           </div>
        </div>
    )
}

export default Categories
