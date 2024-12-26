import React from 'react'

const Navbar = () => {
    return (
        <nav className='p-6 flex justify-between items-center'>
            <div>
                <h3 className='text-2xl'>{new Date().toUTCString().slice(0, 16)}</h3>
                <h1 className='text-6xl mt-4'>Style Sphere</h1>
            </div>
            <div>
                <input type="search" name="search" id="" autoComplete='off' className='w-96 p-2 rounded-lg bg-[#EBEAFF] text-xl text-slate-950 outline-none ' placeholder='Search here' />
            </div>

        </nav>
    )
}

export default Navbar
