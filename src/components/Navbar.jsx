import React from 'react'
import LanguageSelector from './LanguageSelector'

const Navbar = () => {
  return (
    <div className='container mx-auto my-4 flex justify-between'>
        <img src="./logo.png" alt="" width={120}/>
        <LanguageSelector/>
    </div>
  )
}

export default Navbar