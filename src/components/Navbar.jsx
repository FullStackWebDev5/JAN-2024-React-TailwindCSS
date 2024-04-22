import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center px-10 py-5 hover: cursor-pointer'>
      <h1 className='text-4xl font-semibold text-[#00df9a]'>NewsApp</h1>
      <ul className='flex'>
        <li className='px-3 text-lg text-[#D3D3D3] font-semibold'>About</li>
        <li className='px-3 text-lg text-[#D3D3D3] font-semibold'>Contact</li>
        <li className='px-3 text-lg text-[#D3D3D3] font-semibold'>SignUp</li>
        <li className='px-3 text-lg text-[#D3D3D3] font-semibold'>Login</li>
      </ul>
    </div>
  )
}

export default Navbar